import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-br from-background via-primary/5 to-secondary/5 py-20 md:py-28">
        <div className="container mx-auto px-6 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Transforming Digital Finance Through Automation, Leverage, and Recovery</h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Our services combine intelligent automation with human insight—building an ecosystem that recovers, protects, and multiplies digital assets through the XcloudMultixPro framework.
          </p>
        </div>
      </section>

      {/* Section 1: XcloudMultixPro */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-5xl">
          <Card className="border-muted/50">
            <CardHeader>
              <CardTitle>XcloudMultixPro — The Core Engine of Digital Leverage</CardTitle>
              <CardDescription>Education, telemetry, and execution guardrails</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                XcloudMultixPro is the heartbeat of Invest With Diomin’s ecosystem. It merges blockchain intelligence, adaptive analytics, and liquidity optimization to empower traders, allocators, and institutions to act with discipline. The system continuously maps asset performance and liquidity depth across venues, highlighting slippage, funding trends, and volatility regimes that materially affect positioning. Clients can inspect exposures, simulate stress, and set leverage bounds that are enforced by policy—turning volatility into structured, explainable decisions.
              </p>
              <p>
                Instead of opaque dashboards, XcloudMultixPro prioritizes clarity: position sizing helpers, liquidation buffer calculators, and collateral health scores make risks legible before markets dislocate. Signal layers draw on oracle pricing and cross-exchange telemetry to surface anomalies early, while education tracks translate concepts into procedures your team can follow. The result is an execution layer that narrows discretion to preapproved actions, reduces error paths, and aligns day‑to‑day activity with long‑term policy.
              </p>
              <div className="mt-4 flex gap-3">
                <Button asChild aria-label="Explore XcloudMultixPro"><Link to="/services/xcloudmultixpro">Explore XcloudMultixPro</Link></Button>
                <Button asChild variant="outline" aria-label="View Market Updates"><Link to="/insights/market">View Market Updates</Link></Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 2: Fund & Asset Recovery */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-5xl">
          <Card className="border-muted/50">
            <CardHeader>
              <CardTitle>Fund & Asset Recovery Solutions</CardTitle>
              <CardDescription>Forensics, trace, and escalation workflows</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Invest With Diomin leads structured crypto recovery efforts anchored in discipline and documentation. Our workflow begins with a secure intake and triage to capture facts, timelines, and wallet inventories. We then perform cross‑chain tracing, clustering, and transaction path reconstruction to identify counterparties, mixing activity, and potential exit points. Evidence is compiled into a formal dossier suitable for exchange liaison, counsel review, or law‑enforcement referral. We do not guarantee outcomes; instead, we reduce uncertainty and maximize the probability of restoration through methodical steps and proper escalation.
              </p>
              <p>
                Typical scenarios include exchange or platform failures, phishing and social engineering, compromised keys, and vendor custody gaps. For each, we establish an evidence trail, validate claims with independent data, and advise on jurisdictional options while preserving legal posture. Clients receive status updates and a clear next‑action plan. Recovery is best‑effort by nature; our role is to bring rigor, transparency, and momentum to a difficult process.
              </p>
              <div className="mt-4">
                <Button asChild aria-label="Start a Secure Recovery"><Link to="/services/fund-recovery">Start a Secure Recovery</Link></Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 3: Credit & Liquidity Bridge */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-5xl">
          <Card className="border-muted/50">
            <CardHeader>
              <CardTitle>Crypto‑Backed Credit & Liquidity Bridge</CardTitle>
              <CardDescription>Responsible leverage with transparent controls</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Credit Bridge creates a practical pathway from digital assets to real‑world liquidity without forced liquidation. Collateral assessments consider asset correlation, volatility, and depth to determine conservative advance rates and liquidation buffers. Live valuation feeds help maintain health ratios, while alerts flag drawdowns early. Rather than promise yield, we focus on responsible access to credit that respects market risk and borrower objectives, aligning term sheets, covenants, and repayment schedules with measurable constraints.
              </p>
              <p>
                Individuals and businesses can request structured credit against verified holdings, with documentation designed for clarity and auditability. Automated checks reduce friction in verification while preserving human review for edge cases. The emphasis is on transparency: borrowers see how their collateral translates into limits, what events trigger action, and how to regain headroom safely. This is leverage as a tool—not a thrill—embedded in a framework that preserves control.
              </p>
              <div className="mt-4">
                <Button asChild aria-label="Request Credit Access"><Link to="/services/credit-bridge">Request Credit Access</Link></Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 4: Tokenized Real Estate */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-5xl">
          <Card className="border-muted/50">
            <CardHeader>
              <CardTitle>Tokenized Real Estate Integration</CardTitle>
              <CardDescription>Transparent participation with disciplined underwriting</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                We apply traditional real‑estate discipline—NOI, DSCR, cap‑rate spreads—to a tokenization workflow designed for clarity. Each project undergoes compliance review, valuation, and fractional issuance mechanics that make participation simple to understand and track. Holders can view property metrics, distribution schedules, and secondary opportunities through a single interface. Tokenization pilots are explicitly labeled experimental and aim to demonstrate better record‑keeping, liquidity windows, and investor alignment—not shortcuts or guarantees.
              </p>
              <p>
                By blending conventional underwriting with verifiable ownership records, investors gain transparent insights into asset health and capital flows. Reports emphasize cash‑flow quality, reserve policies, and scenario analysis instead of hype. The objective is to modernize administration and access while preserving the prudence that makes real estate valuable in the first place.
              </p>
              <div className="mt-4">
                <Button asChild aria-label="View Real Estate Opportunities"><Link to="/services/real-estate">View Real Estate Opportunities</Link></Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 5: Compliance, Security & Data Assurance */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-5xl">
          <Card className="border-muted/50">
            <CardHeader>
              <CardTitle>Compliance, Security & Data Assurance</CardTitle>
              <CardDescription>Controls, documentation, and verification by design</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Every digital operation is anchored in layered security and clear documentation. Identity and access boundaries, encrypted transport and storage, and change‑tracking help protect sensitive workflows. We operate with a compliance mindset: AML/KYC posture, incident response runbooks, and evidence trails that make reviews efficient. Monitoring focuses on anomalies that matter—unexpected movements, permission drift, and timing patterns—so risk owners can act decisively with a record to support decisions.
              </p>
              <p>
                Transparency is integral, not decorative. We articulate what data is captured, how it is used, and how clients can control retention. Service communications avoid performance promises and set expectations plainly. When systems stress, the priority is to protect capital and clarity: pause switches, withdrawal holds for review, and post‑incident summaries. The aim is durable trust built from procedure, not slogans.
              </p>
              <div className="mt-4 flex gap-3">
                <Button asChild variant="outline" aria-label="Read Policy"><Link to="/about/security">Read Policy</Link></Button>
                <Button asChild aria-label="Partner With Us"><Link to="/services/institutional">Partner With Us</Link></Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-6 text-center text-xs text-muted-foreground">
          Digital‑asset operations involve risk. Recovery and trading outcomes are not guaranteed.
        </div>
      </section>

      <Footer />
    </div>
  );
}