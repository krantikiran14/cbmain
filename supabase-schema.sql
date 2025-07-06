-- Create quote_requests table
CREATE TABLE IF NOT EXISTS quote_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  company_name VARCHAR(255),
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  project_type VARCHAR(100) NOT NULL,
  budget_range VARCHAR(50),
  timeline VARCHAR(50),
  requirements TEXT NOT NULL,
  status VARCHAR(20) DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'quoted', 'closed'))
);

-- Enable Row Level Security (RLS)
ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anyone (for quote form submissions)
CREATE POLICY "Allow public inserts" ON quote_requests
  FOR INSERT 
  WITH CHECK (true);

-- Create policy to allow reads only for authenticated users (for admin dashboard)
CREATE POLICY "Allow authenticated reads" ON quote_requests
  FOR SELECT 
  USING (auth.role() = 'authenticated');

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_quote_requests_created_at ON quote_requests(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_quote_requests_status ON quote_requests(status);
CREATE INDEX IF NOT EXISTS idx_quote_requests_email ON quote_requests(email);

-- Insert some sample data (optional - remove in production)
INSERT INTO quote_requests (full_name, company_name, email, phone, project_type, budget_range, timeline, requirements) 
VALUES 
  ('John Smith', 'TechCorp Inc', 'john@techcorp.com', '+1-555-0123', 'crm', '50k-100k', '3-6months', 'Need a custom CRM system to manage our growing customer base with integration to our existing tools.'),
  ('Sarah Johnson', 'StartupXYZ', 'sarah@startupxyz.com', '+1-555-0456', 'mobile', '15k-50k', '1-3months', 'Looking for a mobile app for our food delivery service with real-time tracking and payment integration.');
