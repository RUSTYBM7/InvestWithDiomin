import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GlassCard } from "@/components/ui/glass-card";
import { GlassButton } from "@/components/ui/glass-button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, RefreshCw, AlertCircle } from "lucide-react";

interface Article {
  id: number;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  slug?: string;
}

export function LiveFeed() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadArticles = async () => {
    setError(null);
    setIsLoading(true);
    try {
      const response = await fetch("/api/insights?limit=5");
      if (!response.ok) throw new Error("Failed to fetch insights");
      const data = await response.json();
      setArticles(data);
    } catch (err) {
      console.error("Failed to load articles:", err);
      setError("Unable to load latest insights. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadArticles();
  }, []);

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <GlassCard key={i} variant="subtle" className="p-4 animate-pulse">
            <div className="h-4 bg-muted rounded w-1/4 mb-3" />
            <div className="h-5 bg-muted rounded w-3/4 mb-2" />
            <div className="h-4 bg-muted rounded w-full" />
          </GlassCard>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <GlassCard variant="subtle" className="p-8 text-center">
        <AlertCircle className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
        <p className="text-muted-foreground mb-4">{error}</p>
        <GlassButton variant="outline" size="sm" onClick={loadArticles}>
          <RefreshCw className="h-4 w-4 mr-2" />
          Retry
        </GlassButton>
      </GlassCard>
    );
  }

  if (articles.length === 0) {
    return (
      <GlassCard variant="subtle" className="p-8 text-center">
        <p className="text-muted-foreground">No insights available yet.</p>
      </GlassCard>
    );
  }

  return (
    <div className="space-y-4">
      {articles.map((article, index) => {
        const href = article.slug ? `/insights/${article.slug}` : `/insights`;
        const isFirst = index === 0;

        return (
          <Link
            key={article.id}
            to={href}
            className="block group"
            data-testid={`feed-item-${article.id}`}
          >
            <GlassCard
              interactive
              className="p-4 md:p-5 transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {article.category}
                    </Badge>
                    {isFirst && (
                      <Badge className="gap-1 bg-primary/20 text-primary border-primary/30">
                        <Zap className="h-3 w-3" />
                        Live
                      </Badge>
                    )}
                  </div>
                  <h3 className="mb-1 font-semibold leading-snug group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {article.description}
                  </p>
                  <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                    <span>
                      {new Date(article.publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <ArrowRight className="h-4 w-4 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                </div>
              </div>
            </GlassCard>
          </Link>
        );
      })}
    </div>
  );
}
