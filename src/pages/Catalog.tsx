import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Download, FileText, Check } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import Footer from "@/components/Footer";

export default function CatalogPage() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [hasDownloaded, setHasDownloaded] = useState(false);

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase.from("catalog_downloads").insert({
        email: formData.email.toLowerCase().trim(),
        name: formData.name || null,
      });

      if (error) throw error;

      toast.success("Catalog download started!");
      setHasDownloaded(true);

      // Simulate PDF download
      setTimeout(() => {
        window.open("/investment-catalog-2025.pdf", "_blank");
      }, 500);
    } catch (error) {
      console.error("Download error:", error);
      toast.error("Failed to process download. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const resources = [
    {
      title: "Investment Catalog 2025",
      description: "Complete overview of wealth management services and methodologies",
      pages: "24 pages",
      format: "PDF",
    },
    {
      title: "Tax Planning Guide",
      description: "Strategic tax optimization frameworks for high-net-worth individuals",
      pages: "16 pages",
      format: "PDF",
    },
    {
      title: "Estate Planning Checklist",
      description: "Comprehensive checklist for multi-generational wealth transfer",
      pages: "8 pages",
      format: "PDF",
    },
  ];
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-primary/5 to-secondary/5 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              Resource Catalog
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Download comprehensive guides on wealth management and legacy planning, including practical checklists, tax-aware frameworks, and portfolio design playbooks crafted to help you move from ideas to implementation with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Main Download Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-start">
            {/* Download Form */}
            <Card className="sticky top-24 border-primary/20 shadow-xl">
              <CardHeader>
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                  <Download className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Investment Catalog 2025</CardTitle>
                <CardDescription className="text-base">
                  Access our comprehensive wealth management resource guide, including methodology, service overview, and real client planning examples to help you evaluate fit and next steps.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!hasDownloaded ? (
                  <form onSubmit={handleDownload} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Smith"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Email Address <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                      <Download className="mr-2 h-5 w-5" />
                      {isLoading ? "Processing..." : "Download Catalog"}
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      By downloading, you agree to receive updates from Invest with Diomin.
                    </p>
                  </form>
                ) : (
                  <div className="space-y-4 text-center">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold">Download Started!</h3>
                      <p className="text-sm text-muted-foreground">
                        Your catalog should begin downloading shortly. Check your downloads folder.
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => window.open("/investment-catalog-2025.pdf", "_blank")}
                    >
                      Download Again
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Resource List */}
            <div className="space-y-6">
              <div>
                <h2 className="mb-4 text-2xl font-bold">Available Resources</h2>
                <p className="text-muted-foreground">
                  Explore our collection of wealth management guides and planning resources, from strategy blueprints to estate architecture checklists designed for founders, professionals, and families.
                </p>
              </div>
              <div className="space-y-4">
                {resources.map((resource, index) => (
                  <Card key={index} className="border-muted/50 transition-all hover:border-primary/30">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <FileText className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg">{resource.title}</CardTitle>
                          <CardDescription>{resource.description}</CardDescription>
                          <div className="mt-2 flex gap-3 text-xs text-muted-foreground">
                            <span>{resource.pages}</span>
                            <span>•</span>
                            <span>{resource.format}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}