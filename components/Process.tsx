import Reveal from "./Reveal";

const steps = [
  { n: "01", title: "Smash", body: "A ball of aged beef hits the screaming griddle and gets smashed paper-thin for maximum crust." },
  { n: "02", title: "Sear", body: "Thirty seconds, one flip, a slice of american cheese melted under a cloche. That's it." },
  { n: "03", title: "Stack", body: "Onto a buttered, toasted brioche with pickles and our grizzle sauce. Wrap it. Go." },
];

export default function Process() {
  return (
    <section className="grain relative bg-mustard py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="font-display text-5xl uppercase leading-[0.9] sm:text-6xl md:text-7xl">
            Three steps. No more.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className="h-full border-[3px] border-char bg-cream p-6 shadow-hard">
                <span className="font-display text-6xl text-ketchup">{s.n}</span>
                <h3 className="mt-2 font-display text-3xl uppercase">{s.title}</h3>
                <p className="mt-2 font-medium text-char/75">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
