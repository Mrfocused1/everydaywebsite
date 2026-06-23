import Link from "next/link";
import {
  IMG, MARQUEE, TRUST, COLORS, AccentBar, fd, Label, Arrow,
  btnBlue, btnGhostDark, btnGhostLight, INSTAGRAM,
} from "./brand";
import { IBFX } from "./IBFX";

/* eslint-disable @next/next/no-img-element */

const TEES = [
  { t: "Graphic Print", img: "/marketing/ib/ib-tee-cream.jpg" },
  { t: "Full-Colour Print", img: "/marketing/ib/ib-tee-mario.jpg" },
  { t: "Rainbow Print", img: "/marketing/ib/ib-tee-rainbow.jpg" },
  { t: "Logo Print", img: "/marketing/ib/ib-tee-fortnite.jpg" },
  { t: "Streetwear Print", img: "/marketing/ib/ib-tee-streetwear.jpg" },
  { t: "Flat-Lay Range", img: "/marketing/ib/ib-tee-flatlay.jpg" },
];

const STEPS = [
  { n: "01", t: "Send your design", b: "Email your artwork and the garments you want — we'll advise on the best method for the job." },
  { n: "02", t: "We print & stitch", b: "Screen print, DTG or embroidery, sampled and produced to a high standard." },
  { n: "03", t: "Delivered fast", b: "Collect in Milton Keynes, or we'll ship your order nationwide — quickly." },
];

const REASONS = [
  "No minimum order — order from just one",
  "Fast turnaround, every time",
  "Screen print, DTG & embroidery",
  "Any colour, any quantity",
  "Vivid, full-colour prints",
  "Milton Keynes — shipping nationwide",
];

export default function IBHome() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative isolate flex min-h-[90vh] items-end overflow-hidden bg-[#14141a]">
        <img src={IMG.hero} alt="Colourful custom printed apparel" data-parallax className="absolute inset-0 -z-10 h-[112%] w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#14141a]/92 via-[#14141a]/35 to-[#14141a]/10" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#14141a]/55 via-transparent to-transparent" />
        <AccentBar className="absolute inset-x-0 top-0 z-10" />
        <div className="mx-auto w-full max-w-6xl px-5 pb-16 pt-32 text-white md:px-8 md:pb-24">
          <div className="max-w-3xl">
            <Label onDark>Custom garment printing · Milton Keynes</Label>
            <h1 className={`hero-h mt-6 ${fd} text-[3.4rem] uppercase leading-[0.86] tracking-tight md:text-[6rem]`}>
              <span className="block overflow-hidden"><span className="hero-line-inner block" style={{ transform: "translateY(110%)" }}>Print it.</span></span>
              <span className="block overflow-hidden"><span className="hero-line-inner block" style={{ transform: "translateY(110%)" }}>Stitch it.</span></span>
              <span className="block overflow-hidden"><span className="hero-line-inner block text-[#ff3b30]" style={{ transform: "translateY(110%)" }}>Wear it.</span></span>
            </h1>
            <p className="hero-fade mt-7 max-w-xl text-lg font-light text-white/85 opacity-0" style={{ transform: "translateY(8px)" }}>
              High-quality, cost-effective custom garment printing &amp; branding in Milton Keynes — t-shirts, hoodies,
              workwear and merch. No minimum order, fast turnaround.
            </p>
            <div className="hero-fade mt-9 flex flex-wrap gap-4 opacity-0" style={{ transform: "translateY(8px)" }}>
              <Link href="/industry-branding/contact#quote" data-magnetic className={btnBlue}>Get a quote <Arrow /></Link>
              <Link href="/industry-branding/work" className={btnGhostDark}>See our work</Link>
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
            <Label>Industry Branding</Label>
            <h2 className={`mt-5 ${fd} text-4xl uppercase leading-[0.95] tracking-tight md:text-[3.4rem]`}>
              Your logo, on<br />anything you wear.
            </h2>
            <p className="mt-5 text-lg font-light text-slate-600">
              We&apos;re a Milton Keynes garment-printing &amp; branding studio. From a single custom tee to a full team
              kit or merch drop, we print and embroider to a high standard — fast, and without a minimum order.
            </p>
            <Link href="/industry-branding/about" className={`${btnGhostLight} mt-8`}>About us <Arrow /></Link>
          </div>
          <div className="relative overflow-hidden">
            <img src={IMG.about} alt="In the workshop" data-clip className="aspect-[4/3] w-full object-cover" />
            <AccentBar className="absolute inset-x-0 bottom-0" />
          </div>
        </div>
      </section>

      {/* ── Statement band (light) ── */}
      <section className="bg-[#f5f5f4]">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28" data-reveal>
          <AccentBar className="max-w-[12rem]" />
          <p className={`mt-7 ${fd} text-[2.6rem] uppercase leading-[0.92] tracking-tight text-[#0e0e10] md:text-[4.6rem]`}>
            From a single tee<br />to <span className="text-[#ff3b30]">ten thousand.</span>
          </p>
          <p className="mt-5 max-w-xl text-lg font-light text-slate-600">No minimum order, no fuss. Order one or order thousands — same quality, same care.</p>
        </div>
      </section>

      {/* ── T-Shirts (horizontal scroll on mobile) ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4" data-reveal>
            <div className="max-w-2xl">
              <Label>Our t-shirts</Label>
              <h2 className={`mt-5 ${fd} text-4xl uppercase leading-[0.95] tracking-tight md:text-5xl`}>Custom tees.</h2>
              <p className="mt-3 text-sm font-semibold text-slate-400 sm:hidden">Swipe →</p>
            </div>
            <Link href="/industry-branding/products" className="text-sm font-bold uppercase tracking-wide text-[#0e0e10] underline-offset-4 hover:underline">See everything →</Link>
          </div>
          <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:mt-14 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3" data-stagger>
            {TEES.map((p, i) => (
              <article key={p.t} className="group relative flex w-[78%] shrink-0 snap-start flex-col overflow-hidden bg-[#f5f5f4] ring-1 ring-[#0e0e10]/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_45px_-22px_rgba(0,0,0,0.4)] sm:w-auto">
                <span className="h-1.5 w-full" style={{ background: COLORS[i % COLORS.length] }} aria-hidden />
                <div className="overflow-hidden">
                  <img src={p.img} alt={`Custom printed t-shirt — ${p.t}`} loading="lazy" className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex items-center justify-between gap-2 p-5">
                  <h3 className={`${fd} text-lg uppercase tracking-tight text-[#0e0e10]`}>{p.t}</h3>
                  <span className="-translate-x-1 text-[#ff3b30] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" aria-hidden>→</span>
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
            { v: "1", l: "Order from just one", count: true },
            { v: "24–48h", l: "Fast turnaround", count: false },
            { v: "100", s: "%", l: "Custom & bespoke", count: true },
            { v: "6", s: "+", l: "Print methods", count: true },
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
            <img src={IMG.work1} alt="Branded garment work" data-clip className="aspect-[4/3] w-full object-cover" />
            <AccentBar className="absolute inset-x-0 bottom-0" />
          </div>
          <div data-reveal>
            <Label>Why Industry Branding</Label>
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
          <div className="relative flex flex-col items-center justify-between gap-6 overflow-hidden bg-[#ff3b30] px-7 py-12 text-center text-white md:flex-row md:px-12 md:text-left">
            <div>
              <h2 className={`${fd} text-4xl uppercase tracking-tight md:text-5xl`}>Ready to kit out?</h2>
              <p className="mt-2 font-light text-white/90">Tell us what you need branded — no minimum order, fast turnaround.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/industry-branding/contact#quote" data-magnetic className="rounded-md bg-white px-7 py-4 text-sm font-bold uppercase tracking-wide text-[#0e0e10] transition-transform hover:-translate-y-0.5">Get a quote</Link>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="rounded-md border border-white/60 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white/10">DM on Instagram</a>
            </div>
          </div>
        </div>
      </section>

      <IBFX />
    </>
  );
}
