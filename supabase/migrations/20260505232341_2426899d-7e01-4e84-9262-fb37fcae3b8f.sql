
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES ('group-thumbnails', 'group-thumbnails', true, 5242880, ARRAY['image/jpeg','image/png','image/webp','image/gif'])
ON CONFLICT (id) DO UPDATE SET public = true, file_size_limit = 5242880, allowed_mime_types = ARRAY['image/jpeg','image/png','image/webp','image/gif'];

CREATE POLICY "Group thumbnails are publicly accessible"
ON storage.objects FOR SELECT
USING (bucket_id = 'group-thumbnails');

CREATE POLICY "Admins can upload group thumbnails"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'group-thumbnails' AND public.has_role(auth.uid(), 'admin'::public.app_role));

CREATE POLICY "Admins can update group thumbnails"
ON storage.objects FOR UPDATE
USING (bucket_id = 'group-thumbnails' AND public.has_role(auth.uid(), 'admin'::public.app_role));

CREATE POLICY "Admins can delete group thumbnails"
ON storage.objects FOR DELETE
USING (bucket_id = 'group-thumbnails' AND public.has_role(auth.uid(), 'admin'::public.app_role));
