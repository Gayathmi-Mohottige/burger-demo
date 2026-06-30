"use client";

import { useEffect, useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";

const links = [
  { label: "Menu", href: "#menu" },
  { label: "Story", href: "#story" },
  { label: "Locations", href: "#locations" },
  { label: "Awards", href: "#awards" },
  { label: "Jobs", href: "#careers" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b-[3px] border-char transition-colors duration-300 ${
        scrolled ? "bg-cream" : "bg-cream/95 backdrop-blur"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="font-display text-2xl uppercase tracking-tight">
          GRIZZLE
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-bold uppercase tracking-wide transition-colors hover:text-ketchup"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#order"
            className="hidden border-[3px] border-char bg-ketchup px-5 py-2 font-display text-lg uppercase text-cream shadow-hard-sm transition-transform hover:-translate-y-0.5 sm:block"
          >
            Order
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="border-[3px] border-char bg-cream p-1.5 md:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      {open && (
        <div className="border-t-[3px] border-char bg-cream md:hidden">
          <ul className="flex flex-col px-4 py-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-display text-2xl uppercase"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <a
              href="#order"
              onClick={() => setOpen(false)}
              className="mt-2 border-[3px] border-char bg-ketchup px-5 py-3 text-center font-display text-2xl uppercase text-cream"
            >
              Order Now
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}
