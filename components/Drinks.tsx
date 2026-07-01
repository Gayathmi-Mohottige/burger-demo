import Reveal from "./Reveal";
import AddToCartButton from "./cart/AddToCartButton";

const drinks = [
  { id: "shake-choc", name: "Chocolate Shake", price: 4.5, emoji: "🥤" },
  { id: "shake-vanilla", name: "Vanilla Shake", price: 4.5, emoji: "🍦" },
  { id: "cola", name: "Cola", price: 2.5, emoji: "🥫" },
  { id: "lemonade", name: "Craft Lemonade", price: 3.0, emoji: "🍋" },
  { id: "beer", name: "Craft Lager", price: 5.0, emoji: "🍺" },
  { id: "water", name: "Still Water", price: 1.5, emoji: "💧" },
];

export default function Drinks() {
  return (
    <section id="drinks" className="bg-char py-16 text-cream md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="font-display text-xl uppercase text-mustard">Wash it down</p>
          <h2 className="mt-2 font-display text-4xl uppercase leading-[0.9] sm:text-5xl md:text-6xl">
            Shakes &amp; drinks
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {drinks.map((d, i) => (
            <Reveal key={d.id} delay={(i % 3) * 0.06}>
              <div className="flex items-center gap-4 border-[3px] border-cream bg-char-soft p-4">
                <span className="grid h-14 w-14 flex-shrink-0 place-items-center border-[3px] border-cream bg-ketchup text-3xl">
                  {d.emoji}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-2xl uppercase leading-none">
                    {d.name}
                  </h3>
                  <p className="font-display text-xl text-mustard">
                    £{d.price.toFixed(2)}
                  </p>
                </div>
                <AddToCartButton id={d.id} name={d.name} price={d.price} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
