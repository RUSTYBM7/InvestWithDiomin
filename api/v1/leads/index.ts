import { createClient } from "@supabase/supabase-js";

export async function POST(request: Request) {
  const { email, name, source, consent } = await request.json();
  if (!email) return new Response(JSON.stringify({ error: "Email required" }), { status: 400 });
  const supabase = createClient(process.env.VITE_SUPABASE_URL!, process.env.VITE_SUPABASE_ANON_KEY!);
  const { error } = await supabase.from("leads").insert({ email, name: name || null, source: source || "catalog", consent: !!consent });
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  return new Response(JSON.stringify({ ok: true }), { status: 200 });
}
