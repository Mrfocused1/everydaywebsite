/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {
  IMG, fd, CUT, Label, Arrow, btnSolid, btnOutline,
  MATERIALS, SERVICES, PROCESS, STATS, PORTFOLIO,
  PHONE_DISPLAY, PHONE_TEL, EMAIL_HREF, WHATSAPP, OWNER,
} from "./brand";
import { SRFX } from "./SRFX";

export default function StoneHome() {
  return (
    <>
      {/* ── Hero: editorial type + one full-bleed image band ── */}
      <section className="bg-[#f4f1ea]">
        <div className="mx-auto max-w-6xl px-5 pb-12 pt-12 md:px-8 md:pb-16 md:pt-20">
          <Label>Natural stone repair &amp; restoration</Label>
          <h1 className={`mt-7 ${fd} text-[3.4rem] font-medium leading-[0.96] tracking-[-0.02em] text-[#1a1815] sm:text-7xl md:text-[6.2rem]`}>
            <span className="block overflow-hidden"><span className="hero-line-inner block" style={{ transform: "translateY(110%)" }}>Bring your stone</span></span>
            <span className="block overflow-hidden"><span className="hero-line-inner block italic" style={{ transform: "translateY(110%)" }}>back to life.</span></span>
          </h1>
          <div className="mt-9 grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <p className="hero-fade max-w-md text-lg font-light leading-relaxed text-[#1a1815]/70 opacity-0" style={{ transform: "translateY(8px)" }}>
              Marble, granite, limestone, slate and sandstone — breakages, chips, scratches, stains and etch marks
              repaired and restored, on site or in the workshop.
            </p>
            <div className="hero-fade flex flex-wrap items-center gap-x-8 gap-y-4 opacity-0 md:justify-end" style={{ transform: "translateY(8px)" }}>
              <span className="leading-none">
                <span className={`${fd} text-4xl font-semibold text-[#1a1815]`}><span data-count="30" data-suffix="+">30+</span></span>
                <span className="ml-2 text-xs font-medium uppercase tracking-[0.15em] text-[#1a1815]/50">years<br />experience</span>
              </span>
              <Link href="/stonerepairs/contact#enquire" data-magnetic className={btnSolid}>Get a quote <Arrow /></Link>
            </div>
          </div>
        </div>
        {/* full-bleed image band (chamfered, parallax) */}
        <div className="relative h-[52vh] min-h-[320px] w-full overflow-hidden md:h-[64vh]" style={{ clipPath: CUT }}>
          <img src={IMG.hero} alt="Restored marble fireplace" data-parallax className="absolute inset-0 h-[118%] w-full object-cover" />
        </div>
      </section>

      {/* ── Editorial statement ── */}
      <section className="bg-[#f4f1ea]">
        <div className="mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-28" data-reveal>
          <Label>About</Label>
          <p className={`mt-8 ${fd} text-[1.9rem] font-light leading-[1.25] tracking-[-0.01em] text-[#1a1815] sm:text-4xl md:text-[2.9rem]`}>
            “Every photo on this site is from my own repairs. Nothing is stock, nothing is staged — just
            thirty years of putting natural stone right.”
          </p>
          <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-[#1a1815]/45">— {OWNER}, Stone Repairs</p>
        </div>
      </section>

      {/* ── Services: numbered editorial index ── */}
      <section id="services" className="scroll-mt-24 border-t border-[#1a1815]/12 bg-[#fbfaf7]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between" data-reveal>
            <div>
              <Label>What I do</Label>
              <h2 className={`mt-5 ${fd} text-4xl font-medium leading-[1.02] tracking-tight text-[#1a1815] md:text-6xl`}>Repair. Restore.<br className="hidden sm:block" /> Protect.</h2>
            </div>
            <p className="max-w-xs text-sm font-light leading-relaxed text-[#1a1815]/60">Specialist work on every kind of natural stone — done properly, with the right products and decades of know-how.</p>
          </div>
          <div className="mt-14 border-t border-[#1a1815]/14" data-stagger>
            {SERVICES.map((s, i) => (
              <div key={s.t} className="group grid grid-cols-1 gap-1.5 border-b border-[#1a1815]/14 py-7 transition-colors hover:bg-[#f4f1ea] md:grid-cols-[5rem_1fr_1.3fr] md:items-baseline md:gap-8 md:px-3">
                <span className={`${fd} text-xl text-[#1a1815]/30`}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className={`${fd} text-2xl font-medium text-[#1a1815] transition-transform duration-300 md:group-hover:translate-x-1`}>{s.t}</h3>
                <p className="text-sm font-light leading-relaxed text-[#1a1815]/60">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-[#1a1815] text-[#f4f1ea]">
        <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-white/12 px-5 md:grid-cols-3 md:divide-x md:divide-y-0 md:px-8" data-stagger>
          {STATS.map((s) => (
            <div key={s.l} className="px-2 py-12 text-center md:py-16">
              <p className={`${fd} text-5xl font-medium md:text-6xl`}><span data-count={s.v} data-suffix={s.suffix}>{s.v}{s.suffix}</span></p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#f4f1ea]/50">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Process ── */}
      <section className="bg-[#fbfaf7]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl" data-reveal>
            <Label>How it works</Label>
            <h2 className={`mt-5 ${fd} text-4xl font-medium leading-[1.02] tracking-tight text-[#1a1815] md:text-6xl`}>A photo is all it takes to start.</h2>
          </div>
          <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4" data-stagger>
            {PROCESS.map((p) => (
              <div key={p.n} className="border-t border-[#1a1815]/14 pt-5">
                <p className={`${fd} text-3xl font-medium text-[#1a1815]/25`}>{p.n}</p>
                <h3 className={`mt-3 ${fd} text-xl font-medium text-[#1a1815]`}>{p.t}</h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-[#1a1815]/60">{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Portfolio teaser: just three, mixed edges ── */}
      <section className="border-t border-[#1a1815]/12 bg-[#f4f1ea]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4" data-reveal>
            <div>
              <Label>Recent work</Label>
              <h2 className={`mt-5 ${fd} text-4xl font-medium leading-[1.02] tracking-tight text-[#1a1815] md:text-6xl`}>Before &amp; after.</h2>
            </div>
            <Link href="/stonerepairs/portfolio" className="group inline-flex items-center gap-2 text-sm font-semibold text-[#1a1815] hover:underline">View full portfolio <Arrow /></Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-3" data-stagger>
            {[PORTFOLIO[1], PORTFOLIO[5], PORTFOLIO[9]].map((w, i) => (
              <figure key={w.src} className={`group overflow-hidden ${i === 1 ? "sm:mt-10" : ""}`} style={i % 2 === 0 ? { clipPath: CUT } : undefined}>
                <img src={w.src} alt={w.t} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <figcaption className="mt-3 text-sm font-medium text-[#1a1815]">{w.t}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#1a1815] text-[#f4f1ea]">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28" data-reveal>
          <div className="grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-end">
            <div>
              <Label light>Get in touch</Label>
              <h2 className={`mt-6 ${fd} text-4xl font-medium leading-[1.0] tracking-tight md:text-6xl`}>Send a photo for a<br className="hidden sm:block" /> fast, free quote.</h2>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-base font-light text-[#f4f1ea]/70">Email or WhatsApp a couple of photos of the damage — I&apos;ll get back to you as soon as I can.</p>
              <div className="mt-2 flex flex-wrap gap-3">
                <a href={PHONE_TEL} className="rounded-full bg-[#f4f1ea] px-6 py-3.5 text-sm font-semibold text-[#1a1815] transition-colors hover:bg-white">Call {PHONE_DISPLAY}</a>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#f4f1ea]/40 px-6 py-3.5 text-sm font-semibold text-[#f4f1ea] transition-colors hover:bg-[#f4f1ea] hover:text-[#1a1815]">WhatsApp</a>
                <a href={EMAIL_HREF} className="rounded-full border border-[#f4f1ea]/40 px-6 py-3.5 text-sm font-semibold text-[#f4f1ea] transition-colors hover:bg-[#f4f1ea] hover:text-[#1a1815]">Email</a>
              </div>
            </div>
          </div>
          {/* small materials footnote */}
          <div className="mt-14 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/12 pt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f4f1ea]/40">
            {MATERIALS.map((m) => (<span key={m}>{m}</span>))}
          </div>
        </div>
      </section>

      <SRFX />
    </>
  );
}
