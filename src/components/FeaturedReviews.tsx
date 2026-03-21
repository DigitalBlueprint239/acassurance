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
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
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
                i === current ? "bg-primary" : "bg-border hover:bg-muted-foreground/40"
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

        {/* Social Proof Badges */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
          <a
            href="https://www.google.com/search?q=ac+assurance+naples+fl+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border border-border shadow-sm rounded-full px-4 py-2 text-sm font-medium text-foreground hover:shadow-md transition-shadow active:scale-[0.97]"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Review us on Google
          </a>

          <div className="inline-flex items-center gap-2 bg-white border border-border shadow-sm rounded-full px-4 py-2 text-sm font-medium text-foreground">
            <span className="font-heading font-bold">Top Rated on Yelp</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedReviews;
