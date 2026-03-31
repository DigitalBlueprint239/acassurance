import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, phone, email, serviceNeeded, message, hearAboutUs, leadSource, pagePath } =
      await req.json();

    if (!name || !phone || !serviceNeeded) {
      return new Response(
        JSON.stringify({ error: "Name, phone, and service are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { error: insertError } = await supabase.from("leads").insert({
      name,
      phone,
      email: email || null,
      service_needed: serviceNeeded,
      message: message || null,
      hear_about_us: hearAboutUs || null,
      lead_source: leadSource || "Website",
      page_path: pagePath || null,
    });

    if (insertError) {
      console.error("Insert error:", insertError);
      return new Response(
        JSON.stringify({ error: "Failed to save lead" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log(`New lead captured: ${name} - ${phone} - ${serviceNeeded}`);

    // Fire-and-forget SMS via Resend → AT&T MMS gateway
    try {
      const resendKey = Deno.env.get("RESEND_API_KEY");
      if (resendKey) {
        const smsBody = [
          "NEW LEAD",
          `Name: ${name}`,
          `Phone: ${phone}`,
          `Svc: ${serviceNeeded}`,
          message ? `Msg: ${message}` : "",
        ].filter(Boolean).join("\n");

        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "AC Assurance Leads <leads@acassurancefl.com>",
            to: "2393653090@mms.att.net",
            subject: "NEW LEAD",
            text: smsBody,
          }),
        });

        if (!res.ok) {
          const errBody = await res.text();
          console.error(`Resend SMS failed [${res.status}]: ${errBody}`);
        } else {
          console.log("SMS notification sent via Resend");
        }
      } else {
        console.warn("RESEND_API_KEY not set — skipping SMS notification");
      }
    } catch (smsErr) {
      console.error("SMS notification error (non-fatal):", smsErr);
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("submit-lead error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
