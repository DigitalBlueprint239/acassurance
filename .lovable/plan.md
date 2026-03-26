

# Premium IAQ Page Redesign — "Product Launch" Hero

## Overview
Transform the Indoor Air Quality page into a premium, Apple-inspired product showcase with animated entrance effects, a floating product image with glow aura, asymmetric layout, and a new "Process" storytelling section.

## Changes

### 1. Add custom keyframes to `tailwind.config.ts`
- Add `slide-in-left` keyframe (translateX(-40px) → 0 with opacity)
- Add `fade-scale-in` keyframe (scale 0.9 + opacity 0 → scale 1 + opacity 1)
- Add `glow-pulse` keyframe for the aura behind the product image (soft opacity pulse on a radial blur)
- Register corresponding animation utilities

### 2. Rewrite `src/pages/IndoorAirQualityPage.tsx`
Complete rewrite with the following sections:

**Hero Section — Asymmetric 65/35 Split:**
- Left panel (65%): Deep midnight navy gradient background
  - Two-line H1 with mixed weights: **"Breathe."** (font-extrabold, text-5xl/6xl) on line 1, **"Pure Air. Guaranteed."** (font-light) on line 2
  - Subtitle paragraph in white/80
  - Floating "5-Star Rated · Verified" badge positioned near CTAs using a glassmorphism pill (backdrop-blur, bg-white/10, border-white/20)
  - Two CTAs: solid white button + outline call button
  - Entrance animation: `animate-slide-in-left` with slight delay staggering via inline `animation-delay`
- Right panel (35%): Gradient from midnight navy to Oxygen Blue (#E0F2FE)
  - Product image positioned with `relative z-10` and negative left margin (`-ml-16 lg:-ml-24`) so it overlaps the panel boundary, creating depth
  - Behind the image: an animated glow div (`animate-glow-pulse`) — a large radial gradient circle in Oxygen Blue with blur, pulsing softly
  - Image uses `object-contain`, `drop-shadow-2xl`, `animate-fade-scale-in`
- Mobile: Stacked — image on top with the glow effect, text below

**Process Section (new) — between hero+TrustBar and benefits:**
- Heading: "How It Works"
- 3-step horizontal layout (vertical on mobile) with connecting lines/arrows
  - Step 1: Wind/intake icon → "Air Intake" — "Your existing HVAC draws in indoor air"
  - Step 2: Shield/filter icon → "Advanced Purification" — "UV lights and HEPA filtration eliminate 99.9% of contaminants"
  - Step 3: Sparkles icon → "Pure Air Delivered" — "Clean, fresh air circulated throughout your home"
- Each step: numbered circle, Lucide icon, title, description
- Oxygen Blue (#E0F2FE) background section with navy text
- Subtle connecting line between steps using a border-dashed div

**Benefits grid, description, and bottom CTA:** Keep existing content, update accent touches to use Oxygen Blue highlights where appropriate.

### 3. Color accents
- Use `#E0F2FE` (Oxygen Blue) for: process section background, glow aura, accent borders on benefit cards
- Keep brand navy for primary text sections and bottom CTA

### 4. Files modified
- `tailwind.config.ts` — add 3 keyframes + animations
- `src/pages/IndoorAirQualityPage.tsx` — full rewrite

