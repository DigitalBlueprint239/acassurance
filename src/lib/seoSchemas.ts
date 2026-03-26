// Shared SEO schema builders for service pages

const BASE_URL = "https://www.acassurancefl.com";
const AREAS_SERVED = ["Naples", "Fort Myers", "Cape Coral", "Bonita Springs", "Estero", "Lehigh Acres", "North Fort Myers"];

export function buildServiceSchema(name: string, description: string, slug: string): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "url": `${BASE_URL}/${slug}`,
    "provider": {
      "@type": "HVACBusiness",
      "name": "AC Assurance Cooling & Heating",
      "telephone": "+1-239-365-3090",
      "url": BASE_URL,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Fort Myers",
        "addressRegion": "FL",
        "addressCountry": "US"
      }
    },
    "areaServed": AREAS_SERVED.map(city => ({
      "@type": "City",
      "name": city
    })),
    "serviceType": "HVAC"
  };
}

export function buildFAQSchema(faqs: { question: string; answer: string }[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function buildHVACBusinessSchema(city: string): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "name": "AC Assurance Cooling & Heating",
    "telephone": "+1-239-365-3090",
    "email": "Jason@acassurancefl.com",
    "url": BASE_URL,
    "priceRange": "$$",
    "openingHours": "Mo-Su 00:00-23:59",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": "FL",
      "addressCountry": "US"
    },
    "areaServed": city
  };
}
