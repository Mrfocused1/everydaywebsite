import type { Metadata } from "next";
import Link from "next/link";
import { IMG, COLORS, fd, Label, Arrow, PageHero, btnRed, btnGhostLight, PHONE_TEL, PHONE_DISPLAY } from "../brand";
import { PAFX } from "../PAFX";

/* eslint-disable @next/next/no-img-element */

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Our work — custom DTF printing by Print Attack UK in Brentwood. Full-colour tees, event prints, hi-vis uniforms for GNS Communications, branded workwear, sweatshirts and tracksuits.",
};

const WORK: { src: string; alt: string }[] = [
  { src: IMG.teeGraphic, alt: "Full-colour DTF printed t-shirt" },
  { src: IMG.hivis, alt: "GNS Communications hi-vis uniform printed by Print Attack UK" },
  { src: IMG.teeEvent, alt: "Family reunion event t-shirts" },
  { src: IMG.teeCrest, alt: "Left-chest logo crest t-shirt" },
  { src: IMG.teeWorkwear, alt: "Branded business workwear t-shirt" },
  { src: IMG.teeCream, alt: "Custom slogan t-shirt on cream" },
  { src: IMG.sweatshirt, alt: "Branded crest sweatshirt" },
  { src: IMG.tracksuit, alt: "Custom branded tracksuit" },
];

export default function PAWork() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Printed in Brentwood."
        intro="A look at the custom garments and uniforms we've printed — from full-colour tees to business hi-vis."
        img={IMG.heroWork}
        imgAlt="A rack of custom printed t-shirts"
      />

      {/* Featured — GNS Communications */}
      <section className="bg-[#0e0e10] text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-20 lg:gap-16">
          <div className="relative overflow-hidden" data-reveal>
            <img src={IMG.hivis} alt="GNS Communications hi-vis uniform printed by Print Attack UK" className="aspect-[4/3] w-full object-cover" />
            <AccentLine />
          </div>
          <div data-reveal>
            <Label onDark>Featured job</Label>
            <h2 className={`mt-5 ${fd} text-3xl uppercase leading-[0.95] tracking-tight md:text-[2.8rem]`}>GNS Communications uniform.</h2>
            <p className="mt-5 text-lg font-light text-white/70">
              A full uniform run for GNS Communications — 60 hi-vis jackets and 40 t-shirts, branded and ready for the
              team. Exactly the kind of bulk workwear order DTF is built for.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold uppercase tracking-wider text-white/60">
              <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-[#FFC400]" aria-hidden /> 60 Hi-Vis</span>
              <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-[#EC008C]" aria-hidden /> 40 T-Shirts</span>
              <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-[#00AEEF]" aria-hidden /> Full uniform</span>
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
            <Link href="/printattack/contact#quote" className={btnRed}>Get a quote <Arrow /></Link>
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
