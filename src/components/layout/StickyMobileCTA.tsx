import { Phone } from "lucide-react";
import { PHONE, PHONE_LINK } from "@/data/services";

const StickyMobileCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
    <a
      href={PHONE_LINK}
      className="flex items-center justify-center gap-2 py-3.5 bg-accent text-accent-foreground font-heading font-bold text-sm tracking-wide"
    >
      <Phone className="w-4 h-4" />
      Call Now — {PHONE}
    </a>
  </div>
);

export default StickyMobileCTA;
