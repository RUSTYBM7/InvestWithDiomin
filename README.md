# Stephanie Diomin, CPWA® — Wealth Advisory Platform

A production-ready, fully automated wealth advisor portfolio with real estate, philanthropy, admin dashboard, and CRM integration.

## 🎯 Features

### Pages (10 Routes)
- **/** — Home: Hero, services, case studies, testimonials
- **/feature** — Stephanie's profile & credentials  
- **/about** — Bio, values, CPWA® certification
- **/services** — Wealth management services (5 offerings)
- **/case-studies** — Anonymized success metrics
- **/real-estate** — Property portfolio & ROI
- **/philanthropy** — HeartBridge programs & impact
- **/catalog** — Gated downloads (email capture)
- **/insights** — Weekly social feed (Instagram/Threads)
- **/contact** — WhatsApp, Messenger, booking, newsletter
- **/admin** — Dashboard: leads, subscribers, downloads

### Automation
- **Weekly Digest** — Auto-compile posts → email subscribers
- **Social Sync** — Hourly Instagram/Threads ingest (Deno edge function)
- **Lead Webhooks** — Consultation + catalog → HubSpot/Notion CRM
- **Email Capture** — Auto-subscribe on catalog download

### Integrations (Ready)
- **Supabase** — DB, auth, RLS policies, edge functions
- **Sonner** — Toast notifications
- **React Query** — Data fetching & caching
- **Dark Mode** — Theme toggle (light/dark/system)

### Admin Dashboard
- View all consultation requests (status, date, contact)
- Monitor newsletter subscribers
- Track catalog downloads & conversion rates
- Real-time stats & analytics

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ or Bun
- Supabase account (free tier)

### Installation
```bash
npm install
# or
bun install
```

### Environment Setup
```bash
# Create .env.local with:
VITE_SUPABASE_URL=https://rcxggxntuyrdumtuqqsr.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Run Locally
```bash
npm run dev
# or
bun dev
```

Visit `http://localhost:3000`

## 📊 Admin Access

Access `/admin` to view dashboard. **Requires Supabase access** — public read policies enabled for view-only.

```
Dashboard Features:
✓ Consultation requests (pending, contacted, scheduled, completed)
✓ Newsletter subscribers (email list)
✓ Catalog downloads (lead capture, source tracking)
✓ Real-time stats (totals, conversion rates)
```

## 🔄 Automations

### Edge Functions (Supabase)

**1. Weekly Digest (`send-digest`)**
- Runs: Every Monday 9 AM UTC
- Pulls: Last 7 days of published posts
- Sends: Email digest to all subscribers
- Stores: Digest record in DB

**2. Social Sync (`sync-social`)**
- Runs: Every 6 hours
- Pulls: Latest Instagram/Threads posts
- Stores: In `social_posts` table (cached 7 days)
- Ready for: AI summarization

**3. Lead Webhook (`leads-webhook`)**
- Triggers: On form submission (consultation, download, contact)
- Sends: To HubSpot/Notion CRM (configure API key)
- Stores: In `leads` table with status tracking

**4. Health Check (`health`)**
- Endpoint: `/api/health`
- Response: Status, timestamp, version

## 📦 Database Schema

```
Tables:
- consultation_requests (name, email, status, date)
- newsletter_subscribers (email, created_at)
- catalog_downloads (email, name, downloaded_at)
- social_posts (platform, caption, summary, posted_at)
- leads (email, source, status, tags)
- posts (title, content, status, published_at) [future]
- properties (title, location, roi_percent) [future]
- programs (title, impact_area, grants_allocated) [future]
```

## 🎨 Design System

**Colors:** White, Charcoal, Gold (#d4af37), Emerald (#6b8e7f)  
**Typography:** Playfair Display (serif), Inter (sans)  
**Components:** shadcn/ui + Radix UI primitives  
**Animations:** Framer Motion, TailwindCSS transitions

## 📱 Responsive Design

- Mobile-first approach
- Tailored for all devices (320px → 1920px)
- Touch-friendly navigation
- Fast load times (Vite + edge caching)

## ♿ Accessibility

- WCAG 2.2 AA compliant
- Semantic HTML
- Keyboard navigation
- Focus states visible
- Dark mode support

## 🔐 Security

- **RLS Policies** — Public read-only on published content
- **Input Validation** — Zod schemas on all forms
- **Environment Variables** — Never exposed in client
- **CORS Headers** — Edge functions secured
- **No Secrets in Repo** — .env.local in .gitignore

## 🚢 Deployment

### Vercel (Recommended)
```bash
# Push to GitHub, connect to Vercel
# Auto-deploys on push to main
# Edge Functions run on Vercel Functions
```

### Self-Hosted
```bash
npm run build
npm run preview
# or
bun run build
bun run preview
```

## 📊 Analytics (Optional)

Add to `.env.local`:
```
VITE_GA4_ID=G-XXXXXXXXXX
VITE_META_PIXEL_ID=xxxxxxxxxxxxx
```

Integrate tracking in:
- App.tsx (page views)
- Forms (conversions)
- Button clicks (CTAs)

## 🔗 CRM Integration (Optional)

### HubSpot
```bash
# Set in .env.local:
HUBSPOT_API_KEY=pat-xxxxxxxxxxxx

# Edge function will auto-sync leads on webhook
```

### Notion (Alternative)
```bash
# Use Notion API + webhook in leads-webhook function
```

## 📧 Email Setup (Optional)

### Mailchimp
```bash
MAILCHIMP_API_KEY=xxxxxxxxxxxxxxxx

# Connect newsletter subscribers for broadcasts
```

## 🛠 Development Workflow

1. **Feature Branch** — `git checkout -b feature/xyz`
2. **Make Changes** — Edit components/pages
3. **Test Locally** — `npm run dev`
4. **Commit** — `git commit -m "Feature: xyz"`
5. **Push** — `git push origin feature/xyz`
6. **Deploy** — Merge to main (auto-deploys)

## 📝 Content Management

### Add Posts (via Supabase Dashboard)
1. Go to `posts` table
2. Insert: title, slug, content, category, status
3. Set `published_at` to go live
4. Auto-syncs to `/insights` feed

### Update Services
1. Edit `src/pages/Services.tsx`
2. Add/modify service objects
3. Rebuild & redeploy

### Update Properties
1. Go to Supabase `properties` table
2. Insert: title, location, value, roi_percent
3. Auto-displays on `/real-estate`

## 🎓 Learning Resources

- [Supabase Docs](https://supabase.com/docs)
- [React Query](https://tanstack.com/query/latest)
- [shadcn/ui](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)

## 📄 License

© 2025 Invest with Diomin. All rights reserved.

---

**Questions?** Contact: stephanie@investwithdiomin.com
# Project Quickstart

This project was vibe coded with [SteerCode](https://steercode.com).

Follow this guide for editing, running, and publishing your project.

## Project Access

Visit your project directly here:

[<YOUR_PROJECT_URL>](<YOUR_PROJECT_URL>)

## How to Edit Your Project

You have several options to manage and edit your project:

### Using SteerCode

* Access your [project at SteerCode](<YOUR_PROJECT_URL>).
* Edit directly using simple prompts.
* All changes are automatically saved to your repository.

### Using a Local IDE

Follow these steps to edit your project locally:

1. **Clone Your Repository**

   ```bash
   git clone <YOUR_GIT_URL>
   ```

2. **Navigate to Your Project Directory**

   ```bash
   cd <YOUR_PROJECT_NAME>
   ```

3. **Install Dependencies**

   Ensure Node.js and npm are installed ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)):

   ```bash
   npm install
   ```

4. **Run the Development Server**

   Launch the local server with auto‑reload enabled:

   ```bash
   npm run dev
   ```

### Editing Directly on GitHub

For quick edits:

* Navigate to the file you wish to edit on GitHub.
* Click the pencil icon to enter edit mode.
* Make and commit your changes directly.

## Tech Stack

This project uses the following technologies:

* **Vite** – fast and efficient build tool
* **React** – interactive user interfaces
* **TypeScript** – JavaScript with strong typing
* **Tailwind CSS** – utility‑first CSS framework
* **shadcn‑ui** – modern UI components

## Publishing Your Project

To publish your project:

* Open [SteerCode](YOUR_PROJECT_URL).
* Click the **Publish** button.

Happy coding!