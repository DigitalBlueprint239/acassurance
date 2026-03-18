

## Hero "High-Definition Scrim" Refinement

Transition from heavy overlay to a lighter, clearer scrim that reveals the team photo while boosting glass card contrast for legibility.

### 1. `src/index.css` — Lighter gradient

Replace `.hero-image-blend` (lines 94-100):
```css
.hero-image-blend {
  background: linear-gradient(to right,
    rgba(8, 25, 46, 0.85) 0%,
    rgba(8, 25, 46, 0.4) 45%,
    transparent 70%);
}
```

### 2. `src/index.css` — Update `.glass-hero-card`

Boost contrast: change from `bg-white/5` to `bg-black/25` and `backdrop-blur-md` to `backdrop-blur-xl`:
```css
.glass-hero-card {
  @apply backdrop-blur-xl bg-black/25 border-l-4 border-teal-500/60 p-6 md:p-8 rounded-r-2xl;
}
```

### 3. `src/pages/Index.tsx` — Desktop hero (line 43)

Image position: `object-[80%_35%]` → `object-[75%_35%]`

### 4. `src/pages/Index.tsx` — Desktop H1 (line 54)

Strengthen text-shadow: `0 2px 8px rgba(0,0,0,0.5)` → `0 4px 12px rgba(0,0,0,0.6)`

### 5. `src/pages/Index.tsx` — Mobile H1 (around line 102)

Same text-shadow update for mobile H1.

### Files Changed

| File | Change |
|------|--------|
| `src/index.css` | Lighter scrim gradient, darker glass card with stronger blur |
| `src/pages/Index.tsx` | Image position to 75%, stronger text-shadow on both hero blocks |

