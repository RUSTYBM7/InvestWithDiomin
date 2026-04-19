import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Footer from "@/components/Footer";
import { track } from "@/integrations/analytics";

type Doc = { 
  id: number;
  slug: string; 
  title: string; 
  description: string; 
  category: string;
  price: string;
  features: string[];
  imageUrl?: string;
  downloadUrl?: string;
  status: string;
};

// remove TYPES, TOPICS, LEVELS and related filter/search state
export default function CatalogPage() {
  const [docs, setDocs] = useState<Doc[]>([]);
  const [preview, setPreview] = useState<Doc | null>(null);

  useEffect(() => {
    fetch("/api/catalog").then(r => r.json()).then(setDocs).catch(() => setDocs([]));
  }, []);

  const requestDownload = async (d: Doc) => {
    if (d.downloadUrl) {
      window.open(d.downloadUrl, '_blank');
      track('catalog_download', { slug: d.slug, title: d.title });
    }
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
              <Card key={d.slug} className="flex flex-col" data-testid={`card-catalog-${d.id}`}>
                <CardHeader>
                  <div className="mb-2">
                    <Badge variant="outline" className="capitalize" data-testid={`badge-category-${d.id}`}>
                      {d.category.replace(/-/g, ' ')}
                    </Badge>
                  </div>
                  <CardTitle className="line-clamp-2" data-testid={`text-title-${d.id}`}>{d.title}</CardTitle>
                  <CardDescription className="line-clamp-3" data-testid={`text-description-${d.id}`}>
                    {d.description}
                  </CardDescription>
                  {d.price && (
                    <div className="mt-2 text-sm font-semibold text-primary" data-testid={`text-price-${d.id}`}>
                      {d.price}
                    </div>
                  )}
                </CardHeader>
                <CardContent className="mt-auto">
                  {d.features && d.features.length > 0 && (
                    <ul className="mb-4 space-y-1 text-xs text-muted-foreground">
                      {d.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx}>• {feature}</li>
                      ))}
                      {d.features.length > 3 && (
                        <li className="font-semibold">+ {d.features.length - 3} more features</li>
                      )}
                    </ul>
                  )}
                  <div className="flex gap-2">
                    <Button variant="outline" onClick={() => setPreview(d)} aria-label="Preview" data-testid={`button-preview-${d.id}`}>
                      Learn More
                    </Button>
                    {d.downloadUrl && (
                      <Button onClick={() => requestDownload(d)} aria-label="Download" data-testid={`button-download-${d.id}`}>
                        Get Access
                      </Button>
                    )}
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
          <div className="space-y-4">
            <p className="text-muted-foreground">{preview?.description}</p>
            {preview?.features && preview.features.length > 0 && (
              <div>
                <h4 className="font-semibold mb-2">Features:</h4>
                <ul className="space-y-1 text-sm">
                  {preview.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
              </div>
            )}
            {preview?.price && (
              <div className="text-lg font-bold text-primary">{preview.price}</div>
            )}
            <div className="flex gap-2">
              <Button asChild>
                <a href="/contact">Contact Us</a>
              </Button>
              {preview?.downloadUrl && (
                <Button variant="outline" onClick={() => preview && requestDownload(preview)}>
                  Get Access
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}