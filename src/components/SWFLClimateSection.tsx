import { Shield, Droplets, Sun } from "lucide-react";

const columns = [
  {
    icon: Shield,
    title: "Coastal Corrosion Defense",
    body: "Salt-laced air from the Gulf is the #1 enemy of your outdoor AC unit. We use corrosion-resistant coatings and specialized maintenance techniques to extend the life of your system.",
  },
  {
    icon: Droplets,
    title: "Humidity & Mold Control",
    body: "High SWFL humidity forces your AC to work overtime, leading to moisture buildup and potential mold. Our systems are sized and calibrated for maximum dehumidification.",
  },
  {
    icon: Sun,
    title: "Engineered for Extreme Heat",
    body: "From blistering summer heat waves to intense direct sunlight, we install systems with high SEER ratings and durable components proven to perform in Florida's toughest conditions.",
  },
];

const SWFLClimateSection = () => (
  <section className="py-14 md:py-20 bg-background">
    <div className="container">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">
          Built for Southwest Florida: Beating Salt, Sun & Humidity
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our systems and techniques are specifically designed for the unique challenges of the SWFL climate.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {columns.map((col) => (
          <div key={col.title} className="frost-card p-8 text-center">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <col.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-lg mb-3">{col.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{col.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SWFLClimateSection;
