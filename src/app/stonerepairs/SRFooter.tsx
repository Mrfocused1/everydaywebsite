import Link from "next/link";
import { NAV, PHONE_DISPLAY, PHONE_TEL, EMAIL, EMAIL_HREF, BIZ, TAGLINE, fd } from "./brand";

export function SRFooter() {
  return (
    <footer className="border-t border-[#15130f]/10 bg-[#f1f0ec] text-[#15130f]">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1.3fr]">
          <div>
            <p className={`${fd} text-2xl font-semibold tracking-tight`}>{BIZ}</p>
            <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-[#15130f]">{TAGLINE}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#15130f]/45">Explore</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV.map((n) => (<li key={n.href}><Link href={n.href} className="text-[#15130f]/70 transition-colors hover:text-[#15130f]">{n.label}</Link></li>))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#15130f]/45">Get in touch</p>
            <a href={PHONE_TEL} className={`mt-4 block ${fd} text-xl font-semibold`}>{PHONE_DISPLAY}</a>
            <a href={EMAIL_HREF} className="mt-2 block text-sm text-[#15130f]/70 transition-colors hover:text-[#15130f]">{EMAIL}</a>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-[#15130f]/10 pt-6 text-xs text-[#15130f]/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {BIZ}. All rights reserved.</p>
          <p>Designed by <a href="https://everydayweb.site" target="_blank" rel="noopener noreferrer" className="text-[#15130f]/65 hover:text-[#15130f]">everydayweb.site</a></p>
        </div>
      </div>
    </footer>
  );
}
