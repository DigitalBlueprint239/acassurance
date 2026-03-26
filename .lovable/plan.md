

# 10/10 Heating Services Hero Section

## Current Problem
The `ServicePageShell` hero treats every image as a full-bleed background with a dark overlay — great for wide action shots, but terrible for a product marketing image like the Trane thermostat. The image gets obscured and loses its visual impact.

## Design: Split-Panel Hero
A premium split layout where the text occupies the left side on a brand navy gradient, and the product image is showcased prominently on the right with no overlay — letting the image breathe and shine.

```text
┌──────────────────────────────────────────────────┐
│  ████████████████████  │                          │
│  █  HEATING SERVICES █  │   [Trane thermostat     │
│  █                   █  │    image — full height,  │
│  █  Subtitle text    █  │    object-contain or     │
│  █                   █  │    object-cover, clean   │
│  █  [CTA] [Call]     █  │    white/light bg]       │
│  ████████████████████  │                          │
└──────────────────────────────────────────────────┘
         60% text                40% image
         (mobile: stacked — image on top, text below)
```

## Changes

### 1. Save the uploaded image
- `user-uploads://Screen_Shot_2026-03-26_at_12.11.37_PM.png` → `src/assets/heating-hero.png`

### 2. `src/pages/HeatingServicesPage.tsx`
- Stop using `ServicePageShell` for this page
- Build a custom hero inline (or a new component) with the split-panel layout:
  - **Left panel**: Brand navy gradient background, white text, H1, subtitle, two CTAs
  - **Right panel**: Clean light/white background, image displayed large with `object-contain` so the product is fully visible — no dark overlay
  - **Mobile**: Image stacks on top (shorter height), text panel below
- Keep the rest of the page content (TrustBar, description, benefits) rendered below using the same patterns from ServicePageShell

### 3. `src/pages/HeatingServicesPage.tsx` — details
- Hero height: `min-h-[500px] lg:min-h-[560px]`
- Left side: `bg-gradient-to-br from-[hsl(220,72%,12%)] to-[hsl(220,72%,20%)]` with subtle radial glow
- Right side: `bg-white` or `bg-gray-50` — the product image sits cleanly
- Image uses `fetchPriority="high"`, `object-contain`, with some padding so it's not edge-to-edge
- Mobile: single column, image 250px tall on top, text panel below with navy bg

