import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import ServicePageShell from "@/components/ServicePageShell";
import heroImg from "@/assets/service-repair.webp";

const MiniSplitPage = () => (
  <Layout>
    <SEOHead title="Ductless Mini-Split Installation | AC Assurance Cooling & Heating" description="Expert ductless mini-split installation in Southwest Florida. Perfect for garages, additions, and rooms without ductwork. Call (239) 365-3090." />
    <ServicePageShell
      title="Ductless Mini-Split Systems"
      subtitle="Efficient zone cooling for garages, additions, sunrooms, and spaces without ductwork."
      heroImage={heroImg}
      heroAlt="AC Assurance ductless mini-split installation"
      description="Ductless mini-split systems are the ideal solution for spaces that traditional central AC can't reach — garages, Florida rooms, home offices, and new additions. AC Assurance installs and services mini-split systems from top manufacturers, providing energy-efficient cooling and heating exactly where you need it."
      benefits={[
        "Perfect for garages, additions, and sunrooms",
        "No ductwork required — simple installation",
        "Individual zone temperature control",
        "Highly energy-efficient operation",
        "Quiet indoor units with multiple mounting options",
        "Professional sizing and installation",
      ]}
    />
  </Layout>
);

export default MiniSplitPage;
