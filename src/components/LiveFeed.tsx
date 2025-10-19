import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Zap, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  published_at: string;
}

export function LiveFeed() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadArticles();
    const interval = setInterval(loadArticles, 30000); // Refresh every 30s
    return () => clearInterval(interval);
  }, []);

  const loadArticles = async () => {
    try {
      const { data } = await supabase
        .from("posts")
        .select("id, title, excerpt, category, published_at")
        .eq("status", "published")
        .order("published_at", { ascending: false })
        .limit(5);

      if (data) setArticles(data);
    } catch (error) {
      console.error("Failed to load articles:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const placeholders = [
    {
      id: "1",
      title: "2025 Tax Planning Strategies for High-Net-Worth Individuals",
      excerpt: "Explore advanced tax optimization techniques tailored for entrepreneurs and executives planning their year-end strategies.",
      category: "Tax Planning",
      published_at: new Date().toISOString(),
    },
    {
      id: "2",
      title: "Estate Planning in an Uncertain Economy",
      excerpt: "Protect your legacy with proven multi-generational wealth transfer frameworks designed for modern families.",
      category: "Estate Planning",
      published_at: new Date(Date.now() - 86400000).toISOString(),
    },
    {
      id: "3",
      title: "Real Estate as a Hedge Against Inflation",
      excerpt: "How strategic property investments can diversify your portfolio and provide long-term wealth preservation.",
      category: "Real Estate",
      published_at: new Date(Date.now() - 172800000).toISOString(),
    },
  ];

  const displayArticles = articles.length > 0 ? articles : placeholders;

  return (
    <div className="space-y-4">
      {displayArticles.map((article, index) => (
        <Card key={article.id} className="transition-all hover:shadow-md">
          <CardContent className="p-4">
            <div className="mb-3 flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="mb-2 flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">
                    {article.category}
                  </Badge>
                  {index === 0 && (
                    <Badge className="gap-1 bg-primary/20 text-primary">
                      <Zap className="h-3 w-3" />
                      Live
                    </Badge>
                  )}
                </div>
                <h3 className="mb-1 font-semibold leading-snug">{article.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {article.excerpt}
                </p>
              </div>
              <Button variant="ghost" size="sm" className="flex-shrink-0">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              {new Date(article.published_at).toLocaleDateString()}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
