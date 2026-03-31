import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Shield } from "lucide-react";
import { z } from "zod";

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

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(20),
  service: z.string().min(1, "Please select a service"),
});

type FieldErrors = Partial<Record<"name" | "phone" | "service", string>>;

const EstimateForm = ({ showMessage = false, showHearAboutUs = false, leadSource = "Website", ctaLabel = "Schedule Service" }: EstimateFormProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const raw = {
      name: (formData.get("name") as string) || "",
      phone: (formData.get("phone") as string) || "",
      service: (formData.get("service") as string) || "",
    };

    const result = formSchema.safeParse(raw);
    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FieldErrors;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);

    const payload = {
      name: result.data.name,
      phone: result.data.phone,
      email: (formData.get("email") as string) || "",
      serviceNeeded: result.data.service,
      message: (formData.get("message") as string) || "",
      hearAboutUs: (formData.get("hear_about_us") as string) || "",
      leadSource,
      pagePath: window.location.pathname,
    };

    try {
      const { error } = await supabase.functions.invoke("submit-lead", {
        body: payload,
      });

      if (error) throw error;

      form.reset();
      toast({
        title: "Request Submitted ✓",
        description: "Thank you! We'll be in touch shortly.",
      });
      setTimeout(() => navigate("/thank-you"), 1200);
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
      <div>
        <Input name="name" placeholder="Your Name *" maxLength={100} className="h-12 md:h-10 bg-background" />
        {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
      </div>
      <div>
        <Input name="phone" type="tel" placeholder="Phone Number *" maxLength={20} className="h-12 md:h-10 bg-background" />
        {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
      </div>
      <Input name="email" type="email" placeholder="Email Address (optional)" maxLength={100} className="h-12 md:h-10 bg-background" />

      <div>
        <select
          name="service"
          className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm text-foreground"
          defaultValue=""
        >
          <option value="" disabled>Service Needed *</option>
          {serviceOptions.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        {errors.service && <p className="text-sm text-destructive mt-1">{errors.service}</p>}
      </div>

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
