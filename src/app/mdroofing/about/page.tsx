import type { Metadata } from "next";
import Link from "next/link";
import { IMG, ACCREDS, CUT_BL, GRID_BG, Label, Arrow, PageHero, btnYellow } from "../brand";
import { MDFX } from "../MDFX";

/* eslint-disable @next/next/no-img-element */

export const metadata: Metadata = {
  title: "About",
  description:
    "About M&D Roofing & Landscaping — established in 1990 and grown into one of the UK's premier paving contractors, carrying out commercial paving contracts nationwide alongside roofing and landscaping for homeowners.",
};

const VALUES = [
  { t: "35+ years", b: "Established in 1990 — over three decades building roofs, drives and gardens that last." },
  { t: "Directly employed", b: "Our own gangs, vehicles and modern plant. Your job never gets sub-let to someone else." },
  { t: "Approved & guaranteed", b: "An approved sub-contractor to major builders, with a 5-year guarantee as standard." },
  { t: "Nationwide", b: "Commercial and domestic projects the length and breadth of the country." },
];

const REVIEWS = [
  { q: "New driveway laid start to finish in two days — tidy, professional and exactly the pattern we picked.", n: "Helen R." },
  { q: "Re-roofed the whole house and sorted the guttering. Fair price and a proper job, no mess left behind.", n: "David M." },
  { q: "Patio, walls and fencing all done by the same team. Great communication and a brilliant finish.", n: "S. Okafor" },
];

const AREAS = ["London", "Birmingham", "Manchester", "Leeds", "Bristol", "Liverpool", "Newcastle", "Glasgow"];

export default function MDAbout() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Since 1990"
        intro="M&D Roofing & Landscaping has grown from a local firm into one of the UK's premier paving contractors — carrying out commercial contracts nationwide while still looking after homeowners job by job."
        img={IMG.landscaping}
        imgAlt="Landscaped garden by M&D Roofing & Landscaping"
      />

      {/* Story */}
      <section className="bg-white" style={GRID_BG}>
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24 lg:gap-16">
          <div className="relative overflow-hidden" data-reveal style={{ clipPath: CUT_BL }}>
            <img src={IMG.builders} alt="The M&D team on site" data-parallax className="aspect-[4/5] w-full scale-110 object-cover" />
          </div>
          <div data-reveal>
            <Label>Who we are</Label>
            <h2 className="mt-5 text-3xl font-bold uppercase leading-[0.98] tracking-tight md:text-[2.9rem]">Built on doing the job properly.</h2>
            <div className="mt-6 space-y-4 text-lg font-light text-slate-600">
              <p>
                Established in 1990, M&amp;D Roofing &amp; Landscaping has developed into one of the UK&apos;s premier
                paving contractors, carrying out commercial paving contracts nationwide.
              </p>
              <p>
                We hold strong relationships with main contractors and are an approved sub-contractor for major
                building companies — providing a complete service with directly employed gangs, company vehicles and
                modern plant. Every installer is trained in full health &amp; safety documentation.
              </p>
              <p>
                Alongside the commercial work, we look after homeowners too: roofing, block paving, patios, fencing and
                full landscaping — finished to the same standard and backed by our 5-year guarantee.
              </p>
            </div>
            <Link href="/mdroofing/services" className={`${btnYellow} mt-8`}>Our services <Arrow /></Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#1a3a2a] text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-white/10 md:grid-cols-4" data-stagger>
          {[
            { v: "35", s: "+", l: "Years in business" },
            { v: "5", s: "yr", l: "Guarantee as standard" },
            { v: "40", s: "+", l: "Paving options" },
            { v: "100", s: "%", l: "Directly employed" },
          ].map((st) => (
            <div key={st.l} className="bg-[#1a3a2a] p-7 text-center md:p-10">
              <p className="text-4xl font-bold tracking-tight text-[#86c98e] md:text-5xl" data-count={st.v} data-suffix={st.s}>0{st.s}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-white/55">{st.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-white" style={GRID_BG}>
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl" data-reveal>
            <Label>What we stand for</Label>
            <h2 className="mt-5 text-3xl font-bold uppercase leading-[0.98] tracking-tight md:text-5xl">How we work.</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4" data-stagger>
            {VALUES.map((v) => (
              <div key={v.t} className="border-t-2 border-[#3f8f47] bg-white pt-5">
                <h3 className="text-lg font-bold uppercase tracking-tight text-[#1a3a2a]">{v.t}</h3>
                <p className="mt-2 font-light text-slate-600">{v.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust badges + areas */}
      <section className="bg-[#f3f6f1]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div data-reveal>
              <Label>Why us</Label>
              <h2 className="mt-5 text-3xl font-bold uppercase leading-[0.98] tracking-tight md:text-4xl">Approved &amp; trusted.</h2>
              <div className="mt-8 grid grid-cols-2 border border-[#1a3a2a]/15 bg-white">
                {ACCREDS.map((a) => (
                  <div key={a} className="flex flex-col gap-3 border-b border-r border-[#1a3a2a]/10 p-6 odd:border-r [&:nth-child(n+3)]:border-b-0">
                    <span className="h-2.5 w-2.5 bg-[#3f8f47]" aria-hidden />
                    <p className="text-sm font-bold uppercase tracking-wide text-[#1a3a2a]">{a}</p>
                  </div>
                ))}
              </div>
            </div>
            <div data-reveal>
              <Label>Where we work</Label>
              <h2 className="mt-5 text-3xl font-bold uppercase leading-[0.98] tracking-tight md:text-4xl">Nationwide coverage.</h2>
              <div className="mt-8 grid grid-cols-2 gap-x-8">
                {[AREAS.slice(0, 4), AREAS.slice(4)].map((col, ci) => (
                  <div key={ci} className="flex flex-col divide-y divide-[#1a3a2a]/10 border-y border-[#1a3a2a]/15">
                    {col.map((c) => (
                      <div key={c} className="flex items-center gap-3 py-4">
                        <span className="h-2 w-2 shrink-0 bg-[#3f8f47]" aria-hidden />
                        <p className="text-base font-bold uppercase tracking-wide text-[#1a3a2a]">{c}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm font-light text-slate-500">…and everywhere in between — commercial &amp; domestic, UK-wide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl" data-reveal>
            <Label>What clients say</Label>
            <h2 className="mt-5 text-3xl font-bold uppercase leading-[0.98] tracking-tight md:text-5xl">What our customers say.</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-3 sm:gap-6" data-stagger>
            {REVIEWS.map((r) => (
              <figure key={r.n} className="flex flex-col border border-[#1a3a2a]/15 bg-[#f3f6f1] p-7">
                <span className="text-4xl leading-none text-[#3f8f47]" aria-hidden>&ldquo;</span>
                <blockquote className="mt-2 flex-1 font-light text-slate-700">{r.q}</blockquote>
                <figcaption className="mt-5 border-t border-[#1a3a2a]/10 pt-4 text-sm font-bold uppercase tracking-wide text-[#1a3a2a]">{r.n}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <MDFX />
    </>
  );
}
