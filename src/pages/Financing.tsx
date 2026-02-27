import { Phone, CreditCard, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import EstimateForm from "@/components/EstimateForm";
import { PHONE, PHONE_LINK } from "@/data/services";

const Financing = () => (
  <Layout>
    <section className="brand-gradient py-12 md:py-16">
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">HVAC Financing in Cape Coral</h1>
        <p className="text-primary-foreground/90 text-lg max-w-2xl">
          AC Assurance partners with Synchrony to offer financing options for qualifying homeowners. Get the comfort you need with manageable monthly payments.
        </p>
      </div>
    </section>

    <section className="py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-heading font-bold text-foreground">How HVAC Financing Works</h2>
            <p className="text-foreground leading-relaxed">
              A new air conditioning system is a significant investment. Financing through Synchrony allows qualified Cape Coral homeowners to spread the cost over time with monthly payments, rather than paying the full amount upfront.
            </p>

            <h3 className="text-xl font-heading font-bold text-foreground mt-8">The Process</h3>
            <ol className="space-y-4">
              {[
                "Contact us for a free in-home estimate on your new HVAC system.",
                "Once you've reviewed and accepted the quote, apply for financing. The application is quick and you'll typically get a decision within minutes.",
                "If approved, we schedule your installation. You make monthly payments according to your plan terms.",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full brand-gradient flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary-foreground font-bold text-sm">{i + 1}</span>
                  </span>
                  <span className="text-foreground">{step}</span>
                </li>
              ))}
            </ol>

            <h3 className="text-xl font-heading font-bold text-foreground mt-8">What to Consider</h3>
            <ul className="space-y-3">
              {[
                "Total cost over the life of the financing plan",
                "Monthly payment amount and whether it fits your budget",
                "Energy savings from a new, efficient system can offset costs",
                "New system comes with manufacturer warranty coverage",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-muted rounded-lg p-6 mt-8">
              <div className="flex items-start gap-3">
                <CreditCard className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-foreground mb-1">Financing by Synchrony</h4>
                  <p className="text-sm text-muted-foreground">
                    Synchrony is one of the nation's premier consumer financial services companies. Financing is subject to credit approval. Contact us for current terms and details.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button asChild size="lg">
                <a href={PHONE_LINK}><Phone className="w-5 h-5 mr-2" />Call {PHONE} to Discuss</a>
              </Button>
            </div>
          </div>

          <div id="estimate-form">
            <div className="sticky top-28 bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-lg text-foreground mb-4">Request a Financing Consultation</h3>
              <EstimateForm leadSource="financing" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Financing;
