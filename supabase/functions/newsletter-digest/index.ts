import { serve } from "https://deno.land/std@0.195.0/http/server.ts";

const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
const mailchimpApiKey = Deno.env.get("MAILCHIMP_API_KEY") || "";
const mailchimpServer = Deno.env.get("MAILCHIMP_SERVER") || "us5";
const mailchimpAudienceId = Deno.env.get("MAILCHIMP_AUDIENCE_ID") || "";

serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    // Fetch posts from past week
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const postsRes = await fetch(
      `${supabaseUrl}/rest/v1/posts?published_at=gte.${sevenDaysAgo.toISOString()}&limit=5&order=published_at.desc`,
      {
        headers: {
          Authorization: `Bearer ${supabaseKey}`,
          Accept: "application/json",
        },
      }
    );

    const posts = await postsRes.json();

    // Build digest HTML
    const digestHtml = `
      <h2>This Week in Wealth Strategy</h2>
      <p>Hello Stephanie's Community,</p>
      <p>Here's your weekly digest of insights:</p>
      <ul>
        ${posts.map((p: any) => `<li><strong>${p.title}</strong><br>${p.summary}</li>`).join("")}
      </ul>
      <p>Best,<br>Stephanie Diomin, CPWA®</p>
      <p><a href="https://investwithdiomin.today/insights">View all insights →</a></p>
    `;

    // Store digest in Supabase
    const digestRes = await fetch(`${supabaseUrl}/rest/v1/digests`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${supabaseKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "weekly",
        range_start: sevenDaysAgo.toISOString().split("T")[0],
        range_end: new Date().toISOString().split("T")[0],
        html: digestHtml,
        sent: false,
      }),
    });

    if (!digestRes.ok) {
      throw new Error("Failed to store digest");
    }

    // TODO: Send to Mailchimp as draft campaign
    // This would use Mailchimp Campaign API

    return new Response(
      JSON.stringify({
        success: true,
        message: "Digest compiled and ready to send",
        postsIncluded: posts.length,
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Newsletter digest error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
});
