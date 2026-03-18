

## Final Hero Polish — Positioning, Overlay, and Spacing

Three targeted edits. No image changes. No layout changes. No other sections touched.

### 1. `src/index.css` (line 95) — Stronger overlay

Replace current gradient with the specified stronger version:

```css
background: linear-gradient(to right, rgba(0, 0, 0, 0.92) 0%, rgba(0, 0, 0, 0.85) 35%, rgba(0, 0, 0, 0.55) 60%, rgba(0, 0, 0, 0.25) 75%, transparent 90%);
```

Extends dark zone further right, eliminates van text competition.

### 2. `src/pages/Index.tsx` — Desktop hero (lines 43, 56-58, 71, 77-78, 83)

| Line | Current | New |
|------|---------|-----|
| 43 | `object-[70%_30%]` | `object-[82%_40%]` — pushes Jason right, crops lower to reduce sky/ladder |
| 58 | `Same-day service.` | `Same-day help.` |
| 71 | `mt-6` | `mt-4` — tighten gap between CTAs and badges |
| 77 | `text-sm` | `text-xs` — slightly smaller badges |
| 77 | `text-white/60` on icon | `text-white/50` — subtler badge icons |
| 83 | `mt-4` | `mt-3` — tighten micro-line |

### 3. `src/pages/Index.tsx` — Mobile hero (lines 101, 114, 120, 126, 133)

| Line | Current | New |
|------|---------|-----|
| 101 | `Same-day service.` | `Same-day help.` |
| 114 | `mt-6` | `mt-4` |
| 120 | `text-sm` | `text-xs` |
| 126 | `mt-4` | `mt-3` |
| 133 | `object-[50%_35%]` | `object-[50%_30%]` — slightly tighter face crop |

