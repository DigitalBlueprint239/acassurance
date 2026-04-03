

# Three-Part Upgrade (Revised with Optimizations)

---

## Part 1 — Header Restyle (`src/components/layout/Header.tsx`)

Replace solid navy header with glassmorphism sticky nav.

- `<header>`: `sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60`
- Nav link colors updated from `text-primary-foreground` to `text-foreground` variants
- Phone pill replaced with `variant="destructive"` Button (`size="lg"` desktop, `size="sm"` mobile) containing `<PhoneCall className="mr-2 h-4 w-4 animate-pulse" />` + number. Button classes: `transition-transform hover:scale-105 shadow-md hover:shadow-lg`
- **Mobile:** Phone CTA stays visible in header bar alongside hamburger icon, never inside the menu
- Logo white container removed; license/emergency link colors adjusted for light bg

---

## Part 2 — Hero Rebuild (`src/pages/Index.tsx` + `src/components/EstimateForm.tsx`)

Two-column grid hero: `grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[80vh]`

**Left column:** `<h1>` "24/7 Emergency AC Repair in SWFL" (`text-4xl md:text-6xl font-extrabold tracking-tight text-balance`), subtitle "Direct owner-operated dispatch by Jason Rizzo.", urgency pill, Call Now button.

**Right column:** `shadcn/Card` wrapping `EstimateForm` with `variant="emergency"` and `leadSource="homepage-hero"`.

### Emergency variant (Optimization 2)

Add an optional `variant?: "emergency" | "standard"` prop to `EstimateForm`. When `variant="emergency"`:
- **Hide** email, message, and hear-about-us fields entirely
- **Show only**: Name, Phone, a new Zip Code input (5 chars), and a simplified Issue selector with options: `Dead System`, `Leaking`, `Warm Air`, `Maintenance`
- The existing service dropdown is swapped for the issue selector in this variant
- CTA label defaults to `"Get Emergency Service"`
- All Zod validation, Supabase insert, toast, and redirect logic remain shared

Standard variant (default) behaves exactly as today — no changes to existing forms site-wide.

---

## Part 3 — Blog Conversion Engine

### 3a. Data (`src/data/blog.ts`)

- Add to `BlogPost` interface: `author: string`, `seoKeywords: string[]`, `ctaTopic: string`
- Backfill all existing posts with `author: "Jason Rizzo"`, relevant `seoKeywords`, and a sensible `ctaTopic`
- Two new articles:
  1. "Coastal Corrosion Defense for SWFL AC Units" — `ctaTopic: "Salt Air Corrosion"`
  2. "Preventing Mold with HVAC Humidity Control" — `ctaTopic: "Mold & Mildew"`

### 3b. Template (`src/pages/BlogPost.tsx`)

- `prose prose-blue max-w-none` on content wrapper
- Display "By {post.author}" beneath date
- **Anchor CTA card** after `</article>`: `Card` with `bg-muted/50 border-l-4 border-l-primary`
  - Title: **"Stop {post.ctaTopic} Before It Destroys Your System."** (uses the dedicated field, not the raw title)
  - Button: "Get a Free SWFL System Evaluation" → `/#estimate-form` with smooth scroll

---

## Files Modified

| File | Change |
|------|--------|
| `src/components/layout/Header.tsx` | Glassmorphism restyle, destructive phone CTA, mobile layout |
| `src/components/EstimateForm.tsx` | Add `variant` prop; emergency mode shows Name/Phone/Zip/Issue only |
| `src/pages/Index.tsx` | Hero rebuilt as 2-col grid, passes `variant="emergency"` to form |
| `src/data/blog.ts` | Add `author`, `seoKeywords`, `ctaTopic` fields + 2 new articles |
| `src/pages/BlogPost.tsx` | Prose typography, author line, CTA card using `ctaTopic` |

