import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, TrendingUp, Heart } from "lucide-react";
import Footer from "@/components/Footer";
import { ConsultationDialog } from "@/components/ConsultationDialog";

export default function FeaturePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero with Profile */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-secondary/5 py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Profile Image */}
            <div className="order-2 lg:order-1">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20" />
            </div>
            {/* Content */}
            <div className="order-1 lg:order-2">
              <Badge className="mb-4">Certified Private Wealth Advisor®</Badge>
              <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
                Stephanie Diomin, CPWA®
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                Founder of Invest with Diomin, a boutique wealth advisory firm specializing in tax-efficient legacy design, multi-generational wealth transfer, and sophisticated portfolio architecture for entrepreneurs, executives, and ultra-high-net-worth families.
              </p>
              <div className="mb-8 space-y-4">
                <div className="flex gap-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-semibold">CPWA® Designation</div>
                      <div className="text-sm text-muted-foreground">Highest credential in private wealth management</div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-semibold">15+ Years</div>
                      <div className="text-sm text-muted-foreground">Advanced wealth strategy & tax optimization</div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-start gap-3">
                    <Users className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-semibold">200+ Clients</div>
                      <div className="text-sm text-muted-foreground">Families & entrepreneurs with $10M+ net worth</div>
                    </div>
                  </div>
                </div>
              </div>
              <ConsultationDialog>
                <Button size="lg" className="group">
                  Schedule Discovery Call
                </Button>
              </ConsultationDialog>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-8 text-3xl font-bold md:text-4xl">Investment Philosophy</h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              "Wealth isn't measured solely in dollars—it's measured in impact, freedom, and legacy. I guide clients to see their assets as tools for purposeful growth, strategic wealth transfer, and lasting generational impact."
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardContent className="p-6 text-center">
                  <Heart className="mx-auto mb-3 h-8 w-8 text-primary" />
                  <h3 className="font-semibold">Purpose-Driven</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Align wealth strategy with personal values and family legacy</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <TrendingUp className="mx-auto mb-3 h-8 w-8 text-primary" />
                  <h3 className="font-semibold">Tax-Efficient</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Maximize returns through strategic tax optimization</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="mx-auto mb-3 h-8 w-8 text-primary" />
                  <h3 className="font-semibold">Holistic</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Integrate all wealth dimensions into one cohesive strategy</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-3xl font-bold">Background & Credentials</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">CPWA® Certification</CardTitle>
                </CardHeader>
                <CardContent>
                  Certified Private Wealth Advisor® designation from Investments & Wealth Institute™. Demonstrates mastery in tax planning, estate law, investment management, and wealth transfer strategies.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Private Wealth Management</CardTitle>
                </CardHeader>
                <CardContent>
                  15+ years advising ultra-high-net-worth individuals, entrepreneurs, and families on complex financial architecture, tax optimization, and multi-generational planning.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Education</CardTitle>
                </CardHeader>
                <CardContent>
                  Advanced studies in taxation, estate planning, and wealth management. Continuous education in regulatory compliance and emerging wealth strategies.
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
