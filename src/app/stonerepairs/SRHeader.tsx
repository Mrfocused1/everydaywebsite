"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV, PHONE_DISPLAY, PHONE_TEL, BIZ, fd } from "./brand";

function Wordmark() {
  return (
    <span className="leading-none">
      <span className={`block ${fd} text-xl font-semibold tracking-[-0.01em] text-[#15130f]`}>{BIZ}</span>
      <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.26em] text-[#3f5d5a]">Restoration</span>
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
    <header className="sticky top-0 z-40 border-b border-[#15130f]/10 bg-[#ffffff]/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 md:px-8">
        <Link href="/stonerepairs" aria-label={BIZ} onClick={() => setOpen(false)}><Wordmark /></Link>

        <nav className="hidden items-center gap-8 text-[13px] font-semibold uppercase tracking-[0.12em] lg:flex">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className={`transition-colors ${isActive(n.href) ? "text-[#3f5d5a]" : "text-[#15130f]/55 hover:text-[#3f5d5a]"}`}>
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={PHONE_TEL} className="hidden text-sm font-semibold text-[#15130f] sm:inline">{PHONE_DISPLAY}</a>
          <Link href="/stonerepairs/contact" className="hidden rounded-full bg-[#15130f] px-5 py-2.5 text-sm font-semibold text-[#ffffff] transition-colors hover:bg-[#3f5d5a] sm:inline-flex">
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
        <div className="border-t border-[#15130f]/10 bg-[#ffffff] lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-2">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className={`border-b border-[#15130f]/10 py-4 ${fd} text-2xl font-semibold tracking-tight text-[#15130f]`}>
                {n.label}
              </Link>
            ))}
            <Link href="/stonerepairs/contact" onClick={() => setOpen(false)} className="mt-4 mb-2 rounded-full bg-[#15130f] px-5 py-3 text-center text-sm font-semibold text-[#ffffff]">
              Get a quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
