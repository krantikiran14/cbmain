import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create Supabase client only if environment variables are provided
export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

// Helper to check if Supabase is configured
export const isSupabaseConfigured = () => Boolean(supabase);

// Types for our database
export interface QuoteRequest {
  id?: string;
  created_at?: string;
  full_name: string;
  company_name?: string;
  email: string;
  phone: string;
  project_type: string;
  budget_range?: string;
  timeline?: string;
  requirements: string;
  status?: "new" | "contacted" | "quoted" | "closed";
}
