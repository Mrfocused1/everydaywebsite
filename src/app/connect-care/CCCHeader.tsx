"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV, PHONE_DISPLAY, PHONE_TEL } from "./brand";

export function CCCHeader() {
  const pathname = usePathname() || "/connect-care";
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => (href === "/connect-care" ? pathname === href : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-40 border-b border-[#2b2d33]/8 bg-[#faf7f2]/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <Link href="/connect-care" aria-label="Connect Care Consultancy" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/marketing/connect-care-logo.png" alt="Connect Care Consultancy" className="h-9 w-auto md:h-11" />
        </Link>

        <nav className="hidden items-center gap-9 text-sm font-medium lg:flex">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className={`relative py-1 transition-colors ${isActive(n.href) ? "text-[#2b2d33]" : "text-[#6b6f76] hover:text-[#2b2d33]"}`}>
              {n.label}
              {isActive(n.href) && <span className="absolute -bottom-0.5 left-0 h-0.5 w-full rounded-full bg-gradient-to-r from-[#e0559a] via-[#ef9a3d] to-[#2f8fce]" />}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={PHONE_TEL} className="hidden text-sm font-semibold text-[#2a7fc4] sm:inline">{PHONE_DISPLAY}</a>
          <Link href="/connect-care/contact" className="hidden rounded-full bg-[#2a7fc4] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#21649d] sm:inline-flex">
            Book a consultation
          </Link>
          <button type="button" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((v) => !v)} className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden">
            <span className={`h-0.5 w-6 rounded-full bg-[#2b2d33] transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 rounded-full bg-[#2b2d33] transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 rounded-full bg-[#2b2d33] transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[#2b2d33]/8 bg-[#faf7f2] lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-2">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className={`border-b border-[#2b2d33]/8 py-3.5 text-lg font-medium ${isActive(n.href) ? "text-[#2a7fc4]" : "text-[#2b2d33]"}`}>
                {n.label}
              </Link>
            ))}
            <Link href="/connect-care/contact" onClick={() => setOpen(false)} className="mt-3 mb-2 rounded-full bg-[#2a7fc4] px-5 py-3 text-center text-sm font-semibold text-white">
              Book a consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
