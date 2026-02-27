import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface EstimateFormProps {
  showMessage?: boolean;
  leadSource?: string;
}

const serviceOptions = [
  "AC Repair",
  "AC Installation / Replacement",
  "Maintenance / Tune-Up",
  "Emergency Repair",
  "Ductless Mini-Split",
  "Indoor Air Quality",
  "Commercial HVAC",
  "Heating",
  "Other",
];

const EstimateForm = ({ showMessage = false, leadSource = "website" }: EstimateFormProps) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Request Submitted",
        description: "Thank you! We'll be in touch shortly.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="hidden" name="lead_source" value={leadSource} />

      <div>
        <Input
          name="name"
          placeholder="Your Name *"
          required
          maxLength={100}
          className="bg-background"
        />
      </div>

      <div>
        <Input
          name="phone"
          type="tel"
          placeholder="Phone Number *"
          required
          maxLength={20}
          className="bg-background"
        />
      </div>

      <div>
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
      </div>

      {showMessage && (
        <div>
          <Textarea
            name="message"
            placeholder="Additional Details (optional)"
            maxLength={1000}
            rows={3}
            className="bg-background"
          />
        </div>
      )}

      <Button type="submit" className="w-full" size="lg" disabled={loading}>
        {loading ? "Submitting..." : "Request Free Estimate"}
      </Button>
    </form>
  );
};

export default EstimateForm;
