

# BBB Logo — Maximum Impact Treatment

## What's there now
- **Homepage trust strip**: `h-10` with tight `bg-white rounded px-1` — it's bigger than before but still reads as a tiny inline badge crammed between icons
- **Footer**: `h-12` inside `bg-white/90 rounded-md p-1.5` — improved but still modest, sitting next to small `text-xs opacity-70` label

## What's holding it back
1. In the trust strip, the BBB logo competes with 3 other icon+text badges at the same visual weight — it doesn't stand out as the premium credential it is
2. The `width={24} height={24}` HTML attributes on the homepage img are outdated (leftover from when it was smaller) and may cause rendering quirks
3. Footer label is still `opacity-70` — should be confident, not faded
4. No link to the actual BBB profile — a clickable BBB logo is an industry best practice that adds legitimacy

## Changes

### 1. Homepage Trust Strip (`src/pages/Index.tsx`)
- Increase logo to `h-12` with proper container: `bg-white rounded-lg px-2 py-1 shadow-sm`
- Remove stale `width={24} height={24}` attributes (they conflict with `h-12`)
- Give the BBB badge its own slightly wider flex item so it doesn't get squeezed between the icon badges

### 2. Footer (`src/components/layout/Footer.tsx`)
- Increase logo to `h-14`
- Upgrade container to `bg-white rounded-lg p-2.5 shadow-sm` for a clean card-like presentation
- Change label to `text-sm font-semibold opacity-90` (larger, bolder, more visible)
- Wrap the BBB logo + label in an `<a>` tag linking to the AC Assurance BBB profile (opens in new tab) — this is what legitimate BBB-accredited businesses do
- Stack the label below the logo instead of beside it for a cleaner badge-card look

### 3. No layout or structural changes
- Same grid, same sections, same positions

## Files Modified (2)
| File | Change |
|------|--------|
| `src/pages/Index.tsx` | BBB logo h-12, better container with shadow, remove stale width/height |
| `src/components/layout/Footer.tsx` | BBB logo h-14, card-style container, bolder label, link to BBB profile, vertical stack layout |

