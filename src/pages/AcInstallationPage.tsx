import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import ServicePageShell from "@/components/ServicePageShell";
import heroImg from "@/assets/ac-installation.webp";

const AcInstallationPage = () => (
  <Layout>
    <SEOHead title="AC Installation & Replacement | AC Assurance Cooling & Heating" description="Professional AC installation and replacement in Southwest Florida. Trane systems, financing available, expert sizing. Call (239) 365-3090." />
    <ServicePageShell
      title="AC Installation & Replacement"
      subtitle="Expert AC system installation with proper sizing, top-tier equipment, and financing options."
      heroImage={heroImg}
      heroAlt="The AC Assurance team of certified HVAC installation professionals"
      description="Whether you're replacing a failing system or upgrading to a more efficient unit, AC Assurance delivers professional AC installation tailored to your home and budget. We carry Trane systems built to handle Southwest Florida's demanding climate and provide expert load calculations to ensure your new system is properly sized for maximum comfort and efficiency."
      benefits={[
        "Free in-home estimates and system sizing",
        "Trane systems — built for Florida's heat and humidity",
        "Flexible financing through Synchrony Financial",
        "Professional installation by licensed technicians",
        "Manufacturer warranty support included",
        "Energy-efficient options to lower utility bills",
      ]}
    />
  </Layout>
);

export default AcInstallationPage;
