import { Link } from "react-router-dom";
import { Phone, Shield, CheckCircle2, Thermometer, Zap, Sun, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import EstimateForm from "@/components/EstimateForm";
import { PHONE, PHONE_LINK } from "@/data/services";
import TrustBadgeStrip from "@/components/TrustBadgeStrip";
import ScrollCallReminder from "@/components/ScrollCallReminder";

const trustSignals = [
  { icon: Shield, label: "Independent Trane Dealer" },
  { icon: Thermometer, label: "Proper System Sizing" },
  { icon: Zap, label: "Energy Efficiency Focus" },
  { icon: Sun, label: "Year-Round Comfort" },
];

const TraneHeatPumps = () => (
  <Layout>
    <SEOHead
      title="Trane Heat Pumps | Southwest Florida | AC Assurance"
      description="Trane heat pumps for year-round comfort in Southwest Florida. Energy-efficient heating and cooling from an Independent Trane Dealer."
    />

    {/* Hero */}
    <section className="section-navy py-12 md:py-16">
      <div className="container">
        <span className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 text-primary-foreground text-sm font-medium mb-4">
          <Shield className="w-4 h-4" /> Independent Trane Dealer
        </span>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
          Trane Heat Pumps in Southwest Florida
        </h1>
        <p className="text-primary-foreground/90 text-lg max-w-2xl mb-6">
          Year-round heating and cooling in a single system. Trane heat pumps deliver efficient comfort for Southwest Florida's climate.
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

    <TrustBadgeStrip />

    {/* Body */}
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">

            <div>
              <h2 className="text-2xl font-heading font-bold mb-3">What Is a Heat Pump</h2>
              <p className="text-foreground leading-relaxed">
                A heat pump is an HVAC system that provides both cooling and heating using a single outdoor unit. In cooling mode, it works like a traditional air conditioner — removing heat from indoor air and transferring it outside. In heating mode, the process reverses, extracting heat from outdoor air and moving it indoors. This dual-function design makes heat pumps a practical option for climates like Southwest Florida where heating needs are moderate.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold mb-3">Heating and Cooling in One System</h2>
              <p className="text-foreground leading-relaxed">
                With a Trane heat pump, you get a single system that handles both seasons. There's no need for a separate furnace or heating unit, which simplifies your HVAC setup and can reduce overall equipment and maintenance costs. Trane heat pumps are designed to transition between modes efficiently, keeping your home comfortable whether temperatures are in the 90s or drop into the 50s.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold mb-3">Well-Suited for Florida's Climate</h2>
              <p className="text-foreground leading-relaxed">
                Heat pumps are most efficient in climates with mild winters — exactly what Southwest Florida experiences. During the brief cooling months, a Trane heat pump provides adequate heating without the energy consumption of resistance heating. During the long summer months, the same system delivers full air conditioning performance with the durability and humidity management Trane systems are known for.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold mb-3">Energy Efficiency Benefits</h2>
              <p className="text-foreground leading-relaxed">
                Trane heat pumps are available in a range of SEER2 and HSPF2 efficiency ratings. Models with variable-speed compressors adjust output to match real-time demand, which can lower energy consumption compared to single-stage systems. Because heat pumps move heat rather than generate it, they can provide heating at a lower operating cost than electric resistance systems — a meaningful advantage for Florida homeowners who use heat only a few months per year.
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
              <h3 className="text-xl font-heading font-bold">Learn More</h3>
              <ul className="space-y-2">
                {[
                  { to: "/heating-services", label: "Heating Services" },
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
              <h3 className="font-heading font-bold text-lg mb-4">Request a Heat Pump Estimate</h3>
              <EstimateForm showMessage showHearAboutUs leadSource="trane-heat-pumps" />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA band */}
    <section className="section-navy py-14 md:py-20">
      <div className="container text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-4">
          Year-Round Comfort Starts Here
        </h2>
        <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">
          Contact AC Assurance to discuss Trane heat pump options for your home.
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

export default TraneHeatPumps;
