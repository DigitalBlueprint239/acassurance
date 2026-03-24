import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const ExitIntentPopup = () => {
  const [show, setShow] = useState(false);

  const trigger = useCallback(() => {
    if (sessionStorage.getItem("exitIntentShown")) return;
    sessionStorage.setItem("exitIntentShown", "1");
    setShow(true);
  }, []);

  useEffect(() => {
    // Desktop: mouseleave
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) trigger();
    };
    document.addEventListener("mouseleave", handleMouseLeave);

    // Mobile: 45s inactivity
    let timer = setTimeout(trigger, 45000);
    const resetTimer = () => {
      clearTimeout(timer);
      timer = setTimeout(trigger, 45000);
    };
    const events = ["touchstart", "scroll"] as const;
    events.forEach((ev) => window.addEventListener(ev, resetTimer, { passive: true }));

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(timer);
      events.forEach((ev) => window.removeEventListener(ev, resetTimer));
    };
  }, [trigger]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-in zoom-in-95 duration-300">
        <button
          onClick={() => setShow(false)}
          className="absolute top-3 right-3 p-1 rounded-full hover:bg-muted transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-muted-foreground" />
        </button>

        <h2 className="text-2xl font-heading font-extrabold text-foreground mb-3">
          Wait! Already Have a Quote?
        </h2>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          Don't overpay. We'll beat any licensed competitor's quote or verify it for free. That's our <strong className="text-foreground">Second Opinion Guarantee</strong>.
        </p>
        <Button asChild size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-base">
          <Link to="/contact" onClick={() => setShow(false)}>
            Get My Free Second Opinion
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
