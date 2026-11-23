"use client";

import { useEffect, useRef, useState } from "react";
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
  const menuButton = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

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
    // Full-screen menu: lock page scroll and move focus into the panel.
    const root = document.documentElement;
    const prevOverflow = root.style.overflow;
    root.style.overflow = "hidden";
    closeButton.current?.focus();
    const trigger = menuButton.current;
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
      root.style.overflow = prevOverflow;
      trigger?.focus({ preventScroll: true });
    };
  }, [open]);

  const solid = scrolled || open || pathname !== "/";
  const close = () => setOpen(false);
  // Menu choreography. Open: panel slides down, contents stagger in.
  // Close (reverse): buttons drop out, links slide away bottom-up, the photo
  // shrinks back into its corner, then the panel slides up.
  const reveal = (delay: number, closeDelay = 0) => ({
    transition: open
      ? `opacity 0.5s ease ${delay}s, translate 0.6s cubic-bezier(0.2,0.8,0.2,1) ${delay}s`
      : `opacity 0.25s ease ${closeDelay}s, translate 0.3s cubic-bezier(0.4,0,1,1) ${closeDelay}s`,
  });

  return (
    <>
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
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>

            <button
              ref={menuButton}
              type="button"
              aria-expanded={open}
              aria-controls="site-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((o) => !o)}
              className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-ua-navy transition-colors hover:bg-ua-navy/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ua-teal lg:hidden"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="h-6 w-6"
              >
                {open ? (
                  <path d="M6 6l12 12M18 6 6 18" />
                ) : (
                  <path d="M3.5 6.5h17M3.5 12h17M3.5 17.5h17" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </header>
      {/* Full-screen mobile menu: slides down; photo on a diagonal to the right,
          large links on the left whose dividers shorten along the diagonal. */}
      <div
        id="site-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        inert={!open}
        className={`fixed inset-0 z-[60] overflow-hidden bg-white lg:hidden ${open ? "translate-y-0" : "-translate-y-[105%]"}`}
        style={{
          transition: open
            ? "translate 0.6s cubic-bezier(0.2,0.8,0.2,1), visibility 0s"
            : "translate 0.5s cubic-bezier(0.5,0,0.75,0) 0.3s, visibility 0s linear 0.8s",
          visibility: open ? "visible" : "hidden",
        }}
      >
        {/* Photo: the diagonal "grows" out of the bottom-right corner on open.
            The image box sits right of the diagonal so her face stays in view. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 saturate-[0.87]"
          style={{
            clipPath: open
              ? "polygon(100% 18%, 100% 100%, 19% 100%)"
              : "polygon(100% 100%, 100% 100%, 100% 100%)",
            transition: open
              ? "clip-path 0.9s cubic-bezier(0.65,0,0.35,1) 0.18s"
              : "clip-path 0.45s cubic-bezier(0.65,0,0.35,1) 0.05s",
          }}
        >
          <div className="absolute bottom-0 left-[19%] right-[-12%] top-[10%]">
            <Image
              src={HERO.image.mobile}
              alt=""
              fill
              sizes="70vw"
              className={`object-cover object-[50%_42%] ${open ? "scale-100" : "scale-[1.15]"}`}
              style={{
                transition: open
                  ? "scale 1.4s cubic-bezier(0.2,0.8,0.2,1) 0.18s"
                  : "scale 0.45s ease-in 0.05s",
              }}
            />
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(110deg,#fff_8%,#f9fbff_85%)]"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 18%, 19% 100%, 0 100%)",
          }}
        />

        <div
          className={`relative z-10 flex h-16 items-center justify-between px-5 sm:h-20 sm:px-8 ${open ? "opacity-100" : "opacity-0"}`}
          style={reveal(0.2, 0.22)}
        >
          <Link
            href="/"
            onClick={close}
            aria-label="Everyday Web — home"
            className="flex items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ua-teal"
          >
            <Image
              src="/brand/everyday-web-icon-solid.png"
              alt=""
              width={256}
              height={190}
              sizes="80px"
              className="h-9 w-auto sm:h-11"
            />
            <span
              className="text-[19px] font-extrabold tracking-[-0.02em] text-ua-navy sm:text-[22px]"
              style={epilogue}
            >
              Everyday Web
            </span>
          </Link>
          <button
            ref={closeButton}
            type="button"
            aria-label="Close menu"
            onClick={close}
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-ua-navy transition-colors hover:bg-ua-navy/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ua-teal"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              className="h-7 w-7"
            >
              <path d="M5.5 5.5l13 13M18.5 5.5l-13 13" />
            </svg>
          </button>
        </div>

        <ul
          className="relative z-10 ml-8 mt-[clamp(1.5rem,7svh,4.5rem)] flex flex-col sm:ml-10"
          style={epilogue}
        >
          {NAV_LINKS.map((l, i) => (
            <li
              key={l.href}
              className={open ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"}
              style={{ width: `${64 - i * 5}%`, ...reveal(0.28 + i * 0.08, 0.04 + (NAV_LINKS.length - 1 - i) * 0.05) }}
            >
              <Link
                href={l.href}
                onClick={close}
                className={`flex items-center justify-between py-[clamp(0.75rem,2.2svh,1.2rem)] text-[clamp(1.375rem,3.1svh,1.6rem)] font-extrabold tracking-[-0.04em] text-[#10213e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ua-teal ${
                  i < NAV_LINKS.length - 1 ? "border-b border-[#dce3eb]" : ""
                }`}
              >
                {l.label}
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="m9 5 7 7-7 7" />
                </svg>
              </Link>
            </li>
          ))}
        </ul>

        <div
          className={`absolute bottom-[clamp(2rem,14svh,9rem)] left-6 z-10 grid w-[min(52%,17rem)] gap-2.5 sm:left-10 ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          style={{ ...epilogue, ...reveal(0.55, 0) }}
        >
          <Link
            href={CTA_HREF}
            onClick={close}
            className="rounded-full border border-[#0d203e] bg-[#0d203e] px-2 py-3.5 text-center text-[15px] font-bold text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ua-teal"
          >
            {HERO.ctaLabel} <span aria-hidden="true">→</span>
          </Link>
          <Link
            href={HERO.secondaryHref}
            onClick={close}
            className="rounded-full border border-[#9cacc3] bg-white/80 px-2 py-3.5 text-center text-[15px] font-bold text-[#10213e] backdrop-blur-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ua-teal"
          >
            {HERO.secondaryLabel}
          </Link>
        </div>
      </div>
    </>
  );
}
