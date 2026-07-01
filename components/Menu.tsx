import Reveal from "./Reveal";
import AddToCartButton from "./cart/AddToCartButton";

const burgers = [
  {
    id: "the-grizzle",
    name: "The Grizzle",
    desc: "Double smashed patty, american cheese, pickles, grizzle sauce.",
    price: 8.5,
    img: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=800&q=80",
    badge: "Bestseller",
    badgeColor: "bg-mustard text-char",
  },
  {
    id: "bacon-filth",
    name: "Bacon Filth",
    desc: "Double patty, smoked streaky bacon, cheese, burnt onions.",
    price: 9.5,
    img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=800&q=80",
    badge: "🔥 Hot",
    badgeColor: "bg-ketchup text-cream",
  },
  {
    id: "vegan-one",
    name: "The Vegan One",
    desc: "Smashed plant patty, vegan cheese, pickles, secret sauce.",
    price: 8.5,
    img: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?auto=format&fit=crop&w=800&q=80",
    badge: "New",
    badgeColor: "bg-char text-cream",
  },
  {
    id: "triple-trouble",
    name: "Triple Trouble",
    desc: "Three patties, triple cheese, for when one just won't do.",
    price: 11.0,
    img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    badge: "Big",
    badgeColor: "bg-mustard text-char",
  },
  {
    id: "chick-smash",
    name: "Chick Smash",
    desc: "Buttermilk-fried chicken thigh, slaw, hot honey, pickles.",
    price: 9.0,
    img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=800&q=80",
    badge: "Crispy",
    badgeColor: "bg-ketchup text-cream",
  },
  {
    id: "double-cheese",
    name: "Double Cheese",
    desc: "Two patties, double american cheese, onions, mustard, ketchup.",
    price: 8.0,
    img: "https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=800&q=80",
    badge: "Classic",
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
            <Reveal key={b.id} delay={(i % 3) * 0.08}>
              <div className="group relative flex h-full flex-col border-[3px] border-char bg-white shadow-hard transition-transform duration-200 hover:-translate-x-1 hover:-translate-y-1">
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
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-2xl uppercase leading-none">
                      {b.name}
                    </h3>
                    <span className="font-display text-2xl text-ketchup">
                      £{b.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="mt-2 flex-1 text-sm font-medium text-char/70">
                    {b.desc}
                  </p>
                  <div className="mt-4">
                    <AddToCartButton id={b.id} name={b.name} price={b.price} />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
