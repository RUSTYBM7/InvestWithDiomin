import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Instagram, Linkedin, BookOpen } from "lucide-react";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

interface Insight {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  tags: string[];
  author: string;
}

export default function InsightsPage() {
  const [insights, setInsights] = useState<Insight[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadInsights();
  }, []);

  const loadInsights = async () => {
    try {
      const response = await fetch("/api/insights");
      if (!response.ok) throw new Error("Failed to fetch");
      const data = await response.json();
      setInsights(data);
    } catch (error) {
      console.error("Failed to load insights:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-primary/5 to-secondary/5 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              Wealth Insights
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Weekly updates on wealth strategy, tax planning, and legacy design
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="outline" asChild>
                <a
                  href="https://instagram.com/investwithdiomin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <Instagram className="h-4 w-4" />
                  Follow on Instagram
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://threads.net/investwithdiomin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Follow on Threads
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://linkedin.com/in/stephaniediomin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <Linkedin className="h-4 w-4" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Latest Updates</h2>
            <p className="text-muted-foreground">
              Curated insights from across our social platforms
            </p>
          </div>

          {isLoading ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="animate-pulse">
                  <div className="aspect-square bg-muted" />
                  <CardHeader>
                    <div className="h-4 w-20 rounded bg-muted" />
                    <div className="h-6 w-full rounded bg-muted" />
                    <div className="h-16 w-full rounded bg-muted" />
                  </CardHeader>
                </Card>
              ))}
            </div>
          ) : insights.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <p>No insights available yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {insights.map((insight) => (
                <Card key={insight.id} className="group transition-all hover:shadow-lg" data-testid={`card-insight-${insight.id}`}>
                  <div className="aspect-square overflow-hidden rounded-t-lg bg-gradient-to-br from-primary/20 to-secondary/20">
                    <div className="flex h-full items-center justify-center">
                      <BookOpen className="h-16 w-16 text-primary/40" />
                    </div>
                  </div>
                  <CardHeader>
                    <div className="mb-2 flex items-center justify-between">
                      <Badge variant="outline" className="capitalize" data-testid={`badge-category-${insight.id}`}>
                        {insight.category.replace(/-/g, ' ')}
                      </Badge>
                      <span className="text-xs text-muted-foreground" data-testid={`text-date-${insight.id}`}>
                        {new Date(insight.publishedAt).toLocaleDateString()}
                      </span>
                    </div>
                    <CardTitle className="text-lg" data-testid={`text-title-${insight.id}`}>{insight.title}</CardTitle>
                    <CardDescription data-testid={`text-description-${insight.id}`}>{insight.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {insight.tags && insight.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-3">
                        {insight.tags.slice(0, 3).map((tag, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                    <Button variant="ghost" className="w-full justify-between" asChild data-testid={`button-read-${insight.id}`}>
                      <Link to={`/insights/${insight.slug}`}>
                        Read Article
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Newsletter CTA */}
          <Card className="mt-16 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8 text-center md:p-12">
              <h3 className="mb-4 font-serif text-2xl font-bold md:text-3xl">
                Weekly Digest Newsletter
              </h3>
              <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
                Get curated wealth insights delivered to your inbox every Monday. Summaries of the latest posts, market commentary, and exclusive content.
              </p>
              <Button size="lg">Subscribe to Newsletter</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}