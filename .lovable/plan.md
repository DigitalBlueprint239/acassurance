

# Step 1: Homepage Content Flow Optimization

## Problem
The homepage has 7 consecutive trust/social-proof sections between the hero and the services grid, creating scroll fatigue and redundancy:

1. Hero trust pill ("Owner-Operated · 5-Star Rated · Licensed & Insured")
2. Hero trust ribbon (Licensed, 5-Star, BBB, 24/7)
3. Stats bar (CAC1823832, 5-Star, Rapid, 100%)
4. TrustBar (Licensed, 5-Star, 24/7)
5. TrustBadgeStrip (Trane, Licensed, SWFL, Emergency)
6. Trane dealer card
7. ...then finally the Services grid

The user sees ~4 screens of trust signals before reaching actual content. This needs consolidation without losing any trust signal.

## Changes

### 1. Remove TrustBar and TrustBadgeStrip from homepage
- These two components repeat what the hero ribbon and stats bar already say
- Remove `<TrustBar />` and `<TrustBadgeStrip />` from `Index.tsx` (lines 195-196)
- Keep them importable for other pages if needed

### 2. Merge key signals into the stats bar
- The stats bar already covers License, Google rating, response, and owner-supervised
- Add "Independent Trane Dealer" as a 5th item (or replace "Rapid Response" since the hero already says "24/7")
- Change layout from `grid-cols-2 lg:grid-cols-4` to `grid-cols-2 lg:grid-cols-5` to accommodate

### 3. Move Trane dealer card below services grid
- Currently sits between trust sections and services — breaks the flow
- Move it to after the services grid (before "Why Choose Us" navy section)
- This creates the flow: Hero → Stats → Services → Trane → Why Choose Us

### 4. Tighten section spacing
- Reduce the gap between hero photo and stats bar (the team photo already has `-mt-12`)
- Change stats bar padding from `py-8` to `py-6` for tighter coupling

### 5. Resulting homepage scroll order
```text
Hero (headline, CTAs, urgency pill, review cards, team photo + trust ribbon)
Stats Bar (License, 5-Star, Rapid, Owner-Supervised, Trane Dealer)
Services Grid
Trane Dealer Card
Why Choose Us (navy)
Why Different (comparison)
SWFL Climate Expert
Recent Work
Featured Reviews
Service Areas
Financing
Emergency Callout
Contact Form
```

## Files Modified (1)
| File | Change |
|------|--------|
| `src/pages/Index.tsx` | Remove TrustBar + TrustBadgeStrip imports/usage, move Trane section below services, add Trane to stats bar, tighten spacing |

## What stays untouched
- All CSS, colors, component files (TrustBar.tsx and TrustBadgeStrip.tsx remain for use on other pages)
- Hero layout, review cards, team photo
- All other sections below services

