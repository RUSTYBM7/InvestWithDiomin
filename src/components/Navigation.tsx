import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Menu, X, LogIn, ChevronDown } from "lucide-react";
import { ModeToggle } from "./theme-toggle";
import { useAuth } from "@/hooks/useAuth";
import Logo from "./Logo";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

  const topLevel = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About", children: [
      { path: "/about/profile", label: "Profile" },
      { path: "/about/advisory", label: "Advisory" },
      { path: "/about/case-studies", label: "Case Studies" },
      { path: "/about/philanthropy", label: "Philanthropy" },
    ] },
    { path: "/services", label: "Services", children: [
      { path: "/services/real-estate", label: "Real Estate" },
      { path: "/services/fintech", label: "Fintech" },
      { path: "/services/xcloudmultixpro", label: "XcloudMultixPro" },
      { path: "/services/fund-recovery", label: "Fund Recovery" },
    ] },
    { path: "/insights", label: "Insights", children: [
      { path: "/insights/markets", label: "Market Updates" },
      { path: "/insights/research", label: "Research" },
      { path: "/insights/digest", label: "Digest" },
    ] },
    { path: "/catalog", label: "Catalog" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + "/");

  return (
    <>
      <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto px-6">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80" aria-label="Invest With Diomin home">
              <Logo size={24} />
              <span className="font-semibold">Invest With Diomin</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-2 lg:flex">
              {topLevel.map((item) => (
                <div key={item.path} className="relative group">
                  <Link to={item.path} aria-current={isActive(item.path) ? "page" : undefined}>
                    <Button
                      variant="ghost"
                      className={`text-sm transition-colors ${isActive(item.path) ? "border-b-2 border-primary text-foreground" : "hover:bg-accent"}`}
                    >
                      {item.label}
                      {item.children && <ChevronDown className="ml-1 h-4 w-4 opacity-70" />}
                    </Button>
                  </Link>
                  {item.children && (
                    <div className="invisible absolute left-0 top-full z-50 mt-2 w-60 rounded-md border border-primary/40 bg-popover p-2 opacity-0 shadow-xl ring-1 ring-primary/20 transition-opacity duration-200 group-hover:visible group-hover:opacity-100">
                      {item.children.map((child) => (
                        <Link key={child.path} to={child.path}>
                          <div className={`rounded-sm px-3 py-2 text-sm text-popover-foreground hover:bg-accent ${isActive(child.path) ? "border-l-2 border-primary" : ""}`}>
                            {child.label}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <ModeToggle />
            </div>

            {/* Mobile Navigation */}
            <div className="flex items-center gap-2 lg:hidden">
              <ModeToggle />
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Open menu">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80 p-0">
                  <div className="flex items-center justify-between border-b px-5 py-4">
                    <Link to="/" onClick={() => setOpen(false)} className="block font-serif text-lg font-bold">
                      Invest With Diomin
                    </Link>
                    <Button variant="ghost" size="icon" aria-label="Close menu" onClick={() => setOpen(false)}>
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                  <div className="px-2 py-2">
                    <Accordion type="single" collapsible className="w-full">
                      {topLevel.map((item) => (
                        <div key={item.path}>
                          {!item.children ? (
                            <Link to={item.path} onClick={() => setOpen(false)}>
                              <Button
                                variant={isActive(item.path) ? "default" : "ghost"}
                                className="w-full justify-start"
                              >
                                {item.label}
                              </Button>
                            </Link>
                          ) : (
                            <AccordionItem value={item.path} className="border-b-0">
                              <AccordionTrigger
                                className={`justify-between px-2 text-base ${isActive(item.path) ? "text-foreground" : ""}`}
                                aria-controls={`${item.path}-content`}
                              >
                                <span>{item.label}</span>
                              </AccordionTrigger>
                              <AccordionContent id={`${item.path}-content`} className="pl-2">
                                <div className="ml-1 mt-1 flex flex-col">
                                  {item.children.map((child) => (
                                    <Link key={child.path} to={child.path} onClick={() => setOpen(false)}>
                                      <Button
                                        variant="ghost"
                                        className={`w-full justify-start text-sm ${isActive(child.path) ? "text-foreground" : ""}`}
                                      >
                                        {child.label}
                                      </Button>
                                    </Link>
                                  ))}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          )}
                        </div>
                      ))}
                      {!user && (
                        <Link to="/auth/login" onClick={() => setOpen(false)} className="mt-2 block px-2">
                          <Button className="w-full justify-start gap-2">
                            <LogIn className="h-4 w-4" />
                            Sign In
                          </Button>
                        </Link>
                      )}
                    </Accordion>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Floating Contact handled by ContactLauncher component */}
    </>
  );
}