import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Lock, Zap, TrendingUp, Shield, Code } from "lucide-react";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

export default function FintechPage() {
  const products = [
    {
      title: "On/Off-Ramp Solutions",
      description: "Seamless fiat-to-crypto and crypto-to-fiat conversions with institutional compliance and AML screening.",
      features: ["Real-time settlement", "Multiple payment methods", "Institutional grade AML", "Sub-2% fees"],
      icon: Zap,
    },
    {
      title: "Custody & Vault",
      description: "Institutional-grade digital asset custody with multi-sig security, insurance, and regulatory compliance.",
      features: ["99.99% uptime SLA", "Multi-signature wallets", "$1B+ insurance", "SOC 2 Type II certified"],
      icon: Lock,
    },
    {
      title: "Tokenization Platform",
      description: "Fractionalize and tokenize real estate, private equity, and alternative assets for institutional investors.",
      features: ["SEC-compliant STO", "Liquidity protocol", "Settlement in 24h", "Regulatory sandboxes"],
      icon: Code,
    },
  ];

  const riskControls = [
    { title: "Fraud Detection", description: "AI-powered anomaly detection for real-time threat prevention" },
    { title: "Rate Limiting", description: "API rate limiting: 100 req/sec public, 1000/sec authenticated" },
    { title: "Encryption", description: "AES-256 at-rest, TLS 1.3 in-transit, HSM key management" },
    { title: "Incident Response", description: "24/7 SOC monitoring with <15 min incident escalation" },
    { title: "Compliance Audits", description: "Quarterly penetration testing and continuous compliance scanning" },
    { title: "Disaster Recovery", description: "Geo-redundant backup with RPO <1 hour, RTO <4 hours" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-br from-background via-primary/5 to-secondary/5 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4">XcloudMultixPro Platform</Badge>
            <h1 className="mb-6 text-5xl font-bold md:text-6xl">Financial Technology Infrastructure</h1>
            <p className="mb-10 text-lg text-muted-foreground leading-relaxed">
              Institutional-grade fintech solutions for wealth management, asset tokenization, and regulatory compliance. Built for professionals managing alternative assets and digital wealth.
            </p>
            <Button size="lg" className="group" asChild>
              <Link to="/contact">
                Request API Access
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Core Products */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Core Products</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Three pillar solutions addressing modern wealth management challenges
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {products.map((product, i) => {
              const Icon = product.icon;
              return (
                <Card key={i} className="border-muted/50 hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{product.title}</CardTitle>
                    <CardDescription className="text-base">{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {product.features.map((f, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{f}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Risk Controls & Security */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Enterprise Risk Controls</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Institutional-grade security and compliance framework
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {riskControls.map((control, i) => (
              <Card key={i} className="border-muted/50">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-bold text-lg">{control.title}</h3>
                  <p className="text-sm text-muted-foreground">{control.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Tracks */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-3xl font-bold md:text-4xl">Education Tracks</h2>
            <div className="space-y-6">
              <Card className="border-muted/50">
                <CardHeader>
                  <CardTitle>Developer Certification</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Comprehensive program covering API integration, security best practices, and production deployment. Complete in 4 weeks with hands-on labs.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/contact">Enroll Now</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-muted/50">
                <CardHeader>
                  <CardTitle>Compliance & Regulatory</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Deep dive into regulatory requirements, KYC/AML procedures, and compliance frameworks for digital assets. Tailored for compliance officers.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/contact">Schedule Session</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-muted/50">
                <CardHeader>
                  <CardTitle>Product Strategy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Strategic guidance on tokenization strategies, market access, and investor relations for alternative assets. For C-level executives.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/contact">Discuss Strategy</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* API Documentation */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">API Documentation</h2>
            <p className="mb-10 text-lg text-muted-foreground">
              Production-ready REST APIs with comprehensive documentation, SDKs, and sandbox environment.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-muted/50">
                <CardContent className="p-6 text-center">
                  <div className="mb-3 text-3xl font-bold text-primary">150+</div>
                  <p className="text-sm text-muted-foreground">API endpoints</p>
                </CardContent>
              </Card>
              <Card className="border-muted/50">
                <CardContent className="p-6 text-center">
                  <div className="mb-3 text-3xl font-bold text-primary">5</div>
                  <p className="text-sm text-muted-foreground">SDK languages</p>
                </CardContent>
              </Card>
              <Card className="border-muted/50">
                <CardContent className="p-6 text-center">
                  <div className="mb-3 text-3xl font-bold text-primary">24/7</div>
                  <p className="text-sm text-muted-foreground">Support</p>
                </CardContent>
              </Card>
            </div>
            <Button size="lg" className="mt-8 group" asChild>
              <a href="https://docs.example.com" target="_blank" rel="noopener noreferrer">
                View API Docs
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Build?</h2>
            <p className="mb-10 text-lg text-muted-foreground">
              Get API credentials, sandbox environment, and technical support from our team.
            </p>
            <Button size="lg" className="group" asChild>
              <Link to="/contact">
                Request Access
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* New Fintech Ecosystem Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Fintech Ecosystem</h1>
            <p className="mb-8 text-lg text-muted-foreground">
              OrbitCare, OrbitPay, and XcloudMultixPro form a secure, API-first fintech stack. OrbitCare handles recovery workflows and account health; OrbitPay streamlines fiat/crypto settlement and reconciliation; XcloudMultixPro powers leverage calibration, analytics, and education. Together they deliver an auditable, privacy-conscious system for modern wealth.
            </p>
            <div className="space-y-6 text-muted-foreground">
              <p>
                Blockchain settlement and automated reconciliation reduce operational overhead while preserving human review checkpoints. Developers can integrate via REST endpoints for positions, balances, and alerts, enabling custom automation and research workflows.
              </p>
              <p>
                Developer Access: /api/openai/query for AI summaries; market data via /functions/market-oracle; leads and newsletter webhooks via Supabase Edge. Authentication is handled with signed JWTs, and CORS is configured for the primary domain.
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              <Button asChild><a href="/xcloudmultixpro">Explore XcloudMultixPro</a></Button>
              <Button variant="outline" asChild><a href="/contact">Developer Access</a></Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}