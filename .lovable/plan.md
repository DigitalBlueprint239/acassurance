

# SEO QA Final Verification — Audit Report

## What Passes

| Area | Status | Detail |
|------|--------|--------|
| **Unique metadata on major pages** | PASS | Homepage, Services, Contact, Financing, About, Reviews, Blog listing, Privacy, Service Areas, all 9 service pages, all 6 city pages, all local landing pages — each has unique `<SEOHead>` with distinct title and description. |
| **Canonical URLs** | PASS | `SEOHead` generates canonicals from `pathname`, strips trailing slashes, prepends `https://www.acassurancefl.com`. Correct logic. |
| **robots.txt** | PASS | Allows all, disallows `/thank-you` and `/emergency-ac-repair-now`, references sitemap. Clean. |
| **sitemap.xml** | PASS | 45+ URLs covering core pages, service pages, city pages, local landing pages, Trane pages, and all 8 blog posts. Complete. |
| **Structured data (service pages)** | PASS | Service, FAQ, and HVACBusiness schemas properly injected via `buildServiceSchema`, `buildFAQSchema`, `buildHVACBusinessSchema`. |
| **Organization + WebSite schema** | PASS | Injected on every page via SEOHead. SearchAction removed (no search exists). |
| **noindex on utility pages** | PASS | NotFound, ThankYou, EmergencyNow all have noindex directives. |
| **SPA routing fallback** | PASS | `public/_redirects` exists with `/* /index.html 200`. |
| **index.html fallback meta** | PASS | Homepage title/description in static HTML for pre-JS rendering. |
| **Internal linking** | PASS | Service Areas page links to all city pages. Local landing pages cross-link to related services. Footer and header link to major sections. |
| **Content depth** | PASS | Naples (Tier 1) pages are 1500-2000 words. City pages have localized content, neighborhood lists, and specific issues. No thin pages in the service/local cluster. |
| **Trust density** | PASS | License number, BBB badge, owner-operated messaging, and reassurance micro-copy present on forms and throughout. |
| **Conversion pathways** | PASS | Forms on homepage, contact, financing, and all ServicePageShell pages. StickyCallBar, emergency quick-link in header, EmergencyCallout section. |

---

## What Fails

### FAIL 1: BlogPost pages have NO SEOHead

**Severity: High**

`src/pages/BlogPost.tsx` renders blog posts without any `<SEOHead>` component. This means:
- No page-specific `<title>` tag (falls back to homepage title from `index.html`)
- No `<meta description>`
- No canonical URL
- No Open Graph tags
- No JSON-LD (no Article schema)
- All 8 blog post URLs in the sitemap will render with identical homepage metadata to crawlers

**Fix:** Add `<SEOHead>` to BlogPost using the post's `title`, `excerpt` as description, and add Article schema. Also add `BlogPosting` JSON-LD.

### FAIL 2: ThankYou page uses manual DOM manipulation for noindex instead of SEOHead

**Severity: Low**

`ThankYou.tsx` uses `useEffect` to manually create/modify a `<meta name="robots">` tag via DOM APIs instead of using the existing `SEOHead` component with `noindex` prop. This works but is inconsistent and fragile — a prerenderer may not execute the `useEffect` before snapshotting.

**Fix:** Replace the manual DOM manipulation with `<SEOHead title="Thank You" description="..." noindex />`.

---

## What Is Still Weak

1. **Blog posts lack Article/BlogPosting schema** — Even after adding SEOHead, blog posts should include `BlogPosting` JSON-LD with `datePublished`, `author`, `headline` for rich snippet eligibility.

2. **Reviews page depends on Elfsight third-party script** — The Reviews page injects a third-party script (`elfsightcdn.com`) at runtime. Prerenderers may or may not wait for this. The reviews widget content may be absent from bot-visible HTML. No fix possible inside Lovable — the deployment team should verify this page's prerendered output.

3. **`og:type` is "website" on all pages** — Blog posts should use `og:type="article"`. Service pages could use `og:type="website"` but it would be better as `og:type="business.business"`. This is a minor issue.

4. **No `<lastmod>` in sitemap.xml** — Google uses `lastmod` for recrawl prioritization. Currently absent from all entries. Not critical but would improve crawl efficiency.

---

## What Is Missing

1. **SEOHead on BlogPost** — Must be implemented (see FAIL 1).
2. **SEOHead on ThankYou** — Should replace manual DOM noindex (see FAIL 2).
3. **No `hreflang` tags** — Not needed (English-only, US-only site). Non-issue.
4. **No breadcrumb schema** — Would improve SERP display on service and blog pages. Nice-to-have, not blocking.

---

## Implementation Plan

### 1. Add SEOHead to BlogPost.tsx
- Import SEOHead
- Use `post.title` for title with ` | AC Assurance` suffix
- Use `post.excerpt` for description
- Add `BlogPosting` JSON-LD with `headline`, `datePublished`, `author`, `publisher`

### 2. Replace manual noindex in ThankYou.tsx
- Remove the `useEffect` DOM manipulation
- Add `<SEOHead title="Thank You | AC Assurance" description="Thank you for contacting AC Assurance." noindex />`

---

## Files Modified

| File | Change |
|------|--------|
| `src/pages/BlogPost.tsx` | Add SEOHead with dynamic title/description and BlogPosting schema |
| `src/pages/ThankYou.tsx` | Replace manual DOM noindex with SEOHead component |

---

## Final Verdicts

### SEO Foundation Status: STRONG
All major pages have unique metadata, canonical URLs, and structured data. One critical gap (BlogPost) needs fixing. Once fixed, the foundation is solid for a local service SPA.

### Local SEO Readiness: STRONG
6 city AC repair pages + 8 local landing pages with localized content, neighborhood targeting, and proper HVACBusiness/Service schemas. Naples Tier 1 treatment is correctly implemented. Internal linking cluster is complete.

### Conversion Readiness: STRONG
Forms embedded on service pages, contact, financing, and homepage. Reassurance micro-copy, trust badges, sticky CTAs, and emergency pathways all in place.

### Prerender Readiness: READY (after fixes)
`_redirects` fallback exists. 45 routes inventoried. noindex on utility pages. Once BlogPost SEOHead is added, all sitemap URLs will have proper page-level metadata for prerender snapshots.

### Remaining Risks
1. BlogPost SEOHead gap — **must fix before prerender deployment**
2. Elfsight reviews widget — may not render in prerender snapshots (verify post-deployment)
3. ThankYou manual DOM noindex — fragile for prerenderers (should fix)

### Final Recommendation
Fix the two identified issues (BlogPost SEOHead, ThankYou SEOHead). After that, the site is ready for external prerender deployment and local SEO growth. No other blockers.

