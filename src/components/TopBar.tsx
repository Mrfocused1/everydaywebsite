"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HERO } from "@/lib/content";

const epilogue = { fontFamily: "var(--font-epilogue)" };

// Only real destinations — there are no Services/About pages.
const NAV_LINKS = [
  { label: "Work", href: "/work" },
  { label: "How it works", href: "/#process" },
  { label: "Contact", href: "/#start" },
];

// The CTA's section (#start) lives on the homepage and /work; go via "/" so it
// resolves from every page.
const CTA_HREF = `/${HERO.ctaHref}`;

/**
 * Fixed site header. Transparent over the light homepage hero, then a frosted
 * white bar once the page scrolls (or on any other page, whose tops are dark),
 * so the navy type stays readable over every section.
 */
export function TopBar() {
  const pathname = usePathname() || "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 8);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // Menu: close on Escape, and if the viewport grows past the mobile layout.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const mq = window.matchMedia("(min-width: 1024px)");
    const onMq = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open]);

  const solid = scrolled || open || pathname !== "/";
  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        solid
          ? "bg-white/92 shadow-[0_1px_0_rgba(11,29,58,0.08),0_10px_30px_-18px_rgba(11,29,58,0.35)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-[1320px] items-center justify-between gap-6 px-5 sm:h-20 sm:px-8 lg:h-[88px] lg:px-12"
      >
        <Link
          href="/"
          onClick={close}
          aria-label="Everyday Web — home"
          className="ua-jiggle-hover flex shrink-0 items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ua-teal"
        >
          <Image
            src="/brand/everyday-web-icon-solid.png"
            alt=""
            width={256}
            height={190}
            preload
            sizes="80px"
            className="ua-jiggle-target h-9 w-auto sm:h-11 lg:h-14"
          />
          <span
            className="text-[19px] font-extrabold tracking-[-0.02em] text-ua-navy sm:text-[22px]"
            style={epilogue}
          >
            Everyday Web
          </span>
        </Link>

        <ul className="hidden items-center gap-11 lg:flex" style={epilogue}>
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="relative py-2 text-[16px] font-semibold text-ua-navy after:absolute after:inset-x-0 after:bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-ua-teal after:transition-transform after:duration-200 hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ua-teal"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href={CTA_HREF}
            className="group hidden items-center gap-2 rounded-full bg-ua-navy px-7 py-3 text-[16px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#13305c] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ua-teal active:translate-y-0 md:inline-flex"
            style={epilogue}
          >
            {HERO.ctaLabel}
            <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-ua-navy transition-colors hover:bg-ua-navy/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ua-teal lg:hidden"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-6 w-6">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M3.5 6.5h17M3.5 12h17M3.5 17.5h17" />}
            </svg>
          </button>
        </div>
      </nav>

      <div
        id="site-menu"
        hidden={!open}
        className="border-t border-ua-navy/10 bg-white lg:hidden"
      >
        <ul className="mx-auto flex w-full max-w-[1320px] flex-col px-5 pb-6 pt-2 sm:px-8" style={epilogue}>
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={close}
                className="block border-b border-ua-navy/10 py-4 text-lg font-semibold text-ua-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ua-teal"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="mt-5">
            <Link
              href={CTA_HREF}
              onClick={close}
              className="flex items-center justify-center gap-2 rounded-full bg-ua-navy px-7 py-3.5 text-[17px] font-bold text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ua-teal"
            >
              {HERO.ctaLabel} <span aria-hidden="true">→</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
