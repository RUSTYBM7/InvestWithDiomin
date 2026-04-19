import { GlassButton } from "./ui/glass-button";
import { GlassCard } from "./ui/glass-card";
import { TrendingUp, Shield, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  const features = [
    { icon: TrendingUp, label: "Wealth Strategy" },
    { icon: Shield, label: "Asset Protection" },
    { icon: Zap, label: "Digital Assets" },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className="absolute inset-0 bg-gradient-radial" />
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/15 rounded-full blur-[120px] animate-pulse-glow animation-delay-2000" />
      
      <div className="relative max-w-6xl mx-auto text-center space-y-8">
        <GlassCard variant="subtle" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6">
          <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-foreground/80">Wealth Management Reimagined</span>
        </GlassCard>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
          Building Digital Wealth
          <span className="block mt-2 text-gradient">Through Intelligent Systems</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Comprehensive wealth advisory combining traditional finance expertise with 
          cutting-edge digital asset strategies for sophisticated investors.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <GlassButton size="lg" rightIcon={<ArrowRight className="h-5 w-5" />} asChild>
            <Link to="/services/fund-recovery" data-testid="button-start-recovery">
              Start Recovery
            </Link>
          </GlassButton>
          <GlassButton size="lg" variant="outline" asChild>
            <a 
              href="https://www.xcloudmultixpro.com" 
              target="_blank" 
              rel="noopener noreferrer"
              data-testid="button-explore-xcloud"
            >
              Explore XcloudMultixPro
            </a>
          </GlassButton>
        </div>
        
        <div className="pt-12 flex flex-wrap justify-center gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <GlassCard 
                key={index} 
                variant="subtle" 
                className="flex items-center gap-3 px-5 py-3 rounded-xl"
                data-testid={`feature-badge-${index}`}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-medium">{feature.label}</span>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
