import { createClient } from "@supabase/supabase-js";

export async function GET(request: Request) {
  const slug = new URL(request.url).pathname.split("/").pop()!;
  const supabase = createClient(process.env.VITE_SUPABASE_URL!, process.env.VITE_SUPABASE_ANON_KEY!);
  const { data, error } = await supabase
    .from("documents")
    .select("slug,title,abstract,file_url,checksum,size_kb,format,topic,level,updated_at,version,references")
    .eq("slug", slug)
    .single();
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 404 });
  return new Response(JSON.stringify(data), { status: 200 });
}
