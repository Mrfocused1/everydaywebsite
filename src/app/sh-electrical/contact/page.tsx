import type { Metadata } from "next";
import {
  IMG, Label, PageHero,
  PHONE_1_DISPLAY, PHONE_1_TEL, PHONE_2_DISPLAY, PHONE_2_TEL, EMAIL, ADDRESS, AREA,
} from "../brand";
import { EnquiryForm } from "../EnquiryForm";
import { SHFX } from "../SHFX";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact SH Electrical Mcr Ltd — call 07870 895 049 or 07815 046 533, or send an enquiry. Free, no-obligation quotes across Manchester & Greater Manchester.",
};

const MAP_SRC = "https://www.google.com/maps?q=124+Railway+Road,+Manchester,+M32+0QD&z=13&output=embed";

export default function SHContact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        intro="Free, no-obligation quotes across Manchester & Greater Manchester. Call us or send an enquiry and we'll get straight back to you."
        img={IMG.emergency}
        imgAlt="SH Electrical testing and inspection"
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Details */}
          <div data-reveal>
            <Label>Speak to us</Label>
            <h2 className="mt-5 text-3xl font-bold uppercase leading-[0.98] tracking-tight md:text-[2.6rem]">Call the team.</h2>
            <p className="mt-5 text-lg font-light text-slate-600">
              Prefer to talk it through? Give us a call — there are two numbers, so you&apos;ll always reach someone.
            </p>

            <div className="mt-9 border border-[#16225e]/15">
              <a href={PHONE_1_TEL} className="flex items-center gap-4 border-b border-[#16225e]/10 p-5 transition-colors hover:bg-[#f7f8fc]">
                <span className="grid h-11 w-11 shrink-0 place-items-center bg-[#1f8fd6] text-lg text-[#16225e]" aria-hidden>☎</span>
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">Call us</span>
                  <span className="block text-lg font-bold text-[#16225e]">{PHONE_1_DISPLAY}</span>
                </span>
              </a>
              <a href={PHONE_2_TEL} className="flex items-center gap-4 border-b border-[#16225e]/10 p-5 transition-colors hover:bg-[#f7f8fc]">
                <span className="grid h-11 w-11 shrink-0 place-items-center bg-[#1f8fd6] text-lg text-[#16225e]" aria-hidden>☎</span>
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">Alternative</span>
                  <span className="block text-lg font-bold text-[#16225e]">{PHONE_2_DISPLAY}</span>
                </span>
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 border-b border-[#16225e]/10 p-5 transition-colors hover:bg-[#f7f8fc]">
                <span className="grid h-11 w-11 shrink-0 place-items-center bg-[#1f8fd6] text-lg text-[#16225e]" aria-hidden>✉</span>
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">Email</span>
                  <span className="block break-all text-base font-bold text-[#16225e]">{EMAIL}</span>
                </span>
              </a>
              <div className="flex items-center gap-4 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center bg-[#1f8fd6] text-lg text-white" aria-hidden>⌖</span>
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">Address</span>
                  <span className="block text-base font-bold text-[#16225e]">{ADDRESS}</span>
                  <span className="mt-0.5 block text-xs font-medium text-slate-500">Covering {AREA}</span>
                </span>
              </div>
            </div>

            <div className="mt-6 overflow-hidden border border-slate-200" data-reveal>
              <iframe
                title="SH Electrical Mcr Ltd — Manchester"
                src={MAP_SRC}
                className="h-60 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div data-reveal>
            <div id="quote" className="scroll-mt-28 border border-[#16225e]/15 bg-[#f7f8fc] p-6 md:p-8">
              <h3 className="text-2xl font-bold uppercase tracking-tight text-[#16225e]">Request a quote</h3>
              <p className="mt-2 text-sm text-slate-500">Tell us about the job and we&apos;ll get straight back to you.</p>
              <div className="mt-6">
                <EnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SHFX />
    </>
  );
}
