import { Link } from 'react-router-dom';
import TrustBar from './TrustBar';

interface ServicePageShellProps {
  title: string;
  subtitle: string;
  heroImage: string;
  heroAlt: string;
  description: string;
  benefits: string[];
  ctaText?: string;
}

export default function ServicePageShell({
  title,
  subtitle,
  heroImage,
  heroAlt,
  description,
  benefits,
  ctaText = 'Get a Free Quote',
}: ServicePageShellProps) {
  return (
    <main>
      <section className="relative h-[50vh] min-h-[320px] overflow-hidden bg-gray-900">
        <img
          src={heroImage}
          alt={heroAlt}
          width={1920}
          height={1080}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">{title}</h1>
          <p className="mt-4 max-w-xl text-lg text-gray-200">{subtitle}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link
              to="/contact"
              className="rounded-lg bg-teal-500 px-6 py-3 text-base font-semibold text-white shadow transition hover:bg-teal-600"
            >
              {ctaText}
            </Link>
            <a
              href="tel:+12393653090"
              className="rounded-lg border border-white px-6 py-3 text-base font-semibold text-white transition hover:bg-white hover:text-gray-900"
            >
              Call (239) 365-3090
            </a>
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="mx-auto max-w-4xl px-4 py-16">
        <p className="text-lg leading-relaxed text-gray-700">{description}</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4">
              <svg
                className="mt-0.5 h-5 w-5 shrink-0 text-teal-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm font-medium text-gray-800">{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-teal-600 py-12 px-4 text-center">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Ready to Schedule Service?</h2>
        <p className="mt-2 text-teal-100">Serving Naples, Fort Myers, Cape Coral and all of Southwest Florida.</p>
        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <Link
            to="/contact"
            className="rounded-lg bg-white px-6 py-3 text-base font-semibold text-teal-700 shadow transition hover:bg-gray-100"
          >
            Request Service Online
          </Link>
          <a
            href="tel:+12393653090"
            className="rounded-lg border border-white px-6 py-3 text-base font-semibold text-white transition hover:bg-teal-700"
          >
            Call Now — (239) 365-3090
          </a>
        </div>
      </section>
    </main>
  );
}
