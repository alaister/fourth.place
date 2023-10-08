create extension if not exists moddatetime schema extensions;

comment on schema public is e'@graphql({
  "inflect_names": true,
  "max_rows": 1000
})';

create schema private;