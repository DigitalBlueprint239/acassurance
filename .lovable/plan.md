

## Phase 1 Technical SEO Stabilization

### Current Issues

1. **`SEOHead.tsx` line 4**: `BASE_URL` is `"https://acassurancefl.com"` (non-www). Must be `"https://www.acassurancefl.com"`.
2. **`index.html` line 37**: JSON-LD schema `"url"` field uses `"https://acassurancefl.com"` (non-www).
3. **`robots.txt`**: Missing `Sitemap` directive.
4. **No `sitemap.xml`** exists.

### Changes

#### 1. `src/components/SEOHead.tsx`
- Change `BASE_URL` from `"https://acassurancefl.com"` to `"https://www.acassurancefl.com"`.
- No other changes needed — canonical logic already works correctly (dynamic per route, single tag, trailing slash only on homepage).

#### 2. `index.html`
- Update JSON-LD `"url"` from `"https://acassurancefl.com"` to `"https://www.acassurancefl.com"`.

#### 3. `public/robots.txt`
Replace with simplified version:

```
User-agent: *
Allow: /

Sitemap: https://www.acassurancefl.com/sitemap.xml
```

#### 4. `public/sitemap.xml` (new file)
Static sitemap covering all known routes:

- `/` (homepage)
- `/services`
- `/about`
- `/contact`
- `/financing`
- `/service-areas`
- `/reviews`
- `/blog`
- 9 service pages (`/ac-repair-cape-coral`, `/ac-installation-replacement`, etc.)
- 4 blog posts (`/blog/ac-not-cooling-cape-coral`, etc.)
- `/thank-you` excluded (noindex-worthy)

All URLs use `https://www.acassurancefl.com` prefix.

#### 5. Redirects
Redirects from non-www to www and HTTP to HTTPS are DNS/hosting-level concerns (Cloudflare, Netlify, etc.) — cannot be implemented in a client-side SPA. Will note this for the user.

### Files Changed

| File | Change |
|------|--------|
| `src/components/SEOHead.tsx` | Update BASE_URL to www |
| `index.html` | Update JSON-LD url to www |
| `public/robots.txt` | Simplify + add Sitemap directive |
| `public/sitemap.xml` | New static sitemap with all routes |

### What Won't Change
- No routing, layout, UI, or component changes
- All existing meta tags preserved
- SEOHead dynamic behavior unchanged (just domain swap)

### Redirect Note
HTTP→HTTPS and non-www→www redirects must be configured at the hosting/DNS level (e.g., Cloudflare page rules, Netlify redirects, or server config). This cannot be handled in client-side React code.

