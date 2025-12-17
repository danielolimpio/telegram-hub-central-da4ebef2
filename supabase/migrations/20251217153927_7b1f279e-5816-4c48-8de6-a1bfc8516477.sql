-- Fix infinite recursion in user_roles RLS by removing policies that query user_roles directly

-- 1) user_roles: admins can view all roles (use SECURITY DEFINER function)
DROP POLICY IF EXISTS "Admins can view all roles" ON public.user_roles;

CREATE POLICY "Admins can view all roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- 2) groups: admin select policy should also use has_role() (avoids dependency chains)
DROP POLICY IF EXISTS "Admins can view all groups" ON public.groups;

CREATE POLICY "Admins can view all groups"
ON public.groups
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));
