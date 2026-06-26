import Link from "next/link";
import {
  IMG, ACCREDS, CUT_BL, GRID_BG, Label, Arrow,
  btnYellow, btnNavy, btnGhostDark, btnGhostLight,
  PHONE_1_TEL, PHONE_1_DISPLAY,
} from "./brand";
import { PPFX } from "./PPFX";

/* eslint-disable @next/next/no-img-element */

const HSCROLL = [
  { t: "Plastering & Skimming", img: IMG.skim, b: "Patching, re-skims and full re-plasters — walls and ceilings left flat, smooth and ready to decorate." },
  { t: "External Rendering", img: IMG.render, b: "K-Rend, Weber and Parex render systems — modern silicone and traditional finishes, weatherproof and clean." },
  { t: "Damp Proofing & Tanking", img: IMG.damp, b: "Basement tanking and damp proofing backed by Sovereign Chemicals — keeping walls dry for good." },
  { t: "Venetian Polished Plaster", img: IMG.venetian, b: "Venetian marble polished plaster — a smooth, luxurious decorative finish with real depth." },
  { t: "Micro Cement", img: IMG.microcement, b: "Italian micro cement — seamless, contemporary polished surfaces for walls, floors and worktops." },
  { t: "Lime Plaster & Render", img: IMG.lime, b: "Traditional, breathable lime plaster and render for older, period and listed buildings." },
];

const REASONS = [
  "Sovereign-approved damp proofing & tanking",
  "Parex, K-Rend & Weber render systems",
  "Lime & heritage plastering specialist",
  "Venetian polished plaster & micro cement",
  "Domestic & commercial work",
  "Free, no-obligation quotations",
];

export default function PPHome() {
  return (
    <>
      {/* ── Hero (full-bleed image) ── */}
      <section className="relative isolate flex min-h-[88vh] items-end overflow-hidden">
        <img src={IMG.hero} alt="Plasterer skimming a wall to a smooth finish" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0c241f]/92 via-[#0c241f]/55 to-[#0c241f]/30" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0c241f]/70 via-transparent to-transparent" />
        <div className="absolute inset-0 -z-10 opacity-50" style={GRID_BG} />
        <div className="mx-auto w-full max-w-6xl px-5 pb-16 pt-32 text-white md:px-8 md:pb-24">
          <div className="max-w-3xl">
            <Label onDark>Plastering · Rendering · Polished Plaster — South Lakes</Label>
            <h1 className="hero-h mt-6 text-[3rem] font-bold uppercase leading-[0.9] tracking-tight md:text-[5rem]">
              <span className="block overflow-hidden"><span className="hero-line-inner block" style={{ transform: "translateY(110%)" }}>Smooth walls.</span></span>
              <span className="block overflow-hidden"><span className="hero-line-inner block" style={{ transform: "translateY(110%)" }}>Flawless</span></span>
              <span className="block overflow-hidden"><span className="hero-line-inner block text-[#21cdbd]" style={{ transform: "translateY(110%)" }}>finish.</span></span>
            </h1>
            <p className="hero-fade mt-7 max-w-xl text-lg font-light text-white/85 opacity-0" style={{ transform: "translateY(8px)" }}>
              For all your plastering solutions in Ulverston and across the South Lakes — interior plastering, rendering,
              damp proofing, Venetian polished plaster and micro cement, for homes and businesses.
            </p>
            <div className="hero-fade mt-9 flex flex-wrap gap-4 opacity-0" style={{ transform: "translateY(8px)" }}>
              <Link href="/premierplastering/contact#quote" className={btnYellow}>Get a free quote <Arrow /></Link>
              <Link href="/premierplastering/portfolio" className={btnGhostDark}>View our work</Link>
            </div>
            <div className="hero-fade mt-10 flex flex-wrap gap-x-7 gap-y-2 border-t border-white/20 pt-6 text-xs font-semibold uppercase tracking-wider opacity-0">
              {["Sovereign Approved", "Parex Render", "Lime Specialist", "Free Quotes"].map((t) => (
                <span key={t} className="flex items-center gap-2 text-white/80"><span className="h-1.5 w-1.5 bg-[#ff5e3c]" aria-hidden /> {t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Intro + trust badges ── */}
      <section className="border-b border-slate-100 bg-[#f1f7f6]" style={GRID_BG}>
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
          <div data-reveal>
            <Label>Premier Plastering South Lakes</Label>
            <h2 className="mt-5 text-3xl font-bold uppercase leading-[0.98] tracking-tight md:text-[2.9rem]">
              For all your plastering<br />solutions.
            </h2>
            <p className="mt-5 text-lg font-light text-slate-600">
              Based in Ulverston, we cover Furness, the South Lakes and the wider North West. From a single ceiling
              re-skim to full renders, traditional lime work and high-end polished finishes — we pride ourselves on the
              quality of our work and the standard of the finish.
            </p>
            <Link href="/premierplastering/about" className={`${btnGhostLight} mt-8`}>About us <Arrow /></Link>
          </div>
          <div className="grid grid-cols-2 border border-[#14332e]/15 bg-white" data-stagger>
            {ACCREDS.map((a) => (
              <div key={a} className="flex flex-col gap-3 border-b border-r border-[#14332e]/10 p-6 last:border-r-0 odd:border-r [&:nth-child(n+3)]:border-b-0 md:p-8">
                <span className="h-2.5 w-2.5 bg-[#ff5e3c]" aria-hidden />
                <p className="text-sm font-bold uppercase tracking-wide text-[#14332e]">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Horizontal-scroll services — GSAP scroll-driven on all sizes ── */}
      <section data-hscroll className="relative bg-[#14332e] text-white">
        <div data-hscroll-pin className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div data-hscroll-track className="flex w-full gap-5 px-5 py-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:gap-7 md:px-[7vw] md:py-0">
            <div className="flex w-[80%] shrink-0 flex-col justify-center pr-2 md:h-[66vh] md:w-[28vw] md:pr-6">
            <Label onDark>What we do</Label>
            <h2 className="mt-5 text-3xl font-bold uppercase leading-[0.95] tracking-tight md:text-[2.7rem]">Plastering, rendering &amp; polished finishes</h2>
            <p className="mt-4 font-light text-white/60">From everyday skims to specialist polished plaster — all to the same high standard.</p>
            <p className="mt-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[#21cdbd]">Scroll <Arrow /></p>
          </div>
          {HSCROLL.map((s, i) => (
            <article key={s.t} className="group relative flex w-[80%] shrink-0 snap-start flex-col justify-end overflow-hidden max-md:aspect-[3/4] md:h-[66vh] md:w-[27vw] lg:w-[23vw]">
              <img src={s.img} alt={s.t} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c241f] via-[#0c241f]/45 to-[#0c241f]/10" />
              <span className="absolute left-5 top-4 text-5xl font-bold text-[#21cdbd]">0{i + 1}</span>
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
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px border-x border-[#14332e]/10 bg-[#14332e]/10 md:grid-cols-4" data-stagger>
          {[
            { v: "8", s: "", l: "Plastering services", count: true },
            { v: "7", s: "+", l: "Towns covered", count: true },
            { v: "2", s: "", l: "Approved render systems", count: true },
            { v: "100", s: "%", l: "Recommendation-led", count: true },
          ].map((st) => (
            <div key={st.l} className="bg-white p-7 text-center md:p-10">
              <p className="text-4xl font-bold tracking-tight text-[#14332e] md:text-5xl" data-count={st.v} data-suffix={st.s || ""}>0{st.s || ""}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-500">{st.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why choose ── */}
      <section className="bg-[#f1f7f6]">
        <div className="mx-auto max-w-6xl px-5 pt-16 md:px-8 md:pt-24">
          <svg viewBox="0 0 1200 50" className="h-8 w-full" fill="none" preserveAspectRatio="none" aria-hidden>
            <path className="draw-line" d="M0 25 H280 L312 6 H540 L572 44 H840 L872 25 H1200" stroke="#ff5e3c" strokeWidth="2.5" />
          </svg>
        </div>
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-10 md:grid-cols-2 md:px-8 md:pb-24 lg:gap-16">
          <div className="relative overflow-hidden" data-reveal style={{ clipPath: CUT_BL }}>
            <img src={IMG.detail} alt="Smooth plaster finish detail" data-parallax className="aspect-[4/3] w-full scale-110 object-cover" />
          </div>
          <div data-reveal>
            <Label>Why Premier</Label>
            <h2 className="mt-5 text-3xl font-bold uppercase leading-[0.98] tracking-tight md:text-[2.9rem]">Quality work. Proper finish.</h2>
            <p className="mt-5 text-lg font-light text-slate-600">
              Our reputation has been built through the quality of our work and customers recommending us to others.
              From everyday plastering to specialist render systems and luxury polished finishes, every job is done
              properly and left clean and tidy.
            </p>
            <ul className="mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {REASONS.map((r) => (
                <li key={r} className="flex items-start gap-3 text-sm font-medium text-[#14332e]">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 bg-[#ff5e3c]" aria-hidden /> {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Approved installer band (real facts, not fabricated reviews) ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="grid items-center gap-8 border border-[#14332e]/15 bg-[#14332e] p-8 text-white md:grid-cols-[1.2fr_1fr] md:p-12" data-reveal>
            <div>
              <Label onDark>Built on recommendation</Label>
              <h2 className="mt-5 text-2xl font-bold uppercase leading-[0.98] tracking-tight md:text-4xl">Approved &amp; trusted systems.</h2>
              <p className="mt-4 max-w-xl font-light text-white/70">
                We work with leading render and damp-proofing systems and finish every job to manufacturer standard — so
                the work lasts, and looks the part.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-px bg-white/10" data-stagger>
              {["Sovereign Chemicals", "Parex Render", "British Gypsum", "K-Rend & Weber"].map((b) => (
                <div key={b} className="flex items-center gap-3 bg-[#14332e] p-5">
                  <span className="h-2 w-2 shrink-0 bg-[#21cdbd]" aria-hidden />
                  <p className="text-sm font-bold uppercase tracking-wide">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-slate-100 bg-[#f1f7f6]" style={GRID_BG}>
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-16 text-center md:flex-row md:px-8 md:text-left" data-reveal>
          <div>
            <h2 className="text-3xl font-bold uppercase tracking-tight text-[#14332e] md:text-4xl">Got a wall that needs sorting?</h2>
            <p className="mt-2 font-light text-slate-600">Free, no-obligation quotes across Ulverston &amp; the South Lakes. Get in touch today.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/premierplastering/contact#quote" className={btnNavy}>Get a quote <Arrow /></Link>
            <a href={PHONE_1_TEL} className={btnGhostLight}>{PHONE_1_DISPLAY}</a>
          </div>
        </div>
      </section>

      <PPFX />
    </>
  );
}
