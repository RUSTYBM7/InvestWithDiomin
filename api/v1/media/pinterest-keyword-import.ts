import { createClient } from "@supabase/supabase-js";

const KEYWORDS = [
  "bitcoin chart",
  "ethereum chart",
  "defi index",
  "crypto trading setup",
  "blockchain infographic",
  "crypto leverage",
  "onchain analytics",
  "crypto recovery",
  "altcoin season",
  "macro liquidity crypto",
  "derivatives funding rate",
  "perpetual futures crypto",
  "yield farming infographic",
  "stablecoin flows",
  "wallet security tips",
  "exchange proof of reserves",
  "tax crypto infographic"
];

async function discoverPins(keyword: string): Promise<string[]> {
  try {
    const resp = await fetch(`https://www.pinterest.com/search/pins/?q=${encodeURIComponent(keyword)}`, { headers: { "accept-language": "en-US,en" } });
    const html = await resp.text();
    // naive extraction of pin URLs
    const urls = Array.from(html.matchAll(/https:\/\/www\.pinterest\.com\/pin\/(\d+)/g)).map(m => `https://www.pinterest.com/pin/${m[1]}/`);
    return Array.from(new Set(urls)).slice(0, 8);
  } catch {
    return [];
  }
}

export async function POST() {
  const supabase = createClient(process.env.VITE_SUPABASE_URL!, process.env.VITE_SUPABASE_ANON_KEY!);
  let discovered: string[] = [];
  for (const kw of KEYWORDS) {
    const pins = await discoverPins(kw);
    discovered.push(...pins);
  }
  discovered = Array.from(new Set(discovered)).slice(0, 50);

  let imported = 0;
  for (const url of discovered) {
    try {
      const res = await fetch(`https://www.pinterest.com/oembed.json?url=${encodeURIComponent(url)}`);
      if (!res.ok) continue;
      const meta = await res.json();
      const src = meta?.thumbnail_url || meta?.url; if (!src) continue;
      const title = meta?.title || 'Pinterest Media';
      const alt = `${title} - crypto visual`;
      const { error } = await supabase.from('media').insert({
        type: 'image', src, caption: title, tags: ['pinterest','crypto','finance'], credit: 'Pinterest', alt,
        width: meta?.width || 1280, height: meta?.height || 720, duration: null, external_id: meta?.url || url,
      });
      if (!error) imported++;
    } catch {}
  }
  return new Response(JSON.stringify({ discovered: discovered.length, imported }), { status: 200 });
}