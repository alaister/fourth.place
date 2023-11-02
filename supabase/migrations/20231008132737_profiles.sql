create table
  public.profiles (
    "id" uuid not null primary key references auth.users (id) on update cascade on delete cascade,
    "created_at" timestamp with time zone not null default now(),
    "name" text not null default 'Anonymous',
    avatar_path text
  );

alter table public.profiles enable row level security;

create policy select_own_profile on public.profiles for
select
  using ("id" = auth.uid ());

create policy update_own_profile on public.profiles for
update using ("id" = auth.uid ());

revoke all on table public.profiles
from
  anon,
  authenticated;

grant
select
  on table public.profiles to anon,
  authenticated;

grant
update ("name") on table public.profiles to anon,
authenticated;

comment on table public.profiles is e'@graphql({"name": "Profile"})';

create function public.preview_profile (id uuid) returns public.profiles as $$
  select * from public.profiles where id = $1;
$$ language sql stable security definer;

create function private.handle_new_user () returns trigger as $$
begin
  insert into public.profiles ("id")
  values (new.id);

  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
after insert on auth.users for each row
execute procedure private.handle_new_user ();

create
or replace function public.viewer () returns public.profiles as $$
  select * from public.profiles where id = auth.uid();
$$ language sql stable;