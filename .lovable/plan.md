

# Add Real Mini-Split Photos to Gallery

## What
Replace the placeholder gallery images on the Mini-Split page with the 4 newly uploaded photos (plus the existing hero image = 5 total). The gallery grid currently supports 3 images, so we'll pick the best 3 for the grid slots.

## Photo Assignment
- **Large photo (spans 2 rows)**: The existing hero image (indoor wall unit) -- already imported
- **Photo 2 (top-right)**: `2296823128312983692_1-2.JPG` -- clean indoor wall-mounted unit on white wall
- **Photo 3 (bottom-right)**: `700838430447260170.JPG` -- outdoor Mitsubishi condenser unit with landscaping

The other two photos (garage installations) are good but visually busier. We'll save them as assets for potential future use.

## Changes

### 1. Copy uploaded images to `src/assets/`
- `mini-split-indoor.webp` (wall-mounted unit on white wall)
- `mini-split-outdoor.webp` (Mitsubishi outdoor condenser)

### 2. Update `src/pages/MiniSplitPage.tsx`
- Import the two new images
- Update `galleryImages` array with unique real photos and proper alt text:
  - Slot 1 (large): existing hero image -- "Mini-split indoor wall unit installation"
  - Slot 2: indoor unit -- "Wall-mounted ductless mini-split unit"
  - Slot 3: outdoor condenser -- "Mitsubishi mini-split outdoor condenser unit"

