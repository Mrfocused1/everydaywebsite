import type { Metadata } from "next";
import Link from "next/link";
import { IMG, TRUST, CUT_TR, fd, Label, Arrow, PageHero, btnRed, LOCATIONS } from "../brand";
import { BajanFX } from "../BajanFX";

/* eslint-disable @next/next/no-img-element */

export const metadata: Metadata = {
  title: "About",
  description:
    "About BajanApple Digital — a B2B same-day digital printing company in Leeds & Pudsey, West Yorkshire. BPIF and FSB members delivering professional print fast, locally and nationwide.",
};

const VALUES = [
  { t: "Fast", b: "Same-day turnaround on most jobs — send files in the morning, collect in the afternoon." },
  { t: "Quality", b: "BPIF members. Professional kit, proper proofing, premium stocks and finishes." },
  { t: "Range", b: "From business cards to exhibition banners — a huge range of products, all in-house." },
  { t: "Local & national", b: "Based in Leeds & Pudsey, delivering across Yorkshire and nationwide." },
];

const AREAS = ["Leeds", "Bradford", "Wakefield", "Huddersfield", "Halifax", "Harrogate", "York", "Hull", "Sheffield", "Manchester", "Birmingham", "London"];

export default function BajanAbout() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Built for businesses in a hurry."
        intro="BajanApple Digital is a B2B same-day digital print house in Leeds & Pudsey, West Yorkshire — professional print, produced fast."
        img={IMG.about}
        imgAlt="BajanApple print press at work"
      />

      {/* Story */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24 lg:gap-16">
          <div className="relative overflow-hidden rounded-3xl" data-reveal style={{ clipPath: CUT_TR }}>
            <img src={IMG.press} alt="Digital printing in progress" data-parallax className="aspect-[4/5] w-full scale-110 object-cover" />
          </div>
          <div data-reveal>
            <Label>Who we are</Label>
            <h2 className={`mt-5 ${fd} text-3xl font-extrabold leading-[1.04] tracking-tight md:text-[2.9rem]`}>Professional print, without the wait.</h2>
            <div className="mt-6 space-y-4 text-lg font-light text-slate-600">
              <p>
                BajanApple Digital is a B2B digital printing company based in {LOCATIONS}. We produce high-quality,
                professional print — and we produce it fast.
              </p>
              <p>
                Most orders are ready the same day, typically in 2–3 hours, with a 60-minute express option for urgent
                jobs. We&apos;re open 6–7 days a week, so we&apos;re here when a deadline lands on a weekend.
              </p>
              <p>
                As BPIF and FSB members, we hold ourselves to a professional standard — proper proofing, premium stocks
                and a finish you&apos;d be proud to hand over. Local collection, nationwide delivery.
              </p>
            </div>
            <Link href="/bajan-apple/products" className={`${btnRed} mt-8`}>What we print <Arrow /></Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#0d1530] text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-white/10 md:grid-cols-4" data-stagger>
          {[
            { v: "94", s: "+", l: "5★ reviews", count: true },
            { v: "2–3", l: "Hr turnaround", count: false },
            { v: "7", l: "Days a week", count: false },
            { v: "29", s: "+", l: "UK cities served", count: true },
          ].map((st) => (
            <div key={st.l} className="bg-[#0d1530] p-7 text-center md:p-10">
              {st.count ? (
                <p className={`${fd} text-4xl font-extrabold tracking-tight text-[#ff5a52] md:text-5xl`} data-count={st.v} data-suffix={st.s || ""}>0{st.s || ""}</p>
              ) : (
                <p className={`${fd} text-4xl font-extrabold tracking-tight text-[#ff5a52] md:text-5xl`}>{st.v}</p>
              )}
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-white/55">{st.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl" data-reveal>
            <Label>What we stand for</Label>
            <h2 className={`mt-5 ${fd} text-3xl font-extrabold leading-[1.02] tracking-tight md:text-5xl`}>How we work.</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4" data-stagger>
            {VALUES.map((v) => (
              <div key={v.t} className="rounded-2xl border border-[#16223a]/10 p-7">
                <h3 className={`${fd} text-xl font-bold tracking-tight text-[#306fc7]`}>{v.t}</h3>
                <p className="mt-2 font-light text-slate-600">{v.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery areas + credentials */}
      <section className="bg-[#f4f6fb]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div data-reveal>
              <Label>Where we deliver</Label>
              <h2 className={`mt-5 ${fd} text-3xl font-extrabold tracking-tight md:text-4xl`}>Yorkshire &amp; nationwide.</h2>
              <p className="mt-4 font-light text-slate-600">Same-day collection from Leeds &amp; Pudsey, plus delivery to towns and cities across the UK, including:</p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {AREAS.map((a) => (
                  <span key={a} className={`${fd} rounded-xl border border-[#16223a]/15 bg-white px-3.5 py-2 text-sm font-bold text-[#16223a]`}>{a}</span>
                ))}
              </div>
            </div>
            <div data-reveal>
              <Label>Credentials</Label>
              <h2 className={`mt-5 ${fd} text-3xl font-extrabold tracking-tight md:text-4xl`}>Trusted &amp; accredited.</h2>
              <div className="mt-6 grid grid-cols-2 border border-[#16223a]/12 bg-white">
                {TRUST.map((t) => (
                  <div key={t} className="flex flex-col gap-3 border-b border-r border-[#16223a]/10 p-6 odd:border-r [&:nth-child(n+3)]:border-b-0">
                    <span className="h-2 w-2 rounded-full bg-[#ca2d25]" aria-hidden />
                    <p className={`${fd} text-sm font-bold tracking-tight text-[#16223a]`}>{t}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <BajanFX />
    </>
  );
}
