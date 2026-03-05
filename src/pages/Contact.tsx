import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import EstimateForm from "@/components/EstimateForm";
import { PHONE, PHONE_LINK, EMAIL, LICENSE } from "@/data/services";

const Contact = () => (
  <Layout>
    <SEOHead
      title="Contact AC Assurance | HVAC Service Cape Coral & Fort Myers"
      description="Contact AC Assurance Cooling & Heating for AC repair, installation, and HVAC service in Cape Coral and Fort Myers. Call (239) 365-3090 or request a quote online."
    />
    <section className="brand-gradient py-12 md:py-16">
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
            <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Get in Touch</h2>
            <div className="space-y-5 mb-8">
              <a href={PHONE_LINK} className="flex items-center gap-3 text-foreground hover:text-accent transition-colors">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Phone</div>
                  <div className="font-bold">{PHONE}</div>
                </div>
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-foreground hover:text-accent transition-colors">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-bold">{EMAIL}</div>
                </div>
              </a>
              <div className="flex items-center gap-3 text-foreground">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Location</div>
                  <div className="font-bold">Cape Coral, FL</div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-muted rounded-lg p-6 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-accent" />
                <h3 className="font-heading font-bold text-foreground">Business Hours</h3>
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

            {/* Map Placeholder */}
            <div className="rounded-lg overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114964.53925829842!2d-82.03573!3d26.6276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x867f7886f3e66a5d%3A0x5cb6c8cf0f5fd5b2!2sCape%20Coral%2C%20FL!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AC Assurance Service Area — Cape Coral, FL"
              />
            </div>

            <p className="text-sm text-muted-foreground mt-4">License #{LICENSE}</p>
          </div>

          <div id="estimate-form">
            <div className="bg-card border border-border rounded-lg p-6 md:p-8">
              <h3 className="font-heading font-bold text-xl text-foreground mb-4">Send Us a Message</h3>
              <EstimateForm showMessage showHearAboutUs leadSource="contact" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;
