import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { Instagram, Linkedin, Send, Share2, Mail, Clock, MapPin } from "lucide-react";
import { CryptoTicker } from "./CryptoTicker";
import { GlassCard } from "@/components/ui/glass-card";

export default function Footer() {
  const navigation = {
    main: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Case Studies", href: "/about/case-studies" },
      { name: "Catalog", href: "/catalog" },
      { name: "Insights", href: "/insights" },
      { name: "Contact", href: "/contact" },
    ],
    services: [
      { name: "Real Estate", href: "/services/real-estate" },
      { name: "Fintech", href: "/services/fintech" },
      { name: "XcloudMultixPro", href: "/services/xcloudmultixpro" },
      { name: "Fund Recovery", href: "/services/fund-recovery" },
    ],
    social: [
      {
        name: "Instagram",
        href: "https://instagram.com/investwithdiomin",
        icon: Instagram,
      },
      {
        name: "X (Twitter)",
        href: "https://x.com/Alvinadiomin",
        icon: Share2,
      },
      {
        name: "Threads",
        href: "https://threads.net/investwithdiomin",
        icon: Send,
      },
      {
        name: "LinkedIn",
        href: "https://linkedin.com/in/stephaniediomin",
        icon: Linkedin,
      },
    ],
  };

  return (
    <footer className="relative overflow-hidden border-t border-[var(--glass-border)] bg-gradient-to-b from-background to-muted/30">
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
      
      <div className="container relative mx-auto px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <h3 className="mb-4 text-2xl font-bold tracking-tight">
              InvestWith<span className="text-primary">Diomin</span>
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              Professional wealth advisory services for entrepreneurs, executives, and families navigating the intersection of traditional finance and digital assets.
            </p>
            <div className="flex gap-3">
              {navigation.social.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-xl glass-surface transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5 hover:shadow-[var(--glass-shadow-md)]"
                    data-testid={`link-social-${item.name.toLowerCase().replace(/[^a-z]/g, '')}`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="sr-only">{item.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Navigation</h4>
            <ul className="space-y-3 text-sm">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-foreground/70 transition-colors duration-150 hover:text-primary"
                    data-testid={`link-footer-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Services</h4>
            <ul className="space-y-3 text-sm">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-foreground/70 transition-colors duration-150 hover:text-primary"
                    data-testid={`link-footer-service-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Contact</h4>
            <GlassCard variant="subtle" elevation={1} className="p-4 space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Email</p>
                  <a 
                    href="mailto:book@investwithdiomin.today" 
                    className="text-sm font-medium hover:text-primary transition-colors"
                    data-testid="link-email"
                  >
                    book@investwithdiomin.today
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Office Hours</p>
                  <p className="text-sm font-medium">Mon - Fri, 9AM - 5PM EST</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Domain</p>
                  <p className="text-sm font-medium">InvestWithDiomin.today</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>

        <Separator className="my-10 bg-[var(--glass-border)]" />

        <div className="mb-8">
          <CryptoTicker />
        </div>

        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
            <Link to="/privacy" className="hover:text-primary transition-colors" data-testid="link-privacy">
              Privacy Policy
            </Link>
            <span className="text-muted-foreground/40">|</span>
            <Link to="/terms" className="hover:text-primary transition-colors" data-testid="link-terms">
              Terms of Service
            </Link>
            <span className="text-muted-foreground/40">|</span>
            <span>CPWA® is a registered mark of the Investments & Wealth Institute™</span>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Invest with Diomin. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
