import { Link } from "react-router-dom";
import { GlassButton } from "@/components/ui/glass-button";
import { GlassCard, GlassCardContent, GlassCardDescription, GlassCardHeader, GlassCardTitle } from "@/components/ui/glass-card";
import { FeatureTile, FeatureTileGrid } from "@/components/ui/feature-tile";
import { Separator } from "@/components/ui/separator";
import { FadeIn } from "@/components/FadeIn";
import Footer from "@/components/Footer";
import { 
  ArrowRight, 
  Users, 
  Shield, 
  Code, 
  Building2, 
  Lock,
  Server,
  BarChart3,
  Workflow,
  Globe,
  FileCheck,
  Headphones
} from "lucide-react";

export default function Institutional() {
  const solutions = [
    {
      icon: Code,
      title: "API Integration",
      description: "RESTful APIs for seamless integration with your existing trading infrastructure, portfolio management systems, and reporting tools.",
      cta: "View Documentation",
      href: "/contact",
    },
    {
      icon: Building2,
      title: "White-Label Platform",
      description: "Deploy our complete wealth management platform under your brand. Full customization of UI, workflows, and compliance requirements.",
      cta: "Request Demo",
      href: "/contact",
    },
    {
      icon: Server,
      title: "Custody Solutions",
      description: "Institutional-grade custody with multi-signature security, insurance coverage, and regulatory compliance built-in.",
      cta: "Learn More",
      href: "/about/security",
    },
    {
      icon: BarChart3,
      title: "Portfolio Analytics",
      description: "Real-time portfolio monitoring across exchanges, wallets, and DeFi protocols with customizable reporting dashboards.",
      cta: "See Analytics",
      href: "/insights/analytics",
    },
    {
      icon: Workflow,
      title: "Trading Infrastructure",
      description: "High-performance order routing, smart execution algorithms, and liquidity aggregation across major venues.",
      cta: "Explore Tools",
      href: "/services/xcloudmultixpro",
    },
    {
      icon: FileCheck,
      title: "Compliance Suite",
      description: "AML/KYC verification, transaction monitoring, regulatory reporting, and audit trail management.",
      cta: "Security Details",
      href: "/about/security",
    },
  ];

  const benefits = [
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Access to major exchanges and liquidity venues worldwide with unified API access.",
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "SOC 2 Type II compliance, penetration testing, and 24/7 security monitoring.",
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "Named account managers, priority technical support, and SLA guarantees.",
    },
  ];

  const clientTypes = [
    "Hedge Funds",
    "Family Offices",
    "Asset Managers",
    "Exchanges",
    "Fintech Platforms",
    "Banks & Brokers",
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 bg-gradient-mesh pointer-events-none" />
      
      <section className="relative overflow-hidden py-20 md:py-28 lg:py-36">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/15 rounded-full blur-[120px] animate-pulse-glow animation-delay-2000" />
        
        <div className="container relative mx-auto px-6">
          <FadeIn className="mx-auto max-w-4xl text-center">
            <GlassCard variant="subtle" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8">
              <Users className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Institutional Solutions</span>
            </GlassCard>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl leading-[1.1]">
              Enterprise-Grade
              <span className="block mt-2 text-gradient">Digital Asset Infrastructure</span>
            </h1>
            
            <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              APIs, white-label solutions, and institutional services for exchanges, funds, and fintech platforms building the future of finance.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <GlassButton size="lg" asChild>
                <Link to="/contact" data-testid="button-partner">
                  <Users className="h-5 w-5 mr-2" />
                  Partner With Us
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </GlassButton>
              <GlassButton size="lg" variant="outline" asChild>
                <Link to="/about/security" data-testid="button-security">
                  <Shield className="h-5 w-5 mr-2" />
                  Security & Compliance
                </Link>
              </GlassButton>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
        <div className="container relative mx-auto px-6">
          <FadeIn className="mb-16 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">We Serve</h2>
            <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
              Trusted by leading financial institutions worldwide
            </p>
          </FadeIn>
          
          <div className="mx-auto max-w-3xl">
            <div className="flex flex-wrap justify-center gap-4">
              {clientTypes.map((type, index) => (
                <FadeIn key={type} delay={index * 0.05}>
                  <GlassCard variant="subtle" className="px-6 py-3 rounded-full">
                    <span className="font-medium">{type}</span>
                  </GlassCard>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="container mx-auto px-6">
          <FadeIn className="mb-16 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Platform Solutions</h2>
            <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
              Comprehensive suite of institutional-grade digital asset services
            </p>
          </FadeIn>
          
          <FeatureTileGrid columns={3}>
            {solutions.map((solution, index) => (
              <FadeIn key={solution.title} delay={index * 0.1}>
                <FeatureTile
                  icon={solution.icon}
                  title={solution.title}
                  description={solution.description}
                  cta={solution.cta}
                  href={solution.href}
                />
              </FadeIn>
            ))}
          </FeatureTileGrid>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
        <div className="container relative mx-auto px-6">
          <FadeIn className="mb-16 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Why Partner With Us</h2>
            <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
              Enterprise advantages that set us apart
            </p>
          </FadeIn>
          
          <div className="mx-auto max-w-4xl grid gap-6 md:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <FadeIn key={benefit.title} delay={index * 0.1}>
                  <GlassCard variant="accent" elevation={2} className="h-full p-6 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="mb-2 font-semibold">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </GlassCard>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="container mx-auto px-6">
          <GlassCard variant="strong" elevation={3} className="mx-auto max-w-4xl overflow-hidden">
            <div className="md:flex">
              <div className="flex items-center justify-center p-10 md:w-1/3 bg-gradient-to-br from-primary/20 to-secondary/20">
                <div className="flex h-24 w-24 items-center justify-center rounded-2xl glass-surface">
                  <Users className="h-12 w-12 text-primary" />
                </div>
              </div>
              <GlassCardContent className="p-8 md:w-2/3 md:p-10">
                <GlassCardTitle className="mb-3 text-2xl">Ready to Scale?</GlassCardTitle>
                <GlassCardDescription className="mb-6 text-base">
                  Schedule a consultation with our institutional team to discuss your specific requirements, 
                  integration needs, and custom solutions for your organization.
                </GlassCardDescription>
                <div className="flex flex-wrap gap-3">
                  <GlassButton size="lg" asChild>
                    <Link to="/contact" data-testid="button-schedule-call">
                      <Headphones className="h-5 w-5 mr-2" />
                      Schedule a Call
                    </Link>
                  </GlassButton>
                  <GlassButton size="lg" variant="outline" asChild>
                    <a href="mailto:institutional@investwithdiomin.today">
                      Email Us
                    </a>
                  </GlassButton>
                </div>
              </GlassCardContent>
            </div>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </div>
  );
}
