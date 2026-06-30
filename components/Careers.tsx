import Reveal from "./Reveal";
import { ArrowRight } from "lucide-react";

export default function Careers() {
  return (
    <section id="careers" className="bg-cream py-20 md:py-28">
      <Reveal className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="border-[3px] border-char bg-mustard p-8 shadow-hard sm:p-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="font-display text-xl uppercase text-ketchup">
                Work With Us
              </p>
              <h2 className="mt-2 font-display text-5xl uppercase leading-[0.9] sm:text-6xl">
                Join the crew
              </h2>
              <p className="mt-4 max-w-md text-lg font-medium text-char/80">
                We&apos;re after grill-heads, sauce-slingers and front-of-house
                legends. No CV-speak. Just turn up hungry to learn.
              </p>
            </div>
            <a
              href="#"
              className="group inline-flex flex-shrink-0 items-center gap-2 border-[3px] border-char bg-ketchup px-7 py-4 font-display text-2xl uppercase text-cream shadow-hard transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
            >
              See Jobs
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
