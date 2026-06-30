import Reveal from "./Reveal";
import { AtSign, Heart, MessageCircle, Send, Bookmark } from "lucide-react";

const tags = ["#GetMessy", "#GrizzleBurger", "#SmashedToOrder", "#LondonEats"];

type Post = {
  handle: string;
  avatar: string;
  time: string;
  img: string;
  likes: string;
  caption: string;
  hashtags: string[];
  rot: string;
  shadow: string;
};

// Swap these for real customer photos — phone-shot, candid, a bit messy = perfect.
const posts: Post[] = [
  {
    handle: "hungry_hannah",
    avatar: "HH",
    time: "1h",
    img: "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?auto=format&fit=crop&w=700&q=80",
    likes: "1,204",
    caption: "couldn't even wait till I sat down lol",
    hashtags: ["#GetMessy", "#GrizzleBurger"],
    rot: "-rotate-2",
    shadow: "shadow-[6px_6px_0_0_#f4b71e]",
  },
  {
    handle: "soho_lad",
    avatar: "SL",
    time: "3h",
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=700&q=80",
    likes: "892",
    caption: "the cheese pull on this thing is unreal",
    hashtags: ["#SmashedToOrder", "#FilthyGood"],
    rot: "rotate-1",
    shadow: "shadow-[6px_6px_0_0_#e2382b]",
  },
  {
    handle: "bricklane.bites",
    avatar: "BB",
    time: "5h",
    img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=700&q=80",
    likes: "2,310",
    caption: "queued 40 mins. zero regrets. worth it",
    hashtags: ["#GrizzleBurger", "#LondonEats"],
    rot: "rotate-2",
    shadow: "shadow-[6px_6px_0_0_#e2382b]",
  },
  {
    handle: "veganvibes_ldn",
    avatar: "VV",
    time: "8h",
    img: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?auto=format&fit=crop&w=700&q=80",
    likes: "765",
    caption: "the plant smash is actually unreal tbh",
    hashtags: ["#GetMessy", "#VeganLondon"],
    rot: "-rotate-1",
    shadow: "shadow-[6px_6px_0_0_#f4b71e]",
  },
  {
    handle: "midnight.muncher",
    avatar: "MM",
    time: "12h",
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=80",
    likes: "1,567",
    caption: "2am grizzle run >>> everything else",
    hashtags: ["#LateNight", "#GrizzleBurger"],
    rot: "rotate-1",
    shadow: "shadow-[6px_6px_0_0_#f4b71e]",
  },
  {
    handle: "camden.eats",
    avatar: "CE",
    time: "1d",
    img: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=700&q=80",
    likes: "1,033",
    caption: "messiest burger in london and proud of it",
    hashtags: ["#GetMessy", "#FilthyGood"],
    rot: "-rotate-2",
    shadow: "shadow-[6px_6px_0_0_#e2382b]",
  },
];

export default function Gallery() {
  return (
    <section className="bg-char py-20 text-cream md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* header */}
        <Reveal>
          <div className="flex items-center gap-2 font-display text-xl uppercase text-mustard">
            <AtSign className="h-5 w-5" /> Straight off the feed
          </div>
          <h2 className="mt-2 font-display text-5xl uppercase leading-[0.9] sm:text-6xl md:text-7xl">
            Tag the mess
          </h2>
          <p className="mt-4 max-w-lg text-lg text-cream/80">
            Snap your burger, tag{" "}
            <span className="font-bold text-ketchup">#GetMessy</span>, and you
            could land on the wall. Real burgers, real people, real mess.
          </p>

          {/* hashtag chips */}
          <div className="mt-6 flex flex-wrap gap-2.5">
            {tags.map((t) => (
              <span
                key={t}
                className="border-[3px] border-cream bg-char-soft px-3 py-1.5 text-sm font-bold uppercase text-mustard"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>

        {/* feed */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.handle} delay={(i % 3) * 0.08}>
              <div
                className={`group ${p.rot} ${p.shadow} border-[3px] border-cream bg-cream text-char transition-transform duration-200 hover:rotate-0 hover:-translate-y-1`}
              >
                {/* post header */}
                <div className="flex items-center gap-2.5 p-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full border-[2px] border-char bg-ketchup font-display text-sm uppercase text-cream">
                    {p.avatar}
                  </span>
                  <div className="leading-tight">
                    <p className="text-sm font-bold">@{p.handle}</p>
                    <p className="text-xs text-char/50">London · {p.time}</p>
                  </div>
                  <span className="ml-auto text-lg font-bold tracking-widest">
                    ···
                  </span>
                </div>

                {/* image */}
                <div className="relative aspect-square overflow-hidden border-y-[3px] border-char">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${p.img})` }}
                    role="img"
                    aria-label={`Posted by @${p.handle}`}
                  />
                  {/* double-tap heart on hover */}
                  <div className="pointer-events-none absolute inset-0 grid place-items-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <Heart
                      className="h-20 w-20 fill-cream/90 text-cream drop-shadow-lg"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* actions */}
                <div className="flex items-center gap-4 px-3 pt-3">
                  <Heart className="h-6 w-6 fill-ketchup text-ketchup" />
                  <MessageCircle className="h-6 w-6" strokeWidth={2.5} />
                  <Send className="h-6 w-6" strokeWidth={2.5} />
                  <Bookmark className="ml-auto h-6 w-6" strokeWidth={2.5} />
                </div>

                {/* likes + caption */}
                <div className="px-3 pb-4 pt-2">
                  <p className="text-sm font-bold">{p.likes} likes</p>
                  <p className="mt-1 text-sm">
                    <span className="font-bold">@{p.handle}</span>{" "}
                    {p.caption}{" "}
                    {p.hashtags.map((h) => (
                      <span key={h} className="font-semibold text-ketchup">
                        {h}{" "}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* follow CTA */}
        <Reveal delay={0.1} className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 border-[3px] border-cream bg-ketchup px-7 py-3.5 font-display text-2xl uppercase text-cream shadow-[6px_6px_0_0_#f6ecd8] transition-transform hover:-translate-y-0.5"
          >
            <AtSign className="h-6 w-6" /> Follow @grizzle
          </a>
        </Reveal>
      </div>
    </section>
  );
}
