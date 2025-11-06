import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
// removed Input search per new directive
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { MediaHero } from "@/components/media/MediaHero";

type Post = { slug: string; title: string; summary: string; tags: string[]; hero_url?: string; published_at?: string; media_type?: string };

const TAGS = ["markets", "recovery", "education", "research"] as const;

export default function InsightsHub() {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState<string | null>(null);
  const [items, setItems] = useState<Post[]>([]);

  useEffect(() => {
    const url = new URL("/api/v1/posts", window.location.origin);
    if (q) url.searchParams.set("q", q);
    if (tag) url.searchParams.set("tag", tag);
    fetch(url.toString()).then(r => r.json()).then(j => setItems(j.items || [])).catch(() => setItems([]));
  }, [q, tag]);

  return (
    <div className="min-h-screen bg-background">
      <MediaHero
        tag="insights-hero"
        title="Insights That Empower Digital Wealth"
        subtitle="Live markets, recovery intelligence, and leverage briefs—curated via XcloudMultixPro."
        cta={
          <>
            <Button asChild aria-label="Market Dashboard"><Link to="/insights/markets">Market Dashboard</Link></Button>
            <Button variant="outline" asChild aria-label="Subscribe"><Link to="#subscribe">Subscribe</Link></Button>
            <Button variant="ghost" asChild aria-label="Contact on Instagram"><a href="https://instagram.com/stephaniediomin" target="_blank" rel="noopener noreferrer">Chat on Instagram</a></Button>
          </>
        }
      />

      {/* Controls and Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto grid gap-8 px-6 md:grid-cols-[1fr_320px]">
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <Input placeholder="Search insights" value={q} onChange={(e) => setQ(e.target.value)} className="max-w-sm" aria-label="Search insights" />
              <div className="flex flex-wrap items-center gap-2">
                {TAGS.map(t => (
                  <Badge key={t} variant={tag === t ? "default" : "outline"} className="cursor-pointer" onClick={() => setTag(tag === t ? null : t)}>{t}</Badge>
                ))}
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((p) => (
                <Card key={p.slug} className="overflow-hidden">
                  {p.hero_url && (
                    <div className="relative">
                      <img src={p.hero_url} alt={`${p.title} cover image`} loading="lazy" className="h-36 w-full object-cover" />
                      {p.media_type === "video" && (
                        <Badge className="absolute top-2 left-2 bg-black bg-opacity-60 text-white" variant="default">Video</Badge>
                      )}
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="line-clamp-2">{p.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{p.summary}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-3 flex flex-wrap gap-1">
                      {(p.tags || []).slice(0, 3).map((t) => (<Badge key={t} variant="outline">{t}</Badge>))}
                    </div>
                    <Button asChild variant="outline" aria-label="Read Insight"><Link to={`/insights/${p.slug}`}>Read Insight</Link></Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <Card>
              <CardHeader><CardTitle>Top Gainers</CardTitle><CardDescription>Live snapshot</CardDescription></CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Live data available after setup.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Recovery Tip</CardTitle></CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Document wallets and exchange tickets early. Preserve evidence trails before contacting third-parties.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Quick Course</CardTitle><CardDescription>XcloudMultixPro</CardDescription></CardHeader>
              <CardContent>
                <Button asChild><Link to="/services/xcloudmultixpro">Start Learning</Link></Button>
              </CardContent>
            </Card>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
}