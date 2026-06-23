import type { Metadata } from "next";
import {
  IMG, fd, Label, PageHero, HOURS,
  PHONE_DISPLAY, PHONE_TEL, WHATSAPP_DISPLAY, WHATSAPP_LINK, EMAIL, LOCATIONS,
} from "../brand";
import { EnquiryForm } from "../EnquiryForm";
import { BajanFX } from "../BajanFX";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact BajanApple Digital — call 0800 130 3855, WhatsApp 07547 370 440 or email info@bajanapple.com for a fast, free print quote in Leeds & Pudsey.",
};

const MAP_SRC = "https://www.google.com/maps?q=Pudsey,+Leeds,+UK&z=11&output=embed";

export default function BajanContact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's get it printed."
        intro="Send your files for a fast, free quote — most orders ready in 2–3 hours. Call, WhatsApp or fill in the form."
        img={IMG.flyers}
        imgAlt="Colourful printed materials"
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Details */}
          <div data-reveal>
            <Label>Speak to us</Label>
            <h2 className={`mt-5 ${fd} text-3xl font-extrabold leading-[1.02] tracking-tight md:text-[2.6rem]`}>Quick quote, quick print.</h2>
            <p className="mt-5 text-lg font-light text-slate-600">
              The fastest way to get going is to send your artwork over — we&apos;ll check it for free and come straight
              back with a price and a time.
            </p>

            <div className="mt-9 overflow-hidden rounded-2xl border border-[#16223a]/12">
              <a href={PHONE_TEL} className="flex items-center gap-4 border-b border-[#16223a]/10 p-5 transition-colors hover:bg-[#f4f6fb]">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#306fc7] text-lg text-white" aria-hidden>☎</span>
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">Call us</span>
                  <span className={`block ${fd} text-lg font-bold text-[#16223a]`}>{PHONE_DISPLAY}</span>
                </span>
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 border-b border-[#16223a]/10 p-5 transition-colors hover:bg-[#f4f6fb]">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#ca2d25] text-lg text-white" aria-hidden>✆</span>
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">WhatsApp</span>
                  <span className={`block ${fd} text-lg font-bold text-[#16223a]`}>{WHATSAPP_DISPLAY}</span>
                </span>
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 border-b border-[#16223a]/10 p-5 transition-colors hover:bg-[#f4f6fb]">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#306fc7] text-lg text-white" aria-hidden>✉</span>
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">Email</span>
                  <span className={`block break-all ${fd} text-base font-bold text-[#16223a]`}>{EMAIL}</span>
                </span>
              </a>
              <div className="flex items-center gap-4 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#ca2d25] text-lg text-white" aria-hidden>⌖</span>
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">Locations</span>
                  <span className={`block ${fd} text-base font-bold text-[#16223a]`}>{LOCATIONS}</span>
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 rounded-2xl border border-[#16223a]/12 p-5 sm:grid-cols-3">
              {HOURS.map((h) => (
                <div key={h.d}>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">{h.d}</p>
                  <p className={`mt-1 ${fd} text-sm font-bold text-[#16223a]`}>{h.h}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200" data-reveal>
              <iframe
                title="BajanApple Digital — Leeds & Pudsey"
                src={MAP_SRC}
                className="h-56 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div data-reveal>
            <div id="quote" className="scroll-mt-28 rounded-2xl border border-[#16223a]/12 bg-[#f4f6fb] p-6 md:p-8">
              <h3 className={`${fd} text-2xl font-extrabold tracking-tight text-[#16223a]`}>Get a free quote</h3>
              <p className="mt-2 text-sm text-slate-500">Tell us what you need and we&apos;ll come straight back to you.</p>
              <div className="mt-6">
                <EnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <BajanFX />
    </>
  );
}
