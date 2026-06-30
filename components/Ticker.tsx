import Marquee from "./Marquee";

const items = [
  "Smashed to order",
  "Aged beef",
  "Filthy good",
  "Brioche, toasted",
  "Hand-cut chips",
  "No nonsense",
  "Get messy",
];

export default function Ticker() {
  return (
    <div className="border-y-[3px] border-char bg-ketchup py-3 text-cream">
      <Marquee items={items} duration={24} />
    </div>
  );
}
