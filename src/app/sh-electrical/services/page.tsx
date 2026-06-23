import type { Metadata } from "next";
import Link from "next/link";
import { IMG, CUT_BL, CUT_TR, GRID_BG, AREA, Label, Arrow, PageHero, btnYellow, btnGhostLight } from "../brand";
import { SHFX } from "../SHFX";

/* eslint-disable @next/next/no-img-element */

export const metadata: Metadata = {
  title: "Services",
  description:
    "Electrical services from SH Electrical Mcr Ltd: rewires, consumer unit upgrades, testing & inspection, fault finding, EV charging, lighting and kitchen & bathroom renovations across Manchester & Greater Manchester.",
};

const SERVICES = [
  { t: "Rewires & Installations", img: IMG.fusebox, cut: CUT_BL, b: "Full and partial rewires, new circuits, extra sockets, lighting circuits and electrical installations." },
  { t: "Consumer Unit Upgrades", img: IMG.panel, cut: null, b: "Modern consumer unit and fuse board upgrades to keep your electrics safe and compliant." },
  { t: "Testing & Inspection", img: IMG.emergency, cut: CUT_TR, b: "EICRs, landlord certificates and electrical safety inspections — fully certified." },
  { t: "Fault Finding & Repairs", img: IMG.about2, cut: CUT_TR, b: "Quick, thorough fault finding and rectification to get your power back on safely." },
  { t: "Kitchen & Bathroom", img: IMG.cctv, cut: null, b: "Electrical fit-out for kitchen and bathroom renovations — sockets, lighting and appliances." },
  { t: "Garden Lighting & Power", img: IMG.solar, cut: CUT_BL, b: "Outdoor lighting, garden power and exterior installations — weatherproofed and safe." },
  { t: "Interior & Exterior Lighting", img: IMG.lighting, cut: CUT_TR, b: "Lighting design and installation, from downlights to feature and mood lighting." },
  { t: "EV Charging", img: IMG.ev, cut: null, b: "Home and workplace electric-vehicle charge points, installed by an approved EV installer." },
];

const PROCESS = [
  { n: "01", t: "Call", b: "Tell us the job — we'll talk it through and book a visit." },
  { n: "02", t: "Quote", b: "A clear, free, no-obligation quotation. No surprises." },
  { n: "03", t: "Install", b: "Qualified electricians, tidy work, minimal disruption." },
  { n: "04", t: "Certify", b: "Full certification — compliant, notified and signed off." },
];

const AREAS = ["Manchester", "Salford", "Stockport", "Trafford", "Bolton", "Oldham", "Cheshire", "Altrincham", "Sale", "Stretford", "Wilmslow", "Alderley Edge"];

export default function SHServices() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Electrical services"
        intro="Domestic, commercial and industrial — a complete range of electrical work across Greater Manchester, all certified and done to a high standard."
        img={IMG.industrial}
        imgAlt="Electrical installation work"
      />

      {/* Areas strip */}
      <section className="border-b border-slate-100 bg-[#16225e] py-6 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 md:flex-row md:gap-8 md:px-8">
          <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.25em] text-white/50">Covering</span>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-bold uppercase tracking-wide">
            {AREAS.map((c) => (
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
            <h2 className="mt-5 text-3xl font-bold uppercase leading-[0.98] tracking-tight md:text-5xl">From a socket to a full rewire.</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3" data-stagger>
            {SERVICES.map((s, i) => (
              <article key={s.t} className="flex flex-col border border-[#16225e]/15 bg-white">
                <div className="relative overflow-hidden" style={s.cut ? { clipPath: s.cut } : undefined}>
                  <img src={s.img} alt={s.t} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                  <span className="absolute left-0 top-0 bg-[#1f8fd6] px-3 py-1.5 text-sm font-bold text-white">0{i + 1}</span>
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
            { t: "Industrial & Commercial", img: IMG.night, cut: CUT_BL, b: "Installations, maintenance and testing for offices, units and commercial premises." },
            { t: "Renovations & New Builds", img: IMG.about, cut: CUT_TR, b: "Complete electrical fit-outs for kitchens, bathrooms, extensions and refurbishments." },
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

      {/* Trust + process */}
      <section className="bg-white" style={GRID_BG}>
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="grid items-center gap-8 border border-[#16225e]/15 bg-[#16225e] p-8 text-white md:grid-cols-[auto_1fr] md:p-12" data-reveal>
            <p className="text-6xl font-bold leading-none text-[#5cb8ef] md:text-8xl">5.0<span className="text-2xl md:text-3xl">★</span></p>
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-tight md:text-3xl">Rated by customers across Greater Manchester</h2>
              <p className="mt-3 max-w-xl font-light text-white/70">NAPIT approved and Part P compliant — every job is done to a high standard, certified and signed off, backed by 30+ years&apos; experience.</p>
            </div>
          </div>

          <div className="mt-14 max-w-2xl" data-reveal>
            <Label>How it works</Label>
            <h2 className="mt-5 text-3xl font-bold uppercase leading-[0.98] tracking-tight md:text-4xl">Four simple steps.</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" data-stagger>
            {PROCESS.map((p) => (
              <div key={p.n} className="border-t-2 border-[#1f8fd6] pt-5">
                <p className="text-4xl font-bold text-[#16225e]">{p.n}</p>
                <h3 className="mt-3 text-lg font-bold uppercase tracking-tight text-[#16225e]">{p.t}</h3>
                <p className="mt-2 text-sm font-light text-slate-600">{p.b}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-3" data-reveal>
            <Link href="/sh-electrical/contact#quote" className={btnYellow}>Get a free quote <Arrow /></Link>
            <Link href="/sh-electrical/gallery" className={btnGhostLight}>View our work</Link>
          </div>
        </div>
      </section>

      <SHFX />
    </>
  );
}
