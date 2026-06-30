"use client";

import { motion } from "motion/react";

export default function Marquee({
  items,
  className = "",
  reverse = false,
  duration = 22,
}: {
  items: string[];
  className?: string;
  reverse?: boolean;
  duration?: number;
}) {
  const loop = [...items, ...items];
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex w-max items-center"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {loop.map((item, i) => (
          <span key={i} className="flex items-center whitespace-nowrap">
            <span className="px-6 font-display text-2xl uppercase tracking-wide sm:text-3xl">
              {item}
            </span>
            <span className="text-xl">★</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
