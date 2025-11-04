import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ContactSimple from "./pages/ContactSimple";
import Process from "./pages/Process";
import InvestmentCasting from "./pages/InvestmentCasting";
import SGCICasting from "./pages/SGCICasting";
import Forgings from "./pages/Forgings";
import PrecisionMachined from "./pages/PrecisionMachined";
import AluminumDieCasting from "./pages/AluminumDieCasting";
import HardwareComponents from "./pages/HardwareComponents";
import ProductGallery from "./pages/ProductGallery";
import Certificates from "./pages/Certificates";
import MetalFlowSimulation from "./pages/MetalFlowSimulation";
import ThreeDScanning from "./pages/ThreeDScanning";
import CMM from "./pages/CMM";
import PFMEA from "./pages/PFMEA";
import InspectionReports from "./pages/InspectionReports";
import NDTTesting from "./pages/NDTTesting";
import DTTesting from "./pages/DTTesting";
import MicrostructureAnalysis from "./pages/MicrostructureAnalysis";
import SpectroAnalysis from "./pages/SpectroAnalysis";
import CorrosionTesting from "./pages/CorrosionTesting";
import SaltSprayTest from "./pages/SaltSprayTest";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import EmailPolicy from "./pages/EmailPolicy";
import WebsiteDisclaimer from "./pages/WebsiteDisclaimer";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact-simple" element={<ContactSimple />} />
          <Route path="/process" element={<Process />} />
          <Route path="/investment-casting" element={<InvestmentCasting />} />
          <Route path="/sg-ci-casting" element={<SGCICasting />} />
          <Route path="/forgings" element={<Forgings />} />
          <Route path="/precision-machined" element={<PrecisionMachined />} />
          <Route path="/aluminum-die-casting" element={<AluminumDieCasting />} />
          <Route path="/hardware-components" element={<HardwareComponents />} />
          <Route path="/product-gallery" element={<ProductGallery />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/metal-flow-simulation" element={<MetalFlowSimulation />} />
          <Route path="/3d-scanning" element={<ThreeDScanning />} />
          <Route path="/cmm" element={<CMM />} />
          <Route path="/pfmea" element={<PFMEA />} />
          <Route path="/inspection-reports" element={<InspectionReports />} />
          <Route path="/ndt-testing" element={<NDTTesting />} />
          <Route path="/dt-testing" element={<DTTesting />} />
          <Route path="/microstructure-analysis" element={<MicrostructureAnalysis />} />
          <Route path="/spectro-analysis" element={<SpectroAnalysis />} />
          <Route path="/corrosion-testing" element={<CorrosionTesting />} />
          <Route path="/salt-spray-test" element={<SaltSprayTest />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/email-policy" element={<EmailPolicy />} />
          <Route path="/website-disclaimer" element={<WebsiteDisclaimer />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
