"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal } from "@/components/Reveal";
import { Sticker } from "@/components/Sticker";
import { prefersReducedMotion } from "@/lib/reducedMotion";

gsap.registerPlugin(ScrollTrigger);

const TITLE_WORDS = ["Websites", "that", "work", "as", "hard", "as", "you", "do."];
const EMPHASIS_WORDS = ["designed", "to", "convert."];

const UNDERLINE_PATH =
  "M2 26C41.0237 23.1556 79.9927 19.9419 118.634 15.5521C169.106 9.98633 227.314 2.42393 275.206 2C280.46 2.57436 264.768 4.99488 262.462 5.55556C257.837 6.43078 252.529 7.47009 247.317 8.59146C239.594 10.3556 212.496 15.8393 226.932 19.8051C239.594 22.6359 263.663 21.9521 280.978 21.3504C314.817 19.9829 349.311 16.7419 383.204 14.7863C465.931 9.5077 549.191 10.547 632 14.1436";

// Three phones in the fan, each autoplaying a 9:16 scroll-through of a real site.
const PHONES = [
  { src: "/marketing/work-portrait/perfect-pair-portrait.mp4", poster: "/marketing/work-portrait/perfect-pair-poster.jpg", label: "The Perfect Pair" },
  { src: "/marketing/work-portrait/clearway-portrait.mp4", poster: "/marketing/work-portrait/clearway-poster.jpg", label: "Clearway Driving School" },
  { src: "/marketing/work-portrait/chuks-portrait.mp4", poster: "/marketing/work-portrait/chuks-poster.jpg", label: "Chuks Fitness" },
] as const;

export function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const underlineRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const path = pathRef.current;
    const underline = underlineRef.current;
    if (!section) return;

    const words = title?.querySelectorAll("[data-word]");

    if (prefersReducedMotion()) {
      if (words) gsap.set(words, { opacity: 1, y: 0 });
      if (path) gsap.set(path, { strokeDashoffset: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      if (words && words.length) {
        gsap.fromTo(
          words,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.05,
            ease: "power3.out",
            scrollTrigger: { trigger: section, start: "top 80%", once: true },
          },
        );
      }

      if (path && typeof path.getTotalLength === "function") {
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length });
        gsap.fromTo(
          path,
          { strokeDashoffset: length },
          {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
              trigger: underline ?? title ?? section,
              start: "top 75%",
              end: "top 38%",
              scrub: true,
            },
          },
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative overflow-hidden bg-ua-bg px-6 py-28 md:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <div className="relative mx-auto max-w-5xl text-center">
          <Sticker
            name="laptop-2"
            size={112}
            rotate={-10}
            className="pointer-events-none absolute -left-4 top-1/3 z-10 hidden lg:block md:-left-20"
          />
          <h2
            ref={titleRef}
            className="text-5xl font-black leading-[1.02] tracking-tight text-ua-ink sm:text-6xl md:text-7xl"
            style={{ fontFamily: "var(--font-epilogue)" }}
          >
            {TITLE_WORDS.map((w, i) => {
              if (i === TITLE_WORDS.length - 1) {
                return (
                  <span key={`t-${w}-${i}`} className="relative inline-block">
                    <span
                      data-word
                      className="ua-reveal inline-block whitespace-pre"
                      style={{ opacity: 0 }}
                    >
                      {w}{" "}
                    </span>
                    <Sticker
                      name="thumbs-up"
                      size={110}
                      rotate={-8}
                      className="pointer-events-none absolute -right-12 -top-7 z-10 hidden sm:block md:-right-20 md:-top-8"
                    />
                  </span>
                );
              }
              return (
                <span
                  key={`t-${w}-${i}`}
                  data-word
                  className="ua-reveal inline-block whitespace-pre"
                  style={{ opacity: 0 }}
                >
                  {w}{" "}
                </span>
              );
            })}
            <span className="mt-3 block" style={{ fontFamily: "var(--font-lora)" }}>
              <span ref={underlineRef} className="relative inline-block font-medium italic">
                {EMPHASIS_WORDS.map((w, i) => (
                  <span
                    key={`e-${w}-${i}`}
                    data-word
                    className="ua-reveal inline-block whitespace-pre"
                    style={{ opacity: 0 }}
                  >
                    {w}{" "}
                  </span>
                ))}
                <svg
                  viewBox="0 0 634 28"
                  fill="none"
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-10 left-0 w-full text-ua-ink"
                  preserveAspectRatio="none"
                >
                  <path
                    ref={pathRef}
                    d={UNDERLINE_PATH}
                    stroke="currentColor"
                    strokeWidth={4}
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </span>
          </h2>
        </div>

        {/* Phone fan — each phone autoplays a 9:16 scroll-through of a real
            site. Hovering one straightens + lifts it and nudges the rest. */}
        <Reveal className="mt-24 md:mt-32">
          <div className="relative mx-auto flex w-fit max-w-full items-center justify-center">
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 h-[108%] w-[112%] -translate-x-1/2 -translate-y-1/2 -rotate-6 bg-ua-blue"
              style={{ borderRadius: "62% 38% 56% 44% / 56% 48% 52% 44%" }}
            />
            <div className="relative flex items-end justify-center -space-x-10 sm:-space-x-8 md:-space-x-10">
              {PHONES.map((phone, i) => {
                const isMiddle = i === 1;
                const widthClass = isMiddle
                  ? "w-40 sm:w-44 md:w-52"
                  : "w-32 sm:w-40 md:w-44";
                return (
                  <div
                    key={i}
                    className={`ua-fan-card relative shrink-0 rounded-[2rem] border-2 border-ua-ink bg-ua-ink p-1.5 shadow-[6px_6px_0_var(--ua-ink)] sm:rounded-[2.4rem] ${widthClass}`}
                    style={
                      {
                        "--rot": `${[-7, 0, 7][i]}deg`,
                        "--ty": isMiddle ? "-1.5rem" : "0px",
                        zIndex: isMiddle ? 20 : i + 1,
                      } as React.CSSProperties
                    }
                  >
                    {/* notch */}
                    <div
                      aria-hidden
                      className="absolute left-1/2 top-[0.55rem] z-10 h-1.5 w-12 -translate-x-1/2 rounded-full bg-ua-bg/30"
                    />
                    <div className="overflow-hidden rounded-[1.5rem] bg-ua-bg sm:rounded-[1.9rem]">
                      <video
                        src={phone.src}
                        poster={phone.poster}
                        aria-label={`${phone.label} — website preview`}
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        onMouseEnter={(e) => {
                          void e.currentTarget.play();
                        }}
                        onMouseLeave={(e) => {
                          const v = e.currentTarget;
                          v.pause();
                          v.currentTime = 0;
                        }}
                        className="block aspect-[9/16] w-full cursor-pointer object-cover"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <p className="mx-auto mt-16 max-w-3xl text-center text-lg text-ua-ink/80 md:text-xl">
            Every site is designed from scratch around your brand — premium,
            responsive and lightning quick. Whether you&apos;re a business that needs
            to be taken seriously or a creative who needs to stand out, you get a
            website that looks the part and works flawlessly on every screen.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
