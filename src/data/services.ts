import { Wrench, Snowflake, Settings, Flame, Wind, Shield, AlertTriangle, Thermometer, Fan } from "lucide-react";

export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: typeof Wrench;
  heroDescription: string;
  features: string[];
  content: string[];
}

export const services: ServiceData[] = [
  {
    slug: "ac-repair-cape-coral",
    title: "AC Repair in Cape Coral & Fort Myers",
    shortTitle: "AC Repair",
    description: "Fast, reliable AC repair in Cape Coral & Fort Myers. We diagnose and fix all makes and models to restore your comfort quickly.",
    icon: Wrench,
    heroDescription: "When your AC breaks down in Southwest Florida's heat, you need a team that responds fast. AC Assurance provides same-day AC repair service for all makes and models.",
    features: [
      "Same-day service available",
      "All makes and models",
      "Upfront pricing — no surprises",
      "Licensed & insured technicians",
      "Parts warranty included",
    ],
    content: [
      "Living in Cape Coral and Fort Myers means relying on your air conditioning system year-round. When something goes wrong, you need a trusted HVAC contractor who can diagnose and repair the issue quickly.",
      "At AC Assurance Cooling & Heating, we provide professional AC repair services across Cape Coral, Fort Myers, and Southwest Florida. Our technicians are trained to work on all major brands and models, ensuring accurate diagnosis and lasting repairs.",
      "Whether your system is blowing warm air, making unusual noises, or cycling on and off frequently, we have the expertise to get your AC back up and running. We provide upfront pricing before starting any work, so there are no surprises on your bill.",
    ],
  },
  {
    slug: "ac-installation-replacement",
    title: "AC Installation & Replacement",
    shortTitle: "AC Installation",
    description: "Professional AC installation and system replacement. Energy-efficient solutions sized right for your home.",
    icon: Snowflake,
    heroDescription: "Upgrade your comfort with a professionally installed AC system. We help homeowners choose and install the right system for their home and budget.",
    features: [
      "Free in-home estimates",
      "Energy-efficient systems",
      "Proper load calculations",
      "Manufacturer warranties",
      "Financing available",
    ],
    content: [
      "If your air conditioning system is more than 10-15 years old, frequently breaking down, or driving up your energy bills, it may be time for a replacement.",
      "AC Assurance provides professional AC installation services throughout Cape Coral, Fort Myers, and Southwest Florida. We perform detailed load calculations to ensure your new system is properly sized for your home, maximizing efficiency and comfort.",
      "We work with trusted brands to offer reliable, energy-efficient systems that can save you money on your monthly energy bills. Financing options are available through Synchrony to help make your investment more manageable.",
    ],
  },
  {
    slug: "heating-services",
    title: "Heating Services",
    shortTitle: "Heating Services",
    description: "Professional heating repair, installation, and maintenance for Southwest Florida homes and businesses.",
    icon: Flame,
    heroDescription: "When temperatures drop in Southwest Florida, make sure your heating system is ready. AC Assurance provides professional heating services year-round.",
    features: [
      "Heat pump repair & installation",
      "Furnace service",
      "Emergency heating repair",
      "System inspections",
      "Energy-efficient upgrades",
    ],
    content: [
      "While Southwest Florida is known for its warm climate, temperatures can drop enough during winter months to make a reliable heating system essential for comfort.",
      "AC Assurance provides comprehensive heating services including repair, installation, and maintenance of heat pumps, furnaces, and dual-fuel systems.",
      "Whether you need emergency heating repair or want to upgrade to a more efficient system, our licensed technicians are ready to help.",
    ],
  },
  {
    slug: "ductless-mini-split",
    title: "Ductless Mini-Split Systems",
    shortTitle: "Mini Split Systems",
    description: "Ductless mini-split installation and service. Zone cooling without the need for ductwork.",
    icon: Wind,
    heroDescription: "Ductless mini-split systems offer flexible, energy-efficient cooling for spaces where traditional ductwork isn't practical. Ideal for additions, garages, and older homes.",
    features: [
      "No ductwork required",
      "Zone-by-zone temperature control",
      "Energy-efficient operation",
      "Quiet performance",
      "Heating and cooling capable",
    ],
    content: [
      "Ductless mini-split systems are an excellent solution for homeowners who need cooling in areas without existing ductwork. Whether you've added a room, converted a garage, or have an older home without ducts, a mini-split can provide reliable comfort.",
      "These systems offer zone-by-zone temperature control, meaning you can cool specific areas of your home without wasting energy on unoccupied rooms. They're also significantly quieter than traditional window units.",
      "AC Assurance installs and services ductless mini-split systems from leading manufacturers. Contact us for a consultation to see if a mini-split is the right solution for your space.",
    ],
  },
  {
    slug: "ac-maintenance-tune-up",
    title: "Maintenance Plans & Tune-Ups",
    shortTitle: "Maintenance Plans",
    description: "Regular AC maintenance keeps your system running efficiently. Prevent breakdowns with scheduled tune-ups.",
    icon: Settings,
    heroDescription: "Preventive maintenance extends the life of your AC system and helps avoid costly breakdowns. Keep your home comfortable year-round.",
    features: [
      "Comprehensive system inspection",
      "Coil cleaning & refrigerant check",
      "Filter replacement",
      "Performance optimization",
      "Written system report",
    ],
    content: [
      "Florida's climate puts significant demands on your air conditioning system. Regular maintenance is the best way to keep your system running efficiently and prevent unexpected breakdowns during the hottest months.",
      "Our maintenance tune-ups include a thorough inspection of your entire HVAC system, cleaning of coils and components, refrigerant level checks, and filter replacement. We provide a written report of our findings and any recommendations.",
      "Scheduling regular maintenance can extend the life of your system, improve indoor air quality, and help keep your energy bills in check.",
    ],
  },
  {
    slug: "duct-cleaning",
    title: "Duct Cleaning Services",
    shortTitle: "Duct Cleaning",
    description: "Professional air duct cleaning to improve airflow, efficiency, and indoor air quality in your home.",
    icon: Fan,
    heroDescription: "Dirty ducts can reduce airflow, increase energy costs, and circulate dust and allergens throughout your home. Professional duct cleaning restores your system's performance.",
    features: [
      "Complete duct system cleaning",
      "Improved airflow & efficiency",
      "Allergen & dust removal",
      "Before & after inspection",
      "Sanitizing treatment available",
    ],
    content: [
      "Over time, your home's air ducts accumulate dust, debris, pet dander, and other contaminants. This buildup can restrict airflow, reduce system efficiency, and negatively impact your indoor air quality.",
      "AC Assurance provides thorough duct cleaning services for homes throughout Cape Coral, Fort Myers, and Southwest Florida. Our process removes buildup from your entire duct system, improving both performance and air quality.",
      "We recommend duct cleaning every 3-5 years, or sooner if you notice increased dust, musty odors, or reduced airflow from your vents.",
    ],
  },
  {
    slug: "indoor-air-quality",
    title: "Indoor Air Quality Solutions",
    shortTitle: "Indoor Air Quality",
    description: "Improve the air you breathe at home. Air purification, filtration, and humidity control.",
    icon: Shield,
    heroDescription: "The air inside your home can contain allergens, dust, mold spores, and other pollutants. We offer solutions to help improve your indoor air quality.",
    features: [
      "Air purification systems",
      "Advanced filtration",
      "Humidity control",
      "UV germicidal lights",
      "Whole-home solutions",
    ],
    content: [
      "Indoor air quality is an important consideration for Southwest Florida homeowners, especially given the humidity and allergen levels. Poor indoor air quality can affect your health and comfort.",
      "AC Assurance offers a range of indoor air quality solutions including air purifiers, advanced filtration systems, humidity control, and UV germicidal lights. These products work alongside your existing HVAC system to reduce pollutants and improve the air you breathe.",
      "Our technicians can evaluate your home's air quality needs and recommend the right combination of products to address your specific concerns.",
    ],
  },
  {
    slug: "commercial-refrigeration",
    title: "Commercial Refrigeration Services",
    shortTitle: "Commercial Refrigeration",
    description: "Commercial refrigeration repair, installation, and maintenance for businesses in Southwest Florida.",
    icon: Thermometer,
    heroDescription: "Keep your business running with reliable commercial refrigeration service. AC Assurance serves restaurants, stores, and commercial properties across Southwest Florida.",
    features: [
      "Walk-in cooler & freezer service",
      "Display case repair",
      "New system installation",
      "Preventive maintenance plans",
      "24/7 emergency service",
    ],
    content: [
      "Reliable commercial refrigeration is critical for restaurants, grocery stores, and other businesses that depend on cold storage. Equipment failures can mean costly product loss and downtime.",
      "AC Assurance provides comprehensive commercial refrigeration services including repair, installation, and maintenance. Our technicians are experienced with walk-in coolers, freezers, display cases, and ice machines.",
      "Contact us to discuss a maintenance plan tailored to your commercial refrigeration needs.",
    ],
  },
  {
    slug: "emergency-ac-repair",
    title: "Emergency AC Repair — 24/7",
    shortTitle: "Emergency Service",
    description: "24/7 emergency AC repair in Cape Coral & Fort Myers. When your AC stops working, call AC Assurance for fast service.",
    icon: AlertTriangle,
    heroDescription: "AC emergencies don't wait for business hours. Neither do we. AC Assurance offers 24/7 emergency AC repair service in Cape Coral, Fort Myers, and Southwest Florida.",
    features: [
      "Available 24 hours a day, 7 days a week",
      "Fast response times",
      "No overtime pricing games",
      "Experienced emergency technicians",
      "All major brands serviced",
    ],
    content: [
      "When your air conditioning fails in the middle of a Southwest Florida summer, it's more than an inconvenience — it can be a health concern, especially for young children and elderly family members.",
      "AC Assurance provides 24/7 emergency AC repair services. When you call us, we'll dispatch an experienced technician to diagnose and resolve your issue as quickly as possible.",
      "Don't wait in the heat. Call 239-365-3090 for emergency AC service any time, day or night.",
    ],
  },
];

export const serviceAreas = [
  { name: "Naples", primary: true, slug: "/ac-repair-naples" },
  { name: "Fort Myers", primary: true, slug: "/ac-repair-fort-myers" },
  { name: "Cape Coral", primary: true, slug: "/ac-repair-cape-coral" },
  { name: "Bonita Springs", primary: false, slug: "" },
  { name: "Estero", primary: false, slug: "" },
  { name: "Lehigh Acres", primary: false, slug: "" },
  { name: "North Fort Myers", primary: false, slug: "" },
];

export const PHONE = "(239) 365-3090";
export const PHONE_LINK = "tel:+12393653090";
export const EMAIL = "service@acassurancefl.com";
export const LICENSE = "CAC1823832";
export const COMPANY = "AC Assurance Cooling & Heating";
export const PRIMARY_CITY = "Fort Myers & Cape Coral, FL";
