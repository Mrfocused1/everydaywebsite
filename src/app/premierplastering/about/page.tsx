import type { Metadata } from "next";
import Link from "next/link";
import { IMG, GALLERY, ACCREDS, CUT_BL, GRID_BG, Label, Arrow, PageHero, btnYellow } from "../brand";
import { PPFX } from "../PPFX";

/* eslint-disable @next/next/no-img-element */

export const metadata: Metadata = {
  title: "About",
  description:
    "About Premier Plastering South Lakes — a plastering specialist based in Ulverston, covering Furness, the South Lakes and the North West, with a reputation built on quality work and customer recommendations.",
};

const VALUES = [
  { t: "Quality finish", b: "We pride ourselves on the standard of our work and the finish we leave — flat, smooth and clean." },
  { t: "Specialist finishes", b: "From traditional lime work to Venetian polished plaster and micro cement, not just everyday skims." },
  { t: "Approved systems", b: "Sovereign-backed damp proofing and Parex, K-Rend & Weber render systems, fitted to standard." },
  { t: "Local & trusted", b: "Based in Ulverston and recommended across the South Lakes — most work comes by word of mouth." },
];

const AREAS = ["Ulverston", "Barrow", "Furness", "Windermere", "Kendal", "Lancaster", "South Lakes", "North West"];

export default function PPAbout() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Premier Plastering"
        intro="A plastering specialist based in Ulverston, covering Furness, the South Lakes and the wider North West — for all your plastering solutions, domestic and commercial."
        img={IMG.interior}
        imgAlt="Freshly plastered and finished interior"
      />

      {/* Story */}
      <section className="bg-white" style={GRID_BG}>
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24 lg:gap-16">
          <div className="relative overflow-hidden" data-reveal style={{ clipPath: CUT_BL }}>
            <img src={GALLERY[5].src} alt="Skimmed and finished wall" data-parallax className="aspect-[4/5] w-full scale-110 object-cover" />
          </div>
          <div data-reveal>
            <Label>Who we are</Label>
            <h2 className="mt-5 text-3xl font-bold uppercase leading-[0.98] tracking-tight md:text-[2.9rem]">Plastering done properly.</h2>
            <div className="mt-6 space-y-4 text-lg font-light text-slate-600">
              <p>
                Premier Plastering South Lakes is a plastering specialist based in Ulverston, South Cumbria, serving
                Furness, the South Lakes, Barrow, Windermere, Kendal, Lancaster and the wider North West.
              </p>
              <p>
                We&apos;ve built our reputation on the quality of our work and on customers recommending us to others.
                Whatever the job — a single ceiling re-skim, a full re-plaster, external render or a high-end polished
                finish — we treat it with the same care.
              </p>
              <p>
                As well as everyday plastering, we&apos;re specialists in traditional lime work, Sovereign-backed damp
                proofing and tanking, and luxury Venetian polished plaster and micro cement finishes.
              </p>
            </div>
            <Link href="/premierplastering/services" className={`${btnYellow} mt-8`}>Our services <Arrow /></Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#14332e] text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-white/10 md:grid-cols-4" data-stagger>
          {[
            { v: "8", s: "", l: "Plastering services" },
            { v: "7", s: "+", l: "Towns covered" },
            { v: "2", s: "", l: "Approved render systems" },
            { v: "100", s: "%", l: "Recommendation-led" },
          ].map((st) => (
            <div key={st.l} className="bg-[#14332e] p-7 text-center md:p-10">
              <p className="text-4xl font-bold tracking-tight text-[#21cdbd] md:text-5xl" data-count={st.v} data-suffix={st.s}>0{st.s}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-white/55">{st.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-white" style={GRID_BG}>
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl" data-reveal>
            <Label>What we stand for</Label>
            <h2 className="mt-5 text-3xl font-bold uppercase leading-[0.98] tracking-tight md:text-5xl">How we work.</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4" data-stagger>
            {VALUES.map((v) => (
              <div key={v.t} className="border-t-2 border-[#ff5e3c] bg-white pt-5">
                <h3 className="text-lg font-bold uppercase tracking-tight text-[#14332e]">{v.t}</h3>
                <p className="mt-2 font-light text-slate-600">{v.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust badges + areas */}
      <section className="bg-[#f1f7f6]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div data-reveal>
              <Label>Approved for</Label>
              <h2 className="mt-5 text-3xl font-bold uppercase leading-[0.98] tracking-tight md:text-4xl">Trusted systems.</h2>
              <div className="mt-8 grid grid-cols-2 border border-[#14332e]/15 bg-white">
                {ACCREDS.map((a) => (
                  <div key={a} className="flex flex-col gap-3 border-b border-r border-[#14332e]/10 p-6 odd:border-r [&:nth-child(n+3)]:border-b-0">
                    <span className="h-2.5 w-2.5 bg-[#ff5e3c]" aria-hidden />
                    <p className="text-sm font-bold uppercase tracking-wide text-[#14332e]">{a}</p>
                  </div>
                ))}
              </div>
            </div>
            <div data-reveal>
              <Label>Where we work</Label>
              <h2 className="mt-5 text-3xl font-bold uppercase leading-[0.98] tracking-tight md:text-4xl">Areas we cover.</h2>
              <div className="mt-8 grid grid-cols-2 gap-x-8">
                {[AREAS.slice(0, 4), AREAS.slice(4)].map((col, ci) => (
                  <div key={ci} className="flex flex-col divide-y divide-[#14332e]/10 border-y border-[#14332e]/15">
                    {col.map((c) => (
                      <div key={c} className="flex items-center gap-3 py-4">
                        <span className="h-2 w-2 shrink-0 bg-[#ff5e3c]" aria-hidden />
                        <p className="text-base font-bold uppercase tracking-wide text-[#14332e]">{c}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm font-light text-slate-500">…and the surrounding South Lakes &amp; North West.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialist finishes (real photos) */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl" data-reveal>
            <Label>Our speciality</Label>
            <h2 className="mt-5 text-3xl font-bold uppercase leading-[0.98] tracking-tight md:text-5xl">Polished plaster &amp; micro cement.</h2>
            <p className="mt-5 text-lg font-light text-slate-600">Beyond everyday plastering, we create smooth, seamless decorative finishes — Venetian polished plaster and Italian micro cement for feature walls, bathrooms and floors.</p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-14 sm:grid-cols-4" data-stagger>
            {[GALLERY[1], GALLERY[4], GALLERY[2], GALLERY[16]].map((g) => (
              <figure key={g.src} className="relative aspect-[3/4] overflow-hidden border border-[#14332e]/10">
                <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <PPFX />
    </>
  );
}
