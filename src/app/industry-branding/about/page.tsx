import type { Metadata } from "next";
import Link from "next/link";
import { IMG, METHODS, CLIENTS, COLORS, AccentBar, fd, Label, Arrow, PageHero, btnBlue } from "../brand";
import { IBFX } from "../IBFX";

/* eslint-disable @next/next/no-img-element */

export const metadata: Metadata = {
  title: "About",
  description:
    "About Industry Branding — a Milton Keynes garment printing & branding studio offering custom clothing and merch with no minimum order and a fast turnaround.",
};

const VALUES = [
  { t: "No minimum", b: "Order one piece or thousands — we treat every job the same." },
  { t: "Fast", b: "Quick turnaround so you hit your deadline, event or drop." },
  { t: "Quality", b: "Proper print and embroidery that lasts wash after wash." },
  { t: "Cost-effective", b: "Sharp pricing and bulk discounts, with no hidden extras." },
];

export default function IBAbout() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Branding worth wearing."
        intro="Industry Branding is a Milton Keynes garment-printing & branding studio — custom clothing and merch, done properly."
        img={IMG.about}
        imgAlt="Industry Branding workshop"
      />

      {/* Story */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24 lg:gap-16">
          <div className="relative overflow-hidden">
            <img src="/marketing/ib/ib-tee-whitegraphic.jpg" alt="Custom printed white t-shirt with graphic" data-clip className="aspect-[4/5] w-full bg-[#f5f5f4] object-cover" />
          </div>
          <div data-reveal>
            <Label>Who we are</Label>
            <h2 className={`mt-5 ${fd} text-4xl uppercase leading-[0.95] tracking-tight md:text-[3.4rem]`}>High quality, fast, no minimum.</h2>
            <div className="mt-6 space-y-4 text-lg font-light text-slate-600">
              <p>
                Industry Branding is a custom garment printing &amp; branding studio based in Central Milton Keynes. We
                print and embroider clothing and merchandise for businesses, teams, events and individuals.
              </p>
              <p>
                Our thing is simple: high quality, cost-effective and fast — with no minimum order. Whether you need a
                single custom tee or thousands of branded hoodies, you get the same care and finish.
              </p>
              <p>
                We&apos;ve produced work for big names like Super Mario, Argos, Red Bull and Fortnite — and we bring that
                same standard to every order, large or small.
              </p>
            </div>
            <Link href="/industry-branding/products" className={`${btnBlue} mt-8`}>What we brand <Arrow /></Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white">
        <AccentBar />
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px border-x border-[#0e0e10]/10 bg-[#0e0e10]/10 md:grid-cols-4" data-stagger>
          {[
            { v: "1", l: "Order from one", count: true },
            { v: "24–48h", l: "Fast turnaround", count: false },
            { v: "100", s: "%", l: "Custom printed", count: true },
            { v: "6", s: "+", l: "Print methods", count: true },
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
              <Label>How we print</Label>
              <h2 className={`mt-5 ${fd} text-3xl uppercase tracking-tight md:text-4xl`}>Methods.</h2>
              <div className="mt-7 flex flex-wrap gap-3">
                {METHODS.map((m) => (
                  <span key={m} className={`${fd} border border-[#0e0e10]/20 bg-white px-4 py-2.5 text-sm uppercase tracking-tight text-[#0e0e10]`}>{m}</span>
                ))}
              </div>
            </div>
            <div data-reveal>
              <Label>Trusted by</Label>
              <h2 className={`mt-5 ${fd} text-3xl uppercase tracking-tight md:text-4xl`}>Brands we&apos;ve printed for.</h2>
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

      <IBFX />
    </>
  );
}
