
# Favicon Emergency Fix Plan (All favicon endpoints + cache-proofing)

## What I found
- `index.html` currently points both icon links to `/favicon.png`.
- `public/favicon.ico` was deleted, so there is no explicit `.ico` file in the repo.
- `public/favicon.png` is the correct AC logo, but favicon handling is still fragile across browsers/crawlers without a real `.ico` + multi-size icon set.

## Implementation plan

1. **Restore a real `.ico` favicon with AC logo**
   - Create `public/favicon.ico` from the AC logo (multi-resolution inside: 16x16, 32x32, 48x48).
   - This ensures browsers that still auto-request `/favicon.ico` cannot fall back to old cached/default behavior.

2. **Add a proper favicon set (not just one PNG)**
   - Create:
     - `public/favicon-16x16.png`
     - `public/favicon-32x32.png`
     - `public/apple-touch-icon.png` (180x180)
     - `public/android-chrome-192x192.png`
     - `public/android-chrome-512x512.png`
   - Use the AC Assurance logo as the source so every device/crawler sees the same brand.

3. **Update `index.html` head tags to explicit, standards-friendly favicon links**
   - Replace current minimal icon tags with explicit entries:
     - `rel="icon"` to `/favicon.ico`
     - PNG icons with `sizes="16x16"` and `sizes="32x32"`
     - `rel="apple-touch-icon"` to `/apple-touch-icon.png`
     - keep manifest link
   - This removes ambiguity and ensures consistent favicon selection by Chrome/Safari/Google crawlers.

4. **Update `public/manifest.json` icon entries**
   - Point manifest icons to `android-chrome-192x192.png` and `android-chrome-512x512.png`.
   - Keep brand colors and app naming as AC Assurance.

5. **Verification pass (preview + published)**
   - Confirm these URLs resolve with 200:
     - `/favicon.ico`
     - `/favicon-16x16.png`
     - `/favicon-32x32.png`
     - `/apple-touch-icon.png`
     - `/manifest.json`
   - Verify network tab loads the new favicon assets.
   - Verify browser tab icon updates after hard refresh/incognito.
   - Verify published domain serves the same assets (not stale fallback).

## Files to modify/create
- **Modify:** `index.html`, `public/manifest.json`
- **Create/replace:** `public/favicon.ico`, `public/favicon-16x16.png`, `public/favicon-32x32.png`, `public/apple-touch-icon.png`, `public/android-chrome-192x192.png`, `public/android-chrome-512x512.png`

## Why this will fix it
This removes all fallback ambiguity and makes every major favicon path explicit and AC-branded, including the legacy `.ico` route that often causes “still seeing old logo” issues.
