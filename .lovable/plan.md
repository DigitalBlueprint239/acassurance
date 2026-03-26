

# Add Second Image to Heating Services Hero

## What
Add the new Trane Link system controller image alongside the existing thermostat image in the hero's image panel, creating a stacked or side-by-side gallery effect.

## Design
On desktop, the right 40% panel will show both images stacked vertically with a small gap — the existing thermostat image on top, the Trane Link spec sheet below. On mobile, show both images side-by-side in the top image strip to keep height compact.

## Changes

### 1. Save the new image
- Copy `user-uploads://897ef205-ee2f-ef11-a065-3cecef705787.jpeg` → `src/assets/trane-link-system.jpeg`

### 2. `src/pages/HeatingServicesPage.tsx`
- Import the new image: `import traneLink from "@/assets/trane-link-system.jpeg"`
- **Mobile image strip**: Change from single image to a flex row with both images side-by-side, each `max-h-[200px]`
- **Desktop image panel**: Stack both images vertically with `flex-col gap-4`, the thermostat image slightly larger on top and the Trane Link sheet below, both using `object-contain` with `drop-shadow`

