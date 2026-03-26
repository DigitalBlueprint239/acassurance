

# Local SEO Content Depth Pass

## Assessment Summary

**Strong pages (content-rich, well-structured):**
- AcRepairPage — full Signs/Process/Local/FAQs sections
- AcInstallationPage — full Signs/Process/Local/FAQs
- EmergencyAcPage — full Signs/Process/Local/FAQs
- MaintenancePage — full Signs/Process/Local/FAQs
- DuctCleaningPage — full Signs/Process/Local/FAQs + gallery
- Homepage — comprehensive, strong local relevance
- LocalLandingPages (Naples, Fort Myers, Cape Coral, etc.) — deep, localized content via `localPages.ts`

**Thin pages needing content expansion:**
1. **MiniSplitPage** — Only has title, subtitle, description, benefits, and gallery. No `signsYouNeed`, `ourProcess`, `localConcerns`, or `faqs`. This is the thinnest service page.
2. **HeatingServicesPage** — Custom layout with only a short paragraph and benefits list. No Signs/Process/Local/FAQ sections.
3. **IndoorAirQualityPage** — Custom layout with "How It Works" and benefits, but no Signs/Process/Local Concerns/FAQ sections.
4. **CommercialRefrigPage** — Custom layout with "What's at Stake" and benefits, but no Signs/Process/Local Concerns/FAQ sections.
5. **Financing** — Decent content but missing FAQ section for financing-intent searches.

**Internal linking gaps:**
- HeatingServicesPage, IAQ, and CommercialRefrig bottom CTAs lack cross-links to financing/service-areas/reviews (ServicePageShell pages have them, but these custom pages don't)
- MiniSplitPage uses ServicePageShell but has no deep content sections

---

## Implementation Plan

### 1. Expand MiniSplitPage (highest priority — thinnest page)
Add `signsYouNeed`, `ourProcess`, `localConcerns`, and `faqs` props to match other ServicePageShell pages.

- **Primary intent:** "ductless mini-split installation near me", "mini split Fort Myers"
- **FAQs (5):** Cost, how they work, garage cooling, brands, permits
- **Signs:** rooms that don't cool, garage too hot, additions without ductwork, home office comfort
- **Process:** consultation, sizing, install, testing
- **Local concerns:** Florida room cooling, garage workshops, salt air on outdoor units

### 2. Expand HeatingServicesPage
Add Signs, Process, Local Concerns, and FAQ sections below existing benefits grid (keep the custom hero layout).

- **Primary intent:** "heating repair Fort Myers", "heat pump service Cape Coral"
- **FAQs (5):** heat pump vs furnace, how often service, cold snap emergency, costs, dual-fuel
- **Signs:** uneven heating, strange smells, high bills, system won't start
- **Process:** diagnostic, quote, repair/install, testing
- **Local concerns:** Florida's mild but real winter, heat pump efficiency in SWFL, pre-season tune-ups
- Add internal links to financing + service areas in bottom CTA

### 3. Expand IndoorAirQualityPage
Add Signs, Local Concerns, and FAQ sections below existing content.

- **Primary intent:** "indoor air quality Naples", "UV light installation HVAC"
- **FAQs (5):** UV light effectiveness, HEPA vs standard filters, humidity control, allergy relief, cost
- **Signs:** musty odors, worsening allergies, visible dust, humidity issues
- **Local concerns:** Florida humidity and mold risk, post-hurricane air quality, new construction off-gassing
- Add internal links to financing + service areas in bottom CTA

### 4. Expand CommercialRefrigPage
Add Process, Local Concerns, and FAQ sections below existing content.

- **Primary intent:** "commercial refrigeration repair Fort Myers", "walk-in cooler repair Cape Coral"
- **FAQs (5):** emergency response time, brands serviced, maintenance frequency, health code compliance, cost
- **Process:** emergency call, diagnostic, transparent quote, repair, follow-up maintenance
- **Local concerns:** Florida health department requirements, hurricane prep for commercial units, coastal corrosion on rooftop units
- Add internal links to financing + service areas in bottom CTA

### 5. Add FAQ section to Financing page
- **Primary intent:** "HVAC financing Cape Coral", "AC payment plans Fort Myers"
- **FAQs (5):** credit requirements, how to apply, what's covered, timeline, impact on warranty
- Add FAQPage JSON-LD schema

### 6. Strengthen internal linking on custom-layout pages
- HeatingServicesPage, IAQ, and CommercialRefrig bottom CTAs: add same cross-link row as ServicePageShell (Financing, Service Areas, Reviews)

---

## Files Modified

| File | Change |
|------|--------|
| `src/pages/MiniSplitPage.tsx` | Add signsYouNeed, ourProcess, localConcerns, faqs + FAQPage schema |
| `src/pages/HeatingServicesPage.tsx` | Add Signs, Process, Local, FAQ sections + internal links + FAQPage schema |
| `src/pages/IndoorAirQualityPage.tsx` | Add Signs, Local, FAQ sections + internal links + FAQPage schema |
| `src/pages/CommercialRefrigPage.tsx` | Add Process, Local, FAQ sections + internal links + FAQPage schema |
| `src/pages/Financing.tsx` | Add FAQ accordion + FAQPage schema |

## Content Gaps Discovered (Future Recommendations)
- No dedicated "AC Replacement" page (distinct from installation) — high-intent search term
- No "Thermostat Installation" or "Smart Thermostat" page
- No "HVAC Service Agreements / Maintenance Plans" dedicated page
- City-specific pages exist for AC Repair but not for Installation, Maintenance, or Emergency — future expansion opportunity

