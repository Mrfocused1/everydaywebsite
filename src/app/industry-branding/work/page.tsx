import type { Metadata } from "next";
import Link from "next/link";
import { IMG, COLORS, fd, Label, Arrow, PageHero, btnRed, btnGhostLight, PHONE_TEL, PHONE_DISPLAY } from "../brand";
import { IBFX } from "../IBFX";

/* eslint-disable @next/next/no-img-element */

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Our work — custom garment printing and branding by Industry Branding in Milton Keynes. T-shirts, hoodies, workwear, caps, embroidery and promotional merch for brands and businesses.",
};

const WORK: { src: string; alt: string }[] = [
  { src: "/marketing/ib/ib-tee-whitelogo.jpg", alt: "White t-shirt with custom logo print" },
  { src: "/marketing/ib/ib-tee-blacklogo.jpg", alt: "Black t-shirt with custom logo print" },
  { src: "/marketing/ib/ib-tee-cream.jpg", alt: "Custom graphic-print t-shirt" },
  { src: "/marketing/ib/ib-tee-mario.jpg", alt: "Full-colour Super Mario print t-shirt" },
  { src: "/marketing/ib/ib-tee-rainbow.jpg", alt: "Rainbow print t-shirt" },
  { src: "/marketing/ib/ib-tee-fortnite.jpg", alt: "Fortnite logo print t-shirt" },
  { src: "/marketing/ib/ib-tee-streetwear.jpg", alt: "Streetwear print t-shirt" },
  { src: "/marketing/ib/ib-tee-flatlay.jpg", alt: "Printed apparel flat-lay" },
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
          <div data-reveal className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
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
            <Link href="/industry-branding/contact#quote" className={btnRed}>Get a quote <Arrow /></Link>
            <a href={PHONE_TEL} className={btnGhostLight}>{PHONE_DISPLAY}</a>
          </div>
        </div>
      </section>

      <IBFX />
    </>
  );
}
