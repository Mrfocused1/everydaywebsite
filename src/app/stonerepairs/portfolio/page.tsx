/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, PORTFOLIO, MATERIALS, fd, Label, Arrow, btnSolid, IMG } from "../brand";
import { SRFX } from "../SRFX";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "A gallery of real natural stone repairs — marble fireplaces, granite worktops, mosaic floors, statues and staircases restored. Every photo is my own work.",
};

export default function StonePortfolio() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Every photo is my own work."
        intro="A look at real repairs and restorations — marble, granite, limestone, slate and sandstone brought back to life."
        img={IMG.fireplace1}
        imgAlt="Restored marble fireplace"
      />

      {/* Gallery */}
      <section className="bg-[#f4f1ea]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2" data-reveal>
            <Label>The work</Label>
            <span className="text-sm text-[#1a1815]/45">{MATERIALS.join(" · ")}</span>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" data-stagger>
            {PORTFOLIO.map((w) => (
              <figure key={w.src} className="group overflow-hidden rounded-2xl border border-[#1a1815]/10 bg-white">
                <div className="overflow-hidden">
                  <img src={w.src} alt={w.t} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <figcaption className="p-5">
                  <h3 className={`${fd} text-lg font-semibold text-[#1a1815]`}>{w.t}</h3>
                  <p className="mt-1.5 text-sm font-light leading-relaxed text-[#1a1815]/60">{w.b}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#1a1815]/10 bg-[#ece6da]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-14 text-center md:flex-row md:px-8 md:text-left" data-reveal>
          <h2 className={`max-w-xl ${fd} text-2xl font-medium leading-tight tracking-tight text-[#1a1815] md:text-4xl`}>Got a piece that needs the same care?</h2>
          <Link href="/stonerepairs/contact#enquire" data-magnetic className={btnSolid}>Get a quote <Arrow /></Link>
        </div>
      </section>

      <SRFX />
    </>
  );
}
