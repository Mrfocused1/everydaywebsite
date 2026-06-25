import type { Metadata } from "next";
import Link from "next/link";
import { IMG, COLORS, fd, Label, Arrow, PageHero, btnRed, btnGhostLight, PHONE_TEL, PHONE_DISPLAY } from "../brand";
import { PAFX } from "../PAFX";

/* eslint-disable @next/next/no-img-element */

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Our work — custom DTF printing and embroidery by Prints Galore in Birmingham. Full-colour tees, event & reunion prints, logo & crest tees, embroidered caps and beanies, and custom-branded jackets.",
};

const WORK: { src: string; alt: string }[] = [
  { src: IMG.teeGraphic, alt: "Full-colour DTF printed t-shirt" },
  { src: IMG.teeEvent, alt: "Custom event & reunion t-shirt" },
  { src: IMG.teeCrest, alt: "Logo & crest graphic t-shirt" },
  { src: IMG.caps, alt: "Embroidered JK trucker cap" },
  { src: IMG.cap3, alt: "Red JK embroidered trucker cap" },
  { src: IMG.jacket, alt: "Custom-branded yellow windbreaker jacket" },
  { src: IMG.beanie, alt: "Hungry's Cafe patch beanie" },
  { src: IMG.beanie2, alt: "Stockland Green Cafe patch beanie" },
  { src: IMG.cap2, alt: "CapFit embroidered baseball cap" },
];

export default function PAWork() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Printed in Birmingham."
        intro="A look at the custom prints and embroidery we've produced — from full-colour tees and event prints to caps, beanies and branded jackets."
        img={IMG.heroWork}
        imgAlt="A rack of custom printed t-shirts"
      />

      {/* Featured */}
      <section className="bg-[#0e0e10] text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-20 lg:gap-16">
          <div className="relative overflow-hidden" data-reveal>
            <img src={IMG.jacket} alt="Custom-branded windbreaker by Prints Galore" className="aspect-square w-full bg-[#f5f5f4] object-cover" />
            <AccentLine />
          </div>
          <div data-reveal>
            <Label onDark>Featured work</Label>
            <h2 className={`mt-5 ${fd} text-3xl uppercase leading-[0.95] tracking-tight md:text-[2.8rem]`}>Custom-branded, head to toe.</h2>
            <p className="mt-5 text-lg font-light text-white/70">
              From personalised name tees and event prints to embroidered caps, beanies and branded windbreakers —
              we kit out individuals, teams and small businesses across Birmingham and beyond.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold uppercase tracking-wider text-white/60">
              <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-[#FFC400]" aria-hidden /> Tees &amp; Prints</span>
              <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-[#EC008C]" aria-hidden /> Caps &amp; Beanies</span>
              <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-[#00AEEF]" aria-hidden /> Jackets</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl" data-reveal>
            <Label>The lookbook</Label>
            <h2 className={`mt-5 ${fd} text-4xl uppercase leading-[0.95] tracking-tight md:text-5xl`}>Recent work.</h2>
          </div>
          <div data-reveal className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:grid-cols-3 sm:gap-5">
            {WORK.map((w, i) => (
              <figure key={w.alt + w.src} className="group relative aspect-square overflow-hidden bg-[#f5f5f4] ring-1 ring-[#0e0e10]/10">
                <span className="absolute left-0 top-0 z-10 h-1.5 w-full" style={{ background: COLORS[i % COLORS.length] }} aria-hidden />
                <img src={w.src} alt={w.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-16 text-center md:flex-row md:px-8 md:text-left" data-reveal>
          <h2 className={`${fd} text-3xl uppercase tracking-tight text-[#0e0e10] md:text-4xl`}>Want yours next?</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/printsgalorest/contact#quote" className={btnRed}>Get a quote <Arrow /></Link>
            <a href={PHONE_TEL} className={btnGhostLight}>{PHONE_DISPLAY}</a>
          </div>
        </div>
      </section>

      <PAFX />
    </>
  );
}

function AccentLine() {
  return <span className="absolute inset-x-0 bottom-0 flex h-1.5" aria-hidden>{["#FFC400", "#EC008C", "#00AEEF", "#1B1B1B"].map((c) => <span key={c} className="h-full flex-1" style={{ background: c }} />)}</span>;
}
