import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://www.acassurancefl.com";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AC Assurance Cooling & Heating",
  "url": BASE_URL,
  "logo": `${BASE_URL}/og-logo.png`,
  "telephone": "+1-239-365-3090",
  "email": "Jason@acassurancefl.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Fort Myers",
    "addressRegion": "FL",
    "addressCountry": "US"
  },
  "sameAs": []
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "AC Assurance Cooling & Heating",
  "url": BASE_URL,
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${BASE_URL}/?s={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
};

interface SEOHeadProps {
  title: string;
  description: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
  ogImage?: string;
  noindex?: boolean;
}

const SEOHead = ({ title, description, schema, ogImage, noindex }: SEOHeadProps) => {
  const { pathname } = useLocation();
  const cleanPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  const canonicalUrl = BASE_URL + cleanPath;
  const image = ogImage || `${BASE_URL}/og-logo.png`;

  // Merge page-specific schemas with site-wide Organization + WebSite
  const allSchemas: Record<string, unknown>[] = [organizationSchema, websiteSchema];
  if (schema) {
    const pageSchemas = Array.isArray(schema) ? schema : [schema];
    allSchemas.push(...pageSchemas);
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
      <meta property="og:image:alt" content="AC Assurance Cooling & Heating Logo" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(allSchemas)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
