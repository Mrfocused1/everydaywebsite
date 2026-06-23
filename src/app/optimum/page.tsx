import Link from "next/link";
import { IMG, CUT_BR, Label, pillTeal, pillNavy, pillGhostDark, pillGhostLight, PHONE_TEL, PHONE_DISPLAY } from "./brand";
import { OptimumFX } from "./OptimumFX";

/* eslint-disable @next/next/no-img-element */

const OVERVIEW = [
  { t: "Design & Build", img: IMG.designbuild, b: "Concept, drawings and full construction delivery — from first idea to a finished, handed-over space." },
  { t: "Maintenance", img: IMG.maintenance, b: "Planned and reactive property maintenance that keeps your building running, compliant and cared for." },
  { t: "Management", img: IMG.management, b: "Trades, timelines and budgets managed by one accountable team and a single point of contact." },
];

export default function OptimumHome() {
  return (
    <>
      {/* ── Hero (full-bleed image, text overlaid) ── */}
      <section className="relative isolate flex min-h-[86vh] items-end overflow-hidden">
        <img src={IMG.hero} alt="Optimum Management Group project" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0b1722]/90 via-[#0b1722]/45 to-[#0b1722]/10" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b1722]/55 via-transparent to-transparent" />
        <div className="mx-auto w-full max-w-6xl px-5 pb-16 pt-32 text-white md:px-8 md:pb-24">
          <div className="max-w-2xl">
            <Label onDark>London design, build &amp; management</Label>
            <h1 className="hero-h mt-6 text-[3rem] font-light leading-[1.0] tracking-tight md:text-[4.6rem]">
              <span className="block overflow-hidden"><span className="hero-line-inner block" style={{ transform: "translateY(110%)" }}>Designed, built</span></span>
              <span className="block overflow-hidden"><span className="hero-line-inner block" style={{ transform: "translateY(110%)" }}>and managed</span></span>
              <span className="block overflow-hidden"><span className="hero-line-inner block font-normal text-[#3fe0d4]" style={{ transform: "translateY(110%)" }}>end to end.</span></span>
            </h1>
            <p className="hero-fade mt-7 max-w-lg text-lg font-light text-white/85 opacity-0" style={{ transform: "translateY(8px)" }}>
              Optimum Management Group is a London-based design &amp; build, maintenance and management contractor for
              commercial and residential clients. One team. One point of contact.
            </p>
            <div className="hero-fade mt-9 flex flex-wrap gap-4 opacity-0" style={{ transform: "translateY(8px)" }}>
              <Link href="/optimum/contact" className={pillTeal}>Request a quote</Link>
              <Link href="/optimum/services" className={pillGhostDark}>Our services</Link>
            </div>
            <div className="hero-fade mt-10 flex flex-wrap gap-x-7 gap-y-2 border-t border-white/20 pt-6 text-sm font-medium opacity-0">
              {["Design & Build", "Maintenance", "Management"].map((t) => (
                <span key={t} className="flex items-center gap-2 text-white/85">
                  <span className="h-1.5 w-1.5 bg-[#1dc6ba]" aria-hidden /> {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl" data-reveal>
            <Label>What we do</Label>
            <h2 className="mt-5 text-3xl font-light leading-[1.05] tracking-tight md:text-5xl">A complete service for your property.</h2>
            <p className="mt-5 text-lg font-light text-slate-600">Design, build, maintenance and management — delivered and owned by one team, so nothing falls through the gaps.</p>
            <p className="mt-3 text-sm font-semibold text-slate-400 sm:hidden">Swipe →</p>
          </div>
          <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:mt-14 sm:grid sm:grid-cols-3 sm:gap-8 sm:overflow-visible sm:px-0" data-stagger>
            {OVERVIEW.map((o, i) => (
              <article key={o.t} className="w-[80%] shrink-0 snap-start sm:w-auto">
                <div className="overflow-hidden" style={{ clipPath: i === 1 ? CUT_BR : undefined }}>
                  <img src={o.img} alt={o.t} loading="lazy" className={`aspect-[4/3] w-full object-cover ${i === 1 ? "" : "rounded-xl"}`} />
                </div>
                <h3 className="mt-5 border-t-2 border-[#1dc6ba] pt-4 text-xl font-medium">{o.t}</h3>
                <p className="mt-2 text-slate-600">{o.b}</p>
                <Link href="/optimum/services" className="mt-3 inline-block text-sm font-semibold text-[#2d5a83] hover:text-[#1dc6ba]">Learn more →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── End to end band ── */}
      <section className="bg-[#f1f6f8]">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2">
          <div className="relative overflow-hidden" data-reveal style={{ clipPath: CUT_BR }}>
            <img src={IMG.about} alt="Optimum team planning" data-parallax className="aspect-[4/3] w-full scale-110 object-cover" />
          </div>
          <div data-reveal>
            <Label>One team</Label>
            <h2 className="mt-5 text-3xl font-light leading-[1.05] tracking-tight md:text-5xl">Managed from first drawing to long after handover.</h2>
            <p className="mt-5 text-lg font-light text-slate-600">
              Most projects pass through a chain of separate trades. We bring design, construction, maintenance and
              management under one roof — so you deal with one accountable team that owns the outcome.
            </p>
            <Link href="/optimum/about" className={`${pillGhostLight} mt-8`}>About us</Link>
          </div>
        </div>
      </section>

      {/* ── Sectors ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl" data-reveal>
            <Label>Who we work with</Label>
            <h2 className="mt-5 text-3xl font-light leading-[1.05] tracking-tight md:text-5xl">Commercial &amp; residential.</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2" data-stagger>
            {[
              { t: "Commercial", img: IMG.commercial, b: "Offices, retail and workspaces — fit-outs, refurbishments and maintenance contracts." },
              { t: "Residential", img: IMG.residential, b: "Homes and developments — design-and-build, renovations and reliable upkeep." },
            ].map((s, i) => (
              <article key={s.t} className="group relative overflow-hidden" style={{ clipPath: i === 0 ? "polygon(0 0, 100% 0, 100% 100%, 2.5rem 100%, 0 calc(100% - 2.5rem))" : "polygon(0 0, calc(100% - 2.5rem) 0, 100% 2.5rem, 100% 100%, 0 100%)" }}>
                <img src={s.img} alt={s.t} loading="lazy" className="aspect-[5/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16364f]/85 to-transparent" />
                <div className="absolute bottom-0 left-0 p-7 text-white md:p-8">
                  <h3 className="text-2xl font-medium">{s.t}</h3>
                  <p className="mt-2 max-w-md text-sm font-light text-white/80">{s.b}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-slate-100 bg-[#eef4f6]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-16 text-center md:flex-row md:px-8 md:text-left" data-reveal>
          <div>
            <h2 className="text-3xl font-light tracking-tight text-[#16364f] md:text-4xl">Got a project in mind?</h2>
            <p className="mt-2 font-light text-slate-600">Tell us what you need — we&apos;ll scope it and come back with a clear plan.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/optimum/contact" className={pillNavy}>Request a quote</Link>
            <a href={PHONE_TEL} className={pillGhostLight}>{PHONE_DISPLAY}</a>
          </div>
        </div>
      </section>

      <OptimumFX />
    </>
  );
}
