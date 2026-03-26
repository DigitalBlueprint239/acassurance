

# Commercial Refrigeration Page — Industrial-Tech Redesign

## Overview
Full rewrite of `CommercialRefrigPage.tsx` from the generic `ServicePageShell` into a bespoke, premium page mirroring the IAQ page pattern. The uploaded Trane unit photo will be used as the hero image.

## Changes

### 1. Copy uploaded image into project
- Copy `user-uploads://4596814808267760749.JPG` → `src/assets/commercial-unit.jpg`

### 2. Rewrite `src/pages/CommercialRefrigPage.tsx`
Follow the proven IAQ page architecture with commercial-specific content:

**Hero — 65/35 Asymmetric Split:**
- Left panel (65%): Deep midnight navy gradient
  - Glassmorphism trust badge: green pulsing dot + "24/7 Priority Response · Licensed & Bonded"
  - Two-tone H1: **"Zero Downtime."** (extrabold) / "Commercial Cooling Guaranteed." (light)
  - Subtitle about protecting inventory and bottom line
  - Two CTAs: solid white "Request Priority Service" + outline "Call (239) 365-3090"
  - Staggered `animate-slide-in-left` entrance
- Right panel (35%): Gradient from midnight navy to Cool Steel (#F8FAFC)
  - Uploaded unit image with negative left margin for overlap/depth
  - Blue `animate-glow-pulse` aura behind the unit
  - `animate-fade-scale-in` on the image

- Mobile: image on top (stacked), text below

**TrustBar** — kept between hero and business impact section

**"What's at Stake" Section** (replaces IAQ "How It Works"):
- 3-column layout on Cool Steel (#F8FAFC) background
- Step 1: ShieldCheck → "Inventory Protection" — prevent product loss
- Step 2: Zap → "Energy Efficiency" — precision-tuned compressors lower overhead
- Step 3: ClipboardCheck → "Compliance Ready" — health and safety cooling standards
- Numbered circles, Lucide icons, connecting dashed lines

**Benefits Grid + Description:** Keep existing 6 benefits in a 2-column card grid with Cool Steel accent borders

**Bottom CTA:** Brand navy section with "Protect Your Business Today" heading

### 3. Files modified
| File | Action |
|------|--------|
| `src/assets/commercial-unit.jpg` | New — copied from upload |
| `src/pages/CommercialRefrigPage.tsx` | Full rewrite |

No changes needed to `tailwind.config.ts` — all required animations (`slide-in-left`, `fade-scale-in`, `glow-pulse`) already exist.

