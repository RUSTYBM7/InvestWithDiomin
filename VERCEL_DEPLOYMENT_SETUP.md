# Vercel Deployment Setup Guide - InvestWithDiomin.today

## Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

## Step 2: Login to Vercel

```bash
vercel login
# Follow the prompts to authenticate with your Vercel account
```

## Step 3: Deploy to Production

```bash
vercel --prod
```

This will:
- Build your project
- Deploy to Vercel's CDN
- Generate production URL
- Show deployment URL in terminal

## Step 4: Add Environment Variables to Vercel

Go to Vercel Dashboard → Project Settings → Environment Variables

Add these secrets (from your .env file):

```
VITE_SUPABASE_URL = https://rcxggxntuyrdumtuqqsr.supabase.co
VITE_SUPABASE_ANON_KEY = [your_key]
VITE_MAILCHIMP_SERVER = us5
VITE_MAILCHIMP_AUDIENCE_ID = 5bb1893f5c
VITE_MAILCHIMP_API_KEY = [your_key]
VITE_OPENAI_API_KEY = [your_key]
VITE_GA4_ID = [optional]
VITE_META_PIXEL_ID = [optional]
```

## Step 5: Connect Your Domain

```bash
vercel domains add investwithdiomin.today
```

Then follow Vercel's instructions to:
1. Point your domain registrar's nameservers to Vercel's nameservers
2. OR add Vercel's A record to your DNS settings

## Step 6: Verify Deployment

After DNS propagates (24-48 hours):

```bash
# Check domain
curl -I https://investwithdiomin.today

# Verify HTTPS
# Should see: HTTP/2 200 OK
# And: Strict-Transport-Security header
```

## Testing Production Site

1. ✅ Visit https://investwithdiomin.today
2. ✅ Test newsletter signup
3. ✅ Test consultation booking
4. ✅ Test contact form
5. ✅ Check mobile responsiveness
6. ✅ Test dark mode toggle
7. ✅ Verify SEO meta tags
8. ✅ Check analytics integration

## Redeploy After Changes

```bash
# Make changes locally
git add .
git commit -m "Update: description"

# Push to GitHub (if using Git)
git push

# Or redeploy directly
vercel --prod
```

## View Logs

```bash
# Real-time logs
vercel logs

# Function logs
vercel logs --follow
```

## Rollback Deployment

```bash
# View deployment history
vercel ls

# Rollback to previous version
vercel rollback
```

## Monitor Performance

1. Vercel Dashboard → Analytics
2. Check:
   - Response times
   - Error rates
   - Edge locations
   - Traffic distribution

## Troubleshooting

### Build Fails
```bash
# Test build locally first
npm run build

# Check build output
vercel build

# View Vercel logs
vercel logs --follow
```

### Domain Not Resolving
- Wait 24-48 hours for DNS propagation
- Check DNS settings at https://www.whatsmydns.net
- Verify Vercel nameservers are configured

### Environment Variables Not Loading
- Ensure variables are set in Vercel Dashboard
- Redeploy after adding/updating variables
- Check variable names match (VITE_ prefix)

### Forms Not Working
- Verify Supabase credentials
- Check Mailchimp API key
- Test manually in browser console

---

**Your production site will be live at:**
https://investwithdiomin.today

**Deployment Status**: Ready for production

Next: Contact your domain registrar and point your domain to Vercel!
