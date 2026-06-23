import type { Metadata } from "next";
import Link from "next/link";
import { IMG, SERVICES, CREDENTIALS, RAINBOW, CUT_TR, fd, Label, Arrow, PageHero, btnPrimary, RainbowDots } from "../brand";
import { CCCFX } from "../CCCFX";

/* eslint-disable @next/next/no-img-element */

export const metadata: Metadata = {
  title: "About",
  description:
    "About Connect Care Consultancy — founded by Nya K. Mabu with 20+ years in health and social care, helping care home and domiciliary providers achieve CQC compliance and outstanding care.",
};

export default function CCCAbout() {
  return (
    <>
      <PageHero
        eyebrow="About Connect Care"
        title="Compliance, made human."
        intro="We take the fear out of CQC — combining deep regulatory knowledge with genuine, reassuring support that helps care providers thrive."
        img={IMG.meeting}
        imgAlt="Care professionals in a bright meeting"
      />

      {/* Story */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24 lg:gap-16">
          <div className="relative" data-reveal>
            <div className="pointer-events-none absolute -right-5 -top-5 h-44 w-44 rounded-full bg-[#2f8fce]/15 blur-2xl" aria-hidden />
            <div className="pointer-events-none absolute -bottom-5 left-6 h-40 w-40 rounded-full bg-[#ef9a3d]/15 blur-2xl" aria-hidden />
            <img src={IMG.nya} alt="Nya K. Mabu, founder of Connect Care Consultancy" className="relative aspect-[5/6] w-full object-cover" style={{ clipPath: CUT_TR, filter: "drop-shadow(0 28px 40px rgba(43,45,51,0.28))" }} />
          </div>
          <div data-reveal>
            <Label>Our story</Label>
            <h2 className={`mt-5 ${fd} text-3xl font-light leading-[1.06] tracking-tight text-[#2b2d33] md:text-[2.9rem]`}>20+ years in care, in your corner.</h2>
            <div className="mt-6 space-y-4 text-lg font-light text-[#6b6f76]">
              <p>
                Connect Care Consultancy was founded by Nya K. Mabu, who brings more than two decades of experience in
                the health and social care sector — supporting care homes and domiciliary care services across the UK.
              </p>
              <p>
                Having seen how stressful inspections and registration can feel, Nya set out to do things differently:
                to empower, support, advise and mentor providers, simplify regulatory compliance, and make premium,
                expert support genuinely affordable.
              </p>
              <p>
                Whether you&apos;re registering a brand-new service, turning around an underperforming one, or reaching
                for an Outstanding rating, you&apos;ll have a calm, knowledgeable partner beside you.
              </p>
            </div>
            <Link href="/connect-care/contact" data-magnetic className={`${btnPrimary} mt-8`}>Work with us <Arrow /></Link>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-[#faf7f2]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl" data-reveal>
            <Label>Qualified &amp; experienced</Label>
            <h2 className={`mt-5 ${fd} text-3xl font-light leading-[1.08] tracking-tight text-[#2b2d33] md:text-[3rem]`}>Expertise you can lean on.</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" data-stagger>
            {CREDENTIALS.map((c, i) => (
              <div key={c} className="rounded-3xl bg-white p-7 ring-1 ring-[#2b2d33]/5">
                <span className="block h-1 w-10 rounded-full" style={{ background: RAINBOW[i % RAINBOW.length] }} aria-hidden />
                <p className={`mt-4 ${fd} text-lg font-medium text-[#2b2d33]`}>{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl" data-reveal>
            <Label>How we help</Label>
            <h2 className={`mt-5 ${fd} text-3xl font-light leading-[1.08] tracking-tight text-[#2b2d33] md:text-[3rem]`}>Support at every stage.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8" data-stagger>
            {SERVICES.map((s, i) => (
              <div key={s.t} className="rounded-3xl bg-[#faf7f2] p-7 ring-1 ring-[#2b2d33]/5">
                <span className="grid h-9 w-9 place-items-center rounded-full text-sm font-bold text-white" style={{ background: RAINBOW[i % RAINBOW.length] }}>{i + 1}</span>
                <h3 className={`mt-4 ${fd} text-xl font-medium text-[#2b2d33]`}>{s.t}</h3>
                <p className="mt-2.5 text-sm font-light leading-relaxed text-[#6b6f76]">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 pb-20 md:px-8" data-reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#faf3f7] px-7 py-14 text-center md:px-12 md:py-20">
            <div className="pointer-events-none absolute -right-16 -top-16 h-60 w-60 rounded-full bg-[#e0559a]/15 blur-3xl" aria-hidden />
            <div className="relative mx-auto max-w-2xl">
              <RainbowDots className="justify-center" />
              <h2 className={`mt-5 ${fd} text-3xl font-light leading-[1.08] tracking-tight text-[#2b2d33] md:text-[3rem]`}>Let&apos;s build outstanding care, together.</h2>
              <p className="mt-4 text-lg font-light text-[#6b6f76]">Book a friendly consultation and tell us about your service.</p>
              <Link href="/connect-care/contact" data-magnetic className={`${btnPrimary} mt-8`}>Book a consultation <Arrow /></Link>
            </div>
          </div>
        </div>
      </section>

      <CCCFX />
    </>
  );
}
