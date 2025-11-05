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

  const topLevel = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/about/profile", label: "Profile" },
    { path: "/about/advisory", label: "Advisory" },
    { path: "/services", label: "Services", children: [
      { path: "/services/real-estate", label: "Real Estate" },
      { path: "/services/fintech", label: "Fintech" },
      { path: "/services/xcloudmultixpro", label: "XcloudMultixPro" },
      { path: "/services/fund-recovery", label: "Fund Recovery" },
      { path: "/services/credit-bridge", label: "Credit & Liquidity" },
      { path: "/services/institutional", label: "Institutional" },
    ] },
    { path: "/insights", label: "Insights", children: [
      { path: "/insights/market", label: "Market Updates" },
      { path: "/insights/analytics", label: "Analytics" },
      { path: "/insights/research", label: "Research" },
      { path: "/insights/digest", label: "Digest" },
    ] },
    { path: "/catalog", label: "Catalog" },
    { path: "/contact", label: "Contact" },
    { path: "/auth/login", label: "Sign In" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <span className="font-serif text-xl font-bold tracking-wide">Invest With Diomin</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {topLevel.map((item) => (
              <div key={item.path} className="relative group">
                <Link to={item.path}>
                  <Button
                    variant={location.pathname.startsWith(item.path) ? "default" : "ghost"}
                    className="text-sm"
                  >
                    {item.label}
                  </Button>
                </Link>
                {item.children && (
                  <div className="invisible absolute left-0 top-full z-50 mt-1 w-56 rounded-md border bg-popover p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
                    {item.children.map((child) => (
                      <Link key={child.path} to={child.path}>
                        <div className="rounded-sm px-3 py-2 text-sm text-popover-foreground hover:bg-accent">
                          {child.label}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
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
              <SheetContent side="right" className="w-72">
                <div className="mb-6 border-b pb-4">
                  <Link to="/" onClick={() => setOpen(false)} className="block font-serif text-lg font-bold">
                    Invest With Diomin
                  </Link>
                </div>
                <div className="mt-2 flex flex-col gap-2">
                  {topLevel.map((item) => (
                    <div key={item.path}>
                      <Link to={item.path} onClick={() => setOpen(false)}>
                        <Button
                          variant={location.pathname.startsWith(item.path) ? "default" : "ghost"}
                          className="w-full justify-start"
                        >
                          {item.label}
                        </Button>
                      </Link>
                      {item.children && (
                        <div className="ml-3 mt-1 flex flex-col">
                          {item.children.map((child) => (
                            <Link key={child.path} to={child.path} onClick={() => setOpen(false)}>
                              <Button variant="ghost" className="w-full justify-start text-sm">
                                {child.label}
                              </Button>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  {!user && (
                    <Link to="/auth/login" onClick={() => setOpen(false)} className="w-full">
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