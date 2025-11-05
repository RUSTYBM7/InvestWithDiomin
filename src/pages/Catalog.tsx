import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Footer from "@/components/Footer";

 type Doc = { slug: string; title: string; abstract: string; size_kb: number; format: string; topic: string; level: string; updated_at: string; version?: string; file_url?: string };

const TYPES = ["PDF", "CSV", "Slide"];
const TOPICS = ["markets", "recovery", "education", "real-estate", "credit"];
const LEVELS = ["Beginner", "Intermediate", "Pro"];
export default function CatalogPage() {
  const [docs, setDocs] = useState<Doc[]>([]);
  const [preview, setPreview] = useState<Doc | null>(null);
  const [q, setQ] = useState("");
  const [filters, setFilters] = useState({ type: "", topic: "", level: "" });

  useEffect(() => {
    const url = new URL("/api/v1/catalog", window.location.origin);
    if (filters.type) url.searchParams.set("type", filters.type);
    if (filters.topic) url.searchParams.set("topic", filters.topic);
    if (filters.level) url.searchParams.set("level", filters.level);
    if (q) url.searchParams.set("q", q);
    fetch(url.toString()).then(r => r.json()).then(j => setDocs(j.items || [])).catch(() => setDocs([]));
  }, [filters, q]);

  const requestDownload = async (d: Doc) => {
    try {
      const res = await fetch("/api/v1/catalog/sign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: d.slug }),
      });
      const json = await res.json();
      if (json?.signedUrl) {
        window.location.href = json.signedUrl;
        // analytics: catalog_download
      }
    } catch (e) {}
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-br from-background via-primary/5 to-secondary/5 py-16 md:py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="mb-3 text-4xl font-bold md:text-5xl">Library & Catalog</h1>
          <p className="mx-auto max-w-3xl text-muted-foreground">Frameworks, briefs, and reference documents to help you act with confidence.</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}>Download 'Investment Catalog 2025'</Button>
            <Button variant="outline" onClick={() => document.getElementById("subscribe")?.scrollIntoView({ behavior: "smooth" })}>Subscribe for Updates</Button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6">
          <div className="mb-6 grid gap-3 md:grid-cols-4">
            <Input placeholder="Search documents" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search documents" />
            <div className="flex flex-wrap gap-2 md:col-span-3">
              {[{k:"type", vals:TYPES}, {k:"topic", vals:TOPICS}, {k:"level", vals:LEVELS}].map(group => (
                <div key={group.k} className="flex items-center gap-2">
                  {group.vals.map(v => (
                    <Badge key={v} variant={filters[group.k as keyof typeof filters]===v? "default": "outline"} className="cursor-pointer" onClick={() => setFilters(f => ({...f, [group.k]: f[group.k as keyof typeof f]===v ? "" : v}))}>{v}</Badge>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {docs.map(d => (
              <Card key={d.slug} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="line-clamp-2">{d.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{d.abstract}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="mb-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
                    <span>{d.format}</span>
                    <span>• {Math.round(d.size_kb/1024)} MB</span>
                    <span>• Updated {new Date(d.updated_at).toLocaleDateString()}</span>
                    {d.version && <span>• v{d.version}</span>}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" onClick={() => setPreview(d)} aria-label="Preview">Preview</Button>
                    <Button onClick={() => requestDownload(d)} aria-label="Download">Download</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!preview} onOpenChange={() => setPreview(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader><DialogTitle>{preview?.title}</DialogTitle></DialogHeader>
          <div className="aspect-[3/4] w-full">
            {preview?.file_url ? (
              <iframe title={preview.title} src={preview.file_url} className="h-full w-full" />
            ) : (
              <div className="flex h-full items-center justify-center text-sm text-muted-foreground">Preview available after setup.</div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}