import { MapPin, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { serviceAreas, PHONE, PHONE_LINK } from "@/data/services";

const cityData = [
  {
    name: "Naples",
    description: "AC Assurance serves Naples and surrounding Collier County communities with premium HVAC services for coastal and luxury homes. Salt air, high humidity, and large floor plans make professional AC service essential in Naples.",
    links: [
      { label: "AC Repair in Naples", to: "/ac-repair-naples" },
      { label: "AC Installation in Naples", to: "/ac-installation-naples" },
      { label: "AC Replacement in Naples", to: "/ac-replacement-naples" },
      { label: "Emergency AC Repair in Naples", to: "/emergency-ac-repair-naples" },
      { label: "Mini Split Installation in Naples", to: "/mini-split-installation-naples" },
    ],
  },
  {
    name: "Fort Myers",
    description: "Fort Myers homeowners rely on AC Assurance for fast, reliable HVAC repair and replacement. From Downtown to Gateway and South Fort Myers, we serve the entire metro area.",
    links: [
      { label: "AC Repair in Fort Myers", to: "/ac-repair-fort-myers" },
      { label: "AC Replacement in Fort Myers", to: "/ac-replacement-fort-myers" },
    ],
  },
  {
    name: "Cape Coral",
    description: "Cape Coral's canal-front homes and year-round heat demand dependable cooling. AC Assurance provides comprehensive HVAC services throughout the Cape.",
    links: [
      { label: "AC Repair in Cape Coral", to: "/ac-repair-cape-coral" },
      { label: "AC Installation in Cape Coral", to: "/ac-installation-cape-coral" },
      { label: "Mini Split Installation in Cape Coral", to: "/mini-split-installation-cape-coral" },
      { label: "Emergency AC Repair in Cape Coral", to: "/emergency-ac-repair-cape-coral" },
    ],
  },
  {
    name: "Bonita Springs",
    description: "AC Assurance provides HVAC repair, installation, and maintenance services to homeowners in Bonita Springs and surrounding communities.",
    links: [],
  },
  {
    name: "Estero",
    description: "Estero residents trust AC Assurance for professional air conditioning service, from routine maintenance to emergency repairs.",
    links: [],
  },
  {
    name: "Lehigh Acres",
    description: "AC Assurance serves Lehigh Acres with reliable HVAC repair, installation, and maintenance for residential properties.",
    links: [],
  },
];

const ServiceAreas = () => (
  <Layout>
    <SEOHead
      title="HVAC Service Areas | Naples, Fort Myers, Cape Coral & SWFL | AC Assurance"
      description="AC Assurance serves Naples, Fort Myers, Cape Coral, Bonita Springs, Estero, and Lehigh Acres with professional HVAC repair, installation, and maintenance."
    />
    <section className="section-navy py-12 md:py-16">
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">HVAC Service Areas</h1>
        <p className="text-primary-foreground/90 text-lg max-w-2xl">
          AC Assurance proudly serves Naples, Fort Myers, Cape Coral, and communities across Southwest Florida with professional HVAC services.
        </p>
      </div>
    </section>

    <section className="py-12 md:py-16">
      <div className="container max-w-4xl">
        {/* Area badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {serviceAreas.map((area) => (
            <div
              key={area.name}
              className={`flex items-center gap-3 p-5 rounded border ${
                area.primary ? "border-primary bg-primary/5" : "border-border bg-card"
              }`}
            >
              <MapPin className={`w-5 h-5 shrink-0 ${area.primary ? "text-primary" : "text-muted-foreground"}`} />
              <div>
                <div className={`font-heading font-bold ${area.primary ? "text-primary" : "text-foreground"}`}>
                  {area.name}, FL
                </div>
                {area.primary && <div className="text-xs text-muted-foreground">Primary Service Area</div>}
              </div>
            </div>
          ))}
        </div>

        {/* City sections */}
        {cityData.map((city) => (
          <div key={city.name} className="mb-10">
            <h2 className="text-xl md:text-2xl font-heading font-bold mb-2">HVAC Services in {city.name}, FL</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{city.description}</p>
            {city.links.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {city.links.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="flex items-center justify-between p-3 bg-card border border-border rounded hover:border-accent/40 hover:shadow-sm transition-all group text-sm"
                  >
                    <span className="font-medium">{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}

        <p className="text-muted-foreground mb-8">
          Not sure if we serve your area? Give us a call — we're happy to help.
        </p>
        <Button asChild size="lg">
          <a href={PHONE_LINK}><Phone className="w-5 h-5 mr-2" />Call {PHONE}</a>
        </Button>
      </div>
    </section>
  </Layout>
);

export default ServiceAreas;
