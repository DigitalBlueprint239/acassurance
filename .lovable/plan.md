

# Replace Mini-Split Hero Image with Authentic Photo

## Problem
The Mini-Split page (`/ductless-mini-split`) uses a generic `service-repair.webp` hero image that doesn't match the service. The same issue exists on other pages (Heating, Indoor Air Quality, Commercial Refrigeration) — all reusing `service-repair.webp` — but for now, the user has provided a real mini-split photo to fix this specific page.

## Pages using mismatched `service-repair.webp`
| Page | File | Should show |
|------|------|-------------|
| **Mini-Split** | `MiniSplitPage.tsx` | Ductless mini-split unit (photo provided) |
| Heating Services | `HeatingServicesPage.tsx` | Heating system / heat pump |
| Indoor Air Quality | `IndoorAirQualityPage.tsx` | Air quality equipment |
| Commercial Refrigeration | `CommercialRefrigPage.tsx` | Commercial refrigeration unit |

## Change (this round)

1. **Copy uploaded photo** to `src/assets/service-mini-split.webp`
2. **Update `src/pages/MiniSplitPage.tsx`** — change the import from `service-repair.webp` to `service-mini-split.webp`

That's it — one asset copy and one import line change. No layout or content changes needed.

## Note
The other three pages still use the generic repair image. If you have photos for those services, share them and we can update those the same way.

