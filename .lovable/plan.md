

# Trane Co-Op Compliance Build (TR-1 through TR-6)

## TR-1: Trane Dealer Badge on Homepage

**File:** `src/pages/Index.tsx`

Replace the existing Trane section (lines 211-230) with a white card featuring a teal left border. Left side: "TRANE" in bold dark navy all-caps. Right side: headline, body text, italic tagline "It's Hard To Stop A Trane®", and "View Trane Products" button linking to `/trane-products`. Also keep the existing links to `/trane-air-conditioners` and `/trane-heat-pumps`.

Move this section up to appear between the TrustBar/TrustBadgeStrip (line 159) and the Services Grid (line 162).

## TR-2: Build `/trane-products` Page

**New file:** `src/pages/TraneProducts.tsx`

Full page with 5 sections:
- Hero: title, subtitle, two CTA buttons (quote + call)
- "Why Trane?" 4-card grid: Florida Climate, Efficiency, Reliability ("It's Hard To Stop A Trane®"), Warranty
- "Our Trane Product Line" 3-card grid: Central AC, Heat Pumps, Air Handlers — each with "Request a Quote" button linking to `/contact`
- "Current Trane Promotions" with Synchrony disclaimer: "Convenient monthly payment options available through Synchrony Financial. Special financing available — subject to credit approval. Call for details."
- Bottom CTA: "Ready to Upgrade to a Trane System?" with estimate button

**File:** `src/App.tsx` — Add route `/trane-products` with lazy import.

**File:** `src/components/layout/Header.tsx` — Add "Trane Systems" nav link (to `/trane-products`) after "Services" in the navLinks array.

## TR-3: New Trane Blog Post

**File:** `src/data/blog.ts`

Prepend one new blog post:
- Slug: `why-ac-assurance-chooses-trane`
- Title: "Why AC Assurance Chooses Trane for Southwest Florida Homes"
- Date: March 5, 2026
- ~400 words covering Florida climate durability, "It's Hard To Stop A Trane®" philosophy, product benefits, Independent Trane Dealer pride
- Every tagline mention includes ®

## TR-4: Fix Financing Language

5 locations to update:

| File | Line | Current | Replacement |
|------|------|---------|-------------|
| `src/pages/Index.tsx` | 298 | "Affordable monthly payment plans...Don't let budget stop you from staying comfortable." | "Convenient monthly payment plans through Synchrony Financial. Special financing available. Subject to credit approval. Call for details." |
| `src/pages/Financing.tsx` | 12 | "Affordable HVAC financing" in meta description | "Convenient HVAC financing" |
| `src/pages/About.tsx` | 34 | "honest, affordable, and done right" | "honest, dependable, and done right" |
| `src/data/localPages.ts` | 874 | "make new AC installations affordable" | "make new AC installations manageable" |
| `src/data/blog.ts` | 64 | "make a new AC system affordable" | "make a new AC system manageable" |

## TR-5: Add ® to All Trane Tagline Mentions

No existing instances of "It's Hard To Stop A Trane" found in the codebase. All new instances created in TR-1, TR-2, and TR-3 will include ® from the start. No additional changes needed.

## TR-6: Footer Trane Badge

**File:** `src/components/layout/Footer.tsx`

Below the logo section (line 15, after `License #{LICENSE}`), add a small pill badge:
- Text: "Independent Trane Dealer | It's Hard To Stop A Trane®"
- Style: `text-xs opacity-60 mt-2 inline-block bg-primary-foreground/10 rounded-full px-3 py-1`

---

## Files Summary

| Action | File |
|--------|------|
| Edit | `src/pages/Index.tsx` (TR-1, TR-4) |
| Edit | `src/components/layout/Header.tsx` (TR-2) |
| Edit | `src/components/layout/Footer.tsx` (TR-6) |
| Edit | `src/pages/Financing.tsx` (TR-4) |
| Edit | `src/pages/About.tsx` (TR-4) |
| Edit | `src/data/localPages.ts` (TR-4) |
| Edit | `src/data/blog.ts` (TR-3, TR-4) |
| Edit | `src/App.tsx` (TR-2) |
| Create | `src/pages/TraneProducts.tsx` (TR-2) |

Total: 8 edited files, 1 new file.

