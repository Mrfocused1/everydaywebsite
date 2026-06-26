"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// GSAP animation layer for the Bobs Ntaba microsite. Driven by data-attributes
// so the markup stays clean. Reduced-motion safe; cleans up via ctx.revert().
// No ScrollTrigger pin:true (it crashes App Router soft-nav).
export function BobsFX() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (reduce) {
        gsap.set("[data-bn-reveal], .bn-hero-line, .bn-fade", { opacity: 1, y: 0, yPercent: 0, clearProps: "transform" });
        return;
      }

      // Hero kinetic heading: lines start at inline translateY(110%) (GSAP parses
      // this into a px `y`), inside an overflow-hidden mask; slide up to y:0.
      gsap.to(".bn-hero-line", { y: 0, duration: 1, stagger: 0.09, ease: "power4.out", delay: 0.15 });
      gsap.to(".bn-fade", { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out", delay: 0.4 });

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

      // Subtle parallax on flagged images (scaled up so no edge gap appears).
      gsap.utils.toArray<HTMLElement>("[data-bn-parallax]").forEach((img) => {
        gsap.to(img, {
          yPercent: 6,
          ease: "none",
          scrollTrigger: { trigger: img.parentElement, start: "top bottom", end: "bottom top", scrub: true },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
