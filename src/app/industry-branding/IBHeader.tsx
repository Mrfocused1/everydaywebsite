"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV, PHONE_DISPLAY, PHONE_TEL } from "./brand";

export function IBHeader() {
  const pathname = usePathname() || "/industry-branding";
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => (href === "/industry-branding" ? pathname === href : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0e0e10]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <Link href="/industry-branding" aria-label="Industry Branding" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/marketing/industry-branding-logo.png" alt="Industry Branding" className="h-11 w-auto md:h-12" />
        </Link>

        <nav className="hidden items-center gap-9 text-sm font-semibold uppercase tracking-wide lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`relative py-1 transition-colors ${isActive(n.href) ? "text-white" : "text-white/55 hover:text-white"}`}
            >
              {n.label}
              {isActive(n.href) && <span className="absolute -bottom-0.5 left-0 h-0.5 w-full bg-white" />}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={PHONE_TEL} className="hidden text-sm font-bold text-white sm:inline">{PHONE_DISPLAY}</a>
          <Link href="/industry-branding/contact#quote" className="hidden rounded-md bg-white px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-[#0e0e10] transition-colors hover:bg-white/85 sm:inline-flex">
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
        <div className="border-t border-white/10 bg-[#0e0e10] lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-2">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className={`border-b border-white/10 py-3.5 text-lg font-semibold uppercase tracking-wide ${isActive(n.href) ? "text-white" : "text-white/70"}`}
              >
                {n.label}
              </Link>
            ))}
            <Link href="/industry-branding/contact#quote" onClick={() => setOpen(false)} className="mt-3 mb-2 rounded-md bg-white px-5 py-3 text-center text-sm font-bold uppercase tracking-wide text-[#0e0e10]">
              Get a quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
