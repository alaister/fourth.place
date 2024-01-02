-- User locations
create table
  private.user_locations (
    "id" uuid not null primary key default auth.uid () references auth.users (id) on update cascade on delete cascade,
    "geolocation" earth not null,
    "updated_at" timestamp with time zone not null default now()
  );

create index on private.user_locations using gist ("geolocation");

alter table private.user_locations enable row level security;

create trigger user_locations_updated_at before
update on private.user_locations for each row
execute procedure moddatetime ("updated_at");

create function public.update_user_location ("latitude" float8, "longitude" float8) returns void as $$
  declare
    v_user_id uuid := auth.uid();
  begin
    if v_user_id is not null then
      insert into private.user_locations ("id", "geolocation")
      values (v_user_id, ll_to_earth($1, $2))
      on conflict ("id") do update set "geolocation" = excluded."geolocation";
    end if;
  end;
$$ language plpgsql volatile security definer;

grant
execute on function public.update_user_location (float8, float8) to authenticated;

-- Friend distances
create view
  public.friend_distances as
select
  ul.id as "id",
  earth_distance (ul.geolocation, iul.geolocation) as "distance",
  ul.updated_at as "updated_at"
from
  private.user_locations ul,
  lateral (
    select
      id,
      geolocation
    from
      private.user_locations
    where
      id = auth.uid ()
  ) as iul
where
  ul.id = any (
    select
      f.profile_b_id
    from
      public.friends f
    where
      f.profile_a_id = auth.uid ()
  )
  and ul.id <> iul.id;

revoke all on public.friend_distances
from
  anon,
  authenticated;

grant
select
  on public.friend_distances to authenticated;

comment on view public.friend_distances is e'@graphql({
  "name": "FriendDistance",
  "primary_key_columns": ["id"]
})';

comment on table public.profiles is e'@graphql({
  "name": "Profile",
  "foreign_keys": [
    {
      "local_name": "profile",
      "local_columns": ["id"],
      "foreign_name": "friendDistance",
      "foreign_schema": "public",
      "foreign_table": "friend_distances",
      "foreign_columns": ["id"]
    }
  ]
})';