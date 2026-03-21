import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import ServicePageShell from "@/components/ServicePageShell";
import heroImg from "@/assets/service-emergency.webp";

const EmergencyAcPage = () => (
  <Layout>
    <SEOHead title="24/7 Emergency AC Repair in Naples & Cape Coral | AC Assurance" description="24/7 emergency AC repair in Naples, Fort Myers, Cape Coral. Fast response, after-hours service. Call (239) 365-3090 now." />
    <ServicePageShell
      title="24/7 Emergency AC Repair"
      subtitle="AC emergencies don't wait — and neither do we. Call anytime, day or night."
      heroImage={heroImg}
      heroAlt="Emergency HVAC technician providing 24/7 AC repair in Southwest Florida"
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
      faqs={[
        { question: "Do you offer 24/7 emergency AC repair?", answer: "Yes — AC Assurance offers true 24/7 emergency AC repair service. When you call our emergency line, you'll reach a real person who can dispatch a technician to your home day or night." },
        { question: "How fast can you respond in Fort Myers?", answer: "For emergencies in Fort Myers and surrounding areas, we typically respond within 1-2 hours. Response times may vary during peak demand, but we prioritize getting to you as fast as possible." },
        { question: "What counts as an AC emergency?", answer: "An AC emergency includes complete system failure, no cooling output, refrigerant leaks, burning smells or unusual sounds, and any situation where lack of AC poses a health risk — especially for elderly residents, young children, or pets." },
        { question: "Is emergency service more expensive?", answer: "We maintain transparent, fair pricing for all service calls including emergencies. While after-hours calls may carry a service fee, we provide upfront pricing before any work begins — no surprise charges." },
        { question: "What if my AC breaks on a weekend?", answer: "We're available weekends and holidays. AC emergencies don't follow a schedule, and neither do we. Call (239) 365-3090 anytime and we'll get a technician to your home." },
      ]}
    />
  </Layout>
);

export default EmergencyAcPage;
