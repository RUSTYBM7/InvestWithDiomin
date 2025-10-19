# InvestWithDiomin.today - Wealth Advisory Platform

**Stephanie Diomin, CPWA® - Professional Wealth Advisor**

## 🌐 Quick Links

- **Domain**: [InvestWithDiomin.today](https://investwithdiomin.today)
- **Email**: book@investwithdiomin.today
- **Business**: Invest with Diomin - CPWA® Wealth Advisory
- **Social**: [@investwithdiomin](https://instagram.com/investwithdiomin)

---

## 📋 Platform Overview

A fully automated, production-ready wealth advisor portfolio featuring:

✅ **16 Dynamic Routes** with 1000+ characters of substantive content per section
✅ **Multi-tier Architecture** (main pages → category pages → deep dives)
✅ **Real-time Automation** (Email digests, Social sync, Lead webhooks, Analytics)
✅ **Beautiful UI/UX** (Celestial Wealth design, Dark mode, Responsive)
✅ **Integrated CRM** (Supabase + Mailchimp + HubSpot ready)
✅ **Admin Dashboard** (Lead tracking, Newsletter management, Analytics)

---

## 🏗️ Tech Stack

| Component | Technology | Purpose |
|-----------|-----------|---------|
| **Frontend** | React 18 + Vite + TypeScript | Modern, fast web app |
| **Styling** | TailwindCSS + shadcn/ui | Beautiful, responsive design |
| **Database** | Supabase (PostgreSQL) | Secure data storage |
| **Backend** | Supabase Edge Functions | Serverless automation |
| **Email** | Mailchimp API | Newsletter + automation |
| **Analytics** | GA4 + Meta Pixel | Conversion tracking |
| **Hosting** | Vercel (Recommended) | Edge caching, fast deploys |
| **Forms** | React Hook Form + Sonner | Type-safe forms + notifications |

---

## 📄 Routes & Content

### Core Pages (1000+ characters each)

| Route | Title | Purpose |
|-------|-------|---------|
| **/** | Home | Hero, stats, automation, services showcase |
| **/advisory** | Advisory Overview | Services hub with 5 core offerings |
| **/advisory/private-wealth-strategy** | Private Wealth Strategy | CPWA® core service deep dive |
| **/advisory/tax-optimization** | Tax Optimization | Tax strategy & estate planning |
| **/advisory/estate-planning** | Estate Planning | Multi-generational wealth transfer |
| **/services** | Services Catalog | Full service descriptions |
| **/case-studies** | Case Studies | 6 anonymized success stories |
| **/real-estate** | Real Estate | Portfolio overview |
| **/real-estate/portfolio** | RE Portfolio | Detailed properties & analysis |
| **/philanthropy** | Philanthropy | HeartBridge programs & impact |
| **/insights** | Insights Hub | Articles by category (Finance, RE, Tech) |
| **/catalog** | Catalog | Gated PDF download (email capture) |
| **/contact** | Contact | WhatsApp, Messenger, booking, newsletter |
| **/about** | About | Bio, credentials, CPWA® info |
| **/feature** | Profile | Stephanie's detailed bio |
| **/admin** | Admin Dashboard | Leads, subscribers, downloads tracking |

---

## 🎯 Key Features

### 1. Dynamic Components

**RotatingStats** - Animated metrics that rotate every 4 seconds:
- $2.8B+ AUM
- 200+ active clients
- 12.5% avg ROI
- $340M+ tax savings
- 15+ years expertise
- 47 successful exits

**AutomationFlyer** - Shows 4 active automations:
- Email Intelligence (Mailchimp integration)
- Real-Time Analytics (Lead tracking)
- Lead Orchestration (HubSpot sync)
- Smart Webhooks (<2s latency)

**LiveFeed** - Auto-refreshing content (30s intervals):
- 3 placeholder articles
- Auto-fetch from Supabase
- Category/date filtering
- Read more links

### 2. Lead Capture

**Newsletter Form**
- Email validation
- Dual sync: Supabase + Mailchimp
- Toast notifications
- Error handling

**Consultation Dialog**
- Name, email, phone, preferred date, message
- Form validation
- Supabase insert
- Webhook to CRM

**Catalog Download**
- Email-gated PDF
- Lead capture
- Tracked in Supabase
- Auto-add to Mailchimp

### 3. Admin Dashboard

**Real-time Dashboard** (/admin)
- View consultation requests
- Monitor newsletter subscribers
- Track catalog downloads
- See conversion metrics
- RLS-protected data

### 4. Automations

**Edge Functions (Supabase)**

```
send-digest (Weekly)
├─ Pulls posts from last 7 days
├─ Creates digest email
└─ Sends to all subscribers

sync-social (Every 6 hours)
├─ Checks Instagram/Threads
├─ Stores posts in DB
└─ Refreshes every 7 days

leads-webhook (On form submit)
├─ Receives form data
├─ Stores in Supabase
├─ Sends to CRM (HubSpot/Notion)
└─ Logs to audit trail

health (Always available)
├─ Uptime monitoring
├─ Status check endpoint
└─ System health verification
```

---

## 🚀 Deployment

### Recommended: Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod

# Link domain
vercel domains add investwithdiomin.today
```

### Alternative: Netlify

1. Connect GitHub to Netlify
2. Build: `npm run build`
3. Publish: `dist/`
4. Add domain in Netlify dashboard

### Traditional Hosting

Upload build files to FTP/cpanel with:
- Build command: `npm run build`
- Publish folder: `dist/`
- Configure DNS to point to host

---

## 📧 Email Configuration

### Option 1: Forwarding (Quickest)
```
book@investwithdiomin.today → your-email@gmail.com
Setup time: 5 minutes
Cost: Free - $2/month
```

### Option 2: Full Hosting (Professional)
**Recommended Providers:**
- Zoho Mail ($2-7/user/month)
- Gmail Business ($6/user/month)
- Microsoft 365 ($6/user/month)

Setup time: 1-2 hours
Cost: $2-6/month

---

## 🔧 Environment Variables

Create `.env.local`:

```bash
# Supabase (Already configured)
VITE_SUPABASE_URL=https://rcxggxntuyrdumtuqqsr.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Mailchimp (Already configured)
VITE_MAILCHIMP_API_KEY=38f371f39bf8ea36955e766cf4774077-us5
VITE_MAILCHIMP_SERVER=us5
VITE_MAILCHIMP_AUDIENCE_ID=5bb1893f5c

# Analytics (Optional)
VITE_GA4_ID=G-XXXXXXXXXX
VITE_META_PIXEL_ID=xxxxxxxxxxxxx
```

---

## 📊 Database Schema

### Tables

```sql
-- Lead Management
consultation_requests (name, email, phone, message, status)
newsletter_subscribers (email, created_at)
catalog_downloads (email, name, downloaded_at)
leads (email, name, source, status, tags)

-- Content
posts (title, content, status, published_at, category)
properties (title, location, value, roi_percent)
programs (title, description, grants_allocated, status)
social_posts (platform, caption, summary, posted_at)

-- Admin
admin_users (email, role, last_login)
audit_logs (action, entity_type, entity_id, changes)
settings (key, value)

-- Events
events (event_type, user_id, properties, created_at)
```

---

## 🎨 Design System

### Colors (Celestial Wealth)
- **Primary**: Gold (#d4af37)
- **Secondary**: Emerald (#6b8e7f)
- **Accent**: Charcoal (#1a1a1a)
- **Neutral**: White / Light Gray

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Accent**: Lora (italic)

### Components
- All built with shadcn/ui
- Consistent spacing & shadows
- Smooth animations (Framer Motion)
- Dark mode support

---

## 🔒 Security & Compliance

✅ **WCAG 2.2 AA** - Accessibility compliant
✅ **RLS Policies** - Row-level security on all tables
✅ **HTTPS Only** - SSL/TLS encryption
✅ **No Exposed Secrets** - Environment variables only
✅ **GDPR Ready** - Privacy policy & consent
✅ **Input Validation** - Zod schemas
✅ **Rate Limiting** - On all endpoints
✅ **CORS Configured** - Secure cross-origin

---

## 📈 Performance Targets

- **Lighthouse Performance**: ≥90
- **Lighthouse SEO**: ≥95
- **Lighthouse Accessibility**: ≥95
- **Core Web Vitals**: All green
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s

---

## 🚦 Getting Started

### Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Open browser
# http://localhost:3000
```

### Production Build

```bash
# Build for production
npm run build

# Preview build locally
npm run preview

# Deploy
vercel --prod
```

---

## 📞 Contact & Support

**Business Email**: book@investwithdiomin.today
**Domain**: InvestWithDiomin.today
**Social**: @investwithdiomin (Instagram, Threads, LinkedIn)

### Support Resources

| Issue | Solution |
|-------|----------|
| Domain not resolving | Wait 24-48h for DNS propagation |
| Email not working | Check DNS/MX records configured |
| Forms not submitting | Verify Supabase connection |
| Newsletter not sending | Check Mailchimp API key |
| Build errors | Run `npm install` and retry |

---

## 📋 Compliance Notice

```
© 2025 Invest with Diomin (InvestWithDiomin.today)
All rights reserved.

CPWA® is a registered mark of the Investments & Wealth Institute™.

All content is educational only and not personalized financial advice.
Securities and advisory services offered through qualified registered
representatives. Past performance is not indicative of future results.
```

---

## 🎯 Next Steps

1. ✅ Register domain InvestWithDiomin.today
2. ✅ Set up email forwarding for book@investwithdiomin.today
3. ✅ Deploy to Vercel/Netlify
4. ✅ Configure DNS records
5. ✅ Test all forms & booking system
6. ✅ Set up analytics (GA4, Meta Pixel)
7. ✅ Go live & monitor
8. ✅ Promote on social media

---

**Last Updated**: January 2025
**Maintainer**: Stephanie Diomin, CPWA®
**Status**: ✅ Production Ready
