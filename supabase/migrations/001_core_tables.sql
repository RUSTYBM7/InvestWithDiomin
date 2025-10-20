-- Create leads table for consultation requests & form submissions
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  firstname TEXT,
  lastname TEXT,
  form_id TEXT,
  event TEXT,
  source TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  
  UNIQUE(email, created_at)
);

-- Create properties table for real estate portfolio
CREATE TABLE IF NOT EXISTS properties (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  state TEXT NOT NULL,
  city TEXT NOT NULL,
  type TEXT NOT NULL,
  status TEXT NOT NULL,
  metrics JSONB,
  esg JSONB,
  photos JSONB,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create posts table for insights/articles
CREATE TABLE IF NOT EXISTS posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  source TEXT,
  body_md TEXT NOT NULL,
  summary TEXT,
  tags TEXT[] DEFAULT ARRAY[]::TEXT[],
  hero_url TEXT,
  published_at TIMESTAMPTZ DEFAULT NOW(),
  
  UNIQUE(slug)
);

-- Create digests table for email digests
CREATE TABLE IF NOT EXISTS digests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  type TEXT NOT NULL,
  range_start DATE,
  range_end DATE,
  html TEXT,
  sent BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create newsletter subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  subscribed_at TIMESTAMPTZ DEFAULT NOW(),
  unsubscribed_at TIMESTAMPTZ,
  
  UNIQUE(email)
);

-- Create consultation requests table
CREATE TABLE IF NOT EXISTS consultation_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  preferred_date TEXT,
  message TEXT,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create catalog downloads table
CREATE TABLE IF NOT EXISTS catalog_downloads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  name TEXT,
  downloaded_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create admin users table
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  role TEXT DEFAULT 'viewer',
  last_login TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create audit logs table
CREATE TABLE IF NOT EXISTS audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  action TEXT NOT NULL,
  entity_type TEXT NOT NULL,
  entity_id TEXT,
  changes JSONB,
  user_email TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE digests ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE catalog_downloads ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;

-- RLS Policies: Public read access
CREATE POLICY "posts_public_read" ON posts
  FOR SELECT USING (true);

CREATE POLICY "properties_public_read" ON properties
  FOR SELECT USING (true);

-- RLS Policies: Authenticated insert for forms
CREATE POLICY "leads_insert" ON leads
  FOR INSERT WITH CHECK (true);

CREATE POLICY "consultation_insert" ON consultation_requests
  FOR INSERT WITH CHECK (true);

CREATE POLICY "newsletter_insert" ON newsletter_subscribers
  FOR INSERT WITH CHECK (true);

CREATE POLICY "catalog_insert" ON catalog_downloads
  FOR INSERT WITH CHECK (true);

-- Indexes for performance
CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_leads_source ON leads(source);
CREATE INDEX idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX idx_properties_state ON properties(state);
CREATE INDEX idx_properties_type ON properties(type);
CREATE INDEX idx_posts_published_at ON posts(published_at DESC);
CREATE INDEX idx_posts_tags ON posts USING GIN(tags);
CREATE INDEX idx_newsletter_email ON newsletter_subscribers(email);
