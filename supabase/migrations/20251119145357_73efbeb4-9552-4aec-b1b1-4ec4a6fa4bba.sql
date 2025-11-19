-- Add views column to groups table
ALTER TABLE public.groups 
ADD COLUMN views INTEGER NOT NULL DEFAULT 0;

-- Create index for better performance on views queries
CREATE INDEX idx_groups_views ON public.groups(views DESC);

-- Create function to increment views
CREATE OR REPLACE FUNCTION public.increment_group_views(group_slug TEXT)
RETURNS INTEGER AS $$
DECLARE
  new_views INTEGER;
BEGIN
  UPDATE public.groups
  SET views = views + 1
  WHERE slug = group_slug AND status = 'approved'
  RETURNING views INTO new_views;
  
  RETURN COALESCE(new_views, 0);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant execute permission to authenticated and anonymous users
GRANT EXECUTE ON FUNCTION public.increment_group_views(TEXT) TO authenticated, anon;