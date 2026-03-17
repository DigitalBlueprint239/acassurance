

## Replace Hero Image and Refine Crop

### Files Changed

| File | Change |
|------|--------|
| `src/assets/hero-owner.jpg` | Overwrite with uploaded `IMG_0306-2.JPG` |
| `src/pages/Index.tsx` | Adjust image crop positioning and mobile height |

### Changes

**1. Replace image asset**
- Copy `user-uploads://IMG_0306-2.JPG` → `src/assets/hero-owner.jpg`

**2. Update image positioning (Index.tsx line 83-87)**

The new photo has Jason centered with "AC ASSURANCE COOLING AND HEATING" branding clearly behind him. The ladder rack and red awning are at the very top.

- Mobile height: `h-[260px]` → `h-[300px]` — more breathing room so the crop doesn't feel cramped
- Mobile position: `object-[50%_30%]` → `object-[50%_65%]` — push crop well below the ladder/rack, centering on Jason's face and upper torso with van branding visible
- Desktop position: `md:object-[55%_25%]` → `md:object-[50%_55%]` — center Jason horizontally, shift down past the ladder clutter to show Jason + full "AC Assurance" text

**3. No other changes** — layout, text, CTAs, trust pills, gradient, spacing all remain identical.

