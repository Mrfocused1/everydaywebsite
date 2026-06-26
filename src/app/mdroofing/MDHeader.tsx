"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV, PHONE_1_DISPLAY, PHONE_1_TEL } from "./brand";

export function MDHeader() {
  const pathname = usePathname() || "/mdroofing";
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => (href === "/mdroofing" ? pathname === href : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0d1c13]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <Link href="/mdroofing" aria-label="M&D Roofing & Landscaping" onClick={() => setOpen(false)} className="flex items-baseline gap-2">
          <span className="text-xl font-bold uppercase tracking-tight text-white md:text-2xl">M&amp;D</span>
          <span className="hidden text-[13px] font-semibold uppercase tracking-[0.16em] text-[#86c98e] sm:inline">Roofing &amp; Landscaping</span>
        </Link>

        <nav className="hidden items-center gap-9 text-sm font-semibold uppercase tracking-wide lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`relative py-1 transition-colors ${isActive(n.href) ? "text-white" : "text-white/60 hover:text-white"}`}
            >
              {n.label}
              {isActive(n.href) && <span className="absolute -bottom-0.5 left-0 h-0.5 w-full bg-[#3f8f47]" />}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={PHONE_1_TEL} className="hidden text-sm font-bold text-white sm:inline">{PHONE_1_DISPLAY}</a>
          <Link href="/mdroofing/contact#quote" className="hidden bg-[#3f8f47] px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#327a3a] sm:inline-flex">
            Get a quote
          </Link>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span className={`h-0.5 w-6 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#0d1c13] lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-2">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className={`border-b border-white/10 py-3.5 text-lg font-semibold uppercase tracking-wide ${isActive(n.href) ? "text-[#86c98e]" : "text-white/80"}`}
              >
                {n.label}
              </Link>
            ))}
            <Link href="/mdroofing/contact#quote" onClick={() => setOpen(false)} className="mt-3 mb-2 bg-[#3f8f47] px-5 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white">
              Get a quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
