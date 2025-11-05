import { createClient } from "@supabase/supabase-js";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q") || "";
  const supabase = createClient(process.env.VITE_SUPABASE_URL!, process.env.VITE_SUPABASE_ANON_KEY!);
  let query = supabase
    .from("posts")
    .select("id,slug,title,summary,tags,hero_url,published_at")
    .order("published_at", { ascending: false })
    .limit(25);
  if (q) query = query.or(`title.ilike.%${q}%,summary.ilike.%${q}%`);
  const { data, error } = await query;
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  return new Response(JSON.stringify({ items: data }), { status: 200 });
}
