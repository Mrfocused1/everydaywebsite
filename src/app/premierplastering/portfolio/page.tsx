import type { Metadata } from "next";
import Link from "next/link";
import { GALLERY, IMG, GRID_BG, Label, Arrow, PageHero, btnYellow, btnGhostLight, PHONE_1_TEL, PHONE_1_DISPLAY } from "../brand";
import { PPFX } from "../PPFX";

/* eslint-disable @next/next/no-img-element */

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "A portfolio of plastering work by Premier Plastering South Lakes — skimming, external rendering, damp proofing, lime work, Venetian polished plaster and micro cement across the South Lakes.",
};

export default function PPPortfolio() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Our recent work"
        intro="A selection of jobs we've completed across the South Lakes — skimming and re-plasters, external render, damp proofing and high-end polished plaster finishes."
        img={IMG.skim}
        imgAlt="Plastering work by Premier Plastering South Lakes"
      />

      <section className="bg-white" style={GRID_BG}>
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl" data-reveal>
            <Label>Our work</Label>
            <h2 className="mt-5 text-3xl font-bold uppercase leading-[0.98] tracking-tight md:text-5xl">Real jobs, real finishes.</h2>
            <p className="mt-5 text-lg font-light text-slate-600">A selection of our own plastering, rendering and polished-plaster projects — done properly and left clean and tidy.</p>
          </div>

          <div
            data-reveal
            className="mt-10 grid grid-cols-2 gap-3 [grid-auto-flow:dense] [grid-auto-rows:46vw] sm:mt-14 sm:grid-cols-3 sm:gap-4 sm:[grid-auto-rows:215px] lg:grid-cols-4 lg:[grid-auto-rows:235px]"
          >
            {GALLERY.map((g) => (
              <figure
                key={g.src}
                className={`group relative overflow-hidden border border-[#14332e]/10 ${g.big ? "sm:col-span-2 sm:row-span-2" : ""}`}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="pointer-events-none absolute inset-0 bg-[#0c241f]/0 transition-colors duration-300 group-hover:bg-[#0c241f]/15" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-100 bg-[#f1f7f6]" style={GRID_BG}>
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-16 text-center md:flex-row md:px-8 md:text-left" data-reveal>
          <div>
            <h2 className="text-3xl font-bold uppercase tracking-tight text-[#14332e] md:text-4xl">Like what you see?</h2>
            <p className="mt-2 font-light text-slate-600">Tell us about your project — free, no-obligation quotes across the South Lakes.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/premierplastering/contact#quote" className={btnYellow}>Get a free quote <Arrow /></Link>
            <a href={PHONE_1_TEL} className={btnGhostLight}>{PHONE_1_DISPLAY}</a>
          </div>
        </div>
      </section>

      <PPFX />
    </>
  );
}
