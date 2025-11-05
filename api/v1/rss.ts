import { createClient } from "@supabase/supabase-js";

export async function GET() {
  const supabase = createClient(process.env.VITE_SUPABASE_URL!, process.env.VITE_SUPABASE_ANON_KEY!);
  const { data } = await supabase
    .from("posts")
    .select("title,slug,summary,published_at")
    .order("published_at", { ascending: false })
    .limit(20);

  const site = "https://investwithdiomin.today";
  const items = (data || []).map((p) => `\n<item>\n<title>${p.title}</title>\n<link>${site}/insights/${p.slug}</link>\n<description><![CDATA[${p.summary || ""}]]></description>\n<pubDate>${new Date(p.published_at).toUTCString()}</pubDate>\n</item>`).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>\n<rss version="2.0">\n<channel>\n<title>Invest With Diomin — Insights</title>\n<link>${site}/insights</link>\n<description>Crypto intelligence and briefs</description>${items}\n</channel>\n</rss>`;

  return new Response(xml, { status: 200, headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
