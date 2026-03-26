import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Index from "./pages/Index";
import { services } from "./data/services";
import { localPages } from "./data/localPages";

const Services = lazy(() => import("./pages/Services"));
const ServicePage = lazy(() => import("./pages/ServicePage"));
const Financing = lazy(() => import("./pages/Financing"));
const TraneAirConditioners = lazy(() => import("./pages/TraneAirConditioners"));
const TraneHeatPumps = lazy(() => import("./pages/TraneHeatPumps"));
const TraneProducts = lazy(() => import("./pages/TraneProducts"));
const ServiceAreas = lazy(() => import("./pages/ServiceAreas"));
const Reviews = lazy(() => import("./pages/Reviews"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const LocalLandingPage = lazy(() => import("./pages/LocalLandingPage"));

const AcRepairPage = lazy(() => import("./pages/AcRepairPage"));
const AcInstallationPage = lazy(() => import("./pages/AcInstallationPage"));
const EmergencyAcPage = lazy(() => import("./pages/EmergencyAcPage"));
const HeatingServicesPage = lazy(() => import("./pages/HeatingServicesPage"));
const MiniSplitPage = lazy(() => import("./pages/MiniSplitPage"));
const MaintenancePage = lazy(() => import("./pages/MaintenancePage"));
const DuctCleaningPage = lazy(() => import("./pages/DuctCleaningPage"));
const IndoorAirQualityPage = lazy(() => import("./pages/IndoorAirQualityPage"));
const CommercialRefrigPage = lazy(() => import("./pages/CommercialRefrigPage"));
const EmergencyNow = lazy(() => import("./pages/EmergencyNow"));
const AcRepairFortMyers = lazy(() => import("./pages/AcRepairFortMyers"));
const AcRepairCapeCoral2 = lazy(() => import("./pages/AcRepairCapeCoral2"));
const AcRepairNaples = lazy(() => import("./pages/AcRepairNaples"));
const AcRepairBonitaSprings = lazy(() => import("./pages/AcRepairBonitaSprings"));
const AcRepairEstero = lazy(() => import("./pages/AcRepairEstero"));
const AcRepairLehighAcres = lazy(() => import("./pages/AcRepairLehighAcres"));

const serviceSlugs = services.map((s) => s.slug);

const ServicePageWrapper = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug || !serviceSlugs.includes(slug)) return <NotFound />;
  return <ServicePage />;
};

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" /></div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/financing" element={<Financing />} />
              <Route path="/trane-air-conditioners" element={<TraneAirConditioners />} />
              <Route path="/trane-heat-pumps" element={<TraneHeatPumps />} />
              <Route path="/trane-products" element={<TraneProducts />} />
              <Route path="/service-areas" element={<ServiceAreas />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/thank-you" element={<ThankYou />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/ac-repair-cape-coral" element={<AcRepairPage />} />
              <Route path="/ac-installation-replacement" element={<AcInstallationPage />} />
              <Route path="/emergency-ac-repair" element={<EmergencyAcPage />} />
              <Route path="/heating-services" element={<HeatingServicesPage />} />
              <Route path="/ductless-mini-split" element={<MiniSplitPage />} />
              <Route path="/ac-maintenance-tune-up" element={<MaintenancePage />} />
              <Route path="/duct-cleaning" element={<DuctCleaningPage />} />
              <Route path="/indoor-air-quality" element={<IndoorAirQualityPage />} />
              <Route path="/commercial-refrigeration" element={<CommercialRefrigPage />} />
              <Route path="/emergency-ac-repair-now" element={<EmergencyNow />} />
              <Route path="/ac-repair-fort-myers" element={<AcRepairFortMyers />} />
              <Route path="/ac-repair-cape-coral-fl" element={<AcRepairCapeCoral2 />} />
              <Route path="/ac-repair-naples" element={<AcRepairNaples />} />
              <Route path="/ac-repair-bonita-springs" element={<AcRepairBonitaSprings />} />
              <Route path="/ac-repair-estero" element={<AcRepairEstero />} />
              <Route path="/ac-repair-lehigh-acres" element={<AcRepairLehighAcres />} />
              {localPages.map((p) => (
                <Route key={p.slug} path={`/${p.slug}`} element={<LocalLandingPage />} />
              ))}
              <Route path="/:slug" element={<ServicePageWrapper />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
