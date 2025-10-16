import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Building2, PiggyBank, Briefcase, Home } from "lucide-react";
import Footer from "@/components/Footer";

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      category: "Tax Strategy",
      icon: TrendingUp,
      title: "Liquidity Optimization",
      metric: "$8.5M",
      metricLabel: "Transaction Value",
      client: "Tech Entrepreneur",
      challenge: "Client faced significant tax liability from equity exit event with concentrated stock position.",
      solution: "Implemented multi-year tax deferral strategy using charitable remainder trust and installment sale structure.",
      result: "Reduced immediate tax liability by 32% while maintaining liquidity for reinvestment.",
      timeline: "18 months",
    },
    {
      category: "Estate Planning",
      icon: Users,
      title: "Intergenerational Transfer",
      metric: "$15M",
      metricLabel: "Estate Value",
      client: "Multi-Generational Family",
      challenge: "Preserve family wealth across three generations while minimizing estate tax exposure.",
      solution: "Structured dynasty trust with generation-skipping provisions and family limited partnership.",
      result: "Preserved 89% of estate value for heirs, avoiding $1.7M in estate taxes.",
      timeline: "24 months",
    },
    {
      category: "Portfolio Strategy",
      icon: Building2,
      title: "Portfolio Diversification",
      metric: "24% IRR",
      metricLabel: "5-Year Return",
      client: "Healthcare Executive",
      challenge: "Over-concentrated portfolio in employer stock with limited diversification.",
      solution: "Systematic diversification into alternative assets including real estate and private equity.",
      result: "Achieved 24% IRR over 5 years, outperforming previous portfolio by 11%.",
      timeline: "36 months",
    },
    {
      category: "Business Exit",
      icon: Briefcase,
      title: "Strategic Business Sale",
      metric: "$22M",
      metricLabel: "Sale Price",
      client: "Manufacturing Business Owner",
      challenge: "Structure tax-efficient exit from family business while funding retirement.",
      solution: "Coordinated installment sale with ESOP and qualified small business stock treatment.",
      result: "Deferred 60% of tax liability and secured guaranteed income stream for 10 years.",
      timeline: "12 months",
    },
    {
      category: "Wealth Preservation",
      icon: PiggyBank,
      title: "Asset Protection Strategy",
      metric: "$12M",
      metricLabel: "Protected Assets",
      client: "Medical Practice Group",
      challenge: "Protect accumulated wealth from professional liability exposure.",
      solution: "Implemented domestic asset protection trust with offshore components and liability insurance.",
      result: "Secured $12M in assets with comprehensive protection structure.",
      timeline: "9 months",
    },
    {
      category: "Real Estate",
      icon: Home,
      title: "1031 Exchange Strategy",
      metric: "$5.2M",
      metricLabel: "Property Portfolio",
      client: "Commercial Real Estate Investor",
      challenge: "Upgrade property portfolio without triggering capital gains tax.",
      solution: "Executed multi-property 1031 exchange into higher-yield commercial assets.",
      result: "Deferred $890K in capital gains while increasing annual cash flow by 35%.",
      timeline: "6 months",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-primary/5 to-secondary/5 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">Case Studies</h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Real results from strategic wealth management solutions
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study, index) => {
              const Icon = study.icon;
              return (
                <Card key={index} className="transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-3 flex items-center justify-between">
                      <Badge variant="outline">{study.category}</Badge>
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <CardTitle className="text-xl">{study.title}</CardTitle>
                    <CardDescription>{study.client}</CardDescription>
                    <div className="mt-4 rounded-lg bg-muted/50 p-4">
                      <div className="text-3xl font-bold text-primary">{study.metric}</div>
                      <div className="text-xs text-muted-foreground">{study.metricLabel}</div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="mb-1 text-sm font-semibold">Challenge</h4>
                      <p className="text-sm text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="mb-1 text-sm font-semibold">Solution</h4>
                      <p className="text-sm text-muted-foreground">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="mb-1 text-sm font-semibold">Result</h4>
                      <p className="text-sm font-medium text-foreground">{study.result}</p>
                    </div>
                    <div className="pt-2 text-xs text-muted-foreground">
                      Timeline: {study.timeline}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Disclaimer */}
          <Card className="mx-auto max-w-4xl border-muted/50 bg-muted/20">
            <CardContent className="p-6">
              <p className="text-center text-sm text-muted-foreground">
                <strong>Disclaimer:</strong> All case studies are anonymized for client confidentiality. Results shown are for educational purposes only and represent specific scenarios under particular market conditions. Past performance does not guarantee future results. Individual outcomes may vary based on personal circumstances, market conditions, and timing. These examples are not personalized investment advice.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}