import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Shield, Clock, DollarSign, Star, MapPin, ChevronRight, ArrowRight, Users, BadgeCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import EstimateForm from "@/components/EstimateForm";
import { services, serviceAreas, PHONE, PHONE_LINK } from "@/data/services";
import TrustBadgeStrip from "@/components/TrustBadgeStrip";
import ReviewSection from "@/components/ReviewSection";
import EmergencyCallout from "@/components/EmergencyCallout";
import ScrollCallReminder from "@/components/ScrollCallReminder";
import heroTeam from "@/assets/hero-team-edited.jpg";
import workCondenser from "@/assets/work/condenser-coil.png";
import workMiniSplitOutdoor from "@/assets/work/mini-split-outdoor.png";
import workDuctless from "@/assets/work/ductless-system.png";
import workGarageMiniSplit from "@/assets/work/garage-mini-split.png";
import workAirHandler from "@/assets/work/air-handler.png";
import workGarageDuctless from "@/assets/work/garage-ductless.png";

const workPhotos = [
{ src: workCondenser, caption: "Clean Condenser Coil Detail" },
{ src: workMiniSplitOutdoor, caption: "Mini-Split Outdoor Unit Install" },
{ src: workDuctless, caption: "Ductless System Installation" },
{ src: workGarageMiniSplit, caption: "Garage Mini-Split Installation" },
{ src: workAirHandler, caption: "New Air Handler Installation" },
{ src: workGarageDuctless, caption: "Garage Ductless Cooling" }];


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
        title="AC Repair Fort Myers & Cape Coral | AC Assurance Cooling & Heating"
        description="24/7 AC repair, installation, and HVAC services in Fort Myers, Cape Coral, and Southwest Florida. Licensed (CAC1823832), insured, and financing available. Call (239) 365-3090." />
      

      {/* 1. HERO — Elite Editorial */}
      <header aria-label="Homepage Hero" className="bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-slate-50 to-white border-b border-slate-100">
        <div className={`container text-center py-14 md:py-20 px-6 md:px-4 ${shouldAnimate ? "animate-slide-up" : ""}`}>
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/60 font-medium mb-4">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500 inline align-text-bottom mr-1" />
            TOP-RATED LOCAL HVAC SPECIALISTS | LIC# CAC1823832
          </p>
          <h1
            className="font-heading font-extrabold text-foreground tracking-tighter leading-[1.1] mb-4 max-w-4xl mx-auto"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
          >
            Expert AC Repair & Installation in{' '}
            <span className="text-brand-teal" style={{ textShadow: '0 0 20px rgba(20, 184, 166, 0.1)' }}>
              Fort Myers & Cape Coral
            </span>
          </h1>
          <p className="text-lg text-foreground/70 leading-relaxed mb-6 max-w-2xl mx-auto">
            SWFL's highest-rated response team. Your AC restored today, or the diagnostic is on us. Serving Lee County with 5-star precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
            <Button asChild size="lg" className="shimmer-btn w-full sm:w-auto text-base bg-brand-teal text-white hover:bg-brand-teal/90 font-semibold shadow-lg">
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
          <div className="inline-flex items-center gap-2 bg-amber-50/80 backdrop-blur-sm border border-amber-200/60 rounded-full px-4 py-2 text-sm text-amber-800 font-medium">
            <span className="animate-pulse-soft">🔥</span>
            {urgencyText}
          </div>
        </div>

        {/* Full-Width Team Photo Card */}
        <div className={`relative mx-4 md:mx-8 lg:mx-16 -mt-8 md:-mt-12 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(8,112,184,0.1)] will-change-transform ${shouldAnimate ? "animate-scale-in" : ""}`}>
          <img
            src={heroTeam}
            alt="AC Assurance professional HVAC team providing expert AC repair and installation in Fort Myers and Cape Coral"
            className="w-full aspect-[4/3] md:aspect-[21/9] object-cover object-center"
            width={1600}
            height={686}
            loading="eager"
            fetchPriority="high"
            decoding="async" />
          
          {/* Owner Badge */}
          <div className="absolute z-20 bottom-6 right-4 md:bottom-16 md:right-12 bg-brand-teal text-white rounded-full px-4 py-2 text-xs font-bold shadow-lg">
            Owner-Operated & On-Site
          </div>
          {/* Trust Ribbon */}
          <div className="absolute z-10 bottom-0 left-0 right-0 bg-white/70 backdrop-blur-xl border-t border-white/40 py-3 px-4">
            <div className="grid grid-cols-2 md:flex md:justify-center gap-3 md:gap-6">
              {[
              { icon: BadgeCheck, label: "Licensed & Insured" },
              { icon: Star, label: "5-Star Google Rating" },
              { icon: Shield, label: "BBB Accredited" },
              { icon: Clock, label: "24/7 Emergency Service" }].
              map((badge) =>
              <div key={badge.label} className="flex items-center gap-2 text-slate-700 text-xs font-medium tracking-wide justify-center">
                  <badge.icon className="w-4 h-4 text-brand-teal shrink-0" />
                  {badge.label}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <TrustBadgeStrip />

      {/* 2. SOCIAL PROOF BAR */}
      <section className="section-light py-6 border-b border-border">
        <div className="container flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <span className="font-heading font-bold text-primary">Trusted by Southwest Florida Homeowners</span>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) =>
            <Star key={i} className="w-5 h-5 fill-accent text-accent" />
            )}
          </div>
          <span className="font-heading font-bold text-primary">5-Star Rated</span>
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
            {services.map((service) =>
            <Link
              key={service.slug}
              to={`/${service.slug}`}
              className="group bg-card border border-border rounded p-6 hover:shadow-md hover:border-accent/40 transition-all">
              
                <service.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-heading font-bold text-primary mb-1 group-hover:text-accent transition-colors">{service.shortTitle}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{service.description}</p>
                <span className="inline-flex items-center gap-1 text-accent text-sm font-medium mt-3">
                  Learn more <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-14 md:py-20 section-light">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-10">Why Choose AC Assurance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
            { icon: Zap, title: "24/7 Emergency Response", desc: "AC emergencies don't wait — and neither do we. Call anytime, day or night." },
            { icon: DollarSign, title: "Transparent Pricing", desc: "Upfront quotes with no hidden fees. You know the cost before we start." },
            { icon: Shield, title: "Licensed & Insured", desc: "Fully licensed (CAC1823832) and insured for your peace of mind." },
            { icon: Users, title: "Owner-Led Service", desc: "Hands-on ownership ensures quality work and personal accountability." }].
            map((item) =>
            <div key={item.title} className="text-center p-6">
                <div className="w-14 h-14 rounded-full section-navy flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* TRANE SECTION */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container text-center max-w-3xl">
          <span className="inline-flex items-center gap-2 bg-muted rounded-full px-4 py-2 text-sm font-medium text-foreground mb-4">
            <Shield className="w-4 h-4 text-primary" /> Independent Trane Dealer
          </span>
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">Trusted Trane Air Conditioning Systems</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            AC Assurance installs and services Trane air conditioning systems — built for durability and engineered to handle Southwest Florida's heat, humidity, and coastal conditions.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/trane-air-conditioners">Trane Air Conditioners <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/trane-heat-pumps">Trane Heat Pumps <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 5. PROOF OF WORK */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">Recent HVAC Work</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Real installations and repairs completed by our team across Southwest Florida.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {workPhotos.map((photo) =>
            <div key={photo.caption} className="bg-card border border-border rounded overflow-hidden shadow-sm">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover"
                  loading="lazy" />
                
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium text-foreground">{photo.caption}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <ReviewSection />

      {/* 6. SERVICE AREAS */}
      <section className="py-14 md:py-20 section-light">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-3">Proudly Serving Southwest Florida</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-lg mx-auto">We provide fast, reliable HVAC services across Lee County and surrounding areas.</p>
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {serviceAreas.map((area) => {
              const cls = `inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border ${
              area.primary ?
              "bg-primary text-primary-foreground border-primary" :
              "bg-card text-foreground border-border"}`;

              return area.slug ?
              <Link key={area.name} to={area.slug} className={`${cls} hover:opacity-90 transition-opacity`}>
                  <MapPin className="w-3.5 h-3.5" /> {area.name}
                </Link> :

              <span key={area.name} className={cls}>
                  <MapPin className="w-3.5 h-3.5" /> {area.name}
                </span>;

            })}
          </div>
        </div>
      </section>

      {/* 7. FINANCING */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">Flexible HVAC Financing Available</h2>
          <p className="text-muted-foreground mb-6">Affordable monthly payment plans through Synchrony Financial. Don't let budget stop you from staying comfortable.</p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/financing">Learn About Financing <ArrowRight className="w-4 h-4 ml-2" /></Link>
          </Button>
        </div>
      </section>

      <EmergencyCallout />

      {/* 9. SERVICE REQUEST FORM */}
      <section id="estimate-form" className="py-14 md:py-20 bg-background">
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
    </Layout>);

};

export default Index;