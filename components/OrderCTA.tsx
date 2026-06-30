import Reveal from "./Reveal";

const partners = ["Deliveroo", "Uber Eats", "Just Eat", "Click & Collect"];

export default function OrderCTA() {
  return (
    <section id="order" className="grain relative bg-ketchup py-20 text-cream md:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="font-display text-6xl uppercase leading-[0.85] sm:text-7xl md:text-8xl">
            Hungry?
          </h2>
          <p className="mx-auto mt-5 max-w-md text-lg font-medium text-cream/90">
            Get GRIZZLE to your door, or skip the queue with click &amp; collect.
            Either way — get messy.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            {partners.map((p) => (
              <a
                key={p}
                href="#"
                className="border-[3px] border-cream bg-char px-6 py-3 font-display text-xl uppercase text-cream shadow-[6px_6px_0_0_#f6ecd8] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
              >
                {p}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
