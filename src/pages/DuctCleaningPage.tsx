import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import ServicePageShell from "@/components/ServicePageShell";
import heroImg from "@/assets/service-ducts.webp";

const DuctCleaningPage = () => (
  <Layout>
    <SEOHead title="Duct Cleaning in Naples & Cape Coral | AC Assurance" description="Professional duct cleaning in Naples, Fort Myers, Cape Coral. Improve air quality and system efficiency. Call (239) 365-3090." />
    <ServicePageShell
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
      faqs={[
        { question: "How often should I clean my ducts in Florida?", answer: "We recommend duct cleaning every 3-5 years in Southwest Florida. However, homes with pets, allergy sufferers, or recent renovations may benefit from more frequent cleaning." },
        { question: "What are the signs I need duct cleaning?", answer: "Common signs include visible dust around vents, musty or stale odors when the AC runs, increased allergy symptoms indoors, uneven airflow between rooms, and higher-than-normal energy bills." },
        { question: "How long does duct cleaning take?", answer: "A typical residential duct cleaning takes 2 to 4 hours depending on the size of your home and the condition of your ductwork. We work efficiently while being thorough." },
        { question: "Will duct cleaning improve my air quality?", answer: "Yes — removing accumulated dust, allergens, mold spores, and debris from your ductwork directly improves the air circulating through your home. Many customers notice a difference immediately." },
        { question: "Do you clean ducts in Cape Coral and Naples?", answer: "Absolutely. We provide professional duct cleaning services throughout Cape Coral, Naples, Fort Myers, Estero, Bonita Springs, and all of Southwest Florida." },
      ]}
    />
  </Layout>
);

export default DuctCleaningPage;
