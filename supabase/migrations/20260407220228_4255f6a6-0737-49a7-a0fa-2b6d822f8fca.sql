
-- Allow admins to update any group (for approving/rejecting)
CREATE POLICY "Admins can update all groups"
ON public.groups
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

-- Allow admins to delete any group
CREATE POLICY "Admins can delete all groups"
ON public.groups
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));
