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
    />
  </Layout>
);

export default MaintenancePage;
