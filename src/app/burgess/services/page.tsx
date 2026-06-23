import type { Metadata } from "next";
import Link from "next/link";
import { IMG, CUT_BL, CUT_TR, GRID_BG, Label, Arrow, PageHero, btnYellow, btnGhostLight } from "../brand";
import { BurgessFX } from "../BurgessFX";

/* eslint-disable @next/next/no-img-element */

export const metadata: Metadata = {
  title: "Services",
  description:
    "Electrical services from Burgess Electrical: rewires & installations, EICRs & testing, fire alarms, security/CCTV, EV charging, solar panels, 24hr emergency call-out and commercial work across East London.",
};

const SERVICES = [
  { t: "Rewires & Installations", img: IMG.fusebox, cut: CUT_BL, b: "Full and partial rewires, consumer-unit upgrades, extra sockets, lighting circuits and new installations." },
  { t: "Inspection & Testing", img: IMG.panel, cut: null, b: "EICRs, landlord certificates and portable appliance (PAT) testing to keep your property safe and compliant." },
  { t: "Fire & Emergency Lighting", img: IMG.lighting, cut: CUT_TR, b: "Fire-alarm systems, emergency lighting and domestic smoke alarms — designed, installed and maintained." },
  { t: "Security Systems", img: IMG.cctv, cut: CUT_TR, b: "CCTV, access / door-entry control and burglar alarms to protect your home or premises." },
  { t: "EV Charging", img: IMG.ev, cut: null, b: "Home and workplace electric-vehicle charge points, installed by approved electricians." },
  { t: "Solar Panels", img: IMG.solar, cut: CUT_BL, b: "Solar PV installation to cut your bills and bring renewable power to your property." },
];

const PROCESS = [
  { n: "01", t: "Call", b: "Tell us the job — we'll talk it through and book a visit." },
  { n: "02", t: "Quote", b: "A clear, free, no-obligation quotation. No surprises." },
  { n: "03", t: "Install", b: "Qualified electricians, tidy work, minimal disruption." },
  { n: "04", t: "Certify", b: "Full certification and a 10-year guarantee on new work." },
];

export default function BurgessServices() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Electrical services"
        intro="Domestic, commercial and industrial — a complete range of electrical work, all certified and backed by our 10-year guarantee."
        img={IMG.industrial}
        imgAlt="Industrial electrical installation"
      />

      {/* Clients strip */}
      <section className="border-b border-slate-100 bg-[#16225e] py-6 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 md:flex-row md:gap-8 md:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">Our clients include</span>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm font-bold uppercase tracking-wide">
            {["RAAM", "Chigwell Construction", "ELECSA", "Polyteck"].map((c) => (
              <span key={c} className="text-white/85">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-white" style={GRID_BG}>
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl" data-reveal>
            <Label>What we offer</Label>
            <h2 className="mt-5 text-3xl font-bold uppercase leading-[0.98] tracking-tight md:text-5xl">From a socket to a substation.</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3" data-stagger>
            {SERVICES.map((s, i) => (
              <article key={s.t} className="flex flex-col border border-[#16225e]/15 bg-white">
                <div className="relative overflow-hidden" style={s.cut ? { clipPath: s.cut } : undefined}>
                  <img src={s.img} alt={s.t} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                  <span className="absolute left-0 top-0 bg-[#ffd400] px-3 py-1.5 text-sm font-bold text-[#16225e]">0{i + 1}</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold uppercase tracking-tight text-[#16225e]">{s.t}</h3>
                  <p className="mt-2 text-sm font-light text-slate-600">{s.b}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight panels */}
      <section className="bg-[#f7f8fc]">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24" data-stagger>
          {[
            { t: "24-Hour Emergency Call-out", img: IMG.emergency, cut: CUT_BL, b: "Faults, outages and urgent repairs handled fast — day or night, across East London." },
            { t: "Commercial & Industrial", img: IMG.night, cut: CUT_TR, b: "Installations, maintenance and testing for offices, sites and industrial units." },
          ].map((p) => (
            <article key={p.t} className="group relative overflow-hidden" style={{ clipPath: p.cut }}>
              <img src={p.img} alt={p.t} loading="lazy" className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1230]/92 via-[#0c1230]/35 to-transparent" />
              <div className="absolute bottom-0 left-0 p-7 text-white md:p-8">
                <h3 className="text-2xl font-bold uppercase tracking-tight">{p.t}</h3>
                <p className="mt-2 max-w-md font-light text-white/80">{p.b}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Guarantee + process */}
      <section className="bg-white" style={GRID_BG}>
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="grid items-center gap-8 border border-[#16225e]/15 bg-[#16225e] p-8 text-white md:grid-cols-[auto_1fr] md:p-12" data-reveal>
            <p className="text-6xl font-bold leading-none text-[#ffd400] md:text-8xl">10<span className="text-2xl md:text-3xl">yr</span></p>
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-tight md:text-3xl">Guarantee on every new installation</h2>
              <p className="mt-3 max-w-xl font-light text-white/70">All new installations come with a 10-year guarantee — proper peace of mind, in writing.</p>
            </div>
          </div>

          <div className="mt-14 max-w-2xl" data-reveal>
            <Label>How it works</Label>
            <h2 className="mt-5 text-3xl font-bold uppercase leading-[0.98] tracking-tight md:text-4xl">Four simple steps.</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" data-stagger>
            {PROCESS.map((p) => (
              <div key={p.n} className="border-t-2 border-[#ffd400] pt-5">
                <p className="text-4xl font-bold text-[#16225e]">{p.n}</p>
                <h3 className="mt-3 text-lg font-bold uppercase tracking-tight text-[#16225e]">{p.t}</h3>
                <p className="mt-2 text-sm font-light text-slate-600">{p.b}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-3" data-reveal>
            <Link href="/burgess/contact#quote" className={btnYellow}>Get a free quote <Arrow /></Link>
            <Link href="/burgess/about" className={btnGhostLight}>About us</Link>
          </div>
        </div>
      </section>

      <BurgessFX />
    </>
  );
}
