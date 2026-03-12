

## Canonical Tag Fix

### What's Wrong
Line 15 of `index.html` has `href="https://acassurancefl.com{{pathname}}"` — a literal uninterpolated template that produces a malformed canonical on every page.

### Fix

**1. `index.html`** — Remove line 15 (the broken static canonical).

**2. `src/components/SEOHead.tsx`** — Add `useLocation()` from react-router-dom and dynamically manage the canonical `<link>` tag in `useEffect`:
- Find existing `link[rel="canonical"]` or create one and append to `<head>`
- Set href to `https://acassurancefl.com` + pathname
- For homepage (`/`), output `https://acassurancefl.com/`
- For all other routes, strip trailing slash

Also update OG/Twitter title and description tags dynamically alongside existing title/description logic.

### Result
- `/` → `https://acassurancefl.com/`
- `/services` → `https://acassurancefl.com/services`
- `/about` → `https://acassurancefl.com/about`
- `/contact` → `https://acassurancefl.com/contact`

No changes to routing, layout, or any other files.

