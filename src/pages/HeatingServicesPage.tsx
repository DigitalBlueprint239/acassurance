import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import TrustBar from "@/components/TrustBar";
import heroImg from "@/assets/heating-hero.png";
import traneLink from "@/assets/trane-link-system.jpeg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { buildServiceSchema, buildFAQSchema } from "@/lib/seoSchemas";

const benefits = [
  "Heat pump repair and installation",
  "Furnace diagnostics and service",
  "Dual-fuel system expertise",
  "Pre-season heating tune-ups",
  "Energy-efficient upgrade recommendations",
  "Same transparent pricing as all our services",
];

const signs = [
  "Your heat pump runs constantly but your home still feels cold — this often signals low refrigerant, a failing compressor, or a reversing valve issue that needs professional diagnosis.",
  "Strange smells when the heat kicks on, especially a burning or musty odor. This can indicate dust buildup on heat strips, mold in the ductwork, or an electrical problem that shouldn't be ignored.",
  "Your energy bills spike during cooler months without a clear explanation. An inefficient or failing heating system works harder and longer, driving up costs.",
  "The system won't start or cycles on and off rapidly. Short cycling puts excessive wear on components and usually points to a thermostat issue, refrigerant problem, or electrical fault.",
];

const processSteps = [
  "Diagnostic evaluation — Our technician performs a thorough inspection of your heating system including the heat pump or furnace, thermostat, ductwork, and electrical connections to identify the exact issue.",
  "Transparent quote — We explain the problem in plain language and provide an upfront price before any work begins. No surprises, no pressure.",
  "Expert repair or installation — Our licensed technicians complete the repair using quality parts, or install a new energy-efficient system sized correctly for your home.",
  "System testing and verification — We run the system through a full heating cycle, verify temperature output, check airflow, and make sure everything is operating safely and efficiently before we leave.",
];

const localConcerns = [
  "Southwest Florida's winters are mild compared to the rest of the country, but cold snaps in the 30s and 40s can catch homeowners off guard — especially if your heating system hasn't been used in months. Pre-season tune-ups prevent breakdowns when you need heat most.",
  "Heat pumps are the dominant heating solution in our area because they're efficient in mild climates and double as air conditioners. But they require different maintenance than traditional furnaces, and many HVAC companies in Florida don't specialize in heat pump service. AC Assurance does.",
  "Dual-fuel systems — which pair a heat pump with a gas furnace backup — are increasingly popular in Fort Myers and Cape Coral for homeowners who want efficiency most of the time and reliable backup during the coldest nights. We install and service both components.",
];

const faqs = [
  {
    question: "What's the difference between a heat pump and a furnace for Florida homes?",
    answer: "A heat pump moves heat rather than generating it, making it extremely efficient in mild climates like Southwest Florida. It also works as your air conditioner in reverse. A furnace burns fuel to create heat and is typically used as a backup in dual-fuel systems. For most Fort Myers and Naples homes, a heat pump is the most cost-effective primary heating solution.",
  },
  {
    question: "How often should I service my heating system in Southwest Florida?",
    answer: "We recommend a heating system tune-up once per year, ideally in the fall before cooler weather arrives. Since your heat pump also serves as your AC, it gets year-round use — which makes annual heating-specific maintenance even more important to catch issues before the winter season.",
  },
  {
    question: "What should I do if my heat pump stops working during a cold snap?",
    answer: "First, check your thermostat settings and make sure it's set to 'heat' mode. Check your air filter — a clogged filter can cause the system to shut down. If it still won't run, call AC Assurance. We provide prompt service throughout Fort Myers, Cape Coral, Naples, and surrounding areas so you're not left in the cold.",
  },
  {
    question: "How much does heating repair cost in Southwest Florida?",
    answer: "Heating repair costs vary depending on the issue. Simple fixes like a thermostat replacement or capacitor swap may run $150–$400. More complex repairs like a compressor or reversing valve replacement can range from $800–$2,500. AC Assurance always provides an upfront quote before starting work.",
  },
  {
    question: "Is a dual-fuel system worth it in Florida?",
    answer: "For many homeowners in the Fort Myers and Cape Coral area, yes. A dual-fuel system uses your efficient heat pump for most heating needs but automatically switches to a gas furnace during the coldest temperatures for faster, more powerful heat. It's the best of both worlds for comfort and efficiency.",
  },
];

const HeatingServicesPage = () => (
  <Layout>
    <SEOHead
      title="Heating Services Southwest Florida | AC Assurance Cooling & Heating"
      description="Professional heating repair and installation in Naples, Fort Myers, Cape Coral. Heat pumps, furnaces, and more. Call (239) 365-3090."
      schema={[
        buildServiceSchema("Heating Services", "Professional heating repair and installation including heat pumps, furnaces, and dual-fuel systems for Southwest Florida.", "heating-services"),
        buildFAQSchema(faqs),
      ]}
    />
    <main>
      {/* ── Split-Panel Hero ── */}
      <section className="flex flex-col lg:flex-row min-h-[500px] lg:min-h-[560px]">
        {/* Mobile: image on top */}
        <div className="lg:hidden bg-secondary flex items-center justify-center gap-4 px-6 py-8">
          <img
            src={heroImg}
            alt="Trane smart thermostat and home comfort controls"
            width={400}
            height={300}
            fetchPriority="high"
            decoding="async"
            className="max-h-[200px] w-auto object-contain drop-shadow-xl"
          />
          <img
            src={traneLink}
            alt="Trane Link system controller"
            width={400}
            height={300}
            decoding="async"
            className="max-h-[200px] w-auto object-contain drop-shadow-xl"
          />
        </div>

        {/* Text panel */}
        <div className="flex flex-col justify-center px-6 py-12 sm:px-10 lg:w-[60%] lg:px-16 lg:py-20 bg-gradient-to-br from-primary to-[hsl(220,72%,20%)] relative overflow-hidden">
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary-foreground/5 blur-3xl pointer-events-none" />

          <span className="mb-3 inline-block w-fit rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground/80">
            Expert Heating Services
          </span>

          <h1 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
            Heating Services
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            Heat pump repair, furnace service, and dual-fuel systems — sized and serviced for Florida's climate.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link
              to="/contact"
              className="rounded-lg bg-primary-foreground px-6 py-3 text-center text-base font-semibold text-primary shadow-lg transition hover:bg-primary-foreground/90"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:+12393653090"
              className="rounded-lg border border-primary-foreground/30 px-6 py-3 text-center text-base font-semibold text-primary-foreground transition hover:bg-primary-foreground/10"
            >
              Call (239) 365-3090
            </a>
          </div>
        </div>

        {/* Image panel — desktop only */}
        <div className="hidden lg:flex lg:w-[40%] flex-col items-center justify-center gap-4 bg-secondary p-10">
          <img
            src={heroImg}
            alt="Trane smart thermostat and home comfort controls"
            width={800}
            height={600}
            fetchPriority="high"
            decoding="async"
            className="max-h-[260px] w-auto object-contain drop-shadow-2xl"
          />
          <img
            src={traneLink}
            alt="Trane Link system controller"
            width={800}
            height={600}
            decoding="async"
            className="max-h-[220px] w-auto object-contain drop-shadow-2xl"
          />
        </div>
      </section>

      <TrustBar />

      {/* Description + Benefits */}
      <section className="mx-auto max-w-4xl px-4 py-16">
        <p className="text-lg leading-relaxed text-muted-foreground">
          Southwest Florida may be known for heat, but cool winter nights still
          require a reliable heating system. AC Assurance provides expert heating
          repair, installation, and maintenance for heat pumps, furnaces, and
          dual-fuel systems. Whether your heat pump won't switch to heating mode
          or you're ready to upgrade to a more efficient system, our licensed
          technicians deliver honest diagnostics and quality work — every time.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-xl border border-border bg-secondary p-4"
            >
              <svg
                className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm font-medium text-foreground">{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Signs You Need Heating Service */}
      <section className="mx-auto max-w-4xl px-4 pb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">Signs Your Heating System Needs Attention</h2>
        {signs.map((s, i) => (
          <p key={i} className="text-base leading-relaxed text-muted-foreground mb-4">{s}</p>
        ))}
      </section>

      {/* Our Process */}
      <section className="mx-auto max-w-4xl px-4 pb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">Our Heating Service Process</h2>
        <ol className="space-y-4">
          {processSteps.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-full section-navy flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-primary-foreground font-bold text-sm">{i + 1}</span>
              </span>
              <span className="text-base text-muted-foreground leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Local Concerns */}
      <section className="mx-auto max-w-4xl px-4 pb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">Heating Considerations for Southwest Florida</h2>
        {localConcerns.map((p, i) => (
          <p key={i} className="text-base leading-relaxed text-muted-foreground mb-4">{p}</p>
        ))}
      </section>

      {/* FAQs */}
      <section className="mx-auto max-w-4xl px-4 pb-16">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6">Frequently Asked Questions</h2>
        <Accordion type="multiple" defaultValue={faqs.map((_, i) => `faq-${i}`)} className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left text-base font-medium">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Bottom CTA */}
      <section className="bg-primary py-12 px-4 text-center">
        <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl">
          Ready to Schedule Heating Service?
        </h2>
        <p className="mt-2 text-primary-foreground/80">
          Serving Naples, Fort Myers, Cape Coral and all of Southwest Florida.
        </p>
        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <Link
            to="/contact"
            className="rounded-lg bg-primary-foreground px-6 py-3 text-base font-semibold text-primary shadow transition hover:bg-secondary"
          >
            Request Service Online
          </Link>
          <a
            href="tel:+12393653090"
            className="rounded-lg border border-primary-foreground/30 px-6 py-3 text-base font-semibold text-primary-foreground transition hover:bg-primary-foreground/10"
          >
            Call Now — (239) 365-3090
          </a>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-primary-foreground/70">
          <Link to="/financing" className="underline hover:text-primary-foreground transition">Financing Options</Link>
          <span>·</span>
          <Link to="/service-areas" className="underline hover:text-primary-foreground transition">Service Areas</Link>
          <span>·</span>
          <Link to="/reviews" className="underline hover:text-primary-foreground transition">Customer Reviews</Link>
        </div>
      </section>
    </main>
  </Layout>
);

export default HeatingServicesPage;
