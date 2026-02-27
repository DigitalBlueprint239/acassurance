import { LICENSE } from "@/data/services";

const TopBar = () => (
  <div className="brand-gradient text-primary-foreground py-2 text-xs sm:text-sm">
    <div className="container flex items-center justify-between gap-4">
      <span className="hidden sm:inline">License #{LICENSE}</span>
      <span className="font-medium">Serving Cape Coral &amp; Southwest Florida</span>
      <span className="hidden sm:inline">Financing Available</span>
    </div>
  </div>
);

export default TopBar;
