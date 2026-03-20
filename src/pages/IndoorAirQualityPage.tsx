import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import ServicePageShell from "@/components/ServicePageShell";
import heroImg from "@/assets/ac-repair.webp";

const IndoorAirQualityPage = () => (
  <Layout>
    <SEOHead title="Indoor Air Quality Solutions | AC Assurance Cooling & Heating" description="Improve your home's indoor air quality with UV lights, air purifiers, and filtration upgrades. Serving Southwest Florida. Call (239) 365-3090." />
    <ServicePageShell
      title="Indoor Air Quality Solutions"
      subtitle="Breathe cleaner, healthier air with professional air quality upgrades for your home."
      heroImage={heroImg}
      heroAlt="AC Assurance indoor air quality solutions"
      description="Florida's humidity and heat create ideal conditions for mold, bacteria, and allergens inside your home. AC Assurance offers a range of indoor air quality solutions — from UV germicidal lights and whole-home air purifiers to advanced filtration systems — designed to keep your family breathing clean, healthy air year-round."
      benefits={[
        "UV germicidal light installation",
        "Whole-home air purifier systems",
        "Advanced filtration upgrades (HEPA, MERV-rated)",
        "Humidity control solutions",
        "Air quality assessment and recommendations",
        "Compatible with all major HVAC systems",
      ]}
    />
  </Layout>
);

export default IndoorAirQualityPage;
