import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import ServicePageShell from "@/components/ServicePageShell";
import heroImg from "@/assets/ac-repair.webp";

const DuctCleaningPage = () => (
  <Layout>
    <SEOHead title="Duct Cleaning Services | AC Assurance Cooling & Heating" description="Professional duct cleaning in Naples, Fort Myers, Cape Coral. Improve air quality and system efficiency. Call (239) 365-3090." />
    <ServicePageShell
      title="Duct Cleaning Services"
      subtitle="Remove dust, allergens, and buildup from your ductwork for cleaner air and better efficiency."
      heroImage={heroImg}
      heroAlt="AC Assurance duct cleaning service"
      description="Over time, your home's ductwork accumulates dust, allergens, mold spores, and debris that recirculate through your living spaces every time your AC runs. AC Assurance's professional duct cleaning service removes these contaminants, improving your indoor air quality and helping your HVAC system run more efficiently."
      benefits={[
        "Thorough cleaning of all supply and return ducts",
        "Removal of dust, allergens, and debris buildup",
        "Improved airflow and system efficiency",
        "Helps reduce allergy and respiratory symptoms",
        "Visual inspection for duct damage or leaks",
        "Before-and-after documentation provided",
      ]}
    />
  </Layout>
);

export default DuctCleaningPage;
