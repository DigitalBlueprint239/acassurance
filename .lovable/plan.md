

## Generate Favicon from AC Assurance Logo

The `index.html` already references `/favicon.png` correctly on line 5. The issue is that the current `public/favicon.png` file is likely empty or invalid from the previous copy attempt.

### Plan

1. **Generate a favicon-sized version** of the AC Assurance logo (`src/assets/logo.png`) — crop to just the hexagon icon mark (no text), resize to 32x32 or 64x64 pixels, and save as `public/favicon.png`
2. Since we can't do image processing in-browser, we'll use the **AI image generation API** to create a clean 64x64 favicon based on the existing logo design — a navy hexagon with "AC" letters in silver/white
3. Save the generated image to `public/favicon.png`
4. No changes needed to `index.html` — the link tag on line 5 already points to `/favicon.png`

### Files Modified
- `public/favicon.png` — replaced with a proper favicon-sized image generated from the brand logo

