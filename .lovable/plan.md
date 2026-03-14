

## Phase 2 Completion: Trane Compliance + Financing Disclosure

### Files to Create

**1. `src/pages/TraneAirConditioners.tsx`**
Follows `Financing.tsx` pattern: Layout → SEOHead → navy hero → two-column body (content left, sticky EstimateForm sidebar) → CTA band.

- SEO: "Trane Air Conditioners | Southwest Florida | AC Assurance"
- Navy hero with H1, dual CTAs, "Independent Trane Dealer" badge
- Content H2 sections: Why Trane / Durability / Florida Heat & Humidity / Coastal Salt Air / Efficiency & Comfort
- Trust signals grid (4 items)
- Internal links to `/ac-installation-naples`, `/ac-installation-cape-coral`, `/financing`
- Bottom CTA band with financing disclosure
- `leadSource: "trane-air-conditioners"`

**2. `src/pages/TraneHeatPumps.tsx`**
Same pattern.

- SEO: "Trane Heat Pumps | Southwest Florida | AC Assurance"
- Content H2 sections: What Is a Heat Pump / Heating & Cooling in One / Florida Climate / Efficiency
- Trust signals grid (4 items)
- Internal links to `/heating-services`, `/financing`
- `leadSource: "trane-heat-pumps"`

### Files to Modify

**3. `src/pages/Index.tsx`** — Insert new section between line 132 and 134 (between Why Choose Us and Proof of Work):
- "Trusted Trane Air Conditioning Systems" with Shield icon badge, brief copy, two link buttons
- Text + icons only (no Trane imagery in project assets)

**4. `src/pages/Financing.tsx`** — Insert after line 79 (after CTA button):
```
<p class="text-sm text-muted-foreground mt-3">Special financing available. Subject to credit approval. Call for details.</p>
```

**5. `src/App.tsx`** — Add two imports and routes at line 49 (before localPages map)

**6. `public/sitemap.xml`** — Append two URLs before `</urlset>`

### Compliance
- "Independent Trane Dealer" only — no prohibited terms
- No competing logos, no storefront language, factual content only
- General financing disclosure only

### No Changes To
All Phase 1 infrastructure, 11 local pages, LocalLandingPage, localPages.ts, Layout/Header/Footer, SEOHead, canonicals, robots.txt

