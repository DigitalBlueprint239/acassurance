import CityAcRepairPage from "@/components/CityAcRepairPage";

const AcRepairNaples = () => (
  <CityAcRepairPage
    city="Naples"
    metaTitle="AC Repair in Naples, FL | Trusted Local HVAC | AC Assurance"
    metaDescription="Trusted AC repair in Naples, FL. Serving luxury homes, beachfront properties, and neighborhoods from 5th Avenue to Grey Oaks. Licensed & insured."
    h1="Expert AC Repair in Naples, FL"
    intro="Naples is synonymous with luxury — from the boutique-lined streets of 5th Avenue South to the gated estates of Port Royal and Grey Oaks. But even the most premium homes are at the mercy of Southwest Florida's punishing heat and humidity. High-end HVAC systems in Naples properties are often complex multi-zone setups that require specialized knowledge to diagnose and repair properly. Beachfront homes face relentless salt air that corrodes condensers and degrades refrigerant lines faster than inland properties. At AC Assurance, we bring the same level of precision and care that Naples homeowners expect from every service provider. Our owner is on-site for every job — no anonymous subcontractors, no corner-cutting. We provide same-day diagnostics, upfront pricing, and expert repair on all makes and models."
    mapQuery="Naples,FL"
    localIssues={[
      { title: "Luxury Home HVAC Complexity", description: "Naples homes often feature multi-zone systems, variable-speed compressors, and smart thermostats. Diagnosing issues requires specialized training and experience with premium equipment brands." },
      { title: "Gulf Salt Air Corrosion", description: "Properties near the beach and along the coast experience accelerated corrosion from salt-laden Gulf air. Outdoor units, copper lines, and electrical connections degrade faster without protective coatings and regular maintenance." },
      { title: "High-End System Maintenance", description: "Premium Trane, Carrier, and Lennox systems common in Naples homes require manufacturer-specific maintenance protocols. Improper service can void warranties and reduce system efficiency." },
      { title: "Seasonal Home Startup", description: "Many Naples homeowners are seasonal residents. Systems that sit idle for months can develop mold in ductwork, refrigerant leaks, and capacitor failures. A proper startup inspection prevents breakdowns when you return." },
    ]}
  />
);

export default AcRepairNaples;
