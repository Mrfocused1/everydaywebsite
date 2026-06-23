import Link from "next/link";
import { NAV, TRUST, SOCIALS, EMAIL, ADDRESS, LOCATIONS, EVENTS, fd } from "./brand";

export function SPFooter() {
  return (
    <footer className="bg-[#0e0e10] py-14 text-white/60">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1.3fr]">
          <div>
            <p className={`${fd} text-2xl uppercase tracking-tight text-white`}>Snap <span className="text-[#FF4D2E]">&amp;</span> Print <span className="text-base text-white/45">Events</span></p>
            <p className="mt-5 max-w-sm text-sm font-light text-white/45">
              Instant event photography — we snap the moment, print it on the spot, and your guests keep it. Based in {LOCATIONS}.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[11px] font-semibold uppercase tracking-wider text-white/40">
              {TRUST.map((t) => (
                <span key={t} className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-[#FF4D2E]" aria-hidden /> {t}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Explore</p>
            <ul className="mt-4 space-y-2.5 text-sm uppercase tracking-wide">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-white/60 transition-colors hover:text-white">{n.label}</Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">We cover</p>
            <ul className="mt-3 space-y-1 text-sm text-white/55">
              {EVENTS.slice(0, 4).map((e) => (<li key={e.t}>{e.t}</li>))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Get in touch</p>
            <a href={`mailto:${EMAIL}`} className="mt-4 block break-all text-lg font-bold text-white hover:text-white/80">{EMAIL}</a>
            <p className="mt-3 max-w-[16rem] text-sm font-light text-white/50">{ADDRESS}</p>
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold uppercase tracking-wider">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white">{s.label}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Snap &amp; Print Events. All rights reserved.</p>
          <p>Designed by <a href="https://bridgewayaibootcamp.com" target="_blank" rel="noopener noreferrer" className="text-white/55 hover:text-white">bridgewayaibootcamp.com</a></p>
        </div>
      </div>
    </footer>
  );
}
