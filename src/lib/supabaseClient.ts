
import { createClient } from '@supabase/supabase-js';

// When using Lovable's Supabase integration, these environment variables are automatically injected
const supabaseUrl = 'https://your-project-ref.supabase.co';
const supabaseKey = 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseKey);
