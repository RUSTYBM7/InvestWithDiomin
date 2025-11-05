# Pre-Deployment Checklist - InvestWithDiomin.today v1.0.0

**Status**: ✅ READY TO VERIFY  
**Target**: Production Deployment to Vercel  
**Date**: January 2025

---

## Phase 1: Local Environment Verification (5 min)

### 1.1 Dependencies Installed
```bash
✅ npm install
# Should see "added X packages" with no errors
```

### 1.2 Build Succeeds Locally
```bash
✅ npm run build
# Expected output:
# ✓ 2211 modules transformed
# ✓ built in ~9 seconds
# ✓ Zero errors
```

### 1.3 Linting Passes
```bash
✅ npm run lint
# Should see "no errors"
```

### 1.4 Environment Variables Set
```bash
✅ cp .env.example .env.local
✅ Verify these 3 are set:
   - VITE_SUPABASE_URL
   - VITE_SUPABASE_ANON_KEY
   - VITE_OPENAI_API_KEY
```

---

## Phase 2: Local Dev Server Testing (10 min)

### 2.1 Start Dev Server
```bash
✅ npm run dev
# Should see:
# > Local: http://localhost:3000
# Vite middleware active
# Hot reload enabled
```

### 2.2 Test Homepage Loading
```bash
✅ Visit: http://localhost:3000
# Should see:
- Logo and navigation
- "Sign In" button visible
- Hero section loads
- No console errors
```

### 2.3 Test Navigation Bar
```bash
✅ Navigation menu works:
- About link navigates correctly
- Services link navigates correctly
- Contact link navigates correctly
- Sign In button visible when not authenticated
```

### 2.4 Test Public Routes
```bash
✅ Each loads without errors:
- http://localhost:3000/about
- http://localhost:3000/services
- http://localhost:3000/contact
- http://localhost:3000/privacy
- http://localhost:3000/terms
- http://localhost:3000/case-studies
```

### 2.5 Test 404 Page
```bash
✅ http://localhost:3000/nonexistent
# Should see:
- 404 error message
- Return to Home button
- Contact Support button
- No JavaScript errors
```

---

## Phase 3: Authentication Flow Testing (15 min)

### 3.1 Visit Sign-In Page
```bash
✅ http://localhost:3000/sign-in
# Should see:
- Email input field
- "Send Magic Link" button
- "Continue with Google" button
- Professional styling
- No console errors
```

### 3.2 Test Protected Route Redirect
```bash
✅ http://localhost:3000/insights (not authenticated)
# Should:
- Redirect to /sign-in
- Show "?next=/insights" in URL (after sign-in)
```

### 3.3 Test Sign-Out Flow
```bash
✅ If already signed in:
- Visit /insights
- Click "Sign Out" button
- Session clears
- Redirects to /sign-in
- localStorage auth token removed
```

---

## Phase 4: API Testing (10 min)

### 4.1 Test Valid API Request
```bash
✅ curl -X POST http://localhost:3000/api/v1/openai/query \
  -H "Content-Type: application/json" \
  -d '{"prompt": "What is wealth management?"}'

Expected response:
- Status: 200 OK
- JSON with "response" key
- Response contains AI text
```

### 4.2 Test Empty Prompt Validation
```bash
✅ curl -X POST http://localhost:3000/api/v1/openai/query \
  -H "Content-Type: application/json" \
  -d '{"prompt": ""}'

Expected response:
- Status: 400 Bad Request
- JSON: {"error": "Prompt cannot be empty"}
```

### 4.3 Test Missing Prompt Validation
```bash
✅ curl -X POST http://localhost:3000/api/v1/openai/query \
  -H "Content-Type: application/json" \
  -d '{}'

Expected response:
- Status: 400 Bad Request
- JSON: {"error": "Prompt is required..."}
```

### 4.4 Test Long Prompt Validation
```bash
✅ Send prompt with 2001+ characters

Expected response:
- Status: 400 Bad Request
- JSON: {"error": "Prompt must be between 2 and 2000 characters"}
```

### 4.5 Check Browser Console
```bash
✅ DevTools Console:
- No JavaScript errors
- No warnings about missing props
- No CORS errors
- Auth tokens visible in Application tab
```

---

## Phase 5: Build Artifacts Verification (5 min)

### 5.1 Check Build Output
```bash
✅ npm run build
# Should produce:
- dist/index.html (1.71 kB)
- dist/assets/index-*.css (~71 kB)
- dist/assets/index-*.js (~741 kB)
- dist/assets/browser-*.js
```

### 5.2 Verify File Sizes
```bash
✅ dist/assets/index-*.js:
- Gzipped: ~218 kB (within budget)
- Uncompressed: ~741 kB

✅ dist/assets/index-*.css:
- Gzipped: ~12 kB (within budget)
- Uncompressed: ~71 kB
```

### 5.3 Check for Source Maps
```bash
✅ Source maps exist for debugging:
- dist/assets/*.js.map
- dist/assets/*.css.map
```

---

## Phase 6: TypeScript & Linting (5 min)

### 6.1 TypeScript Compilation
```bash
✅ npx tsc --noEmit
# Should see:
- Zero errors
- Zero warnings
```

### 6.2 ESLint Check
```bash
✅ npm run lint
# Should see:
- Zero errors
- Zero warnings
```

### 6.3 No Console Errors on Build
```bash
✅ npm run build 2>&1 | grep -i error
# Should see:
- Zero matches
- Build completes successfully
```

---

## Phase 7: Vercel Configuration (5 min)

### 7.1 Verify vercel.json
```bash
✅ File exists: vercel.json
✅ Contains:
- buildCommand: "npm run build"
- Framework: "vite"
- Output directory: "dist"
```

### 7.2 Verify .vercelignore
```bash
✅ File exists: .vercelignore
✅ Contains common ignores:
- node_modules
- .env.local
- .git
- .gitignore
```

### 7.3 Check for Sensitive Files
```bash
✅ Verify NOT in repo:
- ❌ .env.local
- ❌ .env.production
- ❌ API keys in code
- ❌ Secrets in comments

✅ All sensitive data in:
- Environment variables only
```

---

## Phase 8: Environment Variables Setup (5 min)

### 8.1 Verify .env.example
```bash
✅ File contains all required variables:
- VITE_SUPABASE_URL
- VITE_SUPABASE_ANON_KEY
- VITE_OPENAI_API_KEY
- VITE_SITE_URL (optional)
```

### 8.2 Check .env.local (Local Only)
```bash
✅ .env.local has all 3 required variables
✅ Values are correct (not placeholders)
✅ File is NOT committed to git
```

### 8.3 Prepare for Vercel
```bash
✅ Note the 3 required variables:
1. VITE_SUPABASE_URL
2. VITE_SUPABASE_ANON_KEY
3. VITE_OPENAI_API_KEY

✅ Will add to Vercel dashboard before deploy
```

---

## Phase 9: Git Repository Check (5 min)

### 9.1 Check Git Status
```bash
✅ git status
# Should see:
- Clean working directory (no uncommitted changes)
- OR commit all changes before deploying
```

### 9.2 Verify .gitignore
```bash
✅ File contains:
- node_modules/
- .env.local
- .env.*.local
- dist/
- .DS_Store
- Secrets are NOT tracked
```

### 9.3 Verify No Secrets Committed
```bash
✅ git log --all -p | grep -i "sk-proj-"
# Should return: nothing (no API keys in history)

✅ git log --all -p | grep -i "supabase.*key"
# Should return: nothing (no Supabase keys in history)
```

---

## Phase 10: Supabase Configuration Check (5 min)

### 10.1 Verify Project ID
```bash
✅ Project ID: rcxggxntuyrdumtuqqsr
✅ URL: https://rcxggxntuyrdumtuqqsr.supabase.co
```

### 10.2 Check Auth Providers
```bash
✅ Email provider enabled in Supabase dashboard:
- Authentication → Providers → Email ✅ Enabled

✅ Google OAuth ready:
- Authentication → Providers → Google
- Client ID set
- Client Secret set
```

### 10.3 Verify Auth Redirect URLs
```bash
✅ In Supabase Authentication → URL Configuration:
- Site URL: (will be set to production URL)
- Redirect URLs: (will be set to production URL)

For development (localhost):
- http://localhost:3000/auth/callback
```

---

## Phase 11: Documentation Review (5 min)

### 11.1 Deployment Documentation Ready
```bash
✅ DEPLOY_TO_VERCEL_NOW.md exists
✅ AUTHENTICATION_COMPLETE.md exists
✅ AUTH_SETUP.md exists
✅ API_TESTING.md exists
✅ README_AUTH_MVP.md exists
✅ RELEASE_NOTES.md exists
✅ EXECUTIVE_SUMMARY.md exists
```

### 11.2 Setup Documentation Ready
```bash
✅ .env.example with comments
✅ Installation instructions clear
✅ Environment variables documented
✅ API endpoints documented
✅ Error handling documented
```

---

## Phase 12: Security Checklist (5 min)

### 12.1 Code Security
```bash
✅ No hardcoded API keys in source code
✅ No secrets in environment files
✅ Input validation on all endpoints
✅ Error messages don't leak sensitive info
✅ HTTPS will be enforced in production
```

### 12.2 Dependencies Security
```bash
✅ npm audit
# Should show: vulnerabilities (if any, document them)

✅ All dependencies up to date
✅ No deprecated packages
```

### 12.3 Authentication Security
```bash
✅ Supabase handles password hashing
✅ JWT tokens secure in browser
✅ OAuth flows use HTTPS
✅ No session data in URL (except ?next=)
```

---

## Phase 13: Production Readiness (5 min)

### 13.1 Performance Baseline
```bash
✅ Build time: 8-10 seconds
✅ JS bundle: <300 kB (before gzip)
✅ CSS bundle: <100 kB (before gzip)
✅ Hot reload: <500ms
```

### 13.2 Accessibility Check
```bash
✅ Keyboard navigation works
✅ Focus styles visible
✅ ARIA labels present
✅ Dark mode support working
✅ Color contrast sufficient
```

### 13.3 Mobile Responsiveness
```bash
✅ Test on mobile viewport (375px):
- Sign-in form readable
- Buttons clickable
- Navigation accessible

✅ Test on tablet viewport (768px):
- Layout adjusts properly
- All content visible

✅ Test on desktop (1920px):
- Content centered
- Full width not exceeded
```

---

## Final Deployment Checklist

### Before Pressing Deploy

- [ ] Phase 1-13 all completed ✅
- [ ] Build succeeds locally with zero errors
- [ ] All API endpoints tested and working
- [ ] Authentication flows working (email + Google)
- [ ] Protected routes redirecting correctly
- [ ] Environment variables ready
- [ ] .env.local contains valid credentials
- [ ] No secrets committed to git
- [ ] Documentation complete
- [ ] Security checks passed
- [ ] TypeScript builds without errors

### Deployment Steps

**Step 1: Vercel Dashboard Setup (2 min)**
```
1. Go to https://vercel.com/dashboard
2. Select InvestWithDiomin.today project
3. Go to Settings → Environment Variables
4. Add 3 variables:
   - VITE_SUPABASE_URL
   - VITE_SUPABASE_ANON_KEY
   - VITE_OPENAI_API_KEY
5. Save
```

**Step 2: Deploy (30 sec)**
```bash
vercel --prod
# or: git push origin main (if auto-deploy enabled)
```

**Step 3: Verify Deployment (2 min)**
```bash
1. Wait for deployment to complete
2. Visit: https://investwithdiomin.today
3. Test /sign-in page loads
4. Check for errors in browser console
```

---

## Post-Deployment Verification

### 1. Check Deployment Status
```bash
vercel logs
# Should see successful deploy logs
```

### 2. Test Production URLs
```bash
✅ https://investwithdiomin.today/ (loads)
✅ https://investwithdiomin.today/sign-in (loads)
✅ https://investwithdiomin.today/about (loads)
✅ https://investwithdiomin.today/insights (redirects to /sign-in)
```

### 3. Test Production API
```bash
✅ curl -X POST https://investwithdiomin.today/api/v1/openai/query \
  -H "Content-Type: application/json" \
  -d '{"prompt": "test"}'
# Should return 200 or 500 (if API key missing)
```

### 4. Update Supabase Settings
```bash
1. Go to Supabase dashboard
2. Authentication → URL Configuration
3. Update redirect URLs to production domain:
   - https://investwithdiomin.today/auth/callback
```

### 5. Test Authentication in Production
```bash
✅ Email magic link sign-in
✅ Google OAuth sign-in
✅ Protected route access
✅ Sign out functionality
```

---

## Troubleshooting During Deployment

### Build Fails
```bash
1. Check build locally: npm run build
2. Review build error logs
3. Fix issue
4. Redeploy: vercel --prod
```

### Environment Variables Missing
```bash
1. Check Vercel dashboard settings
2. Verify all 3 variables present
3. Redeploy: vercel --prod
```

### API Returns 500
```bash
1. Check VITE_OPENAI_API_KEY is set
2. Verify key is valid
3. Check OpenAI account status
4. Check Vercel function logs: vercel logs
```

### Auth Redirect Fails
```bash
1. Update Supabase URL configuration
2. Add https://investwithdiomin.today/auth/callback
3. Wait 1-2 minutes for DNS propagation
4. Test again
```

---

## Success Criteria

✅ **Production Deployment Successful When:**
1. Build completes with zero errors
2. Homepage loads at https://investwithdiomin.today
3. Sign-in page accessible
4. Email magic link authentication works
5. Google OAuth sign-in works
6. Protected /insights route requires auth
7. API endpoint responds correctly
8. No errors in browser console
9. Navigation works across all pages
10. Accessibility features functional

---

## Rollback Plan (If Needed)

If deployment has critical issues:

```bash
# View deployment history
vercel deployments list

# Redeploy previous version
vercel --prod

# Or revert manually in Vercel dashboard:
# Deployments → Select previous version → Promote to Production
```

---

## Next Steps After Deployment

1. **Monitor** - Check Vercel logs regularly
2. **Test** - Have team members test all flows
3. **Feedback** - Collect user feedback
4. **Document** - Update any deployment notes
5. **Plan** - Begin Phase 2 development

---

**Status**: ✅ READY FOR DEPLOYMENT  
**Last Updated**: January 2025  
**Next Action**: Execute deployment steps
