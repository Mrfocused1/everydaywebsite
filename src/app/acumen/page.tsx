import { Inter } from "next/font/google";
import { EnquiryForm } from "./EnquiryForm";

/* eslint-disable @next/next/no-img-element */

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], display: "swap" });

const PHONE_DISPLAY = "07487 526042";
const PHONE_TEL = "tel:07487526042";
const EMAIL = "lawrence@acumenelectrical.co.uk";
const ADDRESS = "62 Westover Gardens, St Peter's, Broadstairs, CT10 3EY";

const IMG = {
  hero: "https://images.pexels.com/photos/17842832/pexels-photo-17842832.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  domestic: "https://images.pexels.com/photos/32497160/pexels-photo-32497160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  commercial: "https://images.pexels.com/photos/11924298/pexels-photo-11924298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  ev: "https://images.pexels.com/photos/27355826/pexels-photo-27355826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  testing: "https://images.pexels.com/photos/14319099/pexels-photo-14319099.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  rewire: "https://images.pexels.com/photos/18082922/pexels-photo-18082922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  team: "https://images.pexels.com/photos/29491360/pexels-photo-29491360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
};

const ACCREDITATIONS = ["NAPIT Approved", "Checkatrade", "TrustMark", "Rated People", "Kent Trading Standards", "MyBuilder"];

const SERVICES = [
  { title: "Domestic electrical", img: IMG.domestic, body: "Rewires, sockets, lighting, consumer units and repairs for homeowners across East Kent." },
  { title: "Commercial electrical", img: IMG.commercial, body: "Installation and maintenance for offices, shops and businesses, done safely and on time." },
  { title: "Landlord services & EICRs", img: IMG.testing, body: "Electrical Installation Condition Reports and certification for private landlords." },
  { title: "EV charger installation", img: IMG.ev, body: "Home and workplace electric-vehicle charge points, professionally installed." },
  { title: "Inspection & testing", img: IMG.testing, body: "Periodic inspection, testing and certification to BS7671 (18th Edition)." },
  { title: "Fault finding & repairs", img: IMG.rewire, body: "Fast diagnosis and safe repair of electrical faults, big or small." },
];

const QUALIFICATIONS = [
  "18th Edition certified",
  "Level 3 in Electrical Installations",
  "Level 3 Award in Inspection & Testing",
  "EV charger installation qualified",
  "NAPIT approved (Part P)",
  "All work meets BS7671 (18th Edition)",
];

const AREAS = ["Broadstairs", "Margate", "Ramsgate", "Thanet", "Canterbury", "Whitstable", "Herne Bay", "Birchington", "Westgate-on-Sea", "Sandwich", "Deal", "Dover"];

const goldBtn =
  "inline-flex items-center justify-center rounded-full bg-[#ddb71a] px-7 py-3.5 text-base font-bold text-[#0c2742] transition-colors hover:bg-[#e9c531]";
const navyBtn =
  "inline-flex items-center justify-center rounded-full bg-[#0c4e7d] px-7 py-3.5 text-base font-bold text-white transition-colors hover:bg-[#0a3f66]";
const outlineLight =
  "inline-flex items-center justify-center rounded-full border-2 border-white/30 px-7 py-3.5 text-base font-bold text-white transition-colors hover:bg-white/10";

export default function AcumenPage() {
  return (
    <div id="top" className={`${inter.className} bg-white text-[#0c2742]`}>
      {/* ── Header ── */}
      <header className="sticky top-0 z-40 border-b border-black/5 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
          <a href="#top" aria-label="Acumen Electrical Solutions">
            <img src="/marketing/acumen-logo.svg" alt="Acumen Electrical Solutions" className="h-11 w-auto md:h-12" />
          </a>
          <nav className="hidden items-center gap-7 text-sm font-semibold text-[#0c2742]/75 lg:flex">
            <a href="#services" className="hover:text-[#0c4e7d]">Services</a>
            <a href="#safe" className="hover:text-[#0c4e7d]">Why us</a>
            <a href="#areas" className="hover:text-[#0c4e7d]">Areas</a>
            <a href="#accreditations" className="hover:text-[#0c4e7d]">Accreditations</a>
            <a href="#enquiry" className="hover:text-[#0c4e7d]">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href={PHONE_TEL} className="hidden text-sm font-bold text-[#0c4e7d] sm:inline">{PHONE_DISPLAY}</a>
            <a href="#enquiry" className="rounded-full bg-[#ddb71a] px-4 py-2 text-sm font-bold text-[#0c2742] transition-colors hover:bg-[#e9c531] md:px-5">
              Request a quote
            </a>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative isolate overflow-hidden bg-[#0a2e47] text-white">
        <img src={IMG.hero} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0a2e47] via-[#0a2e47]/95 to-[#0a2e47]/70" />
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ddb71a]">Broadstairs &amp; East Kent electricians</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
            Trusted, fully-qualified electricians for your home or business.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            Acumen Electrical Solutions is a family-run, NAPIT-approved electrical contractor based in Broadstairs,
            covering most of East Kent. Time-served, 18th Edition electricians for domestic and commercial work —
            <span className="font-semibold text-white"> you&apos;re in safe hands.</span>
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#enquiry" className={goldBtn}>Request a free quote</a>
            <a href={PHONE_TEL} className={outlineLight}>Call {PHONE_DISPLAY}</a>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-white/75">
            {["NAPIT approved (Part P)", "18th Edition certified", "Fully insured by AXA"].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <span className="text-[#ddb71a]">✓</span> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Accreditations strip ── */}
      <section id="accreditations" className="border-b border-black/5 bg-[#f5f7fa]">
        <div className="mx-auto max-w-6xl px-5 py-10 md:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-[#0c2742]/45">
            Registered &amp; accredited
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            {ACCREDITATIONS.map((a) => (
              <span key={a} className="rounded-full border border-[#0c4e7d]/15 bg-white px-5 py-2.5 text-sm font-bold text-[#0c4e7d] shadow-sm">
                {a}
              </span>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-[#0c2742]/60">
            Fully insured by <span className="font-semibold text-[#0c2742]">AXA</span> — £2,000,000 Public Liability &amp; £500,000 Professional Indemnity.
          </p>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ddb71a]">What we do</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">Domestic &amp; commercial electrical services.</h2>
            <p className="mt-4 text-lg text-[#0c2742]/70">
              From a single socket to a full rewire — homeowners, private landlords and social housing, all to the
              highest standard.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <article key={s.title} className="group overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-md">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-[#0c2742]/65">{s.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── You're in safe hands ── */}
      <section id="safe" className="bg-[#0a2e47] text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ddb71a]">You&apos;re in safe hands</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
              Time-served, fully-qualified, properly insured.
            </h2>
            <p className="mt-5 text-lg text-white/75">
              Our electricians are time-served and hold a range of industry qualifications. Every job meets — as a
              minimum — the requirements of BS7671 wiring regulations (18th Edition).
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {QUALIFICATIONS.map((q) => (
                <li key={q} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ddb71a] text-sm font-bold text-[#0c2742]">✓</span>
                  <span className="text-white/85">{q}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img src={IMG.team} alt="Acumen electrician at work" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl" />
            <div className="absolute -bottom-5 -left-5 hidden rounded-xl bg-[#ddb71a] px-6 py-4 text-[#0c2742] shadow-lg sm:block">
              <p className="text-xl font-extrabold leading-none">Family-run</p>
              <p className="text-sm font-semibold">based in Broadstairs</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Areas ── */}
      <section id="areas" className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center md:px-8 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ddb71a]">Areas we cover</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">Across East Kent — the CT postcode area.</h2>
          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
            {AREAS.map((a) => (
              <span key={a} className="rounded-full bg-[#f5f7fa] px-5 py-2.5 text-sm font-semibold text-[#0c2742]/80">{a}</span>
            ))}
          </div>
          <p className="mt-6 text-sm text-[#0c2742]/55">Not sure if we cover you? Give us a call — we&apos;ll let you know.</p>
        </div>
      </section>

      {/* ── CTA strip ── */}
      <section className="bg-[#ddb71a]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-12 text-center md:flex-row md:px-8 md:text-left">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-[#0c2742] md:text-3xl">Need an electrician? Get a free quote.</h2>
            <p className="mt-1 font-medium text-[#0c2742]/80">Friendly, reliable and fully insured — call or send us a message.</p>
          </div>
          <a href={PHONE_TEL} className="shrink-0 rounded-full bg-[#0c4e7d] px-8 py-4 text-lg font-bold text-white transition-transform hover:-translate-y-0.5">
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      {/* ── Enquiry / contact ── */}
      <section id="enquiry" className="bg-[#0a2e47] text-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ddb71a]">Request a quote</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">Get in touch</h2>
            <p className="mt-4 max-w-md text-white/70">
              Tell us what you need and we&apos;ll get back to you with a free, no-obligation quote. Prefer to talk? Give
              us a call.
            </p>
            <div className="mt-8 space-y-3">
              <a href={PHONE_TEL} className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
                <span><span className="block text-xs uppercase tracking-wider text-white/45">Call us</span><span className="text-lg font-bold">{PHONE_DISPLAY}</span></span>
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
                <span><span className="block text-xs uppercase tracking-wider text-white/45">Email us</span><span className="break-all text-lg font-bold">{EMAIL}</span></span>
              </a>
              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
                <span><span className="block text-xs uppercase tracking-wider text-white/45">Address</span><span className="font-bold">{ADDRESS}</span></span>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <EnquiryForm />
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#072034] py-12 text-white/70">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row">
            <div className="max-w-sm">
              <img src="/marketing/acumen-logo.svg" alt="Acumen Electrical Solutions" className="h-12 w-auto rounded bg-white/95 p-1.5" />
              <p className="mt-4 text-sm text-white/55">
                Family-run, NAPIT-approved electrical contractor in Broadstairs, covering East Kent. Domestic &amp;
                commercial. Fully insured.
              </p>
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs font-medium text-white/45">
                {ACCREDITATIONS.map((a) => <span key={a}>{a}</span>)}
              </div>
            </div>
            <div className="text-sm">
              <p className="font-semibold uppercase tracking-wider text-white/45">Get in touch</p>
              <a href={PHONE_TEL} className="mt-2 block font-bold text-white">{PHONE_DISPLAY}</a>
              <a href={`mailto:${EMAIL}`} className="mt-1 block break-all hover:text-white">{EMAIL}</a>
              <p className="mt-2 max-w-[15rem] text-white/55">{ADDRESS}</p>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Acumen Electrical Solutions. All rights reserved.</p>
            <p>Designed by <a href="https://bridgewayaibootcamp.com" target="_blank" rel="noopener noreferrer" className="text-white/55 hover:text-white">bridgewayaibootcamp.com</a></p>
          </div>
        </div>
      </footer>

      {/* spacer so the pinned bar doesn't cover the footer on mobile */}
      <div className="h-[68px] sm:hidden" aria-hidden />

      {/* ── Pinned Call now + Request a quote ── */}
      <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-black/10 bg-white p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.10)] sm:inset-x-auto sm:bottom-5 sm:right-5 sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none">
        <a href={PHONE_TEL} className="flex-1 rounded-full bg-[#0c4e7d] px-5 py-3.5 text-center text-sm font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5 sm:flex-none sm:px-7 sm:text-base">
          Call now
        </a>
        <a href="#enquiry" className="flex-1 rounded-full bg-[#ddb71a] px-5 py-3.5 text-center text-sm font-bold text-[#0c2742] shadow-lg transition-transform hover:-translate-y-0.5 sm:flex-none sm:px-7 sm:text-base">
          Request a quote
        </a>
      </div>
    </div>
  );
}
