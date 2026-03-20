import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    name: "Joey M.",
    location: "Cape Coral, FL",
    date: "Feb 2026",
    text: "Fantastic work! He came out to our house at like 8:30 and stayed until close to 10:00 to make sure our house was at least cooled off until he could come back the next day to do the actual repair. His pricing was super fair even when coming after hours and he was very transparent with all the work he was doing.",
  },
  {
    name: "Steve H.",
    location: "Southwest Florida",
    date: "Feb 2026",
    text: "Jason and John did an excellent job on our quote and installation. Even with a minor issue they went above and beyond what was expected to resolve it. I wish I could give them a rating higher than 5 — they deserve it.",
  },
  {
    name: "Mark J.",
    location: "Southwest Florida",
    date: "Feb 2026",
    text: "Jason and his team are the absolute best! Came highly recommended and delivered in every way possible. Look no further for your AC needs. You got a lifelong customer. I wish I could give more than 5 stars.",
  },
  {
    name: "Kathryn Y.",
    location: "Cape Coral, FL",
    date: "Feb 2026",
    text: "Great service! Local family owned business also! Very prompt, kind, personable, thorough, fixed our AC and thermostat issue. Absolutely no complaints. He was very straightforward. We will definitely call him for maintenance and any issue that comes up.",
  },
  {
    name: "Costa C.",
    location: "Southwest Florida",
    date: "Feb 2026",
    text: "Jason picked up my phone call and without hesitation solved my AC issue. Will recommend!",
  },
];

const FeaturedReviews = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % reviews.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + reviews.length) % reviews.length), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next]);

  const review = reviews[current];

  return (
    <section className="py-14 md:py-20 section-light">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-3">
          Trusted by Southwest Florida Homeowners
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-lg mx-auto">
          Real verified 5-star Google reviews from our customers.
        </p>

        <div
          className="relative max-w-2xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Card */}
          <div className="frost-card p-8 md:p-10 text-center min-h-[260px] flex flex-col justify-center">
            <div className="flex justify-center gap-0.5 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-brand-teal text-brand-teal" />
              ))}
            </div>
            <p className="text-foreground leading-relaxed mb-6 text-base">
              "{review.text}"
            </p>
            <div>
              <p className="font-heading font-bold text-sm text-foreground">{review.name}</p>
              <p className="text-xs text-muted-foreground">
                {review.location} · {review.date}
              </p>
            </div>
          </div>

          {/* Prev / Next */}
          <button
            onClick={prev}
            aria-label="Previous review"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-10 h-10 rounded-full bg-card border border-border shadow flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next review"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-10 h-10 rounded-full bg-card border border-border shadow flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to review ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === current ? "bg-brand-teal" : "bg-border hover:bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>

        {/* Google link */}
        <div className="text-center mt-8">
          <a
            href="https://www.google.com/maps/place/AC+Assurance+Cooling+%26+Heating/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-teal hover:underline"
          >
            Read All Reviews on Google
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedReviews;
