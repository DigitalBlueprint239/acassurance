import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import ServicePageShell from "@/components/ServicePageShell";
import heroImg from "@/assets/service-repair.webp";

const HeatingServicesPage = () => (
  <Layout>
    <SEOHead title="Heating Services Southwest Florida | AC Assurance Cooling & Heating" description="Professional heating repair and installation in Naples, Fort Myers, Cape Coral. Heat pumps, furnaces, and more. Call (239) 365-3090." />
    <ServicePageShell
      title="Heating Services"
      subtitle="Stay warm during Florida's cool season with expert heating repair and installation."
      heroImage={heroImg}
      heroAlt="AC Assurance technician servicing a heating system in Southwest Florida"
      description="Southwest Florida may be known for heat, but cool winter nights still require a reliable heating system. AC Assurance provides expert heating repair, installation, and maintenance for heat pumps, furnaces, and dual-fuel systems. We ensure your home stays comfortable year-round with properly maintained heating equipment."
      benefits={[
        "Heat pump repair and installation",
        "Furnace diagnostics and service",
        "Dual-fuel system expertise",
        "Pre-season heating tune-ups",
        "Energy-efficient upgrade recommendations",
        "Same transparent pricing as all our services",
      ]}
    />
  </Layout>
);

export default HeatingServicesPage;
