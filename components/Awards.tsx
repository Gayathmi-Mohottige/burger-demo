import Reveal from "./Reveal";
import { Star } from "lucide-react";

const badges = [
  { title: "World's Best Burger", year: "2026", rot: "-rotate-3" },
  { title: "National Burger Awards", year: "Finalist '26", rot: "rotate-2" },
  { title: "Time Out Love London", year: "2025", rot: "-rotate-1" },
];

const reviews = [
  { text: "The crust on this patty should be illegal. Best smash in London, full stop.", who: "The Standard" },
  { text: "I queued 40 minutes in the rain. Worth every soggy second.", who: "Giles, regular" },
  { text: "Filthy in the best possible way. My monthly cheat meal is now weekly.", who: "Hannah K." },
];

export default function Awards() {
  return (
    <section id="awards" className="bg-char py-20 text-cream md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="font-display text-xl uppercase text-mustard">The Receipts</p>
          <h2 className="mt-2 font-display text-5xl uppercase leading-[0.9] sm:text-6xl md:text-7xl">
            They said it, not us
          </h2>
        </Reveal>

        {/* award badges */}
        <div className="mt-12 flex flex-wrap gap-5">
          {badges.map((b) => (
            <Reveal key={b.title}>
              <div
                className={`${b.rot} border-[3px] border-cream bg-ketchup px-5 py-4 text-center shadow-hard-red`}
              >
                <p className="font-display text-2xl uppercase leading-none">
                  {b.title}
                </p>
                <p className="mt-1 text-sm uppercase tracking-wide text-cream/80">
                  {b.year}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* reviews */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.who} delay={i * 0.08}>
              <div className="h-full border-[3px] border-cream bg-char-soft p-6">
                <div className="flex gap-0.5 text-mustard">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-mustard" />
                  ))}
                </div>
                <p className="mt-4 text-lg font-medium">&ldquo;{r.text}&rdquo;</p>
                <p className="mt-4 text-sm uppercase tracking-wide text-mustard">
                  {r.who}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
