import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://www.acassurancefl.com";

interface SEOHeadProps {
  title: string;
  description: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
}

const SEOHead = ({ title, description, schema }: SEOHeadProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, attr: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);

    // Dynamic canonical
    const cleanPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
    const canonicalUrl = BASE_URL + cleanPath;

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonicalUrl);

    // JSON-LD schema injection
    const SCHEMA_ID = "seohead-jsonld";
    let scriptEl = document.getElementById(SCHEMA_ID) as HTMLScriptElement | null;
    if (schema) {
      const schemas = Array.isArray(schema) ? schema : [schema];
      const jsonStr = JSON.stringify(schemas.length === 1 ? schemas[0] : schemas);
      if (!scriptEl) {
        scriptEl = document.createElement("script");
        scriptEl.id = SCHEMA_ID;
        scriptEl.type = "application/ld+json";
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = jsonStr;
    } else if (scriptEl) {
      scriptEl.remove();
    }
  }, [title, description, pathname, schema]);

  return null;
};

export default SEOHead;
