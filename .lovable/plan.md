

# Hero Section — Final Three Elite Refinements

Three surgical tweaks to the hero: descriptive alt text, weekend-aware urgency logic, and z-index layering for badge/ribbon.

## Files Changed

| File | Change |
|------|--------|
| `src/pages/Index.tsx` | Alt tag, urgency logic with day-of-week check, z-index on badge/ribbon, code cleanup |

## 1. High-Context Alt Tag (line 77)

Replace current alt with:
```
alt="AC Assurance professional HVAC team providing expert AC repair and installation in Fort Myers and Cape Coral"
```

## 2. Weekend-Aware Urgency Logic (lines 67-70)

Add dynamic logic above `return`:
```tsx
const now = new Date();
const hour = now.getHours();
const day = now.getDay(); // 0 = Sunday

const urgencyText = day === 0
  ? "Priority Monday Morning Scheduling Available"
  : hour < 14
    ? "Same-Day Service Available — Call before 2:00 PM"
    : "Priority Next-Day Scheduling Available";
```

Replace the hardcoded pill copy with `{urgencyText}`.

## 3. Z-Index Layering (lines 84, 88)

- Owner Badge: add `z-20` → `className="absolute z-20 bottom-6 right-4 md:bottom-16 md:right-12 ..."`
- Trust Ribbon: add `z-10` → `className="absolute z-10 bottom-0 left-0 right-0 ..."`

This ensures the badge floats above the ribbon on small screens where they may overlap.

## Bonus Cleanup

- Replace `&amp;` with `&` in JSX text (lines 47, 49, 85) — JSX handles `&` natively.
- Replace `⭐` emoji (line 41) with `<Star className="w-4 h-4 text-amber-500 fill-amber-500 inline" />`.
- Add `fetchpriority="high"` and `decoding="async"` to hero image (line 75).
- Apply radial gradient bg: change `bg-[hsl(210,40%,98%)]` to `bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-slate-50 to-white border-b border-slate-100`.
- Add `aria-label="Homepage Hero"` to the hero section tag.
- Add `aria-label="Get a free quote"` and `aria-label="Call AC Assurance"` to CTA buttons.
- Bump shimmer opacity from `0.08` to `0.18` in `src/index.css`.
- Implement one-time animation via `sessionStorage` check so `animate-slide-up` and `animate-scale-in` only fire on first session load.
- Update subheadline to: "SWFL's highest-rated response team. Your AC restored today, or the diagnostic is on us. Serving Lee County with 5-star precision."

