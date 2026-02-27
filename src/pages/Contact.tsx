import { Phone, Mail, MapPin } from "lucide-react";
import Layout from "@/components/layout/Layout";
import EstimateForm from "@/components/EstimateForm";
import { PHONE, PHONE_LINK, EMAIL, LICENSE } from "@/data/services";

const Contact = () => (
  <Layout>
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
              <a href={PHONE_LINK} className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Phone</div>
                  <div className="font-bold">{PHONE}</div>
                </div>
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-bold">{EMAIL}</div>
                </div>
              </a>
              <div className="flex items-center gap-3 text-foreground">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Location</div>
                  <div className="font-bold">Cape Coral, FL</div>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">License #{LICENSE}</p>
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
