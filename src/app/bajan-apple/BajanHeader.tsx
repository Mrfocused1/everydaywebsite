"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV, PHONE_DISPLAY, PHONE_TEL } from "./brand";

export function BajanHeader() {
  const pathname = usePathname() || "/bajan-apple";
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => (href === "/bajan-apple" ? pathname === href : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <Link href="/bajan-apple" aria-label="BajanApple Digital" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/marketing/bajan-apple-logo.png" alt="BajanApple Digital" className="h-10 w-auto md:h-12" />
        </Link>

        <nav className="hidden items-center gap-9 text-sm font-semibold lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`relative py-1 transition-colors ${isActive(n.href) ? "text-[#16223a]" : "text-slate-500 hover:text-[#16223a]"}`}
            >
              {n.label}
              {isActive(n.href) && <span className="absolute -bottom-0.5 left-0 h-0.5 w-full rounded-full bg-[#ca2d25]" />}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={PHONE_TEL} className="hidden text-sm font-bold text-[#306fc7] sm:inline">{PHONE_DISPLAY}</a>
          <Link href="/bajan-apple/contact#quote" className="hidden rounded-xl bg-[#ca2d25] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#a8231c] sm:inline-flex">
            Get a quote
          </Link>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span className={`h-0.5 w-6 rounded-full bg-[#16223a] transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 rounded-full bg-[#16223a] transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 rounded-full bg-[#16223a] transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
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
                className={`border-b border-slate-100 py-3.5 text-lg font-semibold ${isActive(n.href) ? "text-[#ca2d25]" : "text-slate-700"}`}
              >
                {n.label}
              </Link>
            ))}
            <Link href="/bajan-apple/contact#quote" onClick={() => setOpen(false)} className="mt-3 mb-2 rounded-xl bg-[#ca2d25] px-5 py-3 text-center text-sm font-semibold text-white">
              Get a quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
