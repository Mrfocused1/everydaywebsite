import Link from "next/link";
import {
  IMG, ACCREDS, CUT_BL, GRID_BG, Label, Arrow,
  btnYellow, btnNavy, btnGhostDark, btnGhostLight,
  PHONE_1_TEL, PHONE_1_DISPLAY,
} from "./brand";
import { MDFX } from "./MDFX";

/* eslint-disable @next/next/no-img-element */

const HSCROLL = [
  { t: "Pitched & Flat Roofing", img: IMG.roofing, b: "Complete and partial re-roofs — slates, tiles, ridges and re-pointing, finished watertight." },
  { t: "Block Paving & Driveways", img: IMG.paving, b: "Driveways laid in block paving with 40+ colour and pattern options, kerbs and steps." },
  { t: "Patios & Landscaping", img: IMG.patio, b: "Patios, paths, walls and full garden landscaping to transform your outdoor space." },
  { t: "Fascias, Soffits & Guttering", img: IMG.fascia, b: "UPVC fascias, soffits and guttering supplied, fitted, cleared and repaired." },
  { t: "Chimneys & Pointing", img: IMG.chimney, b: "Chimney repairs, re-pointing and leadwork to keep the weather out." },
  { t: "Rendering & Plastering", img: IMG.render, b: "Rendering, plastering, screeding and exterior painting for a clean, finished look." },
];

const REASONS = [
  "Established in 1990 — over 35 years' experience",
  "Nationwide commercial & domestic paving",
  "Approved sub-contractor for major builders",
  "Directly employed teams & modern plant",
  "5-year guarantee as standard",
  "Free, no-obligation quotations",
];

const REVIEWS = [
  { q: "New driveway laid start to finish in two days — tidy, professional and exactly the pattern we picked. Couldn't be happier.", n: "Helen R." },
  { q: "Re-roofed the whole house and sorted the guttering. Fair price, no mess left behind and a proper job.", n: "David M." },
  { q: "Patio, walls and fencing all done by the same team. Great communication throughout and a brilliant finish.", n: "S. Okafor" },
];

export default function MDHome() {
  return (
    <>
      {/* ── Hero (full-bleed image) ── */}
      <section className="relative isolate flex min-h-[88vh] items-end overflow-hidden">
        <img src={IMG.hero} alt="Completed driveway and house frontage by M&D Roofing & Landscaping" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0d1c13]/92 via-[#0d1c13]/55 to-[#0d1c13]/30" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0d1c13]/70 via-transparent to-transparent" />
        <div className="absolute inset-0 -z-10 opacity-50" style={GRID_BG} />
        <div className="mx-auto w-full max-w-6xl px-5 pb-16 pt-32 text-white md:px-8 md:pb-24">
          <div className="max-w-3xl">
            <Label onDark>Roofing · Paving · Landscaping — Nationwide</Label>
            <h1 className="hero-h mt-6 text-[3rem] font-bold uppercase leading-[0.9] tracking-tight md:text-[5rem]">
              <span className="block overflow-hidden"><span className="hero-line-inner block" style={{ transform: "translateY(110%)" }}>Roofs, drives &amp;</span></span>
              <span className="block overflow-hidden"><span className="hero-line-inner block" style={{ transform: "translateY(110%)" }}>gardens — built</span></span>
              <span className="block overflow-hidden"><span className="hero-line-inner block text-[#86c98e]" style={{ transform: "translateY(110%)" }}>to last.</span></span>
            </h1>
            <p className="hero-fade mt-7 max-w-xl text-lg font-light text-white/85 opacity-0" style={{ transform: "translateY(8px)" }}>
              Established in 1990, M&amp;D Roofing &amp; Landscaping is one of the UK&apos;s premier paving contractors —
              roofing, block paving and complete landscaping for homes and commercial sites nationwide.
            </p>
            <div className="hero-fade mt-9 flex flex-wrap gap-4 opacity-0" style={{ transform: "translateY(8px)" }}>
              <Link href="/mdroofing/contact#quote" className={btnYellow}>Get a free quote <Arrow /></Link>
              <Link href="/mdroofing/gallery" className={btnGhostDark}>View our work</Link>
            </div>
            <div className="hero-fade mt-10 flex flex-wrap gap-x-7 gap-y-2 border-t border-white/20 pt-6 text-xs font-semibold uppercase tracking-wider opacity-0">
              {["Est. 1990", "5-Year Guarantee", "Nationwide", "Free Quotes"].map((t) => (
                <span key={t} className="flex items-center gap-2 text-white/80"><span className="h-1.5 w-1.5 bg-[#3f8f47]" aria-hidden /> {t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Intro + trust badges ── */}
      <section className="border-b border-slate-100 bg-[#f3f6f1]" style={GRID_BG}>
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
          <div data-reveal>
            <Label>M&amp;D Roofing &amp; Landscaping</Label>
            <h2 className="mt-5 text-3xl font-bold uppercase leading-[0.98] tracking-tight md:text-[2.9rem]">
              A premier UK paving<br />contractor since 1990.
            </h2>
            <p className="mt-5 text-lg font-light text-slate-600">
              Over three decades on, we&apos;ve grown into one of the country&apos;s leading paving and roofing contractors —
              carrying out commercial contracts nationwide while still looking after homeowners job by job. Directly
              employed teams, company plant and a 5-year guarantee as standard.
            </p>
            <Link href="/mdroofing/about" className={`${btnGhostLight} mt-8`}>About the company <Arrow /></Link>
          </div>
          <div className="grid grid-cols-2 border border-[#1a3a2a]/15 bg-white" data-stagger>
            {ACCREDS.map((a) => (
              <div key={a} className="flex flex-col gap-3 border-b border-r border-[#1a3a2a]/10 p-6 last:border-r-0 odd:border-r [&:nth-child(n+3)]:border-b-0 md:p-8">
                <span className="h-2.5 w-2.5 bg-[#3f8f47]" aria-hidden />
                <p className="text-sm font-bold uppercase tracking-wide text-[#1a3a2a]">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Horizontal-scroll services — GSAP scroll-driven on all sizes ── */}
      <section data-hscroll className="relative bg-[#1a3a2a] text-white">
        <div data-hscroll-pin className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div data-hscroll-track className="flex w-full gap-5 px-5 py-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:gap-7 md:px-[7vw] md:py-0">
            <div className="flex w-[80%] shrink-0 flex-col justify-center pr-2 md:h-[66vh] md:w-[28vw] md:pr-6">
            <Label onDark>What we do</Label>
            <h2 className="mt-5 text-3xl font-bold uppercase leading-[0.95] tracking-tight md:text-[2.7rem]">Roofing, paving &amp; landscaping</h2>
            <p className="mt-4 font-light text-white/60">From a single driveway to a full re-roof — every job built to last and backed by our guarantee.</p>
            <p className="mt-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[#86c98e]">Scroll <Arrow /></p>
          </div>
          {HSCROLL.map((s, i) => (
            <article key={s.t} className="group relative flex w-[80%] shrink-0 snap-start flex-col justify-end overflow-hidden max-md:aspect-[3/4] md:h-[66vh] md:w-[27vw] lg:w-[23vw]">
              <img src={s.img} alt={s.t} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1c13] via-[#0d1c13]/45 to-[#0d1c13]/10" />
              <span className="absolute left-5 top-4 text-5xl font-bold text-[#86c98e]">0{i + 1}</span>
              <div className="relative p-6 md:p-7">
                <h3 className="text-xl font-bold uppercase tracking-tight">{s.t}</h3>
                <p className="mt-2 text-sm font-light text-white/75">{s.b}</p>
              </div>
            </article>
          ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-white" style={GRID_BG}>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px border-x border-[#1a3a2a]/10 bg-[#1a3a2a]/10 md:grid-cols-4" data-stagger>
          {[
            { v: "35", s: "+", l: "Years in business", count: true },
            { v: "5", s: "yr", l: "Guarantee as standard", count: true },
            { v: "UK", s: "", l: "Nationwide coverage", count: false },
            { v: "100", s: "%", l: "Directly employed", count: true },
          ].map((st) => (
            <div key={st.l} className="bg-white p-7 text-center md:p-10">
              {st.count ? (
                <p className="text-4xl font-bold tracking-tight text-[#1a3a2a] md:text-5xl" data-count={st.v} data-suffix={st.s || ""}>0{st.s || ""}</p>
              ) : (
                <p className="text-3xl font-bold tracking-tight text-[#1a3a2a] md:text-5xl">{st.v}</p>
              )}
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-500">{st.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why choose ── */}
      <section className="bg-[#f3f6f1]">
        <div className="mx-auto max-w-6xl px-5 pt-16 md:px-8 md:pt-24">
          <svg viewBox="0 0 1200 50" className="h-8 w-full" fill="none" preserveAspectRatio="none" aria-hidden>
            <path className="draw-line" d="M0 25 H280 L312 6 H540 L572 44 H840 L872 25 H1200" stroke="#3f8f47" strokeWidth="2.5" />
          </svg>
        </div>
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-10 md:grid-cols-2 md:px-8 md:pb-24 lg:gap-16">
          <div className="relative overflow-hidden" data-reveal style={{ clipPath: CUT_BL }}>
            <img src={IMG.landscaping} alt="Landscaped garden by M&D Roofing & Landscaping" data-parallax className="aspect-[4/3] w-full scale-110 object-cover" />
          </div>
          <div data-reveal>
            <Label>Why M&amp;D</Label>
            <h2 className="mt-5 text-3xl font-bold uppercase leading-[0.98] tracking-tight md:text-[2.9rem]">Built properly. Built to last.</h2>
            <p className="mt-5 text-lg font-light text-slate-600">
              We work with directly employed gangs, our own vehicles and modern plant — your job stays with us from
              start to finish. Every installer is trained in health &amp; safety, and every project is finished to the
              standard that&apos;s kept main contractors coming back to us for over 35 years.
            </p>
            <ul className="mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {REASONS.map((r) => (
                <li key={r} className="flex items-start gap-3 text-sm font-medium text-[#1a3a2a]">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 bg-[#3f8f47]" aria-hidden /> {r}
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
            <h2 className="mt-5 text-3xl font-bold uppercase leading-[0.98] tracking-tight md:text-5xl">Trusted by homeowners &amp; builders.</h2>
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

      {/* ── CTA ── */}
      <section className="border-t border-slate-100 bg-[#f3f6f1]" style={GRID_BG}>
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-16 text-center md:flex-row md:px-8 md:text-left" data-reveal>
          <div>
            <h2 className="text-3xl font-bold uppercase tracking-tight text-[#1a3a2a] md:text-4xl">Planning a project?</h2>
            <p className="mt-2 font-light text-slate-600">Free, no-obligation quotes for roofing, paving and landscaping — nationwide. Get in touch today.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/mdroofing/contact#quote" className={btnNavy}>Get a quote <Arrow /></Link>
            <a href={PHONE_1_TEL} className={btnGhostLight}>{PHONE_1_DISPLAY}</a>
          </div>
        </div>
      </section>

      <MDFX />
    </>
  );
}
