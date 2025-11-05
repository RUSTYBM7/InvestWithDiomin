# API Testing Guide

## OpenAI Chat API Route

### Endpoint

```
POST /api/v1/openai/query
```

### Development URL

```
http://localhost:3000/api/v1/openai/query
```

### Production URL

```
https://investwithdiomin.today/api/v1/openai/query
```

---

## Request Format

### Headers

```
Content-Type: application/json
```

### Body

```json
{
  "prompt": "Your question here"
}
```

---

## Response Format

### Success (200)

```json
{
  "response": "AI-generated response about investments..."
}
```

### Error (400)

```json
{
  "error": "Prompt is required and must be a string"
}
```

### Error (500)

```json
{
  "error": "AI service is not configured"
}
```

---

## Test Cases

### 1. Valid Query

```bash
curl -X POST http://localhost:3000/api/v1/openai/query \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "What is the best investment strategy for long-term wealth building?"
  }'
```

**Expected Response:**
```json
{
  "response": "Long-term wealth building typically involves a diversified portfolio of low-cost index funds, regular contributions, and a focus on minimizing fees and taxes..."
}
```

---

### 2. Empty Prompt (Should Fail)

```bash
curl -X POST http://localhost:3000/api/v1/openai/query \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": ""
  }'
```

**Expected Response (400):**
```json
{
  "error": "Prompt cannot be empty"
}
```

---

### 3. Missing Prompt (Should Fail)

```bash
curl -X POST http://localhost:3000/api/v1/openai/query \
  -H "Content-Type: application/json" \
  -d '{}'
```

**Expected Response (400):**
```json
{
  "error": "Prompt is required and must be a string"
}
```

---

### 4. Prompt Too Long (Should Fail)

```bash
curl -X POST http://localhost:3000/api/v1/openai/query \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
  }'
```

**Expected Response (400):**
```json
{
  "error": "Prompt must be between 2 and 2000 characters"
}
```

---

### 5. Missing API Key (Should Fail)

If `VITE_OPENAI_API_KEY` is not set:

```bash
curl -X POST http://localhost:3000/api/v1/openai/query \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "What is wealth management?"
  }'
```

**Expected Response (500):**
```json
{
  "error": "AI service is not configured"
}
```

---

## Integration Testing with JavaScript

### Browser Console

```javascript
// Test from browser console (after authentication)
async function testAIChat(prompt) {
  const response = await fetch('/api/v1/openai/query', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt })
  });
  
  const data = await response.json();
  console.log(data);
  return data;
}

// Test it
testAIChat('What is the stock market?');
```

---

## Bash Script for Batch Testing

Save as `test-api.sh`:

```bash
#!/bin/bash

API_URL="http://localhost:3000/api/v1/openai/query"

echo "Test 1: Valid Query"
curl -X POST $API_URL \
  -H "Content-Type: application/json" \
  -d '{"prompt": "What is wealth management?"}'
echo -e "\n\n"

echo "Test 2: Empty Prompt"
curl -X POST $API_URL \
  -H "Content-Type: application/json" \
  -d '{"prompt": ""}'
echo -e "\n\n"

echo "Test 3: Missing Prompt"
curl -X POST $API_URL \
  -H "Content-Type: application/json" \
  -d '{}'
echo -e "\n"
```

Run with:
```bash
chmod +x test-api.sh
./test-api.sh
```

---

## Environment Setup for Testing

### Local Development

```bash
# 1. Copy env template
cp .env.example .env.local

# 2. Add your OpenAI API key
echo "VITE_OPENAI_API_KEY=sk-proj-YOUR-KEY-HERE" >> .env.local

# 3. Start dev server
npm run dev

# 4. Test API
curl -X POST http://localhost:3000/api/v1/openai/query \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Test message"}'
```

---

## Production Testing

### Test on Vercel

```bash
# Build
npm run build

# Preview production build locally
npm run preview

# Then test against preview URL
curl -X POST http://localhost:3000/api/v1/openai/query \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Test message"}'
```

---

## Status Codes Reference

| Code | Meaning | Example |
|------|---------|---------|
| 200 | Success | Valid prompt processed |
| 400 | Bad Request | Missing/invalid prompt |
| 405 | Method Not Allowed | Non-POST request |
| 500 | Server Error | Missing API key |

---

## Rate Limiting (Future)

Currently no rate limiting. Consider implementing:
- Per-user limits (10 requests/minute)
- Per-IP limits (50 requests/minute)
- Supabase function quotas

---

## Monitoring

### Check API Logs

**Vercel:**
```bash
vercel logs
```

**Browser DevTools:**
- Network tab: Watch `/api/v1/openai/query` requests
- Console tab: Check for errors
- Application tab: View session tokens

---

## Troubleshooting

### API Returns 500

```bash
# Check if OpenAI API key is set
echo $VITE_OPENAI_API_KEY

# If empty, add to .env.local
VITE_OPENAI_API_KEY=sk-proj-...
```

### Slow Response

- OpenAI API may be slow
- Check network latency with DevTools
- Consider adding request timeout (30s)

### CORS Errors

Not applicable for same-origin requests (same domain)

---

## Security Best Practices

✅ Do:
- Keep API keys in `.env.local` (not committed)
- Use HTTPS in production
- Validate input on server-side
- Rate limit API calls

❌ Don't:
- Expose OpenAI API key in client code
- Log sensitive data
- Cache user prompts indefinitely
- Allow unlimited API usage
