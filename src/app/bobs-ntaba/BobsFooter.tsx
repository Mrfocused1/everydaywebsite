import Link from "next/link";
import { Eyebrow, NAV, SCRIPT, SITE } from "./brand";

export function BobsFooter() {
  return (
    <footer className="border-t border-white/10 bg-black pb-24 md:pb-12">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 pt-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-baseline gap-2 leading-none">
            <span className={`${SCRIPT} text-3xl text-[#c99a3b]`}>Bobs</span>
            <span className="[font-family:var(--font-anton)] text-2xl uppercase text-[#f3efe6]">Ntaba</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#a39c8e]">
            Bold flavour, rooted culture. Slow-grilled goat meat made fresh to order. {SITE.area}.
          </p>
        </div>

        <div>
          <div className="mb-4">
            <Eyebrow>Explore</Eyebrow>
          </div>
          <ul className="space-y-2.5">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-[#f3efe6]/85 transition-colors hover:text-[#c99a3b]">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="mb-4">
            <Eyebrow>Order &amp; Follow</Eyebrow>
          </div>
          <ul className="space-y-2.5 text-[#f3efe6]/85">
            <li>
              <a href={`tel:${SITE.phone}`} className="transition-colors hover:text-[#c99a3b]">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-[#c99a3b]">
                {SITE.email}
              </a>
            </li>
            <li>
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#c99a3b]">
                Instagram {SITE.instagramHandle}
              </a>
            </li>
            <li className="pt-1 text-[#a39c8e]">{SITE.hours}</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-[1200px] flex-col justify-between gap-3 border-t border-white/10 px-5 pt-6 text-xs text-[#a39c8e] sm:flex-row">
        <p>© {new Date().getFullYear()} Bobs Ntaba. All rights reserved.</p>
        <p>Home made to order · Birmingham, UK</p>
      </div>
    </footer>
  );
}
