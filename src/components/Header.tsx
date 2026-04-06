import { useState } from "react";
import { Menu, X, Bus } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-primary-light/20">
      <div className="container flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-2 text-primary-foreground">
          <Bus className="h-7 w-7 text-gold" />
          <span className="font-heading text-lg">Graspshare</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-primary-foreground/80 hover:text-gold transition-colors">
              {l.label}
            </a>
          ))}
          <Button asChild className="bg-gold text-accent-foreground hover:bg-[hsl(var(--gold-light))]">
            <a href="#contact">Get a Quote</a>
          </Button>
        </nav>

        <button className="md:hidden text-primary-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="md:hidden bg-navy border-t border-primary-light/20 pb-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block px-6 py-3 text-primary-foreground/80 hover:text-gold transition-colors">
              {l.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <Button asChild className="w-full bg-gold text-accent-foreground hover:bg-[hsl(var(--gold-light))]">
              <a href="#contact" onClick={() => setMobileOpen(false)}>Get a Quote</a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
