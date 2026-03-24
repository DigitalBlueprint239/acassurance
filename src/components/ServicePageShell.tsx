import { Link } from 'react-router-dom';
import TrustBar from './TrustBar';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceContentSection {
  heading: string;
  content: string | string[];
}

interface ServicePageShellProps {
  title: string;
  subtitle: string;
  heroImage: string;
  heroAlt: string;
  description: string;
  benefits: string[];
  ctaText?: string;
  faqs?: FAQ[];
  signsYouNeed?: ServiceContentSection;
  ourProcess?: { heading: string; steps: string[] };
  localConcerns?: ServiceContentSection;
}

export default function ServicePageShell({
  title,
  subtitle,
  heroImage,
  heroAlt,
  description,
  benefits,
  ctaText = 'Get a Free Quote',
  faqs,
  signsYouNeed,
  ourProcess,
  localConcerns,
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
              className="rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white shadow transition hover:bg-primary/90"
            >
              {ctaText}
            </Link>
            <a
              href="tel:+12393653090"
              className="rounded-lg border border-primary-foreground/30 px-6 py-3 text-base font-semibold text-primary-foreground transition hover:bg-primary-foreground/10"
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
                className="mt-0.5 h-5 w-5 shrink-0 text-primary"
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

      {/* Signs You Need This Service */}
      {signsYouNeed && (
        <section className="mx-auto max-w-4xl px-4 pb-12">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">{signsYouNeed.heading}</h2>
          {Array.isArray(signsYouNeed.content) ? (
            signsYouNeed.content.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-gray-700 mb-4">{p}</p>
            ))
          ) : (
            <p className="text-base leading-relaxed text-gray-700">{signsYouNeed.content}</p>
          )}
        </section>
      )}

      {/* Our Process */}
      {ourProcess && (
        <section className="mx-auto max-w-4xl px-4 pb-12">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">{ourProcess.heading}</h2>
          <ol className="space-y-4">
            {ourProcess.steps.map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full section-navy flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-primary-foreground font-bold text-sm">{i + 1}</span>
                </span>
                <span className="text-base text-gray-700 leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* Local Concerns */}
      {localConcerns && (
        <section className="mx-auto max-w-4xl px-4 pb-12">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">{localConcerns.heading}</h2>
          {Array.isArray(localConcerns.content) ? (
            localConcerns.content.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-gray-700 mb-4">{p}</p>
            ))
          ) : (
            <p className="text-base leading-relaxed text-gray-700">{localConcerns.content}</p>
          )}
        </section>
      )}

      {faqs && faqs.length > 0 && (
        <section className="mx-auto max-w-4xl px-4 pb-16">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Frequently Asked Questions</h2>
          <Accordion type="multiple" defaultValue={faqs.map((_, i) => `faq-${i}`)} className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-base font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-sm text-gray-600 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      )}

      <section className="bg-primary py-12 px-4 text-center">
        <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl">Ready to Schedule Service?</h2>
        <p className="mt-2 text-primary-foreground/80">Serving Naples, Fort Myers, Cape Coral and all of Southwest Florida.</p>
        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <Link
            to="/contact"
            className="rounded-lg bg-white px-6 py-3 text-base font-semibold text-primary shadow transition hover:bg-gray-100"
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
    </main>
  );
}
