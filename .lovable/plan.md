

# 10/10 Indoor Air Quality Hero — Split-Panel Design

## What
Replace the generic `ServicePageShell` hero with a custom split-panel layout (matching the Heating Services page pattern), showcasing the uploaded Trane IAQ filtration product image on a clean background where it can shine.

## Design
Same proven 60/40 split-panel pattern used on Heating Services:

```text
┌──────────────────────────────────────────────────┐
│  ████████████████████  │                          │
│  █  INDOOR AIR       █  │   [Trane IAQ filter     │
│  █  QUALITY          █  │    product image —       │
│  █                   █  │    object-contain,       │
│  █  Subtitle text    █  │    dark charcoal bg      │
│  █  [CTA] [Call]     █  │    matching the photo]   │
│  ████████████████████  │                          │
└──────────────────────────────────────────────────┘
         60% text                40% image
```

The product image has a dark charcoal background in the original photo, so the image panel will use `bg-[#3a3f47]` or similar to seamlessly extend that tone — making the product float naturally.

## Changes

### 1. Save the uploaded image
- `user-uploads://78500088-ca1b-f111-9c0c-005056bae5eb.png` → `src/assets/trane-iaq-filter.png`

### 2. Rewrite `src/pages/IndoorAirQualityPage.tsx`
- Remove `ServicePageShell` usage; build custom page inline (same pattern as `HeatingServicesPage.tsx`)
- **Hero section**: 60/40 split-panel
  - Left: Brand navy gradient (`from-primary to-[hsl(220,72%,20%)]`), radial glow, "Expert IAQ Solutions" pill, H1, subtitle, two CTAs (Get a Free Quote + Call)
  - Right (desktop): Dark charcoal background (`bg-[#3a3f47]`) to match the product photo's background, image displayed with `object-contain`, `fetchPriority="high"`, generous padding
  - Mobile: Product image on top (dark bg strip, `max-h-[280px]`), text panel below
- **Below hero**: TrustBar, description paragraph, 2-column benefits grid with checkmark icons, bottom CTA band — all matching existing page patterns

