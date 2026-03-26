import CityAcRepairPage from "@/components/CityAcRepairPage";
import { buildHVACBusinessSchema } from "@/lib/seoSchemas";

const AcRepairBonitaSprings = () => (
  <CityAcRepairPage
    city="Bonita Springs"
    metaTitle="AC Repair in Bonita Springs, FL | Local HVAC Experts | AC Assurance"
    metaDescription="Local AC repair experts in Bonita Springs, FL. Serving Bonita Beach, the Imperial River area, and all Bonita Springs communities. Licensed & insured."
    h1="Expert AC Repair in Bonita Springs, FL"
    intro="Bonita Springs sits at the crossroads of Lee and Collier counties, offering a unique blend of beachside relaxation and vibrant community life. From the sandy shores of Bonita Beach to the lush neighborhoods along the Imperial River, homes here face the full spectrum of Southwest Florida's climate challenges. The coastal proximity means salt air is a constant threat to outdoor AC equipment, while the mix of seasonal snowbirds and year-round residents creates unique service demands. Vacation rentals along the beach corridor need reliable cooling systems that can handle constant guest turnover. At AC Assurance, we serve Bonita Springs homeowners and property managers with the same owner-supervised quality we're known for throughout SWFL. No subcontractors, transparent pricing, and same-day service when you need it most."
    mapQuery="Bonita+Springs,FL"
    schema={[buildHVACBusinessSchema("Bonita Springs")]}
    localIssues={[
      { title: "Coastal Corrosion Near Bonita Beach", description: "Properties near Bonita Beach and Barefoot Beach face aggressive salt air corrosion. Outdoor condensers, copper refrigerant lines, and electrical contacts deteriorate faster, requiring corrosion-resistant components and more frequent maintenance." },
      { title: "Seasonal Home Startup Issues", description: "Many Bonita Springs homes sit vacant during summer months. When snowbirds return in fall, systems that haven't run in months often have capacitor failures, refrigerant leaks, or mold growth in ductwork." },
      { title: "Vacation Rental HVAC Demands", description: "Short-term rentals require AC systems that perform reliably under heavy use. Guests often set thermostats to extremes, and quick turnovers mean systems rarely get a break during peak season." },
      { title: "Imperial River Humidity", description: "Homes near the Imperial River deal with elevated humidity levels. If your AC system isn't properly dehumidifying, you'll see condensation buildup, musty odors, and potential mold issues." },
    ]}
  />
);

export default AcRepairBonitaSprings;
