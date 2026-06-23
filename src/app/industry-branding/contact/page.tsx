import type { Metadata } from "next";
import {
  IMG, fd, Label, PageHero, HOURS, SOCIALS,
  PHONE_DISPLAY, PHONE_TEL, EMAIL, ADDRESS, INSTAGRAM,
} from "../brand";
import { EnquiryForm } from "../EnquiryForm";
import { IBFX } from "../IBFX";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Industry Branding — call 07503 248161, email info@industrybranding.co.uk or DM us on Instagram for a fast, free quote on custom garment printing in Milton Keynes.",
};

const MAP_SRC = "https://www.google.com/maps?q=399+Silbury+Boulevard,+Milton+Keynes,+MK9+2AH&z=14&output=embed";

export default function IBContact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's make something."
        intro="Tell us what you want branded for a fast, free quote — no minimum order. Call, email or DM us on Instagram."
        img={IMG.merch}
        imgAlt="Custom branded merchandise"
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Details */}
          <div data-reveal>
            <Label>Speak to us</Label>
            <h2 className={`mt-5 ${fd} text-4xl uppercase leading-[0.95] tracking-tight md:text-[2.8rem]`}>Get a quote.</h2>
            <p className="mt-5 text-lg font-light text-slate-600">
              Send over your design and the garments you want — we&apos;ll come back fast with a price and a turnaround.
            </p>

            <div className="mt-9 overflow-hidden border border-[#0e0e10]/15">
              <a href={PHONE_TEL} className="flex items-center gap-4 border-b border-[#0e0e10]/10 p-5 transition-colors hover:bg-[#f5f5f4]">
                <span className="grid h-11 w-11 shrink-0 place-items-center bg-[#0e0e10] text-lg text-white" aria-hidden>☎</span>
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">Call us</span>
                  <span className={`block ${fd} text-lg uppercase tracking-tight text-[#0e0e10]`}>{PHONE_DISPLAY}</span>
                </span>
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 border-b border-[#0e0e10]/10 p-5 transition-colors hover:bg-[#f5f5f4]">
                <span className="grid h-11 w-11 shrink-0 place-items-center bg-[#0e0e10] text-lg text-white" aria-hidden>✉</span>
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">Email</span>
                  <span className={`block break-all ${fd} text-base uppercase tracking-tight text-[#0e0e10]`}>{EMAIL}</span>
                </span>
              </a>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 border-b border-[#0e0e10]/10 p-5 transition-colors hover:bg-[#f5f5f4]">
                <span className="grid h-11 w-11 shrink-0 place-items-center bg-[#0e0e10] text-lg text-white" aria-hidden>◎</span>
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">Social</span>
                  <span className="block text-sm font-medium text-[#0e0e10]">{SOCIALS.map((s) => s.label).join("  ·  ")}</span>
                </span>
              </a>
              <div className="flex items-center gap-4 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center bg-[#0e0e10] text-lg text-white" aria-hidden>⌖</span>
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">Studio</span>
                  <span className={`block ${fd} text-base uppercase tracking-tight text-[#0e0e10]`}>{ADDRESS}</span>
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 border border-[#0e0e10]/15 p-5 sm:grid-cols-3">
              {HOURS.map((h) => (
                <div key={h.d}>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">{h.d}</p>
                  <p className={`mt-1 ${fd} text-sm uppercase tracking-tight text-[#0e0e10]`}>{h.h}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 overflow-hidden border border-slate-200" data-reveal>
              <iframe
                title="Industry Branding — Milton Keynes"
                src={MAP_SRC}
                className="h-56 w-full grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div data-reveal>
            <div id="quote" className="scroll-mt-28 border border-[#0e0e10]/15 bg-[#f5f5f4] p-6 md:p-8">
              <h3 className={`${fd} text-2xl uppercase tracking-tight text-[#0e0e10]`}>Request a quote</h3>
              <p className="mt-2 text-sm text-slate-500">Tell us what you need and we&apos;ll come straight back to you.</p>
              <div className="mt-6">
                <EnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <IBFX />
    </>
  );
}
