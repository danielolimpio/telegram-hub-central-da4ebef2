-- Assign admin role to the existing user
INSERT INTO public.user_roles (user_id, role)
VALUES ('1e47195d-4bac-4621-bcc3-a5c2b3e6fbca', 'admin')
ON CONFLICT (user_id, role) DO NOTHING;