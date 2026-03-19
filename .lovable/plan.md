

# Elite Brand Alignment & Hero Refinement

## Files Changed

| File | Changes |
|------|---------|
| `src/components/layout/Header.tsx` | Replace logo with uploaded image, add phone number to nav bar |
| `src/pages/Index.tsx` | Hero typography fixes, urgency pill restyle to teal, subheadline color, frost overlay on service cards |
| `src/components/layout/Footer.tsx` | Link service areas to local landing pages |
| `src/index.css` | Add pulse animation for urgency pill |
| Copy uploaded logo | `user-uploads://image-13.png` → `src/assets/logo-full.png` |

---

## 1. Logo Swap (Header.tsx)

- Copy uploaded logo to `src/assets/logo-full.png`
- Import new logo asset, replace existing `logo.png` reference
- Render at `h-16` with `w-auto`, remove `brightness-0 invert` filter (the uploaded logo has a white background — on navy it needs the invert filter to make the dark navy text white; keep `brightness-0 invert`)
- Add phone number inline in the desktop nav area (already present — confirmed)

## 2. Hero Typography & Polish (Index.tsx)

- **H1 consistency**: Already uses `font-extrabold` on the full h1 — the teal span inherits this. No change needed.
- **Subheadline color**: Change `text-foreground/70` → `text-primary/70` so it renders in Brand Navy at 70% opacity instead of generic dark gray
- **Urgency pill restyle**: Change from amber palette (`bg-amber-50/80 border-amber-200/60 text-amber-800`) to teal palette (`bg-teal-50/80 border-teal-200/60 text-teal-800`) to unify with the three-color system
- **Fire emoji pulse**: Already has `animate-pulse-soft` — confirmed working
- **Service cards frost**: Cards already use `frost-card` class (`bg-white/60 backdrop-blur-md border-white/40`). Add a subtle hover glow: `hover:shadow-[0_0_15px_rgba(20,184,166,0.08)]`

## 3. Footer SEO Enhancement (Footer.tsx)

- Convert service area list items into `<Link>` elements pointing to local landing pages (using `area.slug` when available)
- Add Naples first in the list to reinforce Tier 1 market priority
- Update footer tagline from "Fort Myers, Cape Coral" to include Naples

## 4. Review Cards Polish (ReviewSection.tsx)

- Add `frost-card` class to review cards for visual consistency with service cards
- Add subtle teal hover glow matching service cards

## Summary

This pass tightens the remaining color inconsistencies (amber → teal urgency pill, subheadline → navy), swaps in the full brand logo, enhances the footer for local SEO, and adds frost/glow polish to review cards. Total: 5 files, focused micro-refinements.

