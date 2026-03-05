import { useParams, Link } from "react-router-dom";
import { Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import EstimateForm from "@/components/EstimateForm";
import { services, PHONE, PHONE_LINK } from "@/data/services";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-heading font-bold mb-4">Service Not Found</h1>
          <Button asChild><Link to="/services">View All Services</Link></Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEOHead
        title={`${service.title} | AC Assurance Cooling & Heating`}
        description={service.description}
      />
      {/* Hero */}
      <section className="brand-gradient py-12 md:py-16">
        <div className="container">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">{service.title}</h1>
            <p className="text-primary-foreground/90 text-lg mb-6">{service.heroDescription}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" variant="secondary">
                <a href={PHONE_LINK}><Phone className="w-5 h-5 mr-2" />Call {PHONE}</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                <a href="#estimate-form">Request Estimate</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-6">
              {service.content.map((p, i) => (
                <p key={i} className="text-foreground leading-relaxed">{p}</p>
              ))}
              <div className="mt-8">
                <h2 className="text-xl font-heading font-bold text-foreground mb-4">What's Included</h2>
                <ul className="space-y-3">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div id="estimate-form">
              <div className="sticky top-28 bg-card border border-border rounded-lg p-6">
                <h3 className="font-heading font-bold text-lg text-foreground mb-4">Get a Free Estimate</h3>
                <EstimateForm showMessage showHearAboutUs leadSource={service.slug} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicePage;
