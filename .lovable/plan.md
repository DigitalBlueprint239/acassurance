

# Add Legitimate BBB Accredited Business Logo

## Current State
The homepage trust ribbon (line 156-166 in `Index.tsx`) already has a BBB badge using an external URL from `bbb.org`. This external URL is unreliable — BBB blocks hotlinking, so the image likely fails to load silently.

## Fix
Since AC Assurance is confirmed BBB Accredited, we need a reliable BBB logo. The approach:

1. **Save BBB logo locally** — Download/create the official BBB Accredited Business seal as `src/assets/bbb-accredited.png` so it loads reliably without external dependencies.

2. **Update `src/pages/Index.tsx`** — Import the local asset and replace the external `bbb.org` URL. Add `width` and `height` attributes to prevent CLS:
   ```
   <img src={bbbLogo} alt="BBB Accredited Business" className="h-6 w-auto" width={24} height={24} />
   ```

3. **Consider adding BBB to Footer** — Add a small "BBB Accredited Business" badge in `src/components/layout/Footer.tsx` near the Trane dealer badge for additional trust signaling.

## Files Modified (2-3)
| File | Change |
|------|--------|
| `src/assets/bbb-accredited.png` | Local BBB logo asset |
| `src/pages/Index.tsx` | Import local asset, replace external URL, add dimensions |
| `src/components/layout/Footer.tsx` | Optional: add BBB badge near Trane badge |

