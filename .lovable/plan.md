

# Replace Lovable Default Branding with AC Assurance Logo

## Problem
- **OG/Twitter images** point to a Lovable-generated screenshot URL (R2 CDN) — this is what Google pulls into search results
- **Favicon** exists at `public/favicon.png` but needs verification it's the AC Assurance logo (not Lovable default)
- **Header alt text** says "AC Assurance Cooling & Heating" — needs "Logo" suffix per request
- **No manifest.json or apple-touch-icon** exists — should add for completeness

## Plan

### 1. Copy AC Assurance logo to public directory for OG/favicon use
- Copy `src/assets/ac-assurance-logo.png` to `public/og-logo.png` (for OG image — the circular badge logo works well as a social sharing image)
- The existing `public/favicon.png` should already be the AC Assurance favicon per memory — verify and keep

### 2. Update `index.html` OG and Twitter image tags
- Replace both `og:image` and `twitter:image` URLs from the Lovable R2 CDN screenshot to `/og-logo.png`
- Use the full production URL: `https://www.acassurancefl.com/og-logo.png`
- Add `og:image:width`, `og:image:height`, and `og:image:alt` meta tags for proper rendering
- Add `apple-touch-icon` link tag pointing to `/og-logo.png`

### 3. Update Header alt text
- In `Header.tsx` line 36, change alt from `"AC Assurance Cooling & Heating"` to `"AC Assurance Cooling & Heating Logo"`

### 4. Add `manifest.json`
- Create `public/manifest.json` with app name "AC Assurance Cooling & Heating" and icon entries pointing to the logo
- Add `<link rel="manifest" href="/manifest.json">` to `index.html`

### 5. Add JSON-LD logo to schema
- Add `"logo": "https://www.acassurancefl.com/og-logo.png"` to the LocalBusiness schema in `index.html`

## Files Modified/Created

| File | Change |
|------|--------|
| `public/og-logo.png` | Copy of `src/assets/ac-assurance-logo.png` for public access |
| `index.html` | Update og:image, twitter:image, add apple-touch-icon, manifest link, logo in schema |
| `src/components/layout/Header.tsx` | Update alt text to include "Logo" |
| `public/manifest.json` | New — PWA manifest with AC Assurance branding |

## Post-Implementation
The direct URL for the logo image will be: `https://www.acassurancefl.com/og-logo.png` — submit this to Google Search Console for re-indexing.

