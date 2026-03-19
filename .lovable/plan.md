

# Elite Transformation Roadmap

A prioritized audit across Visual Authority, Technical SEO, Trust Engine, and Conversion Flow.

---

## Quick Wins (1-2 hours each)

### QW1. Semantic HTML Upgrade
**Pillar**: Technical SEO
**Problem**: The site uses generic `<section>` tags everywhere with no `<article>`, `<aside>`, or `<nav>` landmarks in page content. The `<main>` tag exists in Layout but inner pages lack semantic structure. Service pages, blog posts, and the About page should use `<article>` for primary content and `<aside>` for sidebar forms.
**Fix**: Wrap primary content blocks in `<article>`, sidebar estimate forms in `<aside>`, and add `aria-label` attributes to key sections for accessibility scoring.

### QW2. Image Performance — WebP/AVIF + Explicit Dimensions
**Pillar**: Technical SEO / CWV
**Problem**: All images (hero, work photos) are served as `.jpg`/`.png` with no `width`/`height` attributes, causing layout shift (poor CLS). The hero image (`hero-team-edited.jpg`) loads eagerly but has no explicit dimensions.
**Fix**: Add `width` and `height` attributes to all `<img>` tags. Convert work photos to WebP using Vite's image optimization plugin or serve from a CDN with format negotiation. Add `fetchpriority="high"` to the hero image.

### QW3. Meta Description — Stop Using "Lovable Generated Project"
**Pillar**: Technical SEO
**Problem**: The `index.html` still has `<meta name="description" content="Lovable Generated Project" />` as the default. While SEOHead overrides it client-side, search engine crawlers that don't execute JS will see this default. The og:description and twitter:description also say "Lovable Generated Project."
**Fix**: Update `index.html` default meta description, og:description, and twitter:description to the actual homepage description.

### QW4. Consistent Section Spacing & White Space
**Pillar**: Visual Authority
**Problem**: Sections alternate between `py-14 md:py-20` and `py-12 md:py-16` inconsistently. The Trane section and Proof of Work section both use `bg-background` back-to-back with no visual separation — they blend into one block.
**Fix**: Standardize section padding to `py-16 md:py-24` for major homepage sections. Add alternating backgrounds consistently (white → slate → white → slate) so each section is visually distinct.

### QW5. Trust Badge Strip Redundancy
**Pillar**: Trust Engine / Visual Authority
**Problem**: The hero already has a trust ribbon at the bottom of the photo (Licensed, 5-Star, BBB, 24/7). Immediately below that, `TrustBadgeStrip` shows nearly identical badges (Independent Trane Dealer, Licensed & Insured, Serving SWFL, Emergency AC Service). Then below *that*, the Social Proof Bar shows "5-Star Rated" again. Three trust strips in a row dilutes impact.
**Fix**: Merge into two: (1) Keep the hero ribbon with the current 4 badges. (2) Combine TrustBadgeStrip + Social Proof Bar into one slim "proof bar" that shows the Google review count/rating + Trane Dealer + License number in a single clean row. Remove the redundant section.

### QW6. Form Select Styling
**Pillar**: Visual Authority
**Problem**: The `<select>` elements in `EstimateForm` use raw HTML styling (`h-10`) while `<Input>` uses `h-12 md:h-10`. The select has no rounded corners matching the design system. On mobile, the select looks different from inputs.
**Fix**: Match select height and styling to the Input component: `h-12 md:h-10 rounded-md`.

---

## Structural Changes (Half-day each)

### SC1. Add Service-Specific JSON-LD Schema to Each Service Page
**Pillar**: Technical SEO
**Problem**: Only the homepage has LocalBusiness JSON-LD. Individual service pages (AC Repair, Emergency Service, etc.) have no structured data. Competitors with Service schema on each page will outrank in rich results.
**Fix**: Extend `SEOHead` to accept an optional `schema` prop. For each `ServicePage`, inject a `Service` schema with `name`, `description`, `provider` (linking back to the LocalBusiness), `areaServed`, and `offers`. For the Reviews page, add `AggregateRating` schema.

### SC2. Blog Post Schema + Article Markup
**Pillar**: Technical SEO
**Problem**: Blog posts have no `Article` or `BlogPosting` JSON-LD schema. No `datePublished`, `author`, or `publisher` markup. This means zero eligibility for Google's article rich results.
**Fix**: Add `BlogPosting` JSON-LD to each blog post with `headline`, `datePublished`, `author`, `publisher`, and `image`.

### SC3. Review Schema — AggregateRating
**Pillar**: Technical SEO / Trust Engine
**Problem**: Reviews are displayed as static text with no structured data. Google cannot surface star ratings in search results.
**Fix**: Add `AggregateRating` JSON-LD to the Reviews page and the homepage ReviewSection. Include `ratingValue: 5`, `reviewCount: [actual count]`, `bestRating: 5`.

### SC4. Micro-Interactions & Hover Polish
**Pillar**: Visual Authority
**Problem**: Service cards have basic `hover:shadow-md` transitions. Work photo cards have no hover state. Review cards are static. There are no scroll-triggered animations on any section.
**Fix**:
- Service cards: Add `hover:-translate-y-1 transition-all duration-300` for a subtle lift effect.
- Work photos: Add `hover:scale-105` on the image with `overflow-hidden` on container (already present).
- Add `IntersectionObserver`-based fade-in animation to section headings and content blocks using the existing `animate-fade-in` keyframe.

### SC5. CTA Flow Optimization — Reduce Form Friction
**Pillar**: Conversion & Flow
**Problem**: The estimate form has 5-7 fields visible immediately. On mobile, this is intimidating before the user has committed psychologically. The form CTA says "Schedule Service" which implies commitment — too much friction for a first touch.
**Fix**:
- Change the form button text to "Get My Free Quote" (matches hero CTA language for consistency).
- Consider a 2-step form: Step 1 shows only Name + Phone + Service (3 fields). Step 2 (after clicking "Next") shows Email, Message, How Did You Hear. This reduces perceived effort.
- Add a micro-copy line below the button: "No obligation. We typically respond within 1 hour."

### SC6. Sticky Desktop CTA Bar
**Pillar**: Conversion & Flow
**Problem**: On desktop, the header CTA ("Get a Free Quote") links to `/contact#estimate-form` — navigating away from the current page. The `ScrollCallReminder` only appears after 50% scroll and is dismissible. Once dismissed, there's no persistent CTA on desktop.
**Fix**: Add a slim sticky bar that appears on desktop after scrolling past the hero (using IntersectionObserver). Contains the phone number and a "Get a Free Quote" button that smooth-scrolls to the form on the homepage, or navigates to `/contact` on other pages.

### SC7. About Page — Replace Placeholder
**Pillar**: Trust Engine
**Problem**: The About page has a literal "PHOTO PLACEHOLDER — Owner/Team" text block where the owner photo should be. This destroys credibility instantly.
**Fix**: Use the existing `hero-owner-jason.jpg` or `hero-owner.jpg` asset. Display as a professional headshot with rounded corners and a subtle border.

### SC8. Footer Service Area Links
**Pillar**: Technical SEO
**Problem**: Footer service area list shows city names but none are linked (only the homepage service area pills have links). These are missed internal link opportunities for local landing pages.
**Fix**: Link each footer service area to its corresponding local landing page where one exists (Naples, Fort Myers, Cape Coral).

---

## Deep Structural Changes (1+ day each)

### DS1. Pre-render / SSG for SEO-Critical Pages
**Pillar**: Technical SEO
**Problem**: The entire site is a client-side SPA. Google's JS rendering queue means pages may take days/weeks to be indexed. Meta tags are set via `useEffect` in `SEOHead`, meaning crawlers that don't execute JS see the default `index.html` meta tags ("Lovable Generated Project"). This is the single biggest SEO vulnerability.
**Fix**: Add `vite-plugin-prerender` (or `react-snap`) to pre-render critical pages at build time. Priority pages: `/`, `/services`, all service slugs, all local landing pages, `/about`, `/contact`, `/reviews`, `/blog`, and all blog posts. This generates static HTML with correct meta tags, canonical URLs, and JSON-LD baked in.

### DS2. FAQ Schema + Accordion Section
**Pillar**: Technical SEO / Trust Engine
**Problem**: No FAQ content on any page. FAQ schema is one of the easiest rich result types to earn and drives significant click-through from SERPs for HVAC queries like "how much does AC repair cost in Fort Myers."
**Fix**: Add an FAQ accordion section to the homepage (between Reviews and Service Areas) and to each service page. Use the existing `accordion` component. Inject `FAQPage` JSON-LD schema. Content should target long-tail local queries.

### DS3. Performance — Font Loading Strategy
**Pillar**: Technical SEO / CWV
**Problem**: Google Fonts are loaded via render-blocking `<link>` tags in `<head>`. Two font families (Montserrat 5 weights + Open Sans 4 weights) = 9 font files. This impacts LCP and FCP.
**Fix**: Add `font-display: swap` (already handled by Google Fonts URL). Subset to only Latin characters. Preload the two most critical weights (Montserrat 700 and Open Sans 400). Consider self-hosting fonts to eliminate the DNS lookup to `fonts.googleapis.com`.

### DS4. Sitemap — Add `lastmod`, `changefreq`, `priority`
**Pillar**: Technical SEO
**Problem**: The sitemap lists URLs with no `lastmod`, `changefreq`, or `priority` attributes. This gives Google no crawl prioritization hints.
**Fix**: Add these attributes. Homepage and service pages get `priority="1.0"` and `changefreq="weekly"`. Blog posts get `priority="0.6"` and `changefreq="monthly"`. Local landing pages get `priority="0.8"`.

---

## Priority Execution Order

| Priority | Item | Impact | Effort |
|----------|------|--------|--------|
| 1 | QW3 — Fix default meta descriptions | Critical SEO | 5 min |
| 2 | SC7 — Replace About page placeholder | Critical Trust | 10 min |
| 3 | QW5 — Merge redundant trust strips | Visual polish | 30 min |
| 4 | QW2 — Image dimensions + fetchpriority | CWV / CLS | 30 min |
| 5 | SC3 — AggregateRating schema | SEO rich results | 45 min |
| 6 | SC1 — Service page JSON-LD | SEO rich results | 1 hr |
| 7 | SC5 — Form friction reduction | Conversion | 1 hr |
| 8 | QW1 — Semantic HTML | SEO / Accessibility | 1 hr |
| 9 | SC4 — Micro-interactions | Visual Authority | 1 hr |
| 10 | SC8 — Footer links | Internal linking | 15 min |
| 11 | QW4 — Section spacing | Visual consistency | 30 min |
| 12 | DS2 — FAQ schema + accordions | SEO rich results | 2 hr |
| 13 | DS1 — Pre-rendering | Critical SEO | 3 hr |
| 14 | DS4 — Sitemap attributes | SEO signals | 15 min |
| 15 | DS3 — Font optimization | CWV | 1 hr |

