import { Star, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { PHONE, PHONE_LINK } from "@/data/services";

const reviews = [
  { name: "Sarah M.", location: "Cape Coral", text: "AC Assurance responded quickly when our AC went out on a Saturday. The technician was professional and had us back up and running the same day. Highly recommend.", rating: 5 },
  { name: "James R.", location: "Fort Myers", text: "Fair pricing and honest service. They explained what was needed and didn't try to upsell anything we didn't need. Will definitely use them again for maintenance.", rating: 5 },
  { name: "Linda K.", location: "Estero", text: "Had a new system installed and the whole process was smooth — from the estimate to the installation. Financing made it easy to manage the cost.", rating: 5 },
  { name: "David P.", location: "Cape Coral", text: "Called for an emergency repair on a Sunday evening. They were out within a couple hours. Professional and courteous. Fair price too.", rating: 5 },
  { name: "Maria G.", location: "Bonita Springs", text: "We've been using AC Assurance for annual maintenance for two years now. Always on time, always thorough. Our system runs great.", rating: 5 },
  { name: "Robert H.", location: "Naples", text: "Installed a ductless mini-split in our garage workshop. Great work, clean installation, and they walked us through everything. Very happy with the results.", rating: 5 },
  { name: "Jennifer T.", location: "Lehigh Acres", text: "Straightforward, honest company. They diagnosed the issue quickly and had the parts needed. AC was back up the same afternoon.", rating: 5 },
  { name: "Carlos S.", location: "North Fort Myers", text: "Good experience from start to finish. Technician was knowledgeable and took time to answer all our questions about our system.", rating: 4 },
];

const Reviews = () => (
  <Layout>
    <section className="brand-gradient py-12 md:py-16">
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">Customer Reviews</h1>
        <p className="text-primary-foreground/90 text-lg max-w-2xl">
          Hear from homeowners across Cape Coral and Southwest Florida who trust AC Assurance for their HVAC needs.
        </p>
      </div>
    </section>

    <section className="py-12 md:py-16">
      <div className="container max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {reviews.map((review, i) => (
            <div key={i} className="bg-card border border-border rounded-lg p-6">
              <div className="flex gap-0.5 mb-3">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                ))}
              </div>
              <p className="text-sm text-foreground mb-4">"{review.text}"</p>
              <div className="text-sm font-medium text-foreground">{review.name}</div>
              <div className="text-xs text-muted-foreground">{review.location}</div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Ready to experience the AC Assurance difference?</p>
          <Button asChild size="lg">
            <a href={PHONE_LINK}><Phone className="w-5 h-5 mr-2" />Call {PHONE}</a>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default Reviews;
