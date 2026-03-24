

# Connect EstimateForm to a Real Backend

## Current State
- The `EstimateForm` posts to `VITE_LEAD_WEBHOOK_URL` which is not set
- When unset, it silently logs to console and redirects to /thank-you (looks like it worked, but no lead is captured)
- No Supabase is connected to this project
- Lovable Cloud is enabled (LOVABLE_API_KEY exists)

## What We Need
1. **Supabase database** to store every lead permanently
2. **Edge Function** to receive the form submission, store it, and send an email notification to `service@acassurancefl.com`
3. **Update EstimateForm** to call the edge function instead of a webhook

## Plan

### Step 1: Enable Supabase via Lovable Cloud
- Connect the project to Supabase (Lovable Cloud spins this up automatically)
- This gives us a database + edge functions without needing an external account

### Step 2: Create `leads` table
Migration to create:
```sql
CREATE TABLE public.leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text,
  service_needed text NOT NULL,
  message text,
  hear_about_us text,
  lead_source text DEFAULT 'Website',
  page_path text,
  created_at timestamptz DEFAULT now()
);
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
-- Allow inserts from anonymous/authenticated users (public form)
CREATE POLICY "Anyone can insert leads" ON public.leads FOR INSERT WITH CHECK (true);
-- Only service role can read (no public access to other people's leads)
```

### Step 3: Create `submit-lead` Edge Function
- Validates the incoming payload
- Inserts into the `leads` table
- Sends a notification email to `service@acassurancefl.com` with the lead details (using Lovable's email infrastructure if an email domain is configured, or a simple formatted response for now)
- Returns success/failure

### Step 4: Update `EstimateForm.tsx`
- Replace the webhook fetch with `supabase.functions.invoke('submit-lead', { body: payload })`
- Remove the `VITE_LEAD_WEBHOOK_URL` fallback logic
- Keep the same UX (toast + redirect to /thank-you)

### Step 5: Create Supabase client integration
- Add `src/integrations/supabase/client.ts` with the Supabase client setup using `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`

## Files Created/Modified
| File | Change |
|------|--------|
| `src/integrations/supabase/client.ts` | New — Supabase client |
| `supabase/functions/submit-lead/index.ts` | New — Edge function to store lead + notify |
| `src/components/EstimateForm.tsx` | Update to use Supabase function invoke |
| Migration | New `leads` table |

## What This Achieves
- Every form submission is permanently stored in your database
- You can query/export leads anytime via the Supabase dashboard
- The form actually works end-to-end instead of silently dropping submissions
- Email notification to `service@acassurancefl.com` ensures you never miss a lead

