import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import ServicePage from "./pages/ServicePage";
import Financing from "./pages/Financing";
import TraneAirConditioners from "./pages/TraneAirConditioners";
import TraneHeatPumps from "./pages/TraneHeatPumps";
import ServiceAreas from "./pages/ServiceAreas";
import Reviews from "./pages/Reviews";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";
import LocalLandingPage from "./pages/LocalLandingPage";
import { services } from "./data/services";
import { localPages } from "./data/localPages";

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
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/financing" element={<Financing />} />
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
