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

  return (
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

        <button aria-label="Menu" onClick={() => setOpen((o) => !o)} className="-mr-2 flex flex-col gap-1.5 p-2 md:hidden">
          <span className={`block h-0.5 w-6 bg-[#f3efe6] transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-[#f3efe6] transition ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-[#f3efe6] transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      <div className={`overflow-hidden transition-[max-height] duration-300 md:hidden ${open ? "max-h-96" : "max-h-0"}`}>
        <nav className="mx-auto flex max-w-[1200px] flex-col gap-1 px-5 pb-6 pt-2">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className={`${COND} border-b border-white/10 py-3 text-lg tracking-widest ${
                pathname === n.href ? "text-[#c99a3b]" : "text-[#f3efe6]"
              }`}
            >
              {n.label}
            </Link>
          ))}
          <a
            href={`tel:${SITE.phone}`}
            onClick={() => setOpen(false)}
            className={`${COND} mt-4 bg-[#c99a3b] py-3.5 text-center text-lg tracking-widest text-[#0c0b0a]`}
            style={{ clipPath: CUT_TL }}
          >
            Call to Order
          </a>
        </nav>
      </div>
    </header>
  );
}
