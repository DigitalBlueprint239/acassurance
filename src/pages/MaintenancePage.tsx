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
