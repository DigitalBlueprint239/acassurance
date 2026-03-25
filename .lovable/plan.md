
I’ll apply a focused visual fix to the call button on `/trane-products` (the one in the hero CTA row) without redesigning anything else.

**Root cause**
- That button uses `variant="outline"`, which injects `bg-background` (white).
- In the navy hero section, the text is forced to white, so it becomes white text on a white button until hover.

**Implementation plan**

1. **Update hero call button styling in `src/pages/TraneProducts.tsx`**
   - Keep the existing layout and button size.
   - Change the class list on the outline call button to explicitly use a transparent background and preserve visible white text in all states:
     - add `bg-transparent` (or `!bg-transparent` if needed for precedence)
     - keep border styling
     - keep hover fill (`hover:bg-primary-foreground/10`)
     - enforce readable text (`text-primary-foreground` + hover/focus text consistency)
     - keep pointer behavior (`cursor-pointer`)
   - This removes the white box issue while preserving current alignment and brand style.

2. **Clean icon spacing in same button**
   - Remove `mr-2` from the `Phone` icon so spacing is controlled by the button’s built-in `gap-2`.
   - This keeps visual balance and prevents over-spacing.

3. **Quick consistency sweep (same pattern only if present on this page)**
   - Confirm no other CTA on `/trane-products` has white-on-white behavior.
   - Do not change global button variants to avoid side effects across the site.

4. **Validation checklist after change**
   - Desktop and mobile: button text is visible before hover.
   - Hover/focus states still look intentional and accessible.
   - CTA remains clearly clickable and aligned with adjacent “Get a Free Quote” button.
   - No layout shift or spacing regressions in hero section.
