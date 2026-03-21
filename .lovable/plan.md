

# Replace Inline SVG Trane Logos with Official Trane Logo Image

## What
The uploaded image is the official Trane logo (red globe + "TRANE" wordmark + tagline). The current site uses a crude inline SVG (red circle with 3 white stripes) as a placeholder. We need to replace all instances with the real logo.

## Steps

1. **Copy uploaded image** to `src/assets/trane-logo.png` and import it where needed.

2. **`src/pages/Index.tsx`** (line ~189-192) — Replace the inline SVG + styled "TRANE" text with an `<img>` tag using the official logo. Size ~120px wide, with alt="Trane - It's Hard To Stop A Trane®".

3. **`src/pages/TraneProducts.tsx`** (line ~32-33) — Replace the hero SVG + "TRANE" text with the same `<img>` tag, sized larger (~160px wide) for the hero context.

4. **`src/pages/TraneHeatPumps.tsx`** and **`src/pages/TraneAirConditioners.tsx`** — These pages have a small Shield icon + "Independent Trane Dealer" badge in their heroes. No inline SVG globe mark, so no change needed unless you want the logo added. Will leave as-is since they don't have the incorrect logo.

5. **Footer** (`src/components/layout/Footer.tsx` line 16-18) — The footer badge is text-only ("Independent Trane Dealer | It's Hard To Stop A Trane®"), no SVG. No change needed here.

## Files Changed
| File | Change |
|------|--------|
| `src/assets/trane-logo.png` | Copy from upload |
| `src/pages/Index.tsx` | Replace SVG+text with logo image |
| `src/pages/TraneProducts.tsx` | Replace SVG+text with logo image |

