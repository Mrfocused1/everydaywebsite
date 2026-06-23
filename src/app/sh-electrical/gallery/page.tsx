import type { Metadata } from "next";
import Link from "next/link";
import { GALLERY, IMG, GRID_BG, Label, Arrow, PageHero, btnYellow, btnGhostLight, PHONE_1_TEL, PHONE_1_DISPLAY } from "../brand";
import { SHFX } from "../SHFX";

/* eslint-disable @next/next/no-img-element */

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A gallery of real electrical jobs by SH Electrical Mcr Ltd across Manchester — consumer units, rewires, kitchen & lighting installations, garden lighting and more.",
};

export default function SHGallery() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Our recent work"
        intro="A look at real jobs we've completed across Manchester & Greater Manchester — from consumer units and rewires to lighting, kitchens and outdoor installations."
        img={IMG.night}
        imgAlt="SH Electrical completed installation"
      />

      <section className="bg-white" style={GRID_BG}>
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl" data-reveal>
            <Label>Our work</Label>
            <h2 className="mt-5 text-3xl font-bold uppercase leading-[0.98] tracking-tight md:text-5xl">Real jobs, real results.</h2>
            <p className="mt-5 text-lg font-light text-slate-600">Every photo here is a job we&apos;ve carried out — done safely, certified and left tidy.</p>
          </div>

          <div
            data-reveal
            className="mt-10 grid grid-cols-2 gap-3 [grid-auto-flow:dense] [grid-auto-rows:46vw] sm:mt-14 sm:grid-cols-3 sm:gap-4 sm:[grid-auto-rows:215px] lg:grid-cols-4 lg:[grid-auto-rows:235px]"
          >
            {GALLERY.map((g) => (
              <figure
                key={g.src}
                className={`group relative overflow-hidden border border-[#16225e]/10 ${g.big ? "sm:col-span-2 sm:row-span-2" : ""}`}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="pointer-events-none absolute inset-0 bg-[#0c1230]/0 transition-colors duration-300 group-hover:bg-[#0c1230]/15" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-100 bg-[#f7f8fc]" style={GRID_BG}>
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-16 text-center md:flex-row md:px-8 md:text-left" data-reveal>
          <div>
            <h2 className="text-3xl font-bold uppercase tracking-tight text-[#16225e] md:text-4xl">Like what you see?</h2>
            <p className="mt-2 font-light text-slate-600">Tell us about your job — free, no-obligation quotes across Greater Manchester.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/sh-electrical/contact#quote" className={btnYellow}>Get a free quote <Arrow /></Link>
            <a href={PHONE_1_TEL} className={btnGhostLight}>{PHONE_1_DISPLAY}</a>
          </div>
        </div>
      </section>

      <SHFX />
    </>
  );
}
