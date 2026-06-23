import Link from "next/link";
import {
  IMG, ACCREDS, CUT_BL, GRID_BG, Label, Arrow,
  btnYellow, btnNavy, btnGhostDark, btnGhostLight,
  PHONE_1_TEL, PHONE_1_DISPLAY,
} from "./brand";
import { BurgessFX } from "./BurgessFX";

/* eslint-disable @next/next/no-img-element */

const HSCROLL = [
  { t: "Rewires & Installations", img: IMG.fusebox, b: "Full and partial rewires, consumer units, sockets and new circuits — domestic, commercial and industrial." },
  { t: "Inspection & Testing", img: IMG.panel, b: "EICRs, electrical certificates and PAT testing to keep your property safe and compliant." },
  { t: "Fire & Emergency Lighting", img: IMG.lighting, b: "Fire-alarm systems, emergency lighting and smoke alarms, designed and installed to standard." },
  { t: "Security Systems", img: IMG.cctv, b: "CCTV, access control and burglar alarms to protect your home or premises." },
  { t: "EV Charging", img: IMG.ev, b: "Home and workplace electric-vehicle charge points, installed by approved electricians." },
  { t: "Solar Panels", img: IMG.solar, b: "Solar PV installation to cut bills and bring clean power to your property." },
];

const REASONS = [
  "Family-run business, established 2002",
  "NICEIC-approved & CHAS-accredited",
  "10-year guarantee on new installations",
  "Over 30 years of combined experience",
  "Domestic, commercial & industrial",
  "24-hour emergency call-out",
];

const REVIEWS = [
  { q: "From the first to the last, Mark was completely superb. Friendly and professional and efficient.", n: "Paula Turk" },
  { q: "No hesitation in recommending this family business. Professional job with excellent thoughtful old-fashioned customer service.", n: "Caroline Mayne" },
  { q: "First class service, and very affordable.", n: "Brian Peters" },
];

export default function BurgessHome() {
  return (
    <>
      {/* ── Hero (full-bleed image) ── */}
      <section className="relative isolate flex min-h-[88vh] items-end overflow-hidden">
        <img src={IMG.hero} alt="Burgess Electrical engineer at work" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0c1230]/92 via-[#0c1230]/55 to-[#0c1230]/25" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0c1230]/70 via-transparent to-transparent" />
        <div className="absolute inset-0 -z-10 opacity-50" style={GRID_BG} />
        <div className="mx-auto w-full max-w-6xl px-5 pb-16 pt-32 text-white md:px-8 md:pb-24">
          <div className="max-w-3xl">
            <Label onDark>NICEIC electrical contractors · East London</Label>
            <h1 className="hero-h mt-6 text-[3rem] font-bold uppercase leading-[0.9] tracking-tight md:text-[5rem]">
              <span className="block overflow-hidden"><span className="hero-line-inner block" style={{ transform: "translateY(110%)" }}>Electrical work</span></span>
              <span className="block overflow-hidden"><span className="hero-line-inner block" style={{ transform: "translateY(110%)" }}>done right —</span></span>
              <span className="block overflow-hidden"><span className="hero-line-inner block text-[#ffd400]" style={{ transform: "translateY(110%)" }}>guaranteed.</span></span>
            </h1>
            <p className="hero-fade mt-7 max-w-xl text-lg font-light text-white/85 opacity-0" style={{ transform: "translateY(8px)" }}>
              A family-run electrical contractor serving East London since 2002 — domestic, commercial and industrial.
              Safe, certified, and backed by a 10-year guarantee.
            </p>
            <div className="hero-fade mt-9 flex flex-wrap gap-4 opacity-0" style={{ transform: "translateY(8px)" }}>
              <Link href="/burgess/contact" className={btnYellow}>Get a free quote <Arrow /></Link>
              <Link href="/burgess/services" className={btnGhostDark}>Our services</Link>
            </div>
            <div className="hero-fade mt-10 flex flex-wrap gap-x-7 gap-y-2 border-t border-white/20 pt-6 text-xs font-semibold uppercase tracking-wider opacity-0">
              {["Est. 2002", "NICEIC Approved", "CHAS Accredited", "10-Year Guarantee"].map((t) => (
                <span key={t} className="flex items-center gap-2 text-white/80"><span className="h-1.5 w-1.5 bg-[#ffd400]" aria-hidden /> {t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Intro + accreditations ── */}
      <section className="border-b border-slate-100 bg-[#f7f8fc]" style={GRID_BG}>
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
          <div data-reveal>
            <Label>R Burgess Electrical Contractors</Label>
            <h2 className="mt-5 text-3xl font-bold uppercase leading-[0.98] tracking-tight md:text-[2.9rem]">
              Trusted East London<br />electricians since 2002.
            </h2>
            <p className="mt-5 text-lg font-light text-slate-600">
              We&apos;re a small, family-run firm that takes on the full range of electrical work — from a single socket
              to a complete commercial installation. Every job is done safely, certified properly and left tidy.
            </p>
            <Link href="/burgess/about" className={`${btnGhostLight} mt-8`}>About the team <Arrow /></Link>
          </div>
          <div className="grid grid-cols-2 border border-[#16225e]/15 bg-white" data-stagger>
            {ACCREDS.map((a) => (
              <div key={a} className="flex flex-col gap-3 border-b border-r border-[#16225e]/10 p-6 last:border-r-0 odd:border-r [&:nth-child(n+3)]:border-b-0 md:p-8">
                <span className="h-2.5 w-2.5 bg-[#ffd400]" aria-hidden />
                <p className="text-sm font-bold uppercase tracking-wide text-[#16225e]">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pinned horizontal-scroll services ── */}
      <section data-hscroll className="relative overflow-hidden bg-[#16225e] text-white md:h-screen">
        <div data-hscroll-track className="flex gap-5 px-5 py-12 max-md:snap-x max-md:snap-mandatory max-md:overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:h-full md:items-center md:gap-7 md:px-[7vw] md:py-0">
          <div className="flex w-[80%] shrink-0 snap-start flex-col justify-center pr-2 max-md:pb-2 md:h-[66vh] md:w-[28vw] md:pr-6">
            <Label onDark>What we do</Label>
            <h2 className="mt-5 text-3xl font-bold uppercase leading-[0.95] tracking-tight md:text-[2.7rem]">A full range of electrical services</h2>
            <p className="mt-4 font-light text-white/60">From a single socket to a full commercial fit-out — every job certified and guaranteed.</p>
            <p className="mt-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[#ffd400]">Scroll <Arrow /></p>
          </div>
          {HSCROLL.map((s, i) => (
            <article key={s.t} className="group relative flex w-[80%] shrink-0 snap-start flex-col justify-end overflow-hidden max-md:aspect-[3/4] md:h-[66vh] md:w-[27vw] lg:w-[23vw]">
              <img src={s.img} alt={s.t} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1230] via-[#0c1230]/45 to-[#0c1230]/10" />
              <span className="absolute left-5 top-4 text-5xl font-bold text-[#ffd400]">0{i + 1}</span>
              <div className="relative p-6 md:p-7">
                <h3 className="text-xl font-bold uppercase tracking-tight">{s.t}</h3>
                <p className="mt-2 text-sm font-light text-white/75">{s.b}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-white" style={GRID_BG}>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px border-x border-[#16225e]/10 bg-[#16225e]/10 md:grid-cols-4" data-stagger>
          {[
            { v: "2002", l: "Established", count: false },
            { v: "30", s: "+", l: "Years experience", count: true },
            { v: "10", s: "yr", l: "Guarantee", count: true },
            { v: "24/7", l: "Emergency call-out", count: false },
          ].map((st) => (
            <div key={st.l} className="bg-white p-7 text-center md:p-10">
              {st.count ? (
                <p className="text-4xl font-bold tracking-tight text-[#16225e] md:text-5xl" data-count={st.v} data-suffix={st.s || ""}>0{st.s || ""}</p>
              ) : (
                <p className="text-4xl font-bold tracking-tight text-[#16225e] md:text-5xl">{st.v}</p>
              )}
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-500">{st.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why choose ── */}
      <section className="bg-[#f7f8fc]">
        <div className="mx-auto max-w-6xl px-5 pt-16 md:px-8 md:pt-24">
          <svg viewBox="0 0 1200 50" className="h-8 w-full" fill="none" preserveAspectRatio="none" aria-hidden>
            <path className="draw-line" d="M0 25 H280 L312 6 H540 L572 44 H840 L872 25 H1200" stroke="#ffd400" strokeWidth="2.5" />
          </svg>
        </div>
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-10 md:grid-cols-2 md:px-8 md:pb-24 lg:gap-16">
          <div className="relative overflow-hidden" data-reveal style={{ clipPath: CUT_BL }}>
            <img src={IMG.about2} alt="Electrician working on a consumer unit" data-parallax className="aspect-[4/3] w-full scale-110 object-cover" />
          </div>
          <div data-reveal>
            <Label>Why Burgess</Label>
            <h2 className="mt-5 text-3xl font-bold uppercase leading-[0.98] tracking-tight md:text-[2.9rem]">Reliable, certified, local.</h2>
            <p className="mt-5 text-lg font-light text-slate-600">
              When you call Burgess you get a qualified, accountable electrician — not a faceless agency. We turn up when
              we say, work cleanly and certify everything we do.
            </p>
            <ul className="mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {REASONS.map((r) => (
                <li key={r} className="flex items-start gap-3 text-sm font-medium text-[#16225e]">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 bg-[#ffd400]" aria-hidden /> {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl" data-reveal>
            <Label>What clients say</Label>
            <h2 className="mt-5 text-3xl font-bold uppercase leading-[0.98] tracking-tight md:text-5xl">Old-fashioned good service.</h2>
            <p className="mt-4 text-sm font-semibold text-slate-400 sm:hidden">Swipe →</p>
          </div>
          <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:mt-14 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:px-0" data-stagger>
            {REVIEWS.map((r) => (
              <figure key={r.n} className="flex w-[82%] shrink-0 snap-start flex-col border border-[#16225e]/15 bg-[#f7f8fc] p-7 sm:w-auto">
                <span className="text-4xl leading-none text-[#ffd400]" aria-hidden>&ldquo;</span>
                <blockquote className="mt-2 flex-1 font-light text-slate-700">{r.q}</blockquote>
                <figcaption className="mt-5 border-t border-[#16225e]/10 pt-4 text-sm font-bold uppercase tracking-wide text-[#16225e]">{r.n}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-slate-100 bg-[#f7f8fc]" style={GRID_BG}>
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-16 text-center md:flex-row md:px-8 md:text-left" data-reveal>
          <div>
            <h2 className="text-3xl font-bold uppercase tracking-tight text-[#16225e] md:text-4xl">Need an electrician?</h2>
            <p className="mt-2 font-light text-slate-600">Free, no-obligation quotes across East London. Get in touch today.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/burgess/contact" className={btnNavy}>Get a quote <Arrow /></Link>
            <a href={PHONE_1_TEL} className={btnGhostLight}>{PHONE_1_DISPLAY}</a>
          </div>
        </div>
      </section>

      <BurgessFX />
    </>
  );
}
