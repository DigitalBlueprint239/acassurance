

## Revised Hero Section — Brand-Infused Glassmorphism Refinement

Same plan as previously approved, with one revision:

### Revision

**Urgency line spacing**: Add `mt-4` to the urgency line container (the `backdrop-blur-sm bg-white/[0.04] rounded-full px-4 py-2 inline-block` element) on both desktop and mobile hero blocks. This gives the floating pill breathing room below the trust badges.

### All Changes (Complete)

**`src/index.css`**:
- `.hero-image-blend` — shift from `rgba(0,0,0,...)` to deep navy `rgba(8,25,46,...)`
- `.hero-top-overlay` — match navy tone
- Add `.glass-hero-card` utility: `backdrop-blur-md bg-white/5 border-l-4 border-teal-500/40 p-6 md:p-8 rounded-r-2xl`

**`src/pages/Index.tsx`**:
- Desktop image position: `object-[68%_35%]` → `object-[80%_35%]`
- Wrap H1 + subheadline in `<div className="glass-hero-card mb-6">`
- Teal accent in H1: `<span className="text-teal-400">Fort Myers &amp; Cape Coral</span>`
- Trust badge icons: `text-white/50` → `text-teal-400/70`
- Urgency line: `backdrop-blur-sm bg-white/[0.04] rounded-full px-4 py-2 inline-block mt-4`
- Apply all above to both desktop and mobile hero blocks

### Files Changed

| File | Change |
|------|--------|
| `src/index.css` | Navy gradients, glass-hero-card utility |
| `src/pages/Index.tsx` | Image position, glass card, teal H1 accent, badge icons, urgency line with mt-4 |

