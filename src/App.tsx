import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { AuthProvider } from "./hooks/useAuth";
import Navigation from "./components/Navigation";
import Breadcrumbs from "./components/Breadcrumbs";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import CaseStudies from "./pages/CaseStudies";
import Catalog from "./pages/Catalog";
import CatalogDetail from "./pages/CatalogDetail";
import Insights from "./pages/Insights";
import Contact from "./pages/Contact";
import Feature from "./pages/Feature";
import RealEstate from "./pages/RealEstate";
import RealEstatePortfolio from "./pages/RealEstatePortfolio";
import Philanthropy from "./pages/Philanthropy";
import AdminDashboard from "./pages/AdminDashboard";
import AdvisoryOverview from "./pages/AdvisoryOverview";
import PrivateWealthStrategy from "./pages/PrivateWealthStrategy";
import TaxOptimization from "./pages/TaxOptimization";
import EstatePlanningPage from "./pages/EstateplanningPage";
import InsightsHub from "./pages/InsightsHub";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import AuthCallback from "./pages/AuthCallback";
import InsightsProtected from "./pages/InsightsProtected";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Fintech from "./pages/Fintech";
import XcloudMultixPro from "./pages/XcloudMultixPro";
import Recovery from "./pages/Recovery";
import AdvisoryWorkshops from "./pages/AdvisoryWorkshops";
import AdvisoryCourses from "./pages/AdvisoryCourses";
import AdvisoryPortfolioAudits from "./pages/AdvisoryPortfolioAudits";
import InsightPost from "./pages/InsightPost";
import ContactLauncher from "./components/ContactLauncher";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <ThemeProvider defaultTheme="light" storageKey="wealth-theme">
          <Router>
            <AuthProvider>
              <Routes>
                <Route path="/" element={<><Navigation /><Breadcrumbs /><Index /></>} />

                {/* About */}
                <Route path="/about" element={<><Navigation /><Breadcrumbs /><About /></>} />
                <Route path="/about/profile" element={<><Navigation /><Breadcrumbs /><Feature /></>} />
                <Route path="/about/advisory" element={<><Navigation /><Breadcrumbs /><AdvisoryOverview /></>} />
                <Route path="/about/case-studies" element={<><Navigation /><Breadcrumbs /><CaseStudies /></>} />
                <Route path="/about/philanthropy" element={<><Navigation /><Breadcrumbs /><Philanthropy /></>} />
                <Route path="/about/security" element={<><Navigation /><Breadcrumbs /><Privacy /></>} />

                {/* Services */}
                <Route path="/services" element={<><Navigation /><Breadcrumbs /><Services /></>} />
                <Route path="/services/real-estate" element={<><Navigation /><Breadcrumbs /><RealEstate /></>} />
                <Route path="/services/fintech" element={<><Navigation /><Breadcrumbs /><Fintech /></>} />
                <Route path="/services/xcloudmultixpro" element={<><Navigation /><Breadcrumbs /><XcloudMultixPro /></>} />
                <Route path="/services/fund-recovery" element={<><Navigation /><Breadcrumbs /><Recovery /></>} />
                <Route path="/services/credit-bridge" element={<><Navigation /><Breadcrumbs /><Services /></>} />
                <Route path="/services/institutional" element={<><Navigation /><Breadcrumbs /><Services /></>} />

                {/* Insights */}
                <Route path="/insights" element={<><Navigation /><Breadcrumbs /><InsightsHub /></>} />
                <Route path="/insights/markets" element={<><Navigation /><Breadcrumbs /><Insights /></>} />
                <Route path="/insights/market" element={<><Navigation /><Breadcrumbs /><Insights /></>} />
                <Route path="/insights/research" element={<><Navigation /><Breadcrumbs /><InsightsProtected /></>} />
                <Route path="/insights/digest" element={<><Navigation /><Breadcrumbs /><InsightsHub /></>} />
                <Route path="/insights/analytics" element={<><Navigation /><Breadcrumbs /><InsightsHub /></>} />
                <Route path="/insights/:slug" element={<><Navigation /><Breadcrumbs /><InsightPost /></>} />

                {/* Catalog */}
                <Route path="/catalog" element={<><Navigation /><Breadcrumbs /><Catalog /></>} />
                <Route path="/catalog/:slug" element={<><Navigation /><Breadcrumbs /><CatalogDetail /></>} />

                {/* Contact */}
                <Route path="/contact" element={<><Navigation /><Breadcrumbs /><Contact /></>} />
                <Route path="/contact/signin" element={<><Navigation /><Breadcrumbs /><SignIn /></>} />

                {/* Legacy redirects */}
                <Route path="/xcloudmultixpro" element={<><Navigation /><Breadcrumbs /><XcloudMultixPro /></>} />
                <Route path="/recovery" element={<><Navigation /><Breadcrumbs /><Recovery /></>} />

                {/* Auth routes */}
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/auth/callback" element={<AuthCallback />} />
                <Route path="/auth/login" element={<><Navigation /><Breadcrumbs /><SignIn /></>} />

                {/* Advisory nested routes not included in draft, keep original */}
                <Route path="/advisory/private-wealth-strategy" element={<><Navigation /><PrivateWealthStrategy /></>} />
                <Route path="/advisory/tax-optimization" element={<><Navigation /><TaxOptimization /></>} />
                <Route path="/advisory/estate-planning" element={<><Navigation /><EstatePlanningPage /></>} />
                <Route path="/advisory/workshops" element={<><Navigation /><AdvisoryWorkshops /></>} />
                <Route path="/advisory/courses" element={<><Navigation /><AdvisoryCourses /></>} />
                <Route path="/advisory/portfolio-audits" element={<><Navigation /><AdvisoryPortfolioAudits /></>} />

                {/* Admin and privacy/terms routes not included in draft, keep original */}
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/admin" element={<><Navigation /><AdminDashboard /></>} />

                {/* Fallback to Home */}
                <Route path="*" element={<><Navigation /><Breadcrumbs /><Index /></>} />
              </Routes>
              <ContactLauncher />
            </AuthProvider>
          </Router>
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;