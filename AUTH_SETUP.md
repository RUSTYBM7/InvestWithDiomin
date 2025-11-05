# Authentication Setup Guide

## Overview

This application uses **Supabase Auth** for user authentication with:
- Email magic links (passwordless authentication)
- Google OAuth integration
- Client-side session management
- Protected routes (/insights and future /dashboard/*)

---

## 1. Supabase Configuration

### Enable Email Authentication

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project: `rcxggxntuyrdumtuqqsr`
3. Navigate to **Authentication** → **Providers**
4. Enable **Email**
5. Set email redirect URL:
   - Development: `http://localhost:3000/auth/callback`
   - Production: `https://investwithdiomin.today/auth/callback`

### Enable Google OAuth

1. In **Authentication** → **Providers**, click **Google**
2. Add your Google OAuth credentials:
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Create OAuth 2.0 credentials (Web application)
   - Add authorized redirect URIs:
     ```
     https://rcxggxntuyrdumtuqqsr.supabase.co/auth/v1/callback?provider=google
     ```
   - Copy Client ID and Client Secret
3. Paste into Supabase Google provider settings

---

## 2. Environment Variables

Copy `.env.example` to `.env.local` and fill in values:

```bash
cp .env.example .env.local
```

Required variables:
```env
VITE_SUPABASE_URL=https://rcxggxntuyrdumtuqqsr.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
VITE_OPENAI_API_KEY=sk-proj-...
```

---

## 3. Authentication Flow

### Sign-In Page (`/sign-in`)

Users can authenticate via:
1. **Email Magic Link** - Enters email, receives OTP link, clicks to authenticate
2. **Google OAuth** - Redirects to Google login, returns authenticated session

### Protected Routes (`/insights`)

- Automatically redirects unauthenticated users to `/sign-in?next=/insights`
- After sign-in, redirects to original protected route
- Sign-out clears session and redirects to `/sign-in`

### Auth Callback (`/auth/callback`)

Handles OAuth and magic link redirects:
1. Supabase processes authentication
2. Redirects to `/auth/callback` with session data
3. Callback page waits 1 second for session processing
4. Redirects to original route or `/insights`

---

## 4. Testing Authentication Locally

### Test Email Magic Link

```bash
curl -X POST http://localhost:3000/api/v1/openai/query \
  -H "Content-Type: application/json" \
  -d '{"prompt": "What is wealth management?"}'
```

### Test Protected Route

```bash
# Before sign-in (should redirect to /sign-in)
curl http://localhost:3000/insights

# After sign-in (should load page with user context)
# Use browser console to verify:
# localStorage.getItem('sb-rcxggxntuyrdumtuqqsr-auth-token')
```

---

## 5. User Metadata

Supabase stores user info in JWT claims:

```typescript
// Available in authenticated context:
user.id          // UUID
user.email       // User email
user.user_metadata // Custom metadata (name, avatar, etc.)
```

---

## 6. Logout & Session Management

### Sign Out
- Clears Supabase session
- Removes localStorage tokens
- Redirects to `/sign-in`

### Session Persistence
- Automatically handled by Supabase SDK
- Session restored on page reload
- Stored in browser localStorage

---

## 7. Production Deployment (Vercel)

### Add Environment Variables

1. Go to Vercel Dashboard → Project Settings → Environment Variables
2. Add all variables from `.env.local`:
   ```
   VITE_SUPABASE_URL
   VITE_SUPABASE_ANON_KEY
   VITE_OPENAI_API_KEY
   ```
3. Redeploy: `vercel --prod`

### Update Supabase Email Redirect

Go to Supabase Authentication settings and add:
```
https://investwithdiomin.today/auth/callback
```

### Update Google OAuth Redirect

Add to Google Cloud Console:
```
https://rcxggxntuyrdumtuqqsr.supabase.co/auth/v1/callback?provider=google
```

---

## 8. Route Protection

### Public Routes
```
/
/about
/contact
/privacy
/terms
/sign-in
/auth/callback
/feature
/services
/case-studies
/real-estate
/philanthropy
/catalog
/admin
```

### Protected Routes
```
/insights          (requires authentication)
/dashboard/*       (future protected routes)
```

---

## 9. Common Issues

### Magic Link Not Working
- Verify Supabase email provider is enabled
- Check email redirect URL matches current domain
- Check spam folder for magic link email

### Google OAuth Not Working
- Verify Google OAuth credentials are correct
- Check redirect URI is added to Google Cloud Console
- Verify Google provider is enabled in Supabase

### Session Not Persisting
- Check localStorage is enabled
- Verify `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are correct
- Check browser console for errors

---

## 10. Troubleshooting

### View Current Session
```typescript
// In browser console:
const { data } = await supabase.auth.getSession();
console.log(data.session);
```

### Clear All Sessions
```typescript
// In browser console:
await supabase.auth.signOut();
localStorage.clear();
```

### Check Auth Logs
- Supabase Dashboard → Logs → Auth Events

---

## Next Steps

1. Deploy to Vercel: `vercel --prod`
2. Set up email notifications (optional)
3. Add user profile customization (future feature)
4. Implement 2FA (future feature)
5. Add social sign-in options (future feature)
