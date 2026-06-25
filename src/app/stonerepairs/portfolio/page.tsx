/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, PEXELS, PORTFOLIO, PAIRS, MATERIALS, fd, Label, Arrow, btnInk } from "../brand";
import { BeforeAfter } from "../BeforeAfter";
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
        title="Every photo is"
        accent="my own work."
        intro="Real repairs and restorations — marble, granite, limestone, slate and sandstone brought back to life. Drag the sliders to see the difference."
        img={PEXELS.portfolio}
      />

      {/* Before & after sliders */}
      <section className="border-t-2 border-[#15130f] bg-[#eef1f0] text-[#15130f]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <h2 className={`${fd} text-[2.4rem] font-semibold leading-[0.92] tracking-[-0.02em] md:text-5xl`} data-reveal>Drag to <span className="text-[#3f5d5a]">compare.</span></h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2" data-stagger>
            {PAIRS.map((p) => (
              <figure key={p.t}>
                <BeforeAfter before={p.before} after={p.after} className="aspect-[4/3] w-full rounded-2xl" />
                <figcaption className="mt-4">
                  <h3 className={`${fd} text-xl font-semibold`}>{p.t}</h3>
                  <p className="mt-1 text-sm font-light text-[#15130f]/60">{p.b}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-[#ffffff]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2" data-reveal>
            <Label>More work</Label>
            <span className="text-sm text-[#15130f]/45">{MATERIALS.join(" · ")}</span>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" data-stagger>
            {PORTFOLIO.map((w) => (
              <figure key={w.src} className="group overflow-hidden rounded-2xl border-2 border-[#15130f] bg-white shadow-[6px_6px_0_#15130f]">
                <div className="overflow-hidden">
                  <img src={w.src} alt={w.t} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <figcaption className="border-t-2 border-[#15130f] p-5">
                  <h3 className={`${fd} text-lg font-semibold text-[#15130f]`}>{w.t}</h3>
                  <p className="mt-1.5 text-sm font-light leading-relaxed text-[#15130f]/60">{w.b}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t-2 border-[#15130f] bg-[#eef1f0] text-[#15130f]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-16 text-center md:flex-row md:px-8 md:text-left" data-reveal>
          <h2 className={`max-w-xl ${fd} text-[2rem] font-semibold leading-[0.95] tracking-tight md:text-4xl`}>Got a piece that needs the same care?</h2>
          <Link href="/stonerepairs/contact#enquire" data-magnetic className="inline-flex items-center justify-center gap-2 rounded-full bg-[#15130f] px-7 py-3.5 text-sm font-semibold text-[#ffffff] transition-colors hover:bg-[#3f5d5a]">Get a quote <Arrow /></Link>
        </div>
      </section>

      <SRFX />
    </>
  );
}
