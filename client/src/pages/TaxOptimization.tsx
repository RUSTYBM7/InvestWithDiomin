import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, TrendingUp, Shield, Zap } from "lucide-react";
import Footer from "@/components/Footer";
import { ConsultationDialog } from "@/components/ConsultationDialog";
import { Link } from "react-router-dom";

export default function TaxOptimizationPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/advisory" className="text-primary hover:underline">Advisory</Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-muted-foreground">Tax Optimization</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-background via-primary/5 to-secondary/5 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl">
            <Badge className="mb-4">Service Deep Dive</Badge>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Tax Optimization & Estate Planning</h1>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              Strategic tax planning represents one of the most direct paths to wealth preservation. For high-net-worth individuals, entrepreneurs, and families, the difference between ad-hoc tax management and proactive tax strategy can mean millions of dollars in unnecessary tax liability. Our comprehensive tax optimization and estate planning services integrate sophisticated strategies across federal, state, and international jurisdictions to minimize tax burden while maximizing wealth transfer efficiency.
            </p>
            <ConsultationDialog>
              <Button size="lg">Request Tax Strategy Consultation</Button>
            </ConsultationDialog>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl space-y-12">
            {/* Income Tax Optimization */}
            <div>
              <h2 className="mb-6 text-3xl font-bold">Income Tax Optimization</h2>
              <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
                Strategic income timing and entity structuring can significantly reduce annual tax liability. We analyze your complete income picture—W-2 compensation, business income, investment returns, and passive income streams—to identify optimization opportunities. Techniques include business entity restructuring, timing of income recognition, qualified small business stock treatment, and strategic deductions often overlooked by standard tax preparers.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {["Income Timing Strategies", "Entity Optimization", "Deduction Maximization", "Cost Segregation Analysis"].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <Zap className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Investment Tax Strategies */}
            <div>
              <h2 className="mb-6 text-3xl font-bold">Investment Tax Strategies</h2>
              <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
                Tax-aware investing transforms after-tax returns. We employ systematic tax-loss harvesting, strategic rebalancing windows, and location-aware asset placement to minimize capital gains while maintaining desired risk exposure. Our approach integrates tax considerations into investment decisions from day one, rather than treating taxes as an afterthought.
              </p>
            </div>

            {/* Estate Planning */}
            <div>
              <h2 className="mb-6 text-3xl font-bold">Multi-Generational Estate Planning</h2>
              <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
                Effective estate planning requires coordination across multiple structures: wills, trusts, business succession plans, insurance arrangements, and charitable strategies. We design comprehensive estate plans that minimize estate and gift taxes while ensuring seamless wealth transfer aligned with your family values and objectives. Our approach includes dynasty trusts, grantor retained annuity trusts (GRATs), intentionally defective grantor trusts (IDGTs), and charitable remainder trusts.
              </p>
            </div>

            {/* Charitable Giving */}
            <div>
              <h2 className="mb-6 text-3xl font-bold">Strategic Charitable Giving</h2>
              <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
                Maximize charitable impact while achieving significant tax savings. We structure donor-advised funds, charitable remainder trusts, charitable lead trusts, and private foundation strategies to align your philanthropic goals with tax efficiency. Many high-net-worth individuals can double or triple their charitable impact through strategic structuring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-3xl font-bold">Real-World Impact: Executive Wealth Preservation</h2>
            <Card className="border-primary/20">
              <CardHeader>
                <Badge className="mb-3 w-fit">Case Study: Executive with Concentrated Stock</Badge>
                <CardTitle className="text-2xl">$45M Wealth Preservation Strategy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  <strong>Situation:</strong> A C-suite executive with $45M in concentrated company stock, upcoming RSU vesting, and significant income from bonus/equity. No proactive tax planning in place.
                </p>
                <p>
                  <strong>Challenge:</strong> Annual tax liability exceeding $8M. Significant estate tax exposure. Business succession risk.
                </p>
                <p>
                  <strong>Our Strategy:</strong> We coordinated a multi-year plan including:
                  • Systematic diversification through collar strategies and hedging
                  • Timing of RSU vesting and exercise windows
                  • Charitable remainder trust for $10M in appreciated securities
                  • Family limited partnership for estate tax deferral
                  • Business succession insurance coordination
                </p>
                <p>
                  <strong>Outcome:</strong> Reduced annual tax liability by $2.1M (26% reduction), established $10M charitable giving vehicle generating $500K annual tax deductions, positioned $35M in assets for tax-efficient intergenerational transfer, and created business continuity plan.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Ready to Optimize Your Tax Strategy?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Schedule a comprehensive tax review and discover your personal optimization opportunities.
            </p>
            <ConsultationDialog>
              <Button size="lg">Book Tax Strategy Session</Button>
            </ConsultationDialog>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
