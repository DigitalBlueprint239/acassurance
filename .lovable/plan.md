

# Prerender Readiness Pass

## Issues Found

### Fixable Inside Lovable

1. **NotFound page missing noindex/SEOHead** — Bots hitting invalid URLs will render the 404 page with no `noindex` directive, risking thin-content indexation. Need to add `<SEOHead noindex />`.

2. **4 blog posts missing from sitemap.xml** — Blog data contains 8 posts but sitemap only lists 4. Missing: `/blog/ac-repair-naples-fl`, `/blog/ac-installation-fort-myers`, `/blog/hvac-maintenance-cape-coral`, `/blog/why-ac-assurance-chooses-trane`.

3. **WebSite schema has invalid SearchAction** — The `potentialAction` in the WebSite JSON-LD points to `/?s={search_term_string}` but no search functionality exists. Google may flag this. Remove the `potentialAction` block.

4. **Duplicate route definitions** — `localPages.ts` contains entries for slugs `ac-repair-naples`, `ac-repair-fort-myers`, `ac-repair-cape-coral` which also have dedicated hardcoded routes in `App.tsx` (lines 89-94). React Router resolves correctly (dedicated routes win), but the `localPages` loop still registers shadow routes. No functional bug, but should be documented with a code comment for maintainability.

### Not Fixable Inside Lovable (Deployment Team Notes)

5. **All routes use `React.lazy` + `Suspense`** — Prerenderers will initially see the spinner fallback. Most services (Prerender.io, Rendertron, Puppeteer) handle this correctly by waiting for network idle. The deployment team must configure the prerender service to wait for `document.querySelector('main')` or network idle before snapshotting.

6. **`index.html` static meta is homepage-only** — The fallback `<title>` and `<meta description>` in `index.html` are the homepage values. `react-helmet-async` overrides them per route, but only after JS executes. If a prerenderer fails to execute JS on a specific route, it will serve homepage meta for every page. This is inherent to SPA architecture.

7. **No `<meta name="fragment" content="!">` or `Rendertron` middleware** — The site has no AJAX crawling hint or server-side prerender middleware. The deployment team needs to configure CDN-level prerender integration (e.g., Cloudflare Worker + Prerender.io, or Netlify prerendering).

---

## Implementation Plan

### 1. Add SEOHead with noindex to NotFound page
- Import SEOHead, add `<SEOHead title="Page Not Found" description="..." noindex />`

### 2. Add 4 missing blog posts to sitemap.xml
- `/blog/ac-repair-naples-fl`
- `/blog/ac-installation-fort-myers`
- `/blog/hvac-maintenance-cape-coral`
- `/blog/why-ac-assurance-chooses-trane`

### 3. Remove invalid SearchAction from WebSite schema
- In `SEOHead.tsx`, remove the `potentialAction` block from `websiteSchema`

### 4. Add clarifying comment for duplicate route slugs
- In `App.tsx`, add a comment above the `localPages.map` block noting that some slugs overlap with dedicated routes above, and the dedicated routes take priority

---

## Files Modified

| File | Change |
|------|--------|
| `src/pages/NotFound.tsx` | Add SEOHead with noindex |
| `public/sitemap.xml` | Add 4 missing blog post URLs |
| `src/components/SEOHead.tsx` | Remove SearchAction from WebSite schema |
| `src/App.tsx` | Add clarifying comment on route overlap |

---

## Complete Route Inventory for Prerender Coverage

```text
PRIORITY 1 — Core pages (prerender mandatory)
/
/services
/contact
/financing
/about
/service-areas
/reviews

PRIORITY 1 — Core service pages
/ac-repair-cape-coral
/ac-installation-replacement
/emergency-ac-repair
/heating-services
/ductless-mini-split
/ac-maintenance-tune-up
/duct-cleaning
/indoor-air-quality
/commercial-refrigeration

PRIORITY 1 — City AC repair pages
/ac-repair-naples
/ac-repair-fort-myers
/ac-repair-cape-coral-fl
/ac-repair-bonita-springs
/ac-repair-estero
/ac-repair-lehigh-acres

PRIORITY 2 — Local landing pages
/ac-installation-naples
/ac-replacement-naples
/emergency-ac-repair-naples
/mini-split-installation-naples
/ac-installation-cape-coral
/ac-replacement-fort-myers
/mini-split-installation-cape-coral
/emergency-ac-repair-cape-coral

PRIORITY 2 — Trane product pages
/trane-products
/trane-air-conditioners
/trane-heat-pumps

PRIORITY 2 — Blog
/blog
/blog/ac-not-cooling-cape-coral
/blog/how-often-service-ac-southwest-florida
/blog/repair-vs-replace-ac-cape-coral
/blog/hvac-financing-cape-coral
/blog/ac-repair-naples-fl
/blog/ac-installation-fort-myers
/blog/hvac-maintenance-cape-coral
/blog/why-ac-assurance-chooses-trane

PRIORITY 3 — Informational
/privacy-policy

EXCLUDE from prerender (noindex)
/thank-you
/emergency-ac-repair-now
```

Total routes to prerender: **45**

---

## Deployment Team Recommendations

1. **Prerender service must wait for JS execution** — Configure for network-idle or `document.readyState === 'complete'` + 2s buffer. The Suspense spinner resolves in <500ms on fast connections.
2. **Cache prerendered snapshots** — Recommended TTL: 7 days for service/city pages, 1 day for homepage, 30 days for blog posts.
3. **User-Agent detection** — Route Googlebot, Bingbot, and social media crawlers (facebookexternalhit, Twitterbot, LinkedInBot) through prerender.
4. **Verify canonical consistency** — After prerender setup, spot-check that `<link rel="canonical">` in rendered snapshots matches the expected URL (no trailing slashes, no query params).
5. **Monitor with Google Search Console** — After prerender deployment, use URL Inspection tool to verify Google sees full rendered content, correct titles, and valid JSON-LD on at least 5 representative pages.

