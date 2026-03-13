

## Phase 2: Local SEO Authority Layer — Implementation Plan

### Overview

Create 11 local landing pages (5 Naples Tier 1 + 6 Tier 2), a shared data file and reusable page component, update routing/sitemap/service areas/homepage.

### Files to Create

#### 1. `src/data/localPages.ts` (~2500 lines)

Central data file with typed interfaces and all 11 page content objects:

```typescript
interface LocalPageSection {
  type: 'paragraph' | 'bullet-list' | 'subheading' | 'cta-block' | 'internal-link-block' | 'location-list' | 'map-embed' | 'trust-signals';
  heading?: string;
  content?: string;
  items?: string[];
  links?: { label: string; to: string }[];
  locations?: string[]; // for location-list type
}

interface LocalPageFAQ { question: string; answer: string; }

interface LocalPageData {
  slug: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  heroParagraph: string;
  tier: 1 | 2;
  ctaType: 'standard' | 'urgent';
  sections: LocalPageSection[];
  faq: LocalPageFAQ[];
  internalLinks: { label: string; to: string }[];
  jsonLd: { serviceType: string; areaServed: string; };
}
```

**Naples Tier 1 pages** (1500–2000 words each, premium tone):
- `/ac-repair-naples` — luxury coastal homes, salt air corrosion, humidity diagnostics
- `/ac-installation-naples` — oversized homes, multi-zone systems, high-SEER, financing
- `/ac-replacement-naples` — aging systems in coastal environments, repair vs replace, financing
- `/emergency-ac-repair-naples` — urgent tone, 24/7 availability, seasonal residents
- `/mini-split-installation-naples` — pool houses, guest suites, additions, zone control

Each Naples page includes a `location-list` section with neighborhoods (Pelican Bay, Park Shore, Old Naples, Port Royal, Grey Oaks, Vanderbilt Beach, etc.)

**Tier 2 pages** (900–1200 words each):
- `/ac-repair-cape-coral` — replaces generic ServicePage version
- `/ac-repair-fort-myers` — urban/suburban, older homes
- `/ac-installation-cape-coral` — canal homes, new construction
- `/ac-replacement-fort-myers` — aging systems, efficiency upgrades
- `/mini-split-installation-cape-coral` — garages, additions
- `/emergency-ac-repair-cape-coral` — urgent tone, island geography

#### 2. `src/pages/LocalLandingPage.tsx` (~200 lines)

Reusable component that:
1. Reads slug from `useParams`, finds matching page in `localPages` array
2. Falls back to `NotFound` if slug not found
3. Renders sections in order:

**Hero** — `section-navy` background, H1, intro paragraph, dual CTAs (Request Estimate + Call Now). Emergency pages get red/urgent accent styling.

**Content Body** — Two-column layout (matching existing `ServicePage` pattern): content left (`lg:col-span-2`), sticky `EstimateForm` sidebar right. Renders sections by type:
- `paragraph` → H2 heading + paragraph text
- `bullet-list` → H2 + `<ul>` with check icons (matches ServicePage style)
- `subheading` → H3
- `location-list` → H2 + grid of neighborhood names with MapPin icons
- `trust-signals` → 4-column grid with Shield/Clock/BadgeCheck icons
- `cta-block` → mid-page conversion band
- `internal-link-block` → card grid linking to related pages
- `map-embed` → Google Maps iframe embed for service area

**FAQ Accordion** — Uses existing Radix `Accordion` component. Content rendered as standard HTML in DOM (crawlable).

**Internal Link Cards** — Grid of related page links at bottom of content.

**CTA Band** — Full-width navy section with Call Now + Request Estimate + financing mention.

**JSON-LD** — `useEffect` injects `HVACBusiness` structured data per page with `areaServed`, `serviceType`, business name, phone.

### Files to Modify

#### 3. `src/App.tsx`
Add 11 explicit routes before the `/:slug` catch-all:
```
/ac-repair-naples
/ac-installation-naples
/ac-replacement-naples
/emergency-ac-repair-naples
/mini-split-installation-naples
/ac-repair-cape-coral          (overrides existing ServicePage)
/ac-repair-fort-myers
/ac-installation-cape-coral
/ac-replacement-fort-myers
/mini-split-installation-cape-coral
/emergency-ac-repair-cape-coral
```
All route to `<LocalLandingPage />`.

#### 4. `src/data/services.ts`
Reorder `serviceAreas` array — Naples first (set `primary: true`), then Cape Coral, Fort Myers, rest unchanged.

#### 5. `src/pages/ServiceAreas.tsx`
- Update title/description to mention Naples first
- Add city sections with H2 headings: Naples (first), Fort Myers, Cape Coral, then others
- Each city section includes brief description + links to its local landing pages
- Naples section highlights luxury market positioning

#### 6. `src/pages/Index.tsx`
- Area badges section (line 182-195): convert `<span>` elements to `<Link>` components pointing to city repair pages
- Naples listed first in display order (driven by reordered `serviceAreas` data)

#### 7. `public/sitemap.xml`
Add 11 new URLs:
```xml
<url><loc>https://www.acassurancefl.com/ac-repair-naples</loc></url>
<url><loc>https://www.acassurancefl.com/ac-installation-naples</loc></url>
<url><loc>https://www.acassurancefl.com/ac-replacement-naples</loc></url>
<url><loc>https://www.acassurancefl.com/emergency-ac-repair-naples</loc></url>
<url><loc>https://www.acassurancefl.com/mini-split-installation-naples</loc></url>
<url><loc>https://www.acassurancefl.com/ac-repair-fort-myers</loc></url>
<url><loc>https://www.acassurancefl.com/ac-installation-cape-coral</loc></url>
<url><loc>https://www.acassurancefl.com/ac-replacement-fort-myers</loc></url>
<url><loc>https://www.acassurancefl.com/mini-split-installation-cape-coral</loc></url>
<url><loc>https://www.acassurancefl.com/emergency-ac-repair-cape-coral</loc></url>
<url><loc>https://www.acassurancefl.com/ac-repair-cape-coral</loc></url>
```
Note: `/ac-repair-cape-coral` already exists in sitemap — no duplicate.

### SEO Titles & Meta Descriptions

| Page | SEO Title | Meta Description |
|------|-----------|-----------------|
| /ac-repair-naples | AC Repair Naples, FL \| Trusted HVAC Service \| AC Assurance | Professional AC repair in Naples, FL. Fast diagnostics, honest pricing, and reliable service for coastal and luxury homes. Call AC Assurance today. |
| /ac-installation-naples | AC Installation Naples, FL \| New System Estimates \| AC Assurance | Need a new AC system in Naples? Expert installation, load calculations, and financing for Southwest Florida homes. |
| /ac-replacement-naples | AC Replacement Naples, FL \| Upgrade Your Comfort \| AC Assurance | Replace your aging AC system in Naples with a high-efficiency upgrade. Professional replacement and flexible financing. |
| /emergency-ac-repair-naples | Emergency AC Repair Naples, FL \| 24/7 Service \| AC Assurance | AC emergency in Naples? 24/7 emergency AC repair for urgent cooling failures. Call now for fast response. |
| /mini-split-installation-naples | Mini Split Installation Naples, FL \| Ductless Comfort \| AC Assurance | Install a ductless mini split in your Naples home. Ideal for additions, pool houses, and guest suites. |
| /ac-repair-cape-coral | AC Repair Cape Coral, FL \| Same-Day Service \| AC Assurance | Need AC repair in Cape Coral? Fast diagnostics, honest service, and reliable repairs. Call today. |
| /emergency-ac-repair-cape-coral | Emergency AC Repair Cape Coral, FL \| 24/7 Help \| AC Assurance | AC emergency in Cape Coral? Fast emergency AC repair for urgent cooling issues. Call now. |
| /ac-repair-fort-myers | AC Repair Fort Myers, FL \| Trusted Local Service \| AC Assurance | Looking for AC repair in Fort Myers? Reliable diagnostics, repair, and same-day service. |
| /ac-installation-cape-coral | AC Installation Cape Coral, FL \| New System Estimates \| AC Assurance | New AC system in Cape Coral? Professional installation, sizing, and financing available. |
| /ac-replacement-fort-myers | AC Replacement Fort Myers, FL \| Upgrade Your System \| AC Assurance | Replace your aging AC in Fort Myers. Professional replacement and financing from AC Assurance. |
| /mini-split-installation-cape-coral | Mini Split Installation Cape Coral, FL \| Ductless Comfort \| AC Assurance | Ductless mini split in Cape Coral. Great for additions, garages, and targeted comfort. |

### Internal Linking Map

- Naples pages cross-link to each other + Fort Myers/Cape Coral equivalents
- All pages link to `/contact`, `/financing`
- Emergency pages use `ctaType: 'urgent'`
- Installation/replacement pages mention Synchrony financing
- Service Areas page links to all 11 local pages
- Homepage area badges become clickable links

### What Won't Change
- Existing UI/design system, CSS, component library
- SEOHead component logic
- Canonical system, robots.txt
- Existing generic service pages (except `/ac-repair-cape-coral` route override)
- Blog pages (blog-to-local-page linking deferred to content phase)

