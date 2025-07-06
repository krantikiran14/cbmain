# Email Notifications Setup Guide

## Overview

When someone submits a quote request through your CipherBridge website, you'll automatically receive an email notification with all their details.

## Quick Setup Options

### Option 1: EmailJS (Recommended - Free & Easy)

**Why EmailJS?**

- Free tier: 200 emails/month
- Works directly from your website
- No backend server needed
- Professional templates

**Setup Steps:**

1. **Create EmailJS Account**

   - Go to [emailjs.com](https://www.emailjs.com)
   - Sign up for free account

2. **Set Up Email Service**

   - Go to Email Services
   - Add service (Gmail, Outlook, etc.)
   - Follow connection wizard

3. **Create Email Template**

   - Go to Email Templates
   - Create new template with this content:

   ```
   Subject: New Quote Request from {{from_name}}

   You have a new quote request from your CipherBridge website!

   Customer Details:
   - Name: {{from_name}}
   - Email: {{from_email}}
   - Company: {{company_name}}
   - Phone: {{phone}}

   Project Details:
   - Type: {{project_type}}
   - Budget: {{budget_range}}
   - Timeline: {{timeline}}

   Requirements:
   {{requirements}}

   Submitted: {{submission_date}}
   ```

4. **Add Environment Variables**

   Add to your `.env` file:

   ```env
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
   VITE_ADMIN_EMAIL=your-email@cipherbridge.com
   ```

5. **Test It!**
   - Submit a test quote on your website
   - Check your email inbox

### Option 2: Zapier Webhook (Alternative)

**Setup Steps:**

1. **Create Zapier Account**

   - Go to [zapier.com](https://zapier.com)
   - Create free account

2. **Create Zap**

   - Trigger: Webhooks by Zapier
   - Action: Email by Zapier

3. **Get Webhook URL**

   - Copy the webhook URL from Zapier

4. **Add to Environment**
   ```env
   VITE_QUOTE_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/xxxxx
   VITE_ADMIN_EMAIL=your-email@cipherbridge.com
   ```

### Option 3: Make.com (Previously Integromat)

Similar to Zapier but with different interface:

1. Create scenario with webhook trigger
2. Add email action
3. Use webhook URL in environment variables

## Current Status

✅ **Email system is ready to use**
✅ **Fallback logging if no email service configured**
✅ **Won't break quote submission if email fails**
✅ **Multiple email service options supported**

## Testing Email Notifications

1. **Without Email Service** (Current):

   - Quote submissions work normally
   - Email notifications logged to browser console
   - Check browser dev tools > Console tab

2. **With Email Service**:
   - Set up any option above
   - Add environment variables
   - Restart your development server
   - Test quote submission

## Email Content

When someone submits a quote, you'll receive:

📧 **Subject**: "New Quote Request from [Customer Name]"

📋 **Content**:

- Customer name and contact info
- Company name
- Project type and requirements
- Budget range and timeline
- Submission timestamp

## Troubleshooting

**No emails received?**

1. Check environment variables are set correctly
2. Verify email service is active
3. Check spam/junk folder
4. Test with a simple quote submission

**Emails in spam?**

1. Add sending email to your contacts
2. Mark emails as "Not Spam"
3. Set up email filters

## Production Deployment

When deploying to Netlify/Vercel:

1. Add all environment variables to your hosting platform
2. Verify email service quotas
3. Test in production environment
4. Monitor email delivery

Your CipherBridge website will now notify you instantly when someone requests a quote! 📧
