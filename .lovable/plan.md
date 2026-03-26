

# Replace Attic Air Handler Photo

## What
Replace the current `workAirHandler` image (which doesn't actually show an attic) with the uploaded photo of a Trane air handler unit in an attic setting — matching the caption "Attic Air Handler Replacement — Bonita Springs."

## Changes

### 1. Save new image
- Copy `user-uploads://4771807005454633316.JPG` → `src/assets/work/air-handler.png` (overwrite existing)

### 2. No code changes needed
The import and `workPhotos` array already reference this file path. Overwriting the asset file is all that's required.

