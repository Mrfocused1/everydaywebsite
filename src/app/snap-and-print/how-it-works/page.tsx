import type { Metadata } from "next";
import Link from "next/link";
import { IMG, COLORS, fd, Label, Arrow, PageHero, btnBlue } from "../brand";
import { SPFX } from "../SPFX";

/* eslint-disable @next/next/no-img-element */

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "How Snap & Print Events works — a roaming photographer snaps your event, prints every shot on-site in seconds, and your guests keep a real photo. Branded borders, unlimited prints, full digital gallery.",
};

const PROCESS = [
  { n: "01", t: "Snap", img: IMG.snap, b: "We arrive early, read the venue and the light, then work the whole event — candids on the dancefloor, posed group shots, the speeches, the send-off. Pro camera, pro eye, no posing queue." },
  { n: "02", t: "Print", img: IMG.print, b: "Each shot is tidied in seconds and sent straight to our on-site printer. Crisp, glossy prints — square or 6×4 — ready to hand over before the moment has even passed." },
  { n: "03", t: "Keep", img: IMG.keep, b: "Guests take home a real photo, not just another file lost in their camera roll. And you get the full edited digital gallery delivered after the event too." },
];

const INCLUDED = [
  "A professional roaming photographer",
  "On-site printer & unlimited prints",
  "Custom branded borders & logos",
  "Square or 6×4 glossy prints",
  "Full digital gallery afterwards",
  "Fast set-up, indoors or out",
];

export default function SPHowItWorks() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="Snap. Print. Keep."
        intro="Three steps, about sixty seconds, and zero queues — here's exactly how the night runs."
        img={IMG.snap}
        imgAlt="The Snap & Print photographer at work"
      />

      {/* Process — alternating rows */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl space-y-14 px-5 py-16 md:space-y-20 md:px-8 md:py-24">
          {PROCESS.map((p, i) => (
            <div key={p.n} className={`grid items-center gap-8 md:grid-cols-2 md:gap-14 ${i % 2 ? "md:[&>figure]:order-2" : ""}`} data-reveal>
              <figure className="relative overflow-hidden">
                <span className="absolute left-0 top-0 z-10 h-1.5 w-full" style={{ background: COLORS[i % COLORS.length] }} aria-hidden />
                <img src={p.img} alt={`${p.t} — Snap & Print Events`} className="aspect-[4/3] w-full object-cover" />
              </figure>
              <div>
                <p className={`${fd} text-6xl leading-none`} style={{ color: COLORS[i % COLORS.length] }}>{p.n}</p>
                <h2 className={`mt-3 ${fd} text-4xl uppercase tracking-tight text-[#0e0e10] md:text-5xl`}>{p.t}</h2>
                <p className="mt-4 text-lg font-light text-slate-600">{p.b}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What's included */}
      <section className="bg-[#f5f5f4]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl" data-reveal>
            <Label>What&apos;s included</Label>
            <h2 className={`mt-5 ${fd} text-4xl uppercase leading-[0.95] tracking-tight md:text-5xl`}>Everything for the night.</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-[#0e0e10]/15 bg-[#0e0e10]/15 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3" data-stagger>
            {INCLUDED.map((m, i) => (
              <div key={m} className="flex items-center gap-4 bg-white p-7">
                <span className={`${fd} text-3xl`} style={{ color: COLORS[i % COLORS.length] }}>{String(i + 1).padStart(2, "0")}</span>
                <span className={`text-base font-medium text-[#0e0e10]`}>{m}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branded prints band */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="relative grid items-center gap-8 overflow-hidden bg-[#FF4D2E] p-8 text-white md:grid-cols-[auto_1fr] md:p-12" data-reveal>
            <p className={`${fd} text-5xl uppercase leading-none md:text-7xl`}>Your<span className="block">brand,<br />kept.</span></p>
            <div>
              <h2 className={`${fd} text-3xl uppercase tracking-tight md:text-4xl`}>Logos, hashtags &amp; custom borders</h2>
              <p className="mt-3 max-w-xl font-light text-white/80">Add your logo, event hashtag or a bespoke border to every print. Your guests carry your brand home and straight onto their socials — a keepsake that markets you for months.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/snap-and-print/contact#book" className={btnBlue}>Book your event <Arrow /></Link>
                <Link href="/snap-and-print/work" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/40 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white/10">See the gallery</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SPFX />
    </>
  );
}
