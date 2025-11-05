import { createClient } from "@supabase/supabase-js";

export async function POST(request: Request) {
  const { channel_usernames = [], playlist_ids = [] } = await request.json();
  const apiKey = process.env.VITE_YOUTUBE_API_KEY;
  if (!apiKey) return new Response(JSON.stringify({ error: "Missing YouTube API key" }), { status: 400 });
  const supabase = createClient(process.env.VITE_SUPABASE_URL!, process.env.VITE_SUPABASE_ANON_KEY!);

  const videos: any[] = [];
  async function fetchPlaylist(playlistId: string) {
    const res = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=25&playlistId=${playlistId}&key=${apiKey}`);
    const json = await res.json();
    (json.items || []).forEach((it: any) => {
      videos.push({
        title: it.snippet.title,
        description: it.snippet.description,
        videoId: it.contentDetails.videoId,
        publishedAt: it.contentDetails.videoPublishedAt || it.snippet.publishedAt,
        thumbnail: it.snippet.thumbnails?.high?.url || it.snippet.thumbnails?.default?.url,
      });
    });
  }

  // For simplicity, only playlists are processed here
  for (const pid of playlist_ids) await fetchPlaylist(pid);

  // Upsert media and optionally posts drafts
  for (const v of videos) {
    await supabase.from("media").upsert({
      type: "video",
      src: `https://www.youtube.com/watch?v=${v.videoId}`,
      caption: v.title,
      tags: ["youtube", "education"],
      credit: "YouTube",
      alt: v.title,
      width: 1280,
      height: 720,
      duration: null,
      external_id: v.videoId,
    }, { onConflict: "external_id" });
    // Optionally create a draft post if none matches title
    const { data: existing } = await supabase.from("posts").select("id").ilike("title", v.title).limit(1);
    if (!existing || existing.length === 0) {
      await supabase.from("posts").insert({ slug: `yt-${v.videoId}`, title: v.title, summary: v.description?.slice(0, 180) || "Video import", tags: ["education"], hero_url: v.thumbnail, media: [{ kind: "video", src: `https://www.youtube.com/watch?v=${v.videoId}` }], references: [{ title: "YouTube Source", url: `https://www.youtube.com/watch?v=${v.videoId}` }], source: "youtube" });
    }
  }

  return new Response(JSON.stringify({ imported: videos.length }), { status: 200 });
}
