"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// GSAP animation layer for the Bobs Ntaba microsite. Driven by data-attributes.
// Uses gsap.from so content is VISIBLE by default — if GSAP never runs (error,
// no-JS) nothing is hidden. Reduced-motion: skip animation entirely.
// No ScrollTrigger pin:true (it crashes App Router soft-nav).
export function BobsFX() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      // Hero kinetic heading: lines slide up from inside an overflow-hidden mask.
      gsap.from(".bn-hero-line", { yPercent: 110, duration: 1, stagger: 0.09, ease: "power4.out", delay: 0.15 });
      gsap.from(".bn-fade", { opacity: 0, y: 16, duration: 0.8, stagger: 0.1, ease: "power3.out", delay: 0.4 });

      // Scroll reveals.
      gsap.utils.toArray<HTMLElement>("[data-bn-reveal]").forEach((node) => {
        gsap.from(node, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: node, start: "top 88%", once: true },
        });
      });

      // Staggered groups (e.g. menu cards).
      gsap.utils.toArray<HTMLElement>("[data-bn-stagger]").forEach((group) => {
        gsap.from(Array.from(group.children), {
          opacity: 0,
          y: 32,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: group, start: "top 85%", once: true },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
