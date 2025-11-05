import { createClient } from "@supabase/supabase-js";

export async function POST(request: Request) {
  const { slug } = await request.json();
  if (!slug) return new Response(JSON.stringify({ error: "Missing slug" }), { status: 400 });
  const supabase = createClient(process.env.VITE_SUPABASE_URL!, process.env.VITE_SUPABASE_ANON_KEY!);
  const { data, error } = await supabase
    .from("documents")
    .select("file_url")
    .eq("slug", slug)
    .single();
  if (error || !data) return new Response(JSON.stringify({ error: "Not found" }), { status: 404 });
  // In a full setup, generate a signed URL from storage with expiry. Here passthrough.
  const expiresAt = new Date(Date.now() + 10 * 60 * 1000).toISOString();
  return new Response(JSON.stringify({ signedUrl: data.file_url, expiresAt }), { status: 200 });
}
