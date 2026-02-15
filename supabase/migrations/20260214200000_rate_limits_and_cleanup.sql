CREATE EXTENSION IF NOT EXISTS pg_cron;

-- Cleanup expired addresses every 5 minutes (cascading FK deletes handle messages)
SELECT cron.schedule('cleanup-expired-addresses', '*/5 * * * *', $$
  DELETE FROM public.addresses WHERE expires_at < NOW() - INTERVAL '5 minutes';
$$);

-- Rate limits table
CREATE TABLE IF NOT EXISTS public.rate_limits (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  ip_address TEXT NOT NULL,
  address_id UUID REFERENCES public.addresses(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
CREATE INDEX idx_rate_limits_ip_created ON public.rate_limits (ip_address, created_at);
ALTER TABLE public.rate_limits ENABLE ROW LEVEL SECURITY;

-- Cleanup old rate limit entries every 15 minutes
SELECT cron.schedule('cleanup-rate-limits', '*/15 * * * *', $$
  DELETE FROM public.rate_limits WHERE created_at < NOW() - INTERVAL '1 hour';
$$);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_addresses_email ON public.addresses (email);
CREATE INDEX IF NOT EXISTS idx_addresses_expires_at ON public.addresses (expires_at);

-- Tighten RLS: DROP existing INSERT policies on addresses, messages, attachments
-- so only service_role (edge functions) can insert.
-- NOTE: Check actual policy names in Supabase Dashboard before running.
DROP POLICY IF EXISTS "Anyone can insert addresses" ON public.addresses;
DROP POLICY IF EXISTS "Enable insert for all users" ON public.addresses;
DROP POLICY IF EXISTS "System can insert addresses" ON public.addresses;
DROP POLICY IF EXISTS "Allow insert addresses" ON public.addresses;
DROP POLICY IF EXISTS "Anyone can insert messages" ON public.messages;
DROP POLICY IF EXISTS "Enable insert for all users" ON public.messages;
DROP POLICY IF EXISTS "System can insert messages" ON public.messages;
DROP POLICY IF EXISTS "Allow insert messages" ON public.messages;
DROP POLICY IF EXISTS "System can insert attachments" ON public.attachments;
