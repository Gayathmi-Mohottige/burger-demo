import { MapPin } from "lucide-react";

const sites = ["Shoreditch", "Soho", "Camden", "Brixton", "Borough", "Westfield"];
const links = ["Menu", "Allergens", "Halal Info", "Careers", "Gift Cards", "Contact"];

export default function Footer() {
  return (
    <footer className="border-t-[3px] border-cream bg-char py-14 text-cream">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <p className="font-display text-4xl uppercase">GRIZZLE</p>
            <p className="mt-3 text-sm text-cream/70">
              London&apos;s filthiest smash. Smashed to order since 2019.
            </p>
            <div className="mt-5 flex gap-2">
              {["IG", "TT", "FB"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="border-[3px] border-cream px-3 py-1.5 font-display text-lg uppercase transition-colors hover:bg-ketchup"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-display text-xl uppercase text-mustard">Locations</p>
            <ul className="mt-3 space-y-2">
              {sites.map((s) => (
                <li key={s} className="flex items-center gap-2 text-sm text-cream/75">
                  <MapPin className="h-3.5 w-3.5 text-ketchup" /> {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-xl uppercase text-mustard">More</p>
            <ul className="mt-3 space-y-2">
              {links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-cream/75 transition-colors hover:text-mustard">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-xl uppercase text-mustard">Hours</p>
            <p className="mt-3 text-sm text-cream/75">Mon – Thu: 11:00 – 22:00</p>
            <p className="mt-1 text-sm text-cream/75">Fri – Sat: 11:00 – 23:00</p>
            <p className="mt-1 text-sm text-cream/75">Sun: 12:00 – 21:00</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t-[3px] border-cream/20 pt-6 text-xs uppercase tracking-wide text-cream/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Grizzle Burgers Ltd</p>
          <p>A demo by your studio</p>
        </div>
      </div>
    </footer>
  );
}
