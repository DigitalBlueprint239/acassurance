import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { PHONE, PHONE_LINK, EMAIL, LICENSE, COMPANY, serviceAreas } from "@/data/services";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {/* Company */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-full brand-gradient flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-extrabold text-lg">AC</span>
            </div>
            <div>
              <div className="font-heading font-bold text-sm">AC Assurance</div>
              <div className="text-xs opacity-70">Cooling &amp; Heating</div>
            </div>
          </div>
          <p className="text-sm opacity-80 mb-4">Professional HVAC services for Cape Coral and Southwest Florida. Licensed, reliable, and committed to your comfort.</p>
          <p className="text-xs opacity-60">License #{LICENSE}</p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-heading font-bold text-sm mb-4 uppercase tracking-wider">Contact</h3>
          <div className="space-y-3 text-sm">
            <a href={PHONE_LINK} className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
              <Phone className="w-4 h-4 shrink-0" /> {PHONE}
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
              <Mail className="w-4 h-4 shrink-0" /> {EMAIL}
            </a>
            <div className="flex items-start gap-2 opacity-80">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
              <span>Cape Coral, FL</span>
            </div>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-heading font-bold text-sm mb-4 uppercase tracking-wider">Services</h3>
          <div className="space-y-2 text-sm">
            <Link to="/ac-repair-cape-coral" className="block opacity-80 hover:opacity-100 transition-opacity">AC Repair</Link>
            <Link to="/ac-installation-replacement" className="block opacity-80 hover:opacity-100 transition-opacity">AC Installation</Link>
            <Link to="/ac-maintenance-tune-up" className="block opacity-80 hover:opacity-100 transition-opacity">Maintenance</Link>
            <Link to="/emergency-ac-repair" className="block opacity-80 hover:opacity-100 transition-opacity">Emergency Repair</Link>
            <Link to="/ductless-mini-split" className="block opacity-80 hover:opacity-100 transition-opacity">Ductless Mini-Splits</Link>
            <Link to="/indoor-air-quality" className="block opacity-80 hover:opacity-100 transition-opacity">Indoor Air Quality</Link>
          </div>
        </div>

        {/* Service Areas */}
        <div>
          <h3 className="font-heading font-bold text-sm mb-4 uppercase tracking-wider">Service Areas</h3>
          <div className="space-y-2 text-sm">
            {serviceAreas.map((area) => (
              <div key={area.name} className={`opacity-80 ${area.primary ? "font-semibold opacity-100" : ""}`}>
                {area.name}{area.primary ? " (Primary)" : ""}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-background/10">
      <div className="container py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs opacity-60">
        <p>&copy; {new Date().getFullYear()} {COMPANY}. All rights reserved.</p>
        <p>Serving Cape Coral &amp; Southwest Florida</p>
      </div>
    </div>
  </footer>
);

export default Footer;
