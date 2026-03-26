import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import ServicePageShell from "@/components/ServicePageShell";
import heroImg from "@/assets/service-repair.webp";
import { buildServiceSchema, buildFAQSchema } from "@/lib/seoSchemas";

const faqs = [
  { question: "How quickly can you respond to AC repair in Naples?", answer: "We offer same-day and next-day AC repair appointments throughout Naples and Southwest Florida. For emergencies, our 24/7 line means we can often be at your door within 2 hours." },
  { question: "What brands do you repair?", answer: "We service and repair all major AC brands including Trane, Carrier, Lennox, Rheem, Goodman, York, and more. Our technicians are trained and experienced with every common system in SWFL homes." },
  { question: "Do you offer same-day repair in Cape Coral?", answer: "Yes — if you call before 2:00 PM, we can typically schedule same-day AC repair service in Cape Coral. After-hours emergency service is also available." },
  { question: "How much does AC repair cost in SWFL?", answer: "AC repair costs vary depending on the issue. We provide upfront pricing before starting any work, so you'll know the exact cost with no surprises. Diagnostic fees are applied toward the repair if you proceed." },
  { question: "Should I repair or replace my AC?", answer: "As a general rule, if your system is over 10-15 years old and the repair costs more than 50% of a new system, replacement often makes more sense. We'll give you an honest assessment and never push a replacement when a repair will do." },
];

const AcRepairPage = () => (
  <Layout>
    <SEOHead
      title="AC Repair in Naples & Cape Coral | AC Assurance"
      description="Fast, reliable AC repair in Naples, Cape Coral, Fort Myers. Licensed technicians, upfront pricing, same-day service. Call (239) 365-3090."
      schema={[
        buildServiceSchema("AC Repair", "Fast, reliable air conditioning repair for homes and businesses across Southwest Florida. Same-day service, upfront pricing, all major brands.", "ac-repair-cape-coral"),
        buildFAQSchema(faqs),
      ]}
    />
    <ServicePageShell
      title="AC Repair in Cape Coral & Southwest Florida"
      subtitle="Fast, reliable air conditioning repair by licensed HVAC technicians. Same-day service available."
      heroImage={heroImg}
      heroAlt="Expert AC repair technician servicing a unit in Cape Coral, FL"
      description="When your AC breaks down in Southwest Florida's heat, you need a team that responds fast and gets the job done right the first time. AC Assurance provides expert air conditioning repair for homes and businesses across Cape Coral, Fort Myers, Naples, and the surrounding areas. Our licensed technicians diagnose and fix all makes and models with upfront, transparent pricing."
      benefits={[
        "Same-day and next-day appointments available",
        "Upfront pricing — no hidden fees or surprises",
        "All major AC brands serviced and repaired",
        "Licensed (CAC1823832) and fully insured",
        "24/7 emergency repair line",
        "Honest diagnostics — we fix what's broken, nothing more",
      ]}
      signsYouNeed={{
        heading: "Signs You Need AC Repair",
        content: [
          "Your air conditioner is one of the hardest-working appliances in your Southwest Florida home. When it starts showing signs of trouble, acting quickly can save you from a complete breakdown — and a much larger repair bill. Here are the most common warning signs that your AC needs professional attention.",
          "If your system is blowing warm air, cycling on and off frequently, or making unusual grinding, squealing, or banging noises, these are clear indicators that something is wrong internally. Ignoring these symptoms often leads to compressor failure or refrigerant leaks — both costly repairs.",
          "Unusually high electric bills are another red flag. When your AC has to work harder due to a failing component, dirty coils, or low refrigerant, your energy consumption spikes. A professional diagnostic can pinpoint the issue and restore your system's efficiency.",
          "Water pooling around your indoor unit, ice forming on the evaporator coil, or musty odors coming from your vents all signal problems that require immediate professional service. In Florida's humid climate, a malfunctioning AC can also create conditions for mold growth inside your ductwork.",
        ],
      }}
      ourProcess={{
        heading: "Our AC Repair Process",
        steps: [
          "Diagnosis — Our licensed technician performs a thorough inspection of your entire system, including electrical components, refrigerant levels, airflow, and thermostat operation to identify the root cause.",
          "Transparent Quote — Before any work begins, we provide a clear, itemized quote so you know exactly what the repair involves and what it costs. No surprises.",
          "Expert Repair — Using quality parts and manufacturer-recommended procedures, we complete the repair efficiently while maintaining the highest standards of workmanship.",
          "Final Testing & Walkthrough — We test your system thoroughly after the repair, verify proper operation across all modes, and walk you through what was done and any recommendations for preventing future issues.",
        ],
      }}
      localConcerns={{
        heading: "Common AC Repair Questions in Southwest Florida",
        content: [
          "Southwest Florida's combination of extreme heat, high humidity, and salt air creates unique challenges for air conditioning systems. The relentless cooling demand from April through October means your AC runs nearly continuously, accelerating wear on compressors, fan motors, and capacitors.",
          "Salt air corrosion is a major concern for coastal homes in Cape Coral, Fort Myers Beach, and Naples. The salt-laden air attacks condenser coils and electrical connections, leading to premature failure if not addressed with regular maintenance. If you're within a few miles of the coast, annual coil cleaning and corrosion treatment are essential.",
          "Many homeowners ask about the cost of AC repair versus replacement. As a general guideline, if your system is over 12 years old and the repair exceeds 50% of a new system's cost, replacement often makes better financial sense — especially with the energy savings from modern high-efficiency units. We'll always give you an honest recommendation based on your specific situation.",
        ],
      }}
      faqs={faqs}
    />
  </Layout>
);

export default AcRepairPage;
