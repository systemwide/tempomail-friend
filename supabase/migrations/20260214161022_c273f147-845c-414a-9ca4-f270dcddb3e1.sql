
-- Create storage bucket for email attachments
INSERT INTO storage.buckets (id, name, public)
VALUES ('email-attachments', 'email-attachments', true)
ON CONFLICT (id) DO NOTHING;

-- Allow anyone to read attachments (public bucket)
CREATE POLICY "Anyone can read email attachments"
ON storage.objects FOR SELECT
USING (bucket_id = 'email-attachments');

-- Allow service role to insert attachments (edge function uses service role)
CREATE POLICY "Service role can insert email attachments"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'email-attachments');

-- Create attachments table
CREATE TABLE public.attachments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  message_id UUID NOT NULL REFERENCES public.messages(id) ON DELETE CASCADE,
  filename TEXT NOT NULL,
  content_type TEXT,
  size INTEGER,
  storage_path TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.attachments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read attachments"
ON public.attachments FOR SELECT
USING (true);

CREATE POLICY "System can insert attachments"
ON public.attachments FOR INSERT
WITH CHECK (true);

CREATE INDEX idx_attachments_message_id ON public.attachments(message_id);
