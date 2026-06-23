"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/** GSAP engine for Snap and Print: hero entrance, scroll reveals, staggers,
 *  image clip-reveals, count-ups and magnetic buttons. Reduced-motion safe with
 *  a 3s force-reveal failsafe so nothing can be left stuck hidden. */
export function SPFX() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const cleanups: Array<() => void> = [];

    const ctx = gsap.context(() => {
      const all = "[data-reveal], [data-clip], [data-stagger] > *, .hero-content > *";
      if (reduce) {
        gsap.set(all, { opacity: 1, y: 0, clearProps: "transform,clipPath" });
        document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
          el.textContent = (el.dataset.count || "") + (el.dataset.suffix || "");
        });
        return;
      }

      // Reveal targets are pre-hidden in CSS (so an image is never shown for a
      // frame before it animates). We animate TO the visible state, never `from`.

      // Hero entrance on load
      gsap.to(".hero-content > *", { opacity: 1, y: 0, duration: 0.9, stagger: 0.1, ease: "power3.out", delay: 0.12 });

      // Scroll reveals
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((node) => {
        gsap.to(node, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: node, start: "top 88%", once: true } });
      });

      // Staggered groups
      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((grp) => {
        gsap.to(grp.children, { opacity: 1, y: 0, duration: 0.7, stagger: 0.09, ease: "power3.out", scrollTrigger: { trigger: grp, start: "top 85%", once: true } });
      });

      // Image clip-reveals
      gsap.utils.toArray<HTMLElement>("[data-clip]").forEach((node) => {
        gsap.fromTo(node, { clipPath: "inset(0% 0% 100% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: node, start: "top 85%", once: true } });
      });

      // Count-ups
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const target = parseFloat(el.dataset.count || "0");
        const suffix = el.dataset.suffix || "";
        const obj = { v: 0 };
        gsap.to(obj, { v: target, duration: 1.5, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 90%", once: true }, onUpdate: () => { el.textContent = Math.round(obj.v).toString() + suffix; } });
      });

      // Magnetic buttons (desktop)
      if (finePointer) {
        gsap.utils.toArray<HTMLElement>("[data-magnetic]").forEach((el) => {
          const xTo = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3" });
          const yTo = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3" });
          const move = (e: MouseEvent) => { const r = el.getBoundingClientRect(); xTo((e.clientX - (r.left + r.width / 2)) * 0.25); yTo((e.clientY - (r.top + r.height / 2)) * 0.35); };
          const leave = () => { xTo(0); yTo(0); };
          el.addEventListener("mousemove", move); el.addEventListener("mouseleave", leave);
          cleanups.push(() => { el.removeEventListener("mousemove", move); el.removeEventListener("mouseleave", leave); });
        });
      }
    });

    const failsafe = window.setTimeout(() => {
      gsap.set("[data-reveal], [data-clip], [data-stagger] > *, .hero-content > *", { opacity: 1, y: 0, clearProps: "transform,clipPath" });
    }, 3000);

    return () => { window.clearTimeout(failsafe); cleanups.forEach((fn) => fn()); ctx.revert(); };
  }, []);

  return null;
}
