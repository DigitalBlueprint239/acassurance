import CityAcRepairPage from "@/components/CityAcRepairPage";

const AcRepairLehighAcres = () => (
  <CityAcRepairPage
    city="Lehigh Acres"
    metaTitle="AC Repair in Lehigh Acres, FL | Affordable Local Service | AC Assurance"
    metaDescription="Reliable AC repair in Lehigh Acres, FL. Serving all Lehigh Acres neighborhoods with honest pricing and licensed technicians. Call for same-day service."
    h1="Expert AC Repair in Lehigh Acres, FL"
    intro="Lehigh Acres is one of the largest communities in Lee County, and its inland location means residents feel the full force of Southwest Florida's summer heat without the moderating ocean breeze that coastal cities enjoy. Temperatures in Lehigh Acres often run several degrees hotter than Fort Myers or Cape Coral, putting extreme demands on residential AC systems. Many homes in Lehigh Acres were built during the 2000s housing boom, and the builder-grade HVAC equipment installed at that time is now reaching the end of its expected lifespan. Homeowners here are practical and budget-conscious — they want honest answers about whether to repair or replace. At AC Assurance, we give you a straightforward diagnosis, transparent pricing, and the real numbers on repair vs. replacement so you can make the best decision for your family and budget."
    mapQuery="Lehigh+Acres,FL"
    localIssues={[
      { title: "Extreme Inland Heat", description: "Without coastal breezes, Lehigh Acres regularly sees temperatures 3-5°F hotter than nearby coastal cities. This means your AC system works harder and longer, accelerating wear on compressors, capacitors, and fan motors." },
      { title: "Aging Builder-Grade Systems", description: "Many Lehigh Acres homes were built with minimum-spec HVAC equipment during the 2000s building boom. These systems are now 15-20 years old and approaching the end of their useful life, leading to frequent breakdowns." },
      { title: "Repair vs. Replace Decisions", description: "When a major component fails on an older system, the decision to repair or replace is critical. We provide honest assessments with real cost comparisons so you can make an informed choice without pressure." },
      { title: "Duct Deterioration", description: "Older flex duct in Lehigh Acres attics degrades from extreme attic heat — often exceeding 150°F in summer. Collapsed, disconnected, or deteriorated ducts waste energy and leave rooms uncomfortably warm." },
    ]}
  />
);

export default AcRepairLehighAcres;
