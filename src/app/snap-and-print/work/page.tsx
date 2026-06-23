import type { Metadata } from "next";
import Link from "next/link";
import { IMG, COLORS, fd, Label, Arrow, PageHero, btnRed, btnGhostLight, INSTAGRAM } from "../brand";
import { SPFX } from "../SPFX";

/* eslint-disable @next/next/no-img-element */

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A look at Snap & Print Events — instant event photography and on-site prints from festivals, parties and celebrations. Real moments, printed and kept.",
};

const GALLERY: { src: string; alt: string }[] = [
  { src: IMG.hero, alt: "Festival-goer holding a freshly printed photo at sunset" },
  { src: IMG.friends, alt: "Three friends celebrating together at a festival" },
  { src: IMG.keep, alt: "Guest smiling with her printed photo" },
  { src: IMG.print, alt: "Prints coming straight off the on-site printer" },
  { src: IMG.snap, alt: "The photographer capturing the crowd" },
  { src: IMG.heroMobile, alt: "Festival portrait with an instant print" },
];

export default function SPWork() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Moments, printed."
        intro="A taste of the events we've snapped and printed. Real people, real prints, real keepsakes — more added all the time."
        img={IMG.friends}
        imgAlt="Snap & Print Events gallery"
      />

      {/* Gallery */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl" data-reveal>
            <Label>The reel</Label>
            <h2 className={`mt-5 ${fd} text-4xl uppercase leading-[0.95] tracking-tight md:text-5xl`}>Recent events.</h2>
          </div>
          <div data-reveal className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:grid-cols-3 sm:gap-5">
            {GALLERY.map((w, i) => (
              <figure key={w.alt} className="group relative aspect-square overflow-hidden bg-[#f5f5f4] ring-1 ring-[#0e0e10]/10">
                <span className="absolute left-0 top-0 z-10 h-1.5 w-full" style={{ background: COLORS[i % COLORS.length] }} aria-hidden />
                <img src={w.src} alt={w.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </figure>
            ))}
          </div>
          <p className="mt-8 text-sm font-light text-slate-500" data-reveal>More shots from recent events coming soon — follow along on <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#FF4D2E] underline-offset-4 hover:underline">Instagram</a>.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-16 text-center md:flex-row md:px-8 md:text-left" data-reveal>
          <h2 className={`${fd} text-3xl uppercase tracking-tight text-[#0e0e10] md:text-4xl`}>Want your event in here?</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/snap-and-print/contact#book" className={btnRed}>Book your event <Arrow /></Link>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className={btnGhostLight}>Follow on Instagram</a>
          </div>
        </div>
      </section>

      <SPFX />
    </>
  );
}
