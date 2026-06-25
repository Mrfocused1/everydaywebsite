/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {
  PEXELS, PAIRS, PORTFOLIO, fd, Label, Arrow, btnInk, btnOutline,
  MATERIALS, SERVICES, PROCESS, STATS, PHONE_DISPLAY, PHONE_TEL, WHATSAPP, EMAIL_HREF, OWNER,
} from "./brand";
import { BeforeAfter } from "./BeforeAfter";
import { SRFX } from "./SRFX";

export default function StoneHome() {
  return (
    <>
      {/* ── Hero: clean Pexels marble + overlaid type ── */}
      <section className="relative overflow-hidden">
        <img src={PEXELS.hero} alt="" data-parallax className="absolute inset-0 h-[114%] w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff]/92 via-[#ffffff]/70 to-[#ffffff]/25" />
        <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-14 md:px-8 md:pb-28 md:pt-24">
          <Label>Natural stone repair &amp; restoration · 30+ years</Label>
          <h1 className={`mt-7 ${fd} text-[3.2rem] font-semibold leading-[0.9] tracking-[-0.03em] text-[#15130f] sm:text-7xl md:text-[7rem]`}>
            <span className="block overflow-hidden"><span className="hero-line-inner block" style={{ transform: "translateY(110%)" }}>We don&apos;t hide</span></span>
            <span className="block overflow-hidden"><span className="hero-line-inner block" style={{ transform: "translateY(110%)" }}>the damage.</span></span>
            <span className="block overflow-hidden"><span className="hero-line-inner block" style={{ transform: "translateY(110%)" }}>We make it{" "}
              <span className="italic text-[#3f5d5a]">vanish.</span>
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
      </section>

      {/* ── Materials marquee ── */}
      <section className="overflow-hidden border-y-2 border-[#15130f] bg-[#ffffff] py-5 text-[#15130f]">
        <div className="flex w-max whitespace-nowrap will-change-transform" data-marquee-track>
          {[0, 1].map((k) => (
            <div key={k} className="flex items-center" aria-hidden={k === 1}>
              {MATERIALS.concat("Repaired", "Restored", "Polished", "Sealed").map((m) => (
                <span key={m} className={`${fd} mx-7 text-3xl font-semibold md:text-5xl`}>{m} <span className="text-[#3f5d5a]">✦</span></span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── Statement + craft image ── */}
      <section className="bg-[#ffffff]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[1.4fr_0.6fr] md:gap-14 md:px-8 md:py-24">
          <div data-reveal>
            <Label>About</Label>
            <p className={`mt-7 ${fd} text-[1.8rem] font-semibold leading-[1.18] tracking-[-0.01em] text-[#15130f] sm:text-4xl md:text-[2.7rem]`}>
              I&apos;m {OWNER}. Every photo on this site is from <span className="italic text-[#3f5d5a]">my own repairs</span>. No stock,
              no staging — just <span className="italic text-[#3f5d5a]">30 years</span> of putting natural stone right.
            </p>
          </div>
          <div data-reveal className="overflow-hidden rounded-2xl border-2 border-[#15130f] shadow-[8px_8px_0_#15130f]">
            <img src={PEXELS.craft} alt="Carved marble detail" data-clip className="aspect-[3/4] w-full object-cover" />
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="scroll-mt-24 border-t-2 border-[#15130f] bg-[#f6f5f2]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between" data-reveal>
            <h2 className={`${fd} text-[2.6rem] font-semibold leading-[0.92] tracking-[-0.02em] text-[#15130f] md:text-6xl`}>Repair. Restore.<br /><span className="text-[#3f5d5a]">Protect.</span></h2>
            <p className="max-w-xs text-sm font-light leading-relaxed text-[#15130f]/60">Specialist work on every kind of natural stone — done properly, with the right products and decades of know-how.</p>
          </div>
          <div className="mt-12 border-t-2 border-[#15130f]/15" data-stagger>
            {SERVICES.map((s, i) => (
              <div key={s.t} className="group grid grid-cols-1 gap-1.5 border-b-2 border-[#15130f]/15 py-7 transition-colors hover:bg-[#eef1f0] md:grid-cols-[5rem_1fr_1.3fr] md:items-baseline md:gap-8 md:px-4">
                <span className={`${fd} text-2xl font-semibold text-[#3f5d5a]`}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className={`${fd} text-2xl font-semibold text-[#15130f] md:text-3xl`}>{s.t}</h3>
                <p className="text-sm font-light leading-relaxed text-[#15130f]/60">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Before & after ── */}
      <section className="border-t-2 border-[#15130f] bg-[#eef1f0] text-[#15130f]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4" data-reveal>
            <h2 className={`${fd} text-[2.6rem] font-semibold leading-[0.92] tracking-[-0.02em] md:text-6xl`}>Drag to see<br /><span className="text-[#3f5d5a]">the difference.</span></h2>
            <Link href="/stonerepairs/portfolio" className="group inline-flex items-center gap-2 text-sm font-semibold text-[#15130f] hover:text-[#3f5d5a]">View full portfolio <Arrow /></Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2" data-stagger>
            {[PAIRS[0], PAIRS[1]].map((p) => (
              <figure key={p.t}>
                <BeforeAfter before={p.before} after={p.after} className="aspect-[4/3] w-full rounded-2xl" />
                <figcaption className="mt-4">
                  <h3 className={`${fd} text-xl font-semibold`}>{p.t}</h3>
                  <p className="mt-1 text-sm font-light text-[#15130f]/60">{p.b}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="border-y-2 border-[#15130f] bg-[#ffffff]">
        <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y-2 divide-[#15130f]/15 px-5 md:grid-cols-3 md:divide-x-2 md:divide-y-0 md:px-8" data-stagger>
          {STATS.map((s) => (
            <div key={s.l} className="px-2 py-12 text-center md:py-16">
              <p className={`${fd} text-6xl font-semibold text-[#3f5d5a] md:text-7xl`}><span data-count={s.v} data-suffix={s.suffix}>{s.v}{s.suffix}</span></p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#15130f]/55">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Process ── */}
      <section className="bg-[#f6f5f2]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl" data-reveal>
            <Label>How it works</Label>
            <h2 className={`mt-5 ${fd} text-[2.6rem] font-semibold leading-[0.92] tracking-[-0.02em] text-[#15130f] md:text-6xl`}>A photo is all it<br />takes to start.</h2>
          </div>
          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4" data-stagger>
            {PROCESS.map((p) => (
              <div key={p.n} className="border-t-2 border-[#3f5d5a] pt-5">
                <p className={`${fd} text-3xl font-semibold text-[#3f5d5a]`}>{p.n}</p>
                <h3 className={`mt-3 ${fd} text-xl font-semibold text-[#15130f]`}>{p.t}</h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-[#15130f]/60">{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Portfolio teaser — tilted cards ── */}
      <section className="overflow-hidden bg-[#ffffff]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4" data-reveal>
            <h2 className={`${fd} text-[2.6rem] font-semibold leading-[0.92] tracking-[-0.02em] text-[#15130f] md:text-6xl`}>Recent work.</h2>
            <Link href="/stonerepairs/portfolio" className="group inline-flex items-center gap-2 text-sm font-semibold text-[#3f5d5a] hover:underline">See all <Arrow /></Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3" data-stagger>
            {PORTFOLIO.slice(0, 3).map((w, i) => (
              <figure key={w.src} className={`group ${i === 1 ? "sm:mt-8 sm:-rotate-1" : i === 0 ? "sm:rotate-1" : "sm:-rotate-1"}`}>
                <div className="overflow-hidden rounded-2xl border-2 border-[#15130f] shadow-[6px_6px_0_#15130f]">
                  <img src={w.src} alt={w.t} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <figcaption className="mt-3 text-sm font-semibold text-[#15130f]">{w.t}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden border-t-2 border-[#15130f] bg-[#eef1f0] text-[#15130f]">
        <div className="mx-auto max-w-6xl px-5 py-20 text-center md:px-8 md:py-28" data-reveal>
          <div className="flex justify-center"><Label>Get in touch</Label></div>
          <h2 className={`mx-auto mt-6 max-w-3xl ${fd} text-[2.8rem] font-semibold leading-[0.92] tracking-[-0.02em] md:text-7xl`}>Send a photo. Get a quote.</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg font-light text-[#15130f]/70">Email or WhatsApp a couple of photos of the damage and I&apos;ll get back to you as soon as I can.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a href={PHONE_TEL} className="rounded-full bg-[#15130f] px-7 py-3.5 text-sm font-semibold text-[#ffffff] transition-colors hover:bg-[#3f5d5a]">Call {PHONE_DISPLAY}</a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="rounded-full border-2 border-[#15130f] px-7 py-3.5 text-sm font-semibold text-[#15130f] transition-colors hover:bg-[#15130f] hover:text-[#ffffff]">WhatsApp</a>
            <a href={EMAIL_HREF} className="rounded-full border-2 border-[#15130f] px-7 py-3.5 text-sm font-semibold text-[#15130f] transition-colors hover:bg-[#15130f] hover:text-[#ffffff]">Email</a>
          </div>
        </div>
      </section>

      <SRFX />
    </>
  );
}
