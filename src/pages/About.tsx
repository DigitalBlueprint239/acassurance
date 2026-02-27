import { Phone, Mail, Shield, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { PHONE, PHONE_LINK, EMAIL, LICENSE } from "@/data/services";

const About = () => (
  <Layout>
    <section className="brand-gradient py-12 md:py-16">
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">About AC Assurance</h1>
        <p className="text-primary-foreground/90 text-lg max-w-2xl">
          Licensed HVAC professionals serving Cape Coral and Southwest Florida with honest, reliable service.
        </p>
      </div>
    </section>

    <section className="py-12 md:py-16">
      <div className="container max-w-3xl space-y-8">
        <div>
          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Who We Are</h2>
          <p className="text-foreground leading-relaxed mb-4">
            AC Assurance Cooling &amp; Heating is a licensed HVAC company based in Cape Coral, Florida. We provide repair, installation, and maintenance services for residential and light commercial properties throughout Southwest Florida.
          </p>
          <p className="text-foreground leading-relaxed">
            We believe in straightforward service: honest assessments, fair pricing, and quality workmanship. When we come to your home, we treat it with respect and take the time to explain what we find and what we recommend.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: Shield, title: "Licensed & Insured", desc: `FL License #${LICENSE}` },
            { icon: Clock, title: "24/7 Available", desc: "Emergency service any time" },
            { icon: Users, title: "Local Team", desc: "Cape Coral-based technicians" },
          ].map((item) => (
            <div key={item.title} className="bg-muted rounded-lg p-5 text-center">
              <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-heading font-bold text-sm text-foreground mb-1">{item.title}</h3>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Our Approach</h2>
          <p className="text-foreground leading-relaxed mb-4">
            We focus on doing the job right. That means proper diagnosis before recommending solutions, using quality parts, and standing behind our work. We won't recommend a replacement when a repair will solve the problem, and we'll be upfront about costs before starting any work.
          </p>
          <p className="text-foreground leading-relaxed">
            Whether you need a routine tune-up or an emergency repair at 2 AM, AC Assurance is here to help. We serve Cape Coral, Fort Myers, Naples, Estero, Bonita Springs, Lehigh Acres, and North Fort Myers.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Button asChild size="lg">
            <a href={PHONE_LINK}><Phone className="w-5 h-5 mr-2" />Call {PHONE}</a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={`mailto:${EMAIL}`}><Mail className="w-5 h-5 mr-2" />Email Us</a>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
