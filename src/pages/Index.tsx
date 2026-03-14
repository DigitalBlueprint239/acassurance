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
import heroBg from "@/assets/hero-bg.jpg";
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
  { src: workGarageDuctless, caption: "Garage Ductless Cooling" },
];

const Index = () => {
  return (
    <Layout>
      <SEOHead
        title="AC Repair Fort Myers & Cape Coral | AC Assurance Cooling & Heating"
        description="24/7 AC repair, installation, and HVAC services in Fort Myers, Cape Coral, and Southwest Florida. Licensed (CAC1823832), insured, and financing available. Call (239) 365-3090."
      />

      {/* 1. HERO */}
      <section className="relative min-h-[520px] md:min-h-[600px] flex items-center">
        <img src={heroBg} alt="HVAC system — IMAGE PLACEHOLDER: Replace with technician or comfortable home photo" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative container py-16 md:py-24">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground leading-[1.15] mb-5">
              24/7 AC Repair &amp; Installation<br className="hidden sm:inline" /> Fort Myers &amp; Cape Coral
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
              Licensed HVAC professionals serving Southwest Florida.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="text-base bg-accent text-accent-foreground hover:bg-accent/90">
                <a href="#estimate-form">Request Estimate</a>
              </Button>
              <Button asChild size="lg" className="text-base bg-accent text-accent-foreground hover:bg-accent/90">
                <a href={PHONE_LINK}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call {PHONE}
                </a>
              </Button>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              {[
                { icon: BadgeCheck, label: "Licensed & Insured" },
                { icon: Clock, label: "24/7 Service" },
                { icon: Shield, label: "BBB Accredited" },
              ].map((badge) => (
                <div key={badge.label} className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 text-primary-foreground text-sm font-medium">
                  <badge.icon className="w-4 h-4" />
                  {badge.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TrustBadgeStrip />

      {/* 2. SOCIAL PROOF BAR */}
      <section className="section-light py-6 border-b border-border">
        <div className="container flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <span className="font-heading font-bold text-primary">Trusted by Southwest Florida Homeowners</span>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-accent text-accent" />
            ))}
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
            {services.map((service) => (
              <Link
                key={service.slug}
                to={`/${service.slug}`}
                className="group bg-card border border-border rounded p-6 hover:shadow-md hover:border-accent/40 transition-all"
              >
                <service.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-heading font-bold text-primary mb-1 group-hover:text-accent transition-colors">{service.shortTitle}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{service.description}</p>
                <span className="inline-flex items-center gap-1 text-accent text-sm font-medium mt-3">
                  Learn more <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
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
              { icon: Users, title: "Owner-Led Service", desc: "Hands-on ownership ensures quality work and personal accountability." },
            ].map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="w-14 h-14 rounded-full section-navy flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
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
            {workPhotos.map((photo) => (
              <div key={photo.caption} className="bg-card border border-border rounded overflow-hidden shadow-sm">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-full object-cover"
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

      <ReviewSection />

      {/* 6. SERVICE AREAS */}
      <section className="py-14 md:py-20 section-light">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-3">Areas We Serve</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-lg mx-auto">Proudly serving homeowners and businesses across Southwest Florida.</p>
          <div className="max-w-2xl mx-auto mb-8 bg-card border border-border rounded h-48 flex items-center justify-center text-muted-foreground text-sm">
            IMAGE PLACEHOLDER — Replace with service area map
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
          <p className="text-muted-foreground mb-6">Affordable monthly payment plans through Synchrony Financial. Don't let budget stop you from staying comfortable.</p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/financing">Learn About Financing <ArrowRight className="w-4 h-4 ml-2" /></Link>
          </Button>
        </div>
      </section>

      {/* 8. EMERGENCY CTA BAND */}
      <section className="section-navy py-14 md:py-20">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-4">AC Emergency? We're On It.</h2>
          <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">Don't sweat it. Our 24/7 emergency team is ready to restore your comfort fast.</p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href={PHONE_LINK}>
              <Phone className="w-5 h-5 mr-2" />
              Call {PHONE}
            </a>
          </Button>
        </div>
      </section>

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
    </Layout>
  );
};

export default Index;
