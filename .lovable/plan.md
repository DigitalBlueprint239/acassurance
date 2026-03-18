

## Final Production Hero — Locked Execution

Three changes: copy new image, update CSS overlay, update hero copy/spacing. No other sections touched.

### 1. Copy uploaded image to project

Copy `user-uploads://IMG_0304.JPG` → `src/assets/hero-owner-jason.jpg`

Update the import in Index.tsx from `hero-owner.jpg` to `hero-owner-jason.jpg`.

### 2. `src/index.css` — Replace overlay gradient (line 94-95)

Replace the current HSL-based gradient with the specified black-based overlay:

```css
.hero-image-blend {
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.75) 30%,
    rgba(0, 0, 0, 0.4) 55%,
    rgba(0, 0, 0, 0.15) 70%,
    transparent 85%
  );
}
```

### 3. `src/pages/Index.tsx` — Hero section only

**Desktop (lines 39-85):**
- Image positioning: `object-[75%_center]` → `object-[70%_30%]` — shift Jason right, crop lower to reduce sky/ladder noise
- H1: Replace with `AC Repair & Installation<br />Done Right the First Time` — forced two-line split, `leading-[1.1]`, `mb-4`
- Sub: `Owner-led HVAC service across Southwest Florida.<br />Same-day service. Honest pricing. No surprises.` — `mb-6`
- Urgency: `Need help fast? Same-day service available.`

**Mobile (lines 88-135):**
- Same copy updates
- H1: `mb-4`, Sub: `mb-6`
- Image: `h-[300px]` → `h-[300px]` (keep), adjust crop to `object-[50%_35%]` for tighter face/torso framing
- Urgency: same update

**No changes to:** CTAs, trust badges, button styling, layout structure, or any other section.

### Files changed

| File | Change |
|------|--------|
| `src/assets/hero-owner-jason.jpg` | New hero image (copied from upload) |
| `src/index.css` | Simpler rgba-based overlay |
| `src/pages/Index.tsx` | New image import, hero copy, spacing, image crop |

