import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { PHONE, PHONE_LINK, EMAIL, LICENSE, COMPANY } from "@/data/services";
import logo from "@/assets/ac-assurance-logo.png";
import bbbLogo from "@/assets/bbb-accredited.png";

const Footer = () => (
  <footer className="section-navy text-primary-foreground">
    <div className="container py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="AC Assurance Cooling and Heating" className="h-16 w-auto" />
          </div>
          <p className="text-sm opacity-80 mb-4">Professional HVAC services for Fort Myers, Cape Coral, and Southwest Florida. Licensed, reliable, and committed to your comfort.</p>
          <p className="text-xs opacity-60">License #{LICENSE}</p>
          <span className="text-xs opacity-80 mt-2 inline-block bg-primary-foreground/10 rounded-full px-3 py-1">
            Independent Trane Dealer | <span style={{ color: '#EF3C13' }}>It's Hard To Stop A Trane®</span>
          </span>
          <a href="https://www.bbb.org/us/fl/cape-coral/profile/air-conditioning-contractor/ac-assurance-cooling-and-heating-llc-0653-90454763" target="_blank" rel="noopener noreferrer" className="inline-flex flex-col items-center gap-1.5 mt-3">
            <div className="bg-white rounded-lg p-2.5 shadow-sm inline-flex">
              <img src={bbbLogo} alt="BBB Accredited Business" className="h-14 w-auto" />
            </div>
            <span className="text-sm font-semibold opacity-90">BBB Accredited Business</span>
          </a>
        </div>

        <div>
          <h3 className="font-heading font-bold text-sm mb-4 uppercase tracking-wider text-primary-foreground">Contact</h3>
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

        <div>
          <h3 className="font-heading font-bold text-sm mb-4 uppercase tracking-wider text-primary-foreground">Services</h3>
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

        <div>
          <h3 className="font-heading font-bold text-sm mb-4 uppercase tracking-wider text-primary-foreground">Service Areas</h3>
          <div className="space-y-2 text-sm">
            <Link to="/ac-repair-naples" className="block font-semibold opacity-100 hover:opacity-100 transition-opacity">Naples ★</Link>
            <Link to="/ac-repair-fort-myers" className="block opacity-80 hover:opacity-100 transition-opacity">Fort Myers</Link>
            <Link to="/ac-repair-cape-coral-fl" className="block opacity-80 hover:opacity-100 transition-opacity">Cape Coral</Link>
            <Link to="/ac-repair-bonita-springs" className="block opacity-80 hover:opacity-100 transition-opacity">Bonita Springs</Link>
            <Link to="/ac-repair-estero" className="block opacity-80 hover:opacity-100 transition-opacity">Estero</Link>
            <Link to="/ac-repair-lehigh-acres" className="block opacity-80 hover:opacity-100 transition-opacity">Lehigh Acres</Link>
            <Link to="/service-areas" className="block opacity-80 hover:opacity-100 transition-opacity">All Service Areas →</Link>
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-primary-foreground/10">
      <div className="container py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs opacity-60">
        <p>&copy; {new Date().getFullYear()} {COMPANY}. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <Link to="/privacy-policy" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
          <span>·</span>
          <span>Florida License: {LICENSE}</span>
          <span>·</span>
          <span>Independent Trane Dealer</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
