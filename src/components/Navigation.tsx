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

      {/* Floating Contact Launcher */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
        <a
          href="https://instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-500 text-white shadow-lg hover:bg-pink-600 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.75 2a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
          </svg>
        </a>
        <a
          href="https://wa.me/yourphonenumber"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.373 0 0 5.373 0 12a11.94 11.94 0 001.64 6.04L0 24l5.96-1.56A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12 0-3.2-1.25-6.2-3.48-8.52zm-8.52 17.04a8.4 8.4 0 01-4.5-1.3l-.32-.2-3.1.81.83-3.02-.21-.33a8.4 8.4 0 1110.8 4.04zm4.7-6.1c-.26-.13-1.54-.76-1.78-.85-.24-.09-.42-.13-.6.13-.18.26-.7.85-.86 1.03-.16.18-.32.2-.58.07-.26-.13-1.1-.4-2.1-1.3-.78-.7-1.3-1.56-1.45-1.82-.15-.26-.02-.4.11-.53.11-.11.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.6-1.44-.82-1.97-.22-.52-.44-.45-.6-.46-.15-.01-.32-.01-.49-.01-.17 0-.45.06-.69.32-.24.26-.92.9-.92 2.2 0 1.3.94 2.56 1.07 2.74.13.18 1.85 2.82 4.48 3.95.63.27 1.12.43 1.5.55.63.2 1.2.17 1.65.1.5-.08 1.54-.63 1.76-1.24.22-.6.22-1.12.15-1.24-.07-.13-.26-.2-.53-.33z" />
          </svg>
        </a>
        <a
          href="https://twitter.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter)"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.865 9.865 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482A13.978 13.978 0 011.671 3.149a4.822 4.822 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.996 4.996 0 01-2.224.084 4.936 4.936 0 004.604 3.417A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.209c9.142 0 14.307-7.721 13.995-14.646a9.936 9.936 0 002.411-2.534z" />
          </svg>
        </a>
        <a
          href="mailto:contact@diomin.com"
          aria-label="Email"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-700 text-white shadow-lg hover:bg-gray-800 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 4h16v16H4z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </a>
      </div>
    </>
  );
}