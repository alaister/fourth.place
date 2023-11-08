-- Friends
create table
  public.friends (
    "id" uuid not null primary key default gen_random_uuid (),
    "created_at" timestamp with time zone not null default now(),
    "profile_a_id" uuid not null references public.profiles (id) on update cascade on delete cascade,
    "profile_b_id" uuid not null references public.profiles (id) on update cascade on delete cascade,
    unique ("profile_a_id", "profile_b_id")
  );

create index on public.friends ("profile_b_id");

alter table public.friends enable row level security;

create policy select_own_friends on public.friends for
select
  using ("profile_a_id" = auth.uid ());

create policy delete_own_friends on public.friends for delete using ("profile_a_id" = auth.uid ());

revoke all on table public.friends
from
  anon,
  authenticated;

grant
select
,
  delete on table public.friends to anon,
  authenticated;

comment on table public.friends is e'@graphql({
  "name": "Friend",
  "foreign_keys": [
    {
      "local_name": "friendCollection",
      "local_columns": ["profile_b_id"],
      "foreign_name": "profile",
      "foreign_schema": "public",
      "foreign_table": "profiles",
      "foreign_columns": ["id"]
    }
  ]
})';

create function private.handle_deleted_friend () returns trigger as $$
begin
  delete from public.friends f
  where
    f."profile_a_id" = old."profile_b_id"
    and f."profile_b_id" = old."profile_a_id";

  return old;
end;
$$ language plpgsql security definer;

create trigger on_friend_deleted
after delete on public.friends for each row
execute procedure private.handle_deleted_friend ();

-- Friend Requests
create type public.friend_request_state as enum('PENDING', 'CANCELLED', 'REJECTED', 'ACCEPTED');

create table
  public.friend_requests (
    "id" uuid not null primary key default gen_random_uuid (),
    "created_at" timestamp with time zone not null default now(),
    "to_user_id" uuid not null references public.profiles (id) on update cascade on delete cascade,
    "from_user_id" uuid not null default auth.uid () references public.profiles (id) on update cascade on delete cascade,
    "state" public.friend_request_state not null default 'PENDING',
    "actioned_at" timestamp with time zone
  );

create index on public.friend_requests ("to_user_id");

create index on public.friend_requests ("from_user_id");

create unique index on public.friend_requests ("from_user_id", "to_user_id", "state")
where
  ("state" = 'PENDING');

alter table public.friend_requests enable row level security;

create policy select_own_friend_requests on public.friend_requests for
select
  using (
    "to_user_id" = auth.uid ()
    or "from_user_id" = auth.uid ()
  );

create policy send_friend_requests on public.friend_requests for insert
with
  check (
    "from_user_id" = auth.uid ()
    and "to_user_id" <> auth.uid ()
    and "state" = 'PENDING'
  );

create policy cancel_own_friend_requests on public.friend_requests for
update using (
  "from_user_id" = auth.uid ()
  and "state" = 'PENDING'
)
with
  check (
    "from_user_id" = auth.uid ()
    and "state" = 'CANCELLED'
  );

create policy accept_or_reject_friend_requests on public.friend_requests for
update using (
  "to_user_id" = auth.uid ()
  and "state" = 'PENDING'
)
with
  check (
    "to_user_id" = auth.uid ()
    and (
      "state" = 'ACCEPTED'
      or "state" = 'REJECTED'
    )
  );

revoke all on table public.friend_requests
from
  anon,
  authenticated;

grant
select
,
  insert ("to_user_id"),
update ("state") on table public.friend_requests to anon,
authenticated;

comment on table public.friend_requests is e'@graphql({
  "name": "FriendRequest",
  "foreign_keys": [
    {
      "local_name": "receivedFriendRequestCollection",
      "local_columns": ["to_user_id"],
      "foreign_name": "toUser",
      "foreign_schema": "public",
      "foreign_table": "profiles",
      "foreign_columns": ["id"]
    },
    {
      "local_name": "sentFriendRequestCollection",
      "local_columns": ["from_user_id"],
      "foreign_name": "fromUser",
      "foreign_schema": "public",
      "foreign_table": "profiles",
      "foreign_columns": ["id"]
    }
  ]
})';

create function private.handle_new_friend_request () returns trigger as $$
declare
  v_existing_friend public.friends;
  v_reverse_friend_request public.friend_requests;
begin
  -- checks for existing friend
  select * into v_existing_friend from public.friends f
  where
    f."profile_a_id" = new."from_user_id"
    and f."profile_b_id" = new."to_user_id";

  if not v_existing_friend is null then
    raise exception 'Already friends' using errcode = 'EXSTS';
  end if;

  -- checks for reverse friend request
  select * into v_reverse_friend_request from public.friend_requests fr
  where
    fr."from_user_id" = new."to_user_id"
    and fr."to_user_id" = new."from_user_id"
    and fr."state" = 'PENDING';

  if not v_reverse_friend_request is null then
    update public.friend_requests fr
    set
      "state" = 'ACCEPTED',
      "actioned_at" = now ()
    where
      fr.id = v_reverse_friend_request.id or fr.id = new.id;
  end if;

  return new;
end;
$$ language plpgsql security definer;

create function private.handle_friend_request_update () returns trigger as $$
begin
  if new."state" = 'ACCEPTED' then
    insert into public.friends ("profile_a_id", "profile_b_id")
    values (new."from_user_id", new."to_user_id")
    on conflict do nothing;

    insert into public.friends ("profile_a_id", "profile_b_id")
    values (new."to_user_id", new."from_user_id")
    on conflict do nothing;
  end if;

  return new;
end;
$$ language plpgsql security definer;

create trigger on_friend_request_created
after insert on public.friend_requests for each row
execute procedure private.handle_new_friend_request ();

create trigger on_friend_request_updated
after
update on public.friend_requests for each row
execute procedure private.handle_friend_request_update ();

create trigger friend_requests_actioned_at before
update on public.friend_requests for each row
execute procedure moddatetime (actioned_at);

-- Profile Policies
create policy select_friend_requests_profiles on public.profiles for
select
  using (
    "id" = any (
      select
        "to_user_id"
      from
        public.friend_requests
      where
        "from_user_id" = auth.uid ()
    )
    or "id" = any (
      select
        "from_user_id"
      from
        public.friend_requests
      where
        "to_user_id" = auth.uid ()
    )
  );

create policy select_friends_profiles on public.profiles for
select
  using (
    "id" = any (
      select
        "profile_b_id"
      from
        public.friends
      where
        "profile_a_id" = auth.uid ()
    )
  );