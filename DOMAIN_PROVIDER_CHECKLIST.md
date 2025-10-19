# 📋 Domain Provider Checklist - InvestWithDiomin.today

**PRINT THIS AND KEEP HANDY WHEN SETTING UP**

---

## ✅ QUICK START (What You Need Immediately)

### Step 1: Get These From Hosting Provider
When you deploy to Vercel/Netlify, get these:

**From Vercel:**
```
[ ] Nameserver 1: ___________________________
[ ] Nameserver 2: ___________________________
[ ] OR IP Address: __________________________
[ ] SSL Certificate Status: ✓ Auto-issued
```

**From Netlify:**
```
[ ] Nameserver 1: ___________________________
[ ] Nameserver 2: ___________________________
[ ] OR IP Address: __________________________
```

### Step 2: Ask Your Domain Registrar (GoDaddy, Namecheap, Google Domains, etc.)

**"I need to point my domain InvestWithDiomin.today to my hosting provider. Which of these applies:"**

**Option A - Using Nameservers:**
```
[ ] I can update nameservers in my registrar panel
[ ] Where do I find nameserver settings?
[ ] Current nameservers: ____________________
[ ] New nameservers to use: _________________
```

**Option B - Using A Record (IP address):**
```
[ ] I can update A records in DNS settings
[ ] Where is my DNS editor/panel?
[ ] Current A record: _______________________
[ ] New A record (IP): ______________________
```

---

## 📧 EMAIL SETUP

### For Email Forwarding (Simple - Do This First)

Ask registrar:
```
[ ] "How do I set up email forwarding on my domain?"
[ ] "Can I forward book@investwithdiomin.today to [your-email@gmail.com]?"
[ ] Confirm forwarding works (send test email)
```

### For Full Email Hosting (Later - Professional)

Choose provider:
```
[ ] Gmail Business: $6/user/month
[ ] Zoho Mail: $2-7/user/month (Best value)
[ ] Microsoft 365: $6/user/month
```

From email provider, get:
```
[ ] MX Record 1: ____________________________
[ ] MX Record 2: ____________________________
[ ] SPF Record: ______________________________
[ ] DKIM Record: _____________________________
[ ] DMARC Record: ____________________________
```

Ask registrar:
```
[ ] "How do I update my MX records?"
[ ] "How do I add TXT records for SPF/DKIM?"
[ ] Test email sending/receiving
```

---

## 🔐 DNS RECORDS TO CONFIGURE

### Minimum (Required)

```
[ ] A Record or CNAME
    Name: @
    Value: [From hosting provider]
    TTL: 3600
    
[ ] www CNAME (Optional but recommended)
    Name: www
    Value: investwithdiomin.today
    TTL: 3600
```

### Email (If using full hosting)

```
[ ] MX Record Priority 10
    Value: [From email provider]
    
[ ] MX Record Priority 20 (backup)
    Value: [From email provider]
    
[ ] TXT Record (SPF)
    Name: @
    Value: v=spf1 include:[email-provider] ~all
    
[ ] TXT Record (DKIM - if applicable)
    Name: default._domainkey
    Value: [From email provider]
    
[ ] TXT Record (DMARC - if applicable)
    Name: _dmarc
    Value: v=DMARC1; p=reject; rua=mailto:admin@investwithdiomin.today
```

---

## 📞 QUESTIONS TO ASK YOUR REGISTRAR

### DNS & Domain Basics
```
[ ] "How do I access my domain's DNS settings?"
[ ] "How do I point my domain to a new hosting provider?"
[ ] "Can I use nameservers or do I need to update A records?"
[ ] "How long does DNS propagation usually take?"
[ ] "Can I check if DNS has propagated?"
```

### Email Setup
```
[ ] "How do I set up email forwarding?"
[ ] "How do I add MX records for email hosting?"
[ ] "How do I add TXT records for SPF/DKIM?"
[ ] "Where can I check email forwarding status?"
```

### SSL/HTTPS
```
[ ] "Is SSL certificate included with my plan?"
[ ] "Does SSL auto-renew?"
[ ] "Will the certificate cover both investwithdiomin.today and www?"
```

### Support
```
[ ] "What's your 24/7 support phone number?"
[ ] "How do I contact support if something breaks?"
[ ] "What's the average response time?"
```

---

## 🛠️ STEP-BY-STEP SETUP GUIDE

### Day 1: Initial Setup

**1. Deploy Application**
```
[ ] Deploy to Vercel/Netlify
[ ] Get hosting provider's nameservers or IP
[ ] Note it: _____________________________
```

**2. Domain Settings**
```
[ ] Log into domain registrar
[ ] Find DNS/Nameserver settings
[ ] Update to hosting provider's nameservers
     OR
[ ] Create A record with hosting provider's IP
```

**3. Set Up Email Forwarding**
```
[ ] In registrar, set up forwarding:
    book@investwithdiomin.today → [your-email]
[ ] Send test email to book@investwithdiomin.today
[ ] Confirm you receive it in [your-email]
```

**4. Wait for DNS Propagation**
```
[ ] DNS takes 24-48 hours to fully propagate
[ ] Check status at: https://www.whatsmydns.net
[ ] Enter: investwithdiomin.today
```

### Day 2: Verification

```
[ ] Domain resolves to correct IP
[ ] Website accessible at investwithdiomin.today
[ ] Email forwarding working
[ ] HTTPS certificate active
[ ] All forms functioning
[ ] Consultation booking works
[ ] Newsletter signup works
```

---

## 🚨 TROUBLESHOOTING CHECKLIST

### Problem: Domain Not Resolving

```
[ ] Check if DNS changes have propagated (whatsmydns.net)
[ ] Verify A record/nameservers are correct
[ ] Wait 24-48 hours
[ ] Clear browser cache (Cmd+Shift+Delete)
[ ] Try incognito/private browsing
[ ] Contact hosting provider support
```

### Problem: Email Not Working

```
[ ] Check if email forwarding is enabled
[ ] Verify forwarding address in registrar
[ ] Send test email to book@investwithdiomin.today
[ ] Check spam folder
[ ] If using full hosting:
    [ ] Verify MX records are in DNS
    [ ] Check SPF record is correct
    [ ] Wait 24 hours after MX changes
```

### Problem: Website Showing Old Content

```
[ ] Hard refresh browser (Cmd+Shift+R on Mac)
[ ] Clear browser cache
[ ] Try incognito/private mode
[ ] Try different browser
[ ] Check at: https://www.whatsmydns.net
```

### Problem: HTTPS Not Working

```
[ ] Wait 24 hours for DNS to propagate
[ ] Check hosting provider has issued SSL
[ ] Try clearing browser cache
[ ] Try https://www.investwithdiomin.today
[ ] Contact hosting provider if still failing
```

---

## 📱 REGISTRAR CONTACT INFORMATION

**Registrar Name**: _________________________
**Registrar Website**: ________________________
**Admin Email**: ____________________________
**Admin Phone**: ____________________________
**Account Username**: _______________________
**Support Phone**: __________________________

---

## 🏢 HOSTING PROVIDER CONTACT INFORMATION

**Hosting Provider**: ________________________
**Account Email**: ___________________________
**Account Phone**: ___________________________
**Support URL**: _____________________________
**Nameservers**: _____________________________

---

## 📧 EMAIL PROVIDER CONTACT INFORMATION

**Provider**: ________________________________
**Account Email**: ___________________________
**Admin URL**: _______________________________
**Support Phone**: __________________________

---

## 📝 IMPORTANT DATES

```
Domain Registered: ________________________
DNS Updated: ______________________________
Email Forwarding Set Up: _________________
Full Email Hosting Set Up: ________________
Website Goes Live: ________________________
Next Renewal Date: ________________________
```

---

## ✨ FINAL CHECKLIST

```
[ ] Domain InvestWithDiomin.today registered
[ ] Nameservers updated to hosting provider
[ ] A record updated (if using IP)
[ ] Email forwarding configured
[ ] Website accessible at domain
[ ] HTTPS working
[ ] All forms tested
[ ] Consultation booking working
[ ] Newsletter signup tested
[ ] Admin dashboard accessed
[ ] Analytics configured
[ ] Social media updated with new domain
[ ] Email signatures updated
[ ] Business cards updated (if needed)
[ ] Launch announcement ready
```

---

**Save this document and follow step-by-step!**

**Questions?** Contact:
- Domain Registrar Support
- Hosting Provider Support
- Email Provider Support

**Good luck with InvestWithDiomin.today! 🚀**
