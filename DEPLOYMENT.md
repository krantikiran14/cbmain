# CipherBridge Production Deployment Guide

## Prerequisites

1. **Supabase Account**: Sign up at [supabase.com](https://supabase.com)
2. **Hosting Platform**: Netlify, Vercel, or similar
3. **Domain**: Your custom domain (optional)

## Setup Instructions

### 1. Supabase Database Setup

1. Create a new Supabase project
2. Go to the SQL Editor in your Supabase dashboard
3. Copy and paste the contents of `supabase-schema.sql`
4. Run the SQL to create your database tables

### 2. Environment Variables

1. Copy `.env.example` to `.env`
2. Fill in your Supabase credentials:
   ```
   VITE_SUPABASE_URL=https://yourproject.supabase.co
   VITE_SUPABASE_ANON_KEY=your_anon_key_here
   ```
3. Get these values from your Supabase project settings > API

### 3. Build and Deploy

#### Option A: Netlify Deployment

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist/spa`
4. Add environment variables in Netlify dashboard:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

#### Option B: Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist/spa`
5. Add environment variables in Vercel dashboard

#### Option C: Manual Deployment

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Deploy the dist/spa folder to your hosting provider
```

### 4. Custom Domain (Optional)

1. Configure your domain in your hosting provider
2. Update any hardcoded URLs if necessary
3. Set up SSL certificate (usually automatic)

## Post-Deployment Setup

### 1. Test Quote Form

1. Visit your live website
2. Fill out and submit the quote form
3. Check your Supabase dashboard to verify data is being stored

### 2. Set Up Email Notifications (Optional)

To receive email notifications when quotes are submitted:

1. Set up Supabase Edge Functions or webhooks
2. Integrate with email service (SendGrid, Mailgun, etc.)
3. Create email templates for quote notifications

### 3. Admin Dashboard (Optional)

Create an admin page to view submitted quotes:

```typescript
// Example admin page
import { QuoteService } from '@/lib/services'

export default function AdminDashboard() {
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    QuoteService.getAllQuotes().then(result => {
      if (result.data) setQuotes(result.data)
    })
  }, [])

  return (
    <div>
      <h1>Quote Requests</h1>
      {quotes.map(quote => (
        <div key={quote.id}>
          <h3>{quote.full_name}</h3>
          <p>{quote.email}</p>
          <p>{quote.project_type}</p>
          <p>{quote.requirements}</p>
        </div>
      ))}
    </div>
  )
}
```

## Security Considerations

1. **Row Level Security**: Already enabled in the schema
2. **Environment Variables**: Never commit `.env` to version control
3. **API Keys**: Use the anon key for client-side operations
4. **CORS**: Configure if needed in Supabase settings

## Monitoring and Analytics

1. **Error Tracking**: Consider adding Sentry
2. **Analytics**: Add Google Analytics or similar
3. **Performance**: Monitor Core Web Vitals
4. **Uptime**: Set up monitoring alerts

## Support

For issues:

1. Check Supabase dashboard for database errors
2. Review browser console for client-side errors
3. Check hosting platform logs for deployment issues

Your CipherBridge website is now production-ready with a fully functional backend!
