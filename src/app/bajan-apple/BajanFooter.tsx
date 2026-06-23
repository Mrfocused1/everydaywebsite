import Link from "next/link";
import { NAV, TRUST, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_DISPLAY, WHATSAPP_LINK, EMAIL, LOCATIONS, HOURS } from "./brand";

export function BajanFooter() {
  return (
    <footer className="bg-[#0d1530] py-14 text-white/65">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1.3fr]">
          <div>
            <span className="inline-block rounded-xl bg-white px-3 py-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/marketing/bajan-apple-logo.png" alt="BajanApple Digital" className="h-9 w-auto" />
            </span>
            <p className="mt-5 max-w-sm text-sm font-light text-white/50">
              Professional, high-quality B2B same-day digital print in {LOCATIONS}. Most orders ready in 2–3 hours, with
              60-minute express available.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[11px] font-semibold uppercase tracking-wider text-white/40">
              {TRUST.map((t) => (
                <span key={t} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#ca2d25]" aria-hidden /> {t}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Explore</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-white/65 transition-colors hover:text-[#5e9be8]">{n.label}</Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Opening hours</p>
            <ul className="mt-3 space-y-1 text-sm text-white/55">
              {HOURS.map((h) => (
                <li key={h.d} className="flex justify-between gap-4"><span>{h.d}</span><span className="text-white/75">{h.h}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Get in touch</p>
            <a href={PHONE_TEL} className="mt-4 block text-lg font-bold text-white">{PHONE_DISPLAY}</a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="mt-1 block text-sm text-white/70 hover:text-white">WhatsApp {WHATSAPP_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`} className="mt-2 block break-all text-sm hover:text-white">{EMAIL}</a>
            <p className="mt-3 max-w-[16rem] text-sm font-light text-white/50">{LOCATIONS}</p>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 BajanApple Digital. All rights reserved.</p>
          <p>Designed by <a href="https://bridgewayaibootcamp.com" target="_blank" rel="noopener noreferrer" className="text-white/55 hover:text-white">bridgewayaibootcamp.com</a></p>
        </div>
      </div>
    </footer>
  );
}
