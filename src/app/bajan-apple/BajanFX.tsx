"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function BajanFX() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (reduce) {
        gsap.set("[data-reveal], .hero-line-inner, .hero-fade", { opacity: 1, y: 0, clearProps: "transform" });
        document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
          el.textContent = (el.dataset.count || "") + (el.dataset.suffix || "");
        });
        return;
      }

      // hero kinetic heading
      gsap.to(".hero-line-inner", { y: 0, duration: 1, stagger: 0.09, ease: "power4.out", delay: 0.1 });
      gsap.to(".hero-fade", { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out", delay: 0.35 });

      // scroll reveals
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((node) => {
        gsap.from(node, { opacity: 0, y: 32, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: node, start: "top 88%", once: true } });
      });
      gsap.utils.toArray<HTMLElement>("[data-stagger] > *").forEach((node, i) => {
        gsap.from(node, { opacity: 0, y: 34, duration: 0.6, delay: (i % 3) * 0.08, ease: "power3.out", scrollTrigger: { trigger: node, start: "top 90%", once: true } });
      });

      // parallax
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((img) => {
        gsap.to(img, { yPercent: 10, ease: "none", scrollTrigger: { trigger: img.parentElement, start: "top bottom", end: "bottom top", scrub: true } });
      });

      // count-up
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const target = parseFloat(el.dataset.count || "0");
        const suffix = el.dataset.suffix || "";
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target, duration: 1.6, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
          onUpdate: () => { el.textContent = Math.round(obj.v).toString() + suffix; },
        });
      });

      // infinite marquee (track holds the items twice → loop at -50%)
      const track = document.querySelector<HTMLElement>("[data-marquee-track]");
      if (track) {
        gsap.to(track, { xPercent: -50, duration: 24, ease: "none", repeat: -1 });
      }
    });

    return () => ctx.revert();
  }, []);

  return null;
}
