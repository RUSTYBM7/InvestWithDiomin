import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { GlassButton } from "@/components/ui/glass-button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Menu, X, ChevronDown, Calendar } from "lucide-react";
import { ModeToggle } from "./theme-toggle";
import { useAuth } from "@/hooks/useAuth";
import Logo from "./Logo";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <nav 
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled 
            ? "glass-surface shadow-[var(--glass-shadow-md)]" 
            : "bg-background/60 backdrop-blur-lg border-b border-transparent"
        )}
      >
        <div className="container mx-auto px-6">
          <div className={cn(
            "flex items-center justify-between transition-all duration-300",
            scrolled ? "h-14" : "h-16"
          )}>
            <Link 
              to="/" 
              className="flex items-center gap-2.5 transition-all duration-200 hover:opacity-80 group" 
              aria-label="Invest With Diomin home"
            >
              <Logo size={scrolled ? 22 : 26} />
              <span className={cn(
                "font-semibold tracking-tight transition-all duration-300",
                scrolled ? "text-base" : "text-lg"
              )}>
                InvestWithDiomin
              </span>
            </Link>

            <div className="hidden items-center gap-1 lg:flex">
              {topLevel.map((item) => (
                <div key={item.path} className="relative group">
                  <Link to={item.path} aria-current={isActive(item.path) ? "page" : undefined}>
                    <button
                      className={cn(
                        "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                        isActive(item.path) 
                          ? "text-primary bg-primary/10" 
                          : "text-muted-foreground hover:text-foreground hover:bg-[var(--glass-bg)]"
                      )}
                    >
                      {item.label}
                      {item.children && (
                        <ChevronDown className="h-3.5 w-3.5 opacity-60 transition-transform duration-200 group-hover:rotate-180" />
                      )}
                    </button>
                  </Link>
                  {item.children && (
                    <div className="invisible absolute left-0 top-full z-50 mt-1 w-56 origin-top-left scale-95 opacity-0 transition-all duration-200 group-hover:visible group-hover:scale-100 group-hover:opacity-100">
                      <div className="glass-surface rounded-xl p-2 shadow-[var(--glass-shadow-lg)]">
                        {item.children.map((child) => (
                          <Link key={child.path} to={child.path}>
                            <div className={cn(
                              "rounded-lg px-3 py-2.5 text-sm transition-all duration-150",
                              isActive(child.path) 
                                ? "bg-primary/10 text-primary font-medium" 
                                : "text-muted-foreground hover:text-foreground hover:bg-[var(--glass-bg-hover)]"
                            )}>
                              {child.label}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
              <div className="ml-2 flex items-center gap-2">
                <ModeToggle />
                <GlassButton size="sm" asChild>
                  <Link to="/contact" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Book Consultation
                  </Link>
                </GlassButton>
              </div>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <ModeToggle />
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <GlassButton variant="ghost" size="icon" aria-label="Open menu">
                    <Menu className="h-5 w-5" />
                  </GlassButton>
                </SheetTrigger>
                <SheetContent 
                  side="right" 
                  className="w-80 p-0 glass-surface border-l border-[var(--glass-border)]"
                >
                  <div className="flex items-center justify-between border-b border-[var(--glass-border)] px-5 py-4">
                    <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2">
                      <Logo size={24} />
                      <span className="text-lg font-semibold">InvestWithDiomin</span>
                    </Link>
                    <GlassButton variant="ghost" size="icon" aria-label="Close menu" onClick={() => setOpen(false)}>
                      <X className="h-5 w-5" />
                    </GlassButton>
                  </div>
                  <div className="px-3 py-4 space-y-1">
                    <Accordion type="single" collapsible className="w-full">
                      {topLevel.map((item) => (
                        <div key={item.path}>
                          {!item.children ? (
                            <Link to={item.path} onClick={() => setOpen(false)}>
                              <div className={cn(
                                "flex items-center px-3 py-3 rounded-lg text-sm font-medium transition-all duration-150",
                                isActive(item.path) 
                                  ? "bg-primary/10 text-primary" 
                                  : "text-muted-foreground hover:text-foreground hover:bg-[var(--glass-bg)]"
                              )}>
                                {item.label}
                              </div>
                            </Link>
                          ) : (
                            <AccordionItem value={item.path} className="border-b-0">
                              <AccordionTrigger
                                className={cn(
                                  "px-3 py-3 rounded-lg text-sm font-medium hover:bg-[var(--glass-bg)] hover:no-underline [&[data-state=open]]:bg-[var(--glass-bg)]",
                                  isActive(item.path) ? "text-primary" : "text-muted-foreground"
                                )}
                                aria-controls={`${item.path}-content`}
                              >
                                <span>{item.label}</span>
                              </AccordionTrigger>
                              <AccordionContent id={`${item.path}-content`} className="pb-0 pt-1">
                                <div className="ml-3 space-y-1 border-l border-[var(--glass-border)] pl-3">
                                  {item.children.map((child) => (
                                    <Link key={child.path} to={child.path} onClick={() => setOpen(false)}>
                                      <div className={cn(
                                        "rounded-lg px-3 py-2.5 text-sm transition-all duration-150",
                                        isActive(child.path) 
                                          ? "bg-primary/10 text-primary font-medium" 
                                          : "text-muted-foreground hover:text-foreground hover:bg-[var(--glass-bg)]"
                                      )}>
                                        {child.label}
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          )}
                        </div>
                      ))}
                    </Accordion>
                    
                    <div className="pt-4 px-3">
                      <GlassButton fullWidth asChild>
                        <Link to="/contact" onClick={() => setOpen(false)} className="flex items-center justify-center gap-2">
                          <Calendar className="h-4 w-4" />
                          Book Consultation
                        </Link>
                      </GlassButton>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
