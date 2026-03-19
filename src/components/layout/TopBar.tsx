import { Phone } from "lucide-react";
import { LICENSE, PHONE, PHONE_LINK } from "@/data/services";

const TopBar = () => (
  <div className="section-navy-deep text-primary-foreground py-2 text-xs sm:text-sm">
    <div className="container flex items-center justify-between gap-4">
      <span className="hidden sm:inline opacity-90">
        24/7 Emergency Service <span className="mx-2 opacity-40">|</span> Licensed {LICENSE}
      </span>
      <span className="sm:hidden font-medium opacity-90">24/7 Emergency Service</span>
      <a href={PHONE_LINK} className="flex items-center gap-1.5 font-semibold hover:underline">
        <Phone className="w-3.5 h-3.5" />
        {PHONE}
      </a>
    </div>
  </div>
);

export default TopBar;
