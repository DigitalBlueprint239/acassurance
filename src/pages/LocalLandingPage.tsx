import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Shield, Clock, BadgeCheck, MapPin, CheckCircle2, ArrowRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import EstimateForm from "@/components/EstimateForm";
import NotFound from "./NotFound";
import TrustBadgeStrip from "@/components/TrustBadgeStrip";
import ScrollCallReminder from "@/components/ScrollCallReminder";
import EmergencyCallout from "@/components/EmergencyCallout";
import { localPages, type LocalPageSection } from "@/data/localPages";
import { PHONE, PHONE_LINK, COMPANY, LICENSE } from "@/data/services";

const trustSignals = [
  { icon: BadgeCheck, title: "Licensed & Insured", desc: `Florida License ${LICENSE}` },
  { icon: Users, title: "Locally Owned", desc: "Owner-led accountability" },
  { icon: Clock, title: "Fast Response", desc: "Same-day & 24/7 available" },
  { icon: Shield, title: "Transparent Pricing", desc: "Upfront quotes, no surprises" },
];

const SectionRenderer = ({ section }: { section: LocalPageSection }) => {
  switch (section.type) {
    case "paragraph":
      return (
        <div className="mb-8">
          {section.heading && <h2 className="text-xl md:text-2xl font-heading font-bold mb-3">{section.heading}</h2>}
          {section.content && <p className="text-muted-foreground leading-relaxed">{section.content}</p>}
        </div>
      );
    case "subheading":
      return section.heading ? <h3 className="text-lg font-heading font-bold mt-6 mb-2">{section.heading}</h3> : null;
    case "bullet-list":
      return (
        <div className="mb-8">
          {section.heading && <h2 className="text-xl md:text-2xl font-heading font-bold mb-3">{section.heading}</h2>}
          <ul className="space-y-2">
            {section.items?.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    case "trust-signals":
      return (
        <div className="mb-8">
          {section.heading && <h2 className="text-xl md:text-2xl font-heading font-bold mb-4">{section.heading}</h2>}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {trustSignals.map((ts) => (
              <div key={ts.title} className="text-center p-4 bg-muted/50 rounded">
                <ts.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="font-heading font-bold text-sm">{ts.title}</div>
                <div className="text-xs text-muted-foreground">{ts.desc}</div>
              </div>
            ))}
          </div>
        </div>
      );
    case "location-list":
      return (
        <div className="mb-8">
          {section.heading && <h2 className="text-xl md:text-2xl font-heading font-bold mb-3">{section.heading}</h2>}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {section.locations?.map((loc) => (
              <div key={loc} className="flex items-center gap-2 text-muted-foreground text-sm p-2 bg-muted/30 rounded">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                {loc}
              </div>
            ))}
          </div>
        </div>
      );
    case "map-embed":
      return (
        <div className="mb-8">
          {section.heading && <h2 className="text-xl md:text-2xl font-heading font-bold mb-3">{section.heading}</h2>}
          <div className="aspect-video rounded overflow-hidden border border-border">
            <iframe
              title="Service Area Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228516.4!2d-81.95!3d26.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88db40a44ed6e203%3A0x4c0cde2cbb57f3a!2sSouthwest%20Florida!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      );
    case "internal-link-block":
      return (
        <div className="mb-8">
          {section.heading && <h2 className="text-xl md:text-2xl font-heading font-bold mb-3">{section.heading}</h2>}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {section.links?.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="flex items-center justify-between p-4 bg-card border border-border rounded hover:border-accent/40 hover:shadow-sm transition-all group"
              >
                <span className="font-medium text-sm">{link.label}</span>
                <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      );
    case "cta-block":
      return (
        <div className="mb-8 p-6 section-navy rounded text-center">
          <h3 className="text-lg font-heading font-bold text-primary-foreground mb-3">
            {section.heading || "Ready to Get Started?"}
          </h3>
          {section.content && <p className="text-primary-foreground/80 text-sm mb-4">{section.content}</p>}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <a href="#estimate-form">Request Estimate</a>
            </Button>
            <Button asChild variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <a href={PHONE_LINK}><Phone className="w-4 h-4 mr-2" />Call {PHONE}</a>
            </Button>
          </div>
        </div>
      );
    default:
      return null;
  }
};

const LocalLandingPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const page = localPages.find((p) => p.slug === slug);

  useEffect(() => {
    if (!page) return;
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "HVACBusiness",
      name: COMPANY,
      telephone: PHONE,
      url: "https://www.acassurancefl.com",
      areaServed: {
        "@type": "City",
        name: page.jsonLd.areaServed,
      },
      serviceType: page.jsonLd.serviceType,
      priceRange: "$$",
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, [page]);

  if (!page) return <NotFound />;

  const isUrgent = page.ctaType === "urgent";

  return (
    <Layout>
      <SEOHead title={page.seoTitle} description={page.metaDescription} />

      {/* HERO */}
      <section className={`py-12 md:py-16 ${isUrgent ? "bg-destructive/10 border-b-4 border-destructive" : "section-navy"}`}>
        <div className="container">
          <div className="max-w-3xl">
            <h1 className={`text-3xl md:text-4xl font-heading font-extrabold mb-4 ${isUrgent ? "text-destructive" : "text-primary-foreground"}`}>
              {page.h1}
            </h1>
            <p className={`text-lg mb-6 ${isUrgent ? "text-foreground" : "text-primary-foreground/90"}`}>
              {page.heroParagraph}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className={isUrgent ? "bg-destructive text-destructive-foreground hover:bg-destructive/90" : "bg-accent text-accent-foreground hover:bg-accent/90"}>
                <a href="#estimate-form">
                  {isUrgent ? "Request Emergency Service" : "Get My Free Quote"}
                </a>
              </Button>
              <Button asChild size="lg" className={isUrgent ? "bg-destructive text-destructive-foreground hover:bg-destructive/90" : "bg-accent text-accent-foreground hover:bg-accent/90"}>
                <a href={PHONE_LINK}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call {PHONE}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <TrustBadgeStrip />

      {/* CONTENT + SIDEBAR */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {page.sections.map((section, i) => (
                <SectionRenderer key={i} section={section} />
              ))}

              {/* FAQ */}
              {page.faq.length > 0 && (
                <div className="mt-10">
                  <h2 className="text-xl md:text-2xl font-heading font-bold mb-4">Frequently Asked Questions</h2>
                  <Accordion type="single" collapsible className="border rounded">
                    {page.faq.map((item, i) => (
                      <AccordionItem key={i} value={`faq-${i}`}>
                        <AccordionTrigger className="px-4 text-left text-sm font-medium">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="px-4 text-muted-foreground text-sm">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-card border border-border rounded p-5">
                  <h3 className="font-heading font-bold text-lg mb-1 text-center">Request a Free Estimate</h3>
                  <p className="text-xs text-muted-foreground text-center mb-4">We'll get back to you promptly.</p>
                  <EstimateForm leadSource={`local-${page.slug}`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section id="estimate-form" className={`py-12 md:py-16 ${isUrgent ? "bg-destructive" : "section-navy"}`}>
        <div className="container text-center">
          <h2 className={`text-2xl md:text-3xl font-heading font-bold mb-4 ${isUrgent ? "text-destructive-foreground" : "text-primary-foreground"}`}>
            {isUrgent ? "Don't Wait — Call Now for Emergency AC Repair" : "Ready to Get Started?"}
          </h2>
          <p className={`mb-6 max-w-lg mx-auto ${isUrgent ? "text-destructive-foreground/90" : "text-primary-foreground/80"}`}>
            {isUrgent
              ? "Our 24/7 emergency team is standing by to restore your cooling fast."
              : "Contact AC Assurance for professional HVAC service in Southwest Florida. Financing available through Synchrony."}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <a href={PHONE_LINK}>
                <Phone className="w-5 h-5 mr-2" />
                Call {PHONE}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/contact">Contact Us Online</Link>
            </Button>
          </div>
        </div>
      </section>
      <ScrollCallReminder />
    </Layout>
  );
};

export default LocalLandingPage;
