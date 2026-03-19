import { lazy, Suspense } from "react";
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
const ServiceAreas = lazy(() => import("./pages/ServiceAreas"));
const Reviews = lazy(() => import("./pages/Reviews"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const NotFound = lazy(() => import("./pages/NotFound"));
const LocalLandingPage = lazy(() => import("./pages/LocalLandingPage"));

const serviceSlugs = services.map((s) => s.slug);

const ServicePageWrapper = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug || !serviceSlugs.includes(slug)) return <NotFound />;
  return <ServicePage />;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-brand-teal border-t-transparent rounded-full animate-spin" /></div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/financing" element={<Financing />} />
            <Route path="/trane-air-conditioners" element={<TraneAirConditioners />} />
            <Route path="/trane-heat-pumps" element={<TraneHeatPumps />} />
            <Route path="/service-areas" element={<ServiceAreas />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/thank-you" element={<ThankYou />} />
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
);

export default App;
