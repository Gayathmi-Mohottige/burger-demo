"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1100&q=80";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative grain overflow-hidden bg-cream px-4 pb-16 pt-28 sm:px-6 sm:pt-32"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        {/* copy */}
        <div className="relative z-10">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            className="inline-block -rotate-2 border-[3px] border-char bg-mustard px-3 py-1 text-sm font-bold uppercase tracking-wide shadow-hard-sm"
          >
            🔥 World&apos;s Best Burger 2026
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 90, damping: 14, delay: 0.1 }}
            className="mt-5 font-display text-6xl uppercase leading-[0.88] tracking-tight sm:text-7xl md:text-8xl"
          >
            Smashed thin. <span className="text-ketchup">Stacked high.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-6 max-w-md text-lg font-medium text-char/80"
          >
            London&apos;s filthiest smash burger - griddled to order, no shortcuts,
            no nonsense. Get messy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#order"
              className="group inline-flex items-center justify-center gap-2 border-[3px] border-char bg-ketchup px-7 py-3.5 font-display text-2xl uppercase text-cream shadow-hard transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
            >
              Order Now
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center border-[3px] border-char bg-cream px-7 py-3.5 font-display text-2xl uppercase shadow-hard transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
            >
              View Menu
            </a>
          </motion.div>
        </div>

        {/* burger image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 3 }}
          transition={{ type: "spring", stiffness: 80, damping: 12, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="overflow-hidden border-[4px] border-char shadow-hard"
          >
            <div
              className="aspect-square w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${HERO_IMAGE})` }}
              role="img"
              aria-label="A GRIZZLE smash burger"
            />
          </motion.div>
          {/* sticker badge */}
          <div className="absolute -bottom-5 -left-5 rotate-[-8deg] border-[3px] border-char bg-ketchup px-4 py-2 font-display text-xl uppercase text-cream shadow-hard-sm">
            £8.50
          </div>
        </motion.div>
      </div>
    </section>
  );
}
