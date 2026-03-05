

## Plan: Full Conversion Architecture Upgrade

The user wants to implement the comprehensive conversion architecture from the previous plan, now with the uploaded logo image added to the project.

### Changes Summary

**1. Add Logo Image**
- Copy `user-uploads://image.png` to `src/assets/logo.png`
- Replace the CSS circle "AC" text logo in `Header.tsx` and `Footer.tsx` with the actual logo image (`<img>`)

**2. Brand System Update**
- `src/index.css` — Update CSS custom properties: Primary Navy `#0A1F3F` (216 73% 15%), Accent Teal `#00A19A` (177 100% 32%), Emergency Orange `#FF6B35` (18 100% 60%), Light Gray `#F2F4F6`. Import Montserrat + Open Sans from Google Fonts.
- `tailwind.config.ts` — Update font families to Montserrat (heading) and Open Sans (body). Add `brand-navy`, `brand-teal`, `brand-orange` tokens.

**3. Business Data Update**
- `src/data/services.ts` — Update `LICENSE` to `CAC1823832`. Add Duct Cleaning and Heating Services. Rename Commercial HVAC to Commercial Refrigeration. Total: 9 services.

**4. TopBar Update**
- `src/components/layout/TopBar.tsx` — Left: "24/7 Emergency Service | Licensed CAC1823832". Right: clickable phone number.

**5. Header Update**
- `src/components/layout/Header.tsx` — Use logo image. Add "Get a Free Quote" CTA button on right side of desktop nav.

**6. StickyMobileCTA Update**
- `src/components/layout/StickyMobileCTA.tsx` — Orange background (#FF6B35), full-width "Call Now — (239) 365-3090" tap-to-dial bar.

**7. Floating Service Button**
- Create `src/components/FloatingServiceButton.tsx` — Fixed bottom-right button that opens a Dialog containing `EstimateForm`.
- Add to `Layout.tsx`.

**8. Homepage Overhaul** (`src/pages/Index.tsx`)
Reorder and add sections:
1. **Hero** — H1: "24/7 AC Repair & Installation — Fort Myers & Cape Coral". Subheadline about licensed HVAC pros. Two CTAs: "Get My Free Quote" + "Call (239) 365-3090". Trust badges below (Licensed & Insured, 24/7 Service). Placeholder hero image note.
2. **Social Proof Bar** — Light gray band: "Trusted by Southwest Florida Homeowners ★★★★★ 5-Star Rated"
3. **Services Grid** — 9 cards with icons
4. **Why Choose Us** — 4 columns: 24/7 Emergency Response, Transparent Pricing, Licensed & Insured, Owner Led Service
5. **Reviews Section** — 3 placeholder review cards (clearly marked as placeholders to replace with real reviews) + "Read More Reviews" CTA
6. **Service Areas** — Map placeholder + cities list
7. **Financing Section** — Headline + "Learn About Financing" CTA
8. **Emergency CTA Band** — Navy background, "AC Emergency? We're On It.", Call button
9. **Service Request Form** — Existing estimate form section

**9. EstimateForm Update**
- `src/components/EstimateForm.tsx` — Add optional email field. Update service dropdown to match 9 services (including Duct Cleaning, Heating, Commercial Refrigeration).

**10. Thank You Page**
- Create `src/pages/ThankYou.tsx` — Confirmation message with phone CTA.
- `src/App.tsx` — Add `/thank-you` route.

**11. Footer Update**
- `src/components/layout/Footer.tsx` — Use logo image. Add new service links (Duct Cleaning, Heating, Commercial Refrigeration).

**12. SEO**
- `index.html` — Update title to "AC Repair Fort Myers & Cape Coral | AC Assurance Cooling & Heating". Add meta description. Add LocalBusiness JSON-LD schema with updated license.

**13. Reviews Page**
- `src/pages/Reviews.tsx` — Add 3 placeholder review cards (marked "PLACEHOLDER — Replace with real customer review") alongside the Google Reviews link.

### Files Changed
- Copy: `user-uploads://image.png` → `src/assets/logo.png`
- Edit: `src/index.css`, `tailwind.config.ts`, `src/data/services.ts`, `index.html`
- Edit: `src/components/layout/TopBar.tsx`, `Header.tsx`, `Footer.tsx`, `StickyMobileCTA.tsx`, `Layout.tsx`
- Edit: `src/components/EstimateForm.tsx`
- Edit: `src/pages/Index.tsx`, `src/pages/Reviews.tsx`
- Edit: `src/App.tsx`
- Create: `src/components/FloatingServiceButton.tsx`, `src/pages/ThankYou.tsx`

