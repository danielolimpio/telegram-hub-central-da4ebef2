-- Drop existing policies to recreate them as PERMISSIVE
DROP POLICY IF EXISTS "Admins can view all groups" ON groups;
DROP POLICY IF EXISTS "Public can view approved groups" ON groups;
DROP POLICY IF EXISTS "Users can view their own groups" ON groups;
DROP POLICY IF EXISTS "Users can create their own groups" ON groups;
DROP POLICY IF EXISTS "Users can update their own groups" ON groups;
DROP POLICY IF EXISTS "Users can delete their own groups" ON groups;

-- Recreate SELECT policies as PERMISSIVE (they work with OR logic)
CREATE POLICY "Admins can view all groups"
ON groups FOR SELECT
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM user_roles
    WHERE user_roles.user_id = auth.uid()
    AND user_roles.role = 'admin'::app_role
  )
);

CREATE POLICY "Public can view approved groups"
ON groups FOR SELECT
USING (status = 'approved');

CREATE POLICY "Users can view their own groups"
ON groups FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Recreate other policies
CREATE POLICY "Users can create their own groups"
ON groups FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own groups"
ON groups FOR UPDATE
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own groups"
ON groups FOR DELETE
TO authenticated
USING (auth.uid() = user_id);