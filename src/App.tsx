import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { AuthProvider } from "./hooks/useAuth";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import CaseStudies from "./pages/CaseStudies";
import Catalog from "./pages/Catalog";
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
                {/* Public routes */}
                <Route path="/" element={<><Navigation /><Index /></>} />
                <Route path="/feature" element={<><Navigation /><Feature /></>} />
                <Route path="/about" element={<><Navigation /><About /></>} />
                <Route path="/advisory" element={<><Navigation /><AdvisoryOverview /></>} />
                <Route path="/advisory/private-wealth-strategy" element={<><Navigation /><PrivateWealthStrategy /></>} />
                <Route path="/advisory/tax-optimization" element={<><Navigation /><TaxOptimization /></>} />
                <Route path="/advisory/estate-planning" element={<><Navigation /><EstatePlanningPage /></>} />
                <Route path="/services" element={<><Navigation /><Services /></>} />
                <Route path="/case-studies" element={<><Navigation /><CaseStudies /></>} />
                <Route path="/real-estate" element={<><Navigation /><RealEstate /></>} />
                <Route path="/real-estate/portfolio" element={<><Navigation /><RealEstatePortfolio /></>} />
                <Route path="/philanthropy" element={<><Navigation /><Philanthropy /></>} />
                <Route path="/catalog" element={<><Navigation /><Catalog /></>} />
                <Route path="/contact" element={<><Navigation /><Contact /></>} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/admin" element={<><Navigation /><AdminDashboard /></>} />
                
                {/* Auth routes */}
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/auth/callback" element={<AuthCallback />} />
                
                {/* Protected routes */}
                <Route path="/insights" element={<InsightsProtected />} />
                <Route path="/insights-hub" element={<><Navigation /><InsightsHub /></>} />
                
                {/* Fallback */}
                <Route path="*" element={<><Navigation /><NotFound /></>} />
              </Routes>
            </AuthProvider>
          </Router>
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;