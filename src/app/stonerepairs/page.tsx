/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {
  IMG, PAIRS, PORTFOLIO, fd, Label, Arrow, Underline, Lasso, Squiggle, btnInk, btnOutline,
  MATERIALS, SERVICES, PROCESS, STATS, PHONE_DISPLAY, PHONE_TEL, WHATSAPP, EMAIL_HREF, OWNER,
} from "./brand";
import { BeforeAfter } from "./BeforeAfter";
import { SRFX } from "./SRFX";

export default function StoneHome() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#f3efe6]">
        <Squiggle className="absolute right-[8%] top-24 hidden h-10 w-16 rotate-6 md:block" />
        <div className="mx-auto max-w-6xl px-5 pb-10 pt-12 md:px-8 md:pb-14 md:pt-16">
          <Label>Natural stone repair &amp; restoration · 30+ years</Label>
          <h1 className={`mt-7 ${fd} text-[3.2rem] font-extrabold leading-[0.9] tracking-[-0.03em] text-[#15130f] sm:text-7xl md:text-[7rem]`}>
            <span className="block overflow-hidden"><span className="hero-line-inner block" style={{ transform: "translateY(110%)" }}>We don&apos;t hide</span></span>
            <span className="block overflow-hidden"><span className="hero-line-inner block" style={{ transform: "translateY(110%)" }}>the damage.</span></span>
            <span className="block overflow-hidden"><span className="hero-line-inner block" style={{ transform: "translateY(110%)" }}>We make it{" "}
              <span className="relative inline-block italic text-[#3f5d5a]">vanish.<Underline className="absolute -bottom-1 left-0 h-3 w-full md:-bottom-2" /></span>
            </span></span>
          </h1>
          <div className="mt-9 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <p className="hero-fade max-w-md text-lg font-light leading-relaxed text-[#15130f]/70 opacity-0" style={{ transform: "translateY(8px)" }}>
              Marble, granite, limestone, slate and sandstone — breakages, chips, stains and etch marks repaired so
              the repair simply disappears.
            </p>
            <div className="hero-fade flex flex-wrap gap-3 opacity-0" style={{ transform: "translateY(8px)" }}>
              <Link href="/stonerepairs/contact#enquire" data-magnetic className={btnInk}>Get a quote <Arrow /></Link>
              <Link href="/stonerepairs/portfolio" className={btnOutline}>See the work</Link>
            </div>
          </div>
        </div>
        {/* signature before/after slider */}
        <div className="mx-auto max-w-6xl px-5 pb-14 md:px-8 md:pb-20" data-reveal>
          <BeforeAfter before={PAIRS[2].before} after={PAIRS[2].after} className="aspect-[16/10] w-full rounded-[1.5rem] md:aspect-[2/1]" label="Drag — stone Buddha, cleaned & repaired" />
        </div>
      </section>

      {/* ── Materials marquee ── */}
      <section className="overflow-hidden border-y-2 border-[#15130f] bg-[#3f5d5a] py-5 text-[#f3efe6]">
        <div className="flex w-max whitespace-nowrap will-change-transform" data-marquee-track>
          {[0, 1].map((k) => (
            <div key={k} className="flex items-center" aria-hidden={k === 1}>
              {MATERIALS.concat("Repaired", "Restored", "Polished", "Sealed").map((m) => (
                <span key={m} className={`${fd} mx-7 text-3xl font-bold md:text-5xl`}>{m} <span className="text-[#f3efe6]/45">✦</span></span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── Statement ── */}
      <section className="bg-[#f3efe6]">
        <div className="mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-28" data-reveal>
          <Label>About</Label>
          <p className={`mt-8 ${fd} text-[1.9rem] font-bold leading-[1.15] tracking-[-0.01em] text-[#15130f] sm:text-4xl md:text-[3.1rem]`}>
            I&apos;m {OWNER}. Every photo on this site is from{" "}
            <span className="relative inline-block">my own repairs<Underline className="absolute -bottom-1 left-0 h-2.5 w-full" /></span>. No stock,
            no staging — just{" "}
            <span className="relative inline-block px-1.5">30 years<Lasso className="absolute -inset-x-2 -inset-y-2 h-[150%] w-[112%]" /></span>{" "}
            of putting natural stone right.
          </p>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="scroll-mt-24 border-t-2 border-[#15130f] bg-[#faf7f0]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between" data-reveal>
            <h2 className={`${fd} text-[2.6rem] font-extrabold leading-[0.92] tracking-[-0.02em] text-[#15130f] md:text-6xl`}>Repair. Restore.<br /><span className="text-[#3f5d5a]">Protect.</span></h2>
            <p className="max-w-xs text-sm font-light leading-relaxed text-[#15130f]/60">Specialist work on every kind of natural stone — done properly, with the right products and decades of know-how.</p>
          </div>
          <div className="mt-12 border-t-2 border-[#15130f]/15" data-stagger>
            {SERVICES.map((s, i) => (
              <div key={s.t} className="group grid grid-cols-1 gap-1.5 border-b-2 border-[#15130f]/15 py-7 transition-colors hover:bg-[#3f5d5a] hover:text-[#f3efe6] md:grid-cols-[5rem_1fr_1.3fr] md:items-baseline md:gap-8 md:px-4">
                <span className={`${fd} text-2xl font-bold text-[#3f5d5a] group-hover:text-[#f3efe6]/70`}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className={`${fd} text-2xl font-bold text-[#15130f] group-hover:text-[#f3efe6] md:text-3xl`}>{s.t}</h3>
                <p className="text-sm font-light leading-relaxed text-[#15130f]/60 group-hover:text-[#f3efe6]/80">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Before & after ── */}
      <section className="bg-[#15130f] text-[#f3efe6]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4" data-reveal>
            <h2 className={`${fd} text-[2.6rem] font-extrabold leading-[0.92] tracking-[-0.02em] md:text-6xl`}>Drag to see<br /><span className="text-[#7fa39e]">the difference.</span></h2>
            <Link href="/stonerepairs/portfolio" className="group inline-flex items-center gap-2 text-sm font-bold text-[#f3efe6] hover:text-[#7fa39e]">View full portfolio <Arrow /></Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2" data-stagger>
            {[PAIRS[0], PAIRS[1]].map((p) => (
              <figure key={p.t}>
                <BeforeAfter before={p.before} after={p.after} className="aspect-[4/3] w-full rounded-2xl" />
                <figcaption className="mt-4">
                  <h3 className={`${fd} text-xl font-bold`}>{p.t}</h3>
                  <p className="mt-1 text-sm font-light text-[#f3efe6]/60">{p.b}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="border-y-2 border-[#15130f] bg-[#f3efe6]">
        <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y-2 divide-[#15130f]/15 px-5 md:grid-cols-3 md:divide-x-2 md:divide-y-0 md:px-8" data-stagger>
          {STATS.map((s) => (
            <div key={s.l} className="px-2 py-12 text-center md:py-16">
              <p className={`${fd} text-6xl font-extrabold text-[#3f5d5a] md:text-7xl`}><span data-count={s.v} data-suffix={s.suffix}>{s.v}{s.suffix}</span></p>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-[#15130f]/55">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Process ── */}
      <section className="bg-[#faf7f0]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl" data-reveal>
            <Label>How it works</Label>
            <h2 className={`mt-5 ${fd} text-[2.6rem] font-extrabold leading-[0.92] tracking-[-0.02em] text-[#15130f] md:text-6xl`}>A photo is all it<br />takes to start.</h2>
          </div>
          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4" data-stagger>
            {PROCESS.map((p) => (
              <div key={p.n} className="border-t-2 border-[#3f5d5a] pt-5">
                <p className={`${fd} text-3xl font-extrabold text-[#3f5d5a]`}>{p.n}</p>
                <h3 className={`mt-3 ${fd} text-xl font-bold text-[#15130f]`}>{p.t}</h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-[#15130f]/60">{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Portfolio teaser — tilted cards ── */}
      <section className="overflow-hidden bg-[#f3efe6]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4" data-reveal>
            <h2 className={`${fd} text-[2.6rem] font-extrabold leading-[0.92] tracking-[-0.02em] text-[#15130f] md:text-6xl`}>Recent work.</h2>
            <Link href="/stonerepairs/portfolio" className="group inline-flex items-center gap-2 text-sm font-bold text-[#3f5d5a] hover:underline">See all <Arrow /></Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3" data-stagger>
            {PORTFOLIO.slice(0, 3).map((w, i) => (
              <figure key={w.src} className={`group ${i === 1 ? "sm:mt-8 sm:-rotate-1" : i === 0 ? "sm:rotate-1" : "sm:-rotate-1"}`}>
                <div className="overflow-hidden rounded-2xl border-2 border-[#15130f] shadow-[6px_6px_0_#15130f]">
                  <img src={w.src} alt={w.t} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <figcaption className="mt-3 text-sm font-bold text-[#15130f]">{w.t}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-[#3f5d5a] text-[#f3efe6]">
        <Squiggle className="absolute left-[6%] top-10 hidden h-10 w-16 opacity-60 md:block" />
        <div className="mx-auto max-w-6xl px-5 py-20 text-center md:px-8 md:py-28" data-reveal>
          <Label light>Get in touch</Label>
          <h2 className={`mx-auto mt-6 max-w-3xl ${fd} text-[2.8rem] font-extrabold leading-[0.92] tracking-[-0.02em] md:text-7xl`}>Send a photo. Get a quote.</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg font-light text-[#f3efe6]/75">Email or WhatsApp a couple of photos of the damage and I&apos;ll get back to you as soon as I can.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a href={PHONE_TEL} className="rounded-full bg-[#f3efe6] px-7 py-3.5 text-sm font-bold text-[#15130f] transition-colors hover:bg-white">Call {PHONE_DISPLAY}</a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="rounded-full border-2 border-[#f3efe6] px-7 py-3.5 text-sm font-bold text-[#f3efe6] transition-colors hover:bg-[#f3efe6] hover:text-[#15130f]">WhatsApp</a>
            <a href={EMAIL_HREF} className="rounded-full border-2 border-[#f3efe6] px-7 py-3.5 text-sm font-bold text-[#f3efe6] transition-colors hover:bg-[#f3efe6] hover:text-[#15130f]">Email</a>
          </div>
        </div>
      </section>

      <SRFX />
    </>
  );
}
