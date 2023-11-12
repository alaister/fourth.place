insert into
  storage.buckets (
    "id",
    "name",
    "owner",
    "public",
    "avif_autodetection",
    "file_size_limit",
    "allowed_mime_types"
  )
values
  (
    'avatars',
    'avatars',
    null,
    true,
    false,
    20971520,
    '{image/*}'
  );

create policy storage_objects_select_policy on storage.objects for
select
  to public -- all roles
  using (bucket_id = 'avatars');

create policy storage_objects_insert_policy on storage.objects for insert to authenticated
with
  check (
    auth.uid () = (string_to_array(name, '/'::text)) [1]::uuid
  );

create function public.update_avatar_path () returns trigger language plpgsql security definer as $$
    declare
        v_user_id uuid = (string_to_array(new.name, '/'::text))[1]::uuid;
    begin
        update public.profiles
        set avatar_path = new.name
        where id = v_user_id;
       
        return new;
    end;
$$;

create trigger on_storage_object_created
after insert on storage.objects for each row when (new.bucket_id = 'avatars')
execute procedure public.update_avatar_path ();