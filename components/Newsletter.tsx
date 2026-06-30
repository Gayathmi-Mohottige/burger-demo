"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import Reveal from "./Reveal";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setDone(true);
  }

  return (
    <section className="bg-char py-20 text-cream md:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="font-display text-5xl uppercase leading-[0.9] sm:text-6xl">
            Get the sauce
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-cream/80">
            New drops, one-night specials and the odd free-burger code. No spam,
            we promise.
          </p>

          {done ? (
            <div className="mx-auto mt-8 flex w-fit items-center gap-2 border-[3px] border-mustard bg-char-soft px-6 py-4 font-display text-xl uppercase text-mustard">
              <Check className="h-5 w-5" strokeWidth={3} /> You&apos;re in. Stay hungry.
            </div>
          ) : (
            <form
              onSubmit={submit}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="flex-1 border-[3px] border-cream bg-cream px-4 py-3 font-medium text-char placeholder:text-char/50 outline-none"
              />
              <button
                type="submit"
                className="border-[3px] border-cream bg-ketchup px-6 py-3 font-display text-xl uppercase text-cream transition-transform hover:-translate-y-0.5"
              >
                Join
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
