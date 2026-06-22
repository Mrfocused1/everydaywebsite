"use client";

import { useEffect, useState } from "react";
import { Wordmark } from "./Wordmark";
import { HERO } from "@/lib/content";

// y-offset (px from top) sampled to decide what sits behind the bar.
const NAV_LINE = 70;

/**
 * Minimal landing-page top bar — brand wordmark + a single CTA. No menu.
 * The colour flips between cream (over dark sections) and ink (over light
 * content) by sampling which section sits behind the bar; dark sections are
 * tagged data-nav-theme="dark".
 */
export function TopBar() {
  const [onDark, setOnDark] = useState(true);

  useEffect(() => {
    let raf = 0;
    const sample = () => {
      raf = 0;
      const darks = document.querySelectorAll('[data-nav-theme="dark"]');
      let dark = false;
      darks.forEach((s) => {
        const r = s.getBoundingClientRect();
        if (r.top <= NAV_LINE && r.bottom >= NAV_LINE) dark = true;
      });
      setOnDark(dark);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(sample);
    };
    sample();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const fg = onDark ? "var(--ua-bg)" : "var(--ua-ink)";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav aria-label="Primary" className="flex items-center justify-between px-5 py-5 md:px-10">
        <a href="#top" aria-label={`${"Everyday Web.Site"} — home`} className="ua-jiggle-hover shrink-0">
          <Wordmark color={fg} className="ua-jiggle-target h-9 w-auto md:h-11" />
        </a>

        <a
          href={HERO.ctaHref}
          className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full border-2 px-5 py-2 text-sm font-bold transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
          style={
            {
              borderColor: fg,
              fontFamily: "var(--font-epilogue)",
              "--lf": fg,
              "--la": onDark ? "var(--ua-ink)" : "var(--ua-bg)",
            } as React.CSSProperties
          }
        >
          <span
            aria-hidden
            className="absolute inset-0 origin-left scale-x-0 bg-[color:var(--lf)] transition-transform duration-300 ease-[cubic-bezier(0.7,0,0.2,1)] group-hover:scale-x-100"
          />
          <span className="relative z-10 text-[color:var(--lf)] transition-colors duration-200 group-hover:text-[color:var(--la)]">
            start your site
          </span>
          <span className="relative z-10 text-[color:var(--lf)] transition-[transform,color] duration-200 group-hover:translate-x-1 group-hover:text-[color:var(--la)]">
            →
          </span>
        </a>
      </nav>
    </header>
  );
}
