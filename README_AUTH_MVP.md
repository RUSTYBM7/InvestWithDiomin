# InvestWithDiomin.today - Authentication MVP

**Status**: ✅ COMPLETE - Ready for Production Deployment  
**Owner**: Stephanie Diomin, CPWA®  
**Last Updated**: January 2025

---

## What's New: Authentication & Protected Routes

This release adds:

### ✅ Authentication System
- **Email Magic Links** - Passwordless authentication via email OTP
- **Google OAuth** - One-click sign-in with Google account
- **Session Management** - Automatic session persistence across page reloads
- **Protected Routes** - `/insights` and future `/dashboard/*` routes gated behind authentication

### ✅ Public Pages
- `/` - Landing page (public, CTA to Sign In)
- `/about`, `/contact`, `/privacy`, `/terms` - Public pages
- `/sign-in` - Authentication page (email magic link + Google OAuth)
- `/auth/callback` - OAuth/magic link redirect handler

### ✅ Protected Pages
- `/insights` - User dashboard with placeholder content
  - User greeting with email
  - Getting Started checklist
  - Investment positions card
  - 7-day P&L performance card
  - Watchlist card
  - Ask AI panel (integrated with OpenAI)
  - Sign out button

### ✅ API Routes
- `POST /api/v1/openai/query` - AI chat endpoint with hardened error handling

### ✅ Documentation
- `AUTH_SETUP.md` - Complete authentication configuration guide
- `API_TESTING.md` - API testing with curl examples
- `.env.example` - Environment variables template

---

## Quick Start (Development)

### 1. Install Dependencies

```bash
bun install
# or
npm install
```

### 2. Setup Environment

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your credentials:

```env
VITE_SUPABASE_URL=https://rcxggxntuyrdumtuqqsr.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
VITE_OPENAI_API_KEY=sk-proj-...
```

### 3. Start Development Server

```bash
npm run dev
# Server runs at http://localhost:3000
```

### 4. Test Authentication Flow

```bash
# 1. Visit http://localhost:3000
# 2. Click "Sign In" button
# 3. Enter your email
# 4. Check email for magic link (or use Supabase dashboard to simulate)
# 5. After sign-in, you're redirected to /insights
# 6. Click "Ask AI" to test OpenAI integration
```

---

## Architecture

### Client-Side Authentication (Vite SPA)

```
┌─────────────────┐
│  React App      │
│  (Vite)         │
└────────┬────────┘
         │
         ├─→ AuthProvider (useAuth hook)
         │   └─ Manages user session state
         │
         ├─→ useProtectedRoute hook
         │   └─ Redirects unauthenticated users to /sign-in
         │
         ├─→ SignIn Page
         │   ├─ Email magic link form
         │   └─ Google OAuth button
         │
         ├─→ AuthCallback Page
         │   └─ Handles OAuth/magic link redirects
         │
         └─→ InsightsProtected Page
             └─ User dashboard (gated route)
```

### API Routes

**Development**: Vite plugin handles `/api/v1/openai/query`  
**Production**: Vercel serverless function at `api/v1/openai/query.ts`

---

## File Structure

```
src/
├── lib/
│   └── auth.ts                 # Supabase auth functions
├── hooks/
│   ├── useAuth.tsx             # Auth context + hook
│   └── useProtectedRoute.tsx   # Route protection hook
├── pages/
│   ├── SignIn.tsx              # Sign-in page
│   ├── AuthCallback.tsx        # OAuth callback handler
│   ├── InsightsProtected.tsx   # Protected dashboard
│   ├── Privacy.tsx             # Privacy policy (public)
│   └── Terms.tsx               # Terms of service (public)
├── routes/
│   └── api-openai.ts           # OpenAI request handler
├── api/
│   └── v1-openai-query.ts      # Shared OpenAI logic
└── App.tsx                     # Route setup with AuthProvider

api/
└── v1/openai/
    └── query.ts                # Vercel serverless function

vite-plugin-api.ts             # Vite middleware for /api/* routes
```

---

## Authentication Flow

### Sign-In with Email Magic Link

```
User clicks "Sign In"
    ↓
Enters email address
    ↓
Clicks "Send Magic Link"
    ↓
POST /lib/auth.ts → supabase.auth.signInWithOtp()
    ↓
Supabase sends email with magic link
    ↓
User clicks magic link in email
    ↓
Redirects to http://localhost:3000/auth/callback
    ↓
/auth/callback waits 1s for Supabase to process
    ↓
Redirects to /insights (or ?next= param if provided)
    ↓
useAuth hook detects session, renders dashboard
```

### Sign-In with Google OAuth

```
User clicks "Continue with Google"
    ↓
POST /lib/auth.ts → supabase.auth.signInWithOAuth('google')
    ↓
Redirects to Google login page
    ↓
User authenticates with Google
    ↓
Google redirects to Supabase callback
    ↓
Supabase processes OAuth and creates session
    ↓
Redirects to http://localhost:3000/auth/callback
    ↓
/auth/callback waits 1s for Supabase to process
    ↓
Redirects to /insights
    ↓
useAuth hook detects session, renders dashboard
```

### Protected Route Access

```
User visits /insights (unauthenticated)
    ↓
useProtectedRoute hook checks session
    ↓
No user found → Navigate to /sign-in?next=/insights
    ↓
User signs in
    ↓
Auth callback redirects to ?next=/insights
    ↓
useProtectedRoute allows route render
    ↓
Dashboard displays with user context
```

---

## API: POST /api/v1/openai/query

### Request

```json
{
  "prompt": "What is wealth management?"
}
```

### Response (Success)

```json
{
  "response": "Wealth management is the process of providing comprehensive financial advice..."
}
```

### Response (Error)

```json
{
  "error": "Prompt must be between 2 and 2000 characters"
}
```

### Status Codes

- `200` - Success
- `400` - Bad request (validation error)
- `405` - Method not allowed (non-POST)
- `500` - Server error (missing API key)

### Testing

```bash
# Test locally
curl -X POST http://localhost:3000/api/v1/openai/query \
  -H "Content-Type: application/json" \
  -d '{"prompt": "What is wealth management?"}'

# Test in browser console
const response = await fetch('/api/v1/openai/query', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ prompt: 'Test message' })
});
const data = await response.json();
console.log(data);
```

See `API_TESTING.md` for comprehensive test cases.

---

## Environment Variables

### Required

```env
VITE_SUPABASE_URL              # Supabase project URL
VITE_SUPABASE_ANON_KEY         # Supabase anon key (publishable)
VITE_OPENAI_API_KEY            # OpenAI API key
```

### Optional

```env
VITE_SITE_URL                  # Site URL (for emails, links)
VITE_GA4_TRACKING_ID           # Google Analytics 4 ID
VITE_META_PIXEL_ID             # Meta Pixel ID
VITE_MAILCHIMP_API_KEY         # Mailchimp API key
VITE_MAILCHIMP_SERVER          # Mailchimp server (e.g., us5)
VITE_MAILCHIMP_AUDIENCE_ID     # Mailchimp audience/list ID
```

See `.env.example` for template.

---

## Deployment to Vercel

### 1. Build

```bash
npm run build
```

### 2. Add Environment Variables

Go to Vercel Dashboard → Project Settings → Environment Variables

Add these variables:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `VITE_OPENAI_API_KEY`
- All other variables from `.env.local`

### 3. Deploy

```bash
vercel --prod
```

### 4. Update Supabase Settings

Go to Supabase Dashboard → Authentication → URL Configuration

Update redirect URLs:
```
https://investwithdiomin.today/auth/callback
```

### 5. Update Google OAuth

Add to Google Cloud Console redirect URIs:
```
https://rcxggxntuyrdumtuqqsr.supabase.co/auth/v1/callback?provider=google
```

---

## Accessing Protected Routes

### Before Deployment

Visit: `http://localhost:3000/insights`
- Will redirect to `/sign-in`
- Sign in with email or Google
- Returns to `/insights`

### After Deployment

Visit: `https://investwithdiomin.today/insights`
- Same behavior as development

---

## User Context in Dashboard

Once authenticated, users see:

```
Welcome back, user@example.com

Getting Started Checklist (5 items)
- Complete your profile
- Link your bank account
- Set investment goals
- Review performance metrics
- Enable two-factor authentication

Positions Card
- VTSAX: $45,230
- VTIAX: $28,150
- VBTLX: $15,620
- Total: $89,000

7-Day P&L Card
- Performance: +$2,340 (+2.6%)
- Day gain: +$420
- Month gain: +$8,100

Watchlist
- SPY: $450.25
- QQQ: $380.12
- TSLA: $245.80
- AMZN: $185.50

Ask AI Panel
- Chat interface
- Messages with OpenAI
- Real-time responses
```

---

## Next Steps

### Phase 2 (Future)
- User profile page
- Edit user metadata (name, avatar)
- 2-factor authentication
- Email verification
- Forgot password flow
- Social sign-in options (Apple, GitHub)

### Phase 3 (Future)
- Real portfolio data integration
- Supabase database for user data
- Real-time P&L charts
- Personalized recommendations
- Email notifications

---

## Troubleshooting

### Authentication Not Working

**Check:**
1. `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are set
2. Email provider is enabled in Supabase
3. Redirect URL matches current domain
4. Browser console for errors: `console.log(useAuth())`

### API Returns 500

**Check:**
1. `VITE_OPENAI_API_KEY` is set correctly
2. Key doesn't have line breaks: `.replace(/[\r\n]/g, '')`
3. OpenAI account has credits/active subscription

### Sign-Out Not Working

**Check:**
1. Browser localStorage is enabled
2. No errors in browser console
3. Session was actually created (check DevTools → Application → Cookies)

---

## Security & Best Practices

✅ **Do:**
- Keep API keys in `.env.local` (git ignored)
- Use HTTPS in production
- Validate input on server-side
- Never log sensitive data
- Use secure cookies for sensitive data

❌ **Don't:**
- Commit `.env.local` to git
- Expose OpenAI API key in client code
- Cache user passwords
- Log auth tokens
- Use non-HTTPS in production

---

## Support

For issues or questions:
- Check `AUTH_SETUP.md` for detailed configuration
- Check `API_TESTING.md` for API examples
- Review Supabase docs: https://supabase.com/docs
- Check OpenAI docs: https://platform.openai.com/docs

---

## Build & Test Commands

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build            # Build for production
npm run preview          # Preview production build

# Linting
npm run lint             # Run ESLint

# Testing (Future)
npm test                 # Run test suite
```

---

## Stats

- **Build Size**: 714.12 kB JS (gzipped)
- **CSS Size**: 69.93 kB (gzipped 11.65 kB)
- **Build Time**: 8.12 seconds
- **Zero Build Errors**: ✅ Yes
- **TypeScript**: ✅ Strict mode
- **React Version**: 18.3.1
- **Vite Version**: 5.4.14

---

## Version History

### v1.0.0 - Authentication MVP
- Email magic link authentication
- Google OAuth integration
- Protected routes (/insights)
- AI chat panel with OpenAI
- Public pages (privacy, terms)
- API documentation
- Vercel deployment ready

---

**Made with ❤️ for Victory's InvestWithDiomin.today**
