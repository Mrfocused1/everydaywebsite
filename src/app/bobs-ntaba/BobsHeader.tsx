"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { COND, CUT_TL, NAV, SCRIPT, SITE, BASE } from "./brand";

export function BobsHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    const raf = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Lock background scroll while the full-screen menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-white/10 bg-[#0c0b0a]/95 backdrop-blur" : "bg-[#0c0b0a]/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 md:h-20">
        <Link href={BASE} className="flex items-baseline gap-2 leading-none">
          <span className={`${SCRIPT} pr-0.5 text-2xl text-[#c99a3b] md:text-3xl`}>Bobs</span>
          <span className="[font-family:var(--font-anton)] text-xl uppercase text-[#f3efe6] md:text-2xl">Ntaba</span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`${COND} text-sm tracking-widest transition-colors hover:text-[#c99a3b] ${
                pathname === n.href ? "text-[#c99a3b]" : "text-[#f3efe6]/90"
              }`}
            >
              {n.label}
            </Link>
          ))}
          <a
            href={`tel:${SITE.phone}`}
            className={`${COND} bg-[#c99a3b] px-5 py-2.5 text-sm tracking-widest text-[#0c0b0a] transition-colors hover:bg-[#e2bb6b]`}
            style={{ clipPath: CUT_TL }}
          >
            Order Now
          </a>
        </nav>

        <button
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="-mr-2 flex flex-col gap-1.5 p-2 md:hidden"
        >
          <span className="block h-0.5 w-7 bg-[#f3efe6]" />
          <span className="block h-0.5 w-7 bg-[#f3efe6]" />
          <span className="block h-0.5 w-5 bg-[#c99a3b]" />
        </button>
      </div>
      </header>

      {/* Full-screen mobile menu */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col bg-[#0c0b0a] transition-[opacity,transform] duration-300 ease-out md:hidden ${
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        {/* gold glow accent */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(70% 50% at 80% 10%, rgba(201,154,59,0.14), transparent 70%)" }}
        />

        <div className="relative flex h-16 items-center justify-between px-5">
          <Link href={BASE} onClick={() => setOpen(false)} className="flex items-baseline gap-2 leading-none">
            <span className={`${SCRIPT} text-2xl text-[#c99a3b]`}>Bobs</span>
            <span className="[font-family:var(--font-anton)] text-xl uppercase text-[#f3efe6]">Ntaba</span>
          </Link>
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="relative -mr-1 grid h-10 w-10 place-items-center text-[#f3efe6] transition-colors hover:text-[#c99a3b]"
          >
            <span className="absolute h-0.5 w-6 rotate-45 bg-current" />
            <span className="absolute h-0.5 w-6 -rotate-45 bg-current" />
          </button>
        </div>

        <nav className="relative flex flex-1 flex-col justify-center gap-1 px-6">
          {NAV.map((n, i) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${120 + i * 70}ms` : "0ms" }}
              className={`group flex items-center gap-4 border-b border-white/10 py-4 transition-all duration-500 ease-out ${
                open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
            >
              <span className={`${COND} w-7 text-sm tracking-widest text-[#c99a3b]/70`}>0{i + 1}</span>
              <span
                className={`[font-family:var(--font-anton)] text-3xl uppercase transition-colors group-hover:text-[#c99a3b] ${
                  pathname === n.href ? "text-[#c99a3b]" : "text-[#f3efe6]"
                }`}
              >
                {n.label}
              </span>
              <span className="ml-auto text-[#c99a3b] opacity-0 transition-opacity group-hover:opacity-100">→</span>
            </Link>
          ))}
        </nav>

        <div
          className="relative px-6 pb-10 transition-all duration-500 ease-out"
          style={{ transitionDelay: open ? `${120 + NAV.length * 70}ms` : "0ms" }}
        >
          <div className={open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}>
            <a
              href={`tel:${SITE.phone}`}
              onClick={() => setOpen(false)}
              className={`${COND} block bg-[#c99a3b] py-4 text-center text-lg tracking-widest text-[#0c0b0a] transition-colors hover:bg-[#e2bb6b]`}
              style={{ clipPath: CUT_TL }}
            >
              Call to Order
            </a>
            <div className="mt-5 flex flex-col gap-1.5 text-sm text-[#a39c8e]">
              <a href={`tel:${SITE.phone}`} className="hover:text-[#c99a3b]">{SITE.phoneDisplay}</a>
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#c99a3b]">
                Instagram {SITE.instagramHandle}
              </a>
              <span>{SITE.hours}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
