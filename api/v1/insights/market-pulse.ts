import { createClient } from "@supabase/supabase-js";

export async function GET() {
  const supabase = createClient(process.env.VITE_SUPABASE_URL!, process.env.VITE_SUPABASE_ANON_KEY!);
  const { data, error } = await supabase
    .from("posts")
    .select("id,slug,title,summary,tags,hero_url,published_at")
    .contains("tags", ["markets-mini"]) 
    .order("published_at", { ascending: false })
    .limit(1)
    .maybeSingle();
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  return new Response(JSON.stringify(data), { status: 200 });
}
