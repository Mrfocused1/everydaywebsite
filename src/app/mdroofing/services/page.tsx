import type { Metadata } from "next";
import Link from "next/link";
import { IMG, CUT_BL, CUT_TR, GRID_BG, Label, Arrow, PageHero, btnYellow, btnGhostLight } from "../brand";
import { MDFX } from "../MDFX";

/* eslint-disable @next/next/no-img-element */

export const metadata: Metadata = {
  title: "Services",
  description:
    "Services from M&D Roofing & Landscaping: pitched & flat roofing, block paving & driveways, patios & landscaping, fascias & guttering, chimneys, rendering, fencing and extensions — commercial & domestic, nationwide.",
};

const SERVICES = [
  { t: "Pitched & Flat Roofing", img: IMG.roofing, cut: CUT_BL, b: "Complete and partial re-roofs — slates, tiles, ridges and re-pointing — finished watertight on pitched and flat roofs." },
  { t: "Block Paving & Driveways", img: IMG.paving, cut: null, b: "Driveways laid in block paving with 40+ colour and pattern options, kerbs, steps and edgings." },
  { t: "Patios & Landscaping", img: IMG.patio, cut: CUT_TR, b: "Patios, paths and complete garden landscaping designed and built to suit your space." },
  { t: "Fascias, Soffits & Guttering", img: IMG.fascia, cut: CUT_TR, b: "UPVC fascias, soffits and guttering supplied and fitted — and existing gutters cleared and repaired." },
  { t: "Chimneys & Pointing", img: IMG.chimney, cut: null, b: "Chimney repairs, re-pointing and leadwork to keep the weather where it belongs — outside." },
  { t: "Rendering & Plastering", img: IMG.render, cut: CUT_BL, b: "Rendering, plastering, screeding and exterior painting for a clean, finished look." },
  { t: "Fencing & Concreting", img: IMG.fencing, cut: CUT_TR, b: "Garden fencing, brick walls and concreting — hard landscaping built to last." },
  { t: "Extensions & Refurbishment", img: IMG.extension, cut: null, b: "Roofing and groundwork for extensions, refurbishments and new builds." },
];

const PROCESS = [
  { n: "01", t: "Call", b: "Tell us about the project — we'll talk it through and arrange a site visit." },
  { n: "02", t: "Quote", b: "A clear, free, no-obligation quotation. Fixed price, no surprises." },
  { n: "03", t: "Build", b: "Our directly employed team carries out the work with modern plant." },
  { n: "04", t: "Guarantee", b: "Finished, cleared away and backed by our 5-year guarantee." },
];

const AREAS = ["London", "Birmingham", "Manchester", "Leeds", "Liverpool", "Sheffield", "Bristol", "Newcastle", "Nottingham", "Leicester", "Cardiff", "Glasgow"];

export default function MDServices() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="What we do"
        intro="Roofing, block paving and complete landscaping — a full range of work for homes and commercial sites across the UK, built to last and backed by our guarantee."
        img={IMG.driveway2}
        imgAlt="Block paving driveway by M&D Roofing & Landscaping"
      />

      {/* Areas strip */}
      <section className="border-b border-slate-100 bg-[#1a3a2a] py-6 text-white">
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
            <h2 className="mt-5 text-3xl font-bold uppercase leading-[0.98] tracking-tight md:text-5xl">From a driveway to a full re-roof.</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3" data-stagger>
            {SERVICES.map((s, i) => (
              <article key={s.t} className="flex flex-col border border-[#1a3a2a]/15 bg-white">
                <div className="relative overflow-hidden" style={s.cut ? { clipPath: s.cut } : undefined}>
                  <img src={s.img} alt={s.t} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                  <span className="absolute left-0 top-0 bg-[#3f8f47] px-3 py-1.5 text-sm font-bold text-white">0{i + 1}</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold uppercase tracking-tight text-[#1a3a2a]">{s.t}</h3>
                  <p className="mt-2 text-sm font-light text-slate-600">{s.b}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight panels */}
      <section className="bg-[#f3f6f1]">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24" data-stagger>
          {[
            { t: "Commercial Paving", img: IMG.builders, cut: CUT_BL, b: "Nationwide commercial paving contracts — approved sub-contractor to major building companies, with directly employed gangs and modern plant." },
            { t: "Driveways & Gardens", img: IMG.garden2, cut: CUT_TR, b: "Block-paved driveways, patios, walls and full landscaping to transform your home, inside the boundary and out." },
          ].map((p) => (
            <article key={p.t} className="group relative overflow-hidden" style={{ clipPath: p.cut }}>
              <img src={p.img} alt={p.t} loading="lazy" className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1c13]/92 via-[#0d1c13]/35 to-transparent" />
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
          <div className="grid items-center gap-8 border border-[#1a3a2a]/15 bg-[#1a3a2a] p-8 text-white md:grid-cols-[auto_1fr] md:p-12" data-reveal>
            <p className="text-6xl font-bold leading-none text-[#86c98e] md:text-8xl">5<span className="text-2xl md:text-3xl">yr</span></p>
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-tight md:text-3xl">A 5-year guarantee as standard</h2>
              <p className="mt-3 max-w-xl font-light text-white/70">Established in 1990 and trusted by main contractors nationwide — every project is built by our own teams to a standard we&apos;re happy to stand behind for years.</p>
            </div>
          </div>

          <div className="mt-14 max-w-2xl" data-reveal>
            <Label>How it works</Label>
            <h2 className="mt-5 text-3xl font-bold uppercase leading-[0.98] tracking-tight md:text-4xl">Four simple steps.</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" data-stagger>
            {PROCESS.map((p) => (
              <div key={p.n} className="border-t-2 border-[#3f8f47] pt-5">
                <p className="text-4xl font-bold text-[#1a3a2a]">{p.n}</p>
                <h3 className="mt-3 text-lg font-bold uppercase tracking-tight text-[#1a3a2a]">{p.t}</h3>
                <p className="mt-2 text-sm font-light text-slate-600">{p.b}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-3" data-reveal>
            <Link href="/mdroofing/contact#quote" className={btnYellow}>Get a free quote <Arrow /></Link>
            <Link href="/mdroofing/gallery" className={btnGhostLight}>View our work</Link>
          </div>
        </div>
      </section>

      <MDFX />
    </>
  );
}
