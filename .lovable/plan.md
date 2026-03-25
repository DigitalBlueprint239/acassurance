

# Fix Favicon — Remove Lovable Default .ico File

## Problem
Google is showing the old Lovable logo as the favicon in search results (visible in the screenshot). The root cause: there is a `favicon.ico` file in the `public/` directory that is the old Lovable default. Browsers and Google's crawler prioritize `.ico` files over `.png`, so even though `index.html` correctly points to `favicon.png`, Google is picking up the stale `favicon.ico`.

## Fix

### 1. Delete `public/favicon.ico`
Remove the old Lovable favicon.ico file so it no longer gets served.

### 2. Add explicit `.ico` override in `index.html`
Add a second `<link rel="icon">` tag for `.ico` format pointing to the same `favicon.png`, ensuring no browser falls back to a default `.ico` lookup:
```html
<link rel="icon" type="image/png" href="/favicon.png" />
<link rel="icon" type="image/x-icon" href="/favicon.png" />
```

## Files Modified
| File | Change |
|------|--------|
| `public/favicon.ico` | Delete (old Lovable logo) |
| `index.html` | Add fallback icon link to prevent .ico auto-discovery |

## After Publishing
Google will re-crawl and pick up the correct favicon. You can speed this up by submitting `https://www.acassurancefl.com/` in Google Search Console for re-indexing.

