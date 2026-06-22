import { QuoteForm } from "./QuoteForm";

/* eslint-disable @next/next/no-img-element */

const PHONE_DISPLAY = "07796 767441";
const PHONE_TEL = "tel:07796767441";
const EMAIL = "hello@bowdenslondon.co.uk";

const IMG = {
  hero: "https://images.pexels.com/photos/37627682/pexels-photo-37627682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  about: "https://images.pexels.com/photos/8961624/pexels-photo-8961624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  extensions: "https://images.pexels.com/photos/28885519/pexels-photo-28885519.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  kitchen: "https://images.pexels.com/photos/36511379/pexels-photo-36511379.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  bathroom: "https://images.pexels.com/photos/6957081/pexels-photo-6957081.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  electrical: "https://images.pexels.com/photos/3615735/pexels-photo-3615735.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  plumbing: "https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  roofing: "https://images.pexels.com/photos/32050399/pexels-photo-32050399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  brickwork: "https://images.pexels.com/photos/19688828/pexels-photo-19688828.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  plastering: "https://images.pexels.com/photos/5583128/pexels-photo-5583128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  gallery1: "https://images.pexels.com/photos/13758319/pexels-photo-13758319.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  gallery2: "https://images.pexels.com/photos/29356271/pexels-photo-29356271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  gallery3: "https://images.pexels.com/photos/36035073/pexels-photo-36035073.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  ctabg: "https://images.pexels.com/photos/5846253/pexels-photo-5846253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
};

const SERVICES = [
  { title: "Extensions & conversions", img: IMG.extensions, body: "Single & double-storey extensions, loft and garage conversions — more space, built right." },
  { title: "Kitchens", img: IMG.kitchen, body: "Full kitchen installations and renovations, from design to the finishing touches." },
  { title: "Bathrooms", img: IMG.bathroom, body: "Complete bathroom and wet-room fit-outs, beautifully finished and built to last." },
  { title: "Electrical work", img: IMG.electrical, body: "Safe, certified electrical work carried out by NICEIC & Part P engineers." },
  { title: "Plumbing & gas", img: IMG.plumbing, body: "Plumbing, heating and gas work completed by Gas Safe registered engineers." },
  { title: "Roofing", img: IMG.roofing, body: "Repairs, re-roofs and flat roofs — keeping your home watertight and secure." },
  { title: "Brickwork & groundwork", img: IMG.brickwork, body: "Walls, repointing, foundations and structural work by experienced bricklayers." },
  { title: "Plastering & decorating", img: IMG.plastering, body: "Smooth plastering, rendering and decorating for a flawless finish throughout." },
];

const WHY = [
  { title: "Small, approachable team", body: "You deal with the people doing the work — clear communication from first call to final handover." },
  { title: "Qualified & accredited", body: "NICEIC & Part P engineers, Gas Safe engineers and a Checkatrade member. Your project is in safe hands." },
  { title: "Respect for your property", body: "We treat you and your home with respect, keeping things tidy and tidy up when we're done." },
  { title: "Free, no-obligation quotes", body: "Honest, upfront pricing with no surprises. Call us and we'll come and take a look." },
];

const STEPS = [
  { n: "1", title: "Get in touch", body: "Call or send a few details about your project." },
  { n: "2", title: "Free quote", body: "We visit, assess the work and give you a clear price." },
  { n: "3", title: "We build", body: "Our qualified team gets to work, on time and on budget." },
  { n: "4", title: "Job done", body: "We finish, tidy up and hand back a job done properly." },
];

const ACCREDITATIONS = ["Checkatrade member", "Gas Safe registered", "NICEIC engineers", "Part P certified"];

function Logo() {
  return (
    <a href="#top" className="flex items-baseline gap-1.5 font-black tracking-tight" style={{ fontFamily: "var(--font-epilogue)" }}>
      <span className="text-xl text-white md:text-2xl">BOWDENS</span>
      <span className="text-xl text-[#f5a623] md:text-2xl">of London</span>
    </a>
  );
}

export default function BowdensPage() {
  return (
    <div id="top" className="bg-[#f6f4f1] text-[#1a2433]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0f1d2e]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 md:px-8">
          <Logo />
          <nav className="hidden items-center gap-7 text-sm font-semibold text-white/80 lg:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#why" className="hover:text-white">Why us</a>
            <a href="#gallery" className="hover:text-white">Our work</a>
            <a href="#quote" className="hover:text-white">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href={PHONE_TEL} className="hidden items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-white/10 sm:inline-flex">
              📞 {PHONE_DISPLAY}
            </a>
            <a href="#quote" className="rounded-full bg-[#f5a623] px-4 py-2 text-sm font-bold text-[#0f1d2e] transition-colors hover:bg-[#ffba3a] md:px-5">
              Free quote
            </a>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative isolate overflow-hidden bg-[#0f1d2e] text-white">
        <img src={IMG.hero} alt="Building work in progress" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0f1d2e] via-[#0f1d2e]/80 to-[#0f1d2e]/60" />
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f5a623]">South East London builders</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl" style={{ fontFamily: "var(--font-epilogue)" }}>
            Full-service building &amp; construction you can trust.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            Bowdens of London is a full-service building company based in South East London. Our small, approachable
            team of skilled tradespeople specialises in all aspects of building work and construction — done properly,
            by qualified people who respect you and your home.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#quote" className="rounded-full bg-[#f5a623] px-8 py-4 text-lg font-bold text-[#0f1d2e] transition-transform hover:-translate-y-0.5">
              Request a free quote
            </a>
            <a href={PHONE_TEL} className="rounded-full border-2 border-white/30 px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-white/10">
              Call {PHONE_DISPLAY}
            </a>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-white/70">
            {ACCREDITATIONS.map((a) => (
              <span key={a} className="flex items-center gap-2">
                <span className="text-[#f5a623]">✓</span> {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black tracking-tight md:text-4xl" style={{ fontFamily: "var(--font-epilogue)" }}>
              Experienced, qualified tradespeople — and a team you&apos;ll actually enjoy working with.
            </h2>
            <p className="mt-5 text-lg text-[#1a2433]/75">
              We work with NIC &amp; Part P engineers and Gas Safe engineers, and we&apos;re a member of Checkatrade —
              so you can be assured your project is in the hands of experienced, qualified people. From a single repair
              to a full renovation, we believe in treating our customers and their property with respect.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm font-semibold">
              {["All aspects of building work", "Extensions & renovations", "Gas Safe & NICEIC", "Checkatrade member"].map((x) => (
                <li key={x} className="flex items-start gap-2">
                  <span className="mt-0.5 text-[#f5a623]">●</span> {x}
                </li>
              ))}
            </ul>
            <a href="#quote" className="mt-8 inline-block rounded-full bg-[#0f1d2e] px-7 py-3.5 font-bold text-white transition-colors hover:bg-[#1a2f47]">
              Get your free quote →
            </a>
          </div>
          <div className="relative">
            <img src={IMG.about} alt="Bowdens of London team at work" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl" />
            <div className="absolute -bottom-5 -left-5 hidden rounded-xl bg-[#f5a623] px-6 py-4 text-[#0f1d2e] shadow-lg sm:block">
              <p className="text-2xl font-black leading-none" style={{ fontFamily: "var(--font-epilogue)" }}>Free</p>
              <p className="text-sm font-bold">no-obligation quotes</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f5a623]">What we do</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl" style={{ fontFamily: "var(--font-epilogue)" }}>
              All aspects of building work, under one roof.
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <article key={s.title} className="group overflow-hidden rounded-2xl border border-black/5 bg-[#f6f4f1] shadow-sm transition-shadow hover:shadow-md">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.img} alt={s.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold" style={{ fontFamily: "var(--font-epilogue)" }}>{s.title}</h3>
                  <p className="mt-1.5 text-sm text-[#1a2433]/70">{s.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why us ── */}
      <section id="why" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f5a623]">Why Bowdens</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl" style={{ fontFamily: "var(--font-epilogue)" }}>
            Building work done properly, by people who care.
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map((w, i) => (
            <div key={w.title} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0f1d2e] text-lg font-black text-[#f5a623]" style={{ fontFamily: "var(--font-epilogue)" }}>
                {i + 1}
              </div>
              <h3 className="mt-4 text-lg font-bold" style={{ fontFamily: "var(--font-epilogue)" }}>{w.title}</h3>
              <p className="mt-2 text-sm text-[#1a2433]/70">{w.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Process ── */}
      <section className="bg-[#0f1d2e] py-20 text-white md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <h2 className="text-3xl font-black tracking-tight md:text-4xl" style={{ fontFamily: "var(--font-epilogue)" }}>
            How it works
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <div key={s.n}>
                <div className="text-5xl font-black text-[#f5a623]" style={{ fontFamily: "var(--font-epilogue)" }}>{s.n}</div>
                <h3 className="mt-3 text-xl font-bold" style={{ fontFamily: "var(--font-epilogue)" }}>{s.title}</h3>
                <p className="mt-2 text-white/70">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section id="gallery" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f5a623]">Our work</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl" style={{ fontFamily: "var(--font-epilogue)" }}>
              A reputation built on quality.
            </h2>
          </div>
          <a href="#quote" className="rounded-full border-2 border-[#0f1d2e] px-6 py-3 font-bold transition-colors hover:bg-[#0f1d2e] hover:text-white">
            Start your project →
          </a>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[IMG.gallery1, IMG.gallery2, IMG.gallery3].map((src, i) => (
            <img key={i} src={src} alt="Recent building project" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-sm" loading="lazy" />
          ))}
        </div>
      </section>

      {/* ── CTA band ── */}
      <section className="relative isolate overflow-hidden bg-[#0f1d2e] text-white">
        <img src={IMG.ctabg} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20" />
        <div className="mx-auto max-w-4xl px-5 py-16 text-center md:px-8 md:py-20">
          <h2 className="text-3xl font-black tracking-tight md:text-5xl" style={{ fontFamily: "var(--font-epilogue)" }}>
            Got a project in mind? Let&apos;s talk.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Call us today for a free, no-obligation quote — or send us a few details and we&apos;ll get straight back to you.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href={PHONE_TEL} className="rounded-full bg-[#f5a623] px-8 py-4 text-lg font-bold text-[#0f1d2e] transition-transform hover:-translate-y-0.5">
              📞 Call {PHONE_DISPLAY}
            </a>
            <a href="#quote" className="rounded-full border-2 border-white/30 px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-white/10">
              Request a quote
            </a>
          </div>
        </div>
      </section>

      {/* ── Contact / quote ── */}
      <section id="quote" className="bg-[#0a1521] py-20 text-white md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f5a623]">Free quote</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl" style={{ fontFamily: "var(--font-epilogue)" }}>
              Get in touch
            </h2>
            <p className="mt-4 max-w-md text-white/70">
              Tell us about your project and we&apos;ll get back to you with a free, no-obligation quote. Prefer to talk?
              Give us a call — we&apos;re a friendly bunch.
            </p>
            <div className="mt-8 space-y-4">
              <a href={PHONE_TEL} className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
                <span className="text-2xl">📞</span>
                <span><span className="block text-xs uppercase tracking-wider text-white/50">Call us</span><span className="text-lg font-bold">{PHONE_DISPLAY}</span></span>
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
                <span className="text-2xl">✉️</span>
                <span><span className="block text-xs uppercase tracking-wider text-white/50">Email us</span><span className="text-lg font-bold">{EMAIL}</span></span>
              </a>
              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
                <span className="text-2xl">📍</span>
                <span><span className="block text-xs uppercase tracking-wider text-white/50">Service area</span><span className="text-lg font-bold">South East London &amp; surrounding areas</span></span>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#0f1d2e] py-12 text-white/70">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row">
            <div className="max-w-sm">
              <Logo />
              <p className="mt-4 text-sm text-white/60">
                Full-service building &amp; construction in South East London. Qualified, accredited and approachable.
              </p>
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs font-semibold text-white/50">
                {ACCREDITATIONS.map((a) => <span key={a}>{a}</span>)}
              </div>
            </div>
            <div className="text-sm">
              <p className="font-bold uppercase tracking-wider text-white/50">Get in touch</p>
              <a href={PHONE_TEL} className="mt-2 block font-bold text-white">{PHONE_DISPLAY}</a>
              <a href={`mailto:${EMAIL}`} className="mt-1 block hover:text-white">{EMAIL}</a>
              <p className="mt-1 text-white/50">South East London</p>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Bowdens of London. All rights reserved.</p>
            <p>
              Designed by{" "}
              <a href="https://bridgewayaibootcamp.com" target="_blank" rel="noopener noreferrer" className="text-white/55 hover:text-white">
                bridgewayaibootcamp.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
