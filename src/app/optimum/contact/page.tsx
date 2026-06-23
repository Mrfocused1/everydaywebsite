import type { Metadata } from "next";
import { IMG, Label, PageHero, PHONE_DISPLAY, PHONE_TEL, EMAIL, ADDRESS } from "../brand";
import { EnquiryForm } from "../EnquiryForm";
import { OptimumFX } from "../OptimumFX";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Optimum Management Group — call 07539 478387 or send an enquiry for design & build, maintenance and management projects across London.",
};

const MAP_SRC =
  "https://www.google.com/maps?q=International+House+64+Nile+Street+London+N1+7SR&output=embed";

export default function OptimumContact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk."
        intro="Tell us about your project and we'll come back with a clear scope and a transparent quote. No obligation, no jargon."
        img={IMG.management}
        imgAlt="Optimum Management Group office"
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Details */}
          <div data-reveal>
            <Label>Get in touch</Label>
            <h2 className="mt-5 text-3xl font-light leading-[1.08] tracking-tight md:text-[2.6rem]">Speak to the team directly.</h2>
            <p className="mt-5 text-lg font-light text-slate-600">
              Prefer to talk it through? Give us a call. Otherwise, fill in the form and we&apos;ll reply by email.
            </p>

            <div className="mt-10 space-y-px overflow-hidden border border-[#2d5a83]/15 bg-[#2d5a83]/15">
              <a href={PHONE_TEL} className="flex items-center gap-4 bg-white p-5 transition-colors hover:bg-[#f1f6f8]">
                <span className="grid h-11 w-11 shrink-0 place-items-center bg-[#1dc6ba]/15 text-[#159a90]" aria-hidden>☎</span>
                <span>
                  <span className="block text-xs font-medium uppercase tracking-wide text-slate-400">Call us</span>
                  <span className="block text-lg font-semibold text-[#2d5a83]">{PHONE_DISPLAY}</span>
                </span>
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 bg-white p-5 transition-colors hover:bg-[#f1f6f8]">
                <span className="grid h-11 w-11 shrink-0 place-items-center bg-[#1dc6ba]/15 text-[#159a90]" aria-hidden>✉</span>
                <span>
                  <span className="block text-xs font-medium uppercase tracking-wide text-slate-400">Email us</span>
                  <span className="block break-all text-lg font-semibold text-[#2d5a83]">{EMAIL}</span>
                </span>
              </a>
              <div className="flex items-center gap-4 bg-white p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center bg-[#1dc6ba]/15 text-[#159a90]" aria-hidden>⌖</span>
                <span>
                  <span className="block text-xs font-medium uppercase tracking-wide text-slate-400">Visit us</span>
                  <span className="block text-base font-medium text-slate-700">{ADDRESS}</span>
                </span>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200" data-reveal>
              <iframe
                title="Optimum Management Group location"
                src={MAP_SRC}
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div className="relative" data-reveal>
            <div className="rounded-2xl border border-[#2d5a83]/15 bg-[#f1f6f8] p-6 md:p-8">
              <h3 className="text-2xl font-light tracking-tight text-[#2d5a83]">Request a quote</h3>
              <p className="mt-2 text-sm text-slate-500">We aim to reply within one working day.</p>
              <div className="mt-6">
                <EnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <OptimumFX />
    </>
  );
}
