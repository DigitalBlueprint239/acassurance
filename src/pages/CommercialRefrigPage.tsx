import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import ServicePageShell from "@/components/ServicePageShell";
import heroImg from "@/assets/service-repair.webp";

const CommercialRefrigPage = () => (
  <Layout>
    <SEOHead title="Commercial Refrigeration Services | AC Assurance Cooling & Heating" description="Commercial refrigeration repair and maintenance in Southwest Florida. Walk-in coolers, reach-in units, ice machines. Call (239) 365-3090." />
    <ServicePageShell
      title="Commercial Refrigeration"
      subtitle="Keep your business running with expert commercial refrigeration repair and maintenance."
      heroImage={heroImg}
      heroAlt="AC Assurance commercial refrigeration service"
      description="AC Assurance provides reliable commercial refrigeration services for restaurants, stores, and businesses across Southwest Florida. From walk-in coolers and freezers to reach-in units and ice machines, our licensed technicians keep your critical equipment running efficiently to protect your inventory and your bottom line."
      benefits={[
        "Walk-in cooler and freezer repair",
        "Reach-in refrigeration unit service",
        "Ice machine repair and maintenance",
        "Preventive maintenance programs",
        "Fast response to minimize product loss",
        "Serving restaurants, stores, and commercial facilities",
      ]}
    />
  </Layout>
);

export default CommercialRefrigPage;
