import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE, PHONE_LINK, LICENSE } from "@/data/services";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Trane Systems", to: "/trane-products" },
  { label: "Financing", to: "/financing" },
  { label: "Reviews", to: "/reviews" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Blog", to: "/blog" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`bg-primary border-b border-primary-foreground/10 sticky top-0 z-50 transition-shadow ${scrolled ? "shadow-md" : ""}`}>
      <div className="container flex items-center justify-between h-20 md:h-24">
        <Link to="/" className="flex items-center gap-2 shrink-0 -my-2">
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-lg px-3 py-2">
              <img src={logo} alt="AC Assurance Cooling & Heating Logo" className="h-14 md:h-16 w-auto" />
            </div>
            <span className="text-[10px] text-primary-foreground/50 mt-0.5 tracking-wide">LIC# {LICENSE}</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-white border-b-2 border-white"
                    : "text-primary-foreground/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/emergency-ac-repair" className="flex items-center gap-1.5 text-xs font-bold text-red-400 hover:text-red-300 transition-colors">
            <Phone className="w-3.5 h-3.5" />
            Emergency?
          </Link>
          <a href={PHONE_LINK} className="flex items-center gap-2 text-primary-foreground font-bold text-sm bg-white/10 rounded-full px-3 py-1.5">
            <Phone className="w-4 h-4" />
            {PHONE}
          </a>
          <Button asChild className="shimmer-btn bg-white text-primary hover:bg-white/90">
            <Link to="/contact#estimate-form">Get a Free Quote</Link>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 text-primary-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-primary-foreground/10 bg-primary">
          <nav className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-3 text-sm font-medium rounded transition-colors ${
                    isActive
                      ? "text-white bg-primary-foreground/10"
                      : "text-primary-foreground/80 hover:text-white hover:bg-primary-foreground/10"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-3 mt-2 border-t border-primary-foreground/10 flex flex-col gap-2">
              <Button asChild className="w-full shimmer-btn bg-white text-primary hover:bg-white/90">
                <Link to="/contact#estimate-form" onClick={() => setMenuOpen(false)}>Get a Free Quote</Link>
              </Button>
              <Button asChild variant="outline" className="w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <a href={PHONE_LINK} className="bg-accent-foreground">
                  <Phone className="w-4 h-4 mr-2" />
                  Call {PHONE}
                </a>
              </Button>
            </div>
            <div className="pt-3 mt-2 border-t border-primary-foreground/10">
              <p className="text-[11px] text-primary-foreground/40 text-center">
                Licensed {LICENSE} · BBB Accredited · Independent Trane Dealer
              </p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
