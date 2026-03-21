import { Phone, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE, PHONE_LINK } from "@/data/services";
import { useNavigate } from "react-router-dom";

const EmergencyCallout = () => {
  const navigate = useNavigate();

  const handleService = () => {
    const el = document.getElementById("estimate-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/contact");
    }
  };

  return (
    <section className="section-navy py-14 md:py-20">
      <div className="container text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-4">
          AC Not Cooling?
        </h2>
        <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">
          Fast diagnostic service available across Southwest Florida. Don't wait in the heat — get help now.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="shimmer-btn bg-white text-primary hover:bg-white/90">
            <a href={PHONE_LINK}>
              <Phone className="w-5 h-5 mr-2" />
              Call Now — {PHONE}
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            onClick={handleService}
          >
            <FileText className="w-5 h-5 mr-2" />
            Request Service
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EmergencyCallout;
