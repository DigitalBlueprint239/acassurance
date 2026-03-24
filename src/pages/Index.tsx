import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Shield, Clock, DollarSign, Star, MapPin, ChevronRight, ArrowRight, Users, BadgeCheck, Zap, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import EstimateForm from "@/components/EstimateForm";
import { services, serviceAreas, PHONE, PHONE_LINK } from "@/data/services";
import TrustBadgeStrip from "@/components/TrustBadgeStrip";
import TrustBar from "@/components/TrustBar";
import FeaturedReviews from "@/components/FeaturedReviews";
import SWFLServiceMap from "@/components/SWFLServiceMap";
import EmergencyCallout from "@/components/EmergencyCallout";
import ScrollCallReminder from "@/components/ScrollCallReminder";
import WhyDifferent from "@/components/WhyDifferent";
import SWFLClimateSection from "@/components/SWFLClimateSection";
import HeroReviewCards from "@/components/HeroReviewCards";
import heroTeam from "@/assets/hero-team-edited.jpg";
import traneLogo from "@/assets/trane-logo.png";
import bbbLogo from "@/assets/bbb-accredited.png";
import workCondenser from "@/assets/work/condenser-coil.png";
import workMiniSplitOutdoor from "@/assets/work/mini-split-outdoor.png";
import workDuctless from "@/assets/work/ductless-system.png";
import workGarageMiniSplit from "@/assets/work/garage-mini-split.png";
import workAirHandler from "@/assets/work/air-handler.png";
import workGarageDuctless from "@/assets/work/garage-ductless.png";

const workPhotos = [
  { src: workCondenser, alt: "New Trane condenser install in Cape Coral, FL", caption: "New Trane Condenser Install — Cape Coral" },
  { src: workMiniSplitOutdoor, alt: "Outdoor mini-split unit placement in Fort Myers, FL", caption: "Outdoor Mini-Split Unit — Fort Myers" },
  { src: workDuctless, alt: "Ductless AC system installation in Florida room in Naples, FL", caption: "Ductless System in Florida Room — Naples" },
  { src: workGarageMiniSplit, alt: "Ductless mini-split cooling system installed in garage in Cape Coral, FL", caption: "Garage Mini-Split Install — Cape Coral" },
  { src: workAirHandler, alt: "Attic air handler replacement in Bonita Springs, FL", caption: "Attic Air Handler Replacement — Bonita Springs" },
  { src: workGarageDuctless, alt: "Garage ductless cooling solution in Fort Myers, FL", caption: "Garage Cooling Solution — Fort Myers" },
];

const Index = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem("heroAnimated")) {
      setShouldAnimate(true);
      sessionStorage.setItem("heroAnimated", "1");
    }
  }, []);

  const now = new Date();
  const hour = now.getHours();
  const day = now.getDay();

  const urgencyText = day === 0
    ? "Priority Monday Morning Scheduling Available"
    : day === 6
      ? "Weekend Emergency Line Open — Call Now"
      : hour < 14
        ? "Same-Day Service Available — Call before 2:00 PM"
        : "Priority Next-Day Scheduling Available";

  return (
    <Layout>
      <SEOHead
        title="AC Repair Naples, Fort Myers & Cape Coral | AC Assurance Cooling & Heating"
        description="24/7 AC repair, installation, and HVAC services in Naples, Fort Myers, Cape Coral, and Southwest Florida. Licensed (CAC1823832), insured, and financing available. Call (239) 365-3090."
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "HVACBusiness",
            "name": "AC Assurance Cooling & Heating",
            "telephone": "+1-239-365-3090",
            "email": "service@acassurancefl.com",
            "url": "https://www.acassurancefl.com",
            "priceRange": "$$",
            "openingHours": "Mo-Su 00:00-23:59",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "areaServed": ["Naples", "Fort Myers", "Cape Coral", "Bonita Springs", "Estero", "Lehigh Acres", "North Fort Myers"],
            "knowsAbout": ["AC Repair", "HVAC Installation", "Duct Cleaning", "Emergency AC Service", "Trane Systems"]
          }
        ]}
      />

      {/* 1. HERO — Elite Editorial */}
      <header aria-label="Homepage Hero" className="bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-slate-50 to-white border-b border-slate-100">
        <div className={`container text-center py-14 md:py-20 px-6 md:px-4 ${shouldAnimate ? "animate-slide-up" : ""}`}>
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/60 font-medium mb-4">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400 inline align-text-bottom mr-1" />
            TOP-RATED LOCAL HVAC SPECIALISTS | LIC# CAC1823832
          </p>
          <h1
            className="font-heading font-extrabold text-foreground tracking-tighter leading-[1.1] mb-4 max-w-4xl mx-auto"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
          >
            Expert AC Repair & Installation{' '}
            <span className="text-primary">
              From Naples to Cape Coral
            </span>
          </h1>
          <p className="text-lg text-primary/70 leading-relaxed mb-4 max-w-2xl mx-auto">
            SWFL's highest-rated response team. Your AC restored today, or the diagnostic is on us. Serving all of Southwest Florida with 5-star precision.
          </p>

          {/* Free Diagnostic Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-300 rounded-full px-5 py-2.5 text-sm font-bold text-amber-900 mb-5 shadow-sm">
            <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0" />
            Your AC restored today, or the diagnostic is on us.
          </div>

          <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-2 text-sm text-primary font-medium mb-5 ml-0 block">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400 inline" />
            Owner-Operated · 5-Star Rated · Licensed & Insured
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
            <Button asChild size="lg" className="shimmer-btn w-full sm:w-auto text-base bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-lg">
              <a href="#estimate-form" aria-label="Get a free quote">Get My Free Quote</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto text-base border-foreground/20 text-foreground/80 hover:bg-foreground/5 hover:border-foreground/40">
              <a href={PHONE_LINK} aria-label="Call AC Assurance">
                <Phone className="w-5 h-5 mr-2" />
                Call Now {PHONE}
              </a>
            </Button>
          </div>
          {/* Urgency Pill */}
          <div className="inline-flex items-center gap-2 bg-gray-100 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 font-medium">
            <span className="animate-pulse-soft">🔥</span>
            {urgencyText}
          </div>

          {/* Hero Review Cards */}
          <HeroReviewCards />
        </div>

        {/* Full-Width Team Photo Card */}
        <div className={`relative mx-4 md:mx-8 lg:mx-16 -mt-8 md:-mt-12 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(8,112,184,0.1)] will-change-transform ${shouldAnimate ? "animate-scale-in" : ""}`}>
          <img
            src={heroTeam}
            alt="AC Assurance team providing expert HVAC services from Naples to Cape Coral and throughout Southwest Florida"
            className="w-full aspect-[4/3] md:aspect-[21/9] object-cover object-center"
            width={1600}
            height={686}
            loading="eager"
            fetchPriority="high"
            decoding="async" />

          {/* Owner Badge */}
          <div className="absolute z-20 bottom-6 right-4 md:bottom-16 md:right-12 bg-primary text-white rounded-full px-4 py-2 text-xs font-bold shadow-lg">
            Owner-Operated & On-Site
          </div>
          {/* Trust Ribbon */}
          <div className="absolute z-10 bottom-0 left-0 right-0 bg-white/70 backdrop-blur-xl border-t border-white/40 py-3 px-4">
            <div className="grid grid-cols-2 md:flex md:justify-center gap-3 md:gap-6">
              {[
                { icon: BadgeCheck, label: "Licensed & Insured" },
                { icon: Star, label: "5-Star Google Rating" },
                { icon: Shield, label: "BBB Accredited", isBBB: true },
                { icon: Clock, label: "24/7 Emergency Service" },
              ].map((badge) => (
                <div key={badge.label} className="flex items-center gap-2 text-slate-700 text-xs font-medium tracking-wide justify-center">
                  {badge.isBBB ? (
                    <img
                      src={bbbLogo}
                      alt="BBB Accredited Business"
                      className="h-8 w-auto"
                      width={24}
                      height={24}
                    />
                  ) : (
                    <badge.icon className="w-4 h-4 text-primary shrink-0" />
                  )}
                  {badge.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* SOCIAL PROOF STATS BAR */}
      <section className="section-navy py-8">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { value: "500+", label: "SWFL Homes Served" },
              { value: "4.9★", label: "Google Rating" },
              { value: "< 2 hrs", label: "Average Response Time" },
              { value: "100%", label: "Owner-Supervised Jobs" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-heading font-extrabold text-white">{stat.value}</div>
                <div className="text-xs md:text-sm text-primary-foreground/70 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustBar />
      <TrustBadgeStrip />

      {/* TRANE INDEPENDENT DEALER */}
      <section className="py-10 md:py-14 bg-background">
        <div className="container max-w-4xl">
          <div className="bg-white border border-border rounded-lg shadow-sm overflow-hidden flex flex-col md:flex-row" style={{ borderLeft: '4px solid #EF3C13' }}>
            <div className="flex items-center justify-center px-8 py-6 md:py-0 md:border-r border-border bg-muted/30">
              <img src={traneLogo} alt="Trane - It's Hard To Stop A Trane®" className="w-[120px] h-auto" />
            </div>
            <div className="px-6 py-6 md:px-8 flex-1">
              <h2 className="font-heading font-bold text-lg md:text-xl mb-2 text-primary">Proud Independent Trane Dealer</h2>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                AC Assurance is an authorized independent dealer of Trane heating and cooling systems — engineered for durability and performance in Southwest Florida's demanding climate.
              </p>
              <p className="text-sm italic text-muted-foreground mb-4">It's Hard To Stop A Trane®</p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="sm" style={{ backgroundColor: '#EF3C13' }} className="text-white hover:opacity-90">
                  <Link to="/trane-products">View Trane Products <ArrowRight className="w-4 h-4 ml-1" /></Link>
                </Button>
                <Button asChild size="sm" variant="outline">
                  <Link to="/trane-air-conditioners">Trane Air Conditioners</Link>
                </Button>
                <Button asChild size="sm" variant="outline">
                  <Link to="/trane-heat-pumps">Trane Heat Pumps</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES GRID */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">Our HVAC Services</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">From routine maintenance to emergency repairs, AC Assurance provides comprehensive HVAC services for Southwest Florida homeowners and businesses.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <Link
                key={service.slug}
                to={`/${service.slug}`}
                className="group frost-card p-6 hover:shadow-md hover:shadow-primary/10 hover:border-primary/30 transition-all"
              >
                <service.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-heading font-bold text-primary mb-1 group-hover:text-primary/80 transition-colors">{service.shortTitle}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{service.description}</p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-3">
                  Learn more <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US — Navy Trust Break */}
      <section className="py-14 md:py-20 section-navy">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-10 text-primary-foreground">Why Choose AC Assurance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "24/7 Emergency Response", desc: "AC emergencies don't wait — and neither do we. Call anytime, day or night." },
              { icon: DollarSign, title: "Transparent Pricing", desc: "Upfront quotes with no hidden fees. You know the cost before we start." },
              { icon: Shield, title: "Licensed & Insured", desc: "Fully licensed (CAC1823832) and insured for your peace of mind." },
              { icon: Users, title: "Owner-Led Service", desc: "Hands-on ownership ensures quality work and personal accountability." },
            ].map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2 text-primary-foreground">{item.title}</h3>
                <p className="text-sm text-primary-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyDifferent />
      <SWFLClimateSection />

      {/* 5. PROOF OF WORK */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">Recent HVAC Work</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Real installations and repairs completed by our team across Southwest Florida.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {workPhotos.map((photo) => (
              <div key={photo.caption} className="bg-card border border-border rounded overflow-hidden shadow-sm">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                    width={600}
                    height={450}
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium text-foreground">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedReviews />

      {/* 6. SERVICE AREAS */}
      <section className="py-14 md:py-20 section-light">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-3">Proudly Serving Southwest Florida</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-lg mx-auto">We provide fast, reliable HVAC services across Lee County and surrounding areas.</p>

          <div className="max-w-2xl mx-auto mb-10">
            <SWFLServiceMap />
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {serviceAreas.map((area) => {
              const cls = `inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border ${
                area.primary
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-foreground border-border"
              }`;
              return area.slug ? (
                <Link key={area.name} to={area.slug} className={`${cls} hover:opacity-90 transition-opacity`}>
                  <MapPin className="w-3.5 h-3.5" /> {area.name}
                </Link>
              ) : (
                <span key={area.name} className={cls}>
                  <MapPin className="w-3.5 h-3.5" /> {area.name}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. FINANCING */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">Flexible HVAC Financing Available</h2>
          <p className="text-muted-foreground mb-6">Convenient monthly payment plans through Synchrony Financial. Special financing available. Subject to credit approval. Call for details.</p>
          <Button asChild size="lg" className="shimmer-btn bg-white text-primary hover:bg-white/90">
            <Link to="/financing">Learn About Financing <ArrowRight className="w-4 h-4 ml-2" /></Link>
          </Button>
        </div>
      </section>

      <EmergencyCallout />

      {/* 9. SERVICE REQUEST FORM */}
      <section id="estimate-form" className="py-14 md:py-20 bg-background scroll-mt-20">
        <div className="container">
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">Tell Us What's Going On</h2>
              <p className="text-muted-foreground">Fill out the form below and we'll get back to you promptly.</p>
            </div>
            <div className="bg-card border border-border rounded p-6 md:p-8">
              <EstimateForm showMessage showHearAboutUs leadSource="homepage" />
            </div>
          </div>
        </div>
      </section>
      <ScrollCallReminder />
    </Layout>
  );
};

export default Index;
