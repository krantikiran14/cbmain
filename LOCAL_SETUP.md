# CipherBridge - Local Development Setup

## Prerequisites

Make sure you have the following installed on your PC:

1. **Node.js** (version 16 or higher)

   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **npm** (comes with Node.js)

   - Verify installation: `npm --version`

3. **Git** (optional, for cloning)
   - Download from: https://git-scm.com/

## Quick Start

### Step 1: Get the Project Files

**Option A: Download ZIP**

1. Download the project as a ZIP file
2. Extract it to your desired location
3. Open terminal/command prompt in the project folder

**Option B: Clone with Git**

```bash
git clone <your-repository-url>
cd cipherbridge-website
```

### Step 2: Install Dependencies

Open terminal/command prompt in the project root and run:

```bash
npm install
```

This will download all required packages (~535 packages).

### Step 3: Environment Variables

The `.env` file is already configured with your Supabase credentials:

```env
VITE_SUPABASE_URL=https://vvcapfgtqmsvqygevbxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

_Note: Keep this file secure and don't share it publicly._

### Step 4: Set Up Database (First Time Only)

1. Go to your Supabase dashboard: https://supabase.com/dashboard
2. Navigate to your project: `vvcapfgtqmsvqygevbxx`
3. Go to SQL Editor
4. Copy and paste the contents from `supabase-schema.sql`
5. Click "Run" to create the tables

### Step 5: Start Development Server

```bash
npm run dev
```

You should see:

```
VITE v6.3.5  ready in 296 ms

➜  Local:   http://localhost:8080/
➜  Network: http://172.x.x.x:8080/
```

### Step 6: Open in Browser

Open your browser and go to: **http://localhost:8080**

## Project Structure

```
cipherbridge-website/
├── client/                 # Frontend React code
│   ├── components/ui/      # UI components
│   ├── lib/               # Utilities and Supabase config
│   ├── pages/             # App pages
│   └── global.css         # Styles
├── server/                # Backend Express code
├── shared/                # Shared types
├── .env                   # Environment variables
├── package.json           # Dependencies
└── supabase-schema.sql    # Database schema
```

## Available Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run tests
npm test

# Type checking
npm run typecheck
```

## Features You Can Test

1. **Quote Form**: Fill out and submit - data goes to Supabase
2. **Responsive Design**: Resize browser to test mobile view
3. **Navigation**: All sections scroll smoothly
4. **Toast Notifications**: Form submissions show success/error messages

## Troubleshooting

### Port Already in Use

If port 8080 is busy:

```bash
# Kill process on port 8080 (Windows)
netstat -ano | findstr :8080
taskkill /PID <process-id> /F

# Kill process on port 8080 (Mac/Linux)
lsof -ti:8080 | xargs kill -9
```

### Environment Variables Not Working

1. Make sure `.env` file is in project root
2. Restart the dev server: `Ctrl+C` then `npm run dev`
3. Check Supabase project is active

### Dependencies Issues

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Database Connection Issues

1. Verify Supabase project URL and key in `.env`
2. Check if you've run the SQL schema
3. Ensure Supabase project is not paused

## Next Steps

1. **Test Quote Form**: Submit a test quote and check Supabase dashboard
2. **Customize Content**: Edit `client/pages/Index.tsx`
3. **Deploy**: Use the `DEPLOYMENT.md` guide for production

## Support

If you encounter issues:

1. Check the browser console for errors
2. Verify all dependencies installed correctly
3. Ensure Supabase is properly configured

Your CipherBridge website should now be running locally! 🚀
