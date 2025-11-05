# 🚀 DEPLOY NOW - InvestWithDiomin.today

**Status**: ✅ BUILD VERIFIED  
**Ready**: NOW  

---

## 3 Commands to Go Live

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Login
vercel login

# 3. Deploy to production
vercel --prod
```

**That's it.** Your site deploys in 5 minutes.

---

## Add Environment Variables (2 min)

After deployment:

1. Go to https://vercel.com/dashboard
2. Select your project
3. Click **Settings** → **Environment Variables**
4. Add these 6 variables from your `.env` file:

```
VITE_SUPABASE_URL = https://rcxggxntuyrdumtuqqsr.supabase.co
VITE_SUPABASE_ANON_KEY = [your key]
VITE_MAILCHIMP_SERVER = us5
VITE_MAILCHIMP_AUDIENCE_ID = 5bb1893f5c
VITE_MAILCHIMP_API_KEY = [your key]
VITE_OPENAI_API_KEY = [your key]
```

5. **Redeploy**:
```bash
vercel --prod
```

---

## Connect Your Domain (5 min)

```bash
vercel domains add investwithdiomin.today
```

Then:
- Go to your domain registrar (GoDaddy, Namecheap, etc.)
- Add **Vercel nameservers** to DNS:
  - `ns1.vercel-dns.com`
  - `ns2.vercel-dns.com`

OR add **A record**: `76.76.21.21`

---

## Email Setup (5 min)

Go to your domain registrar and create email forwarding:
```
book@investwithdiomin.today → your-personal-email@gmail.com
```

---

## Wait for DNS (24-48 hours)

Check status: https://www.whatsmydns.net

When you see both ✅, your site is live:
```
investwithdiomin.today → 76.76.21.21 ✅
HTTPS certificate → Active ✅
```

---

## Test Your Site

Visit: https://investwithdiomin.today

Verify:
- ✅ Homepage loads
- ✅ Newsletter signup works
- ✅ Forms submit
- ✅ Dark mode works
- ✅ Mobile responsive

---

## Timeline

| Step | Time |
|------|------|
| Deploy | 5 min |
| Add env vars | 2 min |
| Connect domain | 5 min |
| Setup email | 5 min |
| **DNS propagation** | **24-48h** |
| **LIVE** | **~2 days** |

---

## 🎉 You're Live!

```
https://investwithdiomin.today
book@investwithdiomin.today
```

---

**Run now:**
```bash
npm install -g vercel && vercel login && vercel --prod
```

That's all you need! 🚀
