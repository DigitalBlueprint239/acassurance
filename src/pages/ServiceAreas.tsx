import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { serviceAreas, PHONE, PHONE_LINK } from "@/data/services";

const ServiceAreas = () => (
  <Layout>
    <SEOHead
      title="HVAC Service Areas | Cape Coral, Fort Myers & SWFL | AC Assurance"
      description="AC Assurance serves Cape Coral, Fort Myers, Lehigh Acres, Bonita Springs, Estero, Naples, and North Fort Myers with professional HVAC services."
    />
    <section className="brand-gradient py-12 md:py-16">
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">HVAC Service Areas</h1>
        <p className="text-primary-foreground/90 text-lg max-w-2xl">
          AC Assurance proudly serves Cape Coral and communities across Southwest Florida with professional HVAC services.
        </p>
      </div>
    </section>

    <section className="py-12 md:py-16">
      <div className="container max-w-3xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {serviceAreas.map((area) => (
            <div
              key={area.name}
              className={`flex items-center gap-3 p-5 rounded-lg border ${
                area.primary ? "border-primary bg-primary/5" : "border-border bg-card"
              }`}
            >
              <MapPin className={`w-5 h-5 shrink-0 ${area.primary ? "text-primary" : "text-muted-foreground"}`} />
              <div>
                <div className={`font-heading font-bold ${area.primary ? "text-primary" : "text-foreground"}`}>
                  {area.name}{area.primary ? ", FL" : ""}
                </div>
                {area.primary && <div className="text-xs text-muted-foreground">Primary Service Area</div>}
              </div>
            </div>
          ))}
        </div>
        <p className="text-foreground leading-relaxed mb-6">
          Based in Cape Coral, AC Assurance provides HVAC repair, installation, and maintenance services throughout Lee and Collier counties. Whether you need emergency AC repair or a new system installation, our licensed technicians are ready to help.
        </p>
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
