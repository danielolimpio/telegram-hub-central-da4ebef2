ALTER TABLE public.groups ADD COLUMN IF NOT EXISTS pinned BOOLEAN NOT NULL DEFAULT false;
CREATE INDEX IF NOT EXISTS idx_groups_pinned ON public.groups(pinned) WHERE pinned = true;