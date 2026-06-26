import Link from "next/link";
import { NAV, ACCREDS, PHONE_1_DISPLAY, PHONE_1_TEL, PHONE_2_DISPLAY, PHONE_2_TEL, EMAIL, FACEBOOK, AREA, logoFont } from "./brand";

export function PPFooter() {
  return (
    <footer className="bg-[#0e1c2b] py-14 text-white/65">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1.3fr]">
          <div>
            <div className="flex flex-col leading-none">
              <span className={`${logoFont} text-3xl uppercase tracking-tight`}>
                <span className="text-white">Premier</span>
                <span className="text-[#9ec9ee]">Plastering</span>
              </span>
              <span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.34em] text-[#9ec9ee]">South Lakes</span>
            </div>
            <p className="mt-5 max-w-sm text-sm font-light text-white/50">
              For all your plastering solutions across {AREA}. Plastering, rendering, damp proofing, Venetian polished
              plaster and micro cement — domestic and commercial, finished to a high standard.
            </p>
            <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/55 transition-colors hover:text-[#9ec9ee]">
              <span className="h-1.5 w-1.5 bg-[#ff5e3c]" aria-hidden /> Find us on Facebook
            </a>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[11px] font-semibold uppercase tracking-wider text-white/40">
              {ACCREDS.map((a) => (
                <span key={a} className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-[#ff5e3c]" aria-hidden /> {a}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Explore</p>
            <ul className="mt-4 space-y-2.5 text-sm uppercase tracking-wide">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-white/65 transition-colors hover:text-[#ff5e3c]">{n.label}</Link>
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
          <p>© 2026 Premier Plastering South Lakes. All rights reserved.</p>
          <p>Designed by <a href="https://bridgewayaibootcamp.com" target="_blank" rel="noopener noreferrer" className="text-white/55 hover:text-white">bridgewayaibootcamp.com</a></p>
        </div>
      </div>
    </footer>
  );
}
