import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldAlert, ShieldCheck, FileSearch, Mail } from "lucide-react";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

export default function RecoveryPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-br from-background via-primary/5 to-secondary/5 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">Digital Asset Recovery</h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Structured recovery workflows for compromised wallets, exchange lockouts, and chain investigations. We combine chain analysis, documentation support, and liaison processes to maximize the probability of fund restoration while protecting legal posture and evidence integrity.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/contact">Start Recovery</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#process">Review Process</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28" id="process">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {[{
              icon: FileSearch,
              title: "Forensic Intake",
              desc: "Gather wallet addresses, transaction hashes, exchange tickets, and correspondence. Build a timeline and evidence packet for triage.",
            },{
              icon: ShieldCheck,
              title: "Chain Analysis",
              desc: "Trace flows across chains, mixers, and bridges. Identify counterparties and prepare notices for exchanges and service providers.",
            },{
              icon: ShieldAlert,
              title: "Restoration Actions",
              desc: "Coordinate with platforms, legal counsel, and agencies. Pursue account unlocks, clawbacks, or settlement pathways where applicable.",
            }].map((item, i) => {
              const Icon = item.icon;
              return (
                <Card key={i} className="transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-6 w-6"/></div>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.desc}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <a href="mailto:book@investwithdiomin.today?subject=Recovery%20Request"><Mail className="mr-2 h-5 w-5"/>Email Recovery Team</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
