"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/reducedMotion";

gsap.registerPlugin(ScrollTrigger);

export type CaseStudy = {
  name: string;
  /** Brand logo (transparent PNG/SVG). */
  logo: string;
  /** Short, 1–2 sentence description of the build. */
  blurb: string;
  /** Playable demo clip (16:9). */
  video: string;
  /** Thumbnail still (16:9, matches the video so it never crops). */
  poster?: string;
  /** Live site URL for the "view website" button. */
  href: string;
  /** Optional override for the logo's height classes (default h-10 md:h-12). */
  logoClass?: string;
  /** Short category label shown as a pill. */
  tag?: string;
};

type Props = {
  study: CaseStudy;
  wide?: boolean;
  flip?: boolean;
  delay?: number;
};

export function CaseStudyCard({ study, wide = false, flip = false, delay = 0 }: Props) {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const blocks = el.querySelectorAll<HTMLElement>("[data-cs]");
    if (prefersReducedMotion()) {
      gsap.set(el, { opacity: 1, y: 0, scale: 1 });
      gsap.set(blocks, { opacity: 1, y: 0 });
      return;
    }
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          delay,
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
          onComplete: () => {
            el.style.willChange = "auto";
          },
        })
        .fromTo(
          el,
          { opacity: 0, y: 44, scale: 0.97 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "power3.out" },
        )
        .fromTo(
          blocks,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.1 },
          "-=0.4",
        );
    }, el);
    return () => ctx.revert();
  }, [delay]);

  useEffect(() => {
    const el = ref.current;
    const v = videoRef.current;
    if (!el || !v) return;
    if (prefersReducedMotion()) {
      v.controls = true;
      return;
    }
    // Start buffering the full clip once the card is near the viewport, so
    // hover playback doesn't stutter while the video is still downloading.
    const warm = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        v.preload = "auto";
        if (v.readyState < 2) v.load();
        warm.disconnect();
      },
      { rootMargin: "400px 0px" },
    );
    warm.observe(v);

    let wantPlay = false;
    let fallback: ReturnType<typeof setTimeout> | undefined;
    const start = () => {
      clearTimeout(fallback);
      v.removeEventListener("canplaythrough", start);
      if (wantPlay) v.play().catch(() => {});
    };
    const play = () => {
      wantPlay = true;
      // Only start once enough is buffered to play through without stalling
      // (with a short fallback in case the browser never fires the event).
      if (v.readyState >= 4) return start();
      v.addEventListener("canplaythrough", start, { once: true });
      clearTimeout(fallback);
      fallback = setTimeout(start, 1500);
    };
    const stop = () => {
      wantPlay = false;
      clearTimeout(fallback);
      v.removeEventListener("canplaythrough", start);
      v.pause();
      v.currentTime = 0;
    };
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      el.addEventListener("mouseenter", play);
      el.addEventListener("focusin", play);
      el.addEventListener("mouseleave", stop);
      el.addEventListener("focusout", stop);
      return () => {
        clearTimeout(fallback);
        warm.disconnect();
        v.removeEventListener("canplaythrough", start);
        el.removeEventListener("mouseenter", play);
        el.removeEventListener("focusin", play);
        el.removeEventListener("mouseleave", stop);
        el.removeEventListener("focusout", stop);
      };
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) play();
        else {
          wantPlay = false;
          v.pause();
        }
      },
      { threshold: 0.6 },
    );
    io.observe(v);
    return () => {
      clearTimeout(fallback);
      warm.disconnect();
      io.disconnect();
      v.removeEventListener("canplaythrough", start);
    };
  }, []);

  return (
    <article
      ref={ref}
      style={{ opacity: 0, willChange: "transform" }}
      className={
        "overflow-hidden rounded-3xl border-2 border-ua-ink bg-white shadow-[8px_8px_0_var(--ua-ink)] " +
        (wide ? "flex flex-col lg:grid lg:grid-cols-12" : "flex h-full flex-col")
      }
    >
      <div
        data-cs
        className={
          "flex items-center border-b-2 border-ua-ink bg-ua-ink" +
          (wide
            ? " lg:col-span-7 lg:border-b-0" + (flip ? " lg:order-2 lg:border-l-2" : " lg:border-r-2")
            : "")
        }
      >
        <div className="relative aspect-video w-full">
          <video
            ref={videoRef}
            src={study.video}
            poster={study.poster}
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={`${study.name} website preview`}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>

      <div
        className={
          "flex flex-1 flex-col items-start gap-3 p-5 md:p-7" +
          (wide ? " lg:col-span-5 lg:justify-center lg:p-10" : "")
        }
      >
        <div data-cs className="flex w-full items-center justify-between">
          {study.tag && (
            <span
              className={
                "rounded-full border-2 border-ua-ink px-3 py-1 text-xs font-bold lowercase " +
                (wide ? "bg-ua-pink" : "bg-ua-green")
              }
            >
              {study.tag}
            </span>
          )}
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          data-cs
          src={study.logo}
          alt={`${study.name} logo`}
          className={`w-auto ${study.logoClass ?? "h-10 md:h-12"}`}
        />
        <h3
          data-cs
          className={
            "font-black text-ua-ink " + (wide ? "text-2xl md:text-4xl" : "text-xl md:text-2xl")
          }
          style={{ fontFamily: "var(--font-epilogue)" }}
        >
          {study.name}
        </h3>
        <p
          data-cs
          className={"text-base leading-relaxed text-ua-ink/75" + (wide ? " md:text-lg" : "")}
        >
          {study.blurb}
        </p>
        <a
          data-cs
          href={study.href}
          target="_blank"
          rel="noopener noreferrer"
          className={
            "group mt-1 inline-flex items-center gap-2 rounded-full border-2 border-ua-ink bg-ua-ink px-6 py-2.5 text-sm font-bold text-ua-bg shadow-[4px_4px_0_var(--ua-ink)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-ua-orange hover:shadow-[6px_6px_0_var(--ua-ink)] active:translate-y-0 active:shadow-[2px_2px_0_var(--ua-ink)]" +
            (wide ? "" : " mt-auto")
          }
          style={{ fontFamily: "var(--font-epilogue)" }}
        >
          view website
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </article>
  );
}
