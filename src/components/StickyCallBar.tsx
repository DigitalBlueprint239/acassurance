import { useState, useEffect } from "react";
import { Phone, CalendarDays } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { PHONE_LINK } from "@/data/services";

const StickyCallBar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      setVisible(scrollPercent >= 0.15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname === "/thank-you") return null;
  if (!visible) return null;

  const handleEstimate = () => {
    const el = document.getElementById("estimate-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/contact");
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden section-navy shadow-[0_-2px_10px_rgba(0,0,0,0.3)]">
      <div className="grid grid-cols-2 divide-x divide-primary-foreground/20">
        <a
          href={PHONE_LINK}
          className="flex items-center justify-center gap-2 py-4 text-primary-foreground font-heading font-bold text-sm tracking-wide"
        >
          <Phone className="w-5 h-5" />
          Call Now
        </a>
        <button
          onClick={handleEstimate}
          className="flex items-center justify-center gap-2 py-4 text-primary-foreground font-heading font-bold text-sm tracking-wide"
        >
          <CalendarDays className="w-5 h-5" />
          Get a Free Quote
        </button>
      </div>
      {/* Safe area spacing for notched devices */}
      <div className="pb-[env(safe-area-inset-bottom)]" />
    </div>
  );
};

export default StickyCallBar;
