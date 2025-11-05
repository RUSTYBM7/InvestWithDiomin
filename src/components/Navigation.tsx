import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, LogIn } from "lucide-react";
import { ModeToggle } from "./theme-toggle";
import { useAuth } from "@/hooks/useAuth";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

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
          <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <span className="font-serif text-xl font-bold tracking-wide">Invest With Diomin</span>
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
            {!user && (
              <Link to="/sign-in" className="ml-2">
                <Button size="sm" className="gap-2">
                  <LogIn className="h-4 w-4" />
                  Sign In
                </Button>
              </Link>
            )}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            {/* ... keep existing nav links ... */}
            <a
              href="/api/openai/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center rounded-md border px-3 text-sm transition-colors hover:bg-accent"
            >
              Ask Stephanie AI
            </a>
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
                <div className="mb-6 border-b pb-4">
                  <Link to="/" onClick={() => setOpen(false)} className="block font-serif text-lg font-bold">
                    Invest With Diomin
                  </Link>
                </div>
                <div className="mt-2 flex flex-col gap-2">
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
                  {!user && (
                    <Link to="/sign-in" onClick={() => setOpen(false)} className="w-full">
                      <Button className="w-full justify-start gap-2">
                        <LogIn className="h-4 w-4" />
                        Sign In
                      </Button>
                    </Link>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}