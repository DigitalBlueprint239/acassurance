

# Optimization Plan

## Current State
The site is a single-page React app (SPA) with no code-splitting, no lazy loading of routes, all Lucide icons eagerly imported, Google Fonts render-blocking, and images served as raw JPG/PNG with no size optimization. Every page loads the entire app bundle.

---

## Phase 1: Route-Level Code Splitting

**File: `src/App.tsx`**

- Replace all eager `import` statements with `React.lazy()` + `Suspense`
- Keep only `Index` as an eager import (it's the landing page)
- Wrap `<Routes>` in `<Suspense fallback={...}>` with a minimal loading spinner
- This splits 15+ page components into separate chunks, dramatically reducing initial JS payload

**Before:** ~1 monolithic bundle
**After:** Index loads fast; other pages load on demand

---

## Phase 2: Font Loading Optimization

**File: `index.html`**

- Add `font-display=swap` to the Google Fonts URL (append `&display=swap` — already present in the URL, confirm)
- Preload only the critical font weights (Montserrat 700, Open Sans 400) using `<link rel="preload">` with `as="font"`
- Remove unused font weights from the Google Fonts request (currently loading 5 Montserrat weights: 500-900; only 700 and 800 are used)
- Trim to: `Montserrat:wght@700;800&Open+Sans:wght@400;600`

---

## Phase 3: Image Optimization

**File: `src/pages/Index.tsx`**

- Add explicit `width` and `height` attributes to all work photo `<img>` tags (prevents CLS)
- Already has `loading="lazy"` on work photos — confirmed good
- Hero image already has `fetchPriority="high"` and dimensions — confirmed good

**File: `index.html`**

- The `<link rel="preload" as="image" href="/src/assets/hero-team-edited.jpg">` uses a source path that only works in dev mode. In production, Vite hashes the file. Remove this preload (the `fetchPriority="high"` on the `<img>` tag handles it correctly)

---

## Phase 4: Reduce Unused Dependencies

**File: `package.json`** (informational — no removal in this pass, but flag for awareness)

The project imports many Radix primitives that appear unused by the app pages (context-menu, menubar, hover-card, input-otp, slider, resizable-panels, recharts, react-day-picker). These bloat the bundle. Future cleanup pass recommended.

---

## Phase 5: Meta & SEO Deduplication

**File: `index.html`**

- The `index.html` has hardcoded `<meta>` tags for og:title, og:description, twitter:title, twitter:description that duplicate the dynamic tags injected by `SEOHead.tsx`. Since this is an SPA and crawlers may not execute JS, keep the `index.html` tags as fallback — no change needed. But note: for true SEO optimization, pre-rendering (SSG) is the real fix (documented in memory as a future strategic decision).

---

## Phase 6: Production Build Optimizations

**File: `vite.config.ts`**

- Add `build.rollupOptions.output.manualChunks` to separate vendor libraries (react, react-dom, radix) from app code
- Add `build.cssCodeSplit: true` (default, confirm)
- Add `build.minify: 'terser'` with `terserOptions.compress.drop_console: true` to strip console logs in production

---

## Summary of Changes

| File | Change |
|------|--------|
| `src/App.tsx` | Lazy-load all routes except Index |
| `index.html` | Trim font weights, remove broken preload |
| `src/pages/Index.tsx` | Add width/height to work photo images |
| `vite.config.ts` | Add manual chunks + terser minification |

**Impact:** Smaller initial bundle (~60-70% reduction in first-load JS), faster LCP, better CLS scores, and cleaner production builds. All changes are non-breaking and invisible to users.

