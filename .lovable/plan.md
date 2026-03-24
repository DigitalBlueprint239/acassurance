

# Professional-Level Header & Footer Branding Polish

## Current Issues

1. **Header**: Logo sits in a plain white box (`bg-white rounded-md px-2 py-1`). Nav links lack active state. "Get a Free Quote" button blends with background (white on white-ish). Phone number is small and not prominent enough. No trust credential visible in header.
2. **TopBar**: Generic styling, no brand differentiation. License number shown but BBB/Trane not referenced.
3. **Footer**: Logo is the circular badge at `h-14` — could be larger. BBB logo uses `brightness-0 invert opacity-70` which may wash it out. Bottom credentials strip (`bg-gray-900`) is disconnected from the navy footer. Trane badge is a small pill with low opacity. Service area links missing slugs for Bonita Springs, Estero, and Lehigh Acres despite those pages existing.
4. **Mobile menu**: No branding visible — just plain navy with text links. Missing license or trust signal.

## Changes

### 1. `src/components/layout/TopBar.tsx`
- Add "BBB Accredited" and "Independent Trane Dealer" text to the desktop top bar alongside the license
- Format: `24/7 Emergency Service | Licensed CAC1823832 | BBB Accredited`

### 2. `src/components/layout/Header.tsx`
- Add active route highlighting to nav links (use `useLocation` to detect current path, apply `text-white border-b-2 border-white` to active link)
- Make phone number more prominent with a subtle background pill (`bg-white/10 rounded-full px-3 py-1.5`)
- Add license micro-text below logo: small `text-[10px] text-primary-foreground/50` showing "LIC# CAC1823832"
- Mobile menu: add a small trust line at bottom — "Licensed CAC1823832 · BBB Accredited · Independent Trane Dealer"

### 3. `src/components/layout/Footer.tsx`
- Increase logo from `h-14` to `h-16` for better presence
- Remove `brightness-0 invert opacity-70` from BBB logo — show in natural colors on the navy background (just use `opacity-80` or no filter)
- Upgrade Trane dealer pill: increase opacity from `opacity-50` to `opacity-80`, slightly larger text
- Fix service area links: add slugs for Bonita Springs (`/ac-repair-bonita-springs`), Estero (`/ac-repair-estero`), Lehigh Acres (`/ac-repair-lehigh-acres`)
- Merge the bottom `bg-gray-900` credentials strip into the main footer border-t section to avoid visual disconnect — single clean bottom bar with copyright + license + privacy

### 4. `src/data/services.ts`
- Update `serviceAreas` array: add missing `slug` values for Bonita Springs, Estero, Lehigh Acres, and North Fort Myers so footer and homepage links work correctly

## Files Modified (4)
| File | Change |
|------|--------|
| `src/components/layout/TopBar.tsx` | Add BBB + Trane text to desktop bar |
| `src/components/layout/Header.tsx` | Active nav states, prominent phone, license micro-text, mobile trust line |
| `src/components/layout/Footer.tsx` | Larger logo, natural BBB colors, Trane pill upgrade, fix service area slugs, merge bottom strips |
| `src/data/services.ts` | Add missing slug values to serviceAreas |

