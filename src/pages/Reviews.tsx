import { Star, Phone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { PHONE, PHONE_LINK } from "@/data/services";

const GOOGLE_REVIEWS_URL = "https://www.google.com/maps/place/?q=place_id:ChIJE8TtywtrFoURR_hlGn8DkRQ";

const Reviews = () => (
  <Layout>
    <SEOHead
      title="Customer Reviews | AC Assurance Cooling & Heating"
      description="See what Fort Myers, Naples, and Cape Coral homeowners say about AC Assurance. Read our 5-star Google reviews for AC repair, installation, and HVAC services."
    />

    {/* Hero */}
    <section className="section-navy py-12 md:py-16">
      <div className="container text-center">
        <div className="flex justify-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">What Our Customers Are Saying</h1>
        <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
          Real 5-star reviews from homeowners across Naples, Fort Myers, and Cape Coral.
        </p>
      </div>
    </section>

    {/* Stats Bar */}
    <section className="bg-primary py-5">
      <div className="container">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-center text-white">
          <div className="text-sm font-semibold">5-Star Google Reviews</div>
          <div className="text-sm font-semibold">Licensed CAC1823832</div>
          <div className="text-sm font-semibold">Serving SWFL Since 2025</div>
        </div>
      </div>
    </section>

    {/* Elfsight Google Reviews Widget */}
    <section className="py-12 md:py-16 bg-background">
      <div className="container max-w-5xl">
        <div className="elfsight-app-6797d54a-9e55-4e28-ae17-97549347a240" data-elfsight-app-lazy></div>
      </div>
    </section>

    {/* Leave a Review CTA */}
    <section className="py-12 md:py-16 bg-muted">
      <div className="container text-center max-w-2xl">
        <h2 className="text-2xl font-heading font-bold mb-3">Had a Great Experience?</h2>
        <p className="text-muted-foreground mb-6">Share it on Google and help other Southwest Florida homeowners find reliable HVAC service.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Leave a Google Review
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={PHONE_LINK}>
              <Phone className="w-4 h-4 mr-2" />
              Call {PHONE}
            </a>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default Reviews;
