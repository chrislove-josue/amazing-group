import { useState } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import { NAV_LINKS } from "../data/navLinks";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-[#1C355E]/10 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="flex items-center gap-2 font-bold text-lg md:text-xl text-[#1C355E]">
            <span>AMAZING GROUP</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-[#F15A29] transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <button aria-label="menu" onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg border border-[#1C355E]/20">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#1C355E]/10 bg-white">
          <div className="px-4 py-4 grid gap-4 text-sm">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-1">
                {l.label}
              </a>
            ))}
          
          </div>
        </div>
      )}
    </header>
  );
}
