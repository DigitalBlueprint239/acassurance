import { Link } from "react-router-dom";
import { Phone, Mail, Shield, Users, Clock, Award, Wrench, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { PHONE, PHONE_LINK, EMAIL, LICENSE } from "@/data/services";

const About = () => (
  <Layout>
    <SEOHead
      title="About AC Assurance | Licensed HVAC Pros Cape Coral & Fort Myers"
      description="Learn about AC Assurance Cooling & Heating — licensed (CAC1823832), insured HVAC professionals serving Cape Coral, Fort Myers, and Southwest Florida."
    />
    <section className="section-navy py-12 md:py-16">
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">About AC Assurance</h1>
        <p className="text-primary-foreground/90 text-lg max-w-2xl">
          Licensed HVAC professionals serving Cape Coral and Southwest Florida with honest, reliable service.
        </p>
      </div>
    </section>

    <section className="py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-32 h-32 rounded bg-muted flex items-center justify-center shrink-0 text-muted-foreground text-xs text-center border border-border">
                PHOTO PLACEHOLDER — Owner/Team
              </div>
              <div>
                <h2 className="text-2xl font-heading font-bold mb-3">Owner-Operated. Quality-Driven.</h2>
                <p className="text-foreground leading-relaxed">
                  AC Assurance Cooling &amp; Heating is a locally owned and operated HVAC company based in Cape Coral, Florida. Every job gets personal attention from ownership — no middlemen, no runaround. We built this company on the principle that HVAC service should be honest, affordable, and done right the first time.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold mb-4">Our Mission</h2>
              <p className="text-foreground leading-relaxed mb-4">
                To provide Southwest Florida homeowners and businesses with reliable, fairly priced HVAC services backed by real expertise and personal accountability. We treat every home like our own.
              </p>
              <p className="text-foreground leading-relaxed">
                We focus on doing the job right. That means proper diagnosis before recommending solutions, using quality parts, and standing behind our work. We won't recommend a replacement when a repair will solve the problem, and we'll be upfront about costs before starting any work.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold mb-4">Why Homeowners Trust Us</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Shield, title: "Licensed & Insured", desc: `FL License #${LICENSE} — fully insured for your protection.` },
                  { icon: Clock, title: "24/7 Emergency Service", desc: "AC emergencies don't wait. Neither do we. Call anytime." },
                  { icon: Users, title: "Owner on Every Job", desc: "Hands-on ownership means quality work and real accountability." },
                  { icon: Award, title: "Experienced Technicians", desc: "Trained and certified on all major HVAC brands and systems." },
                  { icon: Heart, title: "Community First", desc: "Proudly serving our Cape Coral and Fort Myers neighbors." },
                  { icon: Wrench, title: "All Makes & Models", desc: "We service, repair, and install all major HVAC brands." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 p-4 rounded bg-muted">
                    <item.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-heading font-bold text-sm mb-1">{item.title}</h3>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold mb-4">Areas We Serve</h2>
              <p className="text-foreground leading-relaxed">
                We serve Cape Coral, Fort Myers, Naples, Estero, Bonita Springs, Lehigh Acres, and North Fort Myers. Whether you need a routine tune-up or an emergency repair at 2 AM, AC Assurance is here to help.
              </p>
            </div>
          </div>

          <div>
            <div className="sticky top-28 space-y-6">
              <div className="bg-card border border-border rounded p-6 text-center">
                <h3 className="font-heading font-bold text-lg mb-3">Ready to Get Started?</h3>
                <p className="text-sm text-muted-foreground mb-5">Schedule a free estimate or call us to discuss your HVAC needs.</p>
                <div className="flex flex-col gap-3">
                  <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link to="/contact#estimate-form">Get a Free Quote</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="w-full">
                    <a href={PHONE_LINK}>
                      <Phone className="w-4 h-4 mr-2" />
                      Call {PHONE}
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="ghost" className="w-full">
                    <a href={`mailto:${EMAIL}`}>
                      <Mail className="w-4 h-4 mr-2" />
                      Email Us
                    </a>
                  </Button>
                </div>
              </div>

              <div className="bg-muted rounded p-5">
                <div className="grid grid-cols-1 gap-3 text-center">
                  <div>
                    <div className="text-2xl font-heading font-extrabold text-primary">24/7</div>
                    <div className="text-xs text-muted-foreground">Emergency Service</div>
                  </div>
                  <div>
                    <div className="text-2xl font-heading font-extrabold text-primary">9</div>
                    <div className="text-xs text-muted-foreground">HVAC Services Offered</div>
                  </div>
                  <div>
                    <div className="text-2xl font-heading font-extrabold text-primary">7</div>
                    <div className="text-xs text-muted-foreground">Cities Served in SWFL</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
