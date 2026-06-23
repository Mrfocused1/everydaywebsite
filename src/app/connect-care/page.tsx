import Link from "next/link";
import {
  IMG, SERVICES, TESTIMONIALS, CREDENTIALS, RAINBOW, MARQUEE, CUT_TR, CUT_BL,
  fd, Label, Arrow, RainbowDots, RainbowLine, AccentBar, btnPrimary, btnGhost,
  PHONE_TEL, PHONE_DISPLAY,
} from "./brand";
import { CCCFX } from "./CCCFX";

/* eslint-disable @next/next/no-img-element */

const APPROACH = [
  { t: "Empower", b: "We build your team's knowledge and confidence so good practice sticks." },
  { t: "Support", b: "Hands-on, reassuring help at every step — you're never on your own." },
  { t: "Advise", b: "Clear, practical guidance grounded in 20+ years of real CQC experience." },
  { t: "Mentor", b: "Ongoing mentoring for managers and providers, tailored to your service." },
];

const CLIENTS = ["Clover Care", "Elizabeth Rose Home Care", "Aphealthcare", "JWM Healthcare", "24/7 Healthcare"];

export default function CCCHome() {
  return (
    <>
      {/* ── Hero (image-led) ── */}
      <section className="relative isolate flex min-h-[92vh] items-end overflow-hidden">
        <img src={IMG.care} alt="A carer supporting an elderly person" data-parallax className="absolute inset-0 -z-10 h-[112%] w-full object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#241b2b]/92 via-[#241b2b]/45 to-[#241b2b]/15" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#241b2b]/70 via-[#241b2b]/20 to-transparent" />
        <AccentBar className="absolute inset-x-0 top-0 z-10" />
        <div className="mx-auto w-full max-w-6xl px-5 pb-16 pt-32 text-white md:px-8 md:pb-24">
          <div className="max-w-3xl">
            <p className="hero-fade flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white/85 opacity-0" style={{ transform: "translateY(8px)" }}>
              <RainbowLine /> Care home &amp; domiciliary care consultancy · Manchester
            </p>
            <h1 className={`hero-h mt-6 ${fd} text-[3rem] font-light leading-[0.98] tracking-tight md:text-[5.2rem]`}>
              <span className="block overflow-hidden"><span className="hero-line-inner block pb-[0.08em]" style={{ transform: "translateY(110%)" }}>Outstanding care,</span></span>
              <span className="block overflow-hidden"><span className="hero-line-inner block pb-[0.08em] italic text-[#ffc7df]" style={{ transform: "translateY(110%)" }}>made achievable.</span></span>
            </h1>
            <p className="hero-fade mt-6 max-w-xl text-lg font-light text-white/85 opacity-0" style={{ transform: "translateY(8px)" }}>
              We help care home and domiciliary care providers meet CQC standards with confidence — from new
              registration to mock inspections and ongoing manager support.
            </p>
            <div className="hero-fade mt-9 flex flex-wrap gap-3 opacity-0" style={{ transform: "translateY(8px)" }}>
              <Link href="/connect-care/contact" data-magnetic className={btnPrimary}>Book a consultation <Arrow /></Link>
              <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#241b2b]">Our services</a>
            </div>
            <div className="hero-fade mt-10 flex items-center gap-3 text-sm text-white/80 opacity-0">
              <RainbowDots /> <span>20+ years&apos; experience · Led by Nya K. Mabu</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Marquee ── */}
      <section className="overflow-hidden border-b border-[#2b2d33]/8 bg-[#faf7f2] py-5">
        <div data-marquee-track className="flex w-max items-center gap-6 whitespace-nowrap will-change-transform">
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span key={i} className={`flex items-center gap-6 ${fd} text-xl font-light italic text-[#2b2d33] md:text-2xl`}>
              {m} <span className="h-2 w-2 rounded-full" style={{ background: RAINBOW[i % RAINBOW.length] }} aria-hidden />
            </span>
          ))}
        </div>
      </section>

      {/* ── Clients strip ── */}
      <section className="border-b border-[#2b2d33]/8 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-7 md:flex-row md:gap-8 md:px-8" data-reveal>
          <span className="shrink-0 text-xs font-bold uppercase tracking-[0.18em] text-[#9a9ea5]">Trusted by providers</span>
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-sm font-medium text-[#6b6f76]">
            {CLIENTS.map((c) => (<span key={c}>{c}</span>))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="scroll-mt-20 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl" data-reveal>
            <Label>How we help</Label>
            <h2 className={`mt-5 ${fd} text-3xl font-light leading-[1.08] tracking-tight text-[#2b2d33] md:text-[3rem]`}>Three ways we support your service.</h2>
            <p className="mt-5 text-lg font-light text-[#6b6f76]">Whether you&apos;re just starting out or aiming for Outstanding, we meet you where you are.</p>
          </div>
          <div className="mt-12 grid gap-7 md:grid-cols-3 md:gap-8" data-stagger>
            {SERVICES.map((s, i) => (
              <article key={s.t} className="group flex flex-col">
                <div className="overflow-hidden" style={{ clipPath: i === 1 ? CUT_TR : i === 2 ? CUT_BL : undefined, borderRadius: i === 0 ? "1.5rem" : undefined }}>
                  <img src={s.img} alt={s.t} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]" />
                </div>
                <div className="mt-5">
                  <span className="block h-1 w-10 rounded-full" style={{ background: RAINBOW[i % RAINBOW.length] }} aria-hidden />
                  <div className="mt-4 flex items-center justify-between gap-2">
                    <h3 className={`${fd} text-xl font-medium text-[#2b2d33]`}>{s.t}</h3>
                    <span className="-translate-x-1 text-[#2a7fc4] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" aria-hidden>→</span>
                  </div>
                  <p className="mt-2.5 text-sm font-light leading-relaxed text-[#6b6f76]">{s.b}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Approach (horizontal scroll on mobile) ── */}
      <section className="bg-[#faf7f2]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl" data-reveal>
            <Label>Our approach</Label>
            <h2 className={`mt-5 ${fd} text-3xl font-light leading-[1.08] tracking-tight text-[#2b2d33] md:text-[3rem]`}>Empower. Support. Advise. Mentor.</h2>
            <p className="mt-4 text-sm font-semibold text-[#9a9ea5] sm:hidden">Swipe →</p>
          </div>
          <div className="relative mt-10 md:mt-14">
            {/* storyline: GSAP scroll-drawn squiggly line connecting the cards (desktop) */}
            <svg className="pointer-events-none absolute inset-x-[12%] top-[3.4rem] z-0 hidden h-24 w-[76%] md:block" viewBox="0 0 1000 120" fill="none" preserveAspectRatio="none" aria-hidden>
              <defs>
                <linearGradient id="ccc-thread" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#e0559a" />
                  <stop offset="28%" stopColor="#ef9a3d" />
                  <stop offset="52%" stopColor="#7a55a6" />
                  <stop offset="76%" stopColor="#5fb85a" />
                  <stop offset="100%" stopColor="#2f8fce" />
                </linearGradient>
              </defs>
              <path className="draw-line" d="M0 60 C 90 60 120 18 210 18 C 300 18 300 102 390 102 C 480 102 480 18 570 18 C 660 18 660 102 750 102 C 840 102 900 60 1000 60" stroke="url(#ccc-thread)" strokeWidth="3.5" strokeLinecap="round" />
            </svg>
            <div className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:grid md:grid-cols-4 md:gap-6 md:overflow-visible md:px-0" data-stagger>
              {APPROACH.map((a, i) => (
                <div key={a.t} className="group relative z-10 w-[74%] shrink-0 snap-start rounded-3xl bg-white p-7 shadow-sm ring-1 ring-[#2b2d33]/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-25px_rgba(43,45,51,0.3)] md:w-auto">
                  <span className="grid h-10 w-10 place-items-center rounded-full text-sm font-bold text-white shadow-sm transition-transform duration-300 group-hover:scale-110" style={{ background: RAINBOW[i % RAINBOW.length] }}>{i + 1}</span>
                  <h3 className={`mt-4 ${fd} text-xl font-medium text-[#2b2d33]`}>{a.t}</h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-[#6b6f76]">{a.b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Founder ── */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24 lg:gap-16">
          <div className="relative" data-reveal>
            <div className="pointer-events-none absolute -left-6 -top-6 h-44 w-44 rounded-full bg-[#7a55a6]/15 blur-2xl" aria-hidden />
            <div className="pointer-events-none absolute -bottom-6 right-6 h-40 w-40 rounded-full bg-[#5fb85a]/15 blur-2xl" aria-hidden />
            <img src={IMG.nyaPortrait} alt="Nya K. Mabu" className="relative aspect-[4/5] w-full object-cover" style={{ clipPath: CUT_BL, filter: "drop-shadow(0 28px 40px rgba(43,45,51,0.28))" }} />
          </div>
          <div data-reveal>
            <Label>Meet your consultant</Label>
            <h2 className={`mt-5 ${fd} text-3xl font-light leading-[1.06] tracking-tight text-[#2b2d33] md:text-[2.9rem]`}>Led by <span className="italic text-[#2a7fc4]">Nya K. Mabu.</span></h2>
            <p className="mt-5 text-lg font-light text-[#6b6f76]">
              With over 20 years in health and social care, Nya founded Connect Care Consultancy to empower, support,
              advise and mentor care providers — simplifying compliance and making premium support genuinely affordable.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {CREDENTIALS.map((c, i) => (
                <li key={c} className="flex items-start gap-3 text-sm font-medium text-[#2b2d33]">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full" style={{ background: RAINBOW[i % RAINBOW.length] }} aria-hidden /> {c}
                </li>
              ))}
            </ul>
            <Link href="/connect-care/about" className={`${btnGhost} mt-8`}>About Connect Care <Arrow /></Link>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-[#241b2b] text-white">
        <AccentBar />
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-white/10 md:grid-cols-4" data-stagger>
          {[
            { v: "20", s: "+", l: "Years' experience", count: true },
            { v: "5", l: "CQC key questions", count: true },
            { v: "5", s: "★", l: "Client rated", count: true },
            { v: "1:1", l: "Tailored support", count: false },
          ].map((st, i) => (
            <div key={st.l} className="bg-[#241b2b] p-7 text-center md:p-10">
              {st.count ? (
                <p className={`${fd} text-4xl font-light tracking-tight md:text-6xl`} style={{ color: RAINBOW[i % RAINBOW.length] }} data-count={st.v} data-suffix={st.s || ""}>0{st.s || ""}</p>
              ) : (
                <p className={`${fd} text-4xl font-light tracking-tight md:text-6xl`} style={{ color: RAINBOW[i % RAINBOW.length] }}>{st.v}</p>
              )}
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-white/55">{st.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials (horizontal scroll on mobile) ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl" data-reveal>
            <Label>What our clients say</Label>
            <h2 className={`mt-5 ${fd} text-3xl font-light leading-[1.08] tracking-tight text-[#2b2d33] md:text-[3rem]`}>Calm, confident, prepared.</h2>
            <p className="mt-4 text-sm font-semibold text-[#9a9ea5] sm:hidden">Swipe →</p>
          </div>
          <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:mt-12 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 lg:grid-cols-3" data-stagger>
            {TESTIMONIALS.map((t, i) => (
              <figure key={t.n} className="flex w-[82%] shrink-0 snap-start flex-col rounded-3xl bg-[#faf7f2] p-7 ring-1 ring-[#2b2d33]/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-25px_rgba(43,45,51,0.25)] sm:w-auto">
                <span className={`${fd} text-4xl leading-none`} style={{ color: RAINBOW[i % RAINBOW.length] }} aria-hidden>&ldquo;</span>
                <blockquote className={`mt-2 flex-1 ${fd} text-lg font-light italic leading-relaxed text-[#2b2d33]`}>{t.q}</blockquote>
                <figcaption className="mt-5 border-t border-[#2b2d33]/10 pt-4">
                  <p className="text-sm font-semibold text-[#2b2d33]">{t.n}</p>
                  <p className="text-sm font-light text-[#6b6f76]">{t.r}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 pb-20 md:px-8" data-reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#eef5fb] px-7 py-14 text-center md:px-12 md:py-20" style={{ clipPath: CUT_TR }}>
            <div className="pointer-events-none absolute -right-16 -top-16 h-60 w-60 rounded-full bg-[#2f8fce]/15 blur-3xl" aria-hidden />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-60 w-60 rounded-full bg-[#e0559a]/15 blur-3xl" aria-hidden />
            <div className="relative mx-auto max-w-2xl">
              <RainbowDots className="justify-center" />
              <h2 className={`mt-5 ${fd} text-3xl font-light leading-[1.08] tracking-tight text-[#2b2d33] md:text-[3rem]`}>Ready to feel confident about your next inspection?</h2>
              <p className="mt-4 text-lg font-light text-[#6b6f76]">Book a friendly, no-pressure consultation and let&apos;s talk about your service.</p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link href="/connect-care/contact" data-magnetic className={btnPrimary}>Book a consultation <Arrow /></Link>
                <a href={PHONE_TEL} className={btnGhost}>{PHONE_DISPLAY}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CCCFX />
    </>
  );
}
