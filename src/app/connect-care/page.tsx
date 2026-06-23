import Link from "next/link";
import {
  IMG, SERVICES, TESTIMONIALS, CREDENTIALS, RAINBOW, fd, Label, Arrow, RainbowDots,
  btnPrimary, btnGhost, PHONE_TEL, PHONE_DISPLAY,
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
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#faf7f2]">
        <div className="pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full bg-[#2f8fce]/10 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#e0559a]/10 blur-3xl" aria-hidden />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-28 md:grid-cols-2 md:gap-14 md:px-8 md:pb-24 md:pt-36 lg:gap-20">
          <div className="hero-fade order-2 opacity-0 md:order-1" style={{ transform: "translateY(10px)" }}>
            <Label>Care home &amp; domiciliary care consultancy · Manchester</Label>
            <h1 className={`mt-5 ${fd} text-[2.8rem] font-light leading-[1.02] tracking-tight text-[#2b2d33] md:text-[4.2rem]`}>
              Outstanding care, <span className="italic text-[#2a7fc4]">made achievable.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg font-light text-[#6b6f76]">
              We help care home and domiciliary care providers meet CQC standards with confidence — from new
              registration to mock inspections and ongoing manager support.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/connect-care/contact" data-magnetic className={btnPrimary}>Book a consultation <Arrow /></Link>
              <a href="#services" className={btnGhost}>Our services</a>
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm text-[#6b6f76]">
              <RainbowDots /> <span>20+ years&apos; experience · Led by Nya K. Mabu</span>
            </div>
          </div>
          <div className="hero-fade relative order-1 opacity-0 md:order-2" style={{ transform: "translateY(10px)" }}>
            <div className="pointer-events-none absolute -right-5 -top-5 h-44 w-44 rounded-full bg-[#5fb85a]/20 blur-2xl" aria-hidden />
            <div className="pointer-events-none absolute -bottom-5 -left-5 h-40 w-40 rounded-full bg-[#ef9a3d]/20 blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-25px_rgba(43,45,51,0.35)] ring-1 ring-[#2b2d33]/5">
              <img src={IMG.nya} alt="Nya K. Mabu — Connect Care Consultancy" className="aspect-[5/4] w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Clients strip ── */}
      <section className="border-y border-[#2b2d33]/8 bg-white">
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
          <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8" data-stagger>
            {SERVICES.map((s, i) => (
              <article key={s.t} className="group flex flex-col overflow-hidden rounded-3xl bg-[#faf7f2] ring-1 ring-[#2b2d33]/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-25px_rgba(43,45,51,0.3)]">
                <div className="overflow-hidden">
                  <img src={s.img} alt={s.t} loading="lazy" className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <span className="block h-1 w-10 rounded-full" style={{ background: RAINBOW[i % RAINBOW.length] }} aria-hidden />
                  <h3 className={`mt-4 ${fd} text-xl font-medium text-[#2b2d33]`}>{s.t}</h3>
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
          <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:mt-12 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 lg:grid-cols-4" data-stagger>
            {APPROACH.map((a, i) => (
              <div key={a.t} className="w-[74%] shrink-0 snap-start rounded-3xl bg-white p-7 ring-1 ring-[#2b2d33]/5 sm:w-auto">
                <span className="grid h-9 w-9 place-items-center rounded-full text-sm font-bold text-white" style={{ background: RAINBOW[i % RAINBOW.length] }}>{i + 1}</span>
                <h3 className={`mt-4 ${fd} text-xl font-medium text-[#2b2d33]`}>{a.t}</h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-[#6b6f76]">{a.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founder ── */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24 lg:gap-16">
          <div className="relative" data-reveal>
            <div className="pointer-events-none absolute -left-5 -top-5 h-40 w-40 rounded-full bg-[#7a55a6]/15 blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-25px_rgba(43,45,51,0.3)] ring-1 ring-[#2b2d33]/5">
              <img src={IMG.nyaPortrait} alt="Nya K. Mabu" data-clip className="aspect-[4/5] w-full object-cover" />
            </div>
          </div>
          <div data-reveal>
            <Label>Meet your consultant</Label>
            <h2 className={`mt-5 ${fd} text-3xl font-light leading-[1.06] tracking-tight text-[#2b2d33] md:text-[2.9rem]`}>Led by Nya K. Mabu.</h2>
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
      <section className="bg-[#faf7f2]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-[#2b2d33]/8 bg-[#2b2d33]/8 md:grid-cols-4" data-stagger>
          {[
            { v: "20", s: "+", l: "Years' experience", count: true },
            { v: "5", l: "CQC key questions", count: true },
            { v: "5", s: "★", l: "Client rated", count: true },
            { v: "1:1", l: "Tailored support", count: false },
          ].map((st, i) => (
            <div key={st.l} className="bg-[#faf7f2] p-7 text-center md:p-10">
              {st.count ? (
                <p className={`${fd} text-4xl font-light tracking-tight md:text-5xl`} style={{ color: RAINBOW[i % RAINBOW.length] }} data-count={st.v} data-suffix={st.s || ""}>0{st.s || ""}</p>
              ) : (
                <p className={`${fd} text-4xl font-light tracking-tight md:text-5xl`} style={{ color: RAINBOW[i % RAINBOW.length] }}>{st.v}</p>
              )}
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#6b6f76]">{st.l}</p>
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
              <figure key={t.n} className="flex w-[82%] shrink-0 snap-start flex-col rounded-3xl bg-[#faf7f2] p-7 ring-1 ring-[#2b2d33]/5 sm:w-auto">
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
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#eef5fb] px-7 py-14 text-center md:px-12 md:py-20">
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
