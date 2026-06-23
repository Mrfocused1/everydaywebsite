import Link from "next/link";
import { NAV, PHONE_TEL, PHONE_DISPLAY, EMAIL, ADDRESS } from "./brand";

export function OptimumFooter() {
  return (
    <footer className="bg-[#0f1c29] py-14 text-white/70">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1.2fr]">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/marketing/optimum-logo.svg" alt="Optimum Management Group" className="h-14 w-auto bg-white/95 px-2 py-1" />
            <p className="mt-5 max-w-sm text-sm font-light text-white/55">
              London-based design &amp; build, maintenance and management contractor for commercial and residential
              clients. One team, managed end to end.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Explore</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-white/70 transition-colors hover:text-[#1dc6ba]">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Get in touch</p>
            <a href={PHONE_TEL} className="mt-4 block text-lg font-semibold text-white">{PHONE_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`} className="mt-1 block break-all text-sm hover:text-white">{EMAIL}</a>
            <p className="mt-3 max-w-[15rem] text-sm font-light text-white/55">{ADDRESS}</p>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Optimum Management Group. All rights reserved.</p>
          <p>Designed by <a href="https://bridgewayaibootcamp.com" target="_blank" rel="noopener noreferrer" className="text-white/55 hover:text-white">bridgewayaibootcamp.com</a></p>
        </div>
      </div>
    </footer>
  );
}
