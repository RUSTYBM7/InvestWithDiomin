import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Heart, Shield, Users } from "lucide-react";
import Footer from "@/components/Footer";
import { ConsultationDialog } from "@/components/ConsultationDialog";
import { Link } from "react-router-dom";

export default function EstatePlanningPage() {
  const documents = [
    { title: "Will", desc: "Foundation of estate plan; directs asset distribution" },
    { title: "Revocable Living Trust", desc: "Avoids probate; maintains privacy; enables incapacity planning" },
    { title: "Power of Attorney", desc: "Financial decision-making authority during incapacity" },
    { title: "Healthcare Directive", desc: "Medical decision authority and end-of-life preferences" },
    { title: "Beneficiary Designations", desc: "Direct transfer of retirement, insurance, and investment accounts" },
    { title: "HIPAA Authorization", desc: "Permits healthcare access for authorized representatives" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/advisory" className="text-primary hover:underline">Advisory</Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-muted-foreground">Estate Planning</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-background via-primary/5 to-secondary/5 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl">
            <Badge className="mb-4">Service Deep Dive</Badge>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Estate & Legacy Planning</h1>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              Estate planning is far more than creating a will. For high-net-worth families and entrepreneurs, comprehensive estate planning coordinates legal documents, tax strategies, business succession, philanthropic objectives, and family governance to ensure your legacy is preserved exactly as you envision it. Our integrated approach ensures every element of your estate plan works together seamlessly.
            </p>
            <ConsultationDialog>
              <Button size="lg">Schedule Estate Planning Review</Button>
            </ConsultationDialog>
          </div>
        </div>
      </section>

      {/* Essential Documents */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-3xl font-bold">Essential Estate Planning Documents</h2>
          <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
            {documents.map((doc, i) => (
              <Card key={i} className="border-muted/50">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-bold">{doc.title}</h3>
                  <p className="text-sm text-muted-foreground">{doc.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Generational Planning */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-3xl font-bold">Multi-Generational Wealth Transfer</h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                The average wealthy family loses 70% of their wealth by the second generation and 90% by the third. The cause is rarely poor investment decisions—it's inadequate planning. Comprehensive multi-generational planning prevents this loss through:
              </p>
              <div className="space-y-3">
                {[
                  "Clear governance structures defining family decision-making",
                  "Wealth education programs for heirs ensuring financial literacy",
                  "Tax-efficient distribution mechanisms preserving purchasing power",
                  "Business succession plans maintaining operational continuity",
                  "Conflict resolution frameworks addressing family dynamics",
                  "Regular family meetings aligned around shared values",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Structures */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-3xl font-bold">Advanced Estate Planning Structures</h2>
          <div className="mx-auto max-w-4xl space-y-8">
            {[
              { title: "Dynasty Trusts", desc: "Perpetual trusts preserving wealth across generations while minimizing estate taxes through generation-skipping transfer tax exemptions." },
              { title: "GRATs (Grantor Retained Annuity Trusts)", desc: "Transfer appreciating assets to heirs with minimal gift tax by retaining annuity payments; remaining appreciation passes tax-free." },
              { title: "IDGTs (Intentionally Defective Grantor Trusts)", desc: "Strategic trusts for income tax purposes while removing assets from your estate, creating leverage for tax savings." },
              { title: "CRTs (Charitable Remainder Trusts)", desc: "Receive income for life while supporting charitable causes; eliminate capital gains on appreciated assets." },
              { title: "Family Limited Partnerships", desc: "Consolidate control while transferring fractional interests to heirs at valuation discounts, reducing estate taxes." },
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

      <Footer />
    </div>
  );
}
