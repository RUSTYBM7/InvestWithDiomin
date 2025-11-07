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
import LiveMetrics from "@/components/LiveMetrics";

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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,167,106,0.08),transparent_50%)]" />
        <div className="absolute -inset-x-20 -top-32 h-64 bg-[conic-gradient(from_90deg_at_50%_50%,rgba(212,175,55,0.08),transparent_60%)] blur-2xl" />
        <div className="container relative mx-auto px-6 py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-6xl">Building Digital Wealth Through Intelligent Systems</h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Automation, recovery, and leverage solutions that let individuals and institutions move with the crypto economy — securely and transparently.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild aria-label="Start Recovery">
                <Link to="/services/fund-recovery">Start Recovery</Link>
              </Button>
              <Button size="lg" variant="outline" asChild aria-label="Explore XcloudMultixPro">
                <a href="https://www.xcloudmultixpro.com" target="_blank" rel="noopener noreferrer">Explore XcloudMultixPro</a>
              </Button>
            </div>
            <LiveMetrics />
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

      {/* Financial Intelligence Suite */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">Financial Intelligence Suite</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Crypto Leverage Engine", desc: "Advanced leverage systems with dynamic margin control, liquidation guards, and live monitoring.", cta: "Explore Tools", href: "/services/xcloudmultixpro" },
              { title: "Asset Recovery Protocol", desc: "Blockchain forensics + structured fund retrieval, focusing on lost or stolen assets.", cta: "Start Recovery", href: "/services/fund-recovery" },
              { title: "Credit & Liquidity Access", desc: "Instant crypto-backed credit and smart liquidity routing via automated verification.", cta: "Request Credit", href: "/services/credit-bridge" },
              { title: "Portfolio Intelligence", desc: "Real-time analytics for holdings across exchanges, wallets, and DeFi protocols.", cta: "View Insights", href: "/insights/analytics" },
              { title: "Security & Compliance", desc: "Secure key management, AML/KYC compliance, and 24/7 monitoring.", cta: "Read Policy", href: "/about/security" },
              { title: "Institutional Integration", desc: "APIs and white-label systems for exchanges, funds, and fintech partners.", cta: "Partner With Us", href: "/services/institutional" },
            ].map((card) => (
              <Card key={card.title} className="transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle>{card.title}</CardTitle>
                  <CardDescription>{card.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" aria-label={card.cta}><Link to={card.href}>{card.cta}</Link></Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground">Digital-asset operations involve risk. Recovery and trading outcomes are not guaranteed.</p>
        </div>
      </section>

      {/* Live Feed Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Weekly Insights & Market Updates</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">Auto-updated content feed with latest wealth strategies and market analysis</p>
          </div>
          <div className="mx-auto max-w-2xl">
            <LiveFeed />
          </div>
          <div className="mt-8 text-center">
            <Button asChild>
              <Link to="/insights">View All Insights →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-28" id="about-stephanie">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">About Invest With Diomin</h2>
              <Separator className="mx-auto w-24 bg-primary" />
            </div>
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div className="flex justify-center">
                <div className="relative h-64 w-64 overflow-hidden rounded-2xl shadow-lg">
                  <img 
                    src="/assets/stephanie-diomin-portrait.jpg" 
                    alt="Stephanie Diomin, CPWA® - Wealth Advisor" 
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <Card className="border-muted/50 shadow-lg">
                <CardContent className="p-8">
                  <p className="mb-6 text-lg leading-relaxed text-foreground/90">
                    Led by Stephanie Diomin, CPWA®, our practice builds crypto-forward wealth programs spanning leverage calibration, recovery workflows, and tokenization strategy alongside traditional planning. We focus on empowerment through literacy, real risk controls, and institutional discipline.
                  </p>
                  <p className="mb-8 text-base leading-relaxed text-muted-foreground">
                    We operationalize portfolio telemetry across wallets and exchanges, design tax-aware trading playbooks, and coordinate custody hygiene with documented standard operating procedures. The result is an elegant, explainable system investors can operate with confidence across cycles.
                  </p>
                  <div className="flex flex-wrap items-center justify-start gap-6">
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
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">Services Catalog</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Precision-built solutions across portfolio design, tax strategy, estate architecture, and family governance. Our engagements are designed to be clear, collaborative, and outcome-focused from initial discovery through long-term stewardship.
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
          <p className="mt-8 text-center text-xs text-muted-foreground">
            Past performance does not guarantee future results.
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
                <Button size="lg" className="group" asChild>
                  <Link to="/catalog">
                    Download Catalog
                    <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                  </Link>
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Featured Media */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">Featured Media & Social Proof</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Featured on leading platforms. Follow @Alvinadiomin on X and @investwithdiomin on Instagram
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="border-muted/50">
                <CardContent className="p-6">
                  <div className="mb-4 aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <Zap className="h-12 w-12 text-primary/40" />
                  </div>
                  <p className="text-sm font-medium">Featured Insight</p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Latest wealth strategy content from @investwithdiomin across Instagram, Threads & LinkedIn.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-bold">What Clients Say</h2>
            <p className="text-muted-foreground">Real feedback from advisory, recovery, and real estate clients</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { q: "Clear playbooks. We finally understood leverage controls and avoided a liquidation.", a: "Founder, fintech" },
              { q: "Recovery intake was disciplined and professional. Evidence pack impressed counsel.", a: "Family office" },
              { q: "Stephanie’s real estate guidance helped us secure a great cash-flow property.", a: "Investor couple" },
            ].map((t, i) => (
              <Card key={i} className="border-muted/50">
                <CardContent className="p-6">
                  <p className="text-sm text-foreground">“{t.q}”</p>
                  <p className="mt-3 text-xs text-muted-foreground">— {t.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Realtor Brief */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-3xl font-bold">Stephanie Alvina — Realtor</h2>
            <p className="text-foreground/90">
              Stephanie Alvina serves as a Realtor with Coldwell Banker Realty across North and South Carolina, previously operating in Washington. Her practice focuses on disciplined acquisitions, cash-flow metrics, and transparent underwriting—bridging traditional real estate with emerging tokenization pilots.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button asChild><a href="/services/real-estate">Explore Real Estate</a></Button>
              <Button variant="outline" asChild><a href="/contact">Contact Stephanie</a></Button>
            </div>
          </div>
        </div>
      </section>
      {/* Value Cards */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle>Crypto Leverage, Safely</CardTitle>
                <CardDescription>Risk budgets and collateral rules</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Margin introduces liquidation risk. We emphasize position sizing, stop-outs, and collateral policies that bound downside. Our approach clarifies debt ratios, funding costs, and volatility exposure so clients operate within predefined limits—never promises, only controls.
                </p>
                <div className="mt-4">
                  <Button asChild variant="outline" aria-label="Understand the Framework">
                    <Link to="/services/xcloudmultixpro">Understand the Framework</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle>Fund & Asset Recovery</CardTitle>
                <CardDescription>Structured best-effort workflows</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Intake → triage → trace → evidence pack → escalation (LE/compliance). We coordinate wallet forensics and exchange liaison steps to maximize restoration probability. Outcomes are not guaranteed; we protect legal posture and evidence integrity throughout.
                </p>
                <div className="mt-4">
                  <Button asChild variant="outline" aria-label="Start Secure Intake">
                    <Link to="/services/fund-recovery">Start Secure Intake</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle>Real Estate with Discipline</CardTitle>
                <CardDescription>Cash-flow focus and underwriting</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We prioritize DSCR, cap-rate spreads, and tax-aware hold periods. Tokenization pilots are labeled experimental and designed for transparency and auditability. The aim: durable, explainable returns—without implying guarantees.
                </p>
                <div className="mt-4">
                  <Button asChild variant="outline" aria-label="Browse Portfolio">
                    <Link to="/services/real-estate">Browse Portfolio</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* XcloudMultixPro Spotlight */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold">XcloudMultixPro — Execution Layer</h2>
            <p className="mx-auto max-w-3xl text-muted-foreground">
              XcloudMultixPro provides education tracks, leverage policy guardrails, and custody options with multi-sig support. An oracle pricing feed informs dashboards and alerts, while a public incident status page communicates uptime and mitigations. Safety gates enforce maximum debt ratios, liquidation buffers, and withdrawal holds when markets stress, helping users act with discipline—not impulse.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Button asChild aria-label="Course Tracks"><Link to="/services/xcloudmultixpro">Course Tracks</Link></Button>
              <Button variant="outline" asChild aria-label="Status"><Link to="/insights/markets">Status</Link></Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Controls */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <h2 className="mb-6 text-3xl font-bold">Trust & Controls</h2>
          <ul className="ml-5 list-disc space-y-2 text-muted-foreground">
            <li>CPWA® credentialed leadership</li>
            <li>KYC/AML posture and documentation workflows</li>
            <li>WCAG 2.2 AA accessibility standards</li>
            <li>Row-Level Security and role permissions for data</li>
            <li>Consent-managed analytics and privacy choices</li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">No performance guarantees. Digital assets carry risk.</p>
        </div>
      </section>

      {/* Proof Row */}
      <section className="bg-muted/30 py-14">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <blockquote className="text-sm text-muted-foreground">“Clear explanations, pragmatic steps, and disciplined controls we could actually follow.”</blockquote>
            <blockquote className="text-sm text-muted-foreground">“Responsive and thorough—risk conversations before market stress, not after.”</blockquote>
            <blockquote className="text-sm text-muted-foreground">“Documentation-first approach made audits and tax filing significantly easier.”</blockquote>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h3 className="mb-4 text-2xl font-bold">Ready to plan with rigor?</h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild aria-label="Book Consultation"><Link to="/contact">Book Consultation</Link></Button>
            <Button variant="outline" asChild aria-label="Download Catalog"><Link to="/catalog">Download Catalog</Link></Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}