import { createClient } from "@supabase/supabase-js";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const page = Number(url.searchParams.get("page") || 1);
  const type = url.searchParams.get("type") || "";
  const topic = url.searchParams.get("topic") || "";
  const level = url.searchParams.get("level") || "";
  const q = url.searchParams.get("q") || "";
  const pageSize = 12;

  const supabase = createClient(process.env.VITE_SUPABASE_URL!, process.env.VITE_SUPABASE_ANON_KEY!);
  let query = supabase
    .from("documents")
    .select("slug,title,abstract,file_url,checksum,size_kb,format,topic,level,updated_at,version", { count: "exact" })
    .order("updated_at", { ascending: false })
    .range((page - 1) * pageSize, page * pageSize - 1);
  if (type) query = query.eq("format", type);
  if (topic) query = query.eq("topic", topic);
  if (level) query = query.eq("level", level);
  if (q) query = query.ilike("title", `%${q}%`);

  const { data, error, count } = await query;
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  return new Response(JSON.stringify({ items: data, page, pageSize, total: count ?? 0 }), { status: 200 });
}
