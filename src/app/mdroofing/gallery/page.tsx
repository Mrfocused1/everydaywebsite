import type { Metadata } from "next";
import Link from "next/link";
import { GALLERY, IMG, GRID_BG, Label, Arrow, PageHero, btnYellow, btnGhostLight, PHONE_1_TEL, PHONE_1_DISPLAY } from "../brand";
import { MDFX } from "../MDFX";

/* eslint-disable @next/next/no-img-element */

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A gallery of work by M&D Roofing & Landscaping — block-paved driveways, roofing, patios, fencing, garden walls and landscaping projects, commercial and domestic.",
};

export default function MDGallery() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Our recent work"
        intro="A look at projects we've completed across the UK — from block-paved driveways and re-roofs to patios, walls, fencing and full garden landscaping."
        img={IMG.paving}
        imgAlt="Block-paved driveway by M&D Roofing & Landscaping"
      />

      <section className="bg-white" style={GRID_BG}>
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl" data-reveal>
            <Label>Our work</Label>
            <h2 className="mt-5 text-3xl font-bold uppercase leading-[0.98] tracking-tight md:text-5xl">Real jobs, real results.</h2>
            <p className="mt-5 text-lg font-light text-slate-600">A selection of roofing, paving and landscaping projects — built by our own teams and left clean and tidy.</p>
          </div>

          <div
            data-reveal
            className="mt-10 grid grid-cols-2 gap-3 [grid-auto-flow:dense] [grid-auto-rows:46vw] sm:mt-14 sm:grid-cols-3 sm:gap-4 sm:[grid-auto-rows:215px] lg:grid-cols-4 lg:[grid-auto-rows:235px]"
          >
            {GALLERY.map((g) => (
              <figure
                key={g.src}
                className={`group relative overflow-hidden border border-[#1a3a2a]/10 ${g.big ? "sm:col-span-2 sm:row-span-2" : ""}`}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="pointer-events-none absolute inset-0 bg-[#0d1c13]/0 transition-colors duration-300 group-hover:bg-[#0d1c13]/15" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-100 bg-[#f3f6f1]" style={GRID_BG}>
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-16 text-center md:flex-row md:px-8 md:text-left" data-reveal>
          <div>
            <h2 className="text-3xl font-bold uppercase tracking-tight text-[#1a3a2a] md:text-4xl">Like what you see?</h2>
            <p className="mt-2 font-light text-slate-600">Tell us about your project — free, no-obligation quotes, nationwide.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/mdroofing/contact#quote" className={btnYellow}>Get a free quote <Arrow /></Link>
            <a href={PHONE_1_TEL} className={btnGhostLight}>{PHONE_1_DISPLAY}</a>
          </div>
        </div>
      </section>

      <MDFX />
    </>
  );
}
