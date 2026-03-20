import { ShieldCheck, Star, Clock } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Licensed & Insured", subtitle: "Florida State Certified" },
  { icon: Star, title: "5-Star Rated", subtitle: "Google & Yelp Verified" },
  { icon: Clock, title: "24/7 Emergency Service", subtitle: "Always a human on the phone" },
];

const TrustBar = () => (
  <section className="bg-muted/50 border-b border-border py-5">
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item.title} className="flex items-center gap-3 justify-center sm:justify-center">
            <div className="w-10 h-10 rounded-full bg-brand-teal flex items-center justify-center shrink-0">
              <item.icon className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-heading font-bold text-foreground leading-tight">{item.title}</p>
              <p className="text-xs text-muted-foreground leading-tight">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
