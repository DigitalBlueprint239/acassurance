

# Hero Section — "All World" Audit & Optimization Plan

## Current Grade: A-
The hero is already elite-tier for a local service business. Here's what separates it from a perfect 10.

---

## Strengths (Keep These)
- Fluid `clamp()` typography with teal glow — Apple/Stripe-tier
- One-time `sessionStorage` animation — no jank on back-navigation
- Weekend-aware urgency logic — honest, trust-building
- GPU-accelerated photo card with layered z-index — polished
- Glassmorphism trust ribbon — modern without being gimmicky
- `fetchPriority="high"` + `decoding="async"` — Core Web Vitals optimized

---

## Weaknesses & Fixes (7 Items)

### 1. Service Area Expansion (Copy & SEO) — HIGH PRIORITY
**Problem:** H1 says "Fort Myers & Cape Coral" — Naples homeowners (Collier County) bounce immediately. The subheadline says "Lee County" which excludes your Tier 1 premium market.

**Fix:**
- H1 teal span → `From Naples to Cape Coral`
- Subheadline → `Serving all of Southwest Florida with 5-star precision.`
- Alt text → `AC Assurance team providing expert HVAC services from Naples to Cape Coral and throughout Southwest Florida.`
- SEO title → `AC Repair Naples, Fort Myers & Cape Coral | AC Assurance Cooling & Heating`
- Meta description → include "Naples" as first city

### 2. Missing JSON-LD Schema on Homepage — HIGH PRIORITY
**Problem:** SEOHead accepts a `schema` prop but the homepage passes none. This is the most important page for structured data.

**Fix:** Pass a combined `LocalBusiness` + `WebSite` schema:
```tsx
schema={[
  {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: "AC Assurance Cooling & Heating",
    telephone: "(239) 365-3090",
    url: "https://www.acassurancefl.com",
    areaServed: ["Naples", "Fort Myers", "Cape Coral", "Bonita Springs", "Estero", "Lehigh Acres"],
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "50+" }
  }
]}
```

### 3. Redundant Trust Sections — MEDIUM
**Problem:** Three consecutive trust elements: trust ribbon (inside photo card) → `<TrustBadgeStrip />` → Social Proof Bar. This is trust fatigue — diminishing returns after the first one.

**Fix:** Remove the standalone Social Proof Bar (section 2, lines 131-140). The trust ribbon + TrustBadgeStrip already cover it. This tightens the page and gets users to the services grid faster.

### 4. Preload the Hero Image — MEDIUM
**Problem:** `fetchPriority="high"` helps but the browser still discovers the image late (after JS bundle parses). For an SPA, the LCP image should be preloaded in `index.html`.

**Fix:** Add to `index.html` `<head>`:
```html
<link rel="preload" as="image" href="/src/assets/hero-team-edited.jpg" type="image/jpeg" />
```

### 5. Urgency Pill — Saturday Logic Gap — LOW
**Problem:** Saturday (`day === 6`) currently falls through to the hour-based check. If you run reduced Saturday hours, promising "Same-Day" at 1pm Saturday could be dishonest.

**Fix:** Add Saturday awareness:
```tsx
const urgencyText = day === 0
  ? "Priority Monday Morning Scheduling Available"
  : day === 6
    ? "Weekend Emergency Line Open — Call Now"
    : hour < 14
      ? "Same-Day Service Available — Call before 2:00 PM"
      : "Priority Next-Day Scheduling Available";
```

### 6. CTA Micro-Optimization — LOW
**Problem:** "Get My Free Quote" scrolls to a form at the bottom. On mobile, this is a long scroll with no visual feedback that something happened.

**Fix:** Add `scroll-margin-top` to the form section and use `scroll-behavior: smooth` (already likely set). Consider adding a brief toast or the form section flashing on arrival.

### 7. Image Format — LOW
**Problem:** Hero image is `.jpg`. WebP/AVIF would reduce payload 25-40% with no quality loss, improving LCP.

**Fix:** Convert `hero-team-edited.jpg` to `.webp` and use a `<picture>` element with `.jpg` fallback. (This requires asset conversion outside Lovable.)

---

## Recommended Implementation Order

| Priority | Item | Impact |
|----------|------|--------|
| 1 | Service area copy expansion (H1, sub, alt, SEO meta) | Captures Naples market |
| 2 | Add JSON-LD homepage schema | Rich results in search |
| 3 | Remove redundant Social Proof Bar | Tighter page, less trust fatigue |
| 4 | Preload hero image in index.html | Faster LCP |
| 5 | Saturday urgency logic | Trust integrity |
| 6 | Smooth scroll feedback | Mobile UX |
| 7 | WebP image conversion | Performance (requires external tool) |

Items 1-5 can be implemented in a single pass across `src/pages/Index.tsx` and `index.html`.

