import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import ServicePageShell from "@/components/ServicePageShell";
import heroImg from "@/assets/service-repair.webp";

const AcRepairPage = () => (
  <Layout>
    <SEOHead title="AC Repair in Naples & Cape Coral | AC Assurance" description="Fast, reliable AC repair in Naples, Cape Coral, Fort Myers. Licensed technicians, upfront pricing, same-day service. Call (239) 365-3090." />
    <ServicePageShell
      title="AC Repair in Cape Coral & Southwest Florida"
      subtitle="Fast, reliable air conditioning repair by licensed HVAC technicians. Same-day service available."
      heroImage={heroImg}
      heroAlt="Expert AC repair technician servicing a unit in Cape Coral, FL"
      description="When your AC breaks down in Southwest Florida's heat, you need a team that responds fast and gets the job done right the first time. AC Assurance provides expert air conditioning repair for homes and businesses across Cape Coral, Fort Myers, Naples, and the surrounding areas. Our licensed technicians diagnose and fix all makes and models with upfront, transparent pricing."
      benefits={[
        "Same-day and next-day appointments available",
        "Upfront pricing — no hidden fees or surprises",
        "All major AC brands serviced and repaired",
        "Licensed (CAC1823832) and fully insured",
        "24/7 emergency repair line",
        "Honest diagnostics — we fix what's broken, nothing more",
      ]}
      faqs={[
        { question: "How quickly can you respond to AC repair in Naples?", answer: "We offer same-day and next-day AC repair appointments throughout Naples and Southwest Florida. For emergencies, our 24/7 line means we can often be at your door within 2 hours." },
        { question: "What brands do you repair?", answer: "We service and repair all major AC brands including Trane, Carrier, Lennox, Rheem, Goodman, York, and more. Our technicians are trained and experienced with every common system in SWFL homes." },
        { question: "Do you offer same-day repair in Cape Coral?", answer: "Yes — if you call before 2:00 PM, we can typically schedule same-day AC repair service in Cape Coral. After-hours emergency service is also available." },
        { question: "How much does AC repair cost in SWFL?", answer: "AC repair costs vary depending on the issue. We provide upfront pricing before starting any work, so you'll know the exact cost with no surprises. Diagnostic fees are applied toward the repair if you proceed." },
        { question: "Should I repair or replace my AC?", answer: "As a general rule, if your system is over 10-15 years old and the repair costs more than 50% of a new system, replacement often makes more sense. We'll give you an honest assessment and never push a replacement when a repair will do." },
      ]}
    />
  </Layout>
);

export default AcRepairPage;
