import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { PHONE, PHONE_LINK, EMAIL, LICENSE, COMPANY, serviceAreas } from "@/data/services";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="section-navy text-primary-foreground">
    <div className="container py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {/* Company */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="AC Assurance" className="h-10 w-auto brightness-0 invert" />
          </div>
          <p className="text-sm opacity-80 mb-4">Professional HVAC services for Fort Myers, Cape Coral, and Southwest Florida. Licensed, reliable, and committed to your comfort.</p>
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
              <span>Fort Myers & Cape Coral, FL</span>
            </div>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-heading font-bold text-sm mb-4 uppercase tracking-wider">Services</h3>
          <div className="space-y-2 text-sm">
            <Link to="/ac-repair-cape-coral" className="block opacity-80 hover:opacity-100 transition-opacity">AC Repair</Link>
            <Link to="/ac-installation-replacement" className="block opacity-80 hover:opacity-100 transition-opacity">AC Installation</Link>
            <Link to="/heating-services" className="block opacity-80 hover:opacity-100 transition-opacity">Heating Services</Link>
            <Link to="/ductless-mini-split" className="block opacity-80 hover:opacity-100 transition-opacity">Mini Split Systems</Link>
            <Link to="/duct-cleaning" className="block opacity-80 hover:opacity-100 transition-opacity">Duct Cleaning</Link>
            <Link to="/indoor-air-quality" className="block opacity-80 hover:opacity-100 transition-opacity">Indoor Air Quality</Link>
            <Link to="/commercial-refrigeration" className="block opacity-80 hover:opacity-100 transition-opacity">Commercial Refrigeration</Link>
            <Link to="/emergency-ac-repair" className="block opacity-80 hover:opacity-100 transition-opacity">Emergency Service</Link>
          </div>
        </div>

        {/* Service Areas */}
        <div>
          <h3 className="font-heading font-bold text-sm mb-4 uppercase tracking-wider">Service Areas</h3>
          <div className="space-y-2 text-sm">
            {serviceAreas.map((area) => (
              <div key={area.name} className={`opacity-80 ${area.primary ? "font-semibold opacity-100" : ""}`}>
                {area.name}{area.primary ? " ★" : ""}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-primary-foreground/10">
      <div className="container py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs opacity-60">
        <p>&copy; {new Date().getFullYear()} {COMPANY}. All rights reserved.</p>
        <p>Serving Fort Myers, Cape Coral &amp; Southwest Florida</p>
      </div>
    </div>
  </footer>
);

export default Footer;
