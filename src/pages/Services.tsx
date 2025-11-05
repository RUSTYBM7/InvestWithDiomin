import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ArrowRight, Award, BookOpen, Building2, Home, TrendingUp } from "lucide-react";
import { ConsultationDialog } from "@/components/ConsultationDialog";
import Footer from "@/components/Footer";

interface Service {
  title: string;
  description: string;
  includes: string[];
  details: string;
  icon: typeof TrendingUp;
  cta: string;
}

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      title: "Private Wealth Strategy (CPWA® Core)",
      description: "Comprehensive financial architecture integrating tax, estate, liquidity, and growth strategies.",
      includes: [
        "Tax-aware portfolio rebalancing",
        "Comprehensive risk management",
        "Wealth preservation strategies",
        "Personalized financial planning",
        "Liquidity optimization",
        "Investment policy statement development",
      ],
      details: "Our CPWA®-level wealth strategy provides holistic portfolio management for high-net-worth individuals and families. We integrate tax optimization, estate considerations, and liquidity planning into a cohesive wealth architecture designed for long-term growth and preservation. Each strategy is customized to your unique financial situation, goals, and risk tolerance.",
      cta: "Explore Strategy",
      icon: TrendingUp,
    },
    {
      title: "Tax Optimization & Estate Planning",
      description: "Multi-generational wealth transfer with efficiency and legacy protection.",
      includes: [
        "Tax-efficient wealth transfer strategies",
        "Trust structure design and implementation",
        "Charitable giving frameworks",
        "Business succession planning",
        "Estate tax minimization",
        "Generation-skipping strategies",
      ],
      details: "Structure your legacy for maximum impact and minimal tax burden. We design sophisticated estate plans using trusts, charitable entities, and business exit frameworks to preserve wealth across generations. Our strategies reduce estate and gift tax exposure while ensuring your wealth supports your family's long-term goals and philanthropic vision.",
      cta: "Secure Your Legacy",
      icon: Award,
    },
    {
      title: "Real Estate & Alternative Assets",
      description: "Blend of tangible investments, private equity, and advisory insights.",
      includes: [
        "Real estate investment analysis",
        "Private equity access and due diligence",
        "Alternative asset allocation",
        "Tangible asset strategy",
        "Portfolio diversification beyond public markets",
      ],
      details: "Diversify beyond traditional stocks and bonds with strategic alternative investments. We provide access to real estate opportunities, private equity, and other tangible assets that complement your portfolio. Our due diligence process ensures each investment aligns with your overall wealth strategy and risk profile.",
      cta: "Diversify Smarter",
      icon: Building2,
    },
    {
      title: "Family Office Advisory",
      description: "Governance, succession, and philanthropic planning for families.",
      includes: [
        "Family governance structure design",
        "Succession planning and leadership transition",
        "Philanthropic strategy development",
        "Next-generation wealth education",
        "Family mission and values documentation",
        "Multi-generational communication frameworks",
      ],
      details: "Build institutional-grade wealth management infrastructure for your family. We help establish governance frameworks, succession plans, and philanthropic strategies that preserve family values and wealth across generations. Our advisory includes educational programs for heirs and operational structures for family offices.",
      cta: "Start Building",
      icon: Home,
    },
    {
      title: "Financial Education & Workshops",
      description: "Courses, mentorships, and seminars tailored for modern wealth builders.",
      includes: [
        "Executive wealth management masterclasses",
        "Team financial literacy programs",
        "One-on-one coaching sessions",
        "Custom workshops for organizations",
        "Advanced tax and estate seminars",
      ],
      details: "Empower yourself and your team with sophisticated financial knowledge. Our educational programs range from executive masterclasses to personalized coaching, covering topics like tax optimization, investment strategy, and wealth preservation. We tailor each session to your learning goals and experience level.",
      cta: "Book a Session",
      icon: BookOpen,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-primary/5 to-secondary/5 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Services Catalog</h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Precision-built solutions across portfolio engineering, tax strategy, estate architecture, and family governance—delivered with geometric clarity and elegant execution.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="group cursor-pointer transition-all hover:shadow-xl hover:border-primary/30"
                  onClick={() => setSelectedService(service)}
                >
                  <CardHeader>
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" className="w-full justify-between group/btn">
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-2xl">
          {selectedService && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedService.title}</DialogTitle>
                <DialogDescription className="text-base">
                  {selectedService.description}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6 py-4">
                <div>
                  <h4 className="mb-3 font-semibold">Service Details</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {selectedService.details}
                  </p>
                </div>
                <div>
                  <h4 className="mb-3 font-semibold">What's Included</h4>
                  <ul className="space-y-2">
                    {selectedService.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <ConsultationDialog>
                  <Button className="w-full" size="lg">
                    {selectedService.cta}
                  </Button>
                </ConsultationDialog>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}