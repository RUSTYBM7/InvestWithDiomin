import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChartBar, ShieldCheck, Users, Cpu, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

export default function XcloudMultixPro() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-secondary/5 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4">Fintech Engine</Badge>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">XcloudMultixPro</h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              A secure, modular fintech engine for crypto exposure, leverage optimization, and portfolio education. XcloudMultixPro integrates recovery workflows, real-time analytics, and guided learning cohorts so users can build literacy while protecting capital and tracking assets across wallets and exchanges.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="#learn">Start Learning</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="#join">Join the Platform</Link>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <Link to="#pilots">View Tokenization Pilots</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-20 md:py-28" id="learn">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary"><Cpu className="h-6 w-6"/></div>
                <CardTitle>Leverage Simplified</CardTitle>
                <CardDescription>Clarity-first controls for position sizing and risk</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-muted-foreground">
                  XcloudMultixPro abstracts complexity with guardrails for collateralization, liquidation bands, and looped strategies. Users can simulate outcomes, set bounded leverage, and monitor debt ratios in real time. Visual tools explain margin calls before they happen, while auto-rebalance options help reduce downside volatility during stress regimes.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary"><ShieldCheck className="h-6 w-6"/></div>
                <CardTitle>Security-First Architecture</CardTitle>
                <CardDescription>Key management, audits, and recovery</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-muted-foreground">
                  The platform uses multi-signature policies, hardware key support, and role-based permissions. Contract components undergo external audits and continuous monitoring. Recovery flows include wallet forensics, exchange liaison processes, and chain analysis to assist users in fund restoration scenarios with documented timelines and evidence packages.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary"><Users className="h-6 w-6"/></div>
                <CardTitle>Community Mentorship</CardTitle>
                <CardDescription>Guided cohorts and office hours</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-muted-foreground">
                  Cohort-based learning pairs practical workshops with mentor feedback. Users practice risk budgeting, on-chain ops, and compliance hygiene. Office hours address live questions, while reference libraries provide templates for SOPs, custody checklists, and exchange reconciliation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary"><ChartBar className="h-6 w-6"/></div>
                <CardTitle>Real-Time Crypto Analytics</CardTitle>
                <CardDescription>Wallet, positions, and P&L telemetry</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-muted-foreground">
                  Unified dashboards stream wallet balances, exchange positions, and DeFi yields. Users can tag transactions, export CSVs for tax software, and subscribe to alerts on volatility, funding rates, and protocol changes. API endpoints support developer access for custom models and automations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join/Pilots */}
      <section className="bg-muted/30 py-20 md:py-28" id="join">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Join the Platform</h2>
            <p className="mb-8 text-muted-foreground">Apply for early access to XcloudMultixPro cohorts and beta features, including tokenization pilots and new recovery workflows.</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/contact">Request Access</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#pilots">View Tokenization Pilots</a>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <a href="#learn"><PlayCircle className="mr-2 h-5 w-5"/>Watch Demo</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28" id="pilots">
        <div className="container mx-auto px-6">
          <Card className="mx-auto max-w-5xl">
            <CardHeader>
              <CardTitle>Tokenization Pilots</CardTitle>
              <CardDescription>Exploring fractionalized real estate and revenue-sharing assets</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed text-muted-foreground">
                We are prototyping transparent tokenization flows for income-producing real estate and operating businesses. Smart contracts record ownership, settlements, and distributions with verifiable audit trails. Compliance, KYC, and transfer restrictions are handled at the contract level with permissioned registries.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
