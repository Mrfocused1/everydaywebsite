"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function OptimumFX() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (reduce) {
        gsap.set("[data-reveal], .hero-line-inner, .hero-fade", { opacity: 1, y: 0, clearProps: "transform" });
        return;
      }

      // hero kinetic heading (inner lines start translated down via inline style)
      gsap.to(".hero-line-inner", { yPercent: 0, duration: 1, stagger: 0.09, ease: "power4.out", delay: 0.1 });
      gsap.to(".hero-fade", { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out", delay: 0.35 });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((node) => {
        gsap.from(node, { opacity: 0, y: 30, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: node, start: "top 88%", once: true } });
      });

      gsap.utils.toArray<HTMLElement>("[data-stagger] > *").forEach((node, i) => {
        gsap.from(node, { opacity: 0, y: 32, duration: 0.6, delay: (i % 3) * 0.08, ease: "power3.out", scrollTrigger: { trigger: node, start: "top 90%", once: true } });
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((img) => {
        gsap.to(img, { yPercent: 9, ease: "none", scrollTrigger: { trigger: img.parentElement, start: "top bottom", end: "bottom top", scrub: true } });
      });

      document.querySelectorAll<SVGPathElement>(".draw-line").forEach((p) => {
        if (typeof p.getTotalLength !== "function") return;
        const len = p.getTotalLength();
        if (!len) return;
        gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
        const sec = p.closest("section") || p.parentElement;
        gsap.to(p, { strokeDashoffset: 0, ease: "none", scrollTrigger: { trigger: sec, start: "top 70%", end: "bottom 80%", scrub: true } });
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
