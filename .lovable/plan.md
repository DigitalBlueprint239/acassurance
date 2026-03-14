

## Phase 3: Conversion Engine Implementation

### Files to Create (5)

**1. `src/components/StickyCallBar.tsx`**
- Mobile-only (`md:hidden`), fixed bottom, full-width two-button bar
- Left: Phone icon + "Call Now" → `tel:+12393653090`
- Right: FileText icon + "Request Estimate" → checks for `#estimate-form` on page, falls back to `/contact`
- Navy bg (`section-navy`), white text, `py-3`, shadow-lg, z-50
- Hidden on `/thank-you` via `useLocation().pathname`
- Safe bottom padding (`pb-safe` or equivalent)

**2. `src/components/TrustBadgeStrip.tsx`**
- 4 badges: Shield → "Independent Trane Dealer", BadgeCheck → "Licensed & Insured", MapPin → "Serving Southwest Florida", AlertTriangle → "Emergency AC Service Available"
- `grid grid-cols-2 md:grid-cols-4 gap-4` with icon + label centered in each cell
- Light bg section with subtle border bottom

**3. `src/components/ReviewSection.tsx`**
- Heading: "Trusted by Southwest Florida Homeowners"
- Local data array of 5 reviews: `{ text, name, city, rating: 5 }`
- Card grid: 1 col mobile, 3 col desktop, each card has 5 yellow stars, quote text, "— Name, City"
- Soft shadow cards, clean typography

**4. `src/components/EmergencyCallout.tsx`**
- `section-navy` dark section
- H2: "AC Not Cooling?"
- Subtext: "Fast diagnostic service available across Southwest Florida."
- Two buttons: Call Now (tel link) + Request Service (link to `/contact` or `#estimate-form`)

**5. `src/components/ScrollCallReminder.tsx`**
- Desktop only (`hidden md:block`)
- Fixed bottom-right floating card, appears after 50% scroll
- "Need AC Service?" heading, Call Now + Request Estimate buttons
- X close button, dismissible via state
- z-30 to stay below sticky bar/floating button

### Files to Modify (6)

**6. `src/components/layout/Layout.tsx`** (line 4, 19)
- Replace `StickyMobileCTA` import → `StickyCallBar`
- Swap component usage on line 19

**7. `src/pages/Index.tsx`**
- Import TrustBadgeStrip, ReviewSection, EmergencyCallout, ScrollCallReminder
- After hero (line 70): insert `<TrustBadgeStrip />`
- Line 47: change "Get My Free Quote" → "Request Estimate"
- Lines 182-193: replace existing review stub with `<ReviewSection />`
- Lines 236-247: replace emergency CTA band content with `<EmergencyCallout />`
- Add `<ScrollCallReminder />` before closing `</Layout>`

**8. `src/pages/LocalLandingPage.tsx`**
- Import TrustBadgeStrip, ScrollCallReminder, EmergencyCallout
- After hero section (line 192): insert `<TrustBadgeStrip />`
- Before closing `</Layout>` (line 262): add `<ScrollCallReminder />`
- Conditionally render `<EmergencyCallout />` when slug starts with "emergency-" — insert before the CTA band section

**9. `src/pages/TraneAirConditioners.tsx`**
- Import TrustBadgeStrip, ScrollCallReminder
- After hero section: insert `<TrustBadgeStrip />`
- Before closing `</Layout>`: add `<ScrollCallReminder />`

**10. `src/pages/TraneHeatPumps.tsx`**
- Same as TraneAirConditioners

**11. `src/components/EstimateForm.tsx`**
- Line ~101: Change input className from `bg-background` to add mobile height: `h-12 md:h-10 bg-background`
- Line ~114: Change submit button text "Submit Request" → "Schedule Service"

### Not Changed
localPages.ts, SEOHead, sitemap, robots.txt, routing, Layout/Header/Footer architecture, Trane page content structure, canonicals.

