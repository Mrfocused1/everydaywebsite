import Link from "next/link";
import {
  IMG, PRODUCTS, MARQUEE, TRUST, CMYK, CmykBar, fd, Label, Arrow,
  btnRed, btnGhostDark, btnGhostLight, WHATSAPP_LINK,
} from "./brand";
import { BajanFX } from "./BajanFX";

/* eslint-disable @next/next/no-img-element */

const STEPS = [
  { n: "01", t: "Send your files", b: "Upload print-ready artwork — or send us your files and we'll check them over for free." },
  { n: "02", t: "We print, same day", b: "Most jobs are ready in 2–3 hours. Need it sooner? Ask about 60-minute express." },
  { n: "03", t: "Collect or delivered", b: "Pick up from Leeds City or Pudsey, or we'll deliver locally and nationwide." },
];

const REASONS = [
  "Same-day turnaround — most jobs in 2–3 hours",
  "60-minute express on urgent orders",
  "BPIF & FSB members — proper quality",
  "Huge range of products, stocks & finishes",
  "Any quantity, from one-offs to big runs",
  "Local collection + nationwide delivery",
];

export default function BajanHome() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative isolate flex min-h-[88vh] items-end overflow-hidden">
        <img src={IMG.hero} alt="Digital printing press at BajanApple" data-parallax className="absolute inset-0 -z-10 h-[112%] w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0d1530]/92 via-[#0d1530]/55 to-[#0d1530]/30" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0d1530]/70 via-transparent to-transparent" />
        <CmykBar className="absolute inset-x-0 top-0 z-10" />
        <div className="mx-auto w-full max-w-6xl px-5 pb-16 pt-32 text-white md:px-8 md:pb-24">
          <div className="max-w-3xl">
            <Label onDark>Same-day B2B digital print · Leeds</Label>
            <h1 className={`hero-h mt-6 ${fd} text-[3rem] font-extrabold leading-[0.92] tracking-tight md:text-[5rem]`}>
              <span className="block overflow-hidden"><span className="hero-line-inner block" style={{ transform: "translateY(110%)" }}>High-quality</span></span>
              <span className="block overflow-hidden"><span className="hero-line-inner block" style={{ transform: "translateY(110%)" }}>print, ready</span></span>
              <span className="block overflow-hidden"><span className="hero-line-inner block text-[#ff5a52]" style={{ transform: "translateY(110%)" }}>the same day.</span></span>
            </h1>
            <p className="hero-fade mt-7 max-w-xl text-lg font-light text-white/85 opacity-0" style={{ transform: "translateY(8px)" }}>
              Professional B2B digital printing in Leeds &amp; Pudsey — flyers, posters, business cards, banners and more.
              Most orders ready in 2–3 hours, with 60-minute express available.
            </p>
            <div className="hero-fade mt-9 flex flex-wrap gap-4 opacity-0" style={{ transform: "translateY(8px)" }}>
              <Link href="/bajan-apple/contact#quote" data-magnetic className={btnRed}>Get a quote <Arrow /></Link>
              <Link href="/bajan-apple/products" className={btnGhostDark}>See what we print</Link>
            </div>
            <div className="hero-fade mt-10 flex flex-wrap gap-x-7 gap-y-2 border-t border-white/20 pt-6 text-xs font-semibold uppercase tracking-wider opacity-0">
              {["Same-day", "BPIF Member", "FSB Member", "Google 5★ Rated"].map((t) => (
                <span key={t} className="flex items-center gap-2 text-white/80"><span className="h-1.5 w-1.5 rounded-full bg-[#ca2d25]" aria-hidden /> {t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Marquee ── */}
      <section className="overflow-hidden border-y border-white/10 bg-[#16223a] py-5 text-white">
        <div data-marquee-track className="flex w-max items-center gap-8 whitespace-nowrap will-change-transform">
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span key={i} className={`flex items-center gap-8 ${fd} text-2xl font-extrabold uppercase tracking-tight md:text-3xl`}>
              {m} <span className="h-2.5 w-2.5 rounded-full" style={{ background: CMYK[i % 4] }} aria-hidden />
            </span>
          ))}
        </div>
      </section>

      {/* ── Intro / why ── */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24 lg:gap-16">
          <div data-reveal>
            <Label>Why BajanApple</Label>
            <h2 className={`mt-5 ${fd} text-3xl font-extrabold leading-[1.02] tracking-tight md:text-[2.9rem]`}>
              Fast print, <span className="text-[#ca2d25]">without</span> cutting corners.
            </h2>
            <p className="mt-5 text-lg font-light text-slate-600">
              We&apos;re a B2B digital print house in Leeds &amp; Pudsey built around speed and quality. Send us your
              files in the morning and walk away with professional print the same day — proofed, finished and ready to go.
            </p>
            <Link href="/bajan-apple/about" className={`${btnGhostLight} mt-8`}>About us <Arrow /></Link>
          </div>
          <div className="relative overflow-hidden rounded-3xl">
            <img src={IMG.press} alt="Ink being applied at the press" data-clip className="aspect-[4/3] w-full object-cover" />
          </div>
        </div>
      </section>

      {/* ── Statement band (editorial) ── */}
      <section className="relative isolate overflow-hidden bg-[#0d1530] text-white">
        <img src={IMG.colorstack} alt="" aria-hidden data-parallax className="absolute inset-0 -z-10 h-[112%] w-full object-cover opacity-25" />
        <div className="absolute inset-0 -z-10 bg-[#0d1530]/70" />
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28" data-reveal>
          <CmykBar className="max-w-[10rem]" />
          <p className={`mt-7 ${fd} text-[2.4rem] font-extrabold leading-[1.02] tracking-tight md:text-[4rem]`}>
            Proofed, printed<br />&amp; in your hands — <span className="text-[#ff5a52]">today.</span>
          </p>
          <p className="mt-5 max-w-xl text-lg font-light text-white/70">No long lead times, no minimums, no fuss. Just professional print when your deadline says now.</p>
        </div>
      </section>

      {/* ── Products preview (horizontal scroll on mobile) ── */}
      <section className="bg-[#f4f6fb]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4" data-reveal>
            <div className="max-w-2xl">
              <Label>What we print</Label>
              <h2 className={`mt-5 ${fd} text-3xl font-extrabold leading-[1.02] tracking-tight md:text-5xl`}>From a business card to a banner.</h2>
              <p className="mt-3 text-sm font-semibold text-slate-400 sm:hidden">Swipe →</p>
            </div>
            <Link href="/bajan-apple/products" className="text-sm font-semibold text-[#306fc7] hover:text-[#ca2d25]">See everything →</Link>
          </div>
          <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:mt-14 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 lg:grid-cols-4" data-stagger>
            {PRODUCTS.map((p, i) => (
              <article key={p.t} className="group relative flex w-[78%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-[#16223a]/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_45px_-22px_rgba(16,34,58,0.4)] sm:w-auto">
                <div className="relative overflow-hidden">
                  <img src={p.img} alt={p.t} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute left-0 top-0 h-1.5 w-full" style={{ background: CMYK[i % 4] }} aria-hidden />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className={`${fd} text-lg font-bold tracking-tight text-[#16223a]`}>{p.t}</h3>
                    <span className="-translate-x-1 text-[#306fc7] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" aria-hidden>→</span>
                  </div>
                  <p className="mt-1.5 text-sm font-light text-slate-600">{p.b}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl" data-reveal>
            <Label>How it works</Label>
            <h2 className={`mt-5 ${fd} text-3xl font-extrabold leading-[1.02] tracking-tight md:text-5xl`}>Print in three easy steps.</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 md:grid-cols-3 md:gap-8" data-stagger>
            {STEPS.map((s, i) => (
              <div key={s.n} className="group rounded-2xl border border-[#16223a]/10 p-7 transition-colors hover:border-transparent hover:bg-[#16223a] hover:text-white">
                <p className={`${fd} text-5xl font-extrabold`} style={{ color: CMYK[i % 4] }}>{s.n}</p>
                <h3 className={`mt-4 ${fd} text-xl font-bold tracking-tight`}>{s.t}</h3>
                <p className="mt-2 font-light text-slate-600 group-hover:text-white/75">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-[#0d1530] text-white">
        <CmykBar />
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-white/10 md:grid-cols-4" data-stagger>
          {[
            { v: "94", s: "+", l: "5★ reviews", count: true },
            { v: "2–3", l: "Hr turnaround", count: false },
            { v: "60", s: "min", l: "Express orders", count: true },
            { v: "29", s: "+", l: "UK cities served", count: true },
          ].map((st) => (
            <div key={st.l} className="bg-[#0d1530] p-7 text-center md:p-10">
              {st.count ? (
                <p className={`${fd} text-4xl font-extrabold tracking-tight text-[#ff5a52] md:text-5xl`} data-count={st.v} data-suffix={st.s || ""}>0{st.s || ""}</p>
              ) : (
                <p className={`${fd} text-4xl font-extrabold tracking-tight text-[#ff5a52] md:text-5xl`}>{st.v}</p>
              )}
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-white/55">{st.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why choose ── */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24 lg:gap-16">
          <div className="relative overflow-hidden rounded-3xl">
            <img src={IMG.about} alt="Working at the print press" data-clip className="aspect-[4/3] w-full object-cover" />
          </div>
          <div data-reveal>
            <Label>Why choose us</Label>
            <h2 className={`mt-5 ${fd} text-3xl font-extrabold leading-[1.02] tracking-tight md:text-[2.9rem]`}>Quality print, when you need it.</h2>
            <ul className="mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {REASONS.map((r) => (
                <li key={r} className="flex items-start gap-3 text-sm font-medium text-[#16223a]">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#ca2d25]" aria-hidden /> {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Trust (horizontal scroll on mobile) ── */}
      <section className="bg-[#f4f6fb]">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8" data-reveal>
          <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Trusted by businesses across Yorkshire &amp; beyond</p>
          <div className="-mx-5 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:grid-cols-4 sm:overflow-visible sm:px-0">
            {TRUST.map((t, i) => (
              <div key={t} className="flex w-[60%] shrink-0 snap-start items-center justify-center gap-3 rounded-2xl border border-[#16223a]/10 bg-white px-4 py-6 text-center sm:w-auto">
                <span className="h-2 w-2 rounded-full" style={{ background: CMYK[i % 4] }} aria-hidden />
                <span className={`${fd} text-sm font-bold tracking-tight text-[#16223a]`}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 pb-20 md:px-8" data-reveal>
          <div className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl bg-[#ca2d25] px-7 py-12 text-center text-white md:flex-row md:px-12 md:text-left">
            <CmykBar className="absolute inset-x-0 top-0" />
            <div>
              <h2 className={`${fd} text-3xl font-extrabold tracking-tight md:text-4xl`}>Need it printed today?</h2>
              <p className="mt-2 font-light text-white/85">Send your files for a fast, free quote — most orders ready in 2–3 hours.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/bajan-apple/contact#quote" data-magnetic className="rounded-xl bg-white px-7 py-4 text-sm font-semibold text-[#ca2d25] transition-transform hover:-translate-y-0.5">Get a quote</Link>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/40 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10">WhatsApp us</a>
            </div>
          </div>
        </div>
      </section>

      <BajanFX />
    </>
  );
}
