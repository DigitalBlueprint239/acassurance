import { Star, Phone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { PHONE, PHONE_LINK } from "@/data/services";

const GOOGLE_REVIEWS_URL = "https://www.google.com/maps/place/?q=place_id:ChIJE8TtywtrFoURR_hlGn8DkRQ";

const placeholderReviews = [
  { text: "Great service. Very prompt and professional. Fixed our AC the same day we called. Highly recommend!", name: "PLACEHOLDER — Replace with real customer name", rating: 5 },
  { text: "Highly recommend AC Assurance. They were honest about pricing and did excellent work on our installation.", name: "PLACEHOLDER — Replace with real customer name", rating: 5 },
  { text: "The team showed up on time, explained everything, and did a fantastic job. Best HVAC experience we've had.", name: "PLACEHOLDER — Replace with real customer name", rating: 5 },
];

const Reviews = () => (
  <Layout>
    <section className="section-navy py-12 md:py-16">
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">Customer Reviews</h1>
        <p className="text-primary-foreground/90 text-lg max-w-2xl">
          See what homeowners across Fort Myers, Cape Coral, and Southwest Florida are saying about AC Assurance.
        </p>
      </div>
    </section>

    {/* Placeholder Reviews */}
    <section className="py-12 md:py-16 bg-background">
      <div className="container max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {placeholderReviews.map((review, i) => (
            <div key={i} className="bg-card border border-border rounded-lg p-6">
              <div className="flex gap-0.5 mb-3">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                ))}
              </div>
              <p className="text-sm text-foreground mb-3 italic">"{review.text}"</p>
              <p className="text-xs text-muted-foreground">{review.name}</p>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-lg p-8 md:p-12 text-center">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-brand-orange text-brand-orange" />
            ))}
          </div>
          <h2 className="text-2xl font-heading font-bold text-foreground mb-3">See Our Latest Reviews</h2>
          <p className="text-muted-foreground mb-6">
            Check out our latest reviews on Google to see why Southwest Florida homeowners trust AC Assurance.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="brand-gradient-teal text-primary-foreground hover:opacity-90">
              <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Read Reviews on Google
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
      </div>
    </section>
  </Layout>
);

export default Reviews;
