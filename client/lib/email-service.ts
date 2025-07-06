import { SubmitQuoteData } from "./services";

// Email notification service for quote requests
export class EmailNotificationService {
  // Send email notification for new quote requests
  static async sendQuoteNotification(
    quoteData: SubmitQuoteData,
  ): Promise<{ success: boolean; error?: string }> {
    try {
      // Option 1: Use EmailJS (free service, works client-side)
      const emailJSServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const emailJSTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const emailJSPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      const adminEmail =
        import.meta.env.VITE_ADMIN_EMAIL || "admin@cipherbridge.com";

      // If EmailJS is configured, use it
      if (emailJSServiceId && emailJSTemplateId && emailJSPublicKey) {
        // Dynamic import EmailJS only when needed
        const emailjs = await import("@emailjs/browser");

        const templateParams = {
          to_email: adminEmail,
          from_name: quoteData.fullName,
          from_email: quoteData.email,
          company_name: quoteData.companyName || "Not provided",
          phone: quoteData.phone,
          project_type: quoteData.projectType,
          budget_range: quoteData.budgetRange || "Not specified",
          timeline: quoteData.timeline || "Not specified",
          requirements: quoteData.requirements,
          submission_date: new Date().toLocaleString(),
        };

        await emailjs.send(
          emailJSServiceId,
          emailJSTemplateId,
          templateParams,
          emailJSPublicKey,
        );

        return { success: true };
      }

      // Option 2: Use a webhook service (like Zapier, Make.com, or custom endpoint)
      const webhookUrl = import.meta.env.VITE_QUOTE_WEBHOOK_URL;

      if (webhookUrl) {
        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            type: "new_quote_request",
            data: quoteData,
            timestamp: new Date().toISOString(),
          }),
        });

        if (!response.ok) {
          throw new Error(`Webhook failed: ${response.status}`);
        }

        return { success: true };
      }

      // Option 3: Simple email using a basic API service
      const simpleEmailUrl = import.meta.env.VITE_SIMPLE_EMAIL_API;

      if (simpleEmailUrl) {
        const emailBody = `
New Quote Request from CipherBridge Website

From: ${quoteData.fullName}
Email: ${quoteData.email}
Company: ${quoteData.companyName || "Not provided"}
Phone: ${quoteData.phone}
Project Type: ${quoteData.projectType}
Budget Range: ${quoteData.budgetRange || "Not specified"}
Timeline: ${quoteData.timeline || "Not specified"}

Requirements:
${quoteData.requirements}

Submitted on: ${new Date().toLocaleString()}
        `;

        const response = await fetch(simpleEmailUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            to: adminEmail,
            subject: `New Quote Request from ${quoteData.fullName}`,
            body: emailBody,
          }),
        });

        if (!response.ok) {
          throw new Error(`Email API failed: ${response.status}`);
        }

        return { success: true };
      }

      // If no email service is configured, log the notification
      console.log("📧 Email Notification (No service configured):", {
        type: "NEW_QUOTE_REQUEST",
        from: quoteData.fullName,
        email: quoteData.email,
        company: quoteData.companyName,
        project: quoteData.projectType,
        timestamp: new Date().toISOString(),
      });

      return { success: true };
    } catch (error) {
      console.error("Email notification error:", error);
      // Don't fail the quote submission if email fails
      return { success: false, error: "Email notification failed" };
    }
  }
}

// Helper function to format quote data for email templates
export const formatQuoteForEmail = (data: SubmitQuoteData) => {
  return {
    customer_name: data.fullName,
    customer_email: data.email,
    company_name: data.companyName || "Not provided",
    phone_number: data.phone,
    project_type: data.projectType,
    budget_range: data.budgetRange || "Not specified",
    project_timeline: data.timeline || "Not specified",
    project_requirements: data.requirements,
    submission_date: new Date().toLocaleDateString(),
    submission_time: new Date().toLocaleTimeString(),
  };
};
