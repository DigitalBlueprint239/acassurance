

## Add Real Job Photos to Homepage

Copy the uploaded field photos into the project and add a "Recent HVAC Work" gallery section to the homepage between the Why Choose Us and Reviews sections.

### Photos to Use

From the 9 uploads, selecting 6 distinct photos (removing duplicates of the garage mini-split):

| File | Caption | Description |
|------|---------|-------------|
| image-2.png | Clean Condenser Coil Detail | Close-up of condenser unit |
| image-3.png | Mini-Split Outdoor Unit Install | Mitsubishi outdoor unit with line set cover |
| image-4.png | Ductless System Installation | Mitsubishi outdoor condenser with clean line routing |
| image-5.png | Garage Mini-Split Installation | Wall-mounted indoor unit in garage |
| image-6.png | New Air Handler Installation | Indoor air handler unit replacement |
| image-8.png | Garage Ductless Cooling | Wall-mounted mini-split in garage space |

### Implementation

**1. Copy 6 photos to `src/assets/work/`**

**2. Add "Recent HVAC Work" section to `src/pages/Index.tsx`**

- Insert after "Why Choose Us" (section 4), before Reviews (section 5)
- Headline: "Recent HVAC Work"
- Subtext: "Real installations and repairs completed by our team across Southwest Florida."
- 2x3 responsive grid (1 col mobile, 2 col tablet, 3 col desktop)
- Each card: white bg, border, subtle shadow, image with `object-cover`, caption below
- Images imported as ES6 modules from `@/assets/work/`

### Files Changed

| File | Change |
|------|--------|
| `src/assets/work/` | 6 new photo files |
| `src/pages/Index.tsx` | New gallery section with 6 real job photos |

