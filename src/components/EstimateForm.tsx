import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Shield } from "lucide-react";

interface EstimateFormProps {
  showMessage?: boolean;
  showHearAboutUs?: boolean;
  leadSource?: string;
  ctaLabel?: string;
}

const serviceOptions = [
  "AC Repair",
  "AC Installation / Replacement",
  "Heating Services",
  "Mini Split Systems",
  "Maintenance / Tune-Up",
  "Duct Cleaning",
  "Indoor Air Quality",
  "Commercial Refrigeration",
  "Emergency Service",
  "Other",
];

const hearAboutUsOptions = [
  "Google",
  "Facebook",
  "Referral",
  "Yard Sign",
  "Other",
];

const EstimateForm = ({ showMessage = false, showHearAboutUs = false, leadSource = "Website", ctaLabel = "Schedule Service" }: EstimateFormProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: (formData.get("email") as string) || "",
      serviceNeeded: formData.get("service") as string,
      message: (formData.get("message") as string) || "",
      hearAboutUs: (formData.get("hear_about_us") as string) || "",
      leadSource,
      pagePath: window.location.pathname,
    };

    try {
      const { data, error } = await supabase.functions.invoke("submit-lead", {
        body: payload,
      });

      if (error) throw error;

      toast({
        title: "Request Submitted",
        description: "Thank you! We'll be in touch shortly.",
      });
      form.reset();
      navigate("/thank-you");
    } catch (err) {
      console.error("Form submission error:", err);
      toast({
        title: "Something went wrong",
        description: "Please call us directly or try again shortly.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input name="name" placeholder="Your Name *" required maxLength={100} className="h-12 md:h-10 bg-background" />
      <Input name="phone" type="tel" placeholder="Phone Number *" required maxLength={20} className="h-12 md:h-10 bg-background" />
      <Input name="email" type="email" placeholder="Email Address (optional)" maxLength={100} className="h-12 md:h-10 bg-background" />

      <select
        name="service"
        required
        className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm text-foreground"
        defaultValue=""
      >
        <option value="" disabled>Service Needed *</option>
        {serviceOptions.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>

      {showMessage && (
        <Textarea
          name="message"
          placeholder="Additional Details (optional)"
          maxLength={1000}
          rows={3}
          className="bg-background"
        />
      )}

      {showHearAboutUs && (
        <select
          name="hear_about_us"
          className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm text-foreground"
          defaultValue=""
        >
          <option value="" disabled>How did you hear about us?</option>
          {hearAboutUsOptions.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      )}

      <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg" disabled={loading}>
        {loading ? "Submitting..." : ctaLabel}
      </Button>

      <p className="text-xs text-muted-foreground text-center leading-relaxed">
        No obligation. We typically respond within 1 hour.
      </p>
      <div className="flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground/70">
        <Shield className="w-3 h-3" />
        <span>Licensed (CAC1823832) · Insured · BBB Accredited</span>
      </div>
    </form>
  );
};

export default EstimateForm;
