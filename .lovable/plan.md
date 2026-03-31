

# Update Resend `to` Field — Plan

## Change

One line edit in `supabase/functions/submit-lead/index.ts` (line 71):

**Before:**
```
to: "2393653090@mms.att.net",
```

**After:**
```
to: ["2393653090@mms.att.net", "Digitalblueprint239@gmail.com"],
```

Everything else stays identical — DB insert, error isolation, formatting, CORS headers.

## Files Modified

| File | Change |
|------|--------|
| `supabase/functions/submit-lead/index.ts` | `to` field changed from string to array with both recipients |

The edge function will be redeployed automatically after the edit.

