import { Star } from "lucide-react";

const heroReviews = [
  {
    text: "Jason was incredibly professional and fixed our AC the same day we called. Highly recommend!",
    name: "Sarah M.",
    location: "Cape Coral",
  },
  {
    text: "Best HVAC company in Southwest Florida. Honest pricing, no upsells, and the job was done right.",
    name: "Mike T.",
    location: "Fort Myers",
  },
  {
    text: "Called at 8am with a broken AC in July heat. Jason was here by 10am. Lifesaver!",
    name: "Linda R.",
    location: "Naples",
  },
];

const HeroReviewCards = () => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mt-8 mb-2">
    {heroReviews.map((review) => (
      <div
        key={review.name}
        className="frost-card p-5 text-left"
      >
        <div className="flex gap-0.5 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <p className="text-sm text-foreground leading-relaxed mb-3">
          "{review.text}"
        </p>
        <p className="text-xs font-bold text-foreground">
          {review.name}{" "}
          <span className="font-normal text-muted-foreground">· {review.location}</span>
        </p>
      </div>
    ))}
  </div>
);

export default HeroReviewCards;
