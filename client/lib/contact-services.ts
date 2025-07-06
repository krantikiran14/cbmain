import { supabase, isSupabaseConfigured } from "./supabase";

// Newsletter subscription interface
export interface NewsletterSubscription {
  id?: string;
  email: string;
  created_at?: string;
  status?: "active" | "unsubscribed";
}

// Contact form interface
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Demo request interface
export interface DemoRequest {
  id?: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  preferred_time?: string;
  created_at?: string;
  status?: "pending" | "scheduled" | "completed";
}

export class ContactService {
  // Newsletter subscription
  static async subscribeNewsletter(
    email: string,
  ): Promise<{ success: boolean; error?: string }> {
    try {
      if (!isSupabaseConfigured()) {
        console.log("Newsletter subscription (demo):", email);
        return { success: true };
      }

      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return { success: false, error: "Please enter a valid email address" };
      }

      const { error } = await supabase!
        .from("newsletter_subscriptions")
        .insert([{ email, status: "active" }]);

      if (error) {
        if (error.code === "23505") {
          // Duplicate email
          return { success: false, error: "Email already subscribed" };
        }
        return { success: false, error: "Failed to subscribe" };
      }

      return { success: true };
    } catch (error) {
      return { success: false, error: "An unexpected error occurred" };
    }
  }

  // Contact form submission
  static async submitContactForm(
    data: ContactFormData,
  ): Promise<{ success: boolean; error?: string }> {
    try {
      if (!isSupabaseConfigured()) {
        console.log("Contact form submission (demo):", data);
        return { success: true };
      }

      const { error } = await supabase!
        .from("contact_submissions")
        .insert([data]);

      if (error) {
        return { success: false, error: "Failed to send message" };
      }

      return { success: true };
    } catch (error) {
      return { success: false, error: "An unexpected error occurred" };
    }
  }

  // Demo request submission
  static async requestDemo(
    data: DemoRequest,
  ): Promise<{ success: boolean; error?: string }> {
    try {
      if (!isSupabaseConfigured()) {
        console.log("Demo request (demo):", data);
        return { success: true };
      }

      const { error } = await supabase!
        .from("demo_requests")
        .insert([{ ...data, status: "pending" }]);

      if (error) {
        return { success: false, error: "Failed to schedule demo" };
      }

      return { success: true };
    } catch (error) {
      return { success: false, error: "An unexpected error occurred" };
    }
  }
}
