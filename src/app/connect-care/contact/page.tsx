import type { Metadata } from "next";
import {
  fd, Label, PageHero, RainbowDots,
  PHONE_DISPLAY, PHONE_TEL, EMAIL, ADDRESS, COMPANY_NO, FACEBOOK, LINKEDIN,
} from "../brand";
import { EnquiryForm } from "../EnquiryForm";
import { CCCFX } from "../CCCFX";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Connect Care Consultancy — call 0161 971 6354, email info@connectcareconsultancy.com, or send a message for a friendly consultation about CQC compliance and care support in Manchester and across the UK.",
};

const MAP_SRC = "https://www.google.com/maps?q=Manchester+Business+Park,+3000+Aviator+Way,+Manchester+M22+5TG&z=14&output=embed";

export default function CCCContact() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let's talk about your service."
        intro="Friendly, no-pressure advice. Call, email, or send a message and we'll get back to you to arrange a consultation."
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Details */}
          <div data-reveal>
            <Label>Get in touch</Label>
            <h2 className={`mt-5 ${fd} text-3xl font-light leading-[1.06] tracking-tight text-[#2b2d33] md:text-[2.6rem]`}>We&apos;d love to help.</h2>
            <p className="mt-5 text-lg font-light text-[#6b6f76]">
              Reach out however suits you best — we&apos;re here to make compliance feel manageable.
            </p>

            <div className="mt-9 overflow-hidden rounded-3xl border border-[#2b2d33]/10">
              <a href={PHONE_TEL} className="flex items-center gap-4 border-b border-[#2b2d33]/8 p-5 transition-colors hover:bg-[#faf7f2]">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#2f8fce]/12 text-lg text-[#2a7fc4]" aria-hidden>☎</span>
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#9a9ea5]">Call us</span>
                  <span className="block text-lg font-semibold text-[#2b2d33]">{PHONE_DISPLAY}</span>
                </span>
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 border-b border-[#2b2d33]/8 p-5 transition-colors hover:bg-[#faf7f2]">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#e0559a]/12 text-lg text-[#e0559a]" aria-hidden>✉</span>
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#9a9ea5]">Email</span>
                  <span className="block break-all text-base font-semibold text-[#2b2d33]">{EMAIL}</span>
                </span>
              </a>
              <div className="flex items-center gap-4 border-b border-[#2b2d33]/8 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#5fb85a]/12 text-lg text-[#5fb85a]" aria-hidden>⌖</span>
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#9a9ea5]">Visit / write to us</span>
                  <span className="block text-base font-semibold text-[#2b2d33]">{ADDRESS}</span>
                </span>
              </div>
              <div className="flex items-center gap-4 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#ef9a3d]/14 text-lg text-[#ef9a3d]" aria-hidden>★</span>
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#9a9ea5]">Connect</span>
                  <span className="flex flex-wrap gap-x-3 text-sm font-semibold text-[#2b2d33]">
                    <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" className="hover:text-[#2a7fc4]">Facebook</a>
                    <span className="text-[#cfcfcf]">·</span>
                    <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="hover:text-[#2a7fc4]">LinkedIn</a>
                    <span className="text-[#cfcfcf]">·</span>
                    <a href={`mailto:${EMAIL}`} className="hover:text-[#2a7fc4]">Email</a>
                  </span>
                </span>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between gap-3 px-1">
              <p className="text-xs text-[#9a9ea5]">Connect Care Consultancy Ltd · Company No. {COMPANY_NO}</p>
              <RainbowDots />
            </div>

            <div className="mt-6 overflow-hidden rounded-3xl border border-[#2b2d33]/10" data-reveal>
              <iframe title="Connect Care Consultancy — Manchester" src={MAP_SRC} className="h-60 w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>

          {/* Form */}
          <div data-reveal>
            <div id="quote" className="scroll-mt-28 rounded-3xl border border-[#2b2d33]/10 bg-[#faf7f2] p-6 md:p-8">
              <h3 className={`${fd} text-2xl font-light text-[#2b2d33]`}>Send us a message</h3>
              <p className="mt-2 text-sm text-[#6b6f76]">Tell us a little about your service and we&apos;ll be in touch.</p>
              <div className="mt-6">
                <EnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CCCFX />
    </>
  );
}
