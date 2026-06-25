import type { Metadata } from "next";
import Link from "next/link";
import { IMG, METHODS, COLORS, fd, Label, Arrow, PageHero, btnBlue } from "../brand";
import { PAFX } from "../PAFX";

/* eslint-disable @next/next/no-img-element */

export const metadata: Metadata = {
  title: "What We Print",
  description:
    "Custom DTF printing and embroidery from Prints Galore in Birmingham — full-colour tees, event & reunion prints, logo & crest tees, embroidered caps and beanies, and custom jackets. Minimum order 6, fast turnaround.",
};

const TEES = [
  { t: "Full-Colour Graphics", img: IMG.teeGraphic, b: "Vivid, full-colour DTF prints — artwork, characters and photo-real designs that really pop." },
  { t: "Event & Reunion Tees", img: IMG.teeEvent, b: "Reunions, birthdays and fundraisers — names, dates and custom wording for the big day." },
  { t: "Logo & Crest Tees", img: IMG.teeCrest, b: "Clean logos, crests and graphics for teams, clubs and businesses." },
  { t: "Caps & Headwear", img: IMG.caps, b: "Embroidered trucker caps, snapbacks and beanies — your logo, clean and crisp." },
  { t: "Jackets & Windbreakers", img: IMG.jacket, b: "Custom-branded windbreakers and jackets — names, numbers and logos for clubs and crews." },
];

const POINTS = ["High-quality DTF", "Any colour", "Minimum order 6", "Bulk pricing"];

export default function PAProducts() {
  return (
    <>
      <PageHero
        eyebrow="What we print"
        title="DTF, your way."
        intro="Custom DTF printing in Birmingham — any design, any colour, minimum order just 6 and a fast turnaround."
        img={IMG.heroProducts}
        imgAlt="Stacks of freshly printed custom t-shirts"
      />

      {/* Garments grid */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl" data-reveal>
            <Label>What we print</Label>
            <h2 className={`mt-5 ${fd} text-4xl uppercase leading-[0.95] tracking-tight md:text-5xl`}>Custom garments, any design.</h2>
            <p className="mt-4 text-sm font-semibold text-slate-400 sm:hidden">Swipe →</p>
          </div>
          <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:mt-14 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 lg:grid-cols-3" data-stagger>
            {TEES.map((p, i) => (
              <article key={p.t} className="group flex w-[80%] shrink-0 snap-start flex-col overflow-hidden bg-white ring-1 ring-[#0e0e10]/12 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_45px_-22px_rgba(0,0,0,0.45)] sm:w-auto">
                <div className="relative overflow-hidden">
                  <img src={p.img} alt={`Custom DTF printed garment — ${p.t}`} loading="lazy" className="aspect-square w-full bg-[#f5f5f4] object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute left-0 top-0 h-1.5 w-full" style={{ background: COLORS[i % COLORS.length] }} aria-hidden />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className={`${fd} text-xl uppercase tracking-tight text-[#0e0e10]`}>{p.t}</h3>
                  <p className="mt-2 text-sm font-light text-slate-600">{p.b}</p>
                  <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1.5">
                    {POINTS.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#0e0e10]" aria-hidden /> {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Methods */}
      <section className="bg-[#f5f5f4]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl" data-reveal>
            <Label>How we print</Label>
            <h2 className={`mt-5 ${fd} text-4xl uppercase leading-[0.95] tracking-tight md:text-5xl`}>What we offer.</h2>
            <p className="mt-5 text-lg font-light text-slate-600">DTF is our speciality — but we&apos;ll always recommend the best finish for your design and budget.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-[#0e0e10]/15 bg-[#0e0e10]/15 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3" data-stagger>
            {METHODS.map((m, i) => (
              <div key={m} className="flex items-center gap-4 bg-white p-7">
                <span className={`${fd} text-3xl`} style={{ color: COLORS[i % COLORS.length] }}>{String(i + 1).padStart(2, "0")}</span>
                <span className={`${fd} text-lg uppercase tracking-tight text-[#0e0e10]`}>{m}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Minimum-order band */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="relative grid items-center gap-8 overflow-hidden bg-[#EC008C] p-8 text-white md:grid-cols-[auto_1fr] md:p-12" data-reveal>
            <p className={`${fd} text-7xl uppercase leading-none md:text-8xl`}>6<span className="block text-xl md:text-2xl">minimum order</span></p>
            <div>
              <h2 className={`${fd} text-3xl uppercase tracking-tight md:text-4xl`}>Six or six hundred</h2>
              <p className="mt-3 max-w-xl font-light text-white/80">Order from just six pieces or kit out a whole team — same high-quality DTF, same fast turnaround.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/printsgalore/contact#quote" className={btnBlue}>Get a quote <Arrow /></Link>
                <Link href="/printsgalore/work" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/40 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white/10">Our work</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PAFX />
    </>
  );
}
