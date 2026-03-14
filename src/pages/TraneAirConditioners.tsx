import { Link } from "react-router-dom";
import { Phone, Shield, CheckCircle2, Thermometer, Droplets, Wind, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import EstimateForm from "@/components/EstimateForm";
import { PHONE, PHONE_LINK } from "@/data/services";

const trustSignals = [
  { icon: Shield, label: "Independent Trane Dealer" },
  { icon: Thermometer, label: "Proper Load Calculations" },
  { icon: Wind, label: "Florida Climate Expertise" },
  { icon: Droplets, label: "Humidity Control Focus" },
];

const TraneAirConditioners = () => (
  <Layout>
    <SEOHead
      title="Trane Air Conditioners | Southwest Florida | AC Assurance"
      description="AC Assurance installs and services Trane air conditioning systems across Southwest Florida. Durable, efficient cooling for Florida heat and humidity."
    />

    {/* Hero */}
    <section className="section-navy py-12 md:py-16">
      <div className="container">
        <span className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 text-primary-foreground text-sm font-medium mb-4">
          <Shield className="w-4 h-4" /> Independent Trane Dealer
        </span>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
          Trane Air Conditioners in Southwest Florida
        </h1>
        <p className="text-primary-foreground/90 text-lg max-w-2xl mb-6">
          Durable, efficient air conditioning systems designed to handle Florida's demanding heat and humidity. Installed and serviced by AC Assurance.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="#estimate-form">Request Estimate</a>
          </Button>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href={PHONE_LINK}>
              <Phone className="w-5 h-5 mr-2" /> Call {PHONE}
            </a>
          </Button>
        </div>
      </div>
    </section>

    {/* Body */}
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">

            <div>
              <h2 className="text-2xl font-heading font-bold mb-3">Why Trane Air Conditioning Systems</h2>
              <p className="text-foreground leading-relaxed">
                Trane has built a reputation for manufacturing air conditioning systems that perform reliably over time. Their residential product line includes central air conditioners and heat pumps engineered with components designed to withstand sustained use in hot, humid climates — making them a practical choice for Southwest Florida homeowners.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold mb-3">Built for Durability</h2>
              <p className="text-foreground leading-relaxed">
                Trane air conditioners use Climatuff compressors and Spine Fin coil technology, both designed for long-term reliability. The outdoor cabinets are built with weather-resistant materials to handle years of exposure to Florida's sun, rain, and coastal conditions. These systems are tested under extreme operating conditions before they leave the factory.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold mb-3">Designed for Florida Heat and Humidity</h2>
              <p className="text-foreground leading-relaxed">
                Southwest Florida's cooling season runs nearly year-round, which means your air conditioner operates under sustained loads for extended periods. Trane systems with variable-speed and two-stage compressor options can adjust output to match demand, helping maintain consistent indoor temperatures and managing humidity levels more effectively than single-stage units.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold mb-3">Coastal and Salt Air Considerations</h2>
              <p className="text-foreground leading-relaxed">
                Properties near the coast in Fort Myers, Cape Coral, Naples, and surrounding areas face accelerated corrosion from salt-laden air. Trane's coil coatings and cabinet materials are designed to resist corrosion, though proper placement and regular maintenance remain important factors in extending equipment life in coastal environments.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold mb-3">Energy Efficiency and Comfort</h2>
              <p className="text-foreground leading-relaxed">
                Trane offers air conditioning systems across a range of SEER2 efficiency ratings. Higher-efficiency models with variable-speed technology can reduce energy consumption compared to older or entry-level systems. These units also tend to provide better humidity control and more even temperatures throughout the home.
              </p>
            </div>

            {/* Trust signals */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {trustSignals.map((item) => (
                <div key={item.label} className="text-center p-4 bg-muted rounded">
                  <div className="w-10 h-10 rounded-full section-navy flex items-center justify-center mx-auto mb-2">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <p className="text-xs font-medium text-foreground">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Internal links */}
            <div className="space-y-3 pt-4">
              <h3 className="text-xl font-heading font-bold">Trane Installation Across Southwest Florida</h3>
              <p className="text-foreground leading-relaxed">
                AC Assurance installs and services Trane air conditioning systems throughout the region. Learn more about AC installation services in your area:
              </p>
              <ul className="space-y-2">
                {[
                  { to: "/ac-installation-naples", label: "AC Installation in Naples" },
                  { to: "/ac-installation-cape-coral", label: "AC Installation in Cape Coral" },
                  { to: "/financing", label: "HVAC Financing Options" },
                ].map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="inline-flex items-center gap-1 text-accent font-medium hover:underline">
                      <ArrowRight className="w-4 h-4" /> {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div id="estimate-form">
            <div className="sticky top-28 bg-card border border-border rounded p-6">
              <h3 className="font-heading font-bold text-lg mb-4">Request a Trane Estimate</h3>
              <EstimateForm showMessage showHearAboutUs leadSource="trane-air-conditioners" />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA band */}
    <section className="section-navy py-14 md:py-20">
      <div className="container text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-4">
          Ready for Reliable Cooling?
        </h2>
        <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">
          Contact AC Assurance to discuss Trane air conditioning options for your home.
        </p>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
          <a href={PHONE_LINK}>
            <Phone className="w-5 h-5 mr-2" /> Call {PHONE}
          </a>
        </Button>
        <p className="text-sm text-primary-foreground/60 mt-3">
          Special financing available. Subject to credit approval. Call for details.
        </p>
      </div>
    </section>
  </Layout>
);

export default TraneAirConditioners;
