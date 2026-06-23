import type { Metadata } from "next";
import Link from "next/link";
import { IMG, CMYK, fd, Label, Arrow, PageHero, btnRed } from "../brand";
import { BajanFX } from "../BajanFX";

/* eslint-disable @next/next/no-img-element */

export const metadata: Metadata = {
  title: "What We Print",
  description:
    "Everything BajanApple Digital prints: flyers & leaflets, business cards, posters, booklets & brochures, roller banners, stickers & labels, business stationery and magazines — same-day in Leeds & Pudsey.",
};

const PRODUCTS = [
  { t: "Flyers & Leaflets", img: IMG.flyers, points: ["A7 up to A3", "Single or double sided", "Silk, gloss, matt or recycled", "Folded options available"] },
  { t: "Business Cards", img: IMG.cards, points: ["Standard & premium", "Plastic & foiled", "Stainless steel", "Rounded corners"] },
  { t: "Posters", img: IMG.posters, points: ["A4 up to A0", "Indoor & outdoor stocks", "Vivid full colour", "Encapsulation available"] },
  { t: "Booklets & Brochures", img: IMG.brochure, points: ["Stapled or perfect bound", "Portfolios & catalogues", "Any page count", "Matt or gloss lamination"] },
  { t: "Roller Banners", img: IMG.banners, points: ["Roll-up & pull-up", "Exhibition displays", "Replacement graphics", "Set up in seconds"] },
  { t: "Stickers & Labels", img: IMG.stickers, points: ["Paper, polyester & vinyl", "Kiss-cut & die-cut", "Sheets or rolls", "Indoor & outdoor"] },
  { t: "Business Stationery", img: IMG.design, points: ["Letterheads & comp slips", "NCR pads & sets", "Envelopes", "Desk pads & calendars"] },
  { t: "Magazines & Comics", img: IMG.magazines, points: ["Full-colour magazines", "Newsletters", "Comic books", "Event programmes"] },
];

const MATERIALS = ["Silk", "Gloss", "Matt", "Recycled", "Kraft", "Polyester", "Polypropylene"];
const FINISHES = ["Lamination", "Foiling", "Die-cutting", "Binding", "Folding", "Encapsulation"];

export default function BajanProducts() {
  return (
    <>
      <PageHero
        eyebrow="What we print"
        title="If you can design it, we can print it."
        intro="A complete digital print service for business — most products available same-day in Leeds & Pudsey."
        img={IMG.cards}
        imgAlt="Printed business cards"
      />

      {/* Products grid */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl" data-reveal>
            <Label>Our products</Label>
            <h2 className={`mt-5 ${fd} text-3xl font-extrabold leading-[1.02] tracking-tight md:text-5xl`}>Everything, under one roof.</h2>
            <p className="mt-5 text-lg font-light text-slate-600">From a single business card to a full exhibition stand — proofed, printed and finished in-house.</p>
            <p className="mt-4 text-sm font-semibold text-slate-400 sm:hidden">Swipe →</p>
          </div>
          <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:mt-14 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 lg:grid-cols-3" data-stagger>
            {PRODUCTS.map((p, i) => (
              <article key={p.t} className="group flex w-[80%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-[#16223a]/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_45px_-22px_rgba(16,34,58,0.4)] sm:w-auto">
                <div className="relative overflow-hidden">
                  <img src={p.img} alt={p.t} loading="lazy" className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute left-0 top-0 h-1.5 w-full" style={{ background: CMYK[i % 4] }} aria-hidden />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className={`${fd} text-xl font-bold tracking-tight text-[#16223a]`}>{p.t}</h3>
                  <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#306fc7]" aria-hidden /> {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Materials & finishes */}
      <section className="bg-[#f4f6fb]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div data-reveal>
              <Label>Stocks</Label>
              <h2 className={`mt-5 ${fd} text-3xl font-extrabold tracking-tight md:text-4xl`}>Materials.</h2>
              <div className="mt-7 flex flex-wrap gap-3">
                {MATERIALS.map((m) => (
                  <span key={m} className={`${fd} rounded-xl border border-[#16223a]/15 bg-white px-4 py-2.5 text-sm font-bold text-[#16223a]`}>{m}</span>
                ))}
              </div>
            </div>
            <div data-reveal>
              <Label>Print finishing</Label>
              <h2 className={`mt-5 ${fd} text-3xl font-extrabold tracking-tight md:text-4xl`}>Finishes.</h2>
              <div className="mt-7 flex flex-wrap gap-3">
                {FINISHES.map((m) => (
                  <span key={m} className={`${fd} rounded-xl border border-[#16223a]/15 bg-white px-4 py-2.5 text-sm font-bold text-[#16223a]`}>{m}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Express band */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="grid items-center gap-8 rounded-3xl bg-[#0d1530] p-8 text-white md:grid-cols-[auto_1fr] md:p-12" data-reveal>
            <p className={`${fd} text-6xl font-extrabold leading-none text-[#ff5a52] md:text-8xl`}>2–3<span className="block text-xl font-bold md:text-2xl">hours</span></p>
            <div>
              <h2 className={`${fd} text-2xl font-extrabold tracking-tight md:text-3xl`}>Typical same-day turnaround</h2>
              <p className="mt-3 max-w-xl font-light text-white/70">Most orders are ready in 2–3 hours, with 60-minute express available on urgent jobs. Open 6–7 days a week.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/bajan-apple/contact#quote" className={btnRed}>Get a quote <Arrow /></Link>
                <Link href="/bajan-apple/about" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10">About us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BajanFX />
    </>
  );
}
