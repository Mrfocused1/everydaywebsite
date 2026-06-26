import type { Metadata } from "next";
import Link from "next/link";
import { IMG, CUT_BL, CUT_TR, GRID_BG, Label, Arrow, PageHero, btnYellow, btnGhostLight } from "../brand";
import { PPFX } from "../PPFX";

/* eslint-disable @next/next/no-img-element */

export const metadata: Metadata = {
  title: "Services",
  description:
    "Plastering services from Premier Plastering South Lakes: interior plastering & skimming, external rendering, damp proofing & tanking, lime plaster, dry lining, Venetian polished plaster and micro cement — domestic & commercial across the South Lakes.",
};

const SERVICES = [
  { t: "Plastering & Skimming", img: IMG.skim, cut: CUT_BL, b: "Patching, re-skims and full re-plasters — walls and ceilings left flat, smooth and ready to decorate." },
  { t: "External Rendering", img: IMG.render, cut: null, b: "K-Rend, Weber and Parex render systems — modern silicone and traditional finishes, weatherproof and clean." },
  { t: "Damp Proofing & Tanking", img: IMG.damp, cut: CUT_TR, b: "Basement tanking and damp proofing backed by Sovereign Chemicals — solving damp problems for good." },
  { t: "Lime Plaster & Render", img: IMG.lime, cut: CUT_TR, b: "Traditional, breathable lime plaster and render for older, period and listed buildings." },
  { t: "Dry Lining", img: IMG.drylining, cut: null, b: "Plasterboarding and dry lining for new builds, conversions and renovations — ready to skim." },
  { t: "Thermal & Sound Insulation", img: IMG.detail, cut: CUT_BL, b: "Insulated dry lining to keep rooms warmer and quieter, neatly finished." },
  { t: "Venetian Polished Plaster", img: IMG.venetian, cut: CUT_TR, b: "Venetian marble polished plaster — a smooth, luxurious decorative finish with real depth." },
  { t: "Micro Cement", img: IMG.microcement, cut: null, b: "Italian micro cement — seamless, contemporary polished surfaces for walls, floors and worktops." },
];

const PROCESS = [
  { n: "01", t: "Call", b: "Tell us about the job — we'll talk it through and arrange a look." },
  { n: "02", t: "Quote", b: "A clear, free, no-obligation quotation. No surprises." },
  { n: "03", t: "Plaster", b: "Tidy, careful work — walls prepped, plastered and protected." },
  { n: "04", t: "Finish", b: "Left smooth, clean and ready to decorate." },
];

const AREAS = ["Ulverston", "Barrow", "Furness", "Windermere", "Kendal", "Lancaster", "South Lakes", "North West"];

export default function PPServices() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="What we do"
        intro="Everyday plastering through to specialist render systems and luxury polished finishes — for homes and businesses across Ulverston and the South Lakes."
        img={IMG.worker}
        imgAlt="Plasterer at work on a wall"
      />

      {/* Areas strip */}
      <section className="border-b border-slate-100 bg-[#16293c] py-6 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 md:flex-row md:gap-8 md:px-8">
          <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.25em] text-white/50">Covering</span>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-bold uppercase tracking-wide">
            {AREAS.map((c) => (
              <span key={c} className="text-white/85">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-white" style={GRID_BG}>
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl" data-reveal>
            <Label>What we offer</Label>
            <h2 className="mt-5 text-3xl font-bold uppercase leading-[0.98] tracking-tight md:text-5xl">From a re-skim to polished plaster.</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3" data-stagger>
            {SERVICES.map((s, i) => (
              <article key={s.t} className="flex flex-col border border-[#16293c]/15 bg-white">
                <div className="relative overflow-hidden" style={s.cut ? { clipPath: s.cut } : undefined}>
                  <img src={s.img} alt={s.t} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                  <span className="absolute left-0 top-0 bg-[#ff5e3c] px-3 py-1.5 text-sm font-bold text-white">0{i + 1}</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold uppercase tracking-tight text-[#16293c]">{s.t}</h3>
                  <p className="mt-2 text-sm font-light text-slate-600">{s.b}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight panels */}
      <section className="bg-[#f1f5f9]">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24" data-stagger>
          {[
            { t: "Polished Plaster & Micro Cement", img: IMG.venetian, cut: CUT_BL, b: "Venetian marble polished plaster and Italian micro cement — luxury, seamless finishes for feature walls, bathrooms and floors." },
            { t: "Damp Proofing & Tanking", img: IMG.damp, cut: CUT_TR, b: "Sovereign-backed basement tanking and damp proofing — solving damp problems properly, for good." },
          ].map((p) => (
            <article key={p.t} className="group relative overflow-hidden" style={{ clipPath: p.cut }}>
              <img src={p.img} alt={p.t} loading="lazy" className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1c2b]/92 via-[#0e1c2b]/35 to-transparent" />
              <div className="absolute bottom-0 left-0 p-7 text-white md:p-8">
                <h3 className="text-2xl font-bold uppercase tracking-tight">{p.t}</h3>
                <p className="mt-2 max-w-md font-light text-white/80">{p.b}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Trust + process */}
      <section className="bg-white" style={GRID_BG}>
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="grid items-center gap-8 border border-[#16293c]/15 bg-[#16293c] p-8 text-white md:grid-cols-[auto_1fr] md:p-12" data-reveal>
            <p className="text-6xl font-bold leading-none text-[#9ec9ee] md:text-8xl">100<span className="text-2xl md:text-3xl">%</span></p>
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-tight md:text-3xl">Built on quality and recommendation</h2>
              <p className="mt-3 max-w-xl font-light text-white/70">We work to Sovereign Chemicals and Parex render-system standards, and most of our work comes from customers recommending us to others — so every job is done properly and left clean and tidy.</p>
            </div>
          </div>

          <div className="mt-14 max-w-2xl" data-reveal>
            <Label>How it works</Label>
            <h2 className="mt-5 text-3xl font-bold uppercase leading-[0.98] tracking-tight md:text-4xl">Four simple steps.</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" data-stagger>
            {PROCESS.map((p) => (
              <div key={p.n} className="border-t-2 border-[#ff5e3c] pt-5">
                <p className="text-4xl font-bold text-[#16293c]">{p.n}</p>
                <h3 className="mt-3 text-lg font-bold uppercase tracking-tight text-[#16293c]">{p.t}</h3>
                <p className="mt-2 text-sm font-light text-slate-600">{p.b}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-3" data-reveal>
            <Link href="/premierplastering/contact#quote" className={btnYellow}>Get a free quote <Arrow /></Link>
            <Link href="/premierplastering/portfolio" className={btnGhostLight}>View our work</Link>
          </div>
        </div>
      </section>

      <PPFX />
    </>
  );
}
