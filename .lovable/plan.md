

## Refine Homepage Hero Section

### Files Changed

| File | Change |
|------|--------|
| `src/assets/hero-owner.jpg` | Copy uploaded owner photo |
| `src/pages/Index.tsx` | Rewrite hero section (lines 37–74 only), update imports |
| `src/index.css` | Update `.hero-overlay`, add hero gradient utilities |

### Implementation Details

**1. Copy image**
- `user-uploads://Copy_of_IMG_0323.JPG` → `src/assets/hero-owner.jpg`
- Import as `heroOwner` in Index.tsx; keep `heroBg` import if referenced elsewhere

**2. Hero section layout (replaces lines 37–74 in Index.tsx)**

Desktop (md+):
- Flex row on a `bg-[#0A1F3F]` navy foundation
- Left column (~55%): eyebrow, h1, subheadline, CTAs, trust pills — all white text, left-aligned, padded
- Right column (~45%): `heroOwner` image with `object-cover object-right`, full height of hero
- A pseudo-element or absolute gradient div on the left edge of the image fading from `#0A1F3F` → transparent so the photo blends into the navy text area

Mobile:
- Flex column, stacked: text block first (navy bg, padded), then image below
- Image constrained to `h-[250px] md:h-auto` with `object-cover object-[50%_25%]` for face-centered crop
- No overlay on mobile image — clean and intentional

**3. Hero copy (exact text)**
- Eyebrow: `"Trusted AC & Heating Service in Southwest Florida"` — `text-xs uppercase tracking-widest text-white/80`
- H1: `"Fast, Reliable AC Repair & Installation in Fort Myers & Cape Coral"` — `text-3xl sm:text-4xl md:text-5xl font-extrabold text-white`
- Subheadline: two lines as specified — `text-lg text-white/85`

**4. CTA buttons**
- Primary: "Get Free Estimate" — `bg-[#00A19A] text-white hover:bg-[#00A19A]/90`, large, links to `#estimate-form`
- Secondary: "Call (239) 365-3090" — outline/ghost with `border-white text-white`, Phone icon, links to `PHONE_LINK`
- Flex row on desktop, stack on mobile, gap-3

**5. Trust pills**
- 3 pills: Licensed & Insured (BadgeCheck), 24/7 Emergency Service (Clock), BBB Accredited (Shield)
- Style: `bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm` — subtle, clean
- Flex wrap row below CTAs with `mt-6`

**6. CSS updates in `src/index.css`**
- Update `.hero-overlay` to: `background: linear-gradient(to right, #0A1F3F 0%, #0A1F3F 10%, transparent 60%);` for desktop blend
- No other homepage sections touched

