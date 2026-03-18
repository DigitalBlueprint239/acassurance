

## Hero Split Layout — Refinements

These optimizations layer on top of the approved Split Layout plan to add depth, premium typography, and mobile polish.

### 1. Grid Ratio Update (`src/pages/Index.tsx` — Desktop Hero)

Change grid from `grid-cols-[45fr_55fr]` to `grid-cols-[42fr_58fr]` — gives the photo more breathing room.

### 2. Visual Bridge — Urgency Pill Overflow

The urgency pill at the bottom of the text column gets `relative z-10 ml-auto mr-[-20px]` so it visually overlaps onto the image side, creating depth between the two columns.

### 3. Premium Typography

- **Eyebrow**: `tracking-[0.2em]` (wide luxury spacing) instead of `tracking-widest`
- **H1**: `tracking-tight leading-[1.1]` stays. Teal span changes from `text-teal-400` to `text-teal-600` for better contrast on light background
- **Subheadline updated copy**: "Southwest Florida's premier team for 24/7 emergency repairs and high-efficiency installs. Serving all of Lee County with honest pricing and owner-backed quality."
- No text-shadow needed (dark text on light bg)

### 4. Trust Badges — Physical "Seal" Style

Change from glass pills to: `bg-white shadow-sm border border-slate-200 rounded-full px-4 py-2 text-slate-700 text-xs font-medium` with `text-teal-600` icons. Looks like embossed seals on the light background.

### 5. Image Position

`object-[25%_center]` — keeps the owner (Jason) as focal point in the right column.

### 6. Mobile — Soft Transition

- Replace `h-[300px]` with `aspect-[4/3]`
- Add `rounded-t-3xl overflow-hidden` to the image container for a soft transition from white text area to photo
- Image uses `object-cover object-center`

### Files Changed

| File | Change |
|------|--------|
| `src/pages/Index.tsx` | Grid ratio, visual bridge overflow, typography refinements, seal-style badges, image position, mobile aspect ratio + rounded top |

