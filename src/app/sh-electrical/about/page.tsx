import type { Metadata } from "next";
import Link from "next/link";
import { IMG, ACCREDS, CUT_BL, GRID_BG, Label, Arrow, PageHero, btnYellow } from "../brand";
import { SHFX } from "../SHFX";

/* eslint-disable @next/next/no-img-element */

export const metadata: Metadata = {
  title: "About",
  description:
    "About SH Electrical Mcr Ltd — a family-run, NAPIT-approved electrician based in Manchester with over 30 years of experience, covering homes and businesses across Greater Manchester.",
};

const VALUES = [
  { t: "Family-run", b: "A small, family business — friendly and easy-going, with the same people from quote to completion." },
  { t: "Safe & certified", b: "NAPIT-approved work, certified to Part P and left compliant. No shortcuts." },
  { t: "Honest & easy", b: "Free, clear quotations and fair rates. Professional, but never pushy." },
  { t: "Local & reliable", b: "Based in Manchester — we turn up when we say and stand behind our work." },
];

const REVIEWS = [
  { q: "They were professional, on time and explained everything clearly before starting the work.", n: "Sophie" },
  { q: "Any time I call these guys for a job they are very timely and get it done with extensive attention to detail.", n: "C Graham" },
  { q: "The work was carried out promptly and to a very high standard.", n: "S Tweedale" },
];

const AREAS = ["Manchester", "Salford", "Stockport", "Trafford", "Sale", "Altrincham", "Wilmslow", "Bolton"];

export default function SHAbout() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A family firm"
        intro="SH Electrical Mcr Ltd — a family-run, NAPIT-approved electrician serving Manchester and Greater Manchester with over 30 years' experience."
        img={IMG.about}
        imgAlt="SH Electrical kitchen lighting installation"
      />

      {/* Story */}
      <section className="bg-white" style={GRID_BG}>
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24 lg:gap-16">
          <div className="relative overflow-hidden" data-reveal style={{ clipPath: CUT_BL }}>
            <img src={IMG.about2} alt="Electrician working on a consumer unit" data-parallax className="aspect-[4/5] w-full scale-110 object-cover" />
          </div>
          <div data-reveal>
            <Label>Who we are</Label>
            <h2 className="mt-5 text-3xl font-bold uppercase leading-[0.98] tracking-tight md:text-[2.9rem]">Built on doing the job properly.</h2>
            <div className="mt-6 space-y-4 text-lg font-light text-slate-600">
              <p>
                SH Electrical Mcr Ltd is a small, family-run business based in Manchester. With over 30 years of
                experience, we&apos;re proud to look after homes and businesses right across Greater Manchester.
              </p>
              <p>
                From domestic rewires and consumer unit upgrades to lighting, renovations and commercial installations —
                we&apos;re NAPIT approved, so every job is certified, compliant and left safe.
              </p>
              <p>
                We&apos;re friendly and easy-going, but professional and reliable: tidy work, clear pricing, and there
                when you need us.
              </p>
            </div>
            <Link href="/sh-electrical/services" className={`${btnYellow} mt-8`}>Our services <Arrow /></Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#16225e] text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-white/10 md:grid-cols-4" data-stagger>
          {[
            { v: "30", s: "+", l: "Years experience" },
            { v: "5", s: "★", l: "Customer rated" },
            { v: "12", s: "+", l: "Areas covered" },
            { v: "100", s: "%", l: "Certified work" },
          ].map((st) => (
            <div key={st.l} className="bg-[#16225e] p-7 text-center md:p-10">
              <p className="text-4xl font-bold tracking-tight text-[#5cb8ef] md:text-5xl" data-count={st.v} data-suffix={st.s}>0{st.s}</p>
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
              <div key={v.t} className="border-t-2 border-[#1f8fd6] bg-white pt-5">
                <h3 className="text-lg font-bold uppercase tracking-tight text-[#16225e]">{v.t}</h3>
                <p className="mt-2 font-light text-slate-600">{v.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations + areas */}
      <section className="bg-[#f7f8fc]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div data-reveal>
              <Label>Accredited</Label>
              <h2 className="mt-5 text-3xl font-bold uppercase leading-[0.98] tracking-tight md:text-4xl">Qualified &amp; approved.</h2>
              <div className="mt-8 grid grid-cols-2 border border-[#16225e]/15 bg-white">
                {ACCREDS.map((a) => (
                  <div key={a} className="flex flex-col gap-3 border-b border-r border-[#16225e]/10 p-6 odd:border-r [&:nth-child(n+3)]:border-b-0">
                    <span className="h-2.5 w-2.5 bg-[#1f8fd6]" aria-hidden />
                    <p className="text-sm font-bold uppercase tracking-wide text-[#16225e]">{a}</p>
                  </div>
                ))}
              </div>
            </div>
            <div data-reveal>
              <Label>Where we work</Label>
              <h2 className="mt-5 text-3xl font-bold uppercase leading-[0.98] tracking-tight md:text-4xl">Areas we cover.</h2>
              <div className="mt-8 grid grid-cols-2 gap-x-8">
                {[AREAS.slice(0, 4), AREAS.slice(4)].map((col, ci) => (
                  <div key={ci} className="flex flex-col divide-y divide-[#16225e]/10 border-y border-[#16225e]/15">
                    {col.map((c) => (
                      <div key={c} className="flex items-center gap-3 py-4">
                        <span className="h-2 w-2 shrink-0 bg-[#1f8fd6]" aria-hidden />
                        <p className="text-base font-bold uppercase tracking-wide text-[#16225e]">{c}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm font-light text-slate-500">…and the surrounding Greater Manchester &amp; Cheshire areas.</p>
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
              <figure key={r.n} className="flex flex-col border border-[#16225e]/15 bg-[#f7f8fc] p-7">
                <span className="text-4xl leading-none text-[#1f8fd6]" aria-hidden>&ldquo;</span>
                <blockquote className="mt-2 flex-1 font-light text-slate-700">{r.q}</blockquote>
                <figcaption className="mt-5 border-t border-[#16225e]/10 pt-4 text-sm font-bold uppercase tracking-wide text-[#16225e]">{r.n}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <SHFX />
    </>
  );
}
