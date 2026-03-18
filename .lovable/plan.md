

## Edit Team Photo for Hero Background

### Approach

I'll use the Lovable AI image editing API (`google/gemini-3-pro-image-preview`) to process the uploaded photo with a detailed editing prompt covering all your requirements. The edited image will be saved as a project asset for your review before integrating it into the hero section.

### Steps

1. **Call the image editing model** with the uploaded photo and a consolidated prompt covering:
   - Crop to center group (owner + 2-3 team members, head to mid-torso)
   - Owner slightly right of center as primary focal point
   - Subtle depth-of-field (sharp faces, slightly softened background)
   - Reduce prominence of van text, QR code, ladder (subtle blur/contrast reduction)
   - Increase face contrast, normalize skin tones, reduce harsh highlights
   - Darken overall by 10-15% for overlay readiness
   - Maintain full photorealism — no filters, no artificial effects

2. **Save the result** to `src/assets/hero-team-edited.jpg`

3. **Do not integrate** into the hero section yet — deliver for review first

### Important Caveat

AI image editing models have limitations with photorealistic edits on real photos. The model may not perfectly execute all requests simultaneously (especially selective cropping + selective blur + lighting adjustments). If the result isn't satisfactory, a dedicated photo editor (Photoshop/Lightroom) would give more precise control. We'll attempt it and you can evaluate.

### Files Changed

| File | Change |
|------|--------|
| `src/assets/hero-team-edited.jpg` | New edited team photo |

