

## Upgrade Hero Section — Elite Conversion-First

Two files. Hero section only. All other sections untouched.

### 1. `src/index.css` — Strengthen gradient (line 95)

Replace current `.hero-image-blend` gradient with:
```css
background: linear-gradient(to right, hsl(216, 75%, 14%) 0%, hsl(216, 75%, 14%, 0.95) 30%, hsl(216, 75%, 14%, 0.7) 55%, hsl(216, 75%, 14%, 0.2) 70%, transparent 80%);
```

### 2. `src/pages/Index.tsx` — Hero copy and positioning (lines 37–134)

**Desktop hero (lines 39–85):**
- Image: `object-[70%_center]` → `object-[75%_center]`
- Eyebrow: add "Across" → `Trusted AC & Heating Service Across Southwest Florida`
- H1: two-line with "in" line break → `Fast, Reliable AC Repair & Installation in Fort Myers, Cape Coral & Naples` — add Naples, tighten to `leading-[1.1]`
- Sub: unchanged (already matches)
- CTA1: `Get Free Estimate` → `Get My Free Quote`
- CTA2: `Call {PHONE}` → `Call Now {PHONE}`
- Urgency: `Need help fast? Call now for same-day service.` → `Your comfort matters. Same-day service available.`

**Mobile hero (lines 88–125):** Same copy updates applied. Layout, image height, crop unchanged.

### Changes summary

| Location | What changes |
|----------|-------------|
| `src/index.css:95` | Stronger gradient stops |
| `Index.tsx:43` | `object-[75%_center]` |
| `Index.tsx:50` | Eyebrow adds "Across" |
| `Index.tsx:52-53` | H1 updated with Naples, `leading-[1.1]` |
| `Index.tsx:61` | CTA1 text → "Get My Free Quote" |
| `Index.tsx:66` | CTA2 text → "Call Now" prefix |
| `Index.tsx:82` | Urgency line updated |
| `Index.tsx:92` | Mobile eyebrow |
| `Index.tsx:94-95` | Mobile H1 |
| `Index.tsx:103` | Mobile CTA1 |
| `Index.tsx:108` | Mobile CTA2 |
| `Index.tsx:124` | Mobile urgency line |

