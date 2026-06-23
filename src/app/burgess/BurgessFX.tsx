"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function BurgessFX() {
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

      // hero kinetic heading (inner lines start at inline translateY(110%) → slide up)
      gsap.to(".hero-line-inner", { y: 0, duration: 1, stagger: 0.09, ease: "power4.out", delay: 0.1 });
      gsap.to(".hero-fade", { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out", delay: 0.35 });

      // scroll reveals
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((node) => {
        gsap.from(node, { opacity: 0, y: 32, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: node, start: "top 88%", once: true } });
      });
      gsap.utils.toArray<HTMLElement>("[data-stagger] > *").forEach((node, i) => {
        gsap.from(node, { opacity: 0, y: 34, duration: 0.6, delay: (i % 3) * 0.08, ease: "power3.out", scrollTrigger: { trigger: node, start: "top 90%", once: true } });
      });

      // parallax images
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((img) => {
        gsap.to(img, { yPercent: 10, ease: "none", scrollTrigger: { trigger: img.parentElement, start: "top bottom", end: "bottom top", scrub: true } });
      });

      // count-up stats
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const target = parseFloat(el.dataset.count || "0");
        const suffix = el.dataset.suffix || "";
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
          onUpdate: () => { el.textContent = Math.round(obj.v).toString() + suffix; },
        });
      });

      // SVG circuit line draw
      document.querySelectorAll<SVGPathElement>(".draw-line").forEach((p) => {
        if (typeof p.getTotalLength !== "function") return;
        const len = p.getTotalLength();
        if (!len) return;
        gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(p, { strokeDashoffset: 0, ease: "none", scrollTrigger: { trigger: p.closest("section") || p, start: "top 75%", end: "bottom 85%", scrub: true } });
      });
    });

    // Horizontal scroll (desktop only) — uses CSS position:sticky for the
    // "pin" (see [data-hscroll-pin]) and only SCRUBS a transform here. We avoid
    // ScrollTrigger's pin:true because it moves the section into a pin-spacer
    // div outside React's tree, which crashes soft-navigation with a removeChild
    // error. No DOM mutation here → the page unmounts cleanly.
    const mm = gsap.matchMedia();
    if (!reduce) {
      mm.add("(min-width: 768px)", () => {
        const track = document.querySelector<HTMLElement>("[data-hscroll-track]");
        const wrap = document.querySelector<HTMLElement>("[data-hscroll]");
        if (!track || !wrap) return;
        const distance = () => Math.max(0, track.scrollWidth - window.innerWidth + 80);
        const setHeight = () => { wrap.style.height = window.innerHeight + distance() + "px"; };
        setHeight();
        const tween = gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: "top top",
            end: () => "+=" + distance(),
            scrub: 1,
            invalidateOnRefresh: true,
            onRefresh: setHeight,
          },
        });
        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
          gsap.set(track, { clearProps: "transform" });
          wrap.style.height = "";
        };
      });
    }

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  return null;
}
