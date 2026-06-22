"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sticker } from "@/components/Sticker";
import { SHOWCASE } from "@/lib/content";
import { prefersReducedMotion } from "@/lib/reducedMotion";

gsap.registerPlugin(ScrollTrigger);

const CIRCLE_PATH =
  "M120 18C70 10 18 26 14 52C10 80 78 96 150 92C214 88 244 64 232 42C220 22 150 14 96 22";
const UNDERLINE_PATH =
  "M4 20C70 9 150 7 220 12C260 15 244 22 214 24C300 18 360 14 420 19";
const ARROW_PATH =
  "M6 14C70 -6 150 60 120 96C96 124 30 110 40 78C48 52 96 50 132 66";
const ARROW_HEAD = "M118 52L134 68L112 74";

function PhotoCard({
  src,
  rotate,
  imgClassName = "",
}: {
  src: string;
  rotate: number;
  imgClassName?: string;
}) {
  return (
    <div
      className="ua-wiggle-card h-full w-full overflow-hidden rounded-2xl border-2 border-ua-ink bg-white shadow-[8px_8px_0_var(--ua-ink)]"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        aria-hidden="true"
        draggable={false}
        loading="lazy"
        decoding="async"
        className={`h-full w-full object-cover ${imgClassName}`}
      />
    </div>
  );
}

function ArrowSquiggle({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 150 130"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none absolute text-ua-ink ${className}`}
    >
      <path data-draw d={ARROW_PATH} stroke="currentColor" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" />
      <path data-draw d={ARROW_HEAD} stroke="currentColor" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Showcase() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const draws = section.querySelectorAll<SVGPathElement>("[data-draw]");
    const photos = section.querySelectorAll<HTMLElement>("[data-photo]");

    if (prefersReducedMotion()) {
      draws.forEach((p) => {
        p.style.strokeDashoffset = "0";
      });
      gsap.set(photos, { opacity: 1, scale: 1, y: 0 });
      gsap.set(section.querySelectorAll("[data-sticker]"), { opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      draws.forEach((path) => {
        if (typeof path.getTotalLength !== "function") return;
        const len = path.getTotalLength();
        if (!len) return;
        gsap.set(path, { strokeDasharray: len });
        gsap.fromTo(
          path,
          { strokeDashoffset: len },
          {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: { trigger: path, start: "top 90%", end: "top 55%", scrub: true },
          },
        );
      });

      photos.forEach((ph) => {
        const sticker = ph.querySelector<HTMLElement>("[data-sticker]");
        const stickerIn = sticker
          ? gsap.fromTo(
              sticker,
              { opacity: 0, scale: 0.4, rotation: -24 },
              { opacity: 1, scale: 1, rotation: 0, duration: 0.9, ease: "elastic.out(1.1, 0.35)", delay: 0.2, paused: true },
            )
          : null;
        const cardIn = gsap.fromTo(
          ph,
          { opacity: 0, scale: 0.85, y: 36 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.65,
            ease: "back.out(1.5)",
            paused: true,
            onComplete: () => stickerIn?.restart(true),
          },
        );
        const replay = () => {
          stickerIn?.pause(0);
          cardIn.restart();
        };
        const reset = () => {
          stickerIn?.pause(0);
          cardIn.pause(0);
        };
        ScrollTrigger.create({ trigger: ph, start: "top 82%", end: "bottom top", onEnter: replay, onEnterBack: replay });
        ScrollTrigger.create({ trigger: ph, start: "top bottom", end: "bottom top", onLeave: reset, onLeaveBack: reset });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-ua-bg px-6 py-24 text-ua-ink md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          className="mx-auto max-w-5xl text-center text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
          style={{ fontFamily: "var(--font-epilogue)" }}
        >
          we help{" "}
          <span className="relative inline-block">
            businesses
            <svg
              viewBox="0 0 250 110"
              fill="none"
              aria-hidden="true"
              preserveAspectRatio="none"
              className="pointer-events-none absolute -left-[12%] -top-[28%] h-[156%] w-[124%] text-ua-pink"
            >
              <path data-draw d={CIRCLE_PATH} stroke="currentColor" strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>{" "}
          &amp; creatives{" "}
          <span className="relative inline-block">
            <span style={{ fontFamily: "var(--font-lora)" }} className="italic">
              stand out
            </span>
            <svg
              viewBox="0 0 424 30"
              fill="none"
              aria-hidden="true"
              preserveAspectRatio="none"
              className="pointer-events-none absolute -bottom-4 left-0 w-full text-ua-sky"
            >
              <path data-draw d={UNDERLINE_PATH} stroke="currentColor" strokeWidth={5} strokeLinecap="round" />
            </svg>
          </span>{" "}
          online.
        </h2>

        {/* Desktop: tall vertical scatter (scroll to reveal). */}
        <div className="relative mt-20 hidden h-[88rem] md:block">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-[5%] top-[44rem] h-[18rem] w-[18rem] bg-ua-blue"
            style={{ borderRadius: "48% 52% 42% 58% / 55% 44% 56% 45%" }}
          />

          <ArrowSquiggle className="left-[44%] top-[20rem] z-[7] h-[12rem] w-[12rem]" />
          <ArrowSquiggle className="left-[34%] top-[60rem] z-[7] h-[11rem] w-[11rem]" />

          {SHOWCASE.map((photo, i) => (
            <div
              key={i}
              data-photo
              className={`ua-reveal ua-wiggle-pair absolute ${photo.className}`}
              style={{ zIndex: photo.z, opacity: 0 }}
            >
              <PhotoCard src={photo.src} rotate={photo.rotate} imgClassName={photo.imgClassName} />
              {photo.sticker && (
                <div
                  data-sticker
                  className={`ua-wiggle-icon absolute z-20 ${photo.sticker.className}`}
                  style={{ opacity: 0 }}
                >
                  <Sticker name={photo.sticker.name} size={photo.sticker.size} rotate={photo.sticker.rotate} animate={false} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: stacked scatter (scroll to reveal). */}
        <div className="relative mt-14 md:hidden">
          <div className="relative flex flex-col items-center gap-16">
            {SHOWCASE.map((photo, i) => (
              <div
                key={i}
                data-photo
                className="ua-reveal ua-wiggle-pair relative w-[88%] max-w-[20rem] aspect-[16/10]"
                style={{ opacity: 0, alignSelf: i % 2 === 0 ? "flex-start" : "flex-end" }}
              >
                <PhotoCard src={photo.src} rotate={photo.rotate} imgClassName={photo.imgClassName} />
                {photo.sticker && (
                  <div
                    data-sticker
                    className={`ua-wiggle-icon absolute z-20 ${photo.sticker.className}`}
                    style={{ opacity: 0 }}
                  >
                    <Sticker name={photo.sticker.name} size={photo.sticker.size * 0.8} rotate={photo.sticker.rotate} animate={false} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
