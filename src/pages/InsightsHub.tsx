import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Building2, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { LiveFeed } from "@/components/LiveFeed";

export default function InsightsHubPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const insights = {
    finance: [
      {
        id: "1",
        title: "2025 Tax Planning Strategies for High-Net-Worth Individuals",
        excerpt: "Explore advanced tax optimization techniques, strategic deferral methods, and compliance strategies...",
        category: "Tax Planning",
        date: "Jan 15, 2025",
      },
      {
        id: "2",
        title: "The Ultimate Guide to Charitable Giving Strategies",
        excerpt: "Maximize charitable impact while minimizing tax burden using donor-advised funds and charitable trusts...",
        category: "Philanthropy",
        date: "Jan 10, 2025",
      },
      {
        id: "3",
        title: "Estate Planning in an Uncertain Economy",
        excerpt: "Protect your legacy with proven multi-generational wealth transfer frameworks...",
        category: "Estate Planning",
        date: "Jan 5, 2025",
      },
    ],
    realestate: [
      {
        id: "4",
        title: "Real Estate as a Hedge Against Inflation",
        excerpt: "How strategic property investments can diversify your portfolio and provide long-term wealth preservation...",
        category: "Real Estate",
        date: "Jan 12, 2025",
      },
      {
        id: "5",
        title: "1031 Exchange Strategy in 2025",
        excerpt: "Optimize property portfolios through strategic 1031 exchanges for tax-deferred growth...",
        category: "Real Estate",
        date: "Jan 8, 2025",
      },
    ],
    technology: [
      {
        id: "6",
        title: "AI-Powered Wealth Management: The Future is Here",
        excerpt: "How artificial intelligence is transforming portfolio optimization and risk management...",
        category: "Technology",
        date: "Jan 14, 2025",
      },
      {
        id: "7",
        title: "Blockchain and the Future of Wealth Transfer",
        excerpt: "Exploring tokenization, smart contracts, and decentralized finance for legacy planning...",
        category: "Technology",
        date: "Jan 9, 2025",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-br from-background via-primary/5 to-secondary/5 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4">Weekly Insights & Market Updates</Badge>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Wealth Insights Hub</h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Stay informed with expert analysis, market commentary, and strategic guidance curated specifically for high-net-worth individuals. Our weekly digest combines professional insights with actionable strategies to keep you ahead of market movements and emerging opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Live Feed */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold">Latest Updates</h2>
            <p className="text-muted-foreground">Auto-updated every 30 seconds with latest market insights and analysis</p>
          </div>
          <div className="mx-auto max-w-2xl">
            <LiveFeed />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-3xl font-bold">Browse by Category</h2>
          <Tabs defaultValue="all" className="space-y-8">
            <TabsList className="grid w-full max-w-2xl grid-cols-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="finance">Finance</TabsTrigger>
              <TabsTrigger value="realestate">Real Estate</TabsTrigger>
              <TabsTrigger value="technology">Technology</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              {[...insights.finance, ...insights.realestate, ...insights.technology].map((article) => (
                <Link key={article.id} to={`/insights/${article.id}`}>
                  <Card className="transition-all hover:shadow-lg">
                    <CardHeader>
                      <div className="mb-2 flex items-center justify-between">
                        <Badge variant="outline">{article.category}</Badge>
                        <span className="text-xs text-muted-foreground">{article.date}</span>
                      </div>
                      <CardTitle className="text-xl">{article.title}</CardTitle>
                      <CardDescription className="text-base">{article.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="ghost" className="p-0">
                        Read Article <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </TabsContent>

            <TabsContent value="finance" className="space-y-6">
              {insights.finance.map((article) => (
                <Card key={article.id} className="transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-2 flex items-center justify-between">
                      <Badge variant="outline">{article.category}</Badge>
                      <span className="text-xs text-muted-foreground">{article.date}</span>
                    </div>
                    <CardTitle>{article.title}</CardTitle>
                    <CardDescription>{article.excerpt}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="realestate" className="space-y-6">
              {insights.realestate.map((article) => (
                <Card key={article.id} className="transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-2 flex items-center justify-between">
                      <Badge variant="outline">{article.category}</Badge>
                      <span className="text-xs text-muted-foreground">{article.date}</span>
                    </div>
                    <CardTitle>{article.title}</CardTitle>
                    <CardDescription>{article.excerpt}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="technology" className="space-y-6">
              {insights.technology.map((article) => (
                <Card key={article.id} className="transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-2 flex items-center justify-between">
                      <Badge variant="outline">{article.category}</Badge>
                      <span className="text-xs text-muted-foreground">{article.date}</span>
                    </div>
                    <CardTitle>{article.title}</CardTitle>
                    <CardDescription>{article.excerpt}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <Card className="mx-auto max-w-2xl border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8 text-center md:p-12">
              <h2 className="mb-4 text-3xl font-bold">Weekly Digest</h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Get curated wealth insights delivered to your inbox every Monday. Summaries of market trends, tax strategies, and emerging opportunities.
              </p>
              <Button size="lg">Subscribe to Digest</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
