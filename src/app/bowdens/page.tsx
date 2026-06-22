import { Poppins } from "next/font/google";
import { QuoteForm } from "./QuoteForm";

/* eslint-disable @next/next/no-img-element */

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], display: "swap" });

const PHONE_DISPLAY = "07796 767441";
const PHONE_TEL = "tel:07796767441";
const EMAIL = "hello@bowdenslondon.co.uk";

const IMG = {
  hero: "https://images.pexels.com/photos/37627682/pexels-photo-37627682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  about: "https://images.pexels.com/photos/8961624/pexels-photo-8961624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  extensions: "https://images.pexels.com/photos/28885519/pexels-photo-28885519.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  kitchen: "https://images.pexels.com/photos/36511379/pexels-photo-36511379.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  bathroom: "https://images.pexels.com/photos/6957081/pexels-photo-6957081.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  electrical: "https://images.pexels.com/photos/3615735/pexels-photo-3615735.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  plumbing: "https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  roofing: "https://images.pexels.com/photos/32050399/pexels-photo-32050399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  brickwork: "https://images.pexels.com/photos/19688828/pexels-photo-19688828.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  plastering: "https://images.pexels.com/photos/5583128/pexels-photo-5583128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  qualifications: "https://images.pexels.com/photos/8961624/pexels-photo-8961624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  gallery1: "https://images.pexels.com/photos/13758319/pexels-photo-13758319.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  gallery2: "https://images.pexels.com/photos/29356271/pexels-photo-29356271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  gallery3: "https://images.pexels.com/photos/36035073/pexels-photo-36035073.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
};

const NAVY = "#1d1452";
const LIME = "#c2d600";

const FEATURES = [
  { tag: "Build", title: "All aspects of building work", body: "Extensions, renovations, conversions and structural work — one experienced team for the whole project." },
  { tag: "Certified", title: "Qualified & accredited", body: "Gas Safe engineers, NICEIC & Part P engineers and a Checkatrade member. Work done safely and to standard." },
  { tag: "Friendly", title: "Free, no-obligation quotes", body: "Honest, upfront pricing with no surprises. Give us a call and we'll come and take a look." },
];

const SERVICES = [
  { tag: "Extensions", title: "Extensions & conversions", img: IMG.extensions, body: "Single & double-storey extensions, lofts and garage conversions." },
  { tag: "Interiors", title: "Kitchens", img: IMG.kitchen, body: "Full kitchen installations and renovations, design to finish." },
  { tag: "Interiors", title: "Bathrooms", img: IMG.bathroom, body: "Complete bathroom and wet-room fit-outs, built to last." },
  { tag: "Electrical", title: "Electrical work", img: IMG.electrical, body: "Certified electrics by NICEIC & Part P engineers." },
  { tag: "Plumbing", title: "Plumbing & gas", img: IMG.plumbing, body: "Heating, plumbing and gas by Gas Safe registered engineers." },
  { tag: "Roofing", title: "Roofing", img: IMG.roofing, body: "Repairs, re-roofs and flat roofs — kept watertight." },
  { tag: "Structural", title: "Brickwork & groundwork", img: IMG.brickwork, body: "Walls, repointing, foundations and structural work." },
  { tag: "Finishing", title: "Plastering & decorating", img: IMG.plastering, body: "Smooth plastering, rendering and a flawless finish." },
];

const ACCREDITATIONS = ["Checkatrade member", "Gas Safe registered", "NICEIC engineers", "Part P certified"];

// Literal class strings (Tailwind can't generate interpolated arbitrary values).
const limeBtn =
  "inline-flex items-center justify-center rounded-full bg-[#c2d600] px-7 py-3.5 text-base font-semibold text-[#1d1452] transition-colors hover:bg-[#d3e62b]";
const outlineDark =
  "inline-flex items-center justify-center rounded-full border-2 border-[#1d1452] px-7 py-3.5 text-base font-semibold text-[#1d1452] transition-colors hover:bg-[#1d1452] hover:text-white";
const outlineLight =
  "inline-flex items-center justify-center rounded-full border-2 border-white/30 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10";

function Logo({ light = true }: { light?: boolean }) {
  return (
    <a href="#top" className="flex items-baseline gap-1.5 text-xl font-bold tracking-tight md:text-2xl">
      <span style={{ color: light ? "#fff" : NAVY }}>Bowdens</span>
      <span style={{ color: LIME }}>of London</span>
    </a>
  );
}

export default function BowdensPage() {
  return (
    <div id="top" className={poppins.className} style={{ color: NAVY }}>
      {/* ── Utility bar ── */}
      <div className="bg-[#161039] text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-2 text-xs md:px-8">
          <span className="font-light text-white/70">Full-service builders · South East London</span>
          <div className="flex items-center gap-5 font-medium">
            <a href={`mailto:${EMAIL}`} className="hidden text-white/80 hover:text-white sm:inline">{EMAIL}</a>
            <a href={PHONE_TEL} className="text-white hover:text-[#c2d600]">{PHONE_DISPLAY}</a>
          </div>
        </div>
      </div>

      {/* ── Header ── */}
      <header className="sticky top-0 z-50 bg-[#1d1452]">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
          <Logo />
          <nav className="hidden items-center gap-8 text-sm font-medium text-white/85 lg:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#why" className="hover:text-white">Why us</a>
            <a href="#work" className="hover:text-white">Our work</a>
            <a href="#accreditations" className="hover:text-white">Accreditations</a>
            <a href="#quote" className="hover:text-white">Contact</a>
          </nav>
          <a href="#quote" className="rounded-full bg-[#c2d600] px-5 py-2.5 text-sm font-semibold text-[#1d1452] transition-colors hover:bg-[#d3e62b]">
            Free quote
          </a>
        </div>
      </header>

      {/* ── Hero (split) ── */}
      <section className="grid lg:grid-cols-2">
        <div className="bg-[#1d1452] px-5 py-16 text-white md:px-8 md:py-24 lg:py-28">
          <div className="ml-auto max-w-xl lg:pr-12">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#c2d600]">South East London builders</p>
            <h1 className="mt-5 text-4xl font-light leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
              Building &amp; construction, done properly.
            </h1>
            <p className="mt-6 text-lg font-light leading-relaxed text-white/75">
              Bowdens of London is a full-service building company based in South East London. Our small, approachable
              team of skilled tradespeople specialises in all aspects of building work — by experienced, qualified people
              who treat you and your property with respect.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#quote" className={limeBtn}>Get a free quote</a>
              <a href={PHONE_TEL} className={outlineLight}>Call {PHONE_DISPLAY}</a>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-6 text-sm font-medium">
              <a href="#services" className="text-white/80 hover:text-[#c2d600]">Our services →</a>
              <a href="#why" className="text-white/80 hover:text-[#c2d600]">Why choose us →</a>
              <a href="#accreditations" className="text-white/80 hover:text-[#c2d600]">Accreditations →</a>
            </div>
          </div>
        </div>
        <div className="relative min-h-[18rem]">
          <img src={IMG.hero} alt="Bowdens of London building work" className="absolute inset-0 h-full w-full object-cover" />
        </div>
      </section>

      {/* ── Feature cards ── */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-16 md:grid-cols-3 md:px-8 md:py-20">
          {FEATURES.map((f) => (
            <div key={f.title} className="flex flex-col border-t-2 border-[#c2d600] pt-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1d1452]/45">{f.tag}</p>
              <h3 className="mt-2 text-2xl font-normal">{f.title}</h3>
              <p className="mt-3 flex-1 font-light text-[#1d1452]/70">{f.body}</p>
              <a href="#quote" className="mt-5 text-sm font-semibold text-[#1d1452] hover:underline">Get a quote →</a>
            </div>
          ))}
        </div>
      </section>

      {/* ── About band (image left, text right) ── */}
      <section className="bg-[#f2f0f9]">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2">
          <img src={IMG.about} alt="The Bowdens team at work" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg" />
          <div>
            <h2 className="text-3xl font-light leading-tight tracking-tight md:text-4xl">
              A small, approachable team you can actually rely on.
            </h2>
            <p className="mt-5 text-lg font-light text-[#1d1452]/75">
              From a single repair to a full renovation, you deal with the people doing the work. We work with NIC &amp;
              Part P engineers and Gas Safe engineers, and we&apos;re a member of Checkatrade — so you can be assured your
              project is in experienced, qualified hands.
            </p>
            <a href="#services" className={`${outlineDark} mt-8`}>See what we do</a>
          </div>
        </div>
      </section>

      {/* ── Dark services intro band ── */}
      <section id="services" className="bg-[#1d1452] text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#c2d600]">What we do</p>
            <h2 className="mt-4 text-3xl font-light leading-tight tracking-tight md:text-4xl">
              All aspects of building work, under one roof.
            </h2>
            <p className="mt-5 text-lg font-light text-white/70">
              Whatever your project, our team has it covered — from groundwork and structural building to the finishing
              touches that make a house a home.
            </p>
            <a href="#quote" className={`${limeBtn} mt-8`}>Start your project</a>
          </div>
          <img src={IMG.qualifications} alt="Building work" className="aspect-[4/3] w-full rounded-2xl object-cover" />
        </div>
      </section>

      {/* ── Services grid ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <article key={s.title} className="group overflow-hidden rounded-2xl border border-[#1d1452]/10 bg-white shadow-sm transition-shadow hover:shadow-md">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#c2a300]">{s.tag}</p>
                  <h3 className="mt-1.5 text-lg font-medium">{s.title}</h3>
                  <p className="mt-1.5 text-sm font-light text-[#1d1452]/65">{s.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why us (text left, image right) ── */}
      <section id="why" className="bg-[#f2f0f9]">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#1d1452]/50">Why Bowdens</p>
            <h2 className="mt-4 text-3xl font-light leading-tight tracking-tight md:text-4xl">
              Experienced, qualified, and respectful of your home.
            </h2>
            <ul className="mt-7 space-y-4">
              {[
                ["Small, approachable team", "Clear communication from first call to final handover."],
                ["Qualified & accredited", "Gas Safe, NICEIC & Part P engineers and a Checkatrade member."],
                ["Respect for your property", "We keep things tidy and leave your home as we found it."],
                ["Free, no-obligation quotes", "Honest, upfront pricing with no surprises."],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-4">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#c2d600] text-sm font-bold text-[#1d1452]">✓</span>
                  <span><span className="font-medium">{t}.</span> <span className="font-light text-[#1d1452]/70">{d}</span></span>
                </li>
              ))}
            </ul>
            <a href="#quote" className={`${limeBtn} mt-8`}>Get your free quote</a>
          </div>
          <img src={IMG.gallery2} alt="Completed building project" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg" />
        </div>
      </section>

      {/* ── Accreditations ── */}
      <section id="accreditations" className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center md:px-8 md:py-20">
          <h2 className="text-2xl font-light tracking-tight md:text-3xl">Accredited &amp; trusted</h2>
          <p className="mx-auto mt-3 max-w-xl font-light text-[#1d1452]/65">
            Your project is in the hands of experienced, qualified tradespeople.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {ACCREDITATIONS.map((a) => (
              <div key={a} className="rounded-xl border border-[#1d1452]/10 bg-[#f2f0f9] px-4 py-6 font-medium">{a}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Work / gallery ── */}
      <section id="work" className="bg-[#f2f0f9]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#1d1452]/50">Our work</p>
              <h2 className="mt-3 text-3xl font-light tracking-tight md:text-4xl">A reputation built on quality.</h2>
            </div>
            <a href="#quote" className={outlineDark}>Start your project</a>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[IMG.gallery1, IMG.gallery3, IMG.kitchen].map((src, i) => (
              <img key={i} src={src} alt="Recent project" loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-sm" />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA strip ── */}
      <section className="bg-[#c2d600]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-12 text-center md:flex-row md:px-8 md:text-left">
          <div>
            <h2 className="text-2xl font-medium tracking-tight text-[#1d1452] md:text-3xl">Ready to start? Call us for a free quote.</h2>
            <p className="mt-1 font-light text-[#1d1452]/80">No obligation — just honest advice and a clear price.</p>
          </div>
          <a href={PHONE_TEL} className="shrink-0 rounded-full bg-[#1d1452] px-8 py-4 text-lg font-semibold text-white transition-transform hover:-translate-y-0.5">
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      {/* ── Contact / quote ── */}
      <section id="quote" className="bg-[#161039] text-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#c2d600]">Free quote</p>
            <h2 className="mt-4 text-3xl font-light tracking-tight md:text-4xl">Get in touch</h2>
            <p className="mt-4 max-w-md font-light text-white/70">
              Tell us about your project and we&apos;ll come back with a free, no-obligation quote. Prefer to talk? Give us
              a call — we&apos;re a friendly bunch.
            </p>
            <div className="mt-8 space-y-3">
              <a href={PHONE_TEL} className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
                <span><span className="block text-xs uppercase tracking-wider text-white/45">Call us</span><span className="font-medium">{PHONE_DISPLAY}</span></span>
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
                <span><span className="block text-xs uppercase tracking-wider text-white/45">Email us</span><span className="font-medium">{EMAIL}</span></span>
              </a>
              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
                <span><span className="block text-xs uppercase tracking-wider text-white/45">Area</span><span className="font-medium">South East London &amp; surrounding areas</span></span>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#1d1452] py-12 text-white/70">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row">
            <div className="max-w-sm">
              <Logo />
              <p className="mt-4 text-sm font-light text-white/55">
                Full-service building &amp; construction in South East London. Qualified, accredited and approachable.
              </p>
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs font-medium text-white/45">
                {ACCREDITATIONS.map((a) => <span key={a}>{a}</span>)}
              </div>
            </div>
            <div className="text-sm">
              <p className="font-semibold uppercase tracking-wider text-white/45">Get in touch</p>
              <a href={PHONE_TEL} className="mt-2 block font-medium text-white">{PHONE_DISPLAY}</a>
              <a href={`mailto:${EMAIL}`} className="mt-1 block font-light hover:text-white">{EMAIL}</a>
              <p className="mt-1 font-light text-white/50">South East London</p>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs font-light text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Bowdens of London. All rights reserved.</p>
            <p>Designed by <a href="https://bridgewayaibootcamp.com" target="_blank" rel="noopener noreferrer" className="text-white/55 hover:text-white">bridgewayaibootcamp.com</a></p>
          </div>
        </div>
      </footer>

      {/* ── Pinned "Call now" (always visible) ── */}
      <a
        href={PHONE_TEL}
        aria-label={`Call now on ${PHONE_DISPLAY}`}
        className="fixed bottom-4 left-4 right-4 z-[60] flex items-center justify-center gap-2 rounded-full bg-[#c2d600] px-6 py-4 text-base font-bold text-[#1d1452] shadow-2xl ring-1 ring-black/10 transition-transform hover:-translate-y-0.5 sm:left-auto sm:right-6"
      >
        <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-[#1d1452]" aria-hidden />
        Call now · {PHONE_DISPLAY}
      </a>
    </div>
  );
}
