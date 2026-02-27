import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE, PHONE_LINK } from "@/data/services";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Financing", to: "/financing" },
  { label: "Service Areas", to: "/service-areas" },
  { label: "Reviews", to: "/reviews" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full brand-gradient flex items-center justify-center">
            <span className="text-primary-foreground font-heading font-extrabold text-lg md:text-xl">AC</span>
          </div>
          <div className="hidden sm:block">
            <div className="font-heading font-bold text-sm md:text-base leading-tight text-foreground">AC Assurance</div>
            <div className="text-xs text-muted-foreground leading-tight">Cooling &amp; Heating</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href={PHONE_LINK} className="flex items-center gap-2 text-primary font-bold text-sm">
            <Phone className="w-4 h-4" />
            {PHONE}
          </a>
          <Button asChild>
            <a href={PHONE_LINK}>Call Now</a>
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium text-foreground hover:bg-muted rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 mt-2 border-t border-border flex flex-col gap-2">
              <Button asChild className="w-full">
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
