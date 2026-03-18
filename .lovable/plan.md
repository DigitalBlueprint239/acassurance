

## Homepage Production Lock — Final Refinements

### Summary

Three targeted changes: hero polish (new full team photo, updated overlay/positioning/copy/spacing), service area placeholder removal, and mobile CTA alignment.

---

### 1. Replace Hero Image with Full Team Photo

Copy `user-uploads://IMG_0308-2.JPG` to `src/assets/hero-team-edited.jpg` (overwrite). This uses the full uncropped team photo as requested — no members cut out.

### 2. Hero Section Updates (`src/pages/Index.tsx`)

**Desktop hero:**
- `min-h-[600px]` → `min-h-[540px] lg:min-h-[600px]` (both the section and inner container)
- Image `object-[60%_35%]` → `object-[68%_35%]`
- Subheadline: "Same-day help. Honest pricing. No surprises." → "Same-day help from a licensed local team."
- Secondary CTA: `border-white/35 text-white/90` → `border-white/30 text-white/80`
- Trust badge row: `mt-3` → `mt-2`

**Mobile hero:**
- Secondary CTA: `border-white/40 text-white` → `border-white/30 text-white/80`
- Trust badge row: `mt-4` → `mt-2`

### 3. Overlay Gradient Update (`src/index.css`)

Update `.hero-image-blend` gradient to stronger left-side values:
```css
background: linear-gradient(to right, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.90) 35%, rgba(0,0,0,0.65) 60%, rgba(0,0,0,0.35) 75%, transparent 90%);
```
`.hero-top-overlay` remains unchanged (already matches spec).

### 4. Service Area — Remove Placeholder (`src/pages/Index.tsx`)

Delete the gray placeholder box (lines 259-261). Replace with a clean headline/subtext and styled city grid:
- Headline: "Proudly Serving Southwest Florida"
- Subtext: "We provide fast, reliable HVAC services across Lee County and surrounding areas."
- Keep existing city pill/badge list (already has MapPin icons and links)
- Remove the old "Areas We Serve" h2/p since the new headline replaces them

### Files Changed

| File | Change |
|------|--------|
| `src/assets/hero-team-edited.jpg` | Overwrite with full uncropped team photo |
| `src/index.css` | Update `.hero-image-blend` gradient opacity values |
| `src/pages/Index.tsx` | Hero positioning, copy, spacing, CTA styling; remove service area placeholder |

