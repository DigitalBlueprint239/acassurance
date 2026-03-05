import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { PHONE, PHONE_LINK } from "@/data/services";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="section-navy py-12 md:py-16">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">Page Not Found</h1>
          <p className="text-primary-foreground/90 text-lg">The page you're looking for doesn't exist or has been moved.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container text-center max-w-lg">
          <p className="text-6xl font-heading font-extrabold text-muted-foreground/30 mb-6">404</p>
          <p className="text-foreground mb-8">
            Let's get you back on track. You can return to our homepage or give us a call.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/">Back to Home</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={PHONE_LINK}>
                <Phone className="w-4 h-4 mr-2" />
                Call {PHONE}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
