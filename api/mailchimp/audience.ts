export async function GET() {
  const key = process.env.VITE_MAILCHIMP_API_KEY;
  const server = process.env.VITE_MAILCHIMP_SERVER;
  const audienceId = process.env.VITE_MAILCHIMP_AUDIENCE_ID;
  if (!key || !server || !audienceId) {
    return new Response(JSON.stringify({ error: "Missing Mailchimp env" }), { status: 400 });
  }
  try {
    const res = await fetch(`https://${server}.api.mailchimp.com/3.0/lists/${audienceId}`, {
      headers: { Authorization: `apikey ${key}` },
    });
    const data = await res.json();
    const total = data?.stats?.member_count ?? 0;
    return new Response(JSON.stringify({ total_members: total }), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify({ error: "Mailchimp fetch failed" }), { status: 500 });
  }
}
