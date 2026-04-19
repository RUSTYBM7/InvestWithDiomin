import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { MediaHero } from "@/components/media/MediaHero";
import { MediaFigure } from "@/components/media/MediaFigure";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <MediaHero
        tag="services-hero"
        title="Transforming Digital Finance Through Automation, Leverage, and Recovery"
        subtitle="An ecosystem that recovers, protects, and multiplies digital assets through the XcloudMultixPro framework."
        cta={
          <>
            <Button asChild aria-label="Explore XcloudMultixPro"><Link to="/services/xcloudmultixpro">Explore XcloudMultixPro</Link></Button>
            <Button asChild variant="outline" aria-label="View Market Updates"><Link to="/insights/markets">View Market Updates</Link></Button>
          </>
        }
      />

      {/* Section 1: XcloudMultixPro */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <Card className="border-muted/50">
            <CardHeader>
              <CardTitle>XcloudMultixPro — The Core Engine of Digital Leverage</CardTitle>
              <CardDescription>Education, telemetry, and execution guardrails</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 text-muted-foreground">
              <MediaFigure kind="image" src="/api/v1/media?tag=xcloud" alt="XcloudMultixPro dashboard visualization" caption="Illustrative dashboard" credit="Pinterest & curated sources" className="-mx-2" />
              <p>
                XcloudMultixPro merges blockchain intelligence, adaptive analytics, and liquidity optimization to empower traders, allocators, and institutions to act with discipline. The system continuously maps asset performance and liquidity depth across venues, surfacing slippage, funding trends, and volatility regimes that affect positioning.
              </p>
              <div className="mt-2 flex gap-3">
                <Button asChild aria-label="Explore XcloudMultixPro"><Link to="/services/xcloudmultixpro">Explore XcloudMultixPro</Link></Button>
                <Button asChild variant="outline" aria-label="View Market Updates"><Link to="/insights/markets">View Market Updates</Link></Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 2: Fund & Asset Recovery */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <Card className="border-muted/50">
            <CardHeader>
              <CardTitle>Fund & Asset Recovery Solutions</CardTitle>
              <CardDescription>Forensics, trace, and escalation workflows</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 text-muted-foreground">
              <MediaFigure kind="image" src="/api/v1/media?tag=fund-recovery" alt="Crypto forensics workflow diagram" caption="Evidence-led recovery process" credit="Pinterest & curated sources" />
              <p>
                Structured crypto recovery anchored in discipline and documentation: secure intake, cross-chain tracing, clustering, and transaction path reconstruction to identify counterparties and potential exit points. Evidence compiled into a formal dossier for exchange liaison, counsel, or law-enforcement referral.
              </p>
              <div className="mt-2">
                <Button asChild aria-label="Start a Secure Recovery"><Link to="/services/fund-recovery">Start a Secure Recovery</Link></Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 3: Credit & Liquidity Bridge */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <Card className="border-muted/50">
            <CardHeader>
              <CardTitle>Crypto‑Backed Credit & Liquidity Bridge</CardTitle>
              <CardDescription>Responsible leverage with transparent controls</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 text-muted-foreground">
              <MediaFigure kind="image" src="/api/v1/media?tag=credit-bridge" alt="Credit bridge concept art" caption="Collateralized access to liquidity" credit="Pinterest & curated sources" />
              <p>
                Practical pathway from digital assets to real‑world liquidity without forced liquidation. Collateral assessments consider correlation, volatility, and depth to determine conservative advance rates and liquidation buffers with clear alerts and health ratios.
              </p>
              <div className="mt-2">
                <Button asChild aria-label="Request Credit Access"><Link to="/services/credit-bridge">Request Credit Access</Link></Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 4: Tokenized Real Estate */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <Card className="border-muted/50">
            <CardHeader>
              <CardTitle>Tokenized Real Estate Integration</CardTitle>
              <CardDescription>Transparent participation with disciplined underwriting</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 text-muted-foreground">
              <MediaFigure kind="image" src="/api/v1/media?tag=real-estate" alt="Modern building exterior representing tokenized assets" caption="Institutional-grade underwriting" credit="Pinterest & curated sources" />
              <p>
                Traditional real‑estate discipline applied to tokenization: compliance review, valuation, and fractional issuance mechanics. Holders view metrics, distribution schedules, and secondary opportunities through a single interface.
              </p>
              <div className="mt-2">
                <Button asChild aria-label="View Real Estate Opportunities"><Link to="/services/real-estate">View Real Estate Opportunities</Link></Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 5: Compliance, Security & Data Assurance */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <Card className="border-muted/50">
            <CardHeader>
              <CardTitle>Compliance, Security & Data Assurance</CardTitle>
              <CardDescription>Controls, documentation, and verification by design</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 text-muted-foreground">
              <MediaFigure kind="image" src="/api/v1/media?tag=compliance" alt="Security abstraction with shield and ledger" caption="Defense-in-depth controls" credit="Pinterest & curated sources" />
              <p>
                Layered security and clear documentation with identity boundaries, encrypted storage, change‑tracking, and anomaly monitoring. Operate with a compliance mindset and transparent service communications.
              </p>
              <div className="mt-2 flex gap-3">
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