import { Link } from "react-router-dom";
import { Phone, CreditCard, CheckCircle2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import EstimateForm from "@/components/EstimateForm";
import { PHONE, PHONE_LINK } from "@/data/services";

const SYNCHRONY_URL = "https://www.synchrony.com/mmc/M9236331300?sitecode=acewel401";

const Financing = () => (
  <Layout>
    <SEOHead
      title="Flexible HVAC Financing | AC Assurance Cooling & Heating"
      description="Convenient HVAC financing through Synchrony for Cape Coral and Fort Myers homeowners. Apply online or call to discuss options for your comfort needs."
    />
    <section className="section-navy py-12 md:py-16">
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">Flexible HVAC Financing Options</h1>
        <p className="text-primary-foreground/90 text-lg max-w-2xl">
          Need a new AC system or major repair? AC Assurance offers financing options to help make your comfort more affordable.
        </p>
      </div>
    </section>

    <section className="py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-heading font-bold">How HVAC Financing Works</h2>
            <p className="text-foreground leading-relaxed">
              A new air conditioning system is a significant investment. Financing through Synchrony allows qualified Cape Coral homeowners to spread the cost over time with monthly payments, rather than paying the full amount upfront.
            </p>

            {/* Synchrony Logo */}
            <div className="flex items-center gap-3 bg-muted/50 rounded-lg p-4 border border-border">
              <img
                src="https://www.synchrony.com/content/dam/synchrony/logos/synchrony-logo.png"
                alt="Synchrony Financial"
                className="h-8 w-auto"
                loading="lazy"
              />
              <span className="text-sm text-muted-foreground">Financing provided by Synchrony Financial</span>
            </div>

            {/* Apply Now highlight block */}
            <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 md:p-8 space-y-5">
              <h3 className="text-xl font-heading font-bold">Ready to Get Started?</h3>
              <ul className="space-y-3">
                {[
                  "Fast online application",
                  "Convenient monthly payment options",
                  "Financing available for qualified customers",
                  "A simple way to move forward on your HVAC project",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <a href={SYNCHRONY_URL} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5 mr-2" /> Apply for Financing
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={PHONE_LINK}>
                    <Phone className="w-5 h-5 mr-2" /> Call Us to Discuss Financing Options
                  </a>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Special financing available. Subject to credit approval. Call for details.
              </p>
            </div>

            <h3 className="text-xl font-heading font-bold mt-8">The Process</h3>
            <ol className="space-y-4">
              {[
                "Contact us for a free in-home estimate on your new HVAC system.",
                "Once you've reviewed and accepted the quote, apply for financing. The application is quick and you'll typically get a decision within minutes.",
                "If approved, we schedule your installation. You make monthly payments according to your plan terms.",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full section-navy flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary-foreground font-bold text-sm">{i + 1}</span>
                  </span>
                  <span className="text-foreground">{step}</span>
                </li>
              ))}
            </ol>

            <h3 className="text-xl font-heading font-bold mt-8">What to Consider</h3>
            <ul className="space-y-3">
              {[
                "Total cost over the life of the financing plan",
                "Monthly payment amount and whether it fits your budget",
                "Energy savings from a new, efficient system can offset costs",
                "New system comes with manufacturer warranty coverage",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-muted rounded p-6 mt-8">
              <div className="flex items-start gap-3">
                <CreditCard className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold mb-1">Financing by Synchrony</h4>
                  <p className="text-sm text-muted-foreground">
                    Synchrony is one of the nation's premier consumer financial services companies. Financing is subject to credit approval. Contact us for current terms and details.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <a href={SYNCHRONY_URL} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-2" /> Apply for Financing
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={PHONE_LINK}>
                  <Phone className="w-5 h-5 mr-2" /> Call {PHONE}
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Special financing available. Subject to credit approval. Call for details.
            </p>
          </div>

          <div id="estimate-form">
            <div className="sticky top-28 bg-card border border-border rounded p-6">
              <h3 className="font-heading font-bold text-lg mb-4">Request a Financing Consultation</h3>
              <EstimateForm showMessage showHearAboutUs leadSource="financing" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Financing;
