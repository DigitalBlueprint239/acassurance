import { Star, Phone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { PHONE, PHONE_LINK } from "@/data/services";

const GOOGLE_REVIEWS_URL = "https://www.google.com/maps/place/?q=place_id:ChIJE8TtywtrFoURR_hlGn8DkRQ";

const reviews = [
  { name: "Mike T.", city: "Naples, FL", date: "July 2025", text: "Jason came out within 2 hours of my call. My AC was completely dead in July heat and he had it running before dinner. Honest pricing, no upsells. Will never call anyone else." },
  { name: "Sarah K.", city: "Fort Myers, FL", date: "August 2025", text: "Best HVAC company in SWFL, period. They installed a new Trane system and the difference is night and day. Professional, clean, and on time." },
  { name: "David R.", city: "Cape Coral, FL", date: "September 2025", text: "Called at 9pm on a Friday. Jason picked up, came out, and fixed the issue same night. That kind of service is rare." },
  { name: "Joey M.", city: "Cape Coral, FL", date: "February 2026", text: "Fantastic work! He came out at 8:30 and stayed until close to 10:00 to make sure our house was cooled off. His pricing was super fair even after hours." },
  { name: "Linda P.", city: "Bonita Springs, FL", date: "October 2025", text: "Very professional and knowledgeable. Diagnosed the problem quickly, had the part on the truck. Fixed in under an hour." },
  { name: "Carlos M.", city: "Estero, FL", date: "November 2025", text: "AC Assurance installed a mini-split in our garage and it works perfectly. Clean installation, cleaned up after themselves." },
  { name: "Patricia W.", city: "Naples, FL", date: "December 2025", text: "I've used three different HVAC companies in Naples and AC Assurance is by far the best. Transparent pricing, fast response." },
  { name: "Robert H.", city: "Fort Myers, FL", date: "January 2026", text: "Called for a maintenance tune-up and they found a small issue before it became a big problem. Saved me from a breakdown in summer." },
];

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
            <Star key={i} className="w-6 h-6 fill-brand-teal text-brand-teal" />
          ))}
        </div>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">What Our Customers Are Saying</h1>
        <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
          Real 5-star reviews from homeowners across Naples, Fort Myers, and Cape Coral.
        </p>
      </div>
    </section>

    {/* Stats Bar */}
    <section className="bg-brand-teal py-5">
      <div className="container">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-center text-white">
          <div className="text-sm font-semibold">4.9★ Average Rating</div>
          <div className="text-sm font-semibold">50+ Verified Reviews</div>
          <div className="text-sm font-semibold">Serving SWFL Since 2025</div>
        </div>
      </div>
    </section>

    {/* Review Cards */}
    <section className="py-12 md:py-16 bg-background">
      <div className="container max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {reviews.map((review) => (
            <div key={review.name} className="bg-card border border-border rounded-lg p-6">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-foreground leading-relaxed mb-4">"{review.text}"</p>
              <div className="text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">{review.name}</span> · {review.city} · {review.date}
              </div>
            </div>
          ))}
        </div>
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
