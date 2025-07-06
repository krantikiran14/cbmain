import { supabase, isSupabaseConfigured, type QuoteRequest } from "./supabase";

export interface SubmitQuoteData {
  fullName: string;
  companyName?: string;
  email: string;
  phone: string;
  projectType: string;
  budgetRange?: string;
  timeline?: string;
  requirements: string;
}

export class QuoteService {
  static async submitQuote(
    data: SubmitQuoteData,
  ): Promise<{ success: boolean; error?: string }> {
    try {
      // Check if Supabase is configured
      if (!isSupabaseConfigured()) {
        // For development/demo purposes - simulate success
        console.log("Supabase not configured. Quote data:", data);
        return {
          success: true,
          error: "Demo mode: Supabase not configured. Quote logged to console.",
        };
      }

      // Validate required fields
      if (
        !data.fullName ||
        !data.email ||
        !data.phone ||
        !data.projectType ||
        !data.requirements
      ) {
        return { success: false, error: "Please fill in all required fields" };
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        return { success: false, error: "Please enter a valid email address" };
      }

      // Prepare data for database
      const quoteData: Omit<QuoteRequest, "id" | "created_at" | "status"> = {
        full_name: data.fullName,
        company_name: data.companyName || null,
        email: data.email,
        phone: data.phone,
        project_type: data.projectType,
        budget_range: data.budgetRange || null,
        timeline: data.timeline || null,
        requirements: data.requirements,
      };

      // Insert into Supabase
      const { error } = await supabase!
        .from("quote_requests")
        .insert([quoteData]);

      if (error) {
        console.error("Supabase error:", error);
        return {
          success: false,
          error:
            "Failed to submit quote request. Please try again or contact us directly.",
        };
      }

      return { success: true };
    } catch (error) {
      console.error("Quote submission error:", error);
      return {
        success: false,
        error: "An unexpected error occurred. Please try again.",
      };
    }
  }

  // For admin use - fetch all quotes
  static async getAllQuotes(): Promise<{
    data: QuoteRequest[] | null;
    error: string | null;
  }> {
    try {
      if (!isSupabaseConfigured()) {
        return {
          data: null,
          error:
            "Supabase not configured. Please set up environment variables.",
        };
      }

      const { data, error } = await supabase!
        .from("quote_requests")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        return { data: null, error: error.message };
      }

      return { data, error: null };
    } catch (error) {
      return { data: null, error: "Failed to fetch quotes" };
    }
  }
}
