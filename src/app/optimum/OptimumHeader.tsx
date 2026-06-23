"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV, PHONE_DISPLAY, PHONE_TEL } from "./brand";

export function OptimumHeader() {
  const pathname = usePathname() || "/optimum";
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => (href === "/optimum" ? pathname === href : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 md:px-8">
        <Link href="/optimum" aria-label="Optimum Management Group" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/marketing/optimum-logo.svg" alt="Optimum Management Group" className="h-12 w-auto md:h-14" />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`relative py-1 transition-colors ${isActive(n.href) ? "text-[#2d5a83]" : "text-slate-500 hover:text-[#2d5a83]"}`}
            >
              {n.label}
              {isActive(n.href) && <span className="absolute -bottom-0.5 left-0 h-0.5 w-full bg-[#1dc6ba]" />}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={PHONE_TEL} className="hidden text-sm font-bold text-[#2d5a83] sm:inline">{PHONE_DISPLAY}</a>
          <Link href="/optimum/contact" className="hidden rounded-full bg-[#1dc6ba] px-5 py-2.5 text-sm font-semibold text-[#0e3a44] transition-colors hover:bg-[#15b3a8] sm:inline-flex">
            Request a quote
          </Link>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span className={`h-0.5 w-6 bg-[#2d5a83] transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-[#2d5a83] transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-[#2d5a83] transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-2">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className={`border-b border-slate-100 py-3.5 text-lg font-medium ${isActive(n.href) ? "text-[#2d5a83]" : "text-slate-600"}`}
              >
                {n.label}
              </Link>
            ))}
            <Link href="/optimum/contact" onClick={() => setOpen(false)} className="mt-3 mb-2 rounded-full bg-[#1dc6ba] px-5 py-3 text-center text-sm font-semibold text-[#0e3a44]">
              Request a quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
