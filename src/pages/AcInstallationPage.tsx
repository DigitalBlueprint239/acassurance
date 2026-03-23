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
      signsYouNeed={{
        heading: "Signs You Need AC Replacement",
        content: [
          "Knowing when to replace your air conditioning system rather than continuing to repair it is one of the most important decisions a Southwest Florida homeowner can make. While repairs can extend the life of your system, there comes a point where replacement is the smarter investment.",
          "If your AC is more than 12-15 years old, requires frequent repairs, or uses the now-phased-out R-22 refrigerant, it's time to seriously consider replacement. Older systems lose efficiency over time, and the cost of R-22 has skyrocketed since production ended.",
          "Uneven cooling throughout your home, excessive humidity even when the AC is running, and steadily increasing electric bills are all signs that your current system is no longer performing adequately. Modern systems with variable-speed technology and higher SEER ratings can reduce your cooling costs by 30-50%.",
          "If you've had a major component failure — such as a compressor or evaporator coil — on a system that's already 10+ years old, the cost of that single repair often approaches 50-60% of a new system. In these cases, investing in a new, warrantied system makes more financial sense.",
        ],
      }}
      ourProcess={{
        heading: "Our AC Installation Process",
        steps: [
          "Diagnosis — We start with a comprehensive in-home evaluation including a Manual J load calculation, ductwork assessment, and discussion of your comfort goals and budget to recommend the right system.",
          "Transparent Quote — You receive a detailed, itemized proposal covering equipment options, installation scope, warranty details, and financing options. No pressure, no hidden costs.",
          "Expert Installation — Our licensed technicians install your new system according to manufacturer specifications and local code requirements, ensuring optimal performance and warranty compliance.",
          "Final Testing & Walkthrough — We thoroughly test your new system, verify airflow and temperature in every room, program your thermostat, and walk you through system operation and maintenance tips.",
        ],
      }}
      localConcerns={{
        heading: "Common AC Installation Questions in Southwest Florida",
        content: [
          "Choosing the right AC system for a Southwest Florida home requires careful consideration of our unique climate demands. With cooling seasons that stretch 8-9 months and humidity levels that stay elevated year-round, proper system sizing and equipment selection are critical.",
          "One of the most common mistakes we see is oversized systems. An AC that's too large for your home will short-cycle — turning on and off frequently without properly dehumidifying your air. In Florida, dehumidification is just as important as cooling. A properly sized system runs longer cycles that effectively remove moisture while maintaining comfortable temperatures.",
          "For coastal homes in Cape Coral and Fort Myers, we recommend systems with coil coatings and corrosion-resistant components to combat salt air damage. The investment in coastal-rated equipment pays for itself many times over in extended system life and reduced repair frequency.",
        ],
      }}
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
