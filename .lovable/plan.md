

## Full Site Audit: AC Assurance Cooling & Heating

After reviewing every file in the project, here is a comprehensive list of upgrades organized by priority.

---

### A. Critical Conversion Issues

1. **"Get a Free Quote" header CTA links to `#estimate-form` anchor** — This only works on pages that have that anchor (Homepage, Contact, Financing, Service pages). On About, Blog, Reviews, and Service Areas pages, clicking it does nothing. Should link to `/contact#estimate-form` or open the FloatingServiceButton modal instead.

2. **Mobile menu "Get a Free Quote" has the same broken anchor problem** — Same fix needed in the mobile nav.

3. **Service page forms lack `showMessage` and `showHearAboutUs`** — The sidebar EstimateForm on service pages and financing page only collects name/phone/email/service. Missing the message field and tracking dropdown that the homepage and contact page have.

4. **No redirect to /thank-you after form submission** — The EstimateForm shows a toast but doesn't navigate to the Thank You page that was created. Should use `useNavigate()` to redirect on success.

5. **`text-brand-green` used on ServicePage and Financing checkmarks** — This color token doesn't exist in the theme. The CheckCircle2 icons render with no visible color. Should be `text-accent` or `text-brand-teal`.

---

### B. SEO & Meta Gaps

6. **No per-page `<title>` or `<meta description>`** — Only the global `index.html` has meta tags. Every page should set its own title/description via `document.title` or a `<Helmet>`-style component (react-helmet-async). Service pages especially need unique titles like "AC Repair Fort Myers & Cape Coral | AC Assurance".

7. **No `rel="noopener noreferrer"` on external links** — The Google Reviews link has it, but the OG image still points to `lovable.dev/opengraph-image`. Should be replaced with a branded image or placeholder.

8. **Missing schema markup for Service pages** — Individual service pages should have `Service` schema. The global LocalBusiness schema is good but could add `sameAs` for social profiles.

9. **Canonical URL hardcoded to `acassurancefl.com`** — Fine if that's the production domain, but should be verified.

---

### C. UX & Design Polish

10. **NotFound page doesn't use Layout** — It renders a bare div without header, footer, TopBar, or navigation. User is stranded with no nav, CTA, or branding.

11. **Services overview page (`/services`) has no hero section** — Every other page has a navy gradient hero. Services page jumps straight into content with no visual hierarchy or CTA.

12. **About page is thin** — No team photo placeholder, no company story section, no "years of experience" or credentials callout. Could add an owner photo placeholder, mission statement, and a CTA to request service.

13. **Contact page missing hours and map** — The spec calls for hours display and a map placeholder. Currently only shows phone/email/address and the form.

14. **Blog posts have no featured image placeholders** — Blog list and individual posts are text-only. Adding image placeholders would improve visual appeal and SEO readiness.

15. **Homepage map placeholder is an empty gray box** — Could embed a static Google Maps iframe or at minimum add a more descriptive placeholder with the actual service area.

---

### D. Technical & Performance

16. **No lazy loading on route-level code splitting** — All pages are eagerly imported in App.tsx. Should use `React.lazy()` + `Suspense` for code splitting.

17. **Google Fonts loaded as render-blocking CSS import** — The `@import url(...)` in index.css blocks rendering. Should use `<link rel="preconnect">` + `<link rel="stylesheet">` in index.html with `display=swap` for better performance.

18. **No favicon updated** — Still using the default Lovable favicon. Should be replaced with the AC Assurance logo/icon.

19. **`Building2` icon imported but never used** in services.ts.

---

### E. Content & Compliance

20. **BBB Accredited badge on homepage** — Verify this is accurate before going live. If not BBB accredited, this should be removed to avoid compliance issues.

21. **Placeholder reviews still present** — Three fake review cards appear on both the homepage and /reviews page with "PLACEHOLDER" names. These should either be removed entirely or replaced with real reviews before launch. The homepage should link to the Google Reviews page instead.

22. **Blog dates are in the future (2026)** — Minor, but dates like "2026-02-20" may look odd if launched before then.

23. **No privacy policy or terms page** — Standard for business websites, especially with form data collection.

---

### F. Missing Features for Best-in-Class

24. **No Services dropdown in navigation** — The nav links to `/services` but doesn't have a dropdown/mega-menu showing all 9 services. Top HVAC sites let users jump directly to any service from the nav.

25. **No Google Maps embed on Contact or Service Areas** — A real map embed would boost local SEO and user trust.

26. **No FAQ section or page** — FAQs are excellent for SEO (FAQ schema) and reduce support calls. Common questions: "How much does AC repair cost?", "Do you offer free estimates?", "What brands do you service?"

27. **No seasonal/promotional banner capability** — A dismissible top banner for promotions like "$50 off your first service" would boost conversions.

28. **No click-to-text/SMS option** — Many mobile users prefer texting. A "Text Us" button alongside "Call Now" would increase lead capture.

29. **No before/after gallery or project showcase** — Visual proof of work builds trust. Even a placeholder gallery structure would be valuable.

30. **No service area individual pages** — Each city (Cape Coral, Fort Myers, Naples, etc.) could have its own landing page for geo-targeted SEO: "AC Repair in Bonita Springs | AC Assurance".

---

### Recommended Implementation Priority

**Phase 1 — Fix broken functionality (items 1-5):**
- Fix "Get a Free Quote" CTA to work on all pages
- Fix missing `text-brand-green` color token
- Add form redirect to /thank-you
- Add `showMessage` to all forms

**Phase 2 — SEO & polish (items 6-15):**
- Add per-page titles via a reusable SEO component
- Wrap NotFound in Layout
- Add hero to Services overview
- Enhance Contact page with hours/map
- Enhance About page with more content

**Phase 3 — Performance & features (items 16-30):**
- Move fonts to index.html `<link>`
- Add lazy loading for routes
- Add services dropdown nav
- Add FAQ page with schema
- Add city-specific landing pages

---

### Files to Change (Phase 1 + 2)

| File | Changes |
|------|---------|
| `src/components/layout/Header.tsx` | Fix "Get a Free Quote" link to `/contact#estimate-form` or trigger modal |
| `src/components/EstimateForm.tsx` | Add `useNavigate` redirect to `/thank-you` on success |
| `src/pages/ServicePage.tsx` | Fix `text-brand-green` to `text-accent`, add `showMessage` to form |
| `src/pages/Financing.tsx` | Fix `text-brand-green` to `text-accent`, add `showMessage` to form |
| `src/pages/NotFound.tsx` | Wrap in Layout component |
| `src/pages/Services.tsx` | Add navy hero section matching other pages |
| `src/pages/Contact.tsx` | Add business hours and map placeholder |
| `src/pages/About.tsx` | Add owner photo placeholder, expanded content, CTA section |
| `src/components/SEOHead.tsx` | New reusable component using `document.title` + meta tags |
| `index.html` | Move font loading to `<link>` tags, add preconnect |
| `src/pages/Index.tsx` | Remove placeholder reviews or replace with Google Reviews embed |
| `src/pages/Reviews.tsx` | Remove placeholder review cards, keep Google Reviews CTA |
| `src/data/services.ts` | Remove unused `Building2` import |

