

# SEO Deployment Plan — AC Assurance SPA

## Recommended Path: Cloudflare Pages + Prerender.io

### Why This Path

1. **Cloudflare Pages natively supports SPA routing** — automatic `_redirects` or `_headers` config, no server needed. All routes serve `index.html` with a single rule.
2. **Prerender.io integrates via Cloudflare Worker** — bot detection and cached HTML serving happen at the CDN edge, zero latency penalty for real users.
3. **Cloudflare is already the most common DNS provider for small businesses** — likely already in use or trivial to set up for `acassurancefl.com`.
4. **No build changes required inside Lovable** — the `dist/` output from `vite build` deploys as-is.
5. **Cost**: Cloudflare Pages free tier (unlimited sites, 500 builds/month) + Prerender.io Starter ($15/mo for 250 cached pages, more than enough for 45 routes).

### Fallback: Netlify + Prerender.io extension (see bottom)

---

## Step-by-Step Rollout

### Phase 1 — Export and Deploy to Cloudflare Pages

**All steps happen outside Lovable.**

1. **Connect GitHub repo to Cloudflare Pages**
   - Cloudflare Dashboard → Pages → Create project → Connect to Git
   - Build command: `npm run build`
   - Output directory: `dist`
   - Environment variable: `NODE_VERSION` = `20`

2. **Add SPA fallback routing**
   - Create `public/_redirects` file in the repo:
     ```
     /*  /index.html  200
     ```
   - This tells Cloudflare Pages to serve `index.html` for all routes (SPA behavior). Without it, direct navigation to `/ac-repair-naples` returns 404.

3. **Configure custom domain**
   - Cloudflare Pages → Custom domains → Add `www.acassurancefl.com`
   - If DNS is already on Cloudflare: automatic CNAME setup
   - If DNS is elsewhere: add CNAME record `www` → `<project>.pages.dev`
   - Add redirect rule: `acassurancefl.com` → `www.acassurancefl.com` (301)

4. **Verify deployment**
   - Confirm all 45 routes load correctly in browser
   - Confirm `robots.txt` and `sitemap.xml` are accessible at root
   - Confirm `google2e83009970df9bfc.html` (Search Console verification) is served

### Phase 2 — Prerender.io Integration

5. **Create Prerender.io account**
   - Sign up at prerender.io
   - Add site: `https://www.acassurancefl.com`
   - Set recache interval: 7 days (default)

6. **Deploy Cloudflare Worker for bot detection**
   - Use Prerender.io's official Cloudflare Worker template
   - The Worker checks `User-Agent` for bot signatures (Googlebot, Bingbot, facebookexternalhit, Twitterbot, LinkedInBot, Slackbot, etc.)
   - If bot: proxy request to `https://service.prerender.io/https://www.acassurancefl.com/[path]`
   - If human: pass through to Cloudflare Pages origin

   Worker configuration:
   ```
   PRERENDER_TOKEN = <your prerender.io token>
   ```

   Bot user-agent list (minimum):
   ```
   googlebot, bingbot, yandex, baiduspider, facebookexternalhit,
   twitterbot, rogerbot, linkedinbot, embedly, quora link preview,
   showyoubot, outbrain, pinterest, slackbot, vkShare, W3C_Validator,
   redditbot, Applebot, WhatsApp, Grapeshot, ChatGPT-User,
   GPTBot, Google-Extended, CCBot, anthropic-ai, Claude-Web
   ```

7. **Set Worker route**
   - Cloudflare Dashboard → Workers Routes
   - Route pattern: `www.acassurancefl.com/*`
   - Assign the prerender Worker

8. **Warm the cache**
   - Use Prerender.io's sitemap recache feature
   - Submit `https://www.acassurancefl.com/sitemap.xml`
   - This pre-renders and caches all 45 routes

### Phase 3 — Validation

9. **Verify bot-visible HTML** (see checklist below)
10. **Submit updated sitemap in Google Search Console**
11. **Use URL Inspection tool** on 5 representative pages

---

## Route Inventory for Prerender Coverage

All 45 routes from `sitemap.xml` plus the homepage. The sitemap already contains the complete list. Routes excluded from prerender:
- `/thank-you` (noindex, disallowed in robots.txt)
- `/emergency-ac-repair-now` (noindex, disallowed in robots.txt)
- `/*` catch-all 404 (has noindex via SEOHead)

---

## Risks

| Risk | Severity | Mitigation |
|------|----------|------------|
| **Cloudflare "Always Use HTTPS" + redirect loops** | Medium | Ensure SSL mode is "Full (strict)", not "Flexible". Pages projects handle this automatically but check if existing DNS proxy rules conflict. |
| **Worker route conflicts** | Medium | If `acassurancefl.com` already has Cloudflare Workers on other routes, the prerender Worker must be ordered correctly. Use specific route pattern `www.acassurancefl.com/*`. |
| **Cloaking risk with ad platforms** | Low | Prerender.io serves identical content (not different content to bots). Google explicitly permits dynamic rendering for JS-heavy sites per their [docs](https://developers.google.com/search/docs/crawling-indexing/javascript/dynamic-rendering). Not cloaking. |
| **Stale prerender cache** | Low | Set Prerender.io recache to 7 days. Manually recache after content updates by hitting recache API or resubmitting sitemap. |
| **AI crawlers (GPTBot, CCBot, Claude-Web)** | Low | Include in Worker bot list. These crawlers do execute some JS but benefit from pre-rendered HTML. Also controllable via robots.txt if desired. |
| **SPA `_redirects` not created** | High | Without `/*  /index.html  200`, direct bot hits to `/ac-repair-naples` return Cloudflare's 404. This file MUST exist in `public/`. |
| **react-helmet-async not executing before snapshot** | Medium | Prerender.io waits for network idle by default. The site's Helmet tags inject in <100ms. If issues arise, add `window.prerenderReady = true` signal after route render and configure Prerender.io to wait for it. |

---

## Validation Checklist

Run these checks after deployment:

1. **curl with Googlebot UA** — verify pre-rendered HTML:
   ```bash
   curl -A "Googlebot" https://www.acassurancefl.com/ | head -100
   curl -A "Googlebot" https://www.acassurancefl.com/ac-repair-naples | head -100
   ```
   Expected: Full HTML with `<title>`, `<meta description>`, `<script type="application/ld+json">`, and visible content in `<main>`.

2. **Check canonical tags** — no trailing slashes, matches expected URL:
   ```bash
   curl -sA "Googlebot" https://www.acassurancefl.com/ac-repair-naples | grep 'rel="canonical"'
   ```

3. **Check JSON-LD** — valid and page-specific:
   ```bash
   curl -sA "Googlebot" https://www.acassurancefl.com/ac-repair-naples | grep 'application/ld+json'
   ```

4. **Check noindex pages** — confirm bot sees noindex:
   ```bash
   curl -sA "Googlebot" https://www.acassurancefl.com/thank-you | grep 'noindex'
   ```

5. **Google Search Console URL Inspection** — test these 5 pages:
   - `/`
   - `/ac-repair-naples`
   - `/ac-installation-replacement`
   - `/blog/ac-not-cooling-cape-coral`
   - `/financing`

6. **Rich Results Test** — validate FAQ and Service schema:
   - https://search.google.com/test/rich-results → paste each URL

7. **robots.txt and sitemap** — confirm accessible:
   ```bash
   curl https://www.acassurancefl.com/robots.txt
   curl https://www.acassurancefl.com/sitemap.xml | head -20
   ```

---

## Fallback Option: Netlify

If Cloudflare is not viable (e.g., DNS is locked to another provider):

1. Deploy to Netlify via Git integration
2. Build command: `npm run build`, publish: `dist`
3. Add `public/_redirects`: `/*  /index.html  200`
4. Install **Netlify Prerender.io plugin** (one-click in Netlify dashboard)
5. Set `PRERENDER_TOKEN` environment variable
6. Custom domain: add CNAME `www` → `<site>.netlify.app`
7. Same validation checklist applies

Netlify's Prerender.io integration is simpler (no Worker needed) but slightly less configurable for bot user-agent customization and AI crawler handling.

---

## What Must Happen Outside Lovable

Everything in this plan happens outside Lovable except one optional file:

| Action | Where |
|--------|-------|
| Create `public/_redirects` file | Inside Lovable (add to repo) |
| Cloudflare Pages project setup | Cloudflare Dashboard |
| DNS configuration | DNS provider |
| Prerender.io account + config | Prerender.io |
| Cloudflare Worker deployment | Cloudflare Dashboard |
| Google Search Console verification | GSC |
| Cache warming / sitemap submission | Prerender.io + GSC |

