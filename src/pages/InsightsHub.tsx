import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

type Post = { slug: string; title: string; summary: string; tags: string[]; hero_url?: string; published_at?: string };

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
      {/* Hero */}
      <section className="bg-gradient-to-br from-background via-primary/5 to-secondary/5 py-16 md:py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="mb-3 text-4xl font-bold md:text-5xl">Insights That Empower Digital Wealth</h1>
          <p className="mx-auto max-w-3xl text-muted-foreground">Live markets, recovery intelligence, and leverage briefs—curated via XcloudMultixPro.</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button asChild aria-label="Market Dashboard"><Link to="/insights/markets">Market Dashboard</Link></Button>
            <Button variant="outline" asChild aria-label="Subscribe"><Link to="#subscribe">Subscribe</Link></Button>
            <Button variant="ghost" asChild aria-label="Ask Stephanie AI"><a href="/api/openai/query" target="_blank" rel="noopener noreferrer">Ask Stephanie AI</a></Button>
          </div>
        </div>
      </section>

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
                    <img src={p.hero_url} alt={`${p.title} cover image`} loading="lazy" className="h-36 w-full object-cover" />
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