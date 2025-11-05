import { createClient } from "@supabase/supabase-js";

export async function POST(request: Request) {
  const { pin_urls = [], tags = ["pinterest","crypto"] } = await request.json();
  if (!Array.isArray(pin_urls) || pin_urls.length === 0) {
    return new Response(JSON.stringify({ error: "Provide pin_urls[]" }), { status: 400 });
  }
  const supabase = createClient(process.env.VITE_SUPABASE_URL!, process.env.VITE_SUPABASE_ANON_KEY!);
  let imported = 0;

  for (const url of pin_urls) {
    try {
      const res = await fetch(`https://www.pinterest.com/oembed.json?url=${encodeURIComponent(url)}`);
      if (!res.ok) continue;
      const meta = await res.json();
      const src = meta?.thumbnail_url || meta?.url;
      if (!src) continue;
      const title = meta?.title || 'Pinterest Media';
      const credit = 'Pinterest';
      const alt = `${title} - crypto inspiration`;

      const { error } = await supabase.from('media').insert({
        type: 'image',
        src,
        caption: title,
        tags,
        credit,
        alt,
        width: meta?.width || 1280,
        height: meta?.height || 720,
        duration: null,
        external_id: meta?.url || url,
      });
      if (!error) imported++;
    } catch (e) {
      // skip
    }
  }

  return new Response(JSON.stringify({ imported }), { status: 200 });
}
