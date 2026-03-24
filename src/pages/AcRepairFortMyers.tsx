import CityAcRepairPage from "@/components/CityAcRepairPage";

const AcRepairFortMyers = () => (
  <CityAcRepairPage
    city="Fort Myers"
    metaTitle="AC Repair in Fort Myers, FL | Same-Day Service | AC Assurance"
    metaDescription="Expert AC repair in Fort Myers, FL. Same-day service, transparent pricing, and licensed technicians. Serving the River District, McGregor Blvd, and all of Fort Myers."
    h1="Expert AC Repair in Fort Myers, FL"
    intro="Fort Myers homeowners know that a functioning AC system isn't a luxury — it's a necessity. From the historic River District's charming older homes to the sprawling neighborhoods along McGregor Boulevard, every property here faces unique cooling challenges. Older homes along the Caloosahatchee River often have aging ductwork that struggles to keep up with Florida's relentless humidity. Salt air drifting in from the nearby Gulf accelerates corrosion on outdoor condensers and coils. At AC Assurance, we understand these Fort Myers-specific challenges because we live and work here. Our owner-operated team provides same-day diagnostics, transparent quotes, and expert repairs — no upsells, no surprises. Whether your system is short-cycling in the summer heat or your energy bills have spiked unexpectedly, we'll get to the root cause fast."
    mapQuery="Fort+Myers,FL"
    localIssues={[
      { title: "Aging Ductwork in Older Homes", description: "Many Fort Myers homes along the river and in historic neighborhoods have ductwork that's decades old. Leaking or deteriorating ducts waste energy and reduce cooling performance significantly." },
      { title: "High Humidity Near the Caloosahatchee", description: "Proximity to the Caloosahatchee River means elevated humidity levels that force AC systems to work overtime. Proper dehumidification and system sizing are critical here." },
      { title: "Salt Air Corrosion", description: "Gulf-adjacent salt air accelerates wear on outdoor condenser units, copper lines, and electrical connections. Regular maintenance and corrosion-resistant components help extend system life." },
      { title: "Summer Cooling Demand", description: "Fort Myers summers regularly exceed 95°F with high heat indexes. Systems that aren't properly maintained or sized will struggle, leading to breakdowns at the worst possible time." },
    ]}
  />
);

export default AcRepairFortMyers;
