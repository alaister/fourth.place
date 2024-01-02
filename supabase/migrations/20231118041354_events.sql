-- Events
create type public.event_invite_rule as enum('CREATOR', 'FRIENDS_OF_CREATOR');

create table
  public.events (
    "id" uuid not null primary key default gen_random_uuid (),
    "created_at" timestamp with time zone not null default now(),
    "updated_at" timestamp with time zone not null default now(),
    "creator_id" uuid not null default auth.uid () references public.profiles (id) on update cascade on delete cascade,
    "name" text not null,
    "description" text,
    "invite_rule" public.event_invite_rule not null default 'CREATOR',
    "address" text,
    "geolocation" earth,
    "start_at" timestamp with time zone,
    "end_at" timestamp with time zone
  );

create index on public.events ("creator_id");

create index on public.events using gist ("geolocation");

alter table public.events enable row level security;

create function private.is_event_participant (event_id uuid, profile_id uuid) returns boolean as $$
begin
  return exists (
    select
      1
    from
      public.event_participants ep
    where
      ep.event_id = $1
      and ep.profile_id = $2
  );
end;
$$ language plpgsql security definer;

grant
execute on function private.is_event_participant (uuid, uuid) to authenticated;

create policy select_own_events on public.events as permissive for
select
  to authenticated using ("creator_id" = auth.uid ());

create policy select_participating_events on public.events as permissive for
select
  to authenticated using (private.is_event_participant (id, auth.uid ()));

create policy insert_own_events on public.events as permissive for insert to authenticated
with
  check ("creator_id" = auth.uid ());

create policy update_own_events on public.events as permissive for
update to authenticated using ("creator_id" = auth.uid ())
with
  check ("creator_id" = auth.uid ());

create policy delete_own_events on public.events as permissive for delete to authenticated using ("creator_id" = auth.uid ());

revoke all on table public.events
from
  anon,
  authenticated;

grant
select
,
  insert (
    "name",
    "description",
    "invite_rule",
    "address",
    "geolocation",
    "start_at",
    "end_at"
  ),
update (
  "name",
  "description",
  "invite_rule",
  "address",
  "geolocation",
  "start_at",
  "end_at"
),
delete on table public.events to authenticated;

comment on table public.events is e'@graphql({
  "name": "Event"
})';

create function private.handle_new_event () returns trigger as $$
begin
  insert into public.event_participants ("event_id", "profile_id", "role", "state", "actioned_at")
  values (new."id", new."creator_id", 'HOST', 'ACCEPTED', now());

  return new;
end;
$$ language plpgsql security definer;

create trigger on_event_created
after insert on public.events for each row
execute procedure private.handle_new_event ();

create trigger events_updated_at before
update on public.events for each row
execute procedure moddatetime (updated_at);

-- Event Participants
create type public.event_participant_state as enum('INVITED', 'ACCEPTED');

create type public.event_participant_role as enum('HOST', 'GUEST');

create table
  public.event_participants (
    "id" uuid not null primary key default gen_random_uuid (),
    "created_at" timestamp with time zone not null default now(),
    "event_id" uuid not null references public.events (id) on update cascade on delete cascade,
    "profile_id" uuid not null references public.profiles (id) on update cascade on delete cascade,
    "role" public.event_participant_role not null default 'GUEST',
    "state" public.event_participant_state not null default 'INVITED',
    "actioned_at" timestamp with time zone,
    unique ("event_id", "profile_id")
  );

create index on public.event_participants ("profile_id");

alter table public.event_participants enable row level security;

create policy select_own_event_participants on public.event_participants as permissive for
select
  to authenticated using ("profile_id" = auth.uid ());

create policy select_other_event_participants on public.event_participants as permissive for
select
  to authenticated using (
    exists (
      select
        1
      from
        events
      where
        events.id = "event_id"
    )
  );

create policy must_be_friends_to_insert on public.event_participants as restrictive for insert to authenticated
with
  check (
    exists (
      select
        1
      from
        friends
      where
        profile_a_id = auth.uid ()
        and profile_b_id = "profile_id"
    )
  );

create policy insert_event_creator_event_participants on public.event_participants as permissive for insert to authenticated
with
  check (
    exists (
      select
        1
      from
        public.events e
      where
        e.id = "event_id"
        and e.creator_id = auth.uid ()
    )
  );

create policy insert_friends_of_creator_event_participants on public.event_participants as permissive for insert to authenticated
with
  check (
    exists (
      select
        1
      from
        public.events e
      where
        e.id = "event_id"
        and e.invite_rule = 'FRIENDS_OF_CREATOR'
    )
    and (
      exists (
        select
          1
        from
          public.friends f
        where
          f.profile_a_id = auth.uid ()
          and f.profile_b_id = (
            select
              e.creator_id
            from
              public.events e
            where
              e.id = "event_id"
          )
      )
    )
  );

create policy update_own_event_participants on public.event_participants as permissive for
update to authenticated using ("profile_id" = auth.uid ())
with
  check ("profile_id" = auth.uid ());

create policy event_creator_can_delete_event_participants on public.event_participants as permissive for delete to authenticated using (
  exists (
    select
      1
    from
      public.events e
    where
      e.id = "event_id"
      and e.creator_id = auth.uid ()
  )
);

revoke all on table public.event_participants
from
  anon,
  authenticated;

grant
select
,
  insert ("event_id", "profile_id"),
update ("state"),
delete on table public.event_participants to authenticated;

comment on table public.event_participants is e'@graphql({
  "name": "EventParticipant"
})';

create trigger event_participants_actioned_at before
update on public.event_participants for each row
execute procedure moddatetime (actioned_at);

-- Event Participants Seen Status
create table
  public.event_participant_seen_statuses (
    "id" uuid not null primary key default gen_random_uuid (),
    "event_participant_id" uuid not null references public.event_participants (id) on update cascade on delete cascade,
    "seen_at" timestamp with time zone not null default now()
  );

create index on public.event_participant_seen_statuses ("event_participant_id");

alter table public.event_participant_seen_statuses enable row level security;

create policy select_event_creator_seen_status on public.event_participant_seen_statuses as permissive for
select
  to authenticated using (
    exists (
      select
        1
      from
        public.events e
      where
        e.creator_id = auth.uid ()
        and e.id = (
          select
            ep.event_id
          from
            public.event_participants ep
          where
            ep.id = "event_participant_id"
        )
    )
  );

create policy event_creator_cannot_insert_own_seen_status on public.event_participant_seen_statuses as restrictive for insert to authenticated
with
  check (
    not exists (
      select
        1
      from
        public.events e
      where
        e.creator_id = auth.uid ()
        and e.id = (
          select
            ep.event_id
          from
            public.event_participants ep
          where
            ep.id = "event_participant_id"
        )
    )
  );

create policy insert_own_seen_status on public.event_participant_seen_statuses as permissive for insert to authenticated
with
  check (
    exists (
      select
        1
      from
        public.event_participants ep
      where
        ep.id = "event_participant_id"
        and ep.profile_id = auth.uid ()
    )
  );

revoke all on table public.event_participant_seen_statuses
from
  anon,
  authenticated;

grant
select
,
  insert ("event_participant_id") on table public.event_participant_seen_statuses to authenticated;

comment on table public.event_participant_seen_statuses is e'@graphql({
  "name": "EventParticipantSeenStatus"
})';

-- Profile Policies
create policy select_coparticipating_event_profiles on public.profiles as permissive for
select
  to authenticated using (
    exists (
      select
        1
      from
        public.event_participants ep
      where
        ep.profile_id = "profile_id"
    )
  );