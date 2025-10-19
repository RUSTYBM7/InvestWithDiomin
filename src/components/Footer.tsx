import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { Instagram, Linkedin, Send } from "lucide-react";

export default function Footer() {
  const navigation = {
    main: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Catalog", href: "/catalog" },
      { name: "Insights", href: "/insights" },
      { name: "Contact", href: "/contact" },
    ],
    social: [
      {
        name: "Instagram",
        href: "https://instagram.com/investwithdiomin",
        icon: Instagram,
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
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="mb-4 font-serif text-xl font-bold">Invest with Diomin</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Professional wealth advisory services for entrepreneurs, executives, and families.
            </p>
            <div className="flex gap-4">
              {navigation.social.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon className="h-4 w-4" />
                    <span className="sr-only">{item.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 font-semibold">Navigation</h4>
            <ul className="space-y-2 text-sm">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:book@investwithdiomin.today" className="hover:text-foreground">
                  book@investwithdiomin.today
                </a>
              </li>
              <li>
                <span className="text-xs">Domain: InvestWithDiomin.today</span>
              </li>
              <li className="pt-2">
                <span className="font-medium text-foreground">Office Hours</span>
                <br />
                Monday - Friday
                <br />
                9:00 AM - 5:00 PM EST
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Legal */}
        <div className="space-y-3 text-center text-xs text-muted-foreground">
          <p>
            CPWA® is a registered mark of the Investments & Wealth Institute™.
          </p>
          <p>
            © 2025 Invest with Diomin. All rights reserved.
          </p>
          <p>
            All content is educational only and not personalized financial advice. Securities and
            advisory services offered through qualified registered representatives. Past
            performance is not indicative of future results.
          </p>
        </div>
      </div>
    </footer>
  );
}