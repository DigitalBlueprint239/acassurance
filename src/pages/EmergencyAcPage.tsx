import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import ServicePageShell from "@/components/ServicePageShell";
import heroImg from "@/assets/emergency-hvac.webp";

const EmergencyAcPage = () => (
  <Layout>
    <SEOHead title="Emergency AC Repair 24/7 | AC Assurance Cooling & Heating" description="24/7 emergency AC repair in Naples, Fort Myers, Cape Coral. Fast response, after-hours service. Call (239) 365-3090 now." />
    <ServicePageShell
      title="24/7 Emergency AC Repair"
      subtitle="AC emergencies don't wait — and neither do we. Call anytime, day or night."
      heroImage={heroImg}
      heroAlt="AC Assurance emergency HVAC technician providing 24/7 service"
      description="When your air conditioning fails in the middle of a Florida summer night, you need help now — not tomorrow morning. AC Assurance offers around-the-clock emergency AC repair across Southwest Florida. Our technicians arrive prepared with common parts and diagnostic tools to get your system running as fast as possible."
      benefits={[
        "Available 24 hours a day, 7 days a week",
        "Fast response times across SWFL",
        "After-hours service with transparent pricing",
        "Experienced with all major AC brands",
        "Temporary cooling solutions if parts are needed",
        "Owner-operated — you get real accountability",
      ]}
      ctaText="Call for Emergency Service"
    />
  </Layout>
);

export default EmergencyAcPage;
