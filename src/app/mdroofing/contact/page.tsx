import type { Metadata } from "next";
import {
  IMG, Label, PageHero,
  PHONE_1_DISPLAY, PHONE_1_TEL, PHONE_2_DISPLAY, PHONE_2_TEL, EMAIL, AREA,
} from "../brand";
import { EnquiryForm } from "../EnquiryForm";
import { MDFX } from "../MDFX";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact M&D Roofing & Landscaping — call 0800 292 7569 or 07917 372622, or send an enquiry. Free, no-obligation quotes for roofing, paving and landscaping, nationwide.",
};

const MAP_SRC = "https://www.google.com/maps?q=United+Kingdom&z=5&output=embed";

export default function MDContact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        intro="Free, no-obligation quotes for roofing, paving and landscaping — nationwide. Call us or send an enquiry and we'll get straight back to you."
        img={IMG.builders}
        imgAlt="M&D Roofing & Landscaping team on site"
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Details */}
          <div data-reveal>
            <Label>Speak to us</Label>
            <h2 className="mt-5 text-3xl font-bold uppercase leading-[0.98] tracking-tight md:text-[2.6rem]">Call the team.</h2>
            <p className="mt-5 text-lg font-light text-slate-600">
              Prefer to talk it through? Give us a call — freephone or mobile, whichever suits you.
            </p>

            <div className="mt-9 border border-[#1a3a2a]/15">
              <a href={PHONE_1_TEL} className="flex items-center gap-4 border-b border-[#1a3a2a]/10 p-5 transition-colors hover:bg-[#f3f6f1]">
                <span className="grid h-11 w-11 shrink-0 place-items-center bg-[#3f8f47] text-lg text-[#1a3a2a]" aria-hidden>☎</span>
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">Freephone office</span>
                  <span className="block text-lg font-bold text-[#1a3a2a]">{PHONE_1_DISPLAY}</span>
                </span>
              </a>
              <a href={PHONE_2_TEL} className="flex items-center gap-4 border-b border-[#1a3a2a]/10 p-5 transition-colors hover:bg-[#f3f6f1]">
                <span className="grid h-11 w-11 shrink-0 place-items-center bg-[#3f8f47] text-lg text-[#1a3a2a]" aria-hidden>☎</span>
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">Mobile</span>
                  <span className="block text-lg font-bold text-[#1a3a2a]">{PHONE_2_DISPLAY}</span>
                </span>
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 border-b border-[#1a3a2a]/10 p-5 transition-colors hover:bg-[#f3f6f1]">
                <span className="grid h-11 w-11 shrink-0 place-items-center bg-[#3f8f47] text-lg text-[#1a3a2a]" aria-hidden>✉</span>
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">Email</span>
                  <span className="block break-all text-base font-bold text-[#1a3a2a]">{EMAIL}</span>
                </span>
              </a>
              <div className="flex items-center gap-4 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center bg-[#3f8f47] text-lg text-white" aria-hidden>⌖</span>
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">Coverage</span>
                  <span className="block text-base font-bold text-[#1a3a2a]">{AREA}</span>
                  <span className="mt-0.5 block text-xs font-medium text-slate-500">Commercial &amp; domestic</span>
                </span>
              </div>
            </div>

            <div className="mt-6 overflow-hidden border border-slate-200" data-reveal>
              <iframe
                title="M&D Roofing & Landscaping — nationwide coverage"
                src={MAP_SRC}
                className="h-60 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div data-reveal>
            <div id="quote" className="scroll-mt-28 border border-[#1a3a2a]/15 bg-[#f3f6f1] p-6 md:p-8">
              <h3 className="text-2xl font-bold uppercase tracking-tight text-[#1a3a2a]">Request a quote</h3>
              <p className="mt-2 text-sm text-slate-500">Tell us about the job and we&apos;ll get straight back to you.</p>
              <div className="mt-6">
                <EnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <MDFX />
    </>
  );
}
