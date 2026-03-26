

# Conversion Rate Optimization Pass

## Key Findings

**What's already strong:** Sticky mobile CTA bar, exit-intent popup with form, scroll reminder on desktop, urgency pill with time-based logic, strong review carousel, comparison table vs competitors.

**Conversion weaknesses identified:**

1. **EstimateForm lacks reassurance copy** — No friction-reducing text near submit button (e.g. "No obligation. We typically respond within 1 hour."). Form heading on Contact page says generic "Send Us a Message" instead of benefit-driven copy.
2. **ServicePageShell hero CTAs link to /contact** — Should scroll to inline form or use anchor to #estimate-form on same page. Adds unnecessary navigation friction.
3. **ServicePageShell has no inline form** — After all the content sections, user hits a bottom CTA that sends them away. Should embed a form directly on service pages.
4. **Homepage hero subtitle mentions "diagnostic is on us"** — Per memory, this promise was removed. Needs cleanup.
5. **Contact page form area has no trust cues** — No reassurance badges, response time promise, or micro-copy near form.
6. **WhyDifferent "Trane Certified Dealer" text** — Must say "Independent Trane Dealer" per brand compliance.
7. **StickyCallBar appears only after 15% scroll** — Should appear immediately on service/emergency pages where intent is highest.
8. **Emergency pathway not prominent enough from homepage** — EmergencyCallout section headline "AC Not Cooling?" is good but buried deep in the page. No emergency link in header nav.
9. **Financing page form heading says "Request a Financing Consultation"** — Should be warmer/lower-friction.

---

## Implementation Plan

### 1. Add micro-copy and trust cues to EstimateForm
- Add reassurance text below submit button: "No obligation. We typically respond within 1 hour."
- Add small trust line: "Licensed (CAC1823832) · Insured · BBB Accredited"

### 2. Improve Contact page form wrapper
- Change heading from "Send Us a Message" to "Request Service — Free Estimate"
- Add subtext: "Tell us what's going on and we'll get back to you fast. No obligation."

### 3. Add inline EstimateForm to ServicePageShell
- Insert a form section before the bottom navy CTA bar
- Heading: "Request [Service Type] Service" with reassurance copy
- Uses `id="estimate-form"` so hero CTAs scroll to it instead of navigating to /contact
- Change hero CTA from `Link to="/contact"` to `a href="#estimate-form"`

### 4. Fix homepage hero subtitle
- Remove "or the diagnostic is on us" per business memory
- Replace with: "SWFL's highest-rated response team. Fast, honest AC service across Southwest Florida."

### 5. Fix WhyDifferent brand compliance
- Change "Trane Certified Dealer" → "Independent Trane Dealer"

### 6. Show StickyCallBar immediately on high-intent pages
- On `/emergency-ac-repair`, `/ac-repair-*`, and `/contact` routes, show the bar without the 15% scroll threshold

### 7. Improve Financing page form heading
- Change "Request a Financing Consultation" → "Get Your Free Estimate"
- Add subtext: "We'll help you find the right system and payment plan."

### 8. Strengthen form CTA button text contextually
- Add optional `ctaLabel` prop to EstimateForm
- Default: "Schedule Service"
- Contact page: "Send My Request"
- Financing page: "Get My Free Estimate"
- Service pages: "Request Service"

### 9. Add emergency quick-link to header
- Add a small "Emergency?" link with phone icon in the desktop header nav area, styled distinctly (e.g. text-red/accent)

---

## Files Modified

| File | Change |
|------|--------|
| `src/components/EstimateForm.tsx` | Add reassurance micro-copy below submit, add `ctaLabel` prop |
| `src/components/ServicePageShell.tsx` | Add inline form section, change hero CTA to anchor scroll |
| `src/pages/Contact.tsx` | Improve form heading and subtext |
| `src/pages/Index.tsx` | Fix hero subtitle copy |
| `src/pages/Financing.tsx` | Improve form heading and subtext |
| `src/components/WhyDifferent.tsx` | Fix "Trane Certified" → "Independent Trane Dealer" |
| `src/components/StickyCallBar.tsx` | Show immediately on high-intent routes |
| `src/components/layout/Header.tsx` | Add emergency quick-link |

