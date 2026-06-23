"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV, fd } from "./brand";

export function SPHeader() {
  const pathname = usePathname() || "/snap-and-print";
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => (href === "/snap-and-print" ? pathname === href : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0e0e10]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 md:px-8">
        <Link href="/snap-and-print" aria-label="Snap & Print Events" onClick={() => setOpen(false)} className="flex items-baseline gap-2">
          <span className={`${fd} text-xl uppercase leading-none tracking-tight text-white md:text-2xl`}>
            Snap <span className="text-[#FF4D2E]">&amp;</span> Print
          </span>
          <span className="hidden text-[0.55rem] font-bold uppercase tracking-[0.35em] text-white/45 sm:inline">Events</span>
        </Link>

        <nav className="hidden items-center gap-9 text-sm font-semibold uppercase tracking-wide lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`relative py-1 transition-colors ${isActive(n.href) ? "text-white" : "text-white/55 hover:text-white"}`}
            >
              {n.label}
              {isActive(n.href) && <span className="absolute -bottom-0.5 left-0 h-0.5 w-full bg-[#FF4D2E]" />}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/snap-and-print/contact#book" className="hidden rounded-md bg-[#FF4D2E] px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#E63915] sm:inline-flex">
            Book Us
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
            <Link href="/snap-and-print/contact#book" onClick={() => setOpen(false)} className="mt-3 mb-2 rounded-md bg-[#FF4D2E] px-5 py-3 text-center text-sm font-bold uppercase tracking-wide text-white">
              Book Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
