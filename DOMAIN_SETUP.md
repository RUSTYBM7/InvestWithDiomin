# 🌐 InvestWithDiomin.today - Domain Setup Checklist

## What You Need From Your Domain Provider

### 1. **Domain Registrar Access**
- [ ] Log into your domain registrar account (GoDaddy, Namecheap, Google Domains, etc.)
- [ ] Verify domain ownership
- [ ] Access DNS settings panel

### 2. **Hosting Provider Details**
You'll need the following from your hosting/deployment provider:

#### If using **Vercel**:
- Nameservers provided by Vercel
- Or IP address for A record

#### If using **Netlify**:
- Netlify's DNS nameservers
- Or IP address for A record

#### If using **Traditional Host**:
- Server IP address
- Nameserver addresses
- Mail server addresses (if applicable)

### 3. **Email Provider Setup**
- [ ] Email provider chosen (Gmail Business, Zoho Mail, Microsoft 365, etc.)
- [ ] MX records obtained from email provider
- [ ] SPF record for sender authentication
- [ ] DKIM record for email signing
- [ ] DMARC policy configured

### 4. **DNS Records to Configure**

#### Minimum Required:
```
1. A Record (or CNAME)
   - Points domain to hosting provider

2. MX Records (Email)
   - Points to email provider for book@investwithdiomin.today

3. TXT Records (Security/SPF)
   - SPF record for email authentication
```

#### Recommended:
```
4. www CNAME Record
   - Redirects www.InvestWithDiomin.today to main domain

5. DKIM Records
   - Email signing for better delivery

6. DMARC Records
   - Email authentication policy
```

## Email Configuration: book@investwithdiomin.today

### Option A: Email Forwarding (Simplest)
**Steps:**
1. Go to domain registrar's email settings
2. Set up forwarding rule:
   - `book@investwithdiomin.today` → `your-personal-email@gmail.com`
3. Test by sending email to book@investwithdiomin.today
4. Verify receipt in personal email

**Cost**: Usually free or $1-2/month
**Setup Time**: 5 minutes

### Option B: Full Email Hosting (Best for Business)
**Recommended Providers:**
- **Gmail Business** ($6/user/month)
- **Zoho Mail** ($2-7/user/month) - Best value
- **Microsoft 365** ($6/user/month)

**Steps:**
1. Choose provider and sign up
2. Verify domain ownership
3. Update MX records (provider will give you these)
4. Wait 24-48 hours for DNS propagation
5. Add users and configure
6. Set up email client (Outlook, Mail, etc.)

**Cost**: $2-6/month per user
**Setup Time**: 30 minutes - 2 hours

## DNS Setup Timeline

- **Immediate**: Update DNS records in registrar panel
- **15 minutes - 2 hours**: Records may propagate
- **24-48 hours**: Full global DNS propagation
- **During this time**: Domain might be partially accessible

## Information You Already Have

✅ **Domain**: InvestWithDiomin.today
✅ **Email**: book@investwithdiomin.today
✅ **Supabase URL**: https://rcxggxntuyrdumtuqqsr.supabase.co
✅ **Mailchimp Integration**: Configured
✅ **Application**: Ready for deployment

## Information You Need to Get

### From Domain Registrar:
- [ ] Admin panel login credentials
- [ ] Current nameservers
- [ ] DNS record editing access

### From Hosting Provider (Vercel/Netlify/Host):
- [ ] Nameservers OR IP address for A record
- [ ] SSL certificate status
- [ ] Build/deployment settings

### From Email Provider (if using full hosting):
- [ ] MX records (usually 2-3)
- [ ] SPF record
- [ ] DKIM records
- [ ] DMARC policy
- [ ] IMAP/SMTP credentials

## Quick Setup Path (24 hours)

1. **Hour 1**: Register domain at registrar
2. **Hour 2**: Deploy app to Vercel/Netlify
3. **Hour 3**: Point domain to hosting via DNS
4. **Hours 4-24**: DNS propagation
5. **Day 2**: Test everything works
6. **Day 2**: Set up email forwarding
7. **Day 2**: Go live!

## Troubleshooting

### Domain not resolving?
- Wait 24-48 hours for DNS propagation
- Check DNS propagation at: https://www.whatsmydns.net
- Verify A record or CNAME is correct

### Email not working?
- Check MX records are correct
- Verify SPF record is in place
- Check DKIM signing (optional but recommended)
- Wait 24 hours after MX changes

### HTTPS not working?
- SSL certificate usually issued automatically
- Wait 24 hours after DNS points to host
- Request certificate if not auto-issued
- Check hosting provider's SSL settings

### Forms not sending emails?
- Verify book@investwithdiomin.today email forwarding active
- Check Supabase/Mailchimp configuration
- Test with personal email first

## Key Contacts to Keep Handy

```
Domain Registrar: ________________
Admin Login: ___________________
Hosting Provider: _______________
Hosting Control Panel: __________
Email Provider: _________________
Email Admin: ___________________
```

## Post-Setup Verification

After DNS propagates, verify:

```bash
# Check DNS A record
nslookup investwithdiomin.today

# Check MX records
nslookup -type=MX investwithdiomin.today

# Check SPF record
nslookup -type=TXT investwithdiomin.today

# Test website
curl https://investwithdiomin.today

# Test email
Send test email to book@investwithdiomin.today
```

## Need Help?

- **Domain Issues**: Contact domain registrar support
- **Email Issues**: Contact email provider support
- **Website Issues**: Contact hosting provider support
- **App Issues**: Check Supabase dashboard

---

**Created**: January 2025
**For**: Stephanie Diomin, CPWA®
**Domain**: InvestWithDiomin.today
**Email**: book@investwithdiomin.today
