import type { Metadata } from "next";
import Link from "next/link";
import { IMG, ACCREDS, CUT_BL, GRID_BG, Label, Arrow, PageHero, btnYellow } from "../brand";
import { BurgessFX } from "../BurgessFX";

/* eslint-disable @next/next/no-img-element */

export const metadata: Metadata = {
  title: "About",
  description:
    "About R Burgess Electrical Contractors Ltd — a family-run, NICEIC-approved electrical firm based in East London since 2002, with over 30 years of industry experience.",
};

const VALUES = [
  { t: "Family-run", b: "A small, family business — you get the same people, accountable from quote to completion." },
  { t: "Safe & certified", b: "NICEIC-approved work, certified properly and left compliant. No shortcuts." },
  { t: "Honest pricing", b: "Free, clear quotations and affordable rates. What we quote is what you pay." },
  { t: "Local & reliable", b: "Rooted in East London — we turn up when we say and stand behind our work." },
];

const REVIEWS = [
  { q: "From the first to the last, Mark was completely superb. Friendly and professional and efficient.", n: "Paula Turk" },
  { q: "No hesitation in recommending this family business. Professional job with excellent thoughtful old-fashioned customer service.", n: "Caroline Mayne" },
  { q: "First class service, and very affordable.", n: "Brian Peters" },
];

export default function BurgessAbout() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A family firm"
        intro="R Burgess Electrical Contractors Ltd — a family-run, NICEIC-approved electrical business serving East London and the wider community since 2002."
        img={IMG.about}
        imgAlt="Burgess electrician organising wiring"
      />

      {/* Story */}
      <section className="bg-white" style={GRID_BG}>
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24 lg:gap-16">
          <div className="relative overflow-hidden" data-reveal style={{ clipPath: CUT_BL }}>
            <img src={IMG.about2} alt="Electrician at work" data-parallax className="aspect-[4/5] w-full scale-110 object-cover" />
          </div>
          <div data-reveal>
            <Label>Who we are</Label>
            <h2 className="mt-5 text-3xl font-bold uppercase leading-[0.98] tracking-tight md:text-[2.9rem]">Built on doing the job properly.</h2>
            <div className="mt-6 space-y-4 text-lg font-light text-slate-600">
              <p>
                R Burgess Electrical Contractors Ltd is a small-to-medium family business based in East London. Founded
                in 2002, we&apos;re proud to support the local and wider community for all of their electrical needs.
              </p>
              <p>
                Between us we bring over 30 years of experience in the electrical engineering industry — from domestic
                rewires to commercial and industrial installations. As a longstanding NICEIC member, every job is done
                to standard, certified and left safe.
              </p>
              <p>
                We believe in old-fashioned customer service: friendly, professional, tidy, and there when you need us.
              </p>
            </div>
            <Link href="/burgess/services" className={`${btnYellow} mt-8`}>Our services <Arrow /></Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#16225e] text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-white/10 md:grid-cols-4" data-stagger>
          {[
            { v: "2002", l: "Established", count: false },
            { v: "30", s: "+", l: "Years experience", count: true },
            { v: "10", s: "yr", l: "Guarantee", count: true },
            { v: "100", s: "%", l: "Certified work", count: true },
          ].map((st) => (
            <div key={st.l} className="bg-[#16225e] p-7 text-center md:p-10">
              {st.count ? (
                <p className="text-4xl font-bold tracking-tight text-[#ffd400] md:text-5xl" data-count={st.v} data-suffix={st.s || ""}>0{st.s || ""}</p>
              ) : (
                <p className="text-4xl font-bold tracking-tight text-[#ffd400] md:text-5xl">{st.v}</p>
              )}
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
              <div key={v.t} className="border-t-2 border-[#ffd400] bg-white pt-5">
                <h3 className="text-lg font-bold uppercase tracking-tight text-[#16225e]">{v.t}</h3>
                <p className="mt-2 font-light text-slate-600">{v.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations + clients */}
      <section className="bg-[#f7f8fc]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div data-reveal>
              <Label>Accredited</Label>
              <h2 className="mt-5 text-3xl font-bold uppercase leading-[0.98] tracking-tight md:text-4xl">Qualified &amp; approved.</h2>
              <div className="mt-8 grid grid-cols-2 border border-[#16225e]/15 bg-white">
                {ACCREDS.map((a) => (
                  <div key={a} className="flex flex-col gap-3 border-b border-r border-[#16225e]/10 p-6 odd:border-r [&:nth-child(n+3)]:border-b-0">
                    <span className="h-2.5 w-2.5 bg-[#ffd400]" aria-hidden />
                    <p className="text-sm font-bold uppercase tracking-wide text-[#16225e]">{a}</p>
                  </div>
                ))}
              </div>
            </div>
            <div data-reveal>
              <Label>Trusted by</Label>
              <h2 className="mt-5 text-3xl font-bold uppercase leading-[0.98] tracking-tight md:text-4xl">Our clients.</h2>
              <div className="mt-8 flex flex-col divide-y divide-[#16225e]/10 border-y border-[#16225e]/15">
                {["RAAM", "Chigwell Construction", "ELECSA", "Polyteck"].map((c) => (
                  <div key={c} className="flex items-center gap-4 py-5">
                    <span className="h-2.5 w-2.5 bg-[#ffd400]" aria-hidden />
                    <p className="text-lg font-bold uppercase tracking-wide text-[#16225e]">{c}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl" data-reveal>
            <Label>What clients say</Label>
            <h2 className="mt-5 text-3xl font-bold uppercase leading-[0.98] tracking-tight md:text-5xl">Old-fashioned good service.</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-3 sm:gap-6" data-stagger>
            {REVIEWS.map((r) => (
              <figure key={r.n} className="flex flex-col border border-[#16225e]/15 bg-[#f7f8fc] p-7">
                <span className="text-4xl leading-none text-[#ffd400]" aria-hidden>&ldquo;</span>
                <blockquote className="mt-2 flex-1 font-light text-slate-700">{r.q}</blockquote>
                <figcaption className="mt-5 border-t border-[#16225e]/10 pt-4 text-sm font-bold uppercase tracking-wide text-[#16225e]">{r.n}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <BurgessFX />
    </>
  );
}
