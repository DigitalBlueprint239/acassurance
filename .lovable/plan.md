

# Improve BBB Logo Display Across the Site

## Current State
The BBB logo appears in 2 places with image assets:
1. **Homepage hero trust strip** — `h-8` (small, inline with text badges)
2. **Footer** — `h-10` with `opacity-80`, next to small text label

Both instances are undersized and low-contrast. The logo blends into its surroundings rather than standing out as a trust credential.

## Changes

### 1. Homepage Hero Trust Strip (`src/pages/Index.tsx`, ~line 150-156)
- Increase BBB logo from `h-8` to `h-10` so it's more legible alongside the other badges
- Add a subtle white background container behind it (`bg-white rounded px-1`) to ensure clean rendering on the frosted glass strip

### 2. Footer (`src/components/layout/Footer.tsx`, ~line 20-23)
- Increase BBB logo from `h-10` to `h-12` for better footer presence
- Remove `opacity-80` — show at full opacity for maximum clarity on the navy background
- Add a small white rounded container behind it (`bg-white/90 rounded-md p-1.5`) so the logo's colors pop against the dark footer instead of getting lost
- Keep the "BBB Accredited Business" text label beside it

### 3. No layout or spacing changes
- No section reordering or structural changes
- Existing padding, margins, and surrounding elements stay exactly as they are

## Files Modified (2)
| File | Change |
|------|--------|
| `src/pages/Index.tsx` | Enlarge BBB logo to h-10, add subtle white backing |
| `src/components/layout/Footer.tsx` | Enlarge BBB logo to h-12, full opacity, white backing container |

