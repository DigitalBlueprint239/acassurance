import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import TrustBar from "@/components/TrustBar";
import heroImg from "@/assets/commercial-unit.jpg";
import { ShieldCheck, Zap, ClipboardCheck } from "lucide-react";
import { buildServiceSchema } from "@/lib/seoSchemas";

const benefits = [
  "Walk-in cooler and freezer repair",
  "Reach-in refrigeration unit service",
  "Ice machine repair and maintenance",
  "Preventive maintenance programs",
  "Fast response to minimize product loss",
  "Serving restaurants, stores, and commercial facilities",
];

const stakes = [
  {
    icon: ShieldCheck,
    title: "Inventory Protection",
    desc: "We keep your stock at the perfect temp to prevent costly loss.",
  },
  {
    icon: Zap,
    title: "Energy Efficiency",
    desc: "Lowering overhead with precision-tuned compressors and controls.",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance Ready",
    desc: "Meeting all health and safety cooling standards for your business.",
  },
];

const CommercialRefrigPage = () => (
  <Layout>
    <SEOHead
      title="Commercial Refrigeration Services | AC Assurance Cooling & Heating"
      description="Commercial refrigeration repair and maintenance in Southwest Florida. Walk-in coolers, reach-in units, ice machines. Call (239) 365-3090."
      schema={[
        buildServiceSchema("Commercial Refrigeration", "Reliable commercial refrigeration repair and maintenance for restaurants, stores, and businesses across Southwest Florida.", "commercial-refrigeration"),
      ]}
    />

    {/* ─── HERO ─── */}
    <section className="relative overflow-hidden bg-brand-navy-deep">
      <div className="flex flex-col lg:flex-row min-h-[520px] lg:min-h-[560px]">
        {/* Left — 65 % text panel */}
        <div
          className="relative z-10 flex flex-col justify-center px-6 py-16 sm:px-10 lg:w-[65%] lg:py-20 lg:pl-[max(2rem,calc((100vw-1200px)/2+1rem))] lg:pr-16"
          style={{
            background:
              "linear-gradient(135deg, hsl(222 78% 10%) 0%, hsl(220 72% 15%) 100%)",
          }}
        >
          {/* Glassmorphism trust pill */}
          <div
            className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs font-medium tracking-wide text-white/90 backdrop-blur-md animate-fade-in"
            style={{ background: "rgba(255,255,255,0.08)" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            24/7 Priority Response · Licensed &amp; Bonded
          </div>

          {/* Two-tone headline */}
          <h1
            className="font-heading leading-[1.1] animate-slide-in-left"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="block text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Zero Downtime.
            </span>
            <span className="mt-1 block text-3xl font-light tracking-tight text-white/70 sm:text-4xl lg:text-5xl">
              Commercial Cooling Guaranteed.
            </span>
          </h1>

          <p
            className="mt-5 max-w-lg text-base leading-relaxed text-white/70 animate-slide-in-left"
            style={{ animationDelay: "0.25s" }}
          >
            Protect your inventory, your reputation, and your bottom line with
            expert commercial refrigeration service across Southwest Florida.
          </p>

          {/* CTAs */}
          <div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4 animate-slide-in-left"
            style={{ animationDelay: "0.4s" }}
          >
            <Link
              to="/contact"
              className="rounded-lg bg-white px-6 py-3 text-center text-base font-semibold text-brand-navy shadow-lg transition hover:bg-white/90"
            >
              Request Priority Service
            </Link>
            <a
              href="tel:+12393653090"
              className="rounded-lg border border-white/25 px-6 py-3 text-center text-base font-semibold text-white transition hover:bg-white/10"
            >
              Call (239) 365-3090
            </a>
          </div>
        </div>

        {/* Right — 35 % image panel */}
        <div
          className="relative flex items-center justify-center lg:w-[35%] overflow-visible"
          style={{
            background:
              "linear-gradient(135deg, hsl(220 72% 15%) 0%, #F8FAFC 100%)",
          }}
        >
          {/* Blue glow aura */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full animate-glow-pulse"
            style={{
              background:
                "radial-gradient(circle, hsl(210 100% 60% / 0.35) 0%, transparent 70%)",
            }}
          />

          {/* Unit image — overlaps left panel */}
          <img
            src={heroImg}
            alt="Trane commercial rooftop refrigeration unit serviced by AC Assurance"
            width={720}
            height={540}
            fetchPriority="high"
            className="relative z-10 w-full max-w-md lg:max-w-none lg:-ml-16 object-contain drop-shadow-2xl animate-fade-scale-in"
          />
        </div>
      </div>
    </section>

    <TrustBar />

    {/* ─── WHAT'S AT STAKE ─── */}
    <section className="py-16 md:py-24" style={{ background: "#F8FAFC" }}>
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          What's at Stake for Your Business
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
          Commercial refrigeration failure isn't an inconvenience — it's a
          direct threat to your revenue, inventory, and compliance.
        </p>

        <div className="relative mt-14 grid gap-10 sm:grid-cols-3">
          {/* Dashed connecting line (desktop) */}
          <div className="absolute top-10 left-[16.66%] right-[16.66%] hidden border-t-2 border-dashed border-brand-gray sm:block" />

          {stakes.map((s, i) => (
            <div
              key={s.title}
              className="relative flex flex-col items-center text-center animate-fade-in"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-brand-navy text-white shadow-lg">
                <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-bold text-brand-navy shadow">
                  {i + 1}
                </span>
                <s.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ─── DESCRIPTION + BENEFITS ─── */}
    <section className="mx-auto max-w-4xl px-4 py-16">
      <p className="text-lg leading-relaxed text-muted-foreground">
        AC Assurance provides reliable commercial refrigeration services for
        restaurants, stores, and businesses across Southwest Florida. From
        walk-in coolers and freezers to reach-in units and ice machines, our
        licensed technicians keep your critical equipment running efficiently to
        protect your inventory and your bottom line.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {benefits.map((b, i) => (
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-sm font-medium text-foreground">{b}</span>
          </div>
        ))}
      </div>
    </section>

    {/* ─── BOTTOM CTA ─── */}
    <section className="bg-primary py-12 px-4 text-center">
      <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl">
        Protect Your Business Today
      </h2>
      <p className="mt-2 text-primary-foreground/80">
        Serving Naples, Fort Myers, Cape Coral and all of Southwest Florida.
      </p>
      <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
        <Link
          to="/contact"
          className="rounded-lg bg-white px-6 py-3 text-base font-semibold text-primary shadow transition hover:bg-secondary"
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
    </section>
  </Layout>
);

export default CommercialRefrigPage;
