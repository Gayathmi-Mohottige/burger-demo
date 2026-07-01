import Reveal from "./Reveal";
import AddToCartButton from "./cart/AddToCartButton";

const sides = [
  { id: "fries-skinon", name: "Skin-on Fries", price: 4.0, emoji: "🍟" },
  { id: "fries-cheese", name: "Cheese Fries", price: 5.5, emoji: "🧀" },
  { id: "fries-loaded", name: "Loaded Fries", price: 6.5, emoji: "🥓" },
  { id: "onion-rings", name: "Onion Rings", price: 4.5, emoji: "🧅" },
  { id: "slaw", name: "House Slaw", price: 3.0, emoji: "🥬" },
  { id: "pickles", name: "Fried Pickles", price: 4.0, emoji: "🥒" },
];

export default function Sides() {
  return (
    <section id="sides" className="grain relative border-t-[3px] border-char bg-cream py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="font-display text-xl uppercase text-ketchup">On the side</p>
          <h2 className="mt-2 font-display text-4xl uppercase leading-[0.9] sm:text-5xl md:text-6xl">
            Fries &amp; sides
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sides.map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 0.06}>
              <div className="flex items-center gap-4 border-[3px] border-char bg-white p-4 shadow-hard-sm">
                <span className="grid h-14 w-14 flex-shrink-0 place-items-center border-[3px] border-char bg-mustard text-3xl">
                  {s.emoji}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-2xl uppercase leading-none">
                    {s.name}
                  </h3>
                  <p className="font-display text-xl text-ketchup">
                    £{s.price.toFixed(2)}
                  </p>
                </div>
                <AddToCartButton id={s.id} name={s.name} price={s.price} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
