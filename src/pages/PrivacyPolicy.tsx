import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { EMAIL, PHONE } from "@/data/services";

const PrivacyPolicy = () => (
  <Layout>
    <SEOHead
      title="Privacy Policy | AC Assurance Cooling & Heating"
      description="Privacy policy for AC Assurance Cooling & Heating. Learn how we collect, use, and protect your information."
    />
    <section className="section-navy py-12 md:py-16">
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">Privacy Policy</h1>
        <p className="text-primary-foreground/90 text-lg max-w-2xl">
          Your privacy is important to us. This policy outlines how AC Assurance Cooling & Heating handles your information.
        </p>
      </div>
    </section>

    <section className="py-12 md:py-16">
      <div className="container max-w-3xl prose prose-slate">
        <p className="text-sm text-muted-foreground mb-8">Last updated: March 1, 2026</p>

        <h2 className="text-xl font-heading font-bold mb-3">Information We Collect</h2>
        <p className="text-foreground leading-relaxed mb-4">
          When you contact us through our website, by phone, or by email, we may collect personal information including your name, phone number, email address, home address, and details about your HVAC service needs. We also collect standard website usage data such as IP addresses, browser type, and pages visited through cookies and analytics tools.
        </p>

        <h2 className="text-xl font-heading font-bold mb-3 mt-8">How We Use Your Information</h2>
        <p className="text-foreground leading-relaxed mb-4">
          We use the information we collect to respond to your service inquiries, schedule appointments, provide HVAC services, send appointment reminders and follow-up communications, process payments and financing applications, and improve our website and services. We do not sell your personal information to third parties.
        </p>

        <h2 className="text-xl font-heading font-bold mb-3 mt-8">Information Sharing</h2>
        <p className="text-foreground leading-relaxed mb-4">
          We may share your information with trusted third-party service providers who assist us in operating our business, including our financing partner Synchrony Financial (only when you apply for financing), payment processors, and website hosting and analytics providers. These parties are obligated to keep your information confidential.
        </p>

        <h2 className="text-xl font-heading font-bold mb-3 mt-8">Data Security</h2>
        <p className="text-foreground leading-relaxed mb-4">
          We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. Our website uses SSL encryption for data transmission. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-xl font-heading font-bold mb-3 mt-8">Your Rights</h2>
        <p className="text-foreground leading-relaxed mb-4">
          You may request access to, correction of, or deletion of your personal information at any time by contacting us. You may also opt out of marketing communications by following the unsubscribe instructions in any email we send.
        </p>

        <h2 className="text-xl font-heading font-bold mb-3 mt-8">Contact Us</h2>
        <p className="text-foreground leading-relaxed">
          If you have questions about this privacy policy or your personal data, contact us at{" "}
          <a href={`mailto:${EMAIL}`} className="text-accent hover:underline">{EMAIL}</a> or call{" "}
          <span className="font-semibold">{PHONE}</span>.
        </p>
      </div>
    </section>
  </Layout>
);

export default PrivacyPolicy;
