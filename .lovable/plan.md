

## Hero Section Refinement — Image, Gradient & Trust Pills

### Files Changed

| File | Change |
|------|--------|
| `src/pages/Index.tsx` | Adjust image object-position, increase image column width, lighten trust pills |
| `src/index.css` | Reduce gradient width and opacity |

### Changes

**1. Image crop/position (Index.tsx line 83-88)**
- Change image column from `md:w-[45%]` → `md:w-[48%]` for more image presence
- Change `object-[50%_25%]` → `object-[35%_30%]` on mobile to shift focal point left toward Jason's face/torso, cropping out ladder/rack
- Change `md:object-right` → `md:object-[40%_25%]` on desktop to center Jason in the frame rather than pushing him off-screen, keeping van partially visible

**2. Gradient overlay (index.css line 94-96)**
- Reduce `.hero-image-blend` gradient: shrink solid coverage from 8% → 3%, and fade-out from 55% → 35%
- Reduce opacity by blending to transparent sooner
- New value: `linear-gradient(to right, hsl(216, 75%, 14%) 0%, hsl(216, 75%, 14%, 0.85) 3%, transparent 35%)`

**3. Trust pills (Index.tsx line 73)**
- Change `bg-white/10` → `bg-white/[0.06]` for softer, lighter feel
- Change icon `text-white/70` → `text-white/60` for subtler contrast

**4. Text column width adjustment**
- Change left column from `md:w-[55%]` (implicit via flex-1) — keep flex-1 but the image column growing slightly will naturally rebalance

### No Changes To
- Headline, subheadline, CTA text, CTA hierarchy, layout structure, section spacing, any other homepage sections

