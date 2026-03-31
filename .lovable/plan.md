

# Fix Quote Form — Frontend UX + Backend SMS Routing

## Overview

Two workstreams: (A) add Zod validation and UX polish to the frontend form, (B) add Resend-powered SMS notification to the existing edge function.

---

## A. Frontend — `src/components/EstimateForm.tsx`

### 1. Add Zod validation
- Import `z` from `zod` (already available via form deps)
- Schema: `name` min 1, `phone` min 7, `service` non-empty
- Validate before submission; show red error text below each invalid field
- Add `errors` state object, clear on re-submit

### 2. UX: toast + delayed redirect
- After successful submission: reset form, show success toast, then `setTimeout(() => navigate("/thank-you"), 1200)` so the user actually sees the toast before leaving

---

## B. Backend — `supabase/functions/submit-lead/index.ts`

### 1. Preserve existing DB insert — zero changes to the Supabase logic

### 2. Add Resend SMS-via-email after successful insert

After the DB insert succeeds, call the Resend API:

```
POST https://api.resend.com/emails
Authorization: Bearer ${RESEND_API_KEY}
{
  "from": "AC Assurance Leads <leads@acassurancefl.com>",
  "to": "2393653090@mms.att.net",
  "subject": "NEW LEAD",
  "text": "NEW LEAD\nName: ...\nPhone: ...\nSvc: ...\nMsg: ..."
}
```

### 3. Error isolation
- Wrap the Resend call in its own try/catch
- If it fails, `console.error` the failure but still return `{ success: true }` to the frontend
- The DB insert is the source of truth — SMS is fire-and-forget

---

## Environment Variable

You must add **one** secret to your Lovable project:

**Secret name:** `RESEND_API_KEY`

This is your Resend API key (starts with `re_`). Get it from https://resend.com/api-keys. I will prompt you to add it before implementation begins.

---

## Files Modified

| File | Change |
|------|--------|
| `src/components/EstimateForm.tsx` | Zod validation, field errors, delayed redirect |
| `supabase/functions/submit-lead/index.ts` | Resend API call after DB insert, isolated error handling |

