import { GlassButton } from "@/components/ui/glass-button";
import { GlassCard, GlassCardContent, GlassCardDescription, GlassCardHeader, GlassCardTitle } from "@/components/ui/glass-card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Award, BookOpen, Building2, Home, TrendingUp, Download, Zap, Shield, Briefcase, LineChart, Lock, Users, Quote } from "lucide-react";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { RotatingStats } from "@/components/RotatingStats";
import { LiveFeed } from "@/components/LiveFeed";
import LiveMetrics from "@/components/LiveMetrics";
import { MediaGrid } from "@/components/media/MediaGrid";
import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";

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

  const financialSuite = [
    { title: "Crypto Leverage Engine", desc: "Advanced leverage systems with dynamic margin control, liquidation guards, and live monitoring.", cta: "Explore Tools", href: "/services/xcloudmultixpro", icon: Zap },
    { title: "Asset Recovery Protocol", desc: "Blockchain forensics + structured fund retrieval, focusing on lost or stolen assets.", cta: "Start Recovery", href: "/services/fund-recovery", icon: Shield },
    { title: "Credit & Liquidity Access", desc: "Instant crypto-backed credit and smart liquidity routing via automated verification.", cta: "Request Credit", href: "/services/credit-bridge", icon: Briefcase },
    { title: "Portfolio Intelligence", desc: "Real-time analytics for holdings across exchanges, wallets, and DeFi protocols.", cta: "View Insights", href: "/insights/analytics", icon: LineChart },
    { title: "Security & Compliance", desc: "Secure key management, AML/KYC compliance, and 24/7 monitoring.", cta: "Read Policy", href: "/about/security", icon: Lock },
    { title: "Institutional Integration", desc: "APIs and white-label systems for exchanges, funds, and fintech partners.", cta: "Partner With Us", href: "/services/institutional", icon: Users },
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

  const testimonials = [
    { q: "Clear playbooks. We finally understood leverage controls and avoided a liquidation.", a: "Founder, fintech" },
    { q: "Recovery intake was disciplined and professional. Evidence pack impressed counsel.", a: "Family office" },
    { q: "Stephanie's real estate guidance helped us secure a great cash-flow property.", a: "Investor couple" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 bg-gradient-mesh pointer-events-none" />
      
      <section className="relative overflow-hidden py-24 md:py-32 lg:py-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/15 rounded-full blur-[120px] animate-pulse-glow animation-delay-2000" />
        
        <div className="container relative mx-auto px-6">
          <FadeIn className="mx-auto max-w-4xl text-center">
            <GlassCard variant="subtle" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium">Wealth Management Reimagined</span>
            </GlassCard>
            
            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl leading-[1.1]">
              Building Digital Wealth
              <span className="block mt-2 text-gradient">Through Intelligent Systems</span>
            </h1>
            
            <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Automation, recovery, and leverage solutions that let individuals and institutions move with the crypto economy — securely and transparently.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <GlassButton size="lg" asChild>
                <Link to="/services/fund-recovery" data-testid="button-start-recovery">
                  <Shield className="h-5 w-5 mr-2" />
                  Start Recovery
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </GlassButton>
              <GlassButton size="lg" variant="outline" asChild>
                <a href="https://www.xcloudmultixpro.com" target="_blank" rel="noopener noreferrer" data-testid="button-explore-xcloud">
                  <Zap className="h-5 w-5 mr-2" />
                  Explore XcloudMultixPro
                </a>
              </GlassButton>
            </div>
            
            <div className="mt-12">
              <LiveMetrics />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="container mx-auto px-6">
          <FadeIn className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold">Our Impact by the Numbers</h2>
            <p className="text-muted-foreground">Measurable results across wealth management, recovery, and advisory services</p>
          </FadeIn>
          <div className="mx-auto max-w-3xl">
            <RotatingStats />
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
        <div className="container relative mx-auto px-6">
          <FadeIn className="mb-16 text-center">
            <GlassCard variant="subtle" className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Complete Platform</span>
            </GlassCard>
            <h2 className="text-3xl font-bold md:text-4xl">Financial Intelligence Suite</h2>
            <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
              Comprehensive tools for digital asset management, recovery, and growth
            </p>
          </FadeIn>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {financialSuite.map((card, index) => {
              const Icon = card.icon;
              return (
                <FadeIn key={card.title} delay={index * 0.1}>
                  <GlassCard interactive className="h-full p-6" data-testid={`card-suite-${index}`}>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">{card.title}</h3>
                    <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                    <GlassButton variant="outline" size="sm" asChild>
                      <Link to={card.href}>
                        {card.cta}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </GlassButton>
                  </GlassCard>
                </FadeIn>
              );
            })}
          </div>
          
          <p className="mt-8 text-center text-xs text-muted-foreground">
            Digital-asset operations involve risk. Recovery and trading outcomes are not guaranteed.
          </p>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="container mx-auto px-6">
          <FadeIn className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Weekly Insights & Market Updates</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Stay ahead of market trends with comprehensive analysis covering cryptocurrency movements, DeFi innovations, and wealth strategy frameworks.
            </p>
          </FadeIn>
          
          <div className="mx-auto max-w-2xl">
            <LiveFeed />
          </div>
          
          <div className="mt-10 text-center">
            <GlassButton variant="outline" asChild>
              <Link to="/insights">
                View All Insights
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </GlassButton>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28" id="about-stephanie">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />
        <div className="container relative mx-auto px-6">
          <div className="mx-auto max-w-5xl">
            <FadeIn className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">About Invest With Diomin</h2>
              <Separator className="mx-auto w-24 bg-primary" />
            </FadeIn>
            
            <div className="grid gap-10 md:grid-cols-5 md:items-start">
              <FadeIn direction="left" className="md:col-span-2 flex justify-center">
                <GlassCard variant="accent" className="p-2 rounded-2xl">
                  <div className="relative h-80 w-64 overflow-hidden rounded-xl">
                    <img 
                      src="/assets/stephanie-diomin-portrait.jpg" 
                      alt="Stephanie Diomin, CPWA® - Wealth Advisor" 
                      className="h-full w-full object-cover"
                      data-testid="img-advisor-portrait"
                    />
                  </div>
                </GlassCard>
              </FadeIn>
              
              <FadeIn direction="right" className="md:col-span-3">
                <GlassCard variant="default" elevation={2} className="p-8">
                  <p className="mb-6 text-lg leading-relaxed text-foreground/90">
                    Led by Stephanie Diomin, CPWA®, Invest With Diomin specializes in comprehensive digital asset wealth management, combining cutting-edge blockchain technology with time-tested financial planning principles.
                  </p>
                  <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                    We operationalize portfolio telemetry across multiple wallets, exchanges, and DeFi protocols, providing real-time visibility into your complete digital asset ecosystem. Our team designs tax-aware trading playbooks that optimize for both short-term performance and long-term wealth preservation.
                  </p>
                  <p className="mb-8 text-base leading-relaxed text-muted-foreground">
                    The result is an elegant, explainable system that investors can operate with confidence across market cycles—whether navigating bull market euphoria, bear market capitulation, or the steady accumulation phases in between.
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4">
                    {values.map((value, index) => (
                      <GlassCard key={index} variant="subtle" className="flex items-center gap-2 px-4 py-2 rounded-full">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span className="text-sm font-medium">{value}</span>
                      </GlassCard>
                    ))}
                  </div>
                </GlassCard>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
        <div className="container relative mx-auto px-6">
          <FadeIn className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">Comprehensive Wealth Services</h2>
            <p className="mx-auto max-w-3xl text-muted-foreground">
              Precision-built solutions across portfolio design, tax optimization, estate architecture, and multi-generational family governance frameworks.
            </p>
          </FadeIn>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <FadeIn key={index} delay={index * 0.1}>
                  <GlassCard interactive className="h-full group" data-testid={`card-service-${index}`}>
                    <GlassCardHeader>
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                        <Icon className="h-6 w-6" />
                      </div>
                      <GlassCardTitle className="text-xl">{service.title}</GlassCardTitle>
                      <GlassCardDescription className="text-base">{service.description}</GlassCardDescription>
                    </GlassCardHeader>
                    <GlassCardContent>
                      <div className="mb-4 space-y-2">
                        {service.includes.map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                      <GlassButton variant="ghost" fullWidth asChild>
                        <Link to="/contact" className="justify-between">
                          {service.cta}
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </GlassButton>
                    </GlassCardContent>
                  </GlassCard>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="container mx-auto px-6">
          <FadeIn className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Proven Results</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Real outcomes from strategic wealth management engagements
            </p>
          </FadeIn>
          
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
            {caseStudies.map((study, index) => (
              <FadeIn key={index} delay={index * 0.15}>
                <GlassCard variant="accent" elevation={2} className="h-full p-6 text-center" data-testid={`card-case-study-${index}`}>
                  <div className="mb-3">
                    <AnimatedCounter 
                      end={parseFloat(study.metric.replace(/[^0-9.]/g, ''))} 
                      prefix={study.metric.match(/\$/) ? '$' : ''} 
                      suffix={study.metric.match(/%/) ? '%' : study.metric.match(/M/) ? 'M' : ''} 
                      className="text-4xl font-bold text-primary" 
                    />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{study.title}</h3>
                  <p className="mb-3 text-sm text-muted-foreground">{study.description}</p>
                  <p className="text-sm text-foreground/80">{study.result}</p>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <GlassButton variant="outline" asChild>
              <Link to="/about/case-studies">
                View Complete Case Studies
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </GlassButton>
          </div>
          
          <p className="mt-8 text-center text-xs text-muted-foreground">
            Past performance does not guarantee future results. Individual outcomes vary.
          </p>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
        <div className="container relative mx-auto px-6">
          <GlassCard variant="strong" elevation={3} className="mx-auto max-w-3xl overflow-hidden">
            <div className="md:flex">
              <div className="flex items-center justify-center p-10 md:w-1/3 bg-gradient-to-br from-primary/20 to-secondary/20">
                <div className="flex h-24 w-24 items-center justify-center rounded-2xl glass-surface">
                  <Download className="h-12 w-12 text-primary" />
                </div>
              </div>
              <GlassCardContent className="p-8 md:w-2/3 md:p-10">
                <GlassCardTitle className="mb-3 text-2xl">Investment Catalog 2025</GlassCardTitle>
                <GlassCardDescription className="mb-6 text-base">
                  Download a comprehensive overview of our services, methodology, and wealth management approach.
                </GlassCardDescription>
                <GlassButton size="lg" asChild>
                  <Link to="/catalog" data-testid="button-download-catalog">
                    <Download className="h-5 w-5 mr-2" />
                    Download Catalog
                  </Link>
                </GlassButton>
              </GlassCardContent>
            </div>
          </GlassCard>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
        <div className="container relative mx-auto px-6">
          <FadeIn className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Featured Media & Social Proof</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Follow @Alvinadiomin on X and @investwithdiomin on Instagram
            </p>
          </FadeIn>
          <MediaGrid limit={9} />
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="container mx-auto px-6">
          <FadeIn className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold">What Clients Say</h2>
            <p className="text-muted-foreground">Real feedback from advisory, recovery, and real estate clients</p>
          </FadeIn>
          
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <GlassCard variant="default" elevation={1} className="h-full p-6" data-testid={`testimonial-${i}`}>
                  <Quote className="h-8 w-8 text-primary/30 mb-4" />
                  <p className="text-foreground leading-relaxed mb-4">"{t.q}"</p>
                  <p className="text-sm text-muted-foreground font-medium">— {t.a}</p>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />
        <div className="container relative mx-auto px-6">
          <div className="mx-auto max-w-4xl">
            <GlassCard variant="accent" elevation={2} className="p-8 md:p-10">
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">Stephanie Alvina — Realtor</h2>
              <p className="text-foreground/90 leading-relaxed mb-6">
                Stephanie Alvina serves as a Realtor with Coldwell Banker Realty across North and South Carolina. Her practice focuses on disciplined acquisitions, cash-flow metrics, and transparent underwriting—bridging traditional real estate with emerging tokenization pilots.
              </p>
              <div className="flex flex-wrap gap-3">
                <GlassButton asChild>
                  <Link to="/services/real-estate">
                    <Building2 className="h-4 w-4 mr-2" />
                    Explore Real Estate
                  </Link>
                </GlassButton>
                <GlassButton variant="outline" asChild>
                  <Link to="/contact">Contact Stephanie</Link>
                </GlassButton>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <FadeIn>
              <GlassCard interactive className="h-full" data-testid="card-value-leverage">
                <GlassCardHeader>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <GlassCardTitle>Crypto Leverage, Safely</GlassCardTitle>
                  <GlassCardDescription>Risk budgets and collateral rules</GlassCardDescription>
                </GlassCardHeader>
                <GlassCardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Margin introduces liquidation risk. We emphasize position sizing, stop-outs, and collateral policies that bound downside.
                  </p>
                  <GlassButton variant="outline" size="sm" asChild>
                    <Link to="/services/xcloudmultixpro">
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </GlassButton>
                </GlassCardContent>
              </GlassCard>
            </FadeIn>

            <FadeIn delay={0.1}>
              <GlassCard interactive className="h-full" data-testid="card-value-recovery">
                <GlassCardHeader>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <GlassCardTitle>Fund & Asset Recovery</GlassCardTitle>
                  <GlassCardDescription>Structured best-effort workflows</GlassCardDescription>
                </GlassCardHeader>
                <GlassCardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Intake → triage → trace → evidence pack → escalation. We coordinate wallet forensics and exchange liaison steps.
                  </p>
                  <GlassButton variant="outline" size="sm" asChild>
                    <Link to="/services/fund-recovery">
                      Start Intake
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </GlassButton>
                </GlassCardContent>
              </GlassCard>
            </FadeIn>

            <FadeIn delay={0.2}>
              <GlassCard interactive className="h-full" data-testid="card-value-realestate">
                <GlassCardHeader>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <GlassCardTitle>Real Estate with Discipline</GlassCardTitle>
                  <GlassCardDescription>Cash-flow focus and underwriting</GlassCardDescription>
                </GlassCardHeader>
                <GlassCardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    We prioritize DSCR, cap-rate spreads, and tax-aware hold periods with transparent, auditable processes.
                  </p>
                  <GlassButton variant="outline" size="sm" asChild>
                    <Link to="/services/real-estate">
                      Browse Portfolio
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </GlassButton>
                </GlassCardContent>
              </GlassCard>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
        <div className="container relative mx-auto px-6">
          <GlassCard variant="strong" elevation={2} className="mx-auto max-w-4xl p-8 md:p-12 text-center">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">XcloudMultixPro — Execution Layer</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground mb-8">
              Education tracks, leverage policy guardrails, and custody options with multi-sig support. An oracle pricing feed informs dashboards and alerts, while a public incident status page communicates uptime and mitigations.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <GlassButton asChild>
                <Link to="/services/xcloudmultixpro">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Course Tracks
                </Link>
              </GlassButton>
              <GlassButton variant="outline" asChild>
                <Link to="/insights/markets">System Status</Link>
              </GlassButton>
            </div>
          </GlassCard>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="container mx-auto px-6">
          <GlassCard variant="default" elevation={1} className="max-w-4xl mx-auto p-8">
            <h2 className="mb-6 text-2xl font-bold">Trust & Controls</h2>
            <div className="grid gap-3 md:grid-cols-2">
              {[
                "CPWA® credentialed leadership",
                "KYC/AML posture and documentation workflows",
                "WCAG 2.2 AA accessibility standards",
                "Row-Level Security and role permissions",
                "Consent-managed analytics and privacy"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                    <Lock className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-muted-foreground">No performance guarantees. Digital assets carry risk.</p>
          </GlassCard>
        </div>
      </section>

      <section className="relative py-16">
        <div className="container mx-auto px-6 text-center">
          <GlassCard variant="accent" elevation={2} className="max-w-2xl mx-auto p-10">
            <h3 className="mb-4 text-2xl font-bold">Ready to plan with rigor?</h3>
            <p className="mb-6 text-muted-foreground">Let's build your wealth strategy together</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <GlassButton size="lg" asChild>
                <Link to="/contact" data-testid="button-cta-consultation">Book Consultation</Link>
              </GlassButton>
              <GlassButton size="lg" variant="outline" asChild>
                <Link to="/catalog" data-testid="button-cta-catalog">
                  <Download className="h-4 w-4 mr-2" />
                  Download Catalog
                </Link>
              </GlassButton>
            </div>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </div>
  );
}
