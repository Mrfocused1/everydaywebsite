import Link from "next/link";
import {
  IMG, MARQUEE, TRUST, EVENTS, COLORS, AccentBar, Polaroid, fd, Label, Arrow,
  btnRed, btnGhostDark, btnGhostLight, INSTAGRAM,
} from "./brand";
import { SPFX } from "./SPFX";

/* eslint-disable @next/next/no-img-element */

const PROCESS = [
  { n: "01", t: "Snap", img: IMG.snap, b: "Our photographer roams your event on pro kit — catching the candid, the posed and the once-in-a-night moments." },
  { n: "02", t: "Print", img: IMG.print, b: "Every shot prints on-site in seconds — glossy keepsakes, with your logo, hashtag or border on them if you like." },
  { n: "03", t: "Keep", img: IMG.keep, b: "Guests walk away with a real photo in hand — a memory they keep long after the event ends." },
];

const REASONS = [
  "Prints in your guests' hands in seconds",
  "A real photographer, not a booth",
  "Branded borders, logos & hashtags",
  "Unlimited snaps all event long",
  "Any event, indoors or outdoors",
  "London-based, available nationwide",
];

const STATS = [
  { v: "60", s: "s", l: "Average snap-to-print", count: true },
  { v: "Unlimited", l: "Photos on the night", count: false },
  { v: "Any", l: "Event, any size", count: false },
  { v: "UK", l: "Wide coverage", count: false },
];

export default function SPHome() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative isolate flex min-h-[90vh] items-end overflow-hidden bg-[#14141a]">
        <picture>
          <source media="(max-width: 640px)" srcSet={IMG.heroMobile} />
          <img src={IMG.hero} alt="Festival-goer holding a freshly printed photo" data-parallax className="absolute inset-0 -z-10 h-[112%] w-full object-cover" />
        </picture>
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#14141a]/92 via-[#14141a]/35 to-[#14141a]/10" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#14141a]/55 via-transparent to-transparent" />
        <AccentBar className="absolute inset-x-0 top-0 z-10" />
        <div className="mx-auto w-full max-w-6xl px-5 pb-16 pt-32 text-white md:px-8 md:pb-24">
          <div className="max-w-3xl">
            <Label onDark>Instant event photography · London &amp; nationwide</Label>
            <h1 className={`hero-h mt-6 ${fd} text-[3.4rem] uppercase leading-[0.86] tracking-tight md:text-[6rem]`}>
              <span className="block overflow-hidden"><span className="hero-line-inner block" style={{ transform: "translateY(110%)" }}>Snap it.</span></span>
              <span className="block overflow-hidden"><span className="hero-line-inner block" style={{ transform: "translateY(110%)" }}>Print it.</span></span>
              <span className="block overflow-hidden"><span className="hero-line-inner block text-[#FF4D2E]" style={{ transform: "translateY(110%)" }}>Keep it.</span></span>
            </h1>
            <p className="hero-fade mt-7 max-w-xl text-lg font-light text-white/85 opacity-0" style={{ transform: "translateY(8px)" }}>
              A roaming event photographer who captures the moment and prints it on the spot — so every guest walks away
              with a real photo to keep. Festivals, parties, weddings and brand activations.
            </p>
            <div className="hero-fade mt-9 flex flex-wrap gap-4 opacity-0" style={{ transform: "translateY(8px)" }}>
              <Link href="/snap-and-print/contact#book" data-magnetic className={btnRed}>Book your event <Arrow /></Link>
              <Link href="/snap-and-print/work" className={btnGhostDark}>See the gallery</Link>
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
            <Label>Snap &amp; Print Events</Label>
            <h2 className={`mt-5 ${fd} text-4xl uppercase leading-[0.95] tracking-tight md:text-[3.4rem]`}>
              Every guest leaves<br />with a memory.
            </h2>
            <p className="mt-5 text-lg font-light text-slate-600">
              A photo booth keeps people queuing in a corner. We don&apos;t. Our photographer works the whole room —
              then hands your guests a printed photo within a minute. It&apos;s a keepsake, an icebreaker and, with your
              branding on the border, a walking advert for your event.
            </p>
            <Link href="/snap-and-print/how-it-works" className={`${btnGhostLight} mt-8`}>How it works <Arrow /></Link>
          </div>
          <div className="relative mx-auto max-w-[22rem] md:max-w-none" data-reveal>
            <Polaroid src={IMG.friends} alt="Friends celebrating at a festival" caption="that's a keeper ✦" rotate={-3} className="relative z-10" />
            <Polaroid src={IMG.keep} alt="Guest holding their printed photo" rotate={5} className="absolute -bottom-8 -right-2 w-2/3 opacity-95 md:-right-8" />
          </div>
        </div>
      </section>

      {/* ── Snap → Print → Keep (the signature) ── */}
      <section className="bg-[#0e0e10] text-white">
        <AccentBar />
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl" data-reveal>
            <Label onDark>The process</Label>
            <h2 className={`mt-5 ${fd} text-4xl uppercase leading-[0.95] tracking-tight md:text-5xl`}>Snap. Print. Keep.</h2>
            <p className="mt-4 text-lg font-light text-white/65">Three steps, about sixty seconds, zero queues.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 md:grid-cols-3 md:gap-8" data-stagger>
            {PROCESS.map((p, i) => (
              <div key={p.n} className="group overflow-hidden bg-white/5 ring-1 ring-white/10">
                <div className="relative overflow-hidden">
                  <span className="absolute left-0 top-0 z-10 h-1.5 w-full" style={{ background: COLORS[i % COLORS.length] }} aria-hidden />
                  <img src={p.img} alt={`${p.t} — Snap & Print Events`} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <p className={`${fd} text-5xl leading-none`} style={{ color: COLORS[i % COLORS.length] }}>{p.n}</p>
                  <h3 className={`mt-3 ${fd} text-2xl uppercase tracking-tight`}>{p.t}</h3>
                  <p className="mt-2 font-light text-white/65">{p.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Statement band ── */}
      <section className="bg-[#f5f5f4]">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28" data-reveal>
          <AccentBar className="max-w-[12rem]" />
          <p className={`mt-7 ${fd} text-[2.6rem] uppercase leading-[0.92] tracking-tight text-[#0e0e10] md:text-[4.6rem]`}>
            The moment,<br />in their hands,<br /><span className="text-[#FF4D2E]">in seconds.</span>
          </p>
          <p className="mt-5 max-w-xl text-lg font-light text-slate-600">Digital photos get lost in a camera roll. A print on the night gets stuck on the fridge for years.</p>
        </div>
      </section>

      {/* ── Events we cover (horizontal scroll on mobile) ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4" data-reveal>
            <div className="max-w-2xl">
              <Label>Events we cover</Label>
              <h2 className={`mt-5 ${fd} text-4xl uppercase leading-[0.95] tracking-tight md:text-5xl`}>Any event, any size.</h2>
              <p className="mt-3 text-sm font-semibold text-slate-400 sm:hidden">Swipe →</p>
            </div>
            <Link href="/snap-and-print/contact#book" className="text-sm font-bold uppercase tracking-wide text-[#0e0e10] underline-offset-4 hover:underline">Book yours →</Link>
          </div>
          <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:mt-14 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3" data-stagger>
            {EVENTS.map((p, i) => (
              <article key={p.t} className="group relative flex w-[78%] shrink-0 snap-start flex-col overflow-hidden bg-[#f5f5f4] ring-1 ring-[#0e0e10]/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_45px_-22px_rgba(0,0,0,0.4)] sm:w-auto">
                <span className="h-1.5 w-full" style={{ background: COLORS[i % COLORS.length] }} aria-hidden />
                <div className="overflow-hidden">
                  <img src={p.img} alt={p.t} loading="lazy" className="aspect-[5/4] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className={`${fd} text-lg uppercase tracking-tight text-[#0e0e10]`}>{p.t}</h3>
                  <p className="mt-2 text-sm font-light text-slate-600">{p.b}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats band ── */}
      <section className="bg-white">
        <AccentBar />
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px border-x border-[#0e0e10]/10 bg-[#0e0e10]/10 md:grid-cols-4" data-stagger>
          {STATS.map((st, i) => (
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
          <div className="relative mx-auto max-w-[22rem] md:max-w-none" data-reveal>
            <Polaroid src={IMG.snap} alt="The photographer at work at a festival" caption="caught in the act" rotate={-2} />
          </div>
          <div data-reveal>
            <Label>Why Snap &amp; Print</Label>
            <h2 className={`mt-5 ${fd} text-4xl uppercase leading-[0.95] tracking-tight md:text-[3.4rem]`}>More than a booth.</h2>
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
          <div className="relative flex flex-col items-center justify-between gap-6 overflow-hidden bg-[#FF4D2E] px-7 py-12 text-center text-white md:flex-row md:px-12 md:text-left">
            <div>
              <h2 className={`${fd} text-4xl uppercase tracking-tight md:text-5xl`}>Got an event coming up?</h2>
              <p className="mt-2 font-light text-white/90">Tell us the date and we&apos;ll send a quote — let&apos;s give your guests something to keep.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/snap-and-print/contact#book" data-magnetic className="rounded-md bg-white px-7 py-4 text-sm font-bold uppercase tracking-wide text-[#0e0e10] transition-transform hover:-translate-y-0.5">Book your event</Link>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="rounded-md border border-white/60 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white/10">See us on Instagram</a>
            </div>
          </div>
        </div>
      </section>

      <SPFX />
    </>
  );
}
