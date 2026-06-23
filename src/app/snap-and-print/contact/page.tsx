import type { Metadata } from "next";
import { IMG, fd, Label, PageHero, EMAIL, ADDRESS, INSTAGRAM, HANDLE_NOTE, SOCIALS } from "../brand";
import { EnquiryForm } from "../EnquiryForm";
import { SPFX } from "../SPFX";

export const metadata: Metadata = {
  title: "Book Us",
  description:
    "Book Snap & Print Events for your festival, party, wedding or brand activation. Email or DM us with your date and we'll send a quote. Instant photography and on-site prints, London & nationwide.",
};

export default function SPContact() {
  return (
    <>
      <PageHero
        eyebrow="Book us"
        title="Let's plan your event."
        intro="Tell us the date, the venue and rough numbers — we'll come straight back with a quote. London &amp; nationwide."
        img={IMG.print}
        imgAlt="Fresh prints coming off the on-site printer"
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Details */}
          <div data-reveal>
            <Label>Get in touch</Label>
            <h2 className={`mt-5 ${fd} text-4xl uppercase leading-[0.95] tracking-tight md:text-[2.8rem]`}>Book your date.</h2>
            <p className="mt-5 text-lg font-light text-slate-600">
              Send over your event details and we&apos;ll reply fast with availability and a price. The earlier the better
              for peak dates.
            </p>

            <div className="mt-9 overflow-hidden border border-[#0e0e10]/15">
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
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">Where we work</span>
                  <span className={`block ${fd} text-base uppercase tracking-tight text-[#0e0e10]`}>{ADDRESS}</span>
                </span>
              </div>
            </div>

            <p className="mt-6 text-sm font-light text-slate-500">{HANDLE_NOTE}</p>
          </div>

          {/* Form */}
          <div data-reveal>
            <div id="book" className="scroll-mt-28 border border-[#0e0e10]/15 bg-[#f5f5f4] p-6 md:p-8">
              <h3 className={`${fd} text-2xl uppercase tracking-tight text-[#0e0e10]`}>Booking enquiry</h3>
              <p className="mt-2 text-sm text-slate-500">Tell us about your event and we&apos;ll come straight back to you.</p>
              <div className="mt-6">
                <EnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SPFX />
    </>
  );
}
