import type { Metadata } from "next";
import Link from "next/link";
import { IMG, EVENTS, COLORS, AccentBar, Polaroid, fd, Label, Arrow, PageHero, btnRed } from "../brand";
import { SPFX } from "../SPFX";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Snap & Print Events — an instant event photography service that captures the moment and prints it on the spot, so your guests keep a real photo. Festivals, parties, weddings and brand activations.",
};

const VALUES = [
  { t: "On the move", b: "No corner, no queue. We work the whole room so nobody misses their moment." },
  { t: "Instant", b: "From shutter to print in about a minute — the memory lands while the night's still going." },
  { t: "Branded", b: "Your logo, hashtag or border on every print — a keepsake that doubles as marketing." },
  { t: "Any event", b: "Festivals, weddings, launches or birthdays — indoors or out, big or small." },
];

const STATS = [
  { v: "60", s: "s", l: "Snap to print", count: true },
  { v: "Unlimited", l: "Prints on the night", count: false },
  { v: "Any", l: "Event size", count: false },
  { v: "UK", l: "Wide coverage", count: false },
];

export default function SPAbout() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="We capture & print the moment."
        intro="Snap & Print Events is instant event photography — pro photos, printed on the spot, handed straight to your guests."
        img={IMG.keep}
        imgAlt="A guest holding their printed photo"
      />

      {/* Story */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24 lg:gap-16">
          <div className="relative mx-auto max-w-[20rem] md:max-w-none" data-reveal>
            <Polaroid src={IMG.friends} alt="Friends at a festival" caption="snapped & printed ✦" rotate={-3} />
          </div>
          <div data-reveal>
            <Label>Who we are</Label>
            <h2 className={`mt-5 ${fd} text-4xl uppercase leading-[0.95] tracking-tight md:text-[3.4rem]`}>Photos people actually keep.</h2>
            <div className="mt-6 space-y-4 text-lg font-light text-slate-600">
              <p>
                Phones take thousands of photos that nobody ever looks at again. We do the opposite — a real photographer
                catching real moments, printed in your guests&apos; hands before the night&apos;s over.
              </p>
              <p>
                It started with a simple idea: a printed photo means more than a file. Hand someone a glossy print at an
                event and it ends up on the fridge, the mirror, the office desk — a little reminder that lasts for years.
              </p>
              <p>
                Today we bring that to festivals, weddings, parties and brand activations across the UK — pro kit, an
                on-site printer, and your branding on every shot if you want it.
              </p>
            </div>
            <Link href="/snap-and-print/contact#book" className={`${btnRed} mt-8`}>Book your event <Arrow /></Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white">
        <AccentBar />
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px border-x border-[#0e0e10]/10 bg-[#0e0e10]/10 md:grid-cols-4" data-stagger>
          {STATS.map((st, i) => (
            <div key={st.l} className="bg-white p-7 text-center md:p-10">
              {st.count ? (
                <p className={`${fd} text-4xl tracking-tight md:text-6xl`} style={{ color: COLORS[i % COLORS.length] }} data-count={st.v} data-suffix={st.s || ""}>0{st.s || ""}</p>
              ) : (
                <p className={`${fd} text-3xl tracking-tight md:text-5xl`} style={{ color: COLORS[i % COLORS.length] }}>{st.v}</p>
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

      {/* Events we cover */}
      <section className="bg-[#f5f5f4]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl" data-reveal>
            <Label>Events we cover</Label>
            <h2 className={`mt-5 ${fd} text-3xl uppercase tracking-tight md:text-4xl`}>Where you&apos;ll find us.</h2>
          </div>
          <div className="mt-8 flex flex-col divide-y divide-[#0e0e10]/10 border-y border-[#0e0e10]/15" data-stagger>
            {EVENTS.map((c, i) => (
              <div key={c.t} className="flex items-center gap-4 py-4">
                <span className="h-2 w-2 shrink-0" style={{ background: COLORS[i % COLORS.length] }} aria-hidden />
                <p className={`${fd} text-xl uppercase tracking-tight text-[#0e0e10]`}>{c.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SPFX />
    </>
  );
}
