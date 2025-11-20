-- Adicionar política RLS para admins visualizarem todos os grupos
CREATE POLICY "Admins can view all groups"
ON public.groups
FOR SELECT
TO authenticated
USING (
  EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = auth.uid()
      AND role = 'admin'::app_role
  )
);