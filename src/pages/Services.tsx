import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { services } from "@/data/services";

const Services = () => (
  <Layout>
    <section className="py-12 md:py-16">
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">HVAC Services in Cape Coral, FL</h1>
        <p className="text-muted-foreground max-w-2xl mb-10">
          AC Assurance Cooling &amp; Heating provides a full range of residential and commercial HVAC services across Cape Coral and Southwest Florida.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.slug}
              to={`/${service.slug}`}
              className="group rounded-lg bg-card border border-border p-6 hover:shadow-md hover:border-primary/30 transition-all"
            >
              <service.icon className="w-10 h-10 text-primary mb-4" />
              <h2 className="font-heading font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">{service.shortTitle}</h2>
              <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
              <span className="inline-flex items-center gap-1 text-primary text-sm font-medium">
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
