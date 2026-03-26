import { CheckCircle2, XCircle } from "lucide-react";

interface ComparisonColumnProps {
  title: string;
  items: string[];
  isPositive: boolean;
  highlighted?: boolean;
}

const ComparisonColumn = ({ title, items, isPositive, highlighted }: ComparisonColumnProps) => (
  <div className={`rounded-xl p-6 ${highlighted ? "bg-primary/5 border-2 border-primary ring-1 ring-primary/20" : "bg-muted/50 border border-border"}`}>
    <h3 className={`font-heading font-bold text-lg mb-4 ${highlighted ? "text-primary" : "text-foreground/70"}`}>{title}</h3>
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm">
          {isPositive ? (
            <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
          ) : (
            <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          )}
          <span className={highlighted ? "text-foreground font-medium" : "text-muted-foreground"}>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const WhyDifferent = () => (
  <section className="py-14 md:py-20 bg-background">
    <div className="container">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">Why Homeowners Choose AC Assurance</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">See how we compare to the alternatives.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
        <ComparisonColumn
          title="AC Assurance"
          highlighted
          isPositive
          items={[
            "Owner-Supervised Jobs",
            "Licensed & Insured CAC1823832",
            "No Subcontractors",
            "2-Hour Arrival Window",
            "Independent Trane Dealer",
          ]}
        />
        <ComparisonColumn
          title="The Big Box Chains"
          isPositive={false}
          items={[
            "Inconsistent Crews",
            "Slow Response Times",
            "Upsells & Hidden Fees",
            "4-8 Hour Arrival Window",
            "Commission-Based Techs",
          ]}
        />
        <ComparisonColumn
          title="The Unlicensed Handyman"
          isPositive={false}
          items={[
            "No Insurance",
            "No Permits Pulled",
            "No Warranty",
            "Voids Manufacturer Warranty",
            "No Background Check",
          ]}
        />
      </div>
    </div>
  </section>
);

export default WhyDifferent;
