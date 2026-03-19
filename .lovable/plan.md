

# Site-Wide Brand Alignment — "High-Contrast Professional" Palette

## Summary
Transform the site from a generic white template into a cohesive Navy + Teal + White brand system across all components.

## Files Changed

| File | Changes |
|------|---------|
| `src/index.css` | Update CSS variables, add `.section-navy-deep` utility, frost card class |
| `src/components/layout/Header.tsx` | Navy background, white nav links, teal CTA with glow |
| `src/components/layout/TopBar.tsx` | Darker navy variant for visual hierarchy |
| `src/pages/Index.tsx` | "Why Choose Us" → navy section with white text/teal icons; frost service cards; teal star icons in hero ribbon; shimmer on all primary CTAs |
| `src/components/TrustBadgeStrip.tsx` | Teal icon circles instead of navy |
| `src/components/ReviewSection.tsx` | Star ratings → teal instead of accent blue |
| `src/components/EmergencyCallout.tsx` | CTA button → teal with shimmer |
| `src/components/StickyCallBar.tsx` | Ensure consistent navy styling |

---

## 1. Color Foundation (`src/index.css`)

Update CSS variables to tighten the palette:
- `--primary`: shift to deeper navy `220 72% 15%` (#0A1F44)
- `--accent`: change to Brand Teal `170 84% 40%` (#14b8a6 equivalent in HSL)
- `--brand-navy`: match `--primary`
- `--brand-navy-deep`: darker variant for TopBar (`222 78% 10%`)
- `.section-navy` background updated to match new primary
- Add `.frost-card` utility: `@apply bg-white/60 backdrop-blur-md border border-white/40 shadow-sm`

Headings base rule already uses `text-primary` — updating the variable cascades to all H1-H6 automatically.

## 2. Navigation Overhaul (`Header.tsx`)

- Header background: `bg-primary` (Brand Navy) instead of `bg-background`
- Border: `border-primary-foreground/10` for subtle separation from TopBar
- Nav links: `text-primary-foreground/80 hover:text-white`
- Phone number: `text-primary-foreground`
- "Get a Free Quote" button: `bg-brand-teal text-white hover:bg-brand-teal/90 hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] shimmer-btn`
- Mobile menu: `bg-primary` with `text-primary-foreground` links
- Hamburger icon: `text-primary-foreground`

## 3. TopBar Contrast (`TopBar.tsx`)

- Change from `section-navy` to the deeper navy-deep variant (`bg-brand-navy-deep`) so it's visually distinct from the header below it.

## 4. "Why Choose Us" → Navy Trust Break (`Index.tsx` lines 185-206)

- Section background: `section-navy` instead of `section-light`
- H2: `text-primary-foreground` instead of inheriting `text-primary`
- Icon circles: `bg-brand-teal` instead of `section-navy`
- Icons inside: `text-white`
- Title text: `text-primary-foreground`
- Description text: `text-primary-foreground/70`

This creates the "Trust Break" — a bold navy band that breaks the white scroll pattern.

## 5. Service Cards — Frost Effect (`Index.tsx` lines 166-181)

- Card class: replace `bg-card border border-border` with `bg-white/60 backdrop-blur-md border border-white/40 shadow-sm rounded-xl`
- Service icon color: `text-brand-teal` instead of `text-primary`
- "Learn more" accent stays teal (already `text-accent`, which will now be teal)

## 6. Icon Color Unification

Across all components, replace amber/yellow star icons with teal:

- **Hero trust ribbon** (Index.tsx line 147): icons already `text-brand-teal` — confirmed
- **Hero eyebrow star** (Index.tsx line 94): change `text-amber-500 fill-amber-500` → `text-brand-teal fill-brand-teal`
- **ReviewSection.tsx** (line 49): star ratings `fill-accent text-accent` — will auto-update since accent is now teal
- **Urgency pill** (Index.tsx): keep the 🔥 emoji as-is (it's fire, not a star — fits urgency)

## 7. Button Consistency

All primary CTAs site-wide get the same treatment:
- `bg-brand-teal text-white hover:bg-brand-teal/90 shimmer-btn`
- Applied to: Hero CTA, Header CTA, EmergencyCallout CTA, Financing CTA, StickyCallBar estimate button
- Secondary/outline buttons remain as-is for hierarchy

## 8. Trane Section Icon (`Index.tsx` line 212)

- Shield icon: `text-brand-teal` instead of `text-primary`

## Visual Result

```text
┌──────────────────────────────────┐
│  DEEP NAVY  ← TopBar            │
├──────────────────────────────────┤
│  BRAND NAVY  ← Header (white    │
│  links, teal CTA with glow)     │
├──────────────────────────────────┤
│  RADIAL WHITE  ← Hero           │
│  (teal accents, shimmer CTA)    │
├──────────────────────────────────┤
│  LIGHT GRAY  ← Trust Strip      │
├──────────────────────────────────┤
│  WHITE + FROST CARDS ← Services │
├──────────────────────────────────┤
│  BRAND NAVY  ← Why Choose Us    │
│  (white text, teal icons)       │
├──────────────────────────────────┤
│  WHITE  ← Trane / Work Photos   │
├──────────────────────────────────┤
│  LIGHT GRAY  ← Reviews          │
├──────────────────────────────────┤
│  BRAND NAVY  ← Emergency CTA    │
├──────────────────────────────────┤
│  WHITE  ← Form                  │
├──────────────────────────────────┤
│  BRAND NAVY  ← Footer           │
└──────────────────────────────────┘
```

Three-color palette enforced: Navy → authority, Teal → action, White → content.

