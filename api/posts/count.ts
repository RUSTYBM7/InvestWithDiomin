import { createClient } from "@supabase/supabase-js";

export async function GET() {
  const url = process.env.VITE_SUPABASE_URL;
  const anon = process.env.VITE_SUPABASE_ANON_KEY;
  if (!url || !anon) return new Response(JSON.stringify({ error: "Missing Supabase env" }), { status: 400 });
  const supabase = createClient(url, anon);
  try {
    const since = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
    const { count, error } = await supabase
      .from("posts")
      .select("id", { count: "exact", head: true })
      .gte("published_at", since)
      .eq("status", "published");
    if (error) throw error;
    return new Response(JSON.stringify({ count: count ?? 0 }), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify({ error: "Supabase count failed" }), { status: 500 });
  }
}
