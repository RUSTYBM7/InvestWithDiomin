import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";
import { Shield, Cpu, Layers, CreditCard, Lock } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Banner */}
      <section className="bg-gradient-to-br from-background via-primary/5 to-secondary/5 py-20 md:py-28">
        <div className="container mx-auto px-6 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Redefining Trust in Digital Finance</h1>
          <p className="mx-auto max-w-3xl text-muted-foreground md:text-lg">
            At Invest With Diomin, we bridge people and technology—combining automation, analytics, and recovery solutions to make crypto finance accessible and reliable.
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold">Vision</h2>
          <p className="text-muted-foreground leading-relaxed">
            We believe financial autonomy starts with understanding. Invest With Diomin exists to restore confidence in digital assets through intelligent automation, leverage systems, and verified recovery frameworks. Our mission is simple: empower individuals and institutions to manage their assets, reclaim lost value, and grow through transparent crypto innovation.
          </p>
        </div>
      </section>

      {/* XcloudMultixPro */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary"><Cpu className="h-6 w-6"/></div>
                <CardTitle>The XcloudMultixPro Initiative</CardTitle>
                <CardDescription>Telemetry, recovery tracking, and leverage management</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  XcloudMultixPro powers the platform’s efficiency—integrating blockchain telemetry, algorithmic recovery tracking, and AI-backed leverage management. The system syncs real-time analytics with human insight, ensuring no opportunity or anomaly is missed.
                </p>
                <div className="mt-4">
                  <Button asChild><Link to="/services/xcloudmultixpro">Learn More</Link></Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary"><Shield className="h-6 w-6"/></div>
                <CardTitle>Financial Recovery & Protection</CardTitle>
                <CardDescription>Tracing, auditing, validation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We lead in structured crypto recovery—tracing, auditing, and validating cross-chain assets. With global network support and forensic tooling, we help restore control.
                </p>
                <div className="mt-4">
                  <Button variant="outline" asChild><Link to="/services/fund-recovery">Start Recovery</Link></Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Credit */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary"><CreditCard className="h-6 w-6"/></div>
                <CardTitle>Intelligent Credit Infrastructure</CardTitle>
                <CardDescription>Crypto-backed lending bridges</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Our platform connects DeFi and traditional credit. We design crypto-backed lending systems for individuals and businesses ready to scale responsibly.
                </p>
                <div className="mt-4">
                  <Button asChild variant="outline"><Link to="/services/credit-bridge">Access Credit</Link></Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary"><Lock className="h-6 w-6"/></div>
                <CardTitle>Security & Transparency</CardTitle>
                <CardDescription>Layered controls and verification</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Every operation is built with layered security, compliance protocols, and open verification. Transparency isn’t a promise—it’s our protocol.
                </p>
                <div className="mt-4">
                  <Button asChild variant="ghost"><Link to="/about/security">View Compliance Policy</Link></Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-6 text-center text-xs text-muted-foreground">
          Invest With Diomin operates with compliance-first standards. All recovery and financial services follow regional crypto regulations.
        </div>
      </section>

      <Footer />
    </div>
  );
}