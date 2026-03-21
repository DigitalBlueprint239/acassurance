import { Shield, BadgeCheck, MapPin, AlertTriangle } from "lucide-react";

const badges = [
  { icon: Shield, label: "Independent Trane Dealer" },
  { icon: BadgeCheck, label: "Licensed & Insured" },
  { icon: MapPin, label: "Serving Southwest Florida" },
  { icon: AlertTriangle, label: "Emergency AC Service Available" },
];

const TrustBadgeStrip = () => (
  <section className="py-6 bg-muted/50 border-b border-border">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {badges.map((badge) => (
          <div key={badge.label} className="flex flex-col items-center text-center gap-2 py-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <badge.icon className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xs font-heading font-bold text-foreground leading-tight">{badge.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBadgeStrip;
