import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import ServicePageShell from "@/components/ServicePageShell";
import heroImg from "@/assets/service-mini-split.webp";
import indoorImg from "@/assets/mini-split-indoor.webp";
import outdoorImg from "@/assets/mini-split-outdoor.webp";
import { buildServiceSchema, buildFAQSchema } from "@/lib/seoSchemas";

const galleryImages = [
  { src: heroImg, alt: "Mini-split indoor wall unit installation in Fort Myers home" },
  { src: indoorImg, alt: "Wall-mounted ductless mini-split unit cooling a Florida room" },
  { src: outdoorImg, alt: "Mitsubishi mini-split outdoor condenser unit installed by AC Assurance" },
];

const faqs = [
  {
    question: "How much does a ductless mini-split installation cost in Southwest Florida?",
    answer: "A single-zone mini-split installation in the Fort Myers and Cape Coral area typically ranges from $3,000 to $5,500 depending on the unit capacity, brand, and installation complexity. Multi-zone systems that cool several rooms cost more. AC Assurance provides free in-home estimates so you know the exact cost before any work begins.",
  },
  {
    question: "Can a mini-split cool my garage in Florida's heat?",
    answer: "Absolutely. Garages are one of the most popular applications for mini-splits in Southwest Florida. A properly sized ductless unit can keep your garage comfortable even during peak summer heat, making it usable as a workshop, gym, or hobby space year-round.",
  },
  {
    question: "What brands of mini-split systems do you install?",
    answer: "AC Assurance installs ductless systems from leading manufacturers including Mitsubishi, Daikin, and Carrier. We'll recommend the best option based on your space, budget, and efficiency goals during your free consultation.",
  },
  {
    question: "Do I need a permit for mini-split installation in Lee or Collier County?",
    answer: "Yes, most mini-split installations in Lee County and Collier County require a building permit. AC Assurance handles all permitting as part of our installation service, so you don't have to worry about compliance or inspections.",
  },
  {
    question: "How do mini-splits compare to window units or portable ACs?",
    answer: "Mini-splits are significantly more energy-efficient, quieter, and longer-lasting than window or portable units. They provide consistent cooling without blocking windows, and most units include both cooling and heating capabilities — a real advantage during Florida's cooler winter nights.",
  },
];

const MiniSplitPage = () => (
  <Layout>
    <SEOHead
      title="Ductless Mini-Split Installation | AC Assurance Cooling & Heating"
      description="Expert ductless mini-split installation in Southwest Florida. Perfect for garages, additions, and rooms without ductwork. Call (239) 365-3090."
      schema={[
        buildServiceSchema("Ductless Mini-Split Installation", "Expert ductless mini-split installation for garages, additions, sunrooms, and spaces without ductwork.", "ductless-mini-split"),
        buildFAQSchema(faqs),
      ]}
    />
    <ServicePageShell
      title="Ductless Mini-Split Systems"
      subtitle="Efficient zone cooling for garages, additions, sunrooms, and spaces without ductwork."
      heroImage={heroImg}
      heroAlt="AC Assurance ductless mini-split installation in Southwest Florida"
      description="Ductless mini-split systems are the ideal solution for spaces that traditional central AC can't reach — garages, Florida rooms, home offices, and new additions. AC Assurance installs and services mini-split systems from top manufacturers, providing energy-efficient cooling and heating exactly where you need it. Whether you're converting a garage into a usable workspace or adding comfort to a sunroom, a properly sized mini-split delivers powerful, quiet performance without the cost of extending ductwork."
      benefits={[
        "Perfect for garages, additions, and sunrooms",
        "No ductwork required — simple installation",
        "Individual zone temperature control",
        "Highly energy-efficient operation (up to 20+ SEER)",
        "Quiet indoor units with multiple mounting options",
        "Professional sizing, permitting, and installation",
      ]}
      galleryImages={galleryImages}
      signsYouNeed={{
        heading: "Signs You Need a Ductless Mini-Split",
        content: [
          "Your garage is too hot to use during summer — a common problem across Fort Myers, Cape Coral, and Naples. A mini-split can transform your garage into a comfortable workshop, gym, or storage area without running ductwork from your main system.",
          "You've added a room, built out a Florida room, or converted a space that your existing central AC doesn't reach. Rather than overloading your main system or installing expensive ductwork, a mini-split provides dedicated cooling exactly where you need it.",
          "Your home office is consistently warmer than the rest of the house. Instead of cranking your thermostat down and overcooling the entire home, a mini-split lets you control that room independently — saving energy and improving comfort.",
          "You have an older home without ductwork, or a room above the garage that's always uncomfortable. Mini-splits solve these problems with minimal renovation and maximum efficiency.",
        ],
      }}
      ourProcess={{
        heading: "Our Mini-Split Installation Process",
        steps: [
          "Free in-home consultation — We assess your space, measure the area, evaluate electrical capacity, and discuss your comfort goals to recommend the right system.",
          "Professional sizing and system selection — We calculate the exact BTU requirements for your space to ensure the unit is properly sized. Oversized or undersized systems waste energy and wear out faster.",
          "Permitting and installation — AC Assurance handles all Lee County and Collier County permit requirements. Our licensed technicians mount the indoor unit, place the outdoor condenser, run refrigerant lines, and connect the electrical.",
          "System testing and walkthrough — We test airflow, refrigerant charge, and thermostat controls, then walk you through the remote operation and maintenance basics so you're comfortable from day one.",
        ],
      }}
      localConcerns={{
        heading: "Mini-Split Considerations for Southwest Florida",
        content: [
          "Salt air corrosion is a real concern for coastal homes in Naples, Bonita Springs, and Fort Myers Beach. AC Assurance installs outdoor condensers with corrosion-resistant coatings and recommends placement strategies that minimize salt exposure — extending the life of your investment.",
          "Florida's intense humidity means your mini-split needs to be properly sized not just for cooling capacity, but for dehumidification. An undersized unit will struggle to remove moisture, leading to mold risk. We size every system to handle Southwest Florida's unique climate demands.",
          "Many homeowners in Cape Coral and Lehigh Acres are converting garages into livable space or adding mother-in-law suites. A ductless mini-split is the most cost-effective way to add dedicated cooling and heating to these spaces without modifying your existing HVAC system.",
        ],
      }}
      faqs={faqs}
    />
  </Layout>
);

export default MiniSplitPage;
