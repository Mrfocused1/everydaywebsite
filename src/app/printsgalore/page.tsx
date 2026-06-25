import Link from "next/link";
import {
  IMG, MARQUEE, TRUST, COLORS, AccentBar, fd, Label, Arrow,
  btnBlue, btnGhostDark, btnGhostLight, INSTAGRAM,
} from "./brand";
import { PAFX } from "./PAFX";

/* eslint-disable @next/next/no-img-element */

const TEES = [
  { t: "Full-Colour Tees", img: IMG.teeGraphic },
  { t: "Event & Reunion", img: IMG.teeEvent },
  { t: "Logo & Crest", img: IMG.teeCrest },
  { t: "Caps & Headwear", img: IMG.caps },
  { t: "Jackets", img: IMG.jacket },
  { t: "Beanies", img: IMG.beanie },
];

const STEPS = [
  { n: "01", t: "Send your design", b: "Send your artwork and what you want printed — the garment, sizes and quantity (minimum order 6)." },
  { n: "02", t: "We print your DTF", b: "We print and heat-press your transfers in high-quality, full colour — sampled and checked before they go out." },
  { n: "03", t: "Delivered fast", b: "Collect in Birmingham, or we'll ship across the UK — North, South, East and West." },
];

const REASONS = [
  "Minimum order just 6",
  "Fast turnaround, every time",
  "High-quality, full-colour DTF",
  "Tees, caps, beanies & jackets",
  "Embroidery & bulk pricing",
  "Birmingham — covering N, S, E & W",
];

export default function PAHome() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative isolate flex min-h-[90vh] items-end overflow-hidden bg-[#14141a]">
        <img src={IMG.hero} alt="Prints Galore — custom printed garments" data-parallax className="absolute inset-0 -z-10 h-[112%] w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#14141a]/92 via-[#14141a]/45 to-[#14141a]/25" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#14141a]/65 via-transparent to-transparent" />
        <AccentBar className="absolute inset-x-0 top-0 z-10" />
        <div className="mx-auto w-full max-w-6xl px-5 pb-16 pt-32 text-white md:px-8 md:pb-24">
          <div className="max-w-3xl">
            <Label onDark>DTF Printing · Birmingham, UK</Label>
            <h1 className={`hero-h mt-6 ${fd} text-[3.4rem] uppercase leading-[0.86] tracking-tight md:text-[6rem]`}>
              <span className="block overflow-hidden"><span className="hero-line-inner block" style={{ transform: "translateY(110%)" }}>Print it.</span></span>
              <span className="block overflow-hidden"><span className="hero-line-inner block" style={{ transform: "translateY(110%)" }}>Press it.</span></span>
              <span className="block overflow-hidden"><span className="hero-line-inner block text-[#EC008C]" style={{ transform: "translateY(110%)" }}>Wear it.</span></span>
            </h1>
            <p className="hero-fade mt-7 max-w-xl text-lg font-light text-white/85 opacity-0" style={{ transform: "translateY(8px)" }}>
              High-quality DTF printing and embroidery in Birmingham — custom t-shirts, caps, beanies and jackets.
              Minimum order just 6, fast turnaround, covering North, South, East &amp; West.
            </p>
            <div className="hero-fade mt-9 flex flex-wrap gap-4 opacity-0" style={{ transform: "translateY(8px)" }}>
              <Link href="/printsgalore/contact#quote" data-magnetic className={btnBlue}>Get a quote <Arrow /></Link>
              <Link href="/printsgalore/work" className={btnGhostDark}>See our work</Link>
            </div>
            <div className="hero-fade mt-10 flex flex-wrap gap-x-7 gap-y-2 border-t border-white/20 pt-6 text-xs font-bold uppercase tracking-wider opacity-0">
              {TRUST.map((t, i) => (
                <span key={t} className="flex items-center gap-2 text-white/75"><span className="h-1.5 w-1.5" style={{ background: COLORS[i % COLORS.length] }} aria-hidden /> {t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Marquee ── */}
      <section className="overflow-hidden border-y border-[#0e0e10]/10 bg-white py-5 text-[#0e0e10]">
        <div data-marquee-track className="flex w-max items-center gap-8 whitespace-nowrap will-change-transform">
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span key={i} className={`flex items-center gap-8 ${fd} text-2xl uppercase tracking-tight md:text-3xl`}>
              {m} <span className="h-2.5 w-2.5" style={{ background: COLORS[i % COLORS.length] }} aria-hidden />
            </span>
          ))}
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24 lg:gap-16">
          <div data-reveal>
            <Label>Prints Galore</Label>
            <h2 className={`mt-5 ${fd} text-4xl uppercase leading-[0.95] tracking-tight md:text-[3.4rem]`}>
              Your design, on<br />anything you wear.
            </h2>
            <p className="mt-5 text-lg font-light text-slate-600">
              We&apos;re a Birmingham-based DTF printing and embroidery service. From a single custom run to full team
              and event kits, we print high-quality, full-colour designs — fast, with a minimum order of just six.
            </p>
            <Link href="/printsgalore/about" className={`${btnGhostLight} mt-8`}>About us <Arrow /></Link>
          </div>
          <div className="relative overflow-hidden">
            <img src={IMG.teeGraphic} alt="Full-colour DTF printed t-shirt by Prints Galore" data-clip className="aspect-square w-full bg-[#f5f5f4] object-cover" />
            <AccentBar className="absolute inset-x-0 bottom-0" />
          </div>
        </div>
      </section>

      {/* ── Statement band (light) ── */}
      <section className="bg-[#f5f5f4]">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28" data-reveal>
          <AccentBar className="max-w-[12rem]" />
          <p className={`mt-7 ${fd} text-[2.6rem] uppercase leading-[0.92] tracking-tight text-[#0e0e10] md:text-[4.6rem]`}>
            From six tees<br />to <span className="text-[#EC008C]">the whole team.</span>
          </p>
          <p className="mt-5 max-w-xl text-lg font-light text-slate-600">Minimum order just six, no fuss. Order a small run or kit out the whole crew — same high-quality DTF, same care.</p>
        </div>
      </section>

      {/* ── Garments (horizontal scroll on mobile) ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4" data-reveal>
            <div className="max-w-2xl">
              <Label>What we print</Label>
              <h2 className={`mt-5 ${fd} text-4xl uppercase leading-[0.95] tracking-tight md:text-5xl`}>Custom garments.</h2>
              <p className="mt-3 text-sm font-semibold text-slate-400 sm:hidden">Swipe →</p>
            </div>
            <Link href="/printsgalore/products" className="text-sm font-bold uppercase tracking-wide text-[#0e0e10] underline-offset-4 hover:underline">See everything →</Link>
          </div>
          <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:mt-14 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3" data-stagger>
            {TEES.map((p, i) => (
              <article key={p.t} className="group relative flex w-[78%] shrink-0 snap-start flex-col overflow-hidden bg-[#f5f5f4] ring-1 ring-[#0e0e10]/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_45px_-22px_rgba(0,0,0,0.4)] sm:w-auto">
                <span className="h-1.5 w-full" style={{ background: COLORS[i % COLORS.length] }} aria-hidden />
                <div className="overflow-hidden">
                  <img src={p.img} alt={`Custom DTF printed garment — ${p.t}`} loading="lazy" className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex items-center justify-between gap-2 p-5">
                  <h3 className={`${fd} text-lg uppercase tracking-tight text-[#0e0e10]`}>{p.t}</h3>
                  <span className="-translate-x-1 text-[#EC008C] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" aria-hidden>→</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="bg-[#f5f5f4]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl" data-reveal>
            <Label>How it works</Label>
            <h2 className={`mt-5 ${fd} text-4xl uppercase leading-[0.95] tracking-tight md:text-5xl`}>Three steps to sorted.</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 md:grid-cols-3 md:gap-8" data-stagger>
            {STEPS.map((s, i) => (
              <div key={s.n} className="bg-white p-7 ring-1 ring-[#0e0e10]/10">
                <p className={`${fd} text-6xl leading-none`} style={{ color: COLORS[i % COLORS.length] }}>{s.n}</p>
                <h3 className={`mt-4 ${fd} text-xl uppercase tracking-tight text-[#0e0e10]`}>{s.t}</h3>
                <p className="mt-2 font-light text-slate-600">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-white">
        <AccentBar />
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px border-x border-[#0e0e10]/10 bg-[#0e0e10]/10 md:grid-cols-4" data-stagger>
          {[
            { v: "6", l: "Minimum order", count: true },
            { v: "24–48h", l: "Fast turnaround", count: false },
            { v: "100", s: "%", l: "Custom & bespoke", count: true },
            { v: "DTF", l: "Specialist printing", count: false },
          ].map((st, i) => (
            <div key={st.l} className="bg-white p-7 text-center md:p-10">
              {st.count ? (
                <p className={`${fd} text-4xl tracking-tight md:text-6xl`} style={{ color: COLORS[i % COLORS.length] }} data-count={st.v} data-suffix={st.s || ""}>0{st.s || ""}</p>
              ) : (
                <p className={`${fd} text-4xl tracking-tight md:text-6xl`} style={{ color: COLORS[i % COLORS.length] }}>{st.v}</p>
              )}
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-500">{st.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why choose ── */}
      <section className="bg-[#f5f5f4]">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24 lg:gap-16">
          <div className="relative overflow-hidden">
            <img src={IMG.jacket} alt="Custom-branded windbreaker printed by Prints Galore" data-clip className="aspect-square w-full bg-[#f5f5f4] object-cover" />
            <AccentBar className="absolute inset-x-0 bottom-0" />
          </div>
          <div data-reveal>
            <Label>Why Prints Galore</Label>
            <h2 className={`mt-5 ${fd} text-4xl uppercase leading-[0.95] tracking-tight md:text-[3.4rem]`}>Done right, done fast.</h2>
            <ul className="mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {REASONS.map((r, i) => (
                <li key={r} className="flex items-start gap-3 text-sm font-medium text-[#0e0e10]">
                  <span className="mt-1 h-2 w-2 shrink-0" style={{ background: COLORS[i % COLORS.length] }} aria-hidden /> {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 pb-20 md:px-8" data-reveal>
          <div className="relative flex flex-col items-center justify-between gap-6 overflow-hidden bg-[#EC008C] px-7 py-12 text-center text-white md:flex-row md:px-12 md:text-left">
            <div>
              <h2 className={`${fd} text-4xl uppercase tracking-tight md:text-5xl`}>Ready to get printing?</h2>
              <p className="mt-2 font-light text-white/90">Tell us what you need printed — minimum order 6, fast turnaround.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/printsgalore/contact#quote" data-magnetic className="rounded-md bg-white px-7 py-4 text-sm font-bold uppercase tracking-wide text-[#0e0e10] transition-transform hover:-translate-y-0.5">Get a quote</Link>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="rounded-md border border-white/60 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white/10">DM on Instagram</a>
            </div>
          </div>
        </div>
      </section>

      <PAFX />
    </>
  );
}
