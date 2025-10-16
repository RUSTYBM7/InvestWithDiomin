import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Instagram, Linkedin } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import Footer from "@/components/Footer";

interface SocialPost {
  id: string;
  platform: string;
  caption: string;
  summary: string;
  media_url: string;
  post_url: string;
  posted_at: string;
}

export default function InsightsPage() {
  const [posts, setPosts] = useState<SocialPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      const { data, error } = await supabase
        .from("social_posts")
        .select("*")
        .order("posted_at", { ascending: false })
        .limit(12);

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error("Failed to load posts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const placeholderPosts = [
    {
      platform: "instagram",
      title: "Tax Planning for Year-End",
      summary: "Strategic moves to optimize your tax position before December 31st. Key considerations for high-net-worth individuals.",
      date: "2025-01-10",
    },
    {
      platform: "threads",
      title: "Estate Planning Essentials",
      summary: "Three critical documents every family needs for effective wealth transfer and legacy protection.",
      date: "2025-01-08",
    },
    {
      platform: "instagram",
      title: "Market Outlook Q1 2025",
      summary: "Insights on portfolio positioning and risk management strategies for the first quarter.",
      date: "2025-01-05",
    },
    {
      platform: "linkedin",
      title: "CPWA® Certification Journey",
      summary: "What it takes to earn the highest credential in private wealth management and why it matters.",
      date: "2025-01-03",
    },
    {
      platform: "threads",
      title: "Family Office Trends",
      summary: "Emerging trends in family office structures and multi-generational wealth governance.",
      date: "2024-12-28",
    },
    {
      platform: "instagram",
      title: "Alternative Investments 101",
      summary: "Understanding the role of alternatives in a diversified wealth portfolio.",
      date: "2024-12-22",
    },
  ];

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
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {placeholderPosts.map((post, index) => (
                <Card key={index} className="group transition-all hover:shadow-lg">
                  <div className="aspect-square overflow-hidden rounded-t-lg bg-gradient-to-br from-primary/20 to-secondary/20">
                    <div className="flex h-full items-center justify-center">
                      {post.platform === "instagram" ? (
                        <Instagram className="h-16 w-16 text-primary/40" />
                      ) : (
                        <ExternalLink className="h-16 w-16 text-primary/40" />
                      )}
                    </div>
                  </div>
                  <CardHeader>
                    <div className="mb-2 flex items-center justify-between">
                      <Badge variant="outline" className="capitalize">
                        {post.platform}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>
                    <CardTitle className="text-lg">{post.title}</CardTitle>
                    <CardDescription>{post.summary}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" className="w-full justify-between" asChild>
                      <a
                        href={`https://${post.platform}.com/investwithdiomin`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Post
                        <ExternalLink className="h-4 w-4" />
                      </a>
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