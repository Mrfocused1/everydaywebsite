import Link from "next/link";
import { NAV, SOCIALS, PHONE_DISPLAY, PHONE_TEL, EMAIL, ADDRESS, COMPANY_NO, RainbowDots } from "./brand";

export function CCCFooter() {
  return (
    <footer className="border-t border-[#2b2d33]/10 bg-[#f5f1ea]">
      <span className="block h-1 w-full bg-gradient-to-r from-[#e0559a] via-[#ef9a3d] via-[#7a55a6] via-[#5fb85a] to-[#2f8fce]" aria-hidden />
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1.3fr]">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/marketing/connect-care-logo.png" alt="Connect Care Consultancy" className="h-11 w-auto" />
            <p className="mt-5 max-w-sm text-sm font-light text-[#6b6f76]">
              Care home &amp; domiciliary care consultancy helping providers achieve CQC compliance and deliver
              outstanding care, across the UK.
            </p>
            <RainbowDots className="mt-5" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a9ea5]">Explore</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV.map((n) => (
                <li key={n.href}><Link href={n.href} className="text-[#6b6f76] transition-colors hover:text-[#2a7fc4]">{n.label}</Link></li>
              ))}
            </ul>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-[#9a9ea5]">Connect</p>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {SOCIALS.map((s) => (
                <li key={s.label}><a href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-[#6b6f76] transition-colors hover:text-[#2a7fc4]">{s.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a9ea5]">Get in touch</p>
            <a href={PHONE_TEL} className="mt-4 block text-lg font-semibold text-[#2b2d33]">{PHONE_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`} className="mt-1 block break-all text-sm text-[#6b6f76] hover:text-[#2a7fc4]">{EMAIL}</a>
            <p className="mt-3 max-w-[16rem] text-sm font-light text-[#6b6f76]">{ADDRESS}</p>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-[#2b2d33]/10 pt-6 text-xs text-[#9a9ea5] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Connect Care Consultancy Ltd · Company No. {COMPANY_NO}</p>
          <p>Designed by <a href="https://bridgewayaibootcamp.com" target="_blank" rel="noopener noreferrer" className="text-[#6b6f76] hover:text-[#2b2d33]">bridgewayaibootcamp.com</a></p>
        </div>
      </div>
    </footer>
  );
}
