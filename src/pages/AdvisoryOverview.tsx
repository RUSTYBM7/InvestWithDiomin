import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, TrendingUp, Shield, Target, Users, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { ConsultationDialog } from "@/components/ConsultationDialog";

export default function AdvisoryOverviewPage() {
  const services = [
    {
      slug: "private-wealth-strategy",
      title: "Private Wealth Strategy",
      icon: TrendingUp,
      description: "Comprehensive CPWA®-level wealth architecture",
      path: "/advisory/private-wealth-strategy",
    },
    {
      slug: "tax-optimization",
      title: "Tax Optimization",
      icon: Shield,
      description: "Advanced tax deferral and efficiency strategies",
      path: "/advisory/tax-optimization",
    },
    {
      slug: "estate-planning",
      title: "Estate & Legacy Planning",
      icon: Target,
      description: "Multi-generational wealth transfer frameworks",
      path: "/advisory/estate-planning",
    },
    {
      slug: "family-office",
      title: "Family Office Advisory",
      icon: Users,
      description: "Governance and succession planning",
      path: "/advisory/family-office",
    },
    {
      slug: "education",
      title: "Financial Education",
      icon: Lightbulb,
      description: "Masterclasses and executive coaching",
      path: "/advisory/education",
    },
  ];

  const benefits = [
    "Tax-efficient wealth accumulation",
    "Comprehensive risk management",
    "Intergenerational wealth transfer",
    "Alternative asset diversification",
    "Personalized financial roadmap",
    "Quarterly performance reviews",
    "Access to institutional investments",
    "24/7 advisor support",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-secondary/5 py-20 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.08),transparent_50%)]" />
        <div className="container relative mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4 text-sm">Comprehensive Wealth Advisory</Badge>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              Professional Advisory Services
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
              Crypto-focused wealth structuring with CPWA® discipline: leverage systems, tax-aware trading, DeFi yield under compliance, and multi-asset risk design. We architect explainable, auditable programs aligned to your objectives.
            </p>
            <p className="mb-10 text-base text-muted-foreground">
              With over 15 years of experience managing $2.8B+ in assets for 200+ client families, we've developed proven frameworks that consistently deliver measurable results. From tax optimization to multi-generational wealth transfer, our holistic approach ensures every aspect of your financial life works together seamlessly. Our advisory spans planning, implementation, and ongoing optimization with clear, data-informed checkpoints.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <ConsultationDialog>
                <Button size="lg">Schedule Advisory Consultation</Button>
              </ConsultationDialog>
              <Button size="lg" variant="outline" asChild>
                <Link to="/catalog">Download Service Overview</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Advisory Services</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Each service is customized to your specific goals, risk tolerance, and financial situation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link key={index} to={service.path}>
                  <Card className="h-full cursor-pointer transition-all hover:shadow-xl hover:border-primary/30">
                    <CardHeader>
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="ghost" className="w-full justify-start p-0">
                        Learn More →
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-3xl font-bold">Why Choose Invest with Diomin</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-lg text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>Our Track Record</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <p className="mb-2 text-3xl font-bold text-primary">$2.8B+</p>
                    <p className="text-sm text-muted-foreground">Assets Under Management</p>
                  </div>
                  <div>
                    <p className="mb-2 text-3xl font-bold text-primary">200+</p>
                    <p className="text-sm text-muted-foreground">Active Client Families</p>
                  </div>
                  <div>
                    <p className="mb-2 text-3xl font-bold text-primary">12.5%</p>
                    <p className="text-sm text-muted-foreground">Average Client ROI</p>
                  </div>
                  <div>
                    <p className="mb-2 text-3xl font-bold text-primary">$340M+</p>
                    <p className="text-sm text-muted-foreground">Tax Savings Delivered</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Asset Strategy */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>CPWA® Strategy in Digital Assets</CardTitle>
                <CardDescription>Institutional process applied to crypto</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We adapt CPWA® frameworks to wallets, exchanges, and DeFi positions: liquidity tiers, risk budgeting, and tax lot management guided by telemetry and governance.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>DeFi Yield & Compliance</CardTitle>
                <CardDescription>Yield with controls and documentation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Protocol due diligence, smart contract review, and income tracking with exportable reports suitable for tax filing and audits.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Smart Custody & Audits</CardTitle>
                <CardDescription>Policies, evidence, and recovery</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Key ceremonies, role-based access, and periodic audit packages. Recovery runbooks support rapid response to compromises.</p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild><Link to="/advisory/workshops">Workshops</Link></Button>
            <Button asChild variant="outline"><Link to="/advisory/courses">Courses</Link></Button>
            <Button asChild variant="ghost"><Link to="/advisory/portfolio-audits">Portfolio Audits</Link></Button>
          </div>
        </div>
      </section>
      {/* Process */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Our Proven Process</h2>
          <div className="mx-auto max-w-4xl space-y-8">
            {[
              {
                step: 1,
                title: "Comprehensive Discovery",
                description: "We conduct an in-depth analysis of your financial situation, goals, and values. This includes reviewing all assets, liabilities, tax situations, and estate plans.",
              },
              {
                step: 2,
                title: "Strategic Planning",
                description: "Our team develops a customized wealth strategy integrating tax optimization, investment management, risk mitigation, and legacy planning.",
              },
              {
                step: 3,
                title: "Implementation",
                description: "We execute the plan systematically, coordinating with your legal and tax advisors to ensure seamless implementation across all dimensions.",
              },
              {
                step: 4,
                title: "Ongoing Optimization",
                description: "Quarterly reviews, annual planning sessions, and continuous monitoring ensure your strategy remains aligned with your evolving goals.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
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