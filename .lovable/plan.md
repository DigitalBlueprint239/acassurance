

# Update BBB Logo Links to Correct Profile URL

## Summary
Three locations need updating. The footer already has a link but points to an old/wrong BBB profile URL. The hero trust ribbon BBB logo is not linked at all. The TopBar and Header only have text mentions (no logo images), so no changes needed there.

## Changes

### 1. Footer (`src/components/layout/Footer.tsx`)
- **Line 20**: Update the existing `href` from the old URL to `https://www.bbb.org/us/fl/cape-coral/profile/air-conditioning-contractor/ac-assurance-cooling-and-heating-llc-0653-90454763`
- Already has `target="_blank"` and `rel="noopener noreferrer"` — no other changes needed.

### 2. Hero Trust Ribbon (`src/pages/Index.tsx`)
- **Lines 148–156**: The BBB badge in the trust ribbon at the bottom of the hero image is currently a plain `<div>`. Wrap the BBB `<img>` in an `<a>` tag linking to the same BBB profile URL with `target="_blank"`, `rel="noopener noreferrer"`, and `cursor-pointer`.

### No changes needed
- **TopBar.tsx** and **Header.tsx**: These only contain text mentions of "BBB Accredited" (no logo images), so no link wrapping is required per the request.
- **TrustBadgeStrip.tsx** and **TrustBar.tsx**: These don't contain BBB logos.
- Service/city pages use `ServicePageShell` which doesn't render BBB logos directly — the footer handles it globally.

## Files modified
| File | Change |
|------|--------|
| `src/components/layout/Footer.tsx` | Fix BBB profile URL |
| `src/pages/Index.tsx` | Wrap hero BBB badge in anchor tag |

