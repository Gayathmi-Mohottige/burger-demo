import Reveal from "./Reveal";

const STORY_IMAGE =
  "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=1000&q=80";

export default function Story() {
  return (
    <section id="story" className="bg-char py-20 text-cream md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2">
        <Reveal>
          <div className="overflow-hidden border-[4px] border-cream shadow-hard-red">
            <div
              className="aspect-[4/5] w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${STORY_IMAGE})` }}
              role="img"
              aria-label="The GRIZZLE griddle"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="font-display text-xl uppercase text-mustard">Since 2019</p>
          <h2 className="mt-2 font-display text-5xl uppercase leading-[0.9] sm:text-6xl">
            One filthy little griddle
          </h2>
          <p className="mt-6 text-lg text-cream/80">
            It started with a beaten-up flat-top in a Shoreditch railway arch and
            a stubborn belief: a burger doesn&apos;t need fifteen toppings, it
            needs a screaming-hot griddle and beef smashed paper-thin so every
            edge goes lacy and crisp.
          </p>
          <p className="mt-4 text-lg text-cream/80">
            Seven years and a few awards later, we still smash every patty to
            order. No heat lamps. No holding. Just filth, done right.
          </p>

          <div className="mt-8 flex flex-wrap gap-8">
            <div>
              <p className="font-display text-4xl text-mustard">6</p>
              <p className="text-sm uppercase tracking-wide text-cream/60">
                London sites
              </p>
            </div>
            <div>
              <p className="font-display text-4xl text-mustard">30s</p>
              <p className="text-sm uppercase tracking-wide text-cream/60">
                on the griddle
              </p>
            </div>
            <div>
              <p className="font-display text-4xl text-mustard">100%</p>
              <p className="text-sm uppercase tracking-wide text-cream/60">
                aged British beef
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
