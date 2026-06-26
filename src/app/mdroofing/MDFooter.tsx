import Link from "next/link";
import { NAV, ACCREDS, PHONE_1_DISPLAY, PHONE_1_TEL, PHONE_2_DISPLAY, PHONE_2_TEL, EMAIL, AREA } from "./brand";

export function MDFooter() {
  return (
    <footer className="bg-[#0d1c13] py-14 text-white/65">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1.3fr]">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold uppercase tracking-tight text-white">M&amp;D</span>
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-[#86c98e]">Roofing &amp; Landscaping</span>
            </div>
            <p className="mt-5 max-w-sm text-sm font-light text-white/50">
              Established in 1990 — one of the UK&apos;s premier paving contractors. Roofing, block paving and complete
              landscaping for homes and commercial sites, {AREA.toLowerCase()}. 5-year guarantee as standard.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[11px] font-semibold uppercase tracking-wider text-white/40">
              {ACCREDS.map((a) => (
                <span key={a} className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-[#3f8f47]" aria-hidden /> {a}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Explore</p>
            <ul className="mt-4 space-y-2.5 text-sm uppercase tracking-wide">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-white/65 transition-colors hover:text-[#3f8f47]">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Get in touch</p>
            <a href={PHONE_1_TEL} className="mt-4 block text-lg font-bold text-white">{PHONE_1_DISPLAY}</a>
            <a href={PHONE_2_TEL} className="mt-1 block text-lg font-bold text-white">{PHONE_2_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`} className="mt-2 block break-all text-sm hover:text-white">{EMAIL}</a>
            <p className="mt-3 text-sm font-light text-white/50">{AREA}</p>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 M&amp;D Roofing &amp; Landscaping. All rights reserved.</p>
          <p>Designed by <a href="https://bridgewayaibootcamp.com" target="_blank" rel="noopener noreferrer" className="text-white/55 hover:text-white">bridgewayaibootcamp.com</a></p>
        </div>
      </div>
    </footer>
  );
}
