UPDATE public.groups
SET views = floor(random() * 10001 + 5000)::int
WHERE status = 'approved' AND (views IS NULL OR views < 5000);