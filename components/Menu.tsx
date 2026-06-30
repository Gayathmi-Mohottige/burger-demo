import Reveal from "./Reveal";
import { Plus } from "lucide-react";

const burgers = [
  {
    name: "The Grizzle",
    desc: "Double smashed patty, american cheese, pickles, grizzle sauce.",
    price: "8.50",
    img: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=800&q=80",
    badge: "Bestseller",
    badgeColor: "bg-mustard text-char",
  },
  {
    name: "Bacon Filth",
    desc: "Double patty, smoked streaky bacon, cheese, burnt onions.",
    price: "9.50",
    img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=800&q=80",
    badge: "🔥 Hot",
    badgeColor: "bg-ketchup text-cream",
  },
  {
    name: "The Vegan One",
    desc: "Smashed plant patty, vegan cheese, pickles, secret sauce.",
    price: "8.50",
    img: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?auto=format&fit=crop&w=800&q=80",
    badge: "New",
    badgeColor: "bg-char text-cream",
  },
  {
    name: "Triple Trouble",
    desc: "Three patties, triple cheese, for when one just won't do.",
    price: "11.00",
    img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    badge: "Big",
    badgeColor: "bg-mustard text-char",
  },
  {
    name: "Chick Smash",
    desc: "Buttermilk-fried chicken thigh, slaw, hot honey, pickles.",
    price: "9.00",
    img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=800&q=80",
    badge: "Crispy",
    badgeColor: "bg-ketchup text-cream",
  },
  {
    name: "Loaded Chips",
    desc: "Hand-cut chips, melted cheese, burnt ends, grizzle sauce.",
    price: "6.50",
    img: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?auto=format&fit=crop&w=800&q=80",
    badge: "Share",
    badgeColor: "bg-char text-cream",
  },
];

export default function Menu() {
  return (
    <section id="menu" className="grain relative bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="font-display text-xl uppercase text-ketchup">The Goods</p>
          <h2 className="mt-2 font-display text-5xl uppercase leading-[0.9] sm:text-6xl md:text-7xl">
            Pick your filth
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {burgers.map((b, i) => (
            <Reveal key={b.name} delay={(i % 3) * 0.08}>
              <div className="group relative h-full border-[3px] border-char bg-white shadow-hard transition-transform duration-200 hover:-translate-x-1 hover:-translate-y-1">
                {/* badge */}
                <span
                  className={`absolute left-3 top-3 z-10 rotate-[-5deg] border-[3px] border-char px-2.5 py-1 text-xs font-bold uppercase ${b.badgeColor}`}
                >
                  {b.badge}
                </span>
                <div className="aspect-[4/3] w-full overflow-hidden border-b-[3px] border-char">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundImage: `url(${b.img})` }}
                    role="img"
                    aria-label={b.name}
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-2xl uppercase leading-none">
                      {b.name}
                    </h3>
                    <span className="font-display text-2xl text-ketchup">
                      £{b.price}
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-medium text-char/70">{b.desc}</p>
                  <button className="mt-4 inline-flex items-center gap-1.5 border-[3px] border-char bg-mustard px-4 py-2 font-display text-lg uppercase shadow-hard-sm transition-transform hover:-translate-y-0.5">
                    Add <Plus className="h-4 w-4" strokeWidth={3} />
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
