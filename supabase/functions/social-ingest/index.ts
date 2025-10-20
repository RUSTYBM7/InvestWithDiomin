import { serve } from "https://deno.land/std@0.195.0/http/server.ts";

const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";

interface SocialPost {
  platform: string;
  caption: string;
  summary: string;
  posted_at: string;
  url?: string;
}

serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    // Fetch latest posts from Instagram & Threads
    // Note: This would require Instagram Graph API credentials
    // For now, returning placeholder automation structure
    
    const posts: SocialPost[] = [
      {
        platform: "instagram",
        caption: "Latest wealth strategy insights",
        summary: "Automated summary of Instagram post",
        posted_at: new Date().toISOString(),
        url: "https://instagram.com/investwithdiomin",
      },
      {
        platform: "threads",
        caption: "Real estate market update",
        summary: "Automated summary of Threads post",
        posted_at: new Date().toISOString(),
        url: "https://threads.net/@investwithdiomin",
      },
    ];

    // Insert posts into Supabase
    const response = await fetch(`${supabaseUrl}/rest/v1/posts`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${supabaseKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify(
        posts.map((p) => ({
          slug: `social-${p.platform}-${Date.now()}`,
          title: p.caption.substring(0, 100),
          source: p.platform,
          body_md: p.caption,
          summary: p.summary,
          tags: [p.platform, "automated"],
          published_at: p.posted_at,
        }))
      ),
    });

    if (!response.ok) {
      const error = await response.text();
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: `Ingested ${posts.length} social posts`,
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Social ingest error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
});
