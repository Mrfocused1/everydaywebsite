import type { Metadata } from "next";
import Link from "next/link";
import { IMG, METHODS, CLIENTS, COLORS, AccentBar, fd, Label, Arrow, PageHero, btnBlue } from "../brand";
import { PAFX } from "../PAFX";

/* eslint-disable @next/next/no-img-element */

export const metadata: Metadata = {
  title: "About",
  description:
    "About Print Attack UK — a Brentwood-based DTF printing service offering custom t-shirts, hoodies, workwear and uniforms with a minimum order of 6 and a fast turnaround.",
};

const VALUES = [
  { t: "Min order 6", b: "Order from just six pieces — every job gets the same care." },
  { t: "Fast", b: "Quick turnaround so you hit your event, drop or deadline." },
  { t: "Quality DTF", b: "Durable, full-colour DTF that lasts wash after wash." },
  { t: "Local + UK-wide", b: "Brentwood-based, covering N, S, E & W and shipping nationwide." },
];

export default function PAAbout() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Print worth wearing."
        intro="Print Attack UK is a Brentwood-based DTF printing service — custom clothing, workwear and uniforms, done properly."
        img={IMG.sweatshirt}
        imgAlt="Custom branded sweatshirt by Print Attack UK"
      />

      {/* Story */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24 lg:gap-16">
          <div className="relative overflow-hidden">
            <img src={IMG.founders} alt="The Print Attack UK team at a local community event" data-clip className="aspect-[4/5] w-full bg-[#f5f5f4] object-cover" />
            <AccentBar className="absolute inset-x-0 bottom-0" />
          </div>
          <div data-reveal>
            <Label>Who we are</Label>
            <h2 className={`mt-5 ${fd} text-4xl uppercase leading-[0.95] tracking-tight md:text-[3.4rem]`}>High quality, fast, low minimum.</h2>
            <div className="mt-6 space-y-4 text-lg font-light text-slate-600">
              <p>
                Print Attack UK is a DTF printing service based in Brentwood, Essex. We print high-quality, full-colour
                transfers onto t-shirts, hoodies, workwear and uniforms — for businesses, teams, events and individuals
                across North, South, East and West.
              </p>
              <p>
                Our thing is simple: high quality, fast turnaround and a low minimum order of just six. Whether it&apos;s a
                handful of custom tees or a full uniform run — like the 60 hi-vis and 40 t-shirts we produced for GNS
                Communications — you get the same care and finish.
              </p>
              <p>
                We&apos;re proud to be part of the local community too — you&apos;ll spot us out at events across the area,
                kitting people out in properly-printed kit.
              </p>
            </div>
            <Link href="/printattack/products" className={`${btnBlue} mt-8`}>What we print <Arrow /></Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white">
        <AccentBar />
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px border-x border-[#0e0e10]/10 bg-[#0e0e10]/10 md:grid-cols-4" data-stagger>
          {[
            { v: "6", l: "Minimum order", count: true },
            { v: "24–48h", l: "Fast turnaround", count: false },
            { v: "100", s: "%", l: "Custom printed", count: true },
            { v: "DTF", l: "Specialist printing", count: false },
          ].map((st, i) => (
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

      {/* Values (horizontal scroll on mobile) */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl" data-reveal>
            <Label>What we stand for</Label>
            <h2 className={`mt-5 ${fd} text-4xl uppercase leading-[0.95] tracking-tight md:text-5xl`}>How we work.</h2>
            <p className="mt-4 text-sm font-semibold text-slate-400 sm:hidden">Swipe →</p>
          </div>
          <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:mt-14 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 lg:grid-cols-4" data-stagger>
            {VALUES.map((v, i) => (
              <div key={v.t} className="w-[72%] shrink-0 snap-start overflow-hidden border border-[#0e0e10]/12 sm:w-auto">
                <span className="block h-1.5 w-full" style={{ background: COLORS[i % COLORS.length] }} aria-hidden />
                <div className="p-7">
                  <h3 className={`${fd} text-xl uppercase tracking-tight text-[#0e0e10]`}>{v.t}</h3>
                  <p className="mt-2 font-light text-slate-600">{v.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methods + clients */}
      <section className="bg-[#f5f5f4]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div data-reveal>
              <Label>What we offer</Label>
              <h2 className={`mt-5 ${fd} text-3xl uppercase tracking-tight md:text-4xl`}>Services.</h2>
              <div className="mt-7 flex flex-wrap gap-3">
                {METHODS.map((m) => (
                  <span key={m} className={`${fd} border border-[#0e0e10]/20 bg-white px-4 py-2.5 text-sm uppercase tracking-tight text-[#0e0e10]`}>{m}</span>
                ))}
              </div>
            </div>
            <div data-reveal>
              <Label>Trusted by</Label>
              <h2 className={`mt-5 ${fd} text-3xl uppercase tracking-tight md:text-4xl`}>Who we&apos;ve printed for.</h2>
              <div className="mt-7 flex flex-col divide-y divide-[#0e0e10]/10 border-y border-[#0e0e10]/15">
                {CLIENTS.map((c) => (
                  <div key={c} className="flex items-center gap-4 py-4">
                    <span className="h-2 w-2 shrink-0 bg-[#0e0e10]" aria-hidden />
                    <p className={`${fd} text-xl uppercase tracking-tight text-[#0e0e10]`}>{c}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <PAFX />
    </>
  );
}
