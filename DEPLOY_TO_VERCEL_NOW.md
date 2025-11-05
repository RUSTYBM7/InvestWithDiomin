# Deploy to Vercel - 3 Steps

**Status**: ✅ Ready to Deploy  
**Target**: https://investwithdiomin.today

---

## Step 1: Set Environment Variables

Go to: **https://vercel.com/dashboard → Select Project → Settings → Environment Variables**

Add these variables (copy from your `.env.local`):

```
VITE_SUPABASE_URL=https://rcxggxntuyrdumtuqqsr.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
VITE_OPENAI_API_KEY=sk-proj-...
```

**Save** and confirm all 3 are set.

---

## Step 2: Deploy

### Option A: Via CLI (Fastest)
```bash
npm run build     # Verify build succeeds
vercel --prod     # Deploy to production
```

### Option B: Via Git (If Connected)
```bash
git add .
git commit -m "Authentication MVP complete"
git push origin main
# Vercel auto-deploys on push
```

### Option C: Via Dashboard
1. Go to https://vercel.com/dashboard
2. Select project
3. Click "Deployments" tab
4. Click "Redeploy" on latest commit
5. Confirm environment variables are set

---

## Step 3: Verify Deployment

### Test in Browser
```
✅ https://investwithdiomin.today/
✅ https://investwithdiomin.today/sign-in
✅ https://investwithdiomin.today/insights (should redirect to /sign-in)
```

### Test API
```bash
curl -X POST https://investwithdiomin.today/api/v1/openai/query \
  -H "Content-Type: application/json" \
  -d '{"prompt": "test"}' 

# Should return 200 or 500 (if API key missing)
```

### Monitor Deployment
```bash
vercel logs    # View real-time logs
vercel env ls  # Verify env vars
```

---

## Post-Deployment: Supabase Configuration

### Update Email Redirect URL
1. Go to https://supabase.com/dashboard/project/rcxggxntuyrdumtuqqsr
2. Navigate: **Authentication → URL Configuration**
3. Add Site URL: `https://investwithdiomin.today`
4. Add Redirect URLs:
   ```
   https://investwithdiomin.today/auth/callback
   https://investwithdiomin.today/
   ```
5. Save

### Verify Google OAuth
1. Go to **Authentication → Providers → Google**
2. Confirm redirect URI is: `https://rcxggxntuyrdumtuqqsr.supabase.co/auth/v1/callback?provider=google`
3. If not set, add it
4. Save

---

## Testing Production Authentication

### Email Magic Link
```bash
1. Visit https://investwithdiomin.today/sign-in
2. Enter your email
3. Click "Send Magic Link"
4. Check email for link
5. Click link → redirects to /insights
6. Dashboard shows "Welcome back, [email]"
```

### Google OAuth
```bash
1. Visit https://investwithdiomin.today/sign-in
2. Click "Continue with Google"
3. Authenticate with Google
4. Redirects to /insights
5. Dashboard loads with your Google email
```

### Protected Route
```bash
1. Visit https://investwithdiomin.today/insights (logged out)
2. Should redirect to /sign-in
3. Sign in
4. Should redirect back to /insights
```

---

## Troubleshooting

### Build Failed
```bash
# Check for build errors locally first
npm run build
# Should see: ✓ built in 8.89s

# If fails, check:
npm install     # Install missing dependencies
npm run lint    # Check for syntax errors
```

### Environment Variables Not Found
```bash
# Verify all 3 vars are set in Vercel dashboard:
1. VITE_SUPABASE_URL
2. VITE_SUPABASE_ANON_KEY
3. VITE_OPENAI_API_KEY

# Redeploy after setting vars
vercel --prod
```

### API Returns 500
- Check VITE_OPENAI_API_KEY is set in Vercel
- Verify key is valid (starts with sk-proj-)
- Check OpenAI account has credits

### Magic Link Not Working
- Verify Supabase email redirect URL is set to: `https://investwithdiomin.today/auth/callback`
- Check spam folder for email
- Verify email provider is enabled in Supabase

---

## Deployment Status

Once deployed, verify all pages load:

| Route | Status | Notes |
|-------|--------|-------|
| `/` | ✅ Public | Landing page |
| `/sign-in` | ✅ Public | Authentication |
| `/auth/callback` | ✅ Public | OAuth handler |
| `/insights` | ✅ Protected | Requires sign-in |
| `/contact` | ✅ Public | Contact form |
| `/about` | ✅ Public | About page |
| `/privacy` | ✅ Public | Privacy policy |
| `/terms` | ✅ Public | Terms of service |
| `/api/v1/openai/query` | ✅ Public API | Requires valid prompt |

---

## Monitor Production

### View Logs
```bash
vercel logs
```

### Check Deployments
```bash
vercel deployments list
```

### View Errors
```bash
vercel logs --follow
```

---

## Done! 🎉

Your authentication system is now live at:
**https://investwithdiomin.today**

Users can:
- ✅ Sign in with email (magic link)
- ✅ Sign in with Google OAuth
- ✅ Access protected /insights dashboard
- ✅ Use Ask AI feature (calls OpenAI API)
- ✅ Sign out and clear session

---

## Next Steps

1. **Monitor**: Check Vercel logs for errors
2. **Test**: Share link with users for testing
3. **Feedback**: Collect user feedback
4. **Iterate**: Phase 2 features (2FA, profiles, etc.)

---

*Deployed with ❤️ to investwithdiomin.today*
