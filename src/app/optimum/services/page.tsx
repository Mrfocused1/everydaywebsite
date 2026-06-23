import type { Metadata } from "next";
import Link from "next/link";
import { IMG, CUT_BR, CUT_TL, Label, PageHero, pillNavy, pillGhostLight } from "../brand";
import { OptimumFX } from "../OptimumFX";

/* eslint-disable @next/next/no-img-element */

export const metadata: Metadata = {
  title: "Services",
  description:
    "Optimum Management Group services: design & build, property maintenance, project management, electrical works and audio-visual installation across London — commercial and residential.",
};

const SERVICES = [
  {
    t: "Design & Build",
    img: IMG.designbuild,
    cut: CUT_BR,
    b: "We take a project from a first sketch through to a finished, handed-over space — design, drawings, costings and full construction under one contract.",
    points: ["Concept & space planning", "Drawings & costed proposals", "Full construction delivery", "Snagging & handover"],
  },
  {
    t: "Maintenance",
    img: IMG.maintenance,
    cut: CUT_TL,
    b: "Planned and reactive maintenance that keeps buildings safe, compliant and running. One number to call when something needs fixing — fast.",
    points: ["Planned preventative maintenance", "Reactive call-outs & repairs", "Compliance & safety checks", "Single point of contact"],
  },
  {
    t: "Management",
    img: IMG.management,
    cut: null,
    b: "We coordinate every trade, timeline and budget so you don't have to. Clear reporting, accountable delivery and no surprises.",
    points: ["Trade & contractor coordination", "Programme & budget control", "Progress reporting", "Quality assurance"],
  },
  {
    t: "Electrical Works",
    img: IMG.electrical,
    cut: CUT_BR,
    b: "Certified electrical installation, rewires, lighting and testing — delivered as part of a fit-out or as a standalone package.",
    points: ["Installation & rewires", "Lighting design", "Inspection & testing", "Certification"],
  },
  {
    t: "Audio Visual",
    img: IMG.av,
    cut: CUT_TL,
    b: "Meeting-room AV, displays, sound and smart controls — designed, installed and commissioned for commercial and residential spaces.",
    points: ["Displays & video walls", "Sound & conferencing", "Smart controls", "Commissioning & support"],
  },
];

export default function OptimumServices() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="What we do."
        intro="From design and construction to maintenance, management and specialist trades — a complete service delivered by one accountable team."
        img={IMG.commercial}
        imgAlt="Optimum Management Group at work"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="flex flex-col gap-20 md:gap-28">
            {SERVICES.map((s, i) => {
              const flip = i % 2 === 1;
              return (
                <div key={s.t} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                  <div className={`relative overflow-hidden ${flip ? "lg:order-2" : ""}`} data-reveal style={s.cut ? { clipPath: s.cut } : undefined}>
                    <img src={s.img} alt={s.t} loading="lazy" data-parallax className={`aspect-[4/3] w-full scale-110 object-cover ${s.cut ? "" : "rounded-2xl"}`} />
                  </div>
                  <div className={flip ? "lg:order-1" : ""} data-reveal>
                    <Label>{`0${i + 1}`}</Label>
                    <h2 className="mt-4 text-3xl font-light leading-[1.05] tracking-tight md:text-[2.6rem]">{s.t}</h2>
                    <p className="mt-4 text-lg font-light text-slate-600">{s.b}</p>
                    <ul className="mt-6 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#1dc6ba]" aria-hidden /> {p}
                        </li>
                      ))}
                    </ul>
                    <Link href="/optimum/contact" className={`${pillGhostLight} mt-8`}>Enquire about {s.t.toLowerCase()}</Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-slate-100 bg-[#eef4f6]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl" data-reveal>
            <Label>How we work</Label>
            <h2 className="mt-5 text-3xl font-light leading-[1.05] tracking-tight text-[#16364f] md:text-5xl">A clear path from enquiry to handover.</h2>
            <p className="mt-4 text-sm font-semibold text-slate-400 sm:hidden">Swipe →</p>
          </div>
          <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:mt-12 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 lg:grid-cols-4" data-stagger>
            {[
              { n: "01", t: "Consult", b: "We listen, visit the site and understand exactly what you need." },
              { n: "02", t: "Design & cost", b: "Drawings, a clear scope and a transparent, itemised quote." },
              { n: "03", t: "Deliver", b: "One team manages every trade, timeline and budget on site." },
              { n: "04", t: "Maintain", b: "Handover, snagging and ongoing maintenance when you need it." },
            ].map((p) => (
              <div key={p.n} className="w-[72%] shrink-0 snap-start border-t-2 border-[#1dc6ba] pt-5 sm:w-auto">
                <p className="text-4xl font-light text-[#159a90]">{p.n}</p>
                <h3 className="mt-3 text-lg font-medium text-[#16364f]">{p.t}</h3>
                <p className="mt-2 text-sm font-light text-slate-600">{p.b}</p>
              </div>
            ))}
          </div>
          <div className="mt-12" data-reveal>
            <Link href="/optimum/contact" className={pillNavy}>Start your project</Link>
          </div>
        </div>
      </section>

      <OptimumFX />
    </>
  );
}
