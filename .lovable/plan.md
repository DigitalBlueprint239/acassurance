

# Full On-Site SEO Foundation Pass

## Current State Assessment

**What's already working:**
- SEOHead component handles title, description, canonical, OG, Twitter meta dynamically per page
- Homepage has HVACBusiness JSON-LD schema
- All major pages have unique titles and meta descriptions
- Canonical URLs are self-referencing and clean (trailing slash stripped)
- robots.txt exists with sitemap reference
- sitemap.xml exists in public/
- LocalLandingPage injects HVACBusiness JSON-LD per city
- ThankYou page sets noindex/nofollow
- Image alt text is locally relevant across most pages
- H1 usage is correct on every page audited

**What's missing or weak:**
1. **JSON-LD schema on 90% of pages** — Only the homepage and LocalLandingPages have structured data. No Service schema on service pages, no FAQPage schema on pages with FAQs, no Organization/WebSite schema site-wide.
2. **Sitemap is incomplete** — Missing ~15 routes: `/ac-repair-fort-myers`, `/ac-repair-bonita-springs`, `/ac-repair-estero`, `/ac-repair-lehigh-acres`, `/ac-repair-cape-coral-fl`, `/services`, `/reviews`, `/privacy-policy`, `/trane-products`, `/heating-services`, `/ductless-mini-split`, `/indoor-air-quality`, `/emergency-ac-repair-now`, `/contact`, `/thank-you` (noindex, so exclude), and all local landing page slugs.
3. **No `react-helmet-async`** — Current SEOHead uses `document.title` and `querySelector` mutations. This works fine for an SPA; switching to react-helmet-async is cleaner but functionally equivalent. Worth the migration for maintainability.
4. **Duplicate schema in `index.html`** — The static LocalBusiness JSON-LD in `index.html` conflicts with the dynamic HVACBusiness schema injected by the homepage's SEOHead, creating duplicate structured data on the homepage.
5. **Missing OG URL meta** — `og:url` is not set per-page.
6. **City repair pages (CityAcRepairPage) have no schema** — The `schema` prop exists but none of the 6 city pages pass it.
7. **ServicePageShell pages with FAQs lack FAQPage schema** — 5 pages have FAQ accordions but no corresponding FAQPage JSON-LD.
8. **Internal linking gaps** — Service pages link to Contact and each other via the bottom CTA, but don't cross-link to related services, financing, or city pages within body content.
9. **sitemap.xml lacks `lastmod`, `changefreq`, `priority`** — Basic `<loc>` only.

---

## Implementation Plan

### 1. Migrate to `react-helmet-async`
- Install `react-helmet-async`
- Wrap `App` in `<HelmetProvider>`
- Rewrite `SEOHead` to use `<Helmet>` with proper `<title>`, `<meta>`, `<link rel="canonical">`, and `<script type="application/ld+json">` tags
- Add `og:url` per page using canonical URL
- Remove manual DOM manipulation

### 2. Remove duplicate static schema from `index.html`
- Delete the `<script type="application/ld+json">` block from `index.html` (the homepage's SEOHead already injects HVACBusiness schema dynamically)

### 3. Add Organization + WebSite schema to SEOHead (site-wide)
- Inject Organization and WebSite JSON-LD on every page render via SEOHead, so every crawled page carries baseline structured data

### 4. Add Service JSON-LD to all 9 service pages
- AcRepairPage, AcInstallationPage, EmergencyAcPage, HeatingServicesPage, MiniSplitPage, MaintenancePage, DuctCleaningPage, IndoorAirQualityPage, CommercialRefrigPage
- Each gets a `Service` schema with name, description, provider (AC Assurance), areaServed, and telephone

### 5. Add FAQPage JSON-LD to pages with FAQ accordions
- 5 ServicePageShell pages (Repair, Installation, Emergency, Maintenance, Duct Cleaning) + LocalLandingPages with FAQs
- Generate FAQPage schema from the existing `faqs` array data

### 6. Add HVACBusiness schema to CityAcRepairPage instances
- Pass schema prop from AcRepairNaples, AcRepairFortMyers, AcRepairCapeCoral2, AcRepairBonitaSprings, AcRepairEstero, AcRepairLehighAcres

### 7. Expand sitemap.xml
- Add all missing routes with `lastmod`, `changefreq`, `priority`
- Exclude `/thank-you` and `/emergency-ac-repair-now` (utility/noindex pages)
- Include all 11 local landing page slugs
- Include `/privacy-policy`, `/trane-products`, `/trane-air-conditioners`, `/trane-heat-pumps`

### 8. Add internal cross-links
- ServicePageShell bottom CTA: add links to `/financing` and `/service-areas`
- About page: add link to `/services` and `/reviews`
- Financing page: add link to `/ac-installation-replacement`
- Contact page: already well-linked

### 9. Enhance robots.txt
- Add `Disallow: /thank-you` to prevent crawling the thank-you page
- Keep existing Allow and Sitemap directives

---

## Files Modified

| File | Change |
|------|--------|
| `package.json` | Add `react-helmet-async` |
| `src/App.tsx` | Wrap with `HelmetProvider` |
| `src/components/SEOHead.tsx` | Full rewrite using `Helmet`; add Organization + WebSite schema; add `og:url` |
| `index.html` | Remove duplicate LocalBusiness JSON-LD script block |
| `src/pages/AcRepairPage.tsx` | Add Service + FAQPage schema |
| `src/pages/AcInstallationPage.tsx` | Add Service + FAQPage schema |
| `src/pages/EmergencyAcPage.tsx` | Add Service + FAQPage schema |
| `src/pages/MaintenancePage.tsx` | Add Service + FAQPage schema |
| `src/pages/DuctCleaningPage.tsx` | Add Service + FAQPage schema |
| `src/pages/HeatingServicesPage.tsx` | Add Service schema |
| `src/pages/MiniSplitPage.tsx` | Add Service schema |
| `src/pages/IndoorAirQualityPage.tsx` | Add Service schema |
| `src/pages/CommercialRefrigPage.tsx` | Add Service schema |
| `src/pages/AcRepairNaples.tsx` | Add HVACBusiness schema prop |
| `src/pages/AcRepairFortMyers.tsx` | Add HVACBusiness schema prop |
| `src/pages/AcRepairCapeCoral2.tsx` | Add HVACBusiness schema prop |
| `src/pages/AcRepairBonitaSprings.tsx` | Add HVACBusiness schema prop |
| `src/pages/AcRepairEstero.tsx` | Add HVACBusiness schema prop |
| `src/pages/AcRepairLehighAcres.tsx` | Add HVACBusiness schema prop |
| `src/components/ServicePageShell.tsx` | Add internal links to Financing + Service Areas in bottom CTA |
| `src/pages/About.tsx` | Add internal links to Services + Reviews |
| `src/pages/Financing.tsx` | Add internal link to AC Installation |
| `public/sitemap.xml` | Expand with all routes + crawl hints |
| `public/robots.txt` | Add Disallow for /thank-you |

## Limitations (SPA constraints)
- No SSR/prerendering — Google must execute JavaScript to see content. A prerendering service (prerender.io or similar) should be added at the hosting/CDN level for production SEO. Cannot be done inside Lovable.
- Dynamic `<head>` changes via react-helmet-async only take effect after JS execution. Static crawlers that don't render JS will only see `index.html` defaults.

