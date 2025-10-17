import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, TrendingUp, DollarSign } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import Footer from "@/components/Footer";

export default function RealEstatePage() {
  const [properties, setProperties] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadProperties();
  }, []);

  const loadProperties = async () => {
    try {
      const { data, error } = await supabase
        .from("properties")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      setProperties(data || []);
    } catch (error) {
      console.error("Failed to load properties:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const placeholderProperties = [
    {
      title: "Luxury Residential Portfolio",
      location: "New York, NY",
      value: "$45.2M",
      roi_percent: 8.5,
      status: "available",
    },
    {
      title: "Commercial Mixed-Use Complex",
      location: "Miami, FL",
      value: "$62M",
      roi_percent: 11.2,
      status: "available",
    },
    {
      title: "Strategic Land Holdings",
      location: "Austin, TX",
      value: "$28.5M",
      roi_percent: 15.3,
      status: "development",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-br from-background via-primary/5 to-secondary/5 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              Real Estate & Alternative Assets
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Curated portfolio of high-yield properties and tangible investments
            </p>
          </div>
        </div>
      </section>

      {/* Properties */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Featured Properties</h2>
            <p className="text-muted-foreground">Strategic real estate opportunities for wealth diversification</p>
          </div>

          {isLoading ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="animate-pulse">
                  <div className="aspect-video bg-muted" />
                  <CardHeader>
                    <div className="h-4 w-24 rounded bg-muted" />
                    <div className="h-6 w-full rounded bg-muted" />
                  </CardHeader>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {placeholderProperties.map((prop, index) => (
                <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20" />
                  <CardHeader>
                    <div className="mb-2 flex items-start justify-between">
                      <Badge variant="outline" className="capitalize">
                        {prop.status}
                      </Badge>
                      <span className="text-lg font-bold text-primary">{prop.roi_percent}% ROI</span>
                    </div>
                    <CardTitle className="text-lg">{prop.title}</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {prop.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <span className="font-semibold">{prop.value}</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full" size="sm">
                      Request Details
                    </Button>
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
