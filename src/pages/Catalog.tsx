import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Footer from "@/components/Footer";
import { track } from "@/integrations/analytics";

type Doc = { slug: string; title: string; abstract: string; size_kb: number; format: string; topic: string; level: string; updated_at: string; version?: string; file_url?: string };

// remove TYPES, TOPICS, LEVELS and related filter/search state
export default function CatalogPage() {
  const [docs, setDocs] = useState<Doc[]>([]);
  const [preview, setPreview] = useState<Doc | null>(null);

  useEffect(() => {
    fetch("/api/v1/catalog").then(r => r.json()).then(j => setDocs(j.items || [])).catch(() => setDocs([]));
  }, []);

  const requestDownload = async (d: Doc) => {
    try {
      const res = await fetch("/api/v1/catalog/sign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: d.slug }),
      });
      const json = await res.json();
      if (json?.signedUrl) {
        const fileRes = await fetch(json.signedUrl);
        const blob = await fileRes.blob();
        const a = document.createElement("a");
        const url = URL.createObjectURL(blob);
        a.href = url;
        a.download = `${d.title.replace(/[^a-z0-9]+/gi,'-').toLowerCase()}.${(d.format||'pdf').toLowerCase()}`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
        track('catalog_download', { slug: d.slug, title: d.title });
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
          {/* Removed search input and filter chips */}

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