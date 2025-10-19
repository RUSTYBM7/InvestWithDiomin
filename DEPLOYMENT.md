# Deployment Guide: InvestWithDiomin.today

## Domain Information
- **Domain**: InvestWithDiomin.today
- **Business Email**: book@investwithdiomin.today
- **Owner**: Stephanie Diomin, CPWA®

## DNS Records Required (from Domain Provider)

Contact your domain provider and configure these DNS records:

### A Record (Primary)
```
Type: A
Name: @
Value: [Hosting Provider's IP Address]
TTL: 3600
```

### CNAME Records
```
Type: CNAME
Name: www
Value: InvestWithDiomin.today
TTL: 3600

Type: CNAME
Name: mail
Value: mail.example.com (if using mail forwarding)
TTL: 3600
```

### MX Records (for email@investwithdiomin.today)
```
Type: MX
Priority: 10
Value: mail.investwithdiomin.today (or your mail provider)

Type: MX
Priority: 20
Value: mail2.investwithdiomin.today (backup)
```

### TXT Records (Security)
```
Type: TXT
Name: @
Value: v=spf1 include:sendgrid.net ~all
(Update based on your email provider)

Type: TXT
Name: default._domainkey
Value: [DKIM key from your email provider]

Type: TXT
Name: _dmarc
Value: v=DMARC1; p=reject; rua=mailto:admin@investwithdiomin.today
```

## Environment Setup

### .env Configuration
```bash
# Supabase
VITE_SUPABASE_URL=https://rcxggxntuyrdumtuqqsr.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Mailchimp
VITE_MAILCHIMP_API_KEY=38f371f39bf8ea36955e766cf4774077-us5
VITE_MAILCHIMP_SERVER=us5
VITE_MAILCHIMP_AUDIENCE_ID=5bb1893f5c

# Analytics (Optional)
VITE_GA4_ID=G-XXXXXXXXXX
VITE_META_PIXEL_ID=xxxxxxxxxxxxx
```

## Contact Information Updates Needed

1. **Email Forwarding**
   - Set up: book@investwithdiomin.today → Your primary email
   - Forward all inquiries to your personal email or business email

2. **Contact Form Notifications**
   - Update form recipient to: book@investwithdiomin.today
   - Configure Supabase to send notifications on new leads

3. **Calendar Integration**
   - Link Calendly or Google Calendar to book@investwithdiomin.today
   - Test consultation booking flow

4. **CRM Integration** (Optional)
   - HubSpot: Update domain in CRM settings
   - Notion: Update contact database with new email
   - Mailchimp: Verify sender email is book@investwithdiomin.today

## Hosting Options

### Option 1: Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod

# Link domain
vercel domains add investwithdiomin.today
```

### Option 2: Netlify
1. Connect GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add domain in Netlify dashboard

### Option 3: Traditional Hosting
1. Upload build files to hosting provider
2. Configure DNS records
3. Set up SSL certificate (usually automatic)

## SSL Certificate

Most modern hosts include free SSL via Let's Encrypt. Ensure:
- HTTPS is enabled
- Auto-renewal is configured
- Certificate covers InvestWithDiomin.today and www.InvestWithDiomin.today

## Post-Deployment Checklist

- [ ] Domain DNS propagated (24-48 hours)
- [ ] HTTPS working on InvestWithDiomin.today
- [ ] book@investwithdiomin.today email forwarding active
- [ ] Contact form submissions received
- [ ] Newsletter signup working
- [ ] Consultation booking system functional
- [ ] Mailchimp double opt-in working
- [ ] GA4 tracking active
- [ ] Meta Pixel firing
- [ ] All links internal/external working
- [ ] Mobile responsiveness verified
- [ ] Dark mode tested
- [ ] SEO meta tags correct
- [ ] Open Graph tags for social sharing
- [ ] Sitemap accessible at /sitemap.xml
- [ ] robots.txt in place

## Monitoring

### Uptime Monitoring
```bash
# Recommended services:
- Uptime Robot (free)
- Statuscake
- Pingdom
```

### Error Tracking
```bash
# Sentry (recommended)
npm install @sentry/react @sentry/tracing
```

### Analytics
- Google Analytics 4: Monitor traffic
- Mailchimp Analytics: Email engagement
- Supabase Dashboard: Database/function health

## Email Configuration (book@investwithdiomin.today)

### For Email Forwarding
1. Log into domain provider
2. Set email forwarding: book@investwithdiomin.today → personal email
3. Test by sending test email

### For Full Email Hosting
1. Choose provider (Gmail Business, Zoho, Microsoft 365, etc.)
2. Configure MX records
3. Set up email client with IMAP/SMTP credentials
4. Test sending/receiving

## Support Contacts

**Domain Provider Support**: [Your Domain Registrar]
**Hosting Support**: [Your Hosting Provider]
**Email Support**: [Your Email Provider]
**Supabase Support**: https://supabase.io/support
**Mailchimp Support**: https://mailchimp.com/help

## Next Steps

1. Register domain InvestWithDiomin.today with registrar
2. Point domain to hosting provider via DNS
3. Configure email forwarding for book@investwithdiomin.today
4. Deploy application to Vercel/Netlify/Host
5. Test all forms and functionality
6. Set up monitoring and analytics
7. Go live and promote!

---

**Last Updated**: January 2025
**Maintained by**: Stephanie Diomin, CPWA®
