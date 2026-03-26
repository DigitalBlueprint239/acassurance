import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import TrustBar from "@/components/TrustBar";
import heroImg from "@/assets/trane-iaq-filter.png";

const benefits = [
  "UV germicidal light installation",
  "Whole-home air purifier systems",
  "Advanced filtration upgrades (HEPA, MERV-rated)",
  "Humidity control solutions",
  "Air quality assessment and recommendations",
  "Compatible with all major HVAC systems",
];

const IndoorAirQualityPage = () => (
  <Layout>
    <SEOHead
      title="Indoor Air Quality Solutions | AC Assurance Cooling & Heating"
      description="Improve your home's indoor air quality with UV lights, air purifiers, and filtration upgrades. Serving Southwest Florida. Call (239) 365-3090."
    />
    <main>
      {/* ── Split-Panel Hero ── */}
      <section className="flex flex-col lg:flex-row min-h-[500px] lg:min-h-[560px]">
        {/* Mobile: image on top */}
        <div className="lg:hidden bg-[#3a3f47] flex items-center justify-center px-6 py-8">
          <img
            src={heroImg}
            alt="Trane CleanEffects whole-home air filtration system"
            width={400}
            height={300}
            fetchPriority="high"
            decoding="async"
            className="max-h-[280px] w-auto object-contain drop-shadow-xl"
          />
        </div>

        {/* Text panel */}
        <div className="flex flex-col justify-center px-6 py-12 sm:px-10 lg:w-[60%] lg:px-16 lg:py-20 bg-gradient-to-br from-primary to-[hsl(220,72%,20%)] relative overflow-hidden">
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary-foreground/5 blur-3xl pointer-events-none" />

          <span className="mb-3 inline-block w-fit rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground/80">
            Expert IAQ Solutions
          </span>

          <h1 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
            Indoor Air Quality Solutions
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            Breathe cleaner, healthier air with professional air quality upgrades for your home.
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
              className="rounded-lg border border-primary-foreground/30 !bg-transparent px-6 py-3 text-center text-base font-semibold text-primary-foreground transition hover:bg-primary-foreground/10"
            >
              Call (239) 365-3090
            </a>
          </div>
        </div>

        {/* Image panel — desktop only */}
        <div className="hidden lg:flex lg:w-[40%] items-center justify-center bg-[#3a3f47] p-10">
          <img
            src={heroImg}
            alt="Trane CleanEffects whole-home air filtration system"
            width={800}
            height={600}
            fetchPriority="high"
            decoding="async"
            className="max-h-[420px] w-auto object-contain drop-shadow-2xl"
          />
        </div>
      </section>

      <TrustBar />

      {/* Description + Benefits */}
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

      {/* Bottom CTA */}
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
      </section>
    </main>
  </Layout>
);

export default IndoorAirQualityPage;
