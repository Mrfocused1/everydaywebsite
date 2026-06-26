import Link from "next/link";
import { Reveal } from "./Reveal";
import { COND, CUT_BR, CUT_TL, DISPLAY, Eyebrow, SCRIPT, SITE, MATCHDAY, BASE } from "./brand";

const HIGHLIGHTS = [
  {
    name: "Regular Tray",
    blurb: "The classic. Grilled goat, onions, scotch bonnet — the one everyone reorders.",
    price: "£12",
    img: `${BASE}/cut-1.png`,
  },
  {
    name: "Matchday Platter",
    blurb: "Large Ntaba + two roast plantain sticks. Built to feed two through extra time.",
    price: "£20",
    img: `${BASE}/cut-2.png`,
  },
  {
    name: "Family Platter",
    blurb: "Sunday-sized. Enough smoky, peppery goat to go round the whole table.",
    price: "£35",
    img: `${BASE}/paper.png`,
  },
];

const STATS: [string, string][] = [
  ["100%", "Made to order"],
  ["Small", "Batch cooked"],
  ["Hot", "Packed fresh"],
];

const IG_IMAGES = [`${BASE}/ig-1.png`, `${BASE}/ig-2.png`, `${BASE}/ig-3.png`];

export default function BobsHome() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[88vh] items-end overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${BASE}/hero-wide.png`}
          alt="Bobs Ntaba — the founder with fresh trays of grilled goat meat"
          className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b0a] via-[#0c0b0a]/40 to-[#0c0b0a]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0b0a]/85 via-[#0c0b0a]/20 to-transparent" />

        <div className="relative mx-auto w-full max-w-[1200px] px-5 pb-16 pt-28 md:pb-24">
          <p className={`${SCRIPT} bn-fade mb-1 text-3xl text-[#c99a3b] md:text-5xl`}>Bobs</p>
          <h1 className={`${DISPLAY} max-w-4xl text-[15vw] text-[#f3efe6] sm:text-7xl md:text-8xl lg:text-9xl`}>
            <span className="block overflow-hidden pb-[0.05em]">
              <span className="bn-hero-line block">Bold flavour.</span>
            </span>
            <span className="block overflow-hidden pb-[0.05em]">
              <span className="bn-hero-line block">
                Rooted <span className="text-[#c99a3b]">culture.</span>
              </span>
            </span>
          </h1>
          <p className="bn-fade mt-6 max-w-xl text-base leading-relaxed text-[#f3efe6]/80 md:text-lg">
            Slow-grilled goat meat — <span className="text-[#f3efe6]">Ntaba</span> — made fresh to order. Tossed with onions
            and scotch bonnet, served with a roast plantain stick. {SITE.area}.
          </p>
          <div className="bn-fade mt-8 flex flex-wrap gap-3">
            <a
              href={`tel:${SITE.phone}`}
              className={`${COND} bg-[#c99a3b] px-7 py-3.5 text-base tracking-widest text-[#0c0b0a] transition-colors hover:bg-[#e2bb6b] md:text-lg`}
              style={{ clipPath: CUT_TL }}
            >
              Call to Order
            </a>
            <Link
              href={`${BASE}/prices`}
              className={`${COND} border border-[#f3efe6]/30 px-7 py-3.5 text-base tracking-widest text-[#f3efe6] transition-colors hover:border-[#c99a3b] hover:text-[#c99a3b] md:text-lg`}
            >
              See the Price List
            </Link>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-[#0c0b0a] py-20 md:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-5 md:grid-cols-2 md:items-center">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden" style={{ clipPath: CUT_BR }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${BASE}/founder.png`}
                alt="A festival-goer enjoying a Bobs Ntaba skewer"
                className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
              />
            </div>
          </Reveal>
          <Reveal>
            <div className="mb-5">
              <Eyebrow>What is Ntaba?</Eyebrow>
            </div>
            <h2 className={`${DISPLAY} mb-5 text-4xl text-[#f3efe6] md:text-5xl`}>
              More than food.
              <br />
              A taste of <span className="text-[#c99a3b]">tradition.</span>
            </h2>
            <p className="mb-4 leading-relaxed text-[#a39c8e]">
              Ntaba is grilled goat meat done the old way — marinated, charred over heat, then tossed with raw onions,
              green pepper and a hit of scotch bonnet. It&apos;s the food of celebration, of late nights and big games.
            </p>
            <p className="leading-relaxed text-[#a39c8e]">
              Everything is home made to order in small batches. No factory line, no shortcuts — just bold flavour,
              cooked with pride and packed hot for you.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
              {STATS.map(([big, small]) => (
                <div key={small}>
                  <p className={`${DISPLAY} text-3xl text-[#c99a3b]`}>{big}</p>
                  <p className={`${COND} mt-1 text-xs tracking-widest text-[#a39c8e]`}>{small}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* MENU HIGHLIGHTS */}
      <section className="bg-[#16140f] py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <Reveal>
              <div className="mb-4">
                <Eyebrow>From the grill</Eyebrow>
              </div>
              <h2 className={`${DISPLAY} text-4xl text-[#f3efe6] md:text-5xl`}>Order favourites</h2>
            </Reveal>
            <Link href={`${BASE}/prices`} className={`${COND} tracking-widest text-[#c99a3b] transition-colors hover:text-[#e2bb6b]`}>
              Full price list →
            </Link>
          </div>

          {/* Horizontal scroll on mobile, grid on desktop */}
          <div
            data-bn-stagger
            className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 [-ms-overflow-style:none] [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 [&::-webkit-scrollbar]:hidden"
          >
            {HIGHLIGHTS.map((item) => (
              <div key={item.name} className="flex w-[78%] shrink-0 snap-start flex-col sm:w-[60%] md:w-auto">
                {/* No container box, border or gloss — the sheet floats on the page */}
                <div className="relative aspect-square">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.img}
                    alt={item.name}
                    className="absolute inset-0 h-full w-full object-contain drop-shadow-[0_18px_26px_rgba(0,0,0,0.45)]"
                  />
                </div>
                <div className="pt-4">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className={`${COND} text-2xl text-[#f3efe6]`}>{item.name}</h3>
                    <span className={`${DISPLAY} text-2xl text-[#c99a3b]`}>{item.price}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[#a39c8e]">{item.blurb}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MATCHDAY SPECIAL */}
      <section className="relative overflow-hidden py-20 md:py-28">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${BASE}/plate-dark.png`} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-[#0c0b0a]/80" />
        <div className="relative mx-auto max-w-[1200px] px-5">
          <Reveal className="max-w-2xl">
            <div className="mb-5">
              <Eyebrow>{MATCHDAY.badge} · {MATCHDAY.date}</Eyebrow>
            </div>
            <h2 className={`${DISPLAY} mb-5 text-5xl text-[#f3efe6] md:text-7xl`}>{MATCHDAY.title}</h2>
            <p className="mb-3 text-lg leading-relaxed text-[#f3efe6]/80">{MATCHDAY.body}</p>
            <p className={`${COND} mb-8 tracking-widest text-[#c99a3b]`}>{MATCHDAY.cutoff}</p>
            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${SITE.phone}`}
                className={`${COND} bg-[#c99a3b] px-7 py-3.5 text-base tracking-widest text-[#0c0b0a] transition-colors hover:bg-[#e2bb6b] md:text-lg`}
                style={{ clipPath: CUT_TL }}
              >
                Pre-order Now
              </a>
              <Link
                href={`${BASE}/contact`}
                className={`${COND} border border-[#f3efe6]/30 px-7 py-3.5 text-base tracking-widest text-[#f3efe6] transition-colors hover:border-[#c99a3b] hover:text-[#c99a3b] md:text-lg`}
              >
                Send an Order
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INSTAGRAM STRIP */}
      <section className="border-t border-white/10 bg-[#0c0b0a] py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-5">
          <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="mb-3">
                <Eyebrow>On the grill, daily</Eyebrow>
              </div>
              <h2 className={`${DISPLAY} text-3xl text-[#f3efe6] md:text-4xl`}>
                Follow{" "}
                <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="text-[#c99a3b] hover:text-[#e2bb6b]">
                  {SITE.instagramHandle}
                </a>
              </h2>
            </div>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={`${COND} shrink-0 border border-[#f3efe6]/30 px-6 py-3 tracking-widest text-[#f3efe6] transition-colors hover:border-[#c99a3b] hover:text-[#c99a3b]`}
            >
              View Instagram →
            </a>
          </Reveal>
          <div data-bn-stagger className="grid grid-cols-3 gap-3 md:gap-5">
            {IG_IMAGES.map((src, i) => (
              <a
                key={src}
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden"
                style={{ clipPath: i % 2 ? CUT_BR : CUT_TL }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt="Bobs Ntaba on Instagram"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-[#0c0b0a]/0 transition-colors group-hover:bg-[#0c0b0a]/30" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
