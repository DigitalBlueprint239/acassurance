

## Hero "Stacked Editorial" Redesign

Replace the split two-column hero with a full-width stacked layout: centered text on top, full-width team photo below, with a floating trust ribbon overlapping the photo's bottom edge.

### 1. Desktop Hero — Full-Width Stacked (`src/pages/Index.tsx`)

Remove the `hidden md:grid grid-cols-[42fr_58fr]` section entirely. Replace with a single unified section for both desktop and mobile:

**Text Block** (top):
- `bg-[hsl(210,40%,98%)]` full-width, `text-center`, padded `py-14 md:py-20`
- Eyebrow: centered, same copy, `tracking-[0.2em]`
- H1: `text-4xl md:text-5xl lg:text-6xl`, centered, `tracking-tight leading-[1.1]`, teal-600 span
- Subheadline: centered, `max-w-2xl mx-auto`
- CTAs: centered row `justify-center`
- Urgency pill: centered below CTAs

**Team Photo** (below text):
- Full-width container with `relative` positioning
- Image: `w-full aspect-[21/9] md:aspect-[21/9] object-cover object-center` on desktop; `aspect-[4/3]` on mobile via responsive class
- Container: `rounded-3xl overflow-hidden shadow-2xl mx-4 md:mx-8 lg:mx-16 -mt-4` — creates the floating card effect with slight negative margin overlap
- Zero overlays, zero gradients

**Trust Ribbon** (overlapping photo bottom):
- `absolute bottom-0 left-0 right-0` inside the photo container
- `bg-white/80 backdrop-blur-md` ribbon
- Contains trust badges (Licensed, 5-Star, BBB, 24/7) in a centered flex row
- Sits over the van/pavement area, never over faces

### 2. Mobile Adaptation

Same stacked structure, no separate mobile section needed:
- Text section: slightly smaller type (`text-3xl`), CTAs stack vertically
- Photo: switches to `aspect-[4/3]` via `aspect-[4/3] md:aspect-[21/9]`
- Trust ribbon: wraps to 2-column grid on small screens
- Rounded card margins reduce: `mx-4` on mobile

### 3. Remove Duplicate Sections

- Delete the separate `hidden md:grid` desktop hero (lines 39-86)
- Delete the separate `md:hidden` mobile hero (lines 88-136)
- Replace with one unified responsive section

### 4. Owner Badge (Optional Enhancement)

- Small absolute-positioned badge near bottom-right of photo: `bg-teal-600 text-white rounded-full px-4 py-2 text-xs font-bold shadow-lg`
- Text: "Owner-Operated & On-Site"
- Positioned `absolute bottom-16 right-8 md:right-16`

### 5. TrustBadgeStrip

Keep `<TrustBadgeStrip />` below — now acts as secondary reinforcement rather than primary trust display.

### Files Changed

| File | Change |
|------|--------|
| `src/pages/Index.tsx` | Replace split hero with single stacked editorial section — centered text, full-width photo card, trust ribbon overlay, owner badge |

