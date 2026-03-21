import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE, PHONE_LINK } from "@/data/services";
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`bg-primary border-b border-primary-foreground/10 sticky top-0 z-50 transition-shadow ${scrolled ? "shadow-md" : ""}`}>
      <div className="container flex items-center justify-between h-20 md:h-24">
        <Link to="/" className="flex items-center gap-2 shrink-0 -my-2">
          <div className="bg-white rounded-md px-2 py-1">
            <img src={logo} alt="AC Assurance Cooling & Heating" className="h-12 md:h-14 w-auto" />
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="px-3 py-2 text-sm font-medium text-primary-foreground/80 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href={PHONE_LINK} className="flex items-center gap-2 text-primary-foreground font-bold text-sm">
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
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium text-primary-foreground/80 hover:text-white hover:bg-primary-foreground/10 rounded transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 mt-2 border-t border-primary-foreground/10 flex flex-col gap-2">
              <Button asChild className="w-full shimmer-btn bg-white text-primary hover:bg-white/90">
                <Link to="/contact#estimate-form" onClick={() => setMenuOpen(false)}>Get a Free Quote</Link>
              </Button>
              <Button asChild variant="outline" className="w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <a href={PHONE_LINK}>
                  <Phone className="w-4 h-4 mr-2" />
                  Call {PHONE}
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
