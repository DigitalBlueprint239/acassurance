import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";
import EstimateForm from "@/components/EstimateForm";

const ExitIntentPopup = () => {
  const [show, setShow] = useState(false);

  const trigger = useCallback(() => {
    if (sessionStorage.getItem("exitIntentShown")) return;
    sessionStorage.setItem("exitIntentShown", "1");
    setShow(true);
  }, []);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) trigger();
    };
    document.addEventListener("mouseleave", handleMouseLeave);

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

        <h2 className="text-2xl font-heading font-extrabold text-foreground mb-2">
          Wait — Before You Go!
        </h2>
        <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
          Get a free second opinion on any quote. We'll beat any licensed competitor's price or verify yours for free.
        </p>
        <EstimateForm leadSource="exit-intent-popup" />
      </div>
    </div>
  );
};

export default ExitIntentPopup;
