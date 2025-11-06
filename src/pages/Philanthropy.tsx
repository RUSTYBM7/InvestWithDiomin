import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Target, Users } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import Footer from "@/components/Footer";

export default function PhilanthropyPage() {
  const [programs, setPrograms] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadPrograms();
  }, []);

  const loadPrograms = async () => {
    try {
      const { data, error } = await supabase
        .from("programs")
        .select("*")
        .eq("status", "active")
        .order("created_at", { ascending: false });
      if (error) throw error;
      setPrograms(data || []);
    } catch (error) {
      console.error("Failed to load programs:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const placeholderPrograms = [
    {
      title: "Emerging Leaders Initiative",
      description: "Scholarships for underrepresented professionals in wealth management",
      impact_area: "Education",
      grants_allocated: "$500K",
      beneficiaries: "150+",
    },
    {
      title: "Financial Literacy Fund",
      description: "Community workshops on wealth building and financial independence",
      impact_area: "Community",
      grants_allocated: "$300K",
      beneficiaries: "5,000+",
    },
    {
      title: "Women in Wealth Leadership",
      description: "Mentorship and funding for female entrepreneurs and advisors",
      impact_area: "Empowerment",
      grants_allocated: "$400K",
      beneficiaries: "200+",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-br from-background via-primary/5 to-secondary/5 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              HeartBridge: Philanthropy
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Strategic giving programs for meaningful impact
            </p>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="mb-2 text-2xl font-bold">Our Programs</h2>
              <p className="text-muted-foreground">Creating lasting positive change through strategic philanthropy</p>
            </div>
            <a href="https://www.heartbridgecharity.org" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-md border px-4 py-2 text-sm transition hover:bg-accent" aria-label="Visit HeartBridge Charity">
              Visit HeartBridge Charity →
            </a>
          </div>
          <div className="mb-16 grid gap-8 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6 text-center">
                <Heart className="mx-auto mb-4 h-8 w-8 text-primary" />
                <div className="mb-2 text-3xl font-bold text-primary">$1.2M</div>
                <div className="text-sm text-muted-foreground">Total Grants Allocated</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Target className="mx-auto mb-4 h-8 w-8 text-primary" />
                <div className="mb-2 text-3xl font-bold text-primary">3</div>
                <div className="text-sm text-muted-foreground">Active Programs</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="mx-auto mb-4 h-8 w-8 text-primary" />
                <div className="mb-2 text-3xl font-bold text-primary">5K+</div>
                <div className="text-sm text-muted-foreground">Lives Impacted</div>
              </CardContent>
            </Card>
          </div>

          {isLoading ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="animate-pulse">
                  <CardHeader>
                    <div className="h-4 w-24 rounded bg-muted" />
                    <div className="h-6 w-full rounded bg-muted" />
                    <div className="h-4 w-3/4 rounded bg-muted" />
                  </CardHeader>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {placeholderPrograms.map((program, index) => (
                <Card key={index} className="transition-all hover:shadow-lg">
                  <CardHeader>
                    <Badge className="mb-2 w-fit">{program.impact_area}</Badge>
                    <CardTitle className="text-lg">{program.title}</CardTitle>
                    <CardDescription>{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Grants Allocated:</span>
                        <span className="font-semibold">{program.grants_allocated}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Beneficiaries:</span>
                        <span className="font-semibold">{program.beneficiaries}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}