/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {
  IMG, fd, Label, Arrow, btnSolid, btnOutline, btnGold,
  MATERIALS, SURFACES, SERVICES, PROCESS, STATS, PORTFOLIO,
  PHONE_DISPLAY, PHONE_TEL, EMAIL_HREF, WHATSAPP, OWNER,
} from "./brand";
import { SRFX } from "./SRFX";

export default function StoneHome() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#f7f3ec]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-10 md:grid-cols-2 md:gap-14 md:px-8 md:pb-24 md:pt-16">
          {/* image first on mobile */}
          <div className="relative order-1 md:order-2">
            <div className="overflow-hidden rounded-[1.5rem] shadow-[0_30px_70px_-30px_rgba(31,27,22,0.45)]">
              <img src={IMG.hero} alt="Restored marble fireplace" data-clip className="aspect-[4/3] w-full object-cover md:aspect-[5/6]" />
            </div>
            <div className="absolute -bottom-5 -left-3 rounded-2xl border border-[#1f1b16]/10 bg-[#f7f3ec] px-5 py-4 shadow-lg sm:left-6">
              <p className={`${fd} text-3xl font-semibold leading-none text-[#1f1b16]`}><span data-count="30" data-suffix="+">30+</span></p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9a7a48]">Years' experience</p>
            </div>
          </div>

          <div className="order-2 md:order-1">
            <Label>Natural stone repair &amp; restoration</Label>
            <h1 className={`mt-6 ${fd} text-[2.9rem] font-medium leading-[1.0] tracking-[-0.015em] text-[#1f1b16] sm:text-6xl`}>
              <span className="block overflow-hidden"><span className="hero-line-inner block" style={{ transform: "translateY(110%)" }}>Bring your stone</span></span>
              <span className="block overflow-hidden"><span className="hero-line-inner block italic text-[#9a7a48]" style={{ transform: "translateY(110%)" }}>back to life.</span></span>
            </h1>
            <p className="hero-fade mt-6 max-w-md text-lg font-light leading-relaxed text-[#1f1b16]/70 opacity-0" style={{ transform: "translateY(8px)" }}>
              Marble, granite, limestone, slate and sandstone — breakages, chips, scratches, stains and etch marks
              repaired and restored on site or in the workshop.
            </p>
            <div className="hero-fade mt-8 flex flex-wrap gap-3 opacity-0" style={{ transform: "translateY(8px)" }}>
              <Link href="/stonerepairs/contact#enquire" data-magnetic className={btnSolid}>Get a quote <Arrow /></Link>
              <Link href="/stonerepairs/portfolio" className={btnOutline}>See the work</Link>
            </div>
            <div className="hero-fade mt-9 flex flex-wrap gap-x-5 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1f1b16]/45 opacity-0" style={{ transform: "translateY(8px)" }}>
              {MATERIALS.map((m) => (<span key={m} className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-[#9a7a48]" aria-hidden /> {m}</span>))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Intro / about ── */}
      <section className="border-y border-[#1f1b16]/10 bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24 lg:gap-16">
          <div className="relative" data-reveal>
            <img src={IMG.fireplace2} alt="Rosso Levanto marble fireplace, restored" data-clip className="aspect-[4/3] w-full rounded-2xl object-cover" />
          </div>
          <div data-reveal>
            <Label>About</Label>
            <h2 className={`mt-5 ${fd} text-3xl font-medium leading-tight tracking-tight text-[#1f1b16] md:text-[2.6rem]`}>Thirty years of craft, in every repair.</h2>
            <div className="mt-6 space-y-4 text-lg font-light leading-relaxed text-[#1f1b16]/70">
              <p>
                I&apos;m {OWNER}, and I&apos;ve spent over 30 years working with natural stone. Every photo on this site
                is from my own repairs — nothing is stock, nothing is staged.
              </p>
              <p>
                From a chipped worktop to a cracked fireplace or a weathered statue, I treat each piece on its own
                terms, matching the stone and finishing it so the repair simply disappears.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-[#1f1b16]/60">
              {SURFACES.map((s) => (<span key={s} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#9a7a48]" aria-hidden /> {s}</span>))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="scroll-mt-24 bg-[#f7f3ec]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl" data-reveal>
            <Label>What I do</Label>
            <h2 className={`mt-5 ${fd} text-3xl font-medium leading-tight tracking-tight text-[#1f1b16] md:text-5xl`}>Repair, restore, protect.</h2>
            <p className="mt-5 text-lg font-light text-[#1f1b16]/65">Specialist work on every kind of natural stone — done properly, with the right products and decades of know-how.</p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[#1f1b16]/10 bg-[#1f1b16]/10 sm:grid-cols-2 lg:grid-cols-3" data-stagger>
            {SERVICES.map((s, i) => (
              <div key={s.t} className="group bg-white p-7 transition-colors hover:bg-[#faf7f1] md:p-8">
                <span className={`${fd} text-sm font-semibold text-[#9a7a48]`}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className={`mt-3 ${fd} text-xl font-semibold text-[#1f1b16]`}>{s.t}</h3>
                <p className="mt-2.5 text-sm font-light leading-relaxed text-[#1f1b16]/65">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-[#1f1b16] text-[#f7f3ec]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-white/10 md:grid-cols-4" data-stagger>
          {STATS.map((s) => (
            <div key={s.l} className="bg-[#1f1b16] px-6 py-10 text-center">
              <p className={`${fd} text-4xl font-semibold text-[#c79b5e] md:text-5xl`}>
                {s.note ? "24h" : <span data-count={s.v} data-suffix={s.suffix}>{s.v}{s.suffix}</span>}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#f7f3ec]/55">{s.note ? "Quick response" : s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Process ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl" data-reveal>
            <Label>How it works</Label>
            <h2 className={`mt-5 ${fd} text-3xl font-medium leading-tight tracking-tight text-[#1f1b16] md:text-5xl`}>A photo is all it takes to start.</h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4" data-stagger>
            {PROCESS.map((p) => (
              <div key={p.n}>
                <p className={`${fd} text-5xl font-semibold text-[#e4d8c5]`}>{p.n}</p>
                <h3 className={`mt-3 ${fd} text-lg font-semibold text-[#1f1b16]`}>{p.t}</h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-[#1f1b16]/65">{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Portfolio teaser ── */}
      <section className="bg-[#f7f3ec]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4" data-reveal>
            <div className="max-w-xl">
              <Label>Recent work</Label>
              <h2 className={`mt-5 ${fd} text-3xl font-medium leading-tight tracking-tight text-[#1f1b16] md:text-5xl`}>Before &amp; after.</h2>
            </div>
            <Link href="/stonerepairs/portfolio" className="text-sm font-semibold text-[#9a7a48] hover:underline">View full portfolio →</Link>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3" data-stagger>
            {PORTFOLIO.slice(0, 6).map((w) => (
              <figure key={w.src} className="group relative overflow-hidden rounded-xl">
                <img src={w.src} alt={w.t} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1f1b16]/85 to-transparent p-3 pt-8 text-xs font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{w.t}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#efe7da]">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center md:px-8 md:py-24" data-reveal>
          <Label>Get in touch</Label>
          <h2 className={`mx-auto mt-5 max-w-2xl ${fd} text-3xl font-medium leading-tight tracking-tight text-[#1f1b16] md:text-5xl`}>Send a photo for a fast, free quote.</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg font-light text-[#1f1b16]/65">Email or WhatsApp a couple of photos of the damage and I&apos;ll get back to you as soon as I can.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={PHONE_TEL} data-magnetic className={btnSolid}>Call {PHONE_DISPLAY}</a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className={btnGold}>WhatsApp <Arrow /></a>
            <a href={EMAIL_HREF} className={btnOutline}>Email me</a>
          </div>
        </div>
      </section>

      <SRFX />
    </>
  );
}
