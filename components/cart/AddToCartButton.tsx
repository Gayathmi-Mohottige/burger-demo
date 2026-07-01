"use client";

import { useState } from "react";
import { Plus, Check } from "lucide-react";
import { useCart } from "./CartContext";

export default function AddToCartButton({
  id,
  name,
  price,
  full = false,
}: {
  id: string;
  name: string;
  price: number;
  full?: boolean;
}) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  function onAdd() {
    add({ id, name, price });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 900);
  }

  return (
    <button
      onClick={onAdd}
      className={`inline-flex items-center justify-center gap-1.5 border-[3px] border-char font-display text-lg uppercase shadow-hard-sm transition-all hover:-translate-y-0.5 ${
        full ? "w-full py-2.5" : "px-4 py-2"
      } ${added ? "bg-char text-cream" : "bg-mustard text-char"}`}
    >
      {added ? (
        <>
          Added <Check className="h-4 w-4" strokeWidth={3} />
        </>
      ) : (
        <>
          Add <Plus className="h-4 w-4" strokeWidth={3} />
        </>
      )}
    </button>
  );
}
