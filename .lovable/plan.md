

# Embed Elfsight Google Reviews Widget on /reviews Page

## What Changes
Replace the current hardcoded review cards section (lines 53-72) with the Elfsight Google Reviews widget embed. This gives real, live Google reviews instead of manually curated placeholders.

## Technical Details

### 1. `src/pages/Reviews.tsx`
- Replace the "Review Cards" section (the grid of 8 hardcoded review cards) with a container holding the Elfsight widget `<div>`
- Remove the `reviews` array (lines 9-18) since it's no longer needed

### 2. `index.html`
- Add the Elfsight platform script in `<head>`: `<script src="https://elfsightcdn.com/platform.js" async></script>`
- This loads once globally so it works on any page if needed later

### 3. Widget Div in Reviews.tsx
- Place `<div class="elfsight-app-6797d54a-9e55-4e28-ae17-97549347a240" data-elfsight-app-lazy></div>` inside the review section container
- Keep the hero, stats bar, and "Leave a Review" CTA sections unchanged

## Files Modified (2)
| File | Change |
|------|--------|
| `index.html` | Add Elfsight script tag in `<head>` |
| `src/pages/Reviews.tsx` | Replace hardcoded review cards with Elfsight widget div |

