import { createClient } from "@supabase/supabase-js";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const tag = url.searchParams.get("tag") || "";
  const supabase = createClient(process.env.VITE_SUPABASE_URL!, process.env.VITE_SUPABASE_ANON_KEY!);
  let query = supabase
    .from("media")
    .select("id,type,src,caption,tags,credit,alt,width,height,duration,external_id,created_at")
    .order("created_at", { ascending: false })
    .limit(50);
  if (tag) query = query.contains("tags", [tag]);
  const { data, error } = await query;
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  return new Response(JSON.stringify({ items: data }), { status: 200 });
}
