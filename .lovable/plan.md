

# Update All Email Contacts to Show Both Emails

## What
Replace the single `service@acassurancefl.com` email with both `Jason@acassurancefl.com` and `Acassurancefl@gmail.com` across the entire site.

## Changes

### 1. `src/data/services.ts`
- Replace single `EMAIL` constant with two: `EMAIL_PRIMARY = "Jason@acassurancefl.com"` and `EMAIL_SECONDARY = "Acassurancefl@gmail.com"`

### 2. `src/components/layout/Footer.tsx`
- Show both emails stacked, each with its own `mailto:` link

### 3. `src/pages/Contact.tsx`
- Display both emails in the contact info section (two rows instead of one)

### 4. `src/pages/PrivacyPolicy.tsx`
- List both emails in the "Contact Us" paragraph

### 5. `src/pages/About.tsx`
- Update the "Email Us" button to use the primary email (`Jason@acassurancefl.com`)

### 6. `src/pages/Index.tsx`
- Update the hardcoded `"email": "service@acassurancefl.com"` in the JSON-LD schema to `Jason@acassurancefl.com`

### 7. `supabase/functions/submit-lead/index.ts`
- Check if `service@acassurancefl.com` is used as the notification recipient and update to the new email(s)

