import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.8";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Get all active subscribers
    const { data: subscribers, error: subError } = await supabase
      .from("newsletter_subscribers")
      .select("email")
      .limit(100);

    if (subError) throw subError;

    // Get recent posts (last 7 days)
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const { data: posts, error: postError } = await supabase
      .from("posts")
      .select("*")
      .eq("status", "published")
      .gte("published_at", sevenDaysAgo.toISOString())
      .limit(5);

    if (postError) throw postError;

    // Create digest record
    const digestContent = posts
      .map((p) => `${p.title}\n${p.excerpt}\n`)
      .join("\n---\n\n");

    const { error: digestError } = await supabase.from("digests").insert({
      title: `Weekly Digest - ${new Date().toLocaleDateString()}`,
      content: digestContent,
      posts_included: posts.map((p) => p.id),
      recipients_count: subscribers?.length || 0,
    });

    if (digestError) throw digestError;

    return new Response(
      JSON.stringify({
        success: true,
        subscribers: subscribers?.length,
        posts_included: posts?.length,
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 400,
    });
  }
});
