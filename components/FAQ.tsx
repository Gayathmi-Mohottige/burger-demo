"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Reveal from "./Reveal";

const faqs = [
  { q: "Do you do vegan and veggie?", a: "Yes — our smashed plant patty is a proper menu item, not an afterthought. Full allergen info is at every till and on the menu page." },
  { q: "Is the beef halal?", a: "Selected sites serve halal-certified beef. Check the locations section for which ones, or ask the team when you order." },
  { q: "Can I book a table?", a: "We're walk-in only — it keeps the queue fair and the griddle busy. Big group? Drop us a message and we'll sort something." },
  { q: "Do you cater / do events?", a: "We bring the griddle to you. Weddings, launches, birthdays — if there's space for a flat-top, we're in." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <h2 className="font-display text-5xl uppercase leading-[0.9] sm:text-6xl md:text-7xl">
            The small print
          </h2>
        </Reveal>

        <div className="mt-10 space-y-4">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <div className="border-[3px] border-char bg-white shadow-hard-sm">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={open === i}
                >
                  <span className="font-display text-2xl uppercase leading-tight">
                    {f.q}
                  </span>
                  {open === i ? (
                    <Minus className="h-6 w-6 flex-shrink-0" strokeWidth={3} />
                  ) : (
                    <Plus className="h-6 w-6 flex-shrink-0" strokeWidth={3} />
                  )}
                </button>
                {open === i && (
                  <p className="border-t-[3px] border-char p-5 font-medium text-char/80">
                    {f.a}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
