import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
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
import InsightsHub from "./pages/InsightsHub";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <ThemeProvider defaultTheme="light" storageKey="wealth-theme">
          <Router>
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/feature" element={<Feature />} />
              <Route path="/about" element={<About />} />
              <Route path="/advisory" element={<AdvisoryOverview />} />
              <Route path="/advisory/private-wealth-strategy" element={<PrivateWealthStrategy />} />
              <Route path="/services" element={<Services />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/real-estate" element={<RealEstate />} />
              <Route path="/real-estate/portfolio" element={<RealEstatePortfolio />} />
              <Route path="/philanthropy" element={<Philanthropy />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/insights" element={<InsightsHub />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;