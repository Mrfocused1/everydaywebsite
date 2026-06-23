import type { Metadata } from "next";
import Link from "next/link";
import { IMG, CLIENTS, fd, Label, Arrow, PageHero, btnRed, btnGhostLight, PHONE_TEL, PHONE_DISPLAY } from "../brand";
import { IBFX } from "../IBFX";

/* eslint-disable @next/next/no-img-element */

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Our work — custom garment printing and branding by Industry Branding in Milton Keynes. T-shirts, hoodies, workwear, caps, embroidery and promotional merch for brands and businesses.",
};

const WORK: { src: string; alt: string }[] = [
  { src: IMG.work1, alt: "Branded garment project" },
  { src: IMG.tees, alt: "Custom printed t-shirts" },
  { src: IMG.hoodies, alt: "Branded hoodies" },
  { src: IMG.embroidery, alt: "Embroidered workwear" },
  { src: IMG.caps, alt: "Embroidered caps" },
  { src: IMG.work2, alt: "Branded garment project" },
  { src: IMG.polos, alt: "Branded polos and workwear" },
  { src: IMG.merch, alt: "Promotional merchandise" },
  { src: IMG.hivis, alt: "Branded hi-vis workwear" },
  { src: IMG.bags, alt: "Printed tote bags" },
  { src: IMG.statement, alt: "Industry Branding lookbook" },
  { src: IMG.about, alt: "In the workshop" },
];

export default function IBWork() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Brands we've kitted out."
        intro="A look at the custom clothing and merch we've printed and embroidered. Your photos here soon."
        img={IMG.work1}
        imgAlt="Industry Branding work"
      />

      {/* Gallery */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl" data-reveal>
            <Label>The lookbook</Label>
            <h2 className={`mt-5 ${fd} text-4xl uppercase leading-[0.95] tracking-tight md:text-5xl`}>Recent work.</h2>
          </div>
          <div data-reveal className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {WORK.map((w) => (
              <figure key={w.alt + w.src} className="group relative aspect-square overflow-hidden bg-[#0e0e10]">
                <img src={w.src} alt={w.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/25" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="bg-[#0e0e10] text-white">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center md:px-8 md:py-20" data-reveal>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/45">Brands we&apos;ve printed for</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {CLIENTS.map((c) => (
              <span key={c} className={`${fd} text-2xl uppercase tracking-tight md:text-4xl`}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-16 text-center md:flex-row md:px-8 md:text-left" data-reveal>
          <h2 className={`${fd} text-3xl uppercase tracking-tight text-[#0e0e10] md:text-4xl`}>Want yours next?</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/industry-branding/contact#quote" className={btnRed}>Get a quote <Arrow /></Link>
            <a href={PHONE_TEL} className={btnGhostLight}>{PHONE_DISPLAY}</a>
          </div>
        </div>
      </section>

      <IBFX />
    </>
  );
}
