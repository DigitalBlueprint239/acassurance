import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { services } from "@/data/services";

const Services = () => (
  <Layout>
    <SEOHead
      title="HVAC Services Cape Coral & Fort Myers | AC Assurance"
      description="Full range of residential and commercial HVAC services in Cape Coral and Southwest Florida. AC repair, installation, maintenance, duct cleaning, and more."
    />
    <section className="section-navy py-12 md:py-16">
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">HVAC Services in Cape Coral, FL</h1>
        <p className="text-primary-foreground/90 text-lg max-w-2xl">
          AC Assurance Cooling &amp; Heating provides a full range of residential and commercial HVAC services across Cape Coral and Southwest Florida.
        </p>
      </div>
    </section>

    <section className="py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <Link
              key={service.slug}
              to={`/${service.slug}`}
              className="group bg-card border border-border rounded p-6 hover:shadow-md hover:border-accent/40 transition-all"
            >
              <service.icon className="w-10 h-10 text-primary mb-4" />
              <h2 className="font-heading font-bold text-lg mb-2 group-hover:text-accent transition-colors">{service.shortTitle}</h2>
              <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
              <span className="inline-flex items-center gap-1 text-accent text-sm font-medium">
                Learn more <ChevronRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Services;
