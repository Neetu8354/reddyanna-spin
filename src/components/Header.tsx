import logo from "@/assets/logo.png";
import { WHATSAPP_LINK } from "@/lib/links";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Cricket", href: "#cricket" },
  { label: "Casino", href: "#casino" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-gold/20">
      <div className="container flex items-center justify-between py-2.5 sm:py-3 gap-2">
        <a href="#home" className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="Mahadev Book Logo" className="h-9 sm:h-12 md:h-14 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-foreground/90 hover:text-gold transition-colors">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
            className="px-5 py-2 rounded-full text-sm font-semibold border border-gold/50 text-gold hover:bg-gold hover:text-primary-foreground transition-colors">
            Login
          </a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
            className="px-5 py-2 rounded-full text-sm font-bold bg-gradient-gold text-primary-foreground shadow-gold hover:shadow-gold-lg transition-all">
            Sign Up
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-full text-xs font-semibold border border-gold/50 text-gold whitespace-nowrap">
            Login
          </a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-full text-xs font-bold bg-gradient-gold text-primary-foreground shadow-gold whitespace-nowrap">
            Sign Up
          </a>
        </div>

        <button className="lg:hidden text-gold p-1.5 -mr-1" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-gold/20 bg-background/95 px-6 py-4 space-y-3">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block py-2 text-foreground/90 hover:text-gold">
              {n.label}
            </a>
          ))}
          <div className="flex gap-2 pt-2">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
              className="flex-1 text-center px-5 py-2.5 rounded-full font-semibold border border-gold/50 text-gold">
              Login
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
              className="flex-1 text-center px-5 py-2.5 rounded-full font-bold bg-gradient-gold text-primary-foreground">
              Sign Up
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
