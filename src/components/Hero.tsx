"use client";

import { Fragment, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { HERO } from "@/lib/content";
import { prefersReducedMotion } from "@/lib/reducedMotion";

// Hand-drawn loop (original) — circles / underlines words for emphasis.
const CIRCLE_PATH =
  "M44 96C12 84 6 44 70 26C134 8 196 30 188 64C181 94 96 112 40 92C18 84 18 62 40 50";

export function Hero() {
  const wordsRef = useRef<HTMLHeadingElement>(null);
  const circleRef = useRef<SVGPathElement>(null);
  const scribbleRef = useRef<SVGPathElement>(null);
  const slidesRef = useRef<Array<HTMLImageElement | HTMLVideoElement | null>>([]);

  // Background slideshow: hold each slide, then fade out to dark and the next in.
  useEffect(() => {
    const slides = slidesRef.current.filter(
      (s): s is HTMLImageElement => s !== null,
    );
    if (slides.length < 2) return;
    if (prefersReducedMotion()) {
      gsap.set(slides, { opacity: 0 });
      gsap.set(slides[0], { opacity: 1 });
      return;
    }

    const HOLD = 5;
    const FADE = 1.3;
    const BLACK = 0.25;

    const ctx = gsap.context(() => {
      gsap.set(slides, { opacity: 0 });
      gsap.set(slides[0], { opacity: 1 });
      const tl = gsap.timeline({ repeat: -1 });
      slides.forEach((slide, i) => {
        const next = slides[(i + 1) % slides.length];
        tl.to(slide, { opacity: 1, duration: HOLD });
        tl.to(slide, { opacity: 0, duration: FADE, ease: "power2.inOut" });
        tl.to({}, { duration: BLACK });
        tl.to(next, { opacity: 1, duration: FADE, ease: "power2.inOut" });
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const el = wordsRef.current;
    if (!el) return;
    const words = el.querySelectorAll("[data-word]");
    const circle = circleRef.current;
    const scribble = scribbleRef.current;

    if (prefersReducedMotion()) {
      gsap.set(words, { opacity: 1, y: 0 });
      if (circle) circle.style.strokeDashoffset = "0";
      if (scribble) scribble.style.strokeDashoffset = "0";
      return;
    }

    [scribble, circle].forEach((p) => {
      if (p && typeof p.getTotalLength === "function") {
        const len = p.getTotalLength();
        if (len) gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
      }
    });

    const drawIn = (path: SVGPathElement | null, delay: number) => {
      if (!path || typeof path.getTotalLength !== "function") return;
      const len = path.getTotalLength();
      if (!len) return;
      gsap.to(path, { strokeDashoffset: 0, duration: 0.8, ease: "power2.inOut", delay });
    };

    // Entrance runs on mount (a short beat after paint for polish).
    let ctx: gsap.Context | undefined;
    const startTimer = window.setTimeout(() => {
      ctx = gsap.context(() => {
        gsap.fromTo(
          words,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.05, ease: "power3.out" },
        );
        drawIn(scribble, 0.25);
        drawIn(circle, 0.6);
      }, el);
    }, 150);

    return () => {
      clearTimeout(startTimer);
      ctx?.revert();
    };
  }, []);

  return (
    <section
      id="top"
      data-nav-theme="dark"
      className="relative min-h-svh w-full overflow-hidden bg-ua-ink"
    >
      {/* Cross-fading background slideshow of real websites. */}
      {HERO.images.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={src}
          ref={(el) => {
            slidesRef.current[i] = el;
          }}
          src={src}
          alt={i === 0 ? HERO.imageAlt : ""}
          aria-hidden={i === 0 ? undefined : true}
          className="absolute inset-0 h-full w-full object-cover object-[74%_45%] md:object-center"
          style={{ opacity: i === 0 ? 1 : 0 }}
          fetchPriority={i === 0 ? "high" : undefined}
        />
      ))}
      {/* Keep the headline readable over the bright photo: a light flat wash plus
          a bottom-weighted gradient (the headline sits at the bottom). */}
      <div className="absolute inset-0 bg-ua-ink/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-ua-ink via-ua-ink/45 to-ua-ink/25" />

      <div className="relative z-10 flex min-h-svh flex-col items-center justify-end px-6 pb-14 text-center md:px-10 md:pb-20">
        <h1
          ref={wordsRef}
          className="mx-auto max-w-5xl text-3xl font-bold lowercase leading-[1.05] text-ua-bg sm:text-4xl md:text-6xl"
          style={{ fontFamily: "var(--font-epilogue)" }}
        >
          {HERO.words.map((w, i) => {
            const space = i < HERO.words.length - 1 ? " " : "";

            // Emphasised word: serif italic (Lora).
            if (w === HERO.emphasis) {
              return (
                <span
                  key={`${w}-${i}`}
                  data-word
                  className="ua-reveal inline-block whitespace-pre italic"
                  style={{ opacity: 0, fontFamily: "var(--font-lora)" }}
                >
                  {w}
                  {space}
                </span>
              );
            }

            // "websites" gets a white hand-drawn scribble loop that draws in.
            if (w === "websites") {
              return (
                <Fragment key={`${w}-${i}`}>
                  <span
                    data-word
                    className="ua-reveal relative inline-block whitespace-pre"
                    style={{ opacity: 0 }}
                  >
                    <span className="relative inline-block">
                      {w}
                      <svg
                        viewBox="0 0 230 120"
                        fill="none"
                        aria-hidden="true"
                        preserveAspectRatio="none"
                        className="pointer-events-none absolute -left-[13%] -top-[52%] h-[204%] w-[142%] text-ua-bg"
                      >
                        <path
                          ref={scribbleRef}
                          d={CIRCLE_PATH}
                          stroke="currentColor"
                          strokeWidth={5}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {space}
                  </span>
                  {/* Break the heading onto two lines after "websites". */}
                  <br aria-hidden="true" />
                </Fragment>
              );
            }

            // "creatives" gets the hand-drawn pink circle.
            if (w === "creatives") {
              return (
                <span
                  key={`${w}-${i}`}
                  data-word
                  className="ua-reveal relative inline-block whitespace-pre"
                  style={{ opacity: 0 }}
                >
                  <span className="relative inline-block">
                    {w}
                    <svg
                      viewBox="0 0 230 120"
                      fill="none"
                      aria-hidden="true"
                      preserveAspectRatio="none"
                      className="pointer-events-none absolute -left-[18%] -top-[22%] h-[150%] w-[140%] text-ua-pink"
                    >
                      <path
                        ref={circleRef}
                        d={CIRCLE_PATH}
                        stroke="currentColor"
                        strokeWidth={6}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {space}
                </span>
              );
            }

            return (
              <span
                key={`${w}-${i}`}
                data-word
                className="ua-reveal inline-block whitespace-pre"
                style={{ opacity: 0 }}
              >
                {w}
                {space}
              </span>
            );
          })}
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-base text-ua-bg/90 md:text-lg">
          {HERO.subhead}
        </p>

        <div className="mt-8">
          <a
            href={HERO.ctaHref}
            className="group inline-flex items-center gap-2 rounded-full border-2 border-ua-ink bg-white px-7 py-3 text-lg font-bold text-ua-ink shadow-[4px_4px_0_var(--ua-ink)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-ua-ink hover:text-white hover:shadow-[6px_6px_0_var(--ua-ink)] active:translate-y-0 active:shadow-[2px_2px_0_var(--ua-ink)]"
            style={{ fontFamily: "var(--font-epilogue)" }}
          >
            {HERO.ctaLabel}
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
