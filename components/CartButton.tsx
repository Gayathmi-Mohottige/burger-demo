"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ShoppingBag, X, Plus, Minus, Trash2, Check, ArrowLeft, CreditCard, Loader2,
} from "lucide-react";
import { useCart } from "./cart/CartContext";

const stores = ["Shoreditch", "Soho", "Camden", "Brixton", "Borough", "Westfield"];
const times = ["ASAP (20 min)", "In 30 min", "In 45 min", "In 1 hour"];

// PayHere sandbox supports LKR / USD. For a real SL client the whole site
// would be priced in LKR and this would match the displayed prices.
const CURRENCY = "LKR";

type Step = "bag" | "details" | "done";

type PayHere = {
  onCompleted?: (orderId: string) => void;
  onDismissed?: () => void;
  onError?: (error: string) => void;
  startPayment: (payment: Record<string, unknown>) => void;
};
declare global {
  interface Window {
    payhere?: PayHere;
  }
}

export default function CartButton() {
  const { items, setQty, remove, clear, count, total } = useCart();
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("bag");
  const [form, setForm] = useState({
    name: "", phone: "", email: "", store: stores[0], time: times[0],
  });
  const [orderNo, setOrderNo] = useState("");
  const [paying, setPaying] = useState(false);
  const [payError, setPayError] = useState("");

  // load PayHere popup library once
  useEffect(() => {
    if (document.getElementById("payhere-js")) return;
    const s = document.createElement("script");
    s.id = "payhere-js";
    s.src = "https://www.payhere.lk/lib/payhere.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  function finishOrder(id: string) {
    setOrderNo(id);
    setStep("done");
  }

  // pay at counter on collection (no gateway needed)
  function payOnCollection(e: React.FormEvent) {
    e.preventDefault();
    finishOrder("GRZ-" + Math.floor(1000 + Math.random() * 9000));
  }

  // pay now by card via PayHere sandbox
  async function payByCard() {
    setPayError("");
    const ph = typeof window !== "undefined" ? window.payhere : undefined;
    if (!ph) {
      setPayError("Payment library still loading — try again in a moment.");
      return;
    }
    if (!form.name || !form.phone || !form.email) {
      setPayError("Add your name, phone and email first.");
      return;
    }

    setPaying(true);
    const orderId = "GRZ-" + Math.floor(1000 + Math.random() * 9000);
    const amount = total.toFixed(2);

    try {
      const res = await fetch("/api/payhere", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId, amount, currency: CURRENCY }),
      });
      if (!res.ok) throw new Error("hash");
      const { merchantId, hash } = await res.json();

      ph.onCompleted = () => {
        setPaying(false);
        finishOrder(orderId);
      };
      ph.onDismissed = () => setPaying(false);
      ph.onError = (err) => {
        setPaying(false);
        setPayError("Payment error: " + err);
      };

      const [firstName, ...rest] = form.name.trim().split(" ");
      ph.startPayment({
        sandbox: true,
        merchant_id: merchantId,
        return_url: undefined,
        cancel_url: undefined,
        notify_url: window.location.origin + "/api/payhere/notify",
        order_id: orderId,
        items: "GRIZZLE order",
        amount,
        currency: CURRENCY,
        hash,
        first_name: firstName || "Guest",
        last_name: rest.join(" ") || "-",
        email: form.email,
        phone: form.phone,
        address: form.store,
        city: form.store,
        country: "Sri Lanka",
      });
    } catch {
      setPaying(false);
      setPayError(
        "Couldn't start card payment — check PayHere keys in .env.local. You can still pay on collection."
      );
    }
  }

  function closeAll() {
    setOpen(false);
    setTimeout(() => {
      if (step === "done") {
        clear();
        setStep("bag");
        setForm({ name: "", phone: "", email: "", store: stores[0], time: times[0] });
        setPayError("");
      }
    }, 300);
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2 border-[3px] border-char bg-ketchup px-4 py-3 font-display text-lg uppercase text-cream shadow-hard transition-transform hover:-translate-y-0.5"
        aria-label="Open your bag"
      >
        <ShoppingBag className="h-5 w-5" strokeWidth={2.5} />
        {count > 0 ? <span>{count} · £{total.toFixed(2)}</span> : <span>Bag</span>}
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={closeAll}
              className="fixed inset-0 z-50 bg-char/60"
            />
            <motion.aside
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col overflow-hidden border-l-[3px] border-char bg-cream"
            >
              <div className="flex items-center justify-between border-b-[3px] border-char bg-char px-5 py-4 text-cream">
                <p className="font-display text-2xl uppercase">
                  {step === "bag" && "Your Bag"}
                  {step === "details" && "Checkout"}
                  {step === "done" && "Sorted!"}
                </p>
                <button onClick={closeAll} aria-label="Close">
                  <X className="h-6 w-6" strokeWidth={2.5} />
                </button>
              </div>

              {step === "bag" && (
                <>
                  <div className="min-h-0 flex-1 overflow-y-auto p-5">
                    {items.length === 0 ? (
                      <div className="grid h-full place-items-center text-center">
                        <div>
                          <p className="font-display text-3xl uppercase text-char/40">Empty bag</p>
                          <p className="mt-2 text-sm text-char/60">Go get some filth from the menu.</p>
                        </div>
                      </div>
                    ) : (
                      <ul className="space-y-3">
                        {items.map((i) => (
                          <li key={i.id} className="flex items-center gap-3 border-[3px] border-char bg-white p-3">
                            <div className="min-w-0 flex-1">
                              <p className="font-display text-lg uppercase leading-none">{i.name}</p>
                              <p className="text-sm font-bold text-ketchup">£{(i.price * i.qty).toFixed(2)}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <button onClick={() => setQty(i.id, i.qty - 1)} className="border-[3px] border-char bg-cream p-1" aria-label="Decrease">
                                <Minus className="h-3.5 w-3.5" strokeWidth={3} />
                              </button>
                              <span className="w-5 text-center font-display text-lg">{i.qty}</span>
                              <button onClick={() => setQty(i.id, i.qty + 1)} className="border-[3px] border-char bg-mustard p-1" aria-label="Increase">
                                <Plus className="h-3.5 w-3.5" strokeWidth={3} />
                              </button>
                              <button onClick={() => remove(i.id)} className="ml-1 text-char/50 hover:text-ketchup" aria-label="Remove">
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  {items.length > 0 && (
                    <div className="border-t-[3px] border-char p-5">
                      <div className="flex items-center justify-between font-display text-2xl uppercase">
                        <span>Total</span>
                        <span className="text-ketchup">£{total.toFixed(2)}</span>
                      </div>
                      <button onClick={() => setStep("details")} className="mt-4 w-full border-[3px] border-char bg-ketchup py-3.5 font-display text-2xl uppercase text-cream shadow-hard-sm transition-transform hover:-translate-y-0.5">
                        Checkout →
                      </button>
                    </div>
                  )}
                </>
              )}

              {step === "details" && (
                <div className="flex min-h-0 flex-1 flex-col">
                  <div className="min-h-0 flex-1 space-y-4 overflow-y-auto p-5">
                    <Field label="Your name">
                      <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} placeholder="Jamie Smith" />
                    </Field>
                    <Field label="Phone">
                      <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputCls} placeholder="0771234567" />
                    </Field>
                    <Field label="Email">
                      <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} placeholder="you@email.com" />
                    </Field>
                    <Field label="Collect from">
                      <select value={form.store} onChange={(e) => setForm({ ...form, store: e.target.value })} className={inputCls}>
                        {stores.map((s) => <option key={s}>{s}</option>)}
                      </select>
                    </Field>
                    <Field label="Ready in">
                      <select value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} className={inputCls}>
                        {times.map((t) => <option key={t}>{t}</option>)}
                      </select>
                    </Field>
                    {payError && (
                      <p className="border-[3px] border-ketchup bg-ketchup/10 p-3 text-sm font-bold text-ketchup">{payError}</p>
                    )}
                  </div>

                  <div className="border-t-[3px] border-char p-5">
                    <button type="button" onClick={() => setStep("bag")} className="mb-3 inline-flex items-center gap-1.5 text-sm font-bold uppercase text-char/70 hover:text-char">
                      <ArrowLeft className="h-4 w-4" /> Back to bag
                    </button>
                    <button
                      type="button"
                      onClick={payByCard}
                      disabled={paying}
                      className="flex w-full items-center justify-center gap-2 border-[3px] border-char bg-ketchup py-3.5 font-display text-2xl uppercase text-cream shadow-hard-sm transition-transform hover:-translate-y-0.5 disabled:opacity-70"
                    >
                      {paying ? (
                        <><Loader2 className="h-5 w-5 animate-spin" /> Opening…</>
                      ) : (
                        <><CreditCard className="h-5 w-5" strokeWidth={2.5} /> Pay £{total.toFixed(2)} by card</>
                      )}
                    </button>
                    <button type="button" onClick={payOnCollection} className="mt-3 w-full border-[3px] border-char bg-cream py-2.5 font-display text-lg uppercase transition-transform hover:-translate-y-0.5">
                      Or pay at collection
                    </button>
                  </div>
                </div>
              )}

              {step === "done" && (
                <div className="flex flex-1 flex-col items-center justify-center p-8 text-center">
                  <div className="grid h-20 w-20 place-items-center border-[3px] border-char bg-mustard shadow-hard">
                    <Check className="h-10 w-10" strokeWidth={3} />
                  </div>
                  <p className="mt-6 font-display text-4xl uppercase">Order in!</p>
                  <p className="mt-2 font-display text-2xl uppercase text-ketchup">#{orderNo}</p>
                  <p className="mt-4 text-char/80">Collect from <b>{form.store}</b> · {form.time}.</p>
                  <p className="mt-1 text-char/80">See you soon, {form.name || "friend"}.</p>
                  <button onClick={closeAll} className="mt-8 border-[3px] border-char bg-char px-6 py-3 font-display text-xl uppercase text-cream shadow-hard-sm">Done</button>
                </div>
              )}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

const inputCls =
  "w-full border-[3px] border-char bg-white px-4 py-3 font-medium text-char outline-none focus:bg-mustard/20";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-display text-lg uppercase">{label}</span>
      {children}
    </label>
  );
}
