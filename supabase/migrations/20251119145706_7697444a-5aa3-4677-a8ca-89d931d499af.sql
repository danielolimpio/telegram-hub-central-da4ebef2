-- Create table for detailed group view statistics
CREATE TABLE public.group_views (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  group_id UUID NOT NULL,
  viewed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.group_views ENABLE ROW LEVEL SECURITY;

-- Allow public to insert view records
CREATE POLICY "Anyone can insert view records"
ON public.group_views
FOR INSERT
WITH CHECK (true);

-- Allow authenticated users to view stats for their own groups
CREATE POLICY "Users can view stats for their own groups"
ON public.group_views
FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM public.groups
    WHERE groups.id = group_views.group_id
    AND groups.user_id = auth.uid()
  )
);

-- Create index for better query performance
CREATE INDEX idx_group_views_group_id ON public.group_views(group_id);
CREATE INDEX idx_group_views_viewed_at ON public.group_views(viewed_at DESC);

-- Add foreign key constraint
ALTER TABLE public.group_views
ADD CONSTRAINT fk_group_views_group_id
FOREIGN KEY (group_id)
REFERENCES public.groups(id)
ON DELETE CASCADE;

-- Update the increment function to also log detailed views
CREATE OR REPLACE FUNCTION public.increment_group_views(group_slug TEXT, user_agent_str TEXT DEFAULT NULL)
RETURNS INTEGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
  new_views INTEGER;
  target_group_id UUID;
BEGIN
  -- Get group ID and increment views
  UPDATE public.groups
  SET views = views + 1
  WHERE slug = group_slug AND status = 'approved'
  RETURNING views, id INTO new_views, target_group_id;
  
  -- Insert detailed view record if group was found
  IF target_group_id IS NOT NULL THEN
    INSERT INTO public.group_views (group_id, user_agent)
    VALUES (target_group_id, user_agent_str);
  END IF;
  
  RETURN COALESCE(new_views, 0);
END;
$$;

-- Grant execute permission
GRANT EXECUTE ON FUNCTION public.increment_group_views(TEXT, TEXT) TO authenticated, anon;