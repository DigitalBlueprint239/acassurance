

# Financing Page — Synchrony Application Link Integration

## Summary
Enhance the existing `/financing` page to include a prominent "Apply for Financing" CTA linking to the Synchrony application, while keeping phone/quote CTAs as the primary conversion path. Also update financing mentions on other pages to link back to `/financing`.

## Changes

### 1. Financing Page (`src/pages/Financing.tsx`)

**Hero section** — Update headline and subheadline:
- H1: "Flexible HVAC Financing Options"
- Subtext: "Need a new AC system or major repair? AC Assurance offers financing options to help make your comfort more affordable."

**New "Apply Now" highlight block** — Add a visually prominent card/section between the Synchrony logo block and "The Process" section containing:
- Benefit bullets: Fast online application · Convenient monthly payment options · Financing available for qualified customers · A simple way to move forward on your HVAC project
- Primary CTA: **"Apply for Financing"** button → `https://www.synchrony.com/mmc/M9236331300?sitecode=acewel401` (`target="_blank"`, `rel="noopener noreferrer"`)
- Secondary CTA: **"Call Us to Discuss Financing Options"** button (outline variant) → `tel:+12393653090`
- Disclosure text preserved: "Special financing available. Subject to credit approval. Call for details."

**Bottom CTA area** (lines 86–93) — Replace the single phone button with dual CTAs matching the pattern above (Apply primary, Call secondary).

**Keep sidebar form** unchanged — it already serves quote/consultation requests.

### 2. Other Pages — Minor CTA Updates

These pages mention financing near CTA areas. Add a small "Learn About Financing →" link pointing to `/financing` where it doesn't already exist:

| File | Current state | Change |
|------|--------------|--------|
| `src/pages/AcInstallationPage.tsx` | FAQ mentions financing | No change needed (FAQ answer is sufficient) |
| `src/pages/TraneProducts.tsx` | Has "View Financing" button already | Verify it links to `/financing` — update if needed |
| `src/pages/TraneAirConditioners.tsx` | Financing disclosure text only | Add small "Learn About Financing →" link below disclosure |
| `src/pages/TraneHeatPumps.tsx` | Financing disclosure text only | Add small "Learn About Financing →" link below disclosure |
| `src/pages/Index.tsx` | Already has "Learn About Financing" CTA linking to `/financing` | No change needed |

### 3. No compliance violations
- No rates, APRs, or payment amounts invented
- No "guaranteed approval" or "no credit check" language
- Synchrony presented as an available option, subject to credit approval
- Phone call and quote request remain the dominant CTAs site-wide

## Files modified
- `src/pages/Financing.tsx` — Main overhaul (new headline, Apply CTA, dual buttons)
- `src/pages/TraneAirConditioners.tsx` — Add financing page link
- `src/pages/TraneHeatPumps.tsx` — Add financing page link

