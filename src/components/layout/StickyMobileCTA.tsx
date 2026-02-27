import { Phone, FileText } from "lucide-react";
import { PHONE_LINK } from "@/data/services";

const StickyMobileCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex border-t border-border shadow-lg">
    <a
      href={PHONE_LINK}
      className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-primary text-primary-foreground font-bold text-sm"
    >
      <Phone className="w-4 h-4" />
      Call Now
    </a>
    <a
      href="#estimate-form"
      className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-accent text-accent-foreground font-bold text-sm"
    >
      <FileText className="w-4 h-4" />
      Request Estimate
    </a>
  </div>
);

export default StickyMobileCTA;
