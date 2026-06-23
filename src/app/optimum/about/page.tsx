import type { Metadata } from "next";
import Link from "next/link";
import { IMG, CUT_BR, CUT_TL, Label, PageHero, pillTeal } from "../brand";
import { OptimumFX } from "../OptimumFX";

/* eslint-disable @next/next/no-img-element */

export const metadata: Metadata = {
  title: "About",
  description:
    "About Optimum Management Group — a London design & build, maintenance and management contractor that brings every discipline under one accountable team.",
};

const VALUES = [
  { t: "One point of contact", b: "No chasing trades or juggling contractors. You deal with one team that owns the whole job." },
  { t: "Done properly", b: "Certified work, proper materials and a finish we're happy to put our name to." },
  { t: "Clear & honest", b: "Itemised quotes, realistic timelines and straight answers — no surprises at the end." },
  { t: "There after handover", b: "We don't disappear once the job's done. Maintenance and support carry on." },
];

export default function OptimumAbout() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="One team, end to end."
        intro="Optimum Management Group brings design, construction, maintenance and management together under one roof — so projects are delivered by people who stay accountable from start to finish."
        img={IMG.about}
        imgAlt="The Optimum Management Group team"
      />

      {/* Story */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2 lg:gap-16">
          <div className="relative overflow-hidden" data-reveal style={{ clipPath: CUT_BR }}>
            <img src={IMG.about2} alt="Optimum project planning" data-parallax className="aspect-[4/5] w-full scale-110 object-cover" />
          </div>
          <div data-reveal>
            <Label>Who we are</Label>
            <h2 className="mt-5 text-3xl font-light leading-[1.08] tracking-tight md:text-[2.7rem]">Built to take the stress out of property projects.</h2>
            <div className="mt-6 space-y-4 text-lg font-light text-slate-600">
              <p>
                Too many projects get passed between disconnected trades, with no one taking responsibility for the whole.
                Optimum was set up to change that.
              </p>
              <p>
                We bring design &amp; build, maintenance and management into a single team — for commercial and residential
                clients across London. From the first drawing to long after handover, the same people stay accountable.
              </p>
              <p>
                The result is simple: one point of contact, work done properly, and a building that keeps working long after
                we&apos;ve left site.
              </p>
            </div>
            <Link href="/optimum/services" className={`${pillTeal} mt-8`}>See our services</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#f1f6f8]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden border border-[#2d5a83]/15 bg-[#2d5a83]/15 px-0 md:grid-cols-4">
          {[
            { n: "15+", l: "Years combined experience" },
            { n: "1", l: "Point of contact" },
            { n: "100%", l: "Projects managed in-house" },
            { n: "24/7", l: "Reactive maintenance" },
          ].map((s) => (
            <div key={s.l} className="bg-[#f1f6f8] p-7 text-center md:p-9" data-reveal>
              <p className="text-4xl font-light tracking-tight text-[#2d5a83] md:text-5xl">{s.n}</p>
              <p className="mt-2 text-xs font-medium uppercase tracking-wide text-slate-500">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl" data-reveal>
            <Label>What you can expect</Label>
            <h2 className="mt-5 text-3xl font-light leading-[1.05] tracking-tight md:text-5xl">How we work with you.</h2>
            <p className="mt-4 text-sm font-semibold text-slate-400 sm:hidden">Swipe →</p>
          </div>
          <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:mt-12 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0" data-stagger>
            {VALUES.map((v) => (
              <div key={v.t} className="w-[78%] shrink-0 snap-start border border-[#2d5a83]/25 bg-white p-7 md:w-auto md:p-9">
                <h3 className="text-xl font-medium text-[#2d5a83]">{v.t}</h3>
                <p className="mt-3 font-light text-slate-600">{v.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl" data-reveal>
            <Label>Who we work with</Label>
            <h2 className="mt-5 text-3xl font-light leading-[1.05] tracking-tight text-[#16364f] md:text-5xl">Commercial &amp; residential clients.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2" data-stagger>
            {[
              { t: "Commercial", img: IMG.commercial, cut: CUT_BR, b: "Offices, retail and workspaces — fit-outs, refurbishments, electrical, AV and ongoing maintenance contracts." },
              { t: "Residential", img: IMG.residential, cut: CUT_TL, b: "Homes and developments — design-and-build projects, renovations and reliable upkeep you can depend on." },
            ].map((s) => (
              <article key={s.t} className="group relative overflow-hidden" style={{ clipPath: s.cut }}>
                <img src={s.img} alt={s.t} loading="lazy" className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1722]/88 via-[#0b1722]/25 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white md:p-8">
                  <h3 className="text-2xl font-medium">{s.t}</h3>
                  <p className="mt-2 max-w-md font-light text-white/80">{s.b}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <OptimumFX />
    </>
  );
}
