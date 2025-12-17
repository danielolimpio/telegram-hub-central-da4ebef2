-- Drop existing SELECT policies on groups
DROP POLICY IF EXISTS "Admins can view all groups" ON public.groups;
DROP POLICY IF EXISTS "Public can view approved groups" ON public.groups;
DROP POLICY IF EXISTS "Users can view their own groups" ON public.groups;

-- Recreate SELECT policies as PERMISSIVE (default)
CREATE POLICY "Public can view approved groups" 
ON public.groups 
FOR SELECT 
USING (status = 'approved');

CREATE POLICY "Users can view their own groups" 
ON public.groups 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all groups" 
ON public.groups 
FOR SELECT 
USING (EXISTS (
  SELECT 1 FROM user_roles 
  WHERE user_roles.user_id = auth.uid() 
  AND user_roles.role = 'admin'::app_role
));