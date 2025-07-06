-- Extended Supabase schema for additional CTA functionalities
-- Run this after the main supabase-schema.sql if you want to add these features

-- Newsletter subscriptions table
CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed'))
);

-- Contact form submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  status VARCHAR(20) DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied'))
);

-- Demo requests table
CREATE TABLE IF NOT EXISTS demo_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  phone VARCHAR(50),
  preferred_time VARCHAR(100),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'scheduled', 'completed', 'cancelled'))
);

-- Enable RLS for all new tables
ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE demo_requests ENABLE ROW LEVEL SECURITY;

-- Create policies for newsletter subscriptions
CREATE POLICY "Allow public newsletter inserts" ON newsletter_subscriptions
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Allow authenticated newsletter reads" ON newsletter_subscriptions
  FOR SELECT 
  USING (auth.role() = 'authenticated');

-- Create policies for contact submissions
CREATE POLICY "Allow public contact inserts" ON contact_submissions
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Allow authenticated contact reads" ON contact_submissions
  FOR SELECT 
  USING (auth.role() = 'authenticated');

-- Create policies for demo requests
CREATE POLICY "Allow public demo inserts" ON demo_requests
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Allow authenticated demo reads" ON demo_requests
  FOR SELECT 
  USING (auth.role() = 'authenticated');

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscriptions(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_created_at ON newsletter_subscriptions(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_contact_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_status ON contact_submissions(status);

CREATE INDEX IF NOT EXISTS idx_demo_created_at ON demo_requests(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_demo_status ON demo_requests(status);
