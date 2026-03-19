

## Hero Section — Final Polish

Four targeted refinements to the existing stacked editorial hero.

### Files Changed

| File | Change |
|------|--------|
| `src/pages/Index.tsx` | Fluid H1, photo card `will-change`, urgency pill, shimmer button class |
| `tailwind.config.ts` | Add `shimmer`, `scale-in`, `slide-up`, `pulse-soft` keyframes + animations |
| `src/index.css` | Add `.shimmer-btn` utility with 45-degree soft sweep |

### 1. Fluid Typography (Index.tsx, line 43)

Replace fixed `text-3xl md:text-5xl lg:text-6xl` on H1 with inline style `fontSize: 'clamp(2.5rem, 5vw, 5rem)'`. Keep `tracking-tighter leading-[1.1]` (tightened from `tracking-tight`). Add `textShadow: '0 0 20px rgba(20, 184, 166, 0.1)'` on the teal city span.

### 2. Shimmer Button (Index.tsx + index.css)

Add class `shimmer-btn` to the "Get My Free Quote" button. CSS utility in `index.css`:
- Uses `::after` pseudo-element with a 45-degree linear gradient from `transparent → rgba(255,255,255,0.08) → transparent`
- `animation: shimmer 5s ease-in-out infinite` — soft, nearly transparent sweep
- `overflow: hidden; position: relative` on the button

### 3. Photo Card GPU Acceleration (Index.tsx, line 64)

- Add `will-change-transform` to the photo card container
- Increase overlap: `-mt-4` → `-mt-8 md:-mt-12`
- Replace `shadow-2xl` with `shadow-[0_20px_50px_rgba(8,112,184,0.1)]`
- Add `animate-scale-in` class

### 4. Urgency Pill (Index.tsx, after CTAs ~line 59)

Add between CTAs and photo card:
```
bg-amber-50/80 backdrop-blur-sm border border-amber-200/60 rounded-full px-4 py-2
```
Fire emoji in `<span className="animate-pulse-soft">`. Copy: "High Demand — 3 slots remaining for Same-Day Service in Lee County."

### 5. Text Slide-Up Animation (Index.tsx, line 39)

Add `animate-slide-up` to the text container div.

### 6. Trust Ribbon Refinement (Index.tsx, line 76)

Change to `bg-white/70 backdrop-blur-xl border-t border-white/40`. Badge text gets `tracking-wide`.

### 7. Mobile CTA Polish (Index.tsx, lines 49-58)

- Text container: add `px-6 md:px-0` for mobile breathing room
- CTA buttons: add `w-full sm:w-auto` for full-width thumb targets

### 8. New Keyframes (tailwind.config.ts)

```
"shimmer": { "0%": { transform: "translateX(-100%)" }, "100%": { transform: "translateX(100%)" } }
"scale-in": { from: { opacity: "0", transform: "scale(0.97)" }, to: { opacity: "1", transform: "scale(1)" } }
"slide-up": { from: { opacity: "0", transform: "translateY(20px)" }, to: { opacity: "1", transform: "translateY(0)" } }
"pulse-soft": { "0%,100%": { transform: "scale(1)" }, "50%": { transform: "scale(1.15)" } }
```

Animations:
```
"scale-in": "scale-in 0.7s ease-out forwards"
"slide-up": "slide-up 0.6s ease-out forwards"
"pulse-soft": "pulse-soft 2s ease-in-out infinite"
```

