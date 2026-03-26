import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import ServicePageShell from "@/components/ServicePageShell";
import heroImg from "@/assets/service-ducts.webp";
import ductBranded from "@/assets/duct-cleaning-branded.webp";
import ductLadder from "@/assets/duct-cleaning-ladder.webp";
import ductBedroom from "@/assets/duct-cleaning-bedroom.webp";
import { buildServiceSchema, buildFAQSchema } from "@/lib/seoSchemas";

const galleryImages = [
  { src: ductBranded, alt: "AC Assurance technician cleaning ceiling duct in branded uniform" },
  { src: ductLadder, alt: "Technician on ladder servicing ceiling vent register" },
  { src: ductBedroom, alt: "Professional duct cleaning service in Southwest Florida bedroom" },
];

const faqs = [
  { question: "How often should I clean my ducts in Florida?", answer: "We recommend duct cleaning every 3-5 years in Southwest Florida. However, homes with pets, allergy sufferers, or recent renovations may benefit from more frequent cleaning." },
  { question: "What are the signs I need duct cleaning?", answer: "Common signs include visible dust around vents, musty or stale odors when the AC runs, increased allergy symptoms indoors, uneven airflow between rooms, and higher-than-normal energy bills." },
  { question: "How long does duct cleaning take?", answer: "A typical residential duct cleaning takes 2 to 4 hours depending on the size of your home and the condition of your ductwork. We work efficiently while being thorough." },
  { question: "Will duct cleaning improve my air quality?", answer: "Yes — removing accumulated dust, allergens, mold spores, and debris from your ductwork directly improves the air circulating through your home. Many customers notice a difference immediately." },
  { question: "Do you clean ducts in Cape Coral and Naples?", answer: "Absolutely. We provide professional duct cleaning services throughout Cape Coral, Naples, Fort Myers, Estero, Bonita Springs, and all of Southwest Florida." },
];

const DuctCleaningPage = () => (
  <Layout>
    <SEOHead
      title="Duct Cleaning in Naples & Cape Coral | AC Assurance"
      description="Professional duct cleaning in Naples, Fort Myers, Cape Coral. Improve air quality and system efficiency. Call (239) 365-3090."
      schema={[
        buildServiceSchema("Duct Cleaning", "Professional duct cleaning to remove dust, allergens, and buildup for cleaner air and better HVAC efficiency.", "duct-cleaning"),
        buildFAQSchema(faqs),
      ]}
    />
    <ServicePageShell
      galleryImages={galleryImages}
      title="Duct Cleaning Services"
      subtitle="Remove dust, allergens, and buildup from your ductwork for cleaner air and better efficiency."
      heroImage={heroImg}
      heroAlt="Professional duct cleaning service in Southwest Florida"
      description="Over time, your home's ductwork accumulates dust, allergens, mold spores, and debris that recirculate through your living spaces every time your AC runs. AC Assurance's professional duct cleaning service removes these contaminants, improving your indoor air quality and helping your HVAC system run more efficiently."
      benefits={[
        "Thorough cleaning of all supply and return ducts",
        "Removal of dust, allergens, and debris buildup",
        "Improved airflow and system efficiency",
        "Helps reduce allergy and respiratory symptoms",
        "Visual inspection for duct damage or leaks",
        "Before-and-after documentation provided",
      ]}
      signsYouNeed={{
        heading: "Signs You Need Duct Cleaning",
        content: [
          "Your ductwork is the respiratory system of your home — and in Southwest Florida's humid environment, it can harbor contaminants that affect your family's health and your AC system's performance. Knowing the warning signs helps you act before problems escalate.",
          "Visible dust blowing from your vents when the system kicks on is one of the clearest indicators. If you notice dust accumulating on furniture faster than usual, or if you see dark discoloration around your vent registers, your ducts are likely overdue for cleaning.",
          "Musty or stale odors when your AC runs often point to mold or mildew growth inside your ductwork. Florida's humidity creates ideal conditions for biological growth, especially in older homes or systems that don't run consistently. If anyone in your household is experiencing worsening allergies, frequent headaches, or respiratory irritation indoors, contaminated ductwork may be a contributing factor.",
        ],
      }}
      ourProcess={{
        heading: "Our Duct Cleaning Process",
        steps: [
          "Diagnosis — We inspect your ductwork system with cameras and visual assessment to identify the extent of contamination, any damage, and areas requiring special attention.",
          "Transparent Quote — Based on our inspection findings, we provide a clear quote covering the scope of cleaning needed. No upselling, no unnecessary add-ons.",
          "Expert Cleaning — Using professional-grade equipment, we thoroughly clean all supply and return ducts, registers, and accessible components, removing dust, debris, and biological contaminants.",
          "Final Testing & Walkthrough — We provide before-and-after documentation, verify improved airflow at all vents, and share recommendations for maintaining clean ducts going forward.",
        ],
      }}
      localConcerns={{
        heading: "Common Duct Cleaning Questions in Southwest Florida",
        content: [
          "Southwest Florida's climate makes duct cleaning more important here than in most parts of the country. The combination of year-round AC usage, high outdoor humidity, and fine particulate matter from construction and landscaping means your ducts accumulate contaminants faster than homes in drier climates.",
          "Many SWFL homeowners wonder how often they should clean their ducts. While the general recommendation is every 3-5 years, homes with pets, smokers, recent renovations, or family members with allergies or asthma may benefit from more frequent cleaning. After a hurricane or tropical storm, duct cleaning is also advisable if your home experienced any water intrusion.",
          "Cost is a common concern, and it's important to be wary of companies advertising extremely low prices. Professional duct cleaning for a typical Southwest Florida home ranges from $300-$600 depending on system size and condition. Companies offering $99 whole-house cleaning are often using bait-and-switch tactics. AC Assurance provides honest, upfront pricing with no hidden fees.",
        ],
      }}
      faqs={faqs}
    />
  </Layout>
);

export default DuctCleaningPage;
