import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import ServicePageShell from "@/components/ServicePageShell";
import heroImg from "@/assets/service-installation.webp";

const AcInstallationPage = () => (
  <Layout>
    <SEOHead title="AC Installation & Replacement in Naples & Cape Coral | AC Assurance" description="Professional AC installation and replacement in Naples, Cape Coral, Fort Myers. Trane systems, financing available, expert sizing. Call (239) 365-3090." />
    <ServicePageShell
      title="AC Installation & Replacement"
      subtitle="Expert AC system installation with proper sizing, top-tier equipment, and financing options."
      heroImage={heroImg}
      heroAlt="Professional AC installation and replacement in Naples, FL"
      description="Whether you're replacing a failing system or upgrading to a more efficient unit, AC Assurance delivers professional AC installation tailored to your home and budget. We carry Trane systems built to handle Southwest Florida's demanding climate and provide expert load calculations to ensure your new system is properly sized for maximum comfort and efficiency."
      benefits={[
        "Free in-home estimates and system sizing",
        "Trane systems — built for Florida's heat and humidity",
        "Flexible financing through Synchrony Financial",
        "Professional installation by licensed technicians",
        "Manufacturer warranty support included",
        "Energy-efficient options to lower utility bills",
      ]}
      faqs={[
        { question: "How long does AC installation take?", answer: "Most residential AC installations are completed in one day — typically 4 to 8 hours depending on the complexity of the job. We'll give you a clear timeline during your free in-home estimate." },
        { question: "What size AC do I need for my Florida home?", answer: "Proper sizing depends on your home's square footage, insulation, window exposure, and layout. We perform a detailed Manual J load calculation to ensure your new system is perfectly sized — not too big, not too small." },
        { question: "Do you install Trane systems?", answer: "Yes — AC Assurance is a proud Independent Trane Dealer. We install the full Trane product line including central air conditioners, heat pumps, and air handlers, all backed by comprehensive manufacturer warranties." },
        { question: "What's included in a new AC installation?", answer: "Our installations include the new equipment, professional installation by licensed technicians, thermostat setup, system testing, cleanup, and a walkthrough of your new system. We also handle permit coordination when required." },
        { question: "Do you offer financing for new AC systems?", answer: "Yes — we offer financing through Synchrony Financial with convenient monthly payment options. Special financing available, subject to credit approval. Call us for current terms and details." },
      ]}
    />
  </Layout>
);

export default AcInstallationPage;
