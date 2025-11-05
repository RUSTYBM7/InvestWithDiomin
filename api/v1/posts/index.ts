import { createClient } from "@supabase/supabase-js";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const page = Number(url.searchParams.get("page") || 1);
  const q = url.searchParams.get("q") || "";
  const tag = url.searchParams.get("tag") || "";
  const pageSize = 12;

  const supabase = createClient(process.env.VITE_SUPABASE_URL!, process.env.VITE_SUPABASE_ANON_KEY!);
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  let query = supabase
    .from("posts")
    .select("id,slug,title,summary,tags,hero_url,media,published_at,author,read_time", { count: "exact" })
    .order("published_at", { ascending: false })
    .range(from, to);

  if (q) query = query.ilike("title", `%${q}%`);
  if (tag) query = query.contains("tags", [tag]);

  const { data, error, count } = await query;
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  return new Response(JSON.stringify({ items: data, page, pageSize, total: count ?? 0 }), { status: 200 });
}
