create extension if not exists moddatetime schema extensions;

-- required by earthdistance
create extension if not exists cube schema extensions;

create extension if not exists earthdistance schema extensions;

comment on schema public is e'@graphql({
  "inflect_names": true,
  "max_rows": 1000
})';

create schema private;