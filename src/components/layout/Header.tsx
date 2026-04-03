import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, PhoneCall } from "lucide-react";
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
    <header className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-shadow ${scrolled ? "shadow-md" : ""}`}>
      <div className="container flex items-center justify-between h-20 md:h-24">
        <Link to="/" className="flex items-center gap-2 shrink-0 -my-2">
          <div className="flex flex-col items-center">
            <img src={logo} alt="AC Assurance Cooling & Heating Logo" className="h-14 md:h-16 w-auto" />
            <span className="text-[10px] text-muted-foreground mt-0.5 tracking-wide">LIC# {LICENSE}</span>
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
                    ? "text-foreground border-b-2 border-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/emergency-ac-repair" className="hidden md:flex items-center gap-1.5 text-xs font-bold text-destructive hover:text-destructive/80 transition-colors">
            Emergency?
          </Link>
          <Button asChild variant="destructive" size="lg" className="hidden md:inline-flex transition-transform hover:scale-105 shadow-md hover:shadow-lg">
            <a href={PHONE_LINK}>
              <PhoneCall className="mr-2 h-4 w-4 animate-pulse" />
              {PHONE}
            </a>
          </Button>
          <Button asChild variant="destructive" size="sm" className="md:hidden transition-transform hover:scale-105 shadow-md hover:shadow-lg">
            <a href={PHONE_LINK}>
              <PhoneCall className="mr-1 h-3.5 w-3.5 animate-pulse" />
              Call
            </a>
          </Button>
          <Button asChild className="hidden md:inline-flex shimmer-btn bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to="/contact#estimate-form">Get a Free Quote</Link>
          </Button>
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t bg-background">
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
                      ? "text-foreground bg-muted"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-3 mt-2 border-t flex flex-col gap-2">
              <Button asChild className="w-full shimmer-btn bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/contact#estimate-form" onClick={() => setMenuOpen(false)}>Get a Free Quote</Link>
              </Button>
            </div>
            <div className="pt-3 mt-2 border-t">
              <p className="text-[11px] text-muted-foreground text-center">
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
