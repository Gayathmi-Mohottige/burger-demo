import Reveal from "./Reveal";
import { MapPin, Clock } from "lucide-react";

const sites = [
  { area: "Shoreditch", addr: "12 Rivington St, EC2A", hours: "11:00 – 23:00", open: true },
  { area: "Soho", addr: "44 Old Compton St, W1D", hours: "11:00 – 23:00", open: true },
  { area: "Camden", addr: "Camden Market, NW1", hours: "12:00 – 22:00", open: true },
  { area: "Brixton", addr: "Brixton Village, SW9", hours: "12:00 – 22:00", open: false },
  { area: "Borough", addr: "Borough Market, SE1", hours: "11:00 – 21:00", open: true },
  { area: "Westfield", addr: "Stratford City, E20", hours: "10:00 – 22:00", open: true },
];

export default function Locations() {
  return (
    <section id="locations" className="grain relative bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="font-display text-xl uppercase text-ketchup">Find Us</p>
          <h2 className="mt-2 font-display text-5xl uppercase leading-[0.9] sm:text-6xl md:text-7xl">
            Six spots. All London.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sites.map((s, i) => (
            <Reveal key={s.area} delay={(i % 3) * 0.07}>
              <div className="flex h-full flex-col border-[3px] border-char bg-white p-5 shadow-hard">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-3xl uppercase">{s.area}</h3>
                  <span
                    className={`border-[2px] border-char px-2 py-0.5 text-xs font-bold uppercase ${
                      s.open ? "bg-mustard text-char" : "bg-char text-cream"
                    }`}
                  >
                    {s.open ? "Open now" : "Closed"}
                  </span>
                </div>
                <p className="mt-3 flex items-center gap-2 text-sm font-medium text-char/75">
                  <MapPin className="h-4 w-4 text-ketchup" /> {s.addr}
                </p>
                <p className="mt-1.5 flex items-center gap-2 text-sm font-medium text-char/75">
                  <Clock className="h-4 w-4 text-ketchup" /> {s.hours}
                </p>
                <a
                  href="#"
                  className="mt-4 inline-block w-fit border-b-[3px] border-ketchup font-display text-lg uppercase"
                >
                  Directions →
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
