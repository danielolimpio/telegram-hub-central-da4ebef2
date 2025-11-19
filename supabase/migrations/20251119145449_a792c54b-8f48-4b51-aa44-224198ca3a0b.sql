-- Fix function search path for security
CREATE OR REPLACE FUNCTION public.increment_group_views(group_slug TEXT)
RETURNS INTEGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
  new_views INTEGER;
BEGIN
  UPDATE public.groups
  SET views = views + 1
  WHERE slug = group_slug AND status = 'approved'
  RETURNING views INTO new_views;
  
  RETURN COALESCE(new_views, 0);
END;
$$;

-- Ensure permissions are set
GRANT EXECUTE ON FUNCTION public.increment_group_views(TEXT) TO authenticated, anon;