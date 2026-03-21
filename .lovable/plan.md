

# Remove Teal — Replace with Navy + White Brand Palette

## The Problem
Teal (#14b8a6) is used as the site-wide accent color in ~15 files across buttons, icons, stars, badges, hover states, stats, and utility classes. The user wants it replaced with a clean white/light gray accent approach consistent with a Navy + White brand.

## New Color Strategy

The site keeps Brand Navy (#0A1F44) as primary. Teal is eliminated everywhere. The replacement approach:

- **CTA buttons** (hero, header, emergency, financing): Navy background (`bg-primary text-primary-foreground`) instead of teal — high contrast, authoritative
- **Icon circles** (TrustBar, Why Choose Us): Navy background stays (`section-navy` icons already white)
- **Stars** (reviews, featured reviews): Gold/amber (`fill-amber-400 text-amber-400`) — industry standard for ratings
- **Hover glows on cards**: Navy-tinted (`hover:shadow-primary/10 hover:border-primary/30`)
- **Text links / "Learn more" arrows**: Navy (`text-primary`)
- **Stats bar numbers**: White (`text-white`) on navy background
- **Urgency pill**: Light gray bg (`bg-gray-100 border-gray-200 text-gray-700`)
- **Reviews stats bar**: Navy background instead of teal
- **Active dots**: Navy (`bg-primary`)
- **Floating button / Sticky CTA / ScrollCallReminder**: Navy styling
- **Trane elements**: Remain Trane Red (#EF3C13) — untouched

## CSS Variable Changes (src/index.css)

Update root variables:
- `--accent`: change from `173 80% 40%` to `220 72% 15%` (same as primary/navy)
- `--accent-foreground`: stays `0 0% 100%` (white)
- `--ring`: change from `173 80% 40%` to `220 72% 15%`
- `--brand-accent`: change to match navy
- `--brand-teal`: change to match navy (kept for backward compat, value now navy)
- Remove `border-teal-500/60` from `.glass-hero-card`, replace with `border-white/30`
- Update comment from "Deep Navy / Teal / White" to "Deep Navy / White"

## File-by-File Changes

### 1. `src/index.css`
- Change `--accent`, `--ring`, `--brand-accent`, `--brand-teal` CSS vars from teal to navy
- Update `.glass-hero-card` border from `border-teal-500/60` to `border-white/30`

### 2. `src/pages/Index.tsx`
- Hero star icon: `fill-amber-400 text-amber-400` (gold stars)
- Hero headline span: `text-primary` instead of `text-brand-teal`, remove textShadow
- Hero trust pill star: `fill-amber-400 text-amber-400`
- Hero CTA button: `bg-primary text-primary-foreground hover:bg-primary/90`
- Urgency pill: `bg-gray-100 border-gray-200 text-gray-700`
- Owner badge: `bg-primary text-white`
- Trust ribbon icons: `text-primary`
- Stats bar numbers: `text-white font-extrabold` (on navy bg, already white-friendly)
- Service cards: hover `hover:shadow-primary/10 hover:border-primary/30`, icon `text-primary`, title hover `group-hover:text-primary/80`, "Learn more" `text-primary`
- Why Choose Us icons: `bg-white/20` (already on navy bg)
- Financing button: `bg-white text-primary hover:bg-white/90`

### 3. `src/components/layout/Header.tsx`
- "Get a Free Quote" button: `bg-white text-primary hover:bg-white/90` — remove teal hover shadow
- Mobile menu button: same `bg-white text-primary`

### 4. `src/components/TrustBar.tsx`
- Icon circles: `bg-primary` (navy) instead of `bg-brand-teal`

### 5. `src/components/TrustBadgeStrip.tsx`
- Icon circles: `bg-primary` instead of `bg-brand-teal`

### 6. `src/components/FeaturedReviews.tsx`
- Stars: `fill-amber-400 text-amber-400`
- Active dot: `bg-primary`
- Google link: `text-primary hover:underline`

### 7. `src/components/ReviewSection.tsx`
- Stars: `fill-amber-400 text-amber-400`
- Card hover: `hover:shadow-primary/10 hover:border-primary/30`

### 8. `src/pages/Reviews.tsx`
- Hero stars: `fill-amber-400 text-amber-400`
- Stats bar: `bg-primary` (navy) instead of `bg-brand-teal`
- Review card stars: already use `fill-accent text-accent` which will auto-update via CSS var
- CTA button: already uses `bg-accent` which auto-updates

### 9. `src/components/EmergencyCallout.tsx`
- CTA button: `bg-white text-primary hover:bg-white/90` (on navy bg)

### 10. `src/components/SWFLServiceMap.tsx`
- Map pin: `bg-primary` instead of `bg-brand-teal`, pings `bg-primary/20` and `bg-primary/30`

### 11. `src/components/ServicePageShell.tsx`
- Hero CTA button: `bg-primary text-white hover:bg-primary/90`
- Checkmark icons: `text-primary`
- Bottom CTA section: `bg-primary` (navy) instead of `bg-teal-600`
- Bottom text: `text-primary-foreground/80` instead of `text-teal-100`
- "Request Service" button: `text-primary` instead of `text-teal-700`
- Phone hover: `hover:bg-primary/80` instead of `hover:bg-teal-700`

### 12. `src/components/FloatingServiceButton.tsx`
- Already uses `bg-accent` — auto-updates via CSS var change

### 13. `src/components/layout/StickyMobileCTA.tsx`
- Already uses `bg-accent` — auto-updates via CSS var change

### 14. `src/components/ScrollCallReminder.tsx`
- Already uses `bg-accent` — auto-updates via CSS var change

### 15. `src/App.tsx`
- Loading spinner: `border-primary` instead of `border-brand-teal`

### 16. `tailwind.config.ts`
- No structural changes needed — `brand.teal` and `brand.accent` will pick up new CSS var values

## What is NOT touched
- Trane Red (#EF3C13) elements on Index.tsx, TraneProducts.tsx, Footer.tsx
- Navigation structure, layout, content, fonts
- All Trane pages (TraneHeatPumps.tsx, TraneAirConditioners.tsx)

## Files Modified (15 total)
`src/index.css`, `src/pages/Index.tsx`, `src/components/layout/Header.tsx`, `src/components/TrustBar.tsx`, `src/components/TrustBadgeStrip.tsx`, `src/components/FeaturedReviews.tsx`, `src/components/ReviewSection.tsx`, `src/pages/Reviews.tsx`, `src/components/EmergencyCallout.tsx`, `src/components/SWFLServiceMap.tsx`, `src/components/ServicePageShell.tsx`, `src/components/FloatingServiceButton.tsx`, `src/components/ScrollCallReminder.tsx`, `src/App.tsx`, `src/pages/About.tsx`

