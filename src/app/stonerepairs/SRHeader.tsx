"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV, PHONE_DISPLAY, PHONE_TEL, BIZ, fd } from "./brand";

function Wordmark() {
  return (
    <span className="flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-full border border-[#15130f]/50 text-[#15130f]" aria-hidden>
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M12 2l9 5.5v9L12 22l-9-5.5v-9L12 2z" /><path d="M12 2v20M3 7.5l9 5 9-5" /></svg>
      </span>
      <span className="leading-none">
        <span className={`block ${fd} text-lg font-semibold tracking-tight text-[#15130f]`}>{BIZ}</span>
        <span className="block text-[9px] font-semibold uppercase tracking-[0.28em] text-[#15130f]/55">Restoration</span>
      </span>
    </span>
  );
}

export function SRHeader() {
  const pathname = usePathname() || "/stonerepairs";
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => {
    const base = href.split("#")[0];
    return base === "/stonerepairs" ? pathname === base : pathname.startsWith(base);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#15130f]/10 bg-[#f3efe6]/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 md:px-8">
        <Link href="/stonerepairs" aria-label={BIZ} onClick={() => setOpen(false)}><Wordmark /></Link>

        <nav className="hidden items-center gap-9 text-sm font-medium lg:flex">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className={`relative py-1 transition-colors ${isActive(n.href) ? "text-[#15130f]" : "text-[#15130f]/60 hover:text-[#15130f]"}`}>
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={PHONE_TEL} className="hidden text-sm font-semibold text-[#15130f] sm:inline">{PHONE_DISPLAY}</a>
          <Link href="/stonerepairs/contact" className="hidden rounded-full bg-[#15130f] px-5 py-2.5 text-sm font-semibold text-[#f3efe6] transition-colors hover:bg-[#3f5d5a] sm:inline-flex">
            Get a quote
          </Link>
          <button type="button" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((v) => !v)} className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden">
            <span className={`h-0.5 w-6 bg-[#15130f] transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-[#15130f] transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-[#15130f] transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[#15130f]/10 bg-[#f3efe6] lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-2">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="border-b border-[#15130f]/10 py-3.5 text-lg font-medium text-[#15130f]/80">
                {n.label}
              </Link>
            ))}
            <Link href="/stonerepairs/contact" onClick={() => setOpen(false)} className="mt-3 mb-2 rounded-full bg-[#15130f] px-5 py-3 text-center text-sm font-semibold text-[#f3efe6]">
              Get a quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
