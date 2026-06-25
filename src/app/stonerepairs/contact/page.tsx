/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import {
  PageHero, PEXELS, fd, Label, OWNER,
  PHONE_DISPLAY, PHONE_TEL, EMAIL, EMAIL_HREF, WHATSAPP, COVERAGE, MATERIALS,
} from "../brand";
import { EnquiryForm } from "../EnquiryForm";
import { SRFX } from "../SRFX";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact for natural stone repair and restoration. Send photos of the damage by email or WhatsApp for a fast, free quote. Call 07802 275065.",
};

const METHODS = [
  { k: "Call", v: PHONE_DISPLAY, href: PHONE_TEL, icon: "M6.5 3h-3A1.5 1.5 0 0 0 2 4.6C2 13 11 22 19.4 22a1.5 1.5 0 0 0 1.6-1.5v-3a1.5 1.5 0 0 0-1.5-1.5c-1 0-2-.2-2.9-.5a1.5 1.5 0 0 0-1.5.4l-1.3 1.3a14 14 0 0 1-6-6l1.3-1.3a1.5 1.5 0 0 0 .4-1.5c-.3-.9-.5-1.9-.5-2.9A1.5 1.5 0 0 0 6.5 3Z" },
  { k: "Email", v: EMAIL, href: EMAIL_HREF, icon: "M2.5 5h19v14h-19zM3 6.5 12 13l9-6.5" },
  { k: "WhatsApp", v: "Message us", href: WHATSAPP, icon: "M12 2a10 10 0 0 0-8.6 15l-1.2 4.4 4.5-1.2A10 10 0 1 0 12 2Z" },
];

export default function StoneContact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Send a photo,"
        accent="get a quote."
        intro="For the quickest response, send a couple of photos of the damage by email or WhatsApp and I'll come straight back to you."
        img={PEXELS.contact}
      />

      {/* ── About Charles (moved from home, no image) ── */}
      <section className="border-t-2 border-[#15130f] bg-[#ffffff]">
        <div className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-24" data-reveal>
          <Label>About</Label>
          <p className={`mt-7 ${fd} text-[1.8rem] font-semibold leading-[1.18] tracking-[-0.01em] text-[#15130f] sm:text-4xl md:text-[2.6rem]`}>
            I&apos;m {OWNER}. Every photo on this site is from <span className="italic text-[#3f5d5a]">my own repairs</span>. No stock,
            no staging — just <span className="italic text-[#3f5d5a]">30 years</span> of putting natural stone right.
          </p>
        </div>
      </section>

      <section className="border-t-2 border-[#15130f] bg-[#ffffff]">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* details */}
          <div data-reveal>
            <Label>Get in touch</Label>
            <h2 className={`mt-5 ${fd} text-3xl font-medium leading-tight tracking-tight text-[#15130f] md:text-4xl`}>Let&apos;s sort your stone.</h2>
            <p className="mt-5 text-lg font-light leading-relaxed text-[#15130f]/65">
              Tell me what&apos;s happened and send a photo or two — it&apos;s the fastest way to an accurate price. {COVERAGE}.
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl border border-[#15130f]/12 bg-white">
              {METHODS.map((m, i) => (
                <a key={m.k} href={m.href} target={m.k === "Email" || m.k === "Call" ? undefined : "_blank"} rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-5 transition-colors hover:bg-[#f6f5f2] ${i < METHODS.length - 1 ? "border-b border-[#15130f]/10" : ""}`}>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#15130f] text-[#ffffff]" aria-hidden>
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={m.icon} /></svg>
                  </span>
                  <span>
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#15130f]/45">{m.k}</span>
                    <span className={`block ${fd} text-lg font-semibold text-[#15130f]`}>{m.v}</span>
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-[#15130f]/12 bg-white p-5">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#15130f]/45">What I restore</p>
              <p className="mt-2 text-sm font-light text-[#15130f]/70">{MATERIALS.join(" · ")} — floors, fireplaces, worktops, stairs, statues and more.</p>
            </div>
          </div>

          {/* form */}
          <div data-reveal>
            <div id="enquire" className="scroll-mt-28 rounded-2xl border border-[#15130f]/12 bg-white p-6 shadow-[0_20px_60px_-30px_rgba(21,19,15,0.4)] md:p-8">
              <h3 className={`${fd} text-2xl font-semibold text-[#15130f]`}>Request a quote</h3>
              <p className="mt-2 text-sm text-[#15130f]/55">Fill this in and your email opens ready to send — just add your photos.</p>
              <div className="mt-6"><EnquiryForm /></div>
            </div>
          </div>
        </div>
      </section>

      <SRFX />
    </>
  );
}
