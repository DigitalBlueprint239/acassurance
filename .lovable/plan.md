

## SEO-First Hero Rebuild

Executing the approved plan with the peer review note: `text-shadow` at `rgba(0,0,0,0.5)` — subtle lift, not a heavy drop-shadow.

### Changes in `src/pages/Index.tsx`

**Desktop hero (lines 50-84):**
1. Eyebrow → `⭐ TOP-RATED LOCAL HVAC SPECIALISTS | LIC# CAC1823832`
2. H1 → `Expert AC Repair & Installation in Fort Myers & Cape Coral` — remove `<br/>`, add `style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}`
3. Subheadline → `Southwest Florida's trusted team for 24/7 emergency repairs and energy-efficient installs. Honest pricing, fast response, and owner-backed quality.` — remove `<br/>`
4. Trust badges — add 4th: `{ icon: Star, label: "5-Star Rated on Google" }`
5. Micro-line → `🔥 High Demand: 3 slots remaining for Same-Day Service in Lee County.`

**Mobile hero (lines 93-127):**
- Same copy changes as desktop
- Line 104: change `flex-col sm:flex-row` → `flex-col` (always stacked for thumb targets)

### Changes in `src/index.css`

Strengthen left overlay slightly (line 95):
```css
background: linear-gradient(to right, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.92) 35%, rgba(0,0,0,0.68) 60%, rgba(0,0,0,0.35) 75%, transparent 90%);
```

### Files Changed

| File | Change |
|------|--------|
| `src/pages/Index.tsx` | Hero copy (eyebrow, H1 with subtle text-shadow, sub, 4th badge, micro-line), mobile button stack |
| `src/index.css` | Slightly heavier left-side overlay gradient |

