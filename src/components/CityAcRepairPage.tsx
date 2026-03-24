import { Link } from "react-router-dom";
import { Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { PHONE, PHONE_LINK } from "@/data/services";
import EstimateForm from "@/components/EstimateForm";

interface CityPageProps {
  city: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  localIssues: { title: string; description: string }[];
  mapQuery: string;
  schema?: object[];
}

const CityAcRepairPage = ({ city, metaTitle, metaDescription, h1, intro, localIssues, mapQuery, schema }: CityPageProps) => (
  <Layout>
    <SEOHead title={metaTitle} description={metaDescription} schema={schema} />

    {/* Hero */}
    <header className="section-navy py-14 md:py-20">
      <div className="container text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-white/80 mb-4">
          <MapPin className="w-4 h-4" /> Serving {city}, FL
        </div>
        <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-white mb-4 leading-tight">{h1}</h1>
        <p className="text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">{intro}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-bold">
            <a href="#city-quote">Get a Free Quote <ArrowRight className="w-4 h-4 ml-2" /></a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
            <a href={PHONE_LINK}><Phone className="w-5 h-5 mr-2" /> {PHONE}</a>
          </Button>
        </div>
      </div>
    </header>

    {/* Local Issues */}
    <section className="py-14 md:py-20 bg-background">
      <div className="container max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center">Common AC Challenges in {city}</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {localIssues.map((issue) => (
            <div key={issue.title} className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-lg mb-2 text-primary">{issue.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{issue.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Map */}
    <section className="py-10 bg-muted/30">
      <div className="container max-w-4xl">
        <h2 className="text-xl font-heading font-bold mb-4 text-center">Our Service Area in {city}</h2>
        <div className="aspect-[16/9] rounded-xl overflow-hidden border border-border shadow-sm">
          <iframe
            title={`Google Maps - ${city}, FL`}
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${mapQuery}&zoom=12`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>

    {/* CTA + Form */}
    <section id="city-quote" className="py-14 md:py-20 bg-background scroll-mt-20">
      <div className="container max-w-lg">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">Get a Free Quote in {city}</h2>
          <p className="text-muted-foreground">Fill out the form and we'll respond promptly.</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6 md:p-8">
          <EstimateForm showMessage showHearAboutUs leadSource={`city-${city.toLowerCase().replace(/\s+/g, "-")}`} />
        </div>
      </div>
    </section>
  </Layout>
);

export default CityAcRepairPage;
