# 🚀 Quick Start - Deploy to Vercel

## 1️⃣ Install Vercel CLI (2 min)

```bash
npm install -g vercel
```

## 2️⃣ Login to Vercel (2 min)

```bash
vercel login
# Opens browser to authenticate
# Follow prompts and return to terminal
```

## 3️⃣ Deploy to Production (5 min)

```bash
vercel --prod
```

**What this does:**
- ✅ Builds your project
- ✅ Uploads to Vercel's CDN
- ✅ Shows you the deployment URL
- ✅ Provides live production link

**Terminal will show:**
```
✔ Production deployment complete
✔ Deployed URL: https://investwithdiomin-XXXXX.vercel.app
```

## 4️⃣ Add Environment Variables (2 min)

In **Vercel Dashboard** → Select Project → **Settings** → **Environment Variables**

Add these (copy from your .env):

```
VITE_SUPABASE_URL = https://rcxggxntuyrdumtuqqsr.supabase.co
VITE_SUPABASE_ANON_KEY = [paste your key]
VITE_MAILCHIMP_SERVER = us5
VITE_MAILCHIMP_AUDIENCE_ID = 5bb1893f5c
VITE_MAILCHIMP_API_KEY = [paste your key]
VITE_OPENAI_API_KEY = [paste your key]
```

**Then redeploy:**
```bash
vercel --prod
```

## 5️⃣ Connect Your Domain (5 min)

```bash
vercel domains add investwithdiomin.today
```

**Vercel will show you options:**

### Option A: Use Vercel Nameservers (Easiest)
```
In your domain registrar:
1. Go to DNS settings
2. Change nameservers to:
   - ns1.vercel-dns.com
   - ns2.vercel-dns.com
3. Save and wait 24-48 hours
```

### Option B: Add A Record
```
In your domain registrar:
1. Go to DNS settings
2. Create A record:
   Name: @
   Value: 76.76.21.21
   TTL: 3600
3. Wait 24-48 hours
```

### Option C: Add CNAME
```
www CNAME → cname.vercel-dns.com
```

## 6️⃣ Wait for DNS Propagation (24-48 hours)

Check status:
```bash
# Terminal
nslookup investwithdiomin.today

# Or online
https://www.whatsmydns.net
```

When propagated:
```
investwithdiomin.today → 76.76.21.21 ✅
www.investwithdiomin.today → Vercel ✅
HTTPS certificate → Active ✅
```

## 7️⃣ Test Your Site (5 min)

```
✅ Visit https://investwithdiomin.today
✅ Test newsletter signup
✅ Test consultation booking
✅ Test contact form
✅ Check mobile view (⌘+⌥+I or F12)
✅ Toggle dark mode
```

## 8️⃣ Email Setup (5 min)

### Option A: Email Forwarding (Free)

In your domain registrar:
```
Create forwarding rule:
book@investwithdiomin.today → your-email@gmail.com
```

Test:
```bash
Send test email to book@investwithdiomin.today
Check your personal email (should arrive in 1-5 min)
```

### Option B: Full Email Hosting (Professional)

Choose one:
- **Zoho Mail** - $2-7/month (Best value)
- **Gmail Business** - $6/month
- **Microsoft 365** - $6/month

Setup:
1. Sign up with email provider
2. Verify domain ownership
3. Update MX records (provider gives them)
4. Wait 24 hours for propagation
5. Start using book@investwithdiomin.today

## 9️⃣ Go Live! (1 min)

Your site is now live at:
```
🟢 https://investwithdiomin.today
📧 book@investwithdiomin.today
```

## 🔟 Monitoring

### Daily Checks

```bash
# Check site status
curl -I https://investwithdiomin.today

# View logs
vercel logs

# Real-time logs
vercel logs --follow
```

### Dashboard

1. Go to Vercel Dashboard
2. Select InvestWithDiomin project
3. Check:
   - ✅ Status (green = deployed)
   - ✅ Performance (response times)
   - ✅ Deployments (history)
   - ✅ Analytics (visitors)

---

## Troubleshooting

### Issue: Build fails
```bash
# Test locally first
npm run build

# If error, check:
npm install
npm run build:dev
```

### Issue: Domain not working
```bash
# Check DNS propagation
nslookup investwithdiomin.today

# If not propagated, wait 24 hours
# Check at: https://www.whatsmydns.net
```

### Issue: Forms not submitting
```bash
# Check environment variables in Vercel Dashboard
# Verify Supabase + Mailchimp API keys
# Redeploy after adding variables
vercel --prod
```

### Issue: HTTPS not active
```bash
# Vercel auto-issues SSL certificate
# Usually 24 hours after DNS propagation
# If still waiting, check:
# Vercel Dashboard → Settings → Domains
```

---

## Important Links

- **Vercel Dashboard**: https://vercel.com/dashboard
- **Supabase Dashboard**: https://app.supabase.com
- **Mailchimp Dashboard**: https://mailchimp.com/account
- **Domain Registrar**: [Your registrar login]
- **Your Site**: https://investwithdiomin.today

---

## Timeline

| Step | Time | Status |
|------|------|--------|
| Login to Vercel | 2 min | ✅ |
| Deploy to production | 5 min | ✅ |
| Add environment variables | 2 min | ✅ |
| Connect domain | 5 min | ✅ |
| DNS propagation | 24-48h | ⏳ |
| Email setup | 5 min | ✅ |
| Total time | ~2 days | 🎉 |

---

## Support

**Questions?**
- 📧 Email: book@investwithdiomin.today
- 🔗 Vercel Help: https://vercel.com/help
- 🔗 Supabase Docs: https://supabase.com/docs
- 🔗 Mailchimp Support: https://mailchimp.com/help

---

**You're all set!** 🎉

Your InvestWithDiomin.today platform will be live and ready to accept leads in 2 days.
