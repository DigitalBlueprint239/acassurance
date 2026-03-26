import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import TrustBar from "@/components/TrustBar";
import heroImg from "@/assets/trane-iaq-filter.png";
import { Wind, ShieldCheck, Sparkles, Star, BadgeCheck } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { buildServiceSchema, buildFAQSchema } from "@/lib/seoSchemas";

const benefits = [
  "UV germicidal light installation",
  "Whole-home air purifier systems",
  "Advanced filtration upgrades (HEPA, MERV-rated)",
  "Humidity control solutions",
  "Air quality assessment and recommendations",
  "Compatible with all major HVAC systems",
];

const processSteps = [
  {
    icon: Wind,
    title: "Air Intake",
    desc: "Your existing HVAC draws in indoor air containing dust, allergens, and pollutants.",
  },
  {
    icon: ShieldCheck,
    title: "Advanced Purification",
    desc: "UV lights and HEPA filtration eliminate 99.9% of airborne contaminants.",
  },
  {
    icon: Sparkles,
    title: "Pure Air Delivered",
    desc: "Clean, fresh air is circulated throughout every room in your home.",
  },
];

const signs = [
  "A musty or stale smell when your AC runs — this often indicates mold growth inside your ductwork or on the evaporator coil, a common problem in Southwest Florida's high humidity.",
  "Increased allergy or asthma symptoms indoors. If your family members are sneezing, coughing, or experiencing respiratory irritation more at home than outside, your indoor air quality may be the culprit.",
  "Visible dust buildup that returns quickly after cleaning. Excessive dust circulation means your current filtration isn't capturing fine particles, and upgrading your filter or adding a whole-home purifier can make a significant difference.",
  "Humidity that feels oppressive even with the AC running. Proper indoor humidity in Florida should be between 40–60%. If your home feels damp or you see condensation on windows, you may need a dehumidification solution integrated with your HVAC system.",
];

const localContent = [
  "Southwest Florida's subtropical climate creates a perfect storm for indoor air quality problems. High humidity year-round promotes mold and mildew growth inside ductwork and on evaporator coils. Without proper treatment, these contaminants circulate through your home every time the AC runs.",
  "Post-hurricane and storm season, indoor air quality can deteriorate significantly due to moisture intrusion, standing water, and disrupted ductwork. AC Assurance helps homeowners in Fort Myers, Naples, and Cape Coral restore clean indoor air after weather events with professional duct inspection, UV light installation, and filtration upgrades.",
  "New construction and recently renovated homes in the Cape Coral and Lehigh Acres area can have elevated levels of VOCs (volatile organic compounds) from paint, adhesives, and building materials. A whole-home air purifier helps neutralize these chemicals while your home off-gasses during the first year.",
];

const faqs = [
  {
    question: "Do UV lights in HVAC systems really work?",
    answer: "Yes. UV germicidal lights installed inside your HVAC system are proven to kill mold, bacteria, and viruses on the evaporator coil and in the airstream. They're especially effective in Florida's humid climate where mold growth on AC components is a persistent problem. AC Assurance installs UV lights that run continuously to keep your system clean.",
  },
  {
    question: "What's the difference between HEPA filters and standard AC filters?",
    answer: "Standard AC filters (MERV 1–8) capture large particles like dust and pet hair. HEPA-grade and high-MERV filters (MERV 13+) capture much finer particles including pollen, mold spores, bacteria, and some viruses. We recommend the highest filtration level your system can handle without restricting airflow — which is why professional sizing matters.",
  },
  {
    question: "How can I control humidity in my Florida home?",
    answer: "The most effective approach is a whole-home dehumidifier integrated with your HVAC system. This works alongside your air conditioner to maintain optimal humidity between 40–60% without overcooling your home. AC Assurance installs and services dehumidification systems that work with all major HVAC brands.",
  },
  {
    question: "Will an air purifier help with my allergies?",
    answer: "In most cases, yes. A whole-home air purifier combined with proper filtration can dramatically reduce airborne allergens like pollen, pet dander, dust mites, and mold spores. Many of our customers in Naples and Fort Myers report noticeable improvement in allergy symptoms within the first week of installation.",
  },
  {
    question: "How much do indoor air quality upgrades cost?",
    answer: "Costs vary by solution. A UV light installation typically ranges from $400–$800. Whole-home air purifiers range from $800–$2,000. Advanced filtration upgrades are usually $200–$600. AC Assurance provides free assessments and upfront pricing so you can choose the right solution for your home and budget.",
  },
];

const IndoorAirQualityPage = () => (
  <Layout>
    <SEOHead
      title="Indoor Air Quality Solutions | AC Assurance Cooling & Heating"
      description="Improve your home's indoor air quality with UV lights, air purifiers, and filtration upgrades. Serving Southwest Florida. Call (239) 365-3090."
      schema={[
        buildServiceSchema("Indoor Air Quality Solutions", "Professional indoor air quality upgrades including UV germicidal lights, whole-home air purifiers, and advanced filtration systems.", "indoor-air-quality"),
        buildFAQSchema(faqs),
      ]}
    />
    <main>
      {/* ── Premium Hero — 65/35 Asymmetric Split ── */}
      <section className="relative flex flex-col lg:flex-row min-h-[520px] lg:min-h-[600px] overflow-hidden">
        <div className="lg:hidden relative flex items-center justify-center bg-gradient-to-b from-[hsl(220,72%,13%)] to-[#E0F2FE] px-6 py-10">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-72 h-72 rounded-full bg-[#E0F2FE] opacity-50 blur-3xl animate-glow-pulse" />
          </div>
          <img
            src={heroImg}
            alt="Trane CleanEffects whole-home air filtration system"
            width={400}
            height={300}
            fetchPriority="high"
            decoding="async"
            className="relative z-10 max-h-[260px] w-auto object-contain drop-shadow-2xl animate-fade-scale-in"
          />
        </div>

        <div className="flex flex-col justify-center px-6 py-14 sm:px-10 lg:w-[65%] lg:px-16 lg:py-20 bg-gradient-to-br from-[hsl(220,72%,13%)] to-primary relative overflow-hidden">
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#E0F2FE]/5 blur-3xl pointer-events-none" />

          <div
            className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 opacity-0 animate-slide-in-left"
            style={{ animationDelay: "0.1s" }}
          >
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <span className="text-xs font-semibold tracking-wide text-primary-foreground/90">
              5-Star Rated · Verified
            </span>
            <BadgeCheck className="h-4 w-4 text-[#E0F2FE]" />
          </div>

          <h1 className="opacity-0 animate-slide-in-left" style={{ animationDelay: "0.25s" }}>
            <span className="block font-heading text-5xl font-extrabold tracking-tight text-primary-foreground sm:text-6xl lg:text-7xl">
              Breathe.
            </span>
            <span className="block font-heading text-3xl font-light tracking-tight text-primary-foreground/80 sm:text-4xl lg:text-5xl mt-1">
              Pure Air. Guaranteed.
            </span>
          </h1>

          <p
            className="mt-5 max-w-lg text-base leading-relaxed text-primary-foreground/70 sm:text-lg opacity-0 animate-slide-in-left"
            style={{ animationDelay: "0.4s" }}
          >
            Professional air quality upgrades that remove 99.9% of allergens,
            mold, and bacteria — so your family breathes cleaner, healthier air
            every day.
          </p>

          <div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4 opacity-0 animate-slide-in-left"
            style={{ animationDelay: "0.55s" }}
          >
            <Link
              to="/contact"
              className="rounded-lg bg-primary-foreground px-7 py-3.5 text-center text-base font-semibold text-primary shadow-lg transition hover:bg-primary-foreground/90"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:+12393653090"
              className="rounded-lg border border-primary-foreground/30 !bg-transparent px-7 py-3.5 text-center text-base font-semibold text-primary-foreground transition hover:bg-primary-foreground/10"
            >
              Call (239) 365-3090
            </a>
          </div>
        </div>

        <div className="hidden lg:flex lg:w-[35%] relative items-center justify-center bg-gradient-to-br from-[hsl(220,72%,13%)] to-[#E0F2FE]/30">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-80 h-80 rounded-full bg-[#E0F2FE] opacity-40 blur-3xl animate-glow-pulse" />
          </div>
          <img
            src={heroImg}
            alt="Trane CleanEffects whole-home air filtration system"
            width={800}
            height={600}
            fetchPriority="high"
            decoding="async"
            className="relative z-10 -ml-20 max-h-[440px] w-auto object-contain drop-shadow-2xl opacity-0 animate-fade-scale-in"
            style={{ animationDelay: "0.3s" }}
          />
        </div>
      </section>

      <TrustBar />

      {/* ── How It Works ── */}
      <section className="bg-[#E0F2FE] py-16 md:py-24 px-4">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to transform the air inside your home.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative">
          <div className="hidden md:block absolute top-14 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px border-t-2 border-dashed border-primary/30" />
          {processSteps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center relative z-10">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-heading font-bold text-lg shadow-lg mb-4">
                {i + 1}
              </div>
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-foreground shadow-md mb-4">
                <step.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-[260px]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Description + Benefits ── */}
      <section className="mx-auto max-w-4xl px-4 py-16">
        <p className="text-lg leading-relaxed text-muted-foreground">
          Florida's humidity and heat create ideal conditions for mold, bacteria,
          and allergens inside your home. AC Assurance offers a range of indoor
          air quality solutions — from UV germicidal lights and whole-home air
          purifiers to advanced filtration systems — designed to keep your family
          breathing clean, healthy air year-round.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-xl border border-[#E0F2FE] bg-secondary p-4 transition hover:shadow-md hover:border-primary/20"
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

      {/* Signs You Need IAQ Upgrades */}
      <section className="mx-auto max-w-4xl px-4 pb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">Signs Your Home Needs Air Quality Upgrades</h2>
        {signs.map((s, i) => (
          <p key={i} className="text-base leading-relaxed text-muted-foreground mb-4">{s}</p>
        ))}
      </section>

      {/* Local Concerns */}
      <section className="mx-auto max-w-4xl px-4 pb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">Indoor Air Quality in Southwest Florida</h2>
        {localContent.map((p, i) => (
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

      {/* ── Bottom CTA ── */}
      <section className="bg-primary py-12 px-4 text-center">
        <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl">
          Ready to Improve Your Air Quality?
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
            className="rounded-lg border border-primary-foreground/30 !bg-transparent px-6 py-3 text-base font-semibold text-primary-foreground transition hover:bg-primary-foreground/10"
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

export default IndoorAirQualityPage;
