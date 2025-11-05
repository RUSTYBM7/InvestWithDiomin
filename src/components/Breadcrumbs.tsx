import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link, useLocation } from "react-router-dom";

const LABELS: Record<string, string> = {
  "about": "About",
  "profile": "Profile",
  "advisory": "Advisory",
  "case-studies": "Case Studies",
  "philanthropy": "Philanthropy",
  "services": "Services",
  "real-estate": "Real Estate",
  "fintech": "Fintech",
  "xcloudmultixpro": "XcloudMultixPro",
  "fund-recovery": "Fund Recovery",
  "credit-bridge": "Credit & Liquidity",
  "institutional": "Institutional",
  "insights": "Insights",
  "market": "Market Updates",
  "analytics": "Analytics",
  "research": "Research",
  "digest": "Digest",
  "catalog": "Catalog",
  "contact": "Contact",
  "signin": "Sign In",
  "login": "Sign In",
  "security": "Security",
};

export default function Breadcrumbs() {
  const { pathname } = useLocation();
  if (pathname === "/") return null;
  const parts = pathname.split("/").filter(Boolean);
  const paths = parts.map((_, i) => "/" + parts.slice(0, i + 1).join("/"));

  return (
    <div className="border-b bg-background/70 backdrop-blur">
      <div className="container mx-auto px-6">
        <div className="py-2">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              {parts.map((seg, idx) => {
                const href = paths[idx];
                const label = LABELS[seg] || seg.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
                const isLast = idx === parts.length - 1;
                return (
                  <span key={href} className="inline-flex items-center">
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      {isLast ? (
                        <BreadcrumbPage>{label}</BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink asChild>
                          <Link to={href}>{label}</Link>
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                  </span>
                );
              })}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
}