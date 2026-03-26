

# Fix Whited-Out / Invisible Elements Across the Site

## Issues Found

### 1. Sticky CTA bar invisible at 948px viewport (the "white bar" issue)
The `StickyCallBar` component uses `md:hidden`, which hides it at viewports >= 768px. At your 948px preview width, the bar is completely hidden — leaving an empty white strip at the bottom of the viewport. This is the "white bar" you're seeing.

**Fix**: Change `md:hidden` to `lg:hidden` so the sticky CTA bar remains visible on tablet-sized viewports (768px-1023px), only hiding at true desktop widths (1024px+).

**File**: `src/components/StickyCallBar.tsx` — change line 30's `md:hidden` to `lg:hidden`

### 2. Layout bottom padding mismatch
`Layout.tsx` applies `pb-16 md:pb-0` to the main content area, which removes bottom padding at md+ breakpoints. But since the sticky bar now hides at `lg`, the padding logic should match.

**Fix**: Change `pb-16 md:pb-0` to `pb-16 lg:pb-0` in `Layout.tsx`

### 3. Dead `App.css` file (cleanup)
`src/App.css` contains leftover Vite boilerplate (`#root { max-width: 1280px; padding: 2rem; }`). It's not imported anywhere so it's harmless, but it should be cleaned up to avoid confusion if someone imports it later.

**Fix**: Remove `src/App.css` or empty its contents.

## Pages Verified (no issues)
- Homepage hero, footer, TrustBar — all render correctly
- Indoor Air Quality page — hero, process section, benefits, bottom CTA all visible
- Emergency AC Repair page — hero, content, bottom CTA all visible
- Sticky bar on mobile (375px) — renders correctly with navy background and white text

## Summary of Changes
| File | Change |
|------|--------|
| `src/components/StickyCallBar.tsx` | `md:hidden` → `lg:hidden` |
| `src/components/layout/Layout.tsx` | `pb-16 md:pb-0` → `pb-16 lg:pb-0` |
| `src/App.css` | Remove file (unused Vite boilerplate) |

