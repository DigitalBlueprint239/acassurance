

## Elite Hero Polish — 4 Fixes (CTA2 Revised)

### Changes

**`src/index.css`** — Add new utility after `.hero-image-blend`:
```css
.hero-top-overlay {
  background: linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 40%, transparent 100%);
}
```

**`src/pages/Index.tsx`** — Desktop hero only:
- Add `<div className="absolute inset-0 hero-top-overlay" />` after the `hero-image-blend` div
- Image: `object-[82%_40%]` → `object-[78%_40%]`
- CTA2: `border-white/40 text-white` → `border-white/35 text-white/90`
- Trust badge row: `mt-4` → `mt-3`

No mobile changes. No headline changes.

