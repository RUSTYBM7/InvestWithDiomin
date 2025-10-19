import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Award, BookOpen, Building2, Home, TrendingUp, Download, Calendar, Zap } from "lucide-react";
import { ConsultationDialog } from "@/components/ConsultationDialog";
import { NewsletterForm } from "@/components/NewsletterForm";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { RotatingStats } from "@/components/RotatingStats";
import { AutomationFlyer } from "@/components/AutomationFlyer";
import { LiveFeed } from "@/components/LiveFeed";

export default function HomePage() {
  const services = [
    {
      title: "Private Wealth Strategy (CPWA® Core)",
      description: "Holistic portfolio strategy integrating tax, estate, and liquidity considerations for high-net-worth professionals and entrepreneurs.",
      includes: ["Tax-aware rebalancing", "Risk management", "Wealth preservation", "Personalized planning"],
      cta: "Explore Strategy",
      icon: TrendingUp,
    },
    {
      title: "Tax Optimization & Estate Planning",
      description: "Structuring multi-generational wealth through trusts, charitable entities, and business exit frameworks.",
      includes: ["Tax deferral", "Wealth transfer", "Charitable giving", "Succession planning"],
      cta: "Secure Your Legacy",
      icon: Award,
    },
    {
      title: "Real Estate & Alternative Assets",
      description: "Integrating tangible and alternative investments into a diversified wealth portfolio.",
      includes: ["Real estate analysis", "Private equity access", "Due diligence review"],
      cta: "Diversify Smarter",
      icon: Building2,
    },
    {
      title: "Family Office Advisory",
      description: "Guidance for families and multi-owner businesses building long-term governance and continuity.",
      includes: ["Operational structure", "Philanthropic strategy", "Wealth education for heirs"],
      cta: "Start Building",
      icon: Home,
    },
    {
      title: "Financial Education & Workshops",
      description: "Tailored sessions for professionals seeking to master high-level financial frameworks.",
      includes: ["Masterclasses", "Team education", "One-on-one coaching"],
      cta: "Book a Session",
      icon: BookOpen,
    },
  ];

  const caseStudies = [
    {
      title: "Liquidity Optimization",
      metric: "$8.5M",
      description: "Tax-efficient exit strategy for tech entrepreneur",
      result: "Reduced tax liability by 32% through structured planning",
    },
    {
      title: "Intergenerational Transfer",
      metric: "$15M",
      description: "Multi-generational wealth transfer framework",
      result: "Preserved 89% of estate value for heirs",
    },
    {
      title: "Portfolio Diversification",
      metric: "24% IRR",
      description: "Alternative asset integration strategy",
      result: "Outperformed traditional portfolio by 11%",
    },
  ];

  const values = ["Integrity", "Education", "Empowerment", "Legacy"];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-primary/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.1),transparent_50%)]" />
        <div className="container relative mx-auto px-6 py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="mb-6 border-primary/30 text-sm">
              Certified Private Wealth Advisor
            </Badge>
            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Beyond Wealth.
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Build Legacy.
              </span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Stephanie Diomin, CPWA® — Certified Private Wealth Advisor guiding professionals, founders, and families toward tax-efficient legacy growth.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="w-full sm:w-auto group">
                View Services Catalog
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Rotating Stats Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-12 text-center text-3xl font-bold">Our Impact by the Numbers</h2>
            <RotatingStats />
          </div>
        </div>
      </section>

      {/* Automation Flyer */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Intelligent Automation at Work</h2>
              <p className="text-muted-foreground">Real-time integrations with Mailchimp, Supabase & HubSpot for seamless lead management</p>
            </div>
            <AutomationFlyer />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">About Stephanie Diomin, CPWA®</h2>
              <Separator className="mx-auto w-24 bg-primary" />
            </div>
            <Card className="border-muted/50 shadow-lg">
              <CardContent className="p-8 md:p-12">
                <p className="mb-8 text-lg leading-relaxed text-foreground/90">
                  Stephanie Diomin is a CPWA® specializing in advanced wealth strategy, tax optimization, and long-term legacy design. With years in private wealth advising and an instinct for clarity in complexity, she merges financial discipline with human insight. Her approach is education-forward, empowering clients to understand their assets as tools of freedom and impact.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-6">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span className="text-base font-medium text-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">Services Catalog</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Comprehensive wealth management solutions tailored to your legacy goals
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="group transition-all hover:shadow-xl hover:border-primary/30">
                  <CardHeader>
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 space-y-2">
                      {service.includes.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <Button variant="ghost" className="w-full justify-between group/btn">
                      {service.cta}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">Case Studies</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Real results from strategic wealth management
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {caseStudies.map((study, index) => (
              <Card key={index} className="border-muted/50">
                <CardHeader>
                  <div className="mb-2 text-4xl font-bold text-primary">{study.metric}</div>
                  <CardTitle className="text-lg">{study.title}</CardTitle>
                  <CardDescription>{study.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80">{study.result}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            * Results shown are anonymized examples for educational purposes only. Past performance does not guarantee future results.
          </p>
        </div>
      </section>

      {/* Catalog Download */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <Card className="mx-auto max-w-3xl overflow-hidden border-primary/20 shadow-2xl">
            <div className="md:flex">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-12 md:w-1/3 flex items-center justify-center">
                <Download className="h-20 w-20 text-primary" />
              </div>
              <CardContent className="p-8 md:w-2/3 md:p-12">
                <CardTitle className="mb-3 text-2xl">Investment Catalog 2025</CardTitle>
                <CardDescription className="mb-6 text-base">
                  Download a comprehensive overview of Stephanie's services, methodology, and wealth management approach.
                </CardDescription>
                <Button size="lg" className="group">
                  Download Catalog
                  <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">Client Impact</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Follow @investwithdiomin for insights and updates
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="border-muted/50">
                <CardContent className="p-6">
                  <div className="mb-4 aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20" />
                  <p className="text-sm text-muted-foreground">
                    Instagram highlight showcasing wealth strategy insights and client success stories.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">Ready to Build Your Legacy?</h2>
            <p className="mb-10 text-lg text-muted-foreground">
              Schedule a consultation to discuss your wealth management strategy.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ConsultationDialog>
                <Button size="lg" className="w-full sm:w-auto group">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book 1:1 Consultation
                </Button>
              </ConsultationDialog>
              <div className="w-full sm:hidden" />
            </div>
            <div className="mt-8 flex justify-center">
              <NewsletterForm />
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              Educational content only; not individualized investment advice.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}y to Build Your Legacy?</h2>
            <p className="mb-10 text-lg text-muted-foreground">
              Schedule a consultation to discuss your wealth management strategy.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ConsultationDialog>
                <Button size="lg" className="w-full sm:w-auto group">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book 1:1 Consultation
                </Button>
              </ConsultationDialog>
              <div className="w-full sm:hidden" />
            </div>
            <div className="mt-8 flex justify-center">
              <NewsletterForm />
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              Educational content only; not individualized investment advice.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}