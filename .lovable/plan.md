

# Fix Logo White Block Issue

## Problem
The `brightness-0 invert` CSS filter turns the entire logo (including its white background) into a solid white block.

## Changes

### `src/components/layout/Header.tsx`
- Remove `brightness-0 invert` from the logo `<img>` tag
- Wrap the logo in a `div` with `bg-white rounded-md px-2 py-1` to create a clean badge effect on the navy header
- Reduce logo height to `h-12 md:h-14` for professional sizing

