import type { Metadata } from "next";
import {
  IMG, fd, Label, PageHero, HOURS,
  PHONE_DISPLAY, PHONE_TEL, WHATSAPP, INSTAGRAM, HANDLE, LINKTREE, ADDRESS,
} from "../brand";
import { EnquiryForm } from "../EnquiryForm";
import { PAFX } from "../PAFX";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Print Attack UK — call 07494 780623, message us on WhatsApp or DM @printattackuk on Instagram for a fast, free quote on custom DTF printing in Brentwood. Minimum order 6.",
};

const MAP_SRC = "https://www.google.com/maps?q=Brentwood,+Essex,+UK&z=12&output=embed";

export default function PAContact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's get printing."
        intro="Tell us what you want printed for a fast, free quote — minimum order 6. Call, WhatsApp or DM us on Instagram."
        img={IMG.teeWorkwear}
        imgAlt="Custom branded workwear t-shirt"
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Details */}
          <div data-reveal>
            <Label>Speak to us</Label>
            <h2 className={`mt-5 ${fd} text-4xl uppercase leading-[0.95] tracking-tight md:text-[2.8rem]`}>Get a quote.</h2>
            <p className="mt-5 text-lg font-light text-slate-600">
              Send over your design and what you&apos;d like printed — we&apos;ll come back fast with a price and a turnaround.
            </p>

            <div className="mt-9 overflow-hidden border border-[#0e0e10]/15">
              <a href={PHONE_TEL} className="flex items-center gap-4 border-b border-[#0e0e10]/10 p-5 transition-colors hover:bg-[#f5f5f4]">
                <span className="grid h-11 w-11 shrink-0 place-items-center bg-[#0e0e10] text-lg text-white" aria-hidden>☎</span>
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">Call us</span>
                  <span className={`block ${fd} text-lg uppercase tracking-tight text-[#0e0e10]`}>{PHONE_DISPLAY}</span>
                </span>
              </a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 border-b border-[#0e0e10]/10 p-5 transition-colors hover:bg-[#f5f5f4]">
                <span className="grid h-11 w-11 shrink-0 place-items-center bg-[#0e0e10] text-lg text-white" aria-hidden>✆</span>
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">WhatsApp</span>
                  <span className={`block ${fd} text-lg uppercase tracking-tight text-[#0e0e10]`}>Message us</span>
                </span>
              </a>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 border-b border-[#0e0e10]/10 p-5 transition-colors hover:bg-[#f5f5f4]">
                <span className="grid h-11 w-11 shrink-0 place-items-center bg-[#0e0e10] text-lg text-white" aria-hidden>◎</span>
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">Instagram</span>
                  <span className={`block ${fd} text-base uppercase tracking-tight text-[#0e0e10]`}>{HANDLE}</span>
                </span>
              </a>
              <a href={LINKTREE} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 border-b border-[#0e0e10]/10 p-5 transition-colors hover:bg-[#f5f5f4]">
                <span className="grid h-11 w-11 shrink-0 place-items-center bg-[#0e0e10] text-lg text-white" aria-hidden>🔗</span>
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">All our links</span>
                  <span className="block text-sm font-medium text-[#0e0e10]">linktr.ee/printattackuk</span>
                </span>
              </a>
              <div className="flex items-center gap-4 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center bg-[#0e0e10] text-lg text-white" aria-hidden>⌖</span>
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">Where we are</span>
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
                title="Print Attack UK — Brentwood, Essex"
                src={MAP_SRC}
                className="h-56 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div data-reveal>
            <div id="quote" className="scroll-mt-28 border border-[#0e0e10]/15 bg-[#f5f5f4] p-6 md:p-8">
              <h3 className={`${fd} text-2xl uppercase tracking-tight text-[#0e0e10]`}>Request a quote</h3>
              <p className="mt-2 text-sm text-slate-500">Tell us what you need and we&apos;ll come straight back to you on WhatsApp.</p>
              <div className="mt-6">
                <EnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <PAFX />
    </>
  );
}
