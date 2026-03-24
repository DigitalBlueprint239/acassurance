import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface Review {
  text: string;
  name: string;
  city: string;
  rating: number;
}

const reviews: Review[] = [
  {
    text: "AC went out on a Saturday afternoon and they had a tech out within two hours. Professional, honest, and fair pricing. Highly recommend.",
    name: "Local Homeowner",
    city: "Cape Coral",
    rating: 5,
  },
  {
    text: "Installed a new Trane system for our home. The crew was on time, clean, and explained everything clearly. Our electric bill dropped noticeably.",
    name: "Jennifer",
    city: "Fort Myers",
    rating: 5,
  },
  {
    text: "Best HVAC company we've used since moving to Florida. They diagnosed an issue two other companies missed. Honest and knowledgeable.",
    name: "Robert",
    city: "Naples",
    rating: 5,
  },
  {
    text: "Had a mini-split installed in our garage. Great work, clean installation, and reasonable price. Will use them again for sure.",
    name: "David",
    city: "Estero",
    rating: 5,
  },
  {
    text: "Called for a maintenance tune-up and they found a potential problem before it became expensive. Saved us money and headaches. Very trustworthy.",
    name: "Susan",
    city: "Bonita Springs",
    rating: 5,
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5 mb-3">
    {[...Array(rating)].map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
    ))}
  </div>
);

const ReviewSection = () => (
  <section className="py-14 md:py-20 section-light">
    <div className="container">
      <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-3">
        Trusted by Southwest Florida Homeowners
      </h2>
      <p className="text-center text-muted-foreground mb-10 max-w-lg mx-auto">
        See why homeowners across Southwest Florida choose AC Assurance for their HVAC needs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        {reviews.slice(0, 3).map((review) => (
          <div key={review.name} className="frost-card p-6 hover:shadow-md hover:shadow-primary/10 hover:border-primary/30 transition-all">
            <StarRating rating={review.rating} />
            <p className="text-sm text-foreground leading-relaxed mb-4">"{review.text}"</p>
            <p className="text-xs font-heading font-bold text-muted-foreground">
              — {review.name}, {review.city}
            </p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl mx-auto mb-8">
        {reviews.slice(3).map((review) => (
          <div key={review.name} className="frost-card p-6 hover:shadow-md hover:shadow-primary/10 hover:border-primary/30 transition-all">
            <StarRating rating={review.rating} />
            <p className="text-sm text-foreground leading-relaxed mb-4">"{review.text}"</p>
            <p className="text-xs font-heading font-bold text-muted-foreground">
              — {review.name}, {review.city}
            </p>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Button asChild size="lg" variant="outline">
          <Link to="/reviews">Read More Reviews <ArrowRight className="w-4 h-4 ml-2" /></Link>
        </Button>
      </div>
    </div>
  </section>
);

export default ReviewSection;
