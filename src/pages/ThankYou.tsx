import { CheckCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { PHONE, PHONE_LINK } from "@/data/services";

const ThankYou = () => (
  <Layout>
    <section className="py-16 md:py-24">
      <div className="container max-w-lg text-center">
        <CheckCircle className="w-16 h-16 text-accent mx-auto mb-6" />
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Thank You!
        </h1>
        <p className="text-muted-foreground text-lg mb-8">
          We've received your request and will be in touch shortly. For immediate assistance, give us a call.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="brand-gradient-orange text-primary-foreground hover:opacity-90">
            <a href={PHONE_LINK}>
              <Phone className="w-4 h-4 mr-2" />
              Call {PHONE}
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default ThankYou;
