create extension if not exists moddatetime schema extensions;

-- required by earthdistance
create extension if not exists cube schema extensions;

create extension if not exists earthdistance schema extensions;

-- revoke execution by default from public
alter default privileges
revoke
execute on functions
from
  public;

alter default privileges in schema public
revoke
execute on functions
from
  anon,
  authenticated;

comment on schema public is e'@graphql({
  "inflect_names": true,
  "max_rows": 1000
})';

create schema private;

grant usage on schema private to authenticated,
service_role;