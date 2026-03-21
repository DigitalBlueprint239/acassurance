import { Link } from "react-router-dom";
import { Phone, ArrowRight, Shield, Zap, Droplets, Award, Thermometer, Wind, Fan } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { PHONE, PHONE_LINK } from "@/data/services";
import traneLogo from "@/assets/trane-logo.png";

const whyTrane = [
  { icon: Thermometer, title: "Built for Florida's Climate", desc: "Trane systems are engineered to perform in extreme heat, humidity, and coastal salt air — exactly what Southwest Florida demands." },
  { icon: Zap, title: "Industry-Leading Efficiency", desc: "High SEER2 ratings mean lower energy bills. Trane units maximize cooling while minimizing electricity usage." },
  { icon: Shield, title: "Legendary Reliability", desc: "It's Hard To Stop A Trane® — backed by rigorous testing that simulates years of real-world use before a single unit ships." },
  { icon: Award, title: "Comprehensive Warranty", desc: "Trane stands behind their products with some of the strongest warranty coverage in the HVAC industry." },
];

const products = [
  { icon: Fan, title: "Trane Central Air Conditioners", desc: "High-efficiency cooling systems built for Florida's relentless heat. SEER2 ratings up to 22 for maximum energy savings.", link: "/trane-air-conditioners" },
  { icon: Droplets, title: "Trane Heat Pumps", desc: "Year-round comfort in one system — efficient cooling in summer and reliable heating during Florida's mild winters.", link: "/trane-heat-pumps" },
  { icon: Wind, title: "Trane Air Handlers", desc: "The indoor component that moves conditioned air throughout your home. Variable-speed options for optimal comfort and humidity control.", link: "/contact#estimate-form" },
];

const TraneProducts = () => (
  <Layout>
    <SEOHead
      title="Trane Heating & Cooling Systems | Independent Trane Dealer | AC Assurance"
      description="AC Assurance is an Independent Trane Dealer serving Naples, Fort Myers & Cape Coral. Explore Trane AC systems, heat pumps, and air handlers. It's Hard To Stop A Trane®."
    />

    {/* Hero */}
    <section className="section-navy py-14 md:py-20">
      <div className="container text-center max-w-3xl">
        <div className="flex items-center justify-center gap-3 mb-4">
          <svg width="36" height="36" viewBox="0 0 28 28"><circle cx="14" cy="14" r="14" fill="#EF3C13"/><rect x="6" y="8" width="16" height="2" rx="1" fill="white"/><rect x="6" y="13" width="16" height="2" rx="1" fill="white"/><rect x="6" y="18" width="16" height="2" rx="1" fill="white"/></svg>
          <span className="font-heading font-black text-3xl tracking-widest" style={{ color: '#EF3C13' }}>TRANE</span>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-primary-foreground mb-4" style={{ backgroundColor: 'rgba(239,60,19,0.2)' }}>
          <Shield className="w-4 h-4" /> Independent Trane Dealer
        </span>
        <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
          Trane Heating & Cooling Systems
        </h1>
        <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
          As an Independent Trane Dealer, AC Assurance brings Southwest Florida homeowners the most durable, efficient HVAC systems available.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="shimmer-btn text-white hover:opacity-90" style={{ backgroundColor: '#EF3C13' }}>
            <Link to="/contact#estimate-form">Get a Free Quote</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
            <a href={PHONE_LINK}>
              <Phone className="w-5 h-5 mr-2" />
              Call {PHONE}
            </a>
          </Button>
        </div>
      </div>
    </section>

    {/* Why Trane */}
    <section className="py-14 md:py-20 bg-background">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-10">Why Trane?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyTrane.map((item) => (
            <div key={item.title} className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(239,60,19,0.1)' }}>
                <item.icon className="w-6 h-6" style={{ color: '#EF3C13' }} />
              </div>
              <h3 className="font-heading font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Product Line */}
    <section className="py-14 md:py-20 section-light">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-3">Our Trane Product Line</h2>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
          We install and service the full range of Trane residential HVAC systems.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {products.map((product) => (
            <div key={product.title} className="bg-card border border-border rounded-lg p-6 flex flex-col">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(239,60,19,0.1)' }}>
                <product.icon className="w-6 h-6" style={{ color: '#EF3C13' }} />
              </div>
              <h3 className="font-heading font-bold mb-2">{product.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">{product.desc}</p>
              <Button asChild className="w-full text-white hover:opacity-90" style={{ backgroundColor: '#EF3C13' }}>
                <Link to={product.link}>Request a Quote <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Promotions */}
    <section className="py-14 md:py-20 bg-background">
      <div className="container text-center max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">Current Trane Promotions</h2>
        <p className="text-muted-foreground mb-6">
          Convenient monthly payment options available through Synchrony Financial. Special financing available — subject to credit approval. Call for details.
        </p>
        <Button asChild size="lg" className="shimmer-btn text-white hover:opacity-90" style={{ backgroundColor: '#EF3C13' }}>
          <a href={PHONE_LINK}>
            <Phone className="w-5 h-5 mr-2" />
            Call {PHONE} for Current Offers
          </a>
        </Button>
        <p className="text-xs text-muted-foreground mt-4">
          Special financing available. Subject to credit approval. Call for details.
        </p>
      </div>
    </section>

    {/* Bottom CTA */}
    <section className="py-14 md:py-20 section-navy">
      <div className="container text-center max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-4">
          Ready to Upgrade to a Trane System?
        </h2>
        <p className="text-primary-foreground/80 mb-8">
          Schedule a free in-home estimate with AC Assurance. We'll help you choose the right Trane system for your home and budget.
        </p>
        <Button asChild size="lg" className="shimmer-btn text-white hover:opacity-90" style={{ backgroundColor: '#EF3C13' }}>
          <Link to="/contact#estimate-form">Get a Free In-Home Estimate <ArrowRight className="w-4 h-4 ml-2" /></Link>
        </Button>
        <p className="text-xs text-primary-foreground/50 mt-4">
          It's Hard To Stop A Trane® | Independent Trane Dealer
        </p>
      </div>
    </section>
  </Layout>
);

export default TraneProducts;
