import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import ServicePageShell from "@/components/ServicePageShell";
import heroImg from "@/assets/service-maintenance.webp";

const MaintenancePage = () => (
  <Layout>
    <SEOHead title="AC Maintenance & Tune-Up in Naples & Cape Coral | AC Assurance" description="Preventive AC maintenance and tune-ups in Naples, Fort Myers, Cape Coral. Extend system life, lower bills, prevent breakdowns. Call (239) 365-3090." />
    <ServicePageShell
      title="AC Maintenance & Tune-Up"
      subtitle="Preventive maintenance that extends system life, lowers energy bills, and prevents costly breakdowns."
      heroImage={heroImg}
      heroAlt="AC maintenance and tune-up service in Naples, FL"
      description="Regular AC maintenance is the single best way to avoid expensive emergency repairs and keep your system running efficiently in Southwest Florida's demanding climate. AC Assurance's comprehensive tune-up service covers every critical component — from refrigerant levels and electrical connections to coil cleaning and airflow optimization."
      benefits={[
        "Comprehensive system inspection and cleaning",
        "Refrigerant level check and adjustment",
        "Electrical connection tightening and testing",
        "Condensate drain line clearing",
        "Thermostat calibration and testing",
        "Written report of system condition and recommendations",
      ]}
      signsYouNeed={{
        heading: "Signs You Need AC Maintenance",
        content: [
          "Many homeowners wait until their AC breaks down to call a technician, but the warning signs that maintenance is overdue are often present long before a failure occurs. Recognizing these signs can save you hundreds — or even thousands — in emergency repair costs.",
          "If it's been more than 6 months since your last professional tune-up, your system is likely accumulating efficiency-robbing issues. Dirty coils reduce cooling capacity by up to 30%, worn capacitors strain your compressor, and clogged drain lines can lead to water damage and mold growth.",
          "Rising energy bills without a change in usage patterns are a strong indicator that your system is working harder than it should. A well-maintained AC operates at peak efficiency, while a neglected one consumes significantly more electricity to produce the same cooling output.",
          "Inconsistent temperatures between rooms, longer run times to reach your thermostat setting, and reduced airflow from vents all point to a system that needs professional attention. These issues rarely resolve on their own and typically worsen over time.",
        ],
      }}
      ourProcess={{
        heading: "Our AC Maintenance Process",
        steps: [
          "Diagnosis — We perform a comprehensive multi-point inspection covering electrical components, refrigerant charge, airflow measurements, coil condition, drain lines, and overall system health.",
          "Transparent Quote — If we identify any issues requiring additional repair, we provide a clear explanation and upfront pricing before proceeding. Maintenance findings are documented in a written report.",
          "Expert Service — We clean coils, clear drain lines, tighten electrical connections, check refrigerant levels, replace filters, calibrate your thermostat, and address any minor issues found during inspection.",
          "Final Testing & Walkthrough — We test your system's performance across all modes, verify temperature differentials and airflow, and review our findings report with you, including any recommendations for future service.",
        ],
      }}
      localConcerns={{
        heading: "Common AC Maintenance Questions in Southwest Florida",
        content: [
          "In Southwest Florida, AC maintenance isn't a luxury — it's a necessity. Your system runs 8-9 months out of the year, often 12-16 hours per day during peak summer. That level of demand means components wear faster and efficiency degrades quicker than in milder climates.",
          "The most common question we hear is how often maintenance should be performed. For SWFL homes, we recommend twice-yearly service: once in early spring before cooling season begins, and once in early fall. This schedule catches developing issues before they become emergencies and keeps your system running at peak efficiency when you need it most.",
          "Another frequent concern is whether maintenance plans are worth it. The data is clear: regularly maintained AC systems last 3-5 years longer, operate 15-25% more efficiently, and experience 95% fewer emergency breakdowns compared to neglected systems. When you factor in the energy savings alone, maintenance plans typically pay for themselves within the first year.",
        ],
      }}
      faqs={[
        { question: "How often should I service my AC in Florida?", answer: "In Southwest Florida, we recommend twice-yearly maintenance — once in early spring before peak cooling season and once in early fall. Florida's year-round AC usage puts more stress on systems than most climates." },
        { question: "What's included in an AC tune-up?", answer: "Our tune-up includes a full system inspection, coil cleaning, refrigerant level check, electrical connection testing, drain line clearing, filter replacement, thermostat calibration, and a written report of findings." },
        { question: "Can maintenance really prevent breakdowns?", answer: "Yes — the majority of AC breakdowns we see could have been prevented with regular maintenance. Catching small issues before they become big problems saves you money and keeps your home comfortable." },
        { question: "Do you offer maintenance plans?", answer: "Yes — we offer maintenance plans that include scheduled tune-ups, priority scheduling, and discounts on repairs. Contact us for plan details and pricing." },
        { question: "How much does an AC tune-up cost in Naples?", answer: "Tune-up pricing varies based on system type and any additional services needed. We offer competitive, transparent pricing with no hidden fees. Call us for a current quote." },
      ]}
    />
  </Layout>
);

export default MaintenancePage;
