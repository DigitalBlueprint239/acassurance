import { useState, useEffect } from "react";
import { Phone, FileText, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE_LINK } from "@/data/services";
import { useNavigate } from "react-router-dom";

const ScrollCallReminder = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      setVisible(scrollPercent >= 0.5);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (dismissed || !visible) return null;

  const handleEstimate = () => {
    const el = document.getElementById("estimate-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/contact");
    }
  };

  return (
    <div className="hidden md:block fixed bottom-6 right-6 z-40 w-72 bg-card border border-border rounded-lg shadow-lg p-5 animate-fade-in">
      <button
        onClick={() => setDismissed(true)}
        className="absolute top-2 right-2 p-1 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Dismiss"
      >
        <X className="w-4 h-4" />
      </button>
      <p className="font-heading font-bold text-foreground mb-3">Need AC Service?</p>
      <div className="flex flex-col gap-2">
        <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
          <a href={PHONE_LINK}>
            <Phone className="w-4 h-4 mr-2" /> Call Now
          </a>
        </Button>
        <Button size="sm" variant="outline" onClick={handleEstimate}>
          <FileText className="w-4 h-4 mr-2" /> Request Estimate
        </Button>
      </div>
    </div>
  );
};

export default ScrollCallReminder;
