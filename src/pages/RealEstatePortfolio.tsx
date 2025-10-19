import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, TrendingUp, DollarSign, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

export default function RealEstatePortfolioPage() {
  const properties = [
    {
      id: 1,
      title: "Luxury Residential Portfolio - Manhattan",
      location: "New York, NY",
      value: "$45.2M",
      roi: 8.5,
      status: "Active",
      description: "Prime Manhattan real estate portfolio spanning trophy residential assets across Upper East Side and Central Park West.",
      details: ["Class A buildings", "100+ unit portfolio", "Green-certified", "9% cap rate"],
    },
    {
      id: 2,
      title: "Commercial Mixed-Use Complex",
      location: "Miami, FL",
      value: "$62M",
      roi: 11.2,
      status: "Active",
      description: "Modern mixed-use development combining office, retail, and luxury residential components in Miami's financial district.",
      details: ["500K SF development", "Fully leased", "TOD location", "11% projected IRR"],
    },
    {
      id: 3,
      title: "Strategic Land Holdings",
      location: "Austin, TX",
      value: "$28.5M",
      roi: 15.3,
      status: "Development",
      description: "High-growth corridor land holdings positioned for future development during Austin's continued expansion.",
      details: ["3,200 acres", "Zoning approved", "Highway frontage", "15-year hold"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/real-estate" className="text-primary hover:underline">Real Estate</Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-muted-foreground">Portfolio</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-background via-primary/5 to-secondary/5 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4">Strategic Real Estate Investing</Badge>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Real Estate Portfolio Strategy</h1>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              Real estate has long been a cornerstone of wealth preservation for high-net-worth individuals. Strategic property investments provide inflation hedging, tax advantages, cash flow diversification, and tangible asset backing. Our curated portfolio showcases opportunities across residential, commercial, and development phases aligned with sophisticated investor goals.
            </p>
          </div>
        </div>
      </section>

      {/* Why Real Estate */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-3xl font-bold">Why Real Estate for Wealth Building</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Inflation Hedge",
                desc: "Real estate values and rents historically track inflation, protecting purchasing power across decades.",
              },
              {
                title: "Leverage & Returns",
                desc: "Strategic financing amplifies returns through equity appreciation and cash flow multiples.",
              },
              {
                title: "Tax Advantages",
                desc: "Depreciation deductions, 1031 exchanges, and cost segregation reduce taxable income significantly.",
              },
              {
                title: "Tangible Collateral",
                desc: "Unlike stocks, real property serves as physical collateral for financing and legacy documentation.",
              },
              {
                title: "Income Diversification",
                desc: "Consistent rental income provides steady cash flow independent of market fluctuations.",
              },
              {
                title: "Portfolio Diversification",
                desc: "Real estate correlates differently from equities, reducing overall portfolio volatility.",
              },
            ].map((item, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-3xl font-bold">Featured Properties</h2>
          <div className="space-y-8">
            {properties.map((prop) => (
              <Card key={prop.id} className="overflow-hidden">
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 md:aspect-auto" />
                  <div className="md:col-span-2 p-6">
                    <div className="mb-3 flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold">{prop.title}</h3>
                        <p className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {prop.location}
                        </p>
                      </div>
                      <Badge>{prop.status}</Badge>
                    </div>
                    <p className="mb-4 text-muted-foreground">{prop.description}</p>
                    <div className="mb-4 grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Asset Value</p>
                        <p className="text-lg font-bold text-primary">{prop.value}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">ROI / Yield</p>
                        <p className="text-lg font-bold text-primary">{prop.roi}%</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {prop.details.map((detail, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {detail}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
