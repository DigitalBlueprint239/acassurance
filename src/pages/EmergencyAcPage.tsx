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
      signsYouNeed={{
        heading: "Signs You Need Emergency AC Service",
        content: [
          "Not every AC problem is an emergency — but some situations require immediate professional attention to protect your family's health and safety, and to prevent further damage to your system. Knowing the difference can save you money and prevent unnecessary stress.",
          "Complete system failure during extreme heat is the most obvious emergency, especially if you have elderly family members, young children, or pets at home. When indoor temperatures rise above 85°F with no cooling, heat-related health risks increase rapidly in Florida's climate.",
          "If you smell burning, see smoke, or hear popping sounds from your AC system, turn it off immediately and call for emergency service. These symptoms can indicate electrical failures that pose fire risks. Similarly, if you notice a hissing sound combined with a sudden loss of cooling, you may have a refrigerant leak that requires professional handling.",
          "Severe water leaks from your indoor unit that threaten flooring, drywall, or electrical components also warrant emergency attention. In Florida's humidity, standing water from an AC leak can lead to mold growth within 24-48 hours.",
        ],
      }}
      ourProcess={{
        heading: "Our Emergency AC Repair Process",
        steps: [
          "Diagnosis — When you call our 24/7 emergency line, we dispatch a technician equipped with diagnostic tools and common replacement parts to get to you as quickly as possible.",
          "Transparent Quote — Even in an emergency, we provide upfront pricing before starting any repair. You'll know the cost before we begin — no pressure, no surprise charges.",
          "Expert Repair — Our technicians work efficiently to restore your cooling as fast as possible, using quality parts and proper repair techniques even under time pressure.",
          "Final Testing & Walkthrough — We thoroughly test your system after the repair, ensure it's running safely and efficiently, and provide recommendations for any follow-up service if needed.",
        ],
      }}
      localConcerns={{
        heading: "Common Emergency AC Questions in Southwest Florida",
        content: [
          "Southwest Florida's extreme summer temperatures make AC emergencies more dangerous here than in most parts of the country. When outdoor temperatures exceed 95°F with high humidity, an un-cooled home can become dangerously hot within hours — particularly for vulnerable populations.",
          "One of the most common questions we receive is about after-hours pricing. At AC Assurance, we believe in transparent pricing regardless of when you call. While emergency and after-hours calls may include a service fee, we always provide upfront pricing before any work begins. You won't be hit with surprise charges at 2 AM when you're most vulnerable.",
          "Another frequent concern is response time. Our goal is to reach emergency calls within 1-2 hours across our Southwest Florida service area, including Cape Coral, Fort Myers, Naples, and surrounding communities. During peak summer demand, response times may vary, but we prioritize dispatching based on the severity of each situation.",
        ],
      }}
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
