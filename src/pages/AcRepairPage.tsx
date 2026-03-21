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
    />
  </Layout>
);

export default AcRepairPage;
