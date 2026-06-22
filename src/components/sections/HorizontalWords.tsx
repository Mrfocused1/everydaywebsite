"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/reducedMotion";
import { Sticker } from "@/components/Sticker";

gsap.registerPlugin(ScrollTrigger);

const HEADLINE = "Premium websites. Built for you. Launched fast.";

// The statement track scrubs horizontally while pinned, and each letter +
// sticker bounces in (elastic) as it sweeps across the viewport. Mobile /
// reduced-motion fall back to a static, wrapped statement (handled in CSS).
export function HorizontalWords() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const scrollTween = gsap.fromTo(
        track,
        { xPercent: 50 },
        {
          xPercent: -100,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "-30% top",
            end: "125% bottom",
            scrub: 0.5,
          },
        },
      );

      track.querySelectorAll<HTMLElement>(".letter").forEach((el) => {
        gsap.from(el, {
          yPercent: (Math.random() - 0.5) * 500,
          rotation: (Math.random() - 0.5) * 60,
          ease: "elastic.out(1.2, 1)",
          scrollTrigger: {
            trigger: el,
            containerAnimation: scrollTween,
            start: "left 90%",
            end: "left 10%",
            scrub: 0.5,
          },
        });
      });

      track.querySelectorAll<HTMLElement>(".hw-sticker").forEach((el) => {
        gsap.from(el, {
          scale: 0,
          yPercent: (Math.random() - 0.5) * 400,
          rotation: (Math.random() - 0.5) * 60,
          ease: "elastic.out(1.2, 1)",
          scrollTrigger: {
            trigger: el,
            containerAnimation: scrollTween,
            start: "left 90%",
            end: "left 10%",
            scrub: 0.5,
          },
        });
      });

      const drawArrow = (selector: string, start: string, end: string) => {
        track.querySelectorAll<SVGPathElement>(selector).forEach((el) => {
          if (typeof el.getTotalLength !== "function") return;
          const len = el.getTotalLength();
          gsap.set(el, { strokeDasharray: len });
          gsap.from(el, {
            strokeDashoffset: len,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              containerAnimation: scrollTween,
              start,
              end,
              scrub: 0.5,
            },
          });
        });
      };
      drawArrow('[data-arrow="loop"] path', "left 70%", "left 10%");
      drawArrow('[data-arrow="end"] path', "left 105%", "left 78%");
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="hw-section relative bg-ua-bg text-ua-ink">
      <div className="hw-content">
        <div ref={trackRef} className="hw-relative">
          <h2
            className="hw-h2 text-7xl font-bold leading-none md:text-[8.5rem]"
            style={{ fontFamily: "var(--font-epilogue)" }}
          >
            {HEADLINE.split("").map((c, i) =>
              c === " " ? (
                <span key={i}> </span>
              ) : (
                <span key={i} className="letter inline-block">
                  {c}
                </span>
              ),
            )}
          </h2>

          <span className="hw-sticker pointer-events-none absolute motion-reduce:hidden left-[17%] top-1/2 -translate-x-1/2 -translate-y-[110%]">
            <Sticker name="sparkles" size={60} />
          </span>
          <span className="hw-sticker pointer-events-none absolute motion-reduce:hidden left-1/2 top-1/2 -translate-x-1/2 translate-y-[10%]">
            <Sticker name="starburst" size={64} />
          </span>
          <span className="hw-sticker pointer-events-none absolute motion-reduce:hidden left-[80%] top-1/2 -translate-x-1/2 -translate-y-[100%]">
            <Sticker name="cursor-star" size={92} />
          </span>

          <svg
            data-arrow="loop"
            className="hw-arrow pointer-events-none absolute bottom-full left-[26%] w-56 -translate-y-[30%] text-ua-ink motion-reduce:hidden md:w-80"
            viewBox="0 0 386 127"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M2 123C9 35.9999 84.5 17 124 25.9999C217.764 47.3635 207 115 177.5 123C105.777 142.45 110.737 1.99991 232.5 2C310.5 2.00006 366.5 79 376 118L356.5 105.5"
              stroke="currentColor"
              strokeWidth={3.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 123C9 35.9999 84.5 17 124 25.9999C217.764 47.3635 207 115 177.5 123C105.777 142.45 110.737 1.99991 232.5 2C310.5 2.00006 366.5 79 376 118L384 97"
              stroke="currentColor"
              strokeWidth={3.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            data-arrow="end"
            className="hw-arrow pointer-events-none absolute left-full top-1/2 w-[8.5rem] translate-x-1/2 text-ua-ink motion-reduce:hidden"
            viewBox="0 0 140 127"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M2.03125 2.42188C100.469 2.42188 130.156 52.4219 118.437 125.078L99.6875 107.891"
              stroke="currentColor"
              strokeWidth={3.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.03125 2.42188C100.469 2.42188 130.156 52.4219 118.438 125.078L137.969 110.234"
              stroke="currentColor"
              strokeWidth={3.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="hw-bottom">
          <p className="mx-auto max-w-xl px-6 text-lg text-ua-ink/80 md:text-2xl">
            Most businesses settle for a template that looks like everyone
            else&apos;s. We design and build something unmistakably yours — and put
            it live in days.
          </p>
        </div>
      </div>
    </section>
  );
}
