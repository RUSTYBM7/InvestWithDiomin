import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, TrendingUp, PieChart, BarChart3 } from "lucide-react";
import Footer from "@/components/Footer";
import { ConsultationDialog } from "@/components/ConsultationDialog";
import { Link } from "react-router-dom";

export default function PrivateWealthStrategyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/advisory" className="text-primary hover:underline">Advisory</Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-muted-foreground">Private Wealth Strategy</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-background via-primary/5 to-secondary/5 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl">
            <Badge className="mb-4">Service Deep Dive</Badge>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Private Wealth Strategy (CPWA® Core)</h1>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              Our flagship service provides comprehensive financial architecture designed exclusively for high-net-worth individuals and families. Leveraging Stephanie's CPWA® expertise and 15+ years managing $2.8B+ in client assets, we integrate tax optimization, estate planning, investment management, and risk mitigation into one cohesive strategy.
            </p>
            <ConsultationDialog>
              <Button size="lg">Request Strategy Consultation</Button>
            </ConsultationDialog>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">What is Private Wealth Strategy?</h2>
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Private Wealth Strategy represents the highest level of financial advisory. Unlike traditional portfolio management, which focuses solely on investment returns, our approach integrates every dimension of your financial life—including tax efficiency, estate protection, liquidity planning, charitable giving, and business continuity.
                </p>
                <p>
                  For entrepreneurs and executives who have accumulated significant wealth, traditional advisors often miss critical opportunities. A CEO with concentrated stock positions, a founder planning an exit, or a family managing multi-generational assets requires a sophisticated framework that coordinates tax strategies, legal structures, and investment decisions.
                </p>
                <p>
                  This is where Private Wealth Strategy excels. We've developed proven frameworks that consistently deliver measurable outcomes: average client ROI of 12.5%, $340M+ in cumulative tax savings, and successful exits generating $1B+ in combined transaction value.
                </p>
              </div>
            </div>
            <div>
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>Key Metrics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <p className="mb-2 text-sm font-medium text-muted-foreground">Average AUM per Client</p>
                    <p className="text-3xl font-bold text-primary">$14M+</p>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-medium text-muted-foreground">Annual Strategy Reviews</p>
                    <p className="text-3xl font-bold text-primary">4</p>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-medium text-muted-foreground">Client Satisfaction</p>
                    <p className="text-3xl font-bold text-primary">98%</p>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-medium text-muted-foreground">Avg Tax Optimization Savings</p>
                    <p className="text-3xl font-bold text-primary">$1.7M</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Components */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-3xl font-bold">Core Components of Private Wealth Strategy</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                icon: PieChart,
                title: "Portfolio Architecture",
                description: "Comprehensive asset allocation integrating public/private markets, real estate, alternatives, and commodities. Customized for your risk tolerance and time horizon.",
              },
              {
                icon: TrendingUp,
                title: "Tax-Aware Investing",
                description: "Strategic positioning to minimize tax drag. Tax-loss harvesting, sector rotation, and timing optimization designed to maximize after-tax returns.",
              },
              {
                icon: BarChart3,
                title: "Risk Management",
                description: "Comprehensive risk assessment including market, concentration, liquidity, and succession risks. Insurance and alternative strategies to mitigate exposure.",
              },
              {
                icon: CheckCircle,
                title: "Estate & Legacy Planning",
                description: "Multi-generational planning including trusts, charitable structures, and wealth transfer strategies designed to preserve legacy and minimize estate taxes.",
              },
            ].map((component, index) => {
              const Icon = component.icon;
              return (
                <Card key={index}>
                  <CardHeader>
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle>{component.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{component.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-3xl font-bold">Real-World Impact</h2>
            <Card className="border-primary/20">
              <CardHeader>
                <Badge className="mb-3 w-fit">Case Study: Tech Founder Exit</Badge>
                <CardTitle className="text-2xl">$85M Equity Event Optimized</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  <strong>Situation:</strong> A software founder with concentrated $85M equity position, uncertain market conditions, and upcoming IPO lockup expiration. Had not planned tax or succession strategy.
                </p>
                <p>
                  <strong>Our Strategy:</strong> We designed a multi-year diversification plan coordinating tax deferral, charitable giving, business succession for remaining equity, and alternative investments.
                </p>
                <p>
                  <strong>Outcome:</strong> Deferred $12M in immediate taxes, created $3.2M annual charitable impact, transitioned founder to part-time advisory role with $18M in ongoing equity incentives, and rebalanced portfolio into $40M alternatives generating 8.5% annually.
                </p>
                <div className="mt-6 border-t pt-6">
                  <p className="text-sm font-medium">
                    **Result: Net present value optimization of $18.4M over 5-year window through coordinated tax + investment strategy.**
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-3xl font-bold">How We Build Your Strategy</h2>
          <div className="mx-auto max-w-3xl space-y-6">
            {[
              { step: 1, title: "Deep Discovery", desc: "We analyze your complete financial picture, including all assets, liabilities, income, tax situation, and goals." },
              { step: 2, title: "Opportunity Analysis", desc: "We identify specific optimization opportunities—tax deferral, diversification, hedging, succession planning." },
              { step: 3, title: "Strategy Design", desc: "We build a customized multi-year roadmap with specific actions, timelines, and projected outcomes." },
              { step: 4, title: "Coordinated Implementation", desc: "We partner with your legal, tax, and insurance advisors to execute seamlessly across all areas." },
              { step: 5, title: "Continuous Monitoring", desc: "Quarterly reviews and annual planning sessions ensure your strategy remains optimized and aligned with your goals." },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
