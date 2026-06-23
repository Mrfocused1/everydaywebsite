"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV, PHONE_1_DISPLAY, PHONE_1_TEL } from "./brand";

export function BurgessHeader() {
  const pathname = usePathname() || "/burgess";
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => (href === "/burgess" ? pathname === href : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <Link href="/burgess" aria-label="Burgess Electrical" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/marketing/burgess-logo.png" alt="Burgess Electrical" className="h-12 w-auto md:h-14" />
        </Link>

        <nav className="hidden items-center gap-9 text-sm font-semibold uppercase tracking-wide lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`relative py-1 transition-colors ${isActive(n.href) ? "text-[#16225e]" : "text-slate-500 hover:text-[#16225e]"}`}
            >
              {n.label}
              {isActive(n.href) && <span className="absolute -bottom-0.5 left-0 h-0.5 w-full bg-[#ffd400]" />}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={PHONE_1_TEL} className="hidden text-sm font-bold text-[#16225e] sm:inline">{PHONE_1_DISPLAY}</a>
          <Link href="/burgess/contact#quote" className="hidden bg-[#ffd400] px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-[#16225e] transition-colors hover:bg-[#f2c200] sm:inline-flex">
            Get a quote
          </Link>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span className={`h-0.5 w-6 bg-[#16225e] transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-[#16225e] transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-[#16225e] transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-2">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className={`border-b border-slate-100 py-3.5 text-lg font-semibold uppercase tracking-wide ${isActive(n.href) ? "text-[#16225e]" : "text-slate-600"}`}
              >
                {n.label}
              </Link>
            ))}
            <Link href="/burgess/contact#quote" onClick={() => setOpen(false)} className="mt-3 mb-2 bg-[#ffd400] px-5 py-3 text-center text-sm font-semibold uppercase tracking-wide text-[#16225e]">
              Get a quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
