

# Add Photo Gallery Strip to Service Pages

## What
Add an optional `galleryImages` prop to `ServicePageShell` that renders 3-4 photos in an asymmetric grid between the hero/TrustBar and the description section. This creates visual impact without changing existing content flow.

## Layout
```text
┌──────────────────┬───────────┐
│                  │           │
│   Large photo    │  Photo 2  │
│   (spans 2 rows) │           │
│                  ├───────────┤
│                  │  Photo 3  │
└──────────────────┴───────────┘
```
On mobile: horizontal scroll strip or stacked 2-column grid.

## Changes

### 1. Update `ServicePageShell.tsx`
- Add optional `galleryImages` prop: `{ src: string; alt: string }[]`
- Render a gallery section after `<TrustBar />` when images are provided
- Use CSS grid with `grid-rows-2` for the asymmetric layout
- Add rounded corners, subtle shadow, and `object-cover` for consistent sizing
- Animate on scroll with a simple fade-in (CSS only, no library)

### 2. Update `MiniSplitPage.tsx` as first example
- Import the uploaded mini-split image plus placeholder references for 2-3 additional gallery slots
- Pass `galleryImages` array to the shell
- For now, we can reuse the existing mini-split photo in multiple slots as a placeholder until more photos are uploaded

## Notes
- No changes to other service pages until photos are provided
- Gallery gracefully hidden when prop is omitted (zero impact on existing pages)
- Images use `loading="lazy"` since they're below the fold

