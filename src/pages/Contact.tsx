import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SWFLServiceMap from "@/components/SWFLServiceMap";
import SEOHead from "@/components/SEOHead";
import EstimateForm from "@/components/EstimateForm";
import { PHONE, PHONE_LINK, EMAIL, EMAIL_SECONDARY, LICENSE } from "@/data/services";

const Contact = () => (
  <Layout>
    <SEOHead
      title="Contact AC Assurance | HVAC Service Cape Coral & Fort Myers"
      description="Contact AC Assurance Cooling & Heating for AC repair, installation, and HVAC service in Cape Coral and Fort Myers. Call (239) 365-3090 or request a quote online."
    />
    <section className="section-navy py-12 md:py-16">
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">Contact AC Assurance</h1>
        <p className="text-primary-foreground/90 text-lg max-w-2xl">
          Ready to schedule service or have a question? Reach out — we're happy to help.
        </p>
      </div>
    </section>

    <section className="py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-heading font-bold mb-6">Get in Touch</h2>
            <div className="space-y-5 mb-8">
              <a href={PHONE_LINK} className="flex items-center gap-3 text-foreground hover:text-accent transition-colors">
                <div className="w-10 h-10 rounded bg-muted flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Phone</div>
                  <div className="font-bold">{PHONE}</div>
                </div>
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-foreground hover:text-accent transition-colors">
                <div className="w-10 h-10 rounded bg-muted flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-bold">{EMAIL}</div>
                </div>
              </a>
              <a href={`mailto:${EMAIL_SECONDARY}`} className="flex items-center gap-3 text-foreground hover:text-accent transition-colors">
                <div className="w-10 h-10 rounded bg-muted flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-bold">{EMAIL_SECONDARY}</div>
                </div>
              </a>
              <div className="flex items-center gap-3 text-foreground">
                <div className="w-10 h-10 rounded bg-muted flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Location</div>
                  <div className="font-bold">Cape Coral, FL</div>
                </div>
              </div>
            </div>

            <div className="bg-muted rounded p-6 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-primary" />
                <h3 className="font-heading font-bold">Business Hours</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday – Friday</span>
                  <span className="font-medium text-foreground">8:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-medium text-foreground">9:00 AM – 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-medium text-foreground">Emergency Only</span>
                </div>
                <div className="pt-2 border-t border-border mt-2">
                  <span className="text-accent font-semibold text-xs">⚡ 24/7 Emergency Service Available</span>
                </div>
              </div>
            </div>

            <SWFLServiceMap />

            <a
              href="https://www.google.com/maps/search/AC+HVAC+service+Cape+Coral+FL"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 text-sm text-primary font-medium hover:underline"
            >
              <ExternalLink className="w-4 h-4" />
              Open in Google Maps
            </a>

            <p className="text-sm text-muted-foreground mt-4">License #{LICENSE}</p>
          </div>

          <div id="estimate-form">
            <div className="bg-card border border-border rounded p-6 md:p-8">
              <h3 className="font-heading font-bold text-xl mb-2">Request Service — Free Estimate</h3>
              <p className="text-sm text-muted-foreground mb-4">Tell us what's going on and we'll get back to you fast. No obligation.</p>
              <EstimateForm showMessage showHearAboutUs leadSource="contact" ctaLabel="Send My Request" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;
