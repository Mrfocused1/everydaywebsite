import type { Metadata } from "next";
import {
  IMG, Label, PageHero,
  PHONE_1_DISPLAY, PHONE_1_TEL, PHONE_2_DISPLAY, PHONE_2_TEL, PHONE_3_DISPLAY, PHONE_3_TEL, EMAIL, AREA,
} from "../brand";
import { EnquiryForm } from "../EnquiryForm";
import { PPFX } from "../PPFX";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Premier Plastering South Lakes — call 07831 845 958, 07972 688 438 or 01229 343090, or send an enquiry. Free, no-obligation quotes across Ulverston & the South Lakes.",
};

const MAP_SRC = "https://www.google.com/maps?q=Ulverston,+Cumbria&z=11&output=embed";

export default function PPContact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        intro="Free, no-obligation quotes across Ulverston & the South Lakes. Call us or send an enquiry and we'll get straight back to you."
        img={IMG.worker}
        imgAlt="Premier Plastering at work"
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Details */}
          <div data-reveal>
            <Label>Speak to us</Label>
            <h2 className="mt-5 text-3xl font-bold uppercase leading-[0.98] tracking-tight md:text-[2.6rem]">Call the team.</h2>
            <p className="mt-5 text-lg font-light text-slate-600">
              Prefer to talk it through? Give us a call on any of the numbers below and we&apos;ll be happy to help.
            </p>

            <div className="mt-9 border border-[#16293c]/15">
              <a href={PHONE_1_TEL} className="flex items-center gap-4 border-b border-[#16293c]/10 p-5 transition-colors hover:bg-[#f1f5f9]">
                <span className="grid h-11 w-11 shrink-0 place-items-center bg-[#ff5e3c] text-lg text-white" aria-hidden>☎</span>
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">Mobile</span>
                  <span className="block text-lg font-bold text-[#16293c]">{PHONE_1_DISPLAY}</span>
                </span>
              </a>
              <a href={PHONE_2_TEL} className="flex items-center gap-4 border-b border-[#16293c]/10 p-5 transition-colors hover:bg-[#f1f5f9]">
                <span className="grid h-11 w-11 shrink-0 place-items-center bg-[#ff5e3c] text-lg text-white" aria-hidden>☎</span>
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">Mobile</span>
                  <span className="block text-lg font-bold text-[#16293c]">{PHONE_2_DISPLAY}</span>
                </span>
              </a>
              <a href={PHONE_3_TEL} className="flex items-center gap-4 border-b border-[#16293c]/10 p-5 transition-colors hover:bg-[#f1f5f9]">
                <span className="grid h-11 w-11 shrink-0 place-items-center bg-[#ff5e3c] text-lg text-white" aria-hidden>☎</span>
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">Office</span>
                  <span className="block text-lg font-bold text-[#16293c]">{PHONE_3_DISPLAY}</span>
                </span>
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 border-b border-[#16293c]/10 p-5 transition-colors hover:bg-[#f1f5f9]">
                <span className="grid h-11 w-11 shrink-0 place-items-center bg-[#ff5e3c] text-lg text-white" aria-hidden>✉</span>
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">Email</span>
                  <span className="block break-all text-base font-bold text-[#16293c]">{EMAIL}</span>
                </span>
              </a>
              <div className="flex items-center gap-4 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center bg-[#ff5e3c] text-lg text-white" aria-hidden>⌖</span>
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">Based in</span>
                  <span className="block text-base font-bold text-[#16293c]">Ulverston, South Cumbria</span>
                  <span className="mt-0.5 block text-xs font-medium text-slate-500">Covering {AREA}</span>
                </span>
              </div>
            </div>

            <div className="mt-6 overflow-hidden border border-slate-200" data-reveal>
              <iframe
                title="Premier Plastering South Lakes — Ulverston"
                src={MAP_SRC}
                className="h-60 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div data-reveal>
            <div id="quote" className="scroll-mt-28 border border-[#16293c]/15 bg-[#f1f5f9] p-6 md:p-8">
              <h3 className="text-2xl font-bold uppercase tracking-tight text-[#16293c]">Request a quote</h3>
              <p className="mt-2 text-sm text-slate-500">Tell us about the job and we&apos;ll get straight back to you.</p>
              <div className="mt-6">
                <EnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <PPFX />
    </>
  );
}
