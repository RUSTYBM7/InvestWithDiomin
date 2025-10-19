import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ModeToggle } from "./theme-toggle";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const routes = [
    { path: "/", label: "Home" },
    { path: "/feature", label: "Profile" },
    { path: "/advisory", label: "Advisory" },
    { path: "/services", label: "Services" },
    { path: "/case-studies", label: "Case Studies" },
    { path: "/real-estate", label: "Real Estate" },
    { path: "/philanthropy", label: "Philanthropy" },
    { path: "/catalog", label: "Catalog" },
    { path: "/insights", label: "Insights" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;
  return (
    <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary">
              <span className="font-serif text-xl font-bold text-primary-foreground">SD</span>
            </div>
            <div className="hidden sm:block">
              <h2 className="font-serif text-lg font-bold leading-tight">Invest with Diomin</h2>
              <p className="text-xs text-muted-foreground">CPWA® Wealth Advisory</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {routes.map((route) => (
              <Link key={route.path} to={route.path}>
                <Button
                  variant={isActive(route.path) ? "default" : "ghost"}
                  className="text-sm"
                >
                  {route.label}
                </Button>
              </Link>
            ))}
            <ModeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-2 lg:hidden">
            <ModeToggle />
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <div className="mt-8 flex flex-col gap-2">
                  {routes.map((route) => (
                    <Link key={route.path} to={route.path} onClick={() => setOpen(false)}>
                      <Button
                        variant={isActive(route.path) ? "default" : "ghost"}
                        className="w-full justify-start"
                      >
                        {route.label}
                      </Button>
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}