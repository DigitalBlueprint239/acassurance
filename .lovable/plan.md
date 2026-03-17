

## Implement Final Hero Redesign

Three files to change. Asset replacement + hero layout conversion + CSS gradient update.

### 1. `src/assets/hero-owner.jpg`
Overwrite with `user-uploads://image-12.png`.

### 2. `src/pages/Index.tsx` — Replace hero section (lines 37–94)

Convert from split-layout to full-width background image with text overlay.

**Desktop**: Single container with background image (`object-cover`, `object-[70%_center]`), `min-h-[600px]`. Left gradient overlay for text readability. Text block constrained to `max-w-lg` on the left.

**Mobile**: Stacked — text on navy bg first, image below at `h-[300px]` with `object-[60%_40%]`.

**Copy** (final approved):
- Eyebrow: `Trusted AC & Heating Service in Southwest Florida`
- H1: `Fast, Reliable AC Repair & Installation in Fort Myers & Cape Coral`
- Sub: `Licensed HVAC experts serving Southwest Florida. Same-day service. Honest pricing. No surprises.`
- CTA1: Get Free Estimate (teal)
- CTA2: Call (239) 365-3090 (outline)
- Badges: Licensed & Insured · 24/7 Emergency Service · BBB Accredited (3 only)
- Urgency: `Need help fast? Call now for same-day service.` — `text-white/70 text-sm mt-4`

No animations. No offer strip.

### 3. `src/index.css` — Update `.hero-image-blend`

Change gradient for full-width background coverage:
```css
.hero-image-blend {
  background: linear-gradient(to right, hsl(216, 75%, 14%) 0%, hsl(216, 75%, 14%, 0.9) 25%, hsl(216, 75%, 14%, 0.4) 50%, transparent 65%);
}
```

### No changes to
All other homepage sections, TrustBadgeStrip, footer, header, layout.

