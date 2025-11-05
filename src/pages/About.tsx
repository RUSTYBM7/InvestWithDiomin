import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Award, Heart, Lightbulb, Users } from "lucide-react";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: "Integrity",
      description: "Unwavering commitment to ethical wealth management and transparent client relationships.",
    },
    {
      icon: Lightbulb,
      title: "Education",
      description: "Empowering clients through knowledge to make informed financial decisions.",
    },
    {
      icon: Users,
      title: "Empowerment",
      description: "Building confidence through strategic planning and personalized guidance.",
    },
    {
      icon: Heart,
      title: "Legacy",
      description: "Creating multi-generational impact through thoughtful wealth preservation.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-secondary/5 py-20 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(107,142,127,0.1),transparent_50%)]" />
        <div className="container relative mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="mb-6 border-primary/30">
              Certified Private Wealth Advisor
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">About Invest With Diomin</h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              A luxury fintech and wealth advisory practice, uniting timeless principles with intelligent automation. We design disciplined, tax-aware portfolios and legacy structures for founders, professionals, and families.
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Education-Forward Wealth Strategy
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-foreground/90">
                <p>
                  Stephanie Diomin is a <strong>CPWA® (Certified Private Wealth Advisor)</strong> specializing in advanced wealth strategy, tax optimization, and long-term legacy design.
                </p>
                <p>
                  With years in private wealth advising and an instinct for clarity in complexity, she merges financial discipline with human insight. Her approach is education-forward, empowering clients to understand their assets as tools of freedom and impact.
                </p>
                <p>
                  As the founder of <strong>Invest with Diomin</strong>, Stephanie guides professionals, entrepreneurs, and families through sophisticated wealth architecture—from tax-efficient portfolio design to multi-generational estate planning.
                </p>
                <p className="text-base italic text-muted-foreground">
                  "Wealth is not just about preservation—it's about purposeful growth, strategic transfer, and lasting impact."
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Card className="overflow-hidden border-muted/50 shadow-xl">
                <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-secondary/20" />
                <CardContent className="p-6 text-center">
                  <h3 className="mb-2 font-serif text-2xl font-bold">Stephanie Diomin</h3>
                  <Badge className="mb-3">CPWA®</Badge>
                  <p className="text-sm text-muted-foreground">
                    Founder, Invest with Diomin
                  </p>
                  <Separator className="my-4" />
                  <p className="text-xs text-muted-foreground">
                    Follow @investwithdiomin for wealth insights
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Core Values</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              The principles that guide every client relationship and wealth strategy
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-muted/50 text-center transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="mb-2 font-serif text-xl font-bold">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <Card className="mx-auto max-w-4xl border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/20">
                  <Award className="h-10 w-10 text-primary" />
                </div>
                <h3 className="mb-4 font-serif text-2xl font-bold md:text-3xl">
                  CPWA® Certification
                </h3>
                <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground">
                  The Certified Private Wealth Advisor® (CPWA®) designation is the highest credential offered by the Investments & Wealth Institute™, demonstrating advanced competency in complex wealth management topics including tax planning, estate planning, asset allocation, and risk management for high-net-worth clients.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}