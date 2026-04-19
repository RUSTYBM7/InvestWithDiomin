import { Link } from "react-router-dom";
import { GlassButton } from "@/components/ui/glass-button";
import { GlassCard, GlassCardContent, GlassCardDescription, GlassCardHeader, GlassCardTitle } from "@/components/ui/glass-card";
import { FeatureTile, FeatureTileGrid } from "@/components/ui/feature-tile";
import { Separator } from "@/components/ui/separator";
import { FadeIn } from "@/components/FadeIn";
import Footer from "@/components/Footer";
import { 
  ArrowRight, 
  Briefcase, 
  Shield, 
  Zap, 
  Clock, 
  CheckCircle2, 
  AlertTriangle,
  Wallet,
  Building2,
  LineChart,
  Lock
} from "lucide-react";

export default function CreditBridge() {
  const features = [
    {
      icon: Wallet,
      title: "Crypto-Backed Credit Lines",
      description: "Access liquidity without selling your digital assets. Borrow against BTC, ETH, and other major cryptocurrencies.",
    },
    {
      icon: Zap,
      title: "Instant Verification",
      description: "Automated collateral verification and credit assessment. Get approved within minutes, not days.",
    },
    {
      icon: Shield,
      title: "Secure Custody",
      description: "Your collateral is held in institutional-grade custody with multi-signature security protocols.",
    },
    {
      icon: LineChart,
      title: "Dynamic LTV Management",
      description: "Real-time loan-to-value monitoring with automated margin calls and liquidation protection.",
    },
    {
      icon: Clock,
      title: "Flexible Terms",
      description: "Choose repayment schedules that align with your investment timeline and cash flow needs.",
    },
    {
      icon: Building2,
      title: "Institutional Infrastructure",
      description: "Enterprise-grade compliance, reporting, and integration capabilities for sophisticated borrowers.",
    },
  ];

  const useCases = [
    {
      title: "Tax-Efficient Liquidity",
      description: "Access cash without triggering capital gains events. Maintain your long-term positions while meeting short-term needs.",
    },
    {
      title: "Investment Opportunities",
      description: "Capitalize on market opportunities without liquidating existing holdings. Leverage your portfolio for strategic moves.",
    },
    {
      title: "Business Operations",
      description: "Fund business expenses, payroll, or expansion without disrupting your investment strategy.",
    },
    {
      title: "Real Estate Acquisitions",
      description: "Use crypto-backed credit for down payments or bridge financing on property purchases.",
    },
  ];

  const steps = [
    { step: 1, title: "Application", description: "Submit your credit request with collateral details" },
    { step: 2, title: "Verification", description: "Automated collateral and identity verification" },
    { step: 3, title: "Approval", description: "Credit terms and LTV ratios determined" },
    { step: 4, title: "Funding", description: "Funds disbursed to your designated account" },
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
              <Briefcase className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Credit & Liquidity Access</span>
            </GlassCard>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl leading-[1.1]">
              Unlock Liquidity
              <span className="block mt-2 text-gradient">Without Selling Assets</span>
            </h1>
            
            <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Crypto-backed credit lines with institutional-grade custody, automated verification, and flexible terms designed for sophisticated investors.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <GlassButton size="lg" asChild>
                <Link to="/contact" data-testid="button-request-credit">
                  <Briefcase className="h-5 w-5 mr-2" />
                  Request Credit Line
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </GlassButton>
              <GlassButton size="lg" variant="outline" asChild>
                <Link to="/about/security" data-testid="button-security-info">
                  <Shield className="h-5 w-5 mr-2" />
                  Security Overview
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
            <h2 className="text-3xl font-bold md:text-4xl">How It Works</h2>
            <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
              Simple, transparent process from application to funding
            </p>
          </FadeIn>
          
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-6 md:grid-cols-4">
              {steps.map((item, index) => (
                <FadeIn key={item.step} delay={index * 0.1}>
                  <GlassCard variant="accent" className="h-full p-6 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                      {item.step}
                    </div>
                    <h3 className="mb-2 font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
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
            <h2 className="text-3xl font-bold md:text-4xl">Platform Features</h2>
            <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
              Enterprise-grade infrastructure for crypto-backed lending
            </p>
          </FadeIn>
          
          <FeatureTileGrid columns={3}>
            {features.map((feature, index) => (
              <FadeIn key={feature.title} delay={index * 0.1}>
                <FeatureTile
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
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
            <h2 className="text-3xl font-bold md:text-4xl">Use Cases</h2>
            <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
              Strategic liquidity solutions for various financial needs
            </p>
          </FadeIn>
          
          <div className="mx-auto max-w-4xl grid gap-6 md:grid-cols-2">
            {useCases.map((useCase, index) => (
              <FadeIn key={useCase.title} delay={index * 0.1}>
                <GlassCard interactive className="h-full p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold">{useCase.title}</h3>
                      <p className="text-sm text-muted-foreground">{useCase.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="container mx-auto px-6">
          <GlassCard variant="strong" elevation={2} className="mx-auto max-w-3xl p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <AlertTriangle className="h-6 w-6 text-amber-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Important Risk Disclosures</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Crypto-backed lending involves significant risks including, but not limited to: 
                  volatility in collateral value, margin calls, potential liquidation of collateral, 
                  and interest rate fluctuations. This is not financial advice. Past performance 
                  does not guarantee future results. Please consult with qualified financial and 
                  legal advisors before proceeding.
                </p>
              </div>
            </div>
            <Separator className="my-6" />
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                Ready to explore crypto-backed credit solutions?
              </p>
              <GlassButton asChild>
                <Link to="/contact">
                  Schedule Consultation
                  <ArrowRight className="h-4 w-4 ml-2" />
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
