import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE, PHONE_LINK } from "@/data/services";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Financing", to: "/financing" },
  { label: "Reviews", to: "/reviews" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Blog", to: "/blog" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="AC Assurance Cooling & Heating" className="h-14 md:h-16 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="px-3 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href={PHONE_LINK} className="flex items-center gap-2 text-primary font-bold text-sm">
            <Phone className="w-4 h-4" />
            {PHONE}
          </a>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/contact#estimate-form">Get a Free Quote</Link>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium text-foreground hover:bg-muted rounded transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 mt-2 border-t border-border flex flex-col gap-2">
              <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/contact#estimate-form" onClick={() => setMenuOpen(false)}>Get a Free Quote</Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
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
