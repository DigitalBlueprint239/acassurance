

# Add Optimized Photo Gallery to Duct Cleaning Page

## What
Add the 3 uploaded duct cleaning photos to the gallery strip on the Duct Cleaning page, with image optimization and improved gallery presentation.

## Photo Assignment
- **Large photo (spans 2 rows)**: `2112488688069873714.JPG` — Close-up of branded technician cleaning duct near ceiling. Best composition, "AC Assurance" branding and phone number clearly visible. Strongest trust signal.
- **Top-right**: `502756194570318101.JPG` — Technician on ladder cleaning ceiling vent. Good action shot showing real work being done.
- **Bottom-right**: `3814091950496173102.JPG` — Technician cleaning bedroom vent with equipment. Shows residential context customers relate to.

## Optimizations Beyond Basic Implementation

### 1. Image Performance
- Convert all 3 uploads to WebP format and save to `src/assets/` with descriptive names
- Add explicit `width` and `height` attributes to prevent CLS (layout shift)
- Large image gets `fetchpriority="high"` since it's near the top of the page; smaller two keep `loading="lazy"`

### 2. Gallery Grid Improvements (ServicePageShell)
- Increase grid row height from 180px to 220px for more visual impact on desktop
- Add a subtle section heading above the gallery: "Our Work in Action" — builds trust and provides semantic context
- Add `decoding="async"` to all gallery images for smoother rendering

### 3. Accessibility
- Descriptive, unique alt text per image (not generic "duct cleaning photo 1")
- Gallery section gets an `aria-label` for screen readers

## Files Changed

### `src/assets/` — 3 new WebP images
- `duct-cleaning-branded.webp` (close-up branded technician)
- `duct-cleaning-ladder.webp` (ladder ceiling vent)  
- `duct-cleaning-bedroom.webp` (bedroom vent service)

### `src/components/ServicePageShell.tsx`
- Increase gallery row height from 180px → 220px
- Add "Our Work in Action" heading above the gallery grid
- Add `decoding="async"` and dimension attributes to gallery images

### `src/pages/DuctCleaningPage.tsx`
- Import 3 new assets
- Pass `galleryImages` array with descriptive alt text:
  - Slot 1: "AC Assurance technician cleaning ceiling duct in branded uniform"
  - Slot 2: "Technician on ladder servicing ceiling vent register"
  - Slot 3: "Professional duct cleaning service in Southwest Florida bedroom"

