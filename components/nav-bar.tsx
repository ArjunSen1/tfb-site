"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "The Problem", href: "#problem" },
  { label: "The Approach", href: "#approach" },
  { label: "The Book", href: "#book" },
  { label: "Work With Us", href: "#services" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[#0C0A09]/96 backdrop-blur-lg border-b border-[#28231A]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-baseline gap-3 group">
          <span className="font-display text-[#F5EDD7] text-xl tracking-wide font-light italic">
            The Feeling Business®
          </span>
          <span className="label text-[0.55rem] text-[#DAA63C]/70 group-hover:text-[#DAA63C] transition-colors hidden sm:inline">
            Est. 1994
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[#7A6D52] hover:text-[#DDD3BC] text-xs tracking-[0.14em] uppercase transition-colors font-sans"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://book.zenmango.com/branddiagnostic"
            className="ml-2 bg-[#DAA63C] text-[#0C0A09] px-6 py-2.5 text-[0.65rem] font-semibold tracking-[0.18em] uppercase hover:bg-[#EAC76A] transition-colors"
          >
            Begin Discovery
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#DDD3BC] hover:text-[#DAA63C] transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0C0A09] border-t border-[#28231A] px-6 py-6 space-y-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-[#DDD3BC] text-sm tracking-widest uppercase py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://book.zenmango.com/branddiagnostic"
            className="block mt-4 bg-[#DAA63C] text-[#0C0A09] text-center px-6 py-3 text-xs font-semibold tracking-[0.18em] uppercase"
          >
            Begin Discovery
          </a>
        </div>
      )}
    </nav>
  );
}
