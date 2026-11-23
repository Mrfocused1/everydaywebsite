import { getImageProps } from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { HERO } from "@/lib/content";

const epilogue: CSSProperties = { fontFamily: "var(--font-epilogue)" };
const dmSans: CSSProperties = { fontFamily: "var(--font-dm-sans)" };

/** Stagger helper for the CSS-only `.hero-in` entrance. */
const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

/**
 * Art-directed photo: the landscape shot on desktop (lg+), where it fills the
 * hero behind the copy, and the portrait one on phones/tablets, where it sits
 * as a band below the copy. A <picture> means each device only downloads its own.
 */
function HeroPhoto() {
  const common = { alt: HERO.imageAlt, sizes: "100vw", priority: true };
  const {
    props: { srcSet: desktop },
  } = getImageProps({ ...common, src: HERO.image.desktop, width: 1672, height: 941, quality: 85 });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({ ...common, src: HERO.image.mobile, width: 941, height: 1672, quality: 85 });
  return (
    <picture>
      <source media="(min-width: 1024px)" srcSet={desktop} />
      <source srcSet={mobile} />
      {/* eslint-disable-next-line jsx-a11y/alt-text -- alt comes from rest */}
      <img
        {...rest}
        className="absolute inset-0 h-full w-full object-cover object-[50%_100%] lg:object-[78%_50%]"
      />
    </picture>
  );
}

const ICON_PATHS: Record<(typeof HERO.proof)[number]["icon"], ReactNode> = {
  bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />,
  layers: (
    <>
      <path d="m12 3 9 4.5-9 4.5-9-4.5L12 3Z" />
      <path d="m3 12 9 4.5 9-4.5" />
      <path d="m3 16.5 9 4.5 9-4.5" />
    </>
  ),
  monitor: (
    <>
      <rect x="2.5" y="3.5" width="19" height="13" rx="1.5" />
      <path d="M8 21h8M12 16.5V21" />
    </>
  ),
};

/** Splits a headline line so the accent glyph (the "&") can be coloured. */
function withAccent(line: string): ReactNode {
  const parts = line.split(HERO.headline.accent);
  return parts.flatMap((part, i) =>
    i === 0
      ? [part]
      : [
          <span key={i} className="text-ua-teal">
            {HERO.headline.accent}
          </span>,
          part,
        ],
  );
}

export function Hero() {
  return (
    <section id="top" className="relative isolate w-full overflow-hidden bg-white lg:flex lg:min-h-svh lg:items-center">
      {/* ── Copy ── (top on mobile, left column on desktop) */}
      <div className="mx-auto w-full max-w-[1320px] px-5 pb-8 pt-[92px] sm:px-8 sm:pb-10 sm:pt-32 lg:px-12 lg:pb-20 lg:pt-32">
        <div className="max-w-[36rem] lg:max-w-[40rem]">
          <h1
            className="hero-in text-[clamp(2.4rem,5vw+1.5rem,3.75rem)] font-extrabold leading-[0.98] tracking-[-0.035em] text-ua-navy lg:text-[clamp(3.5rem,5vw,5.25rem)]"
            style={{ ...epilogue, ...delay(60) }}
          >
            {HERO.headline.lines.map((line) => (
              <span key={line} className="block">
                {withAccent(line)}
              </span>
            ))}
          </h1>

          <p
            className="hero-in mt-4 max-w-[30rem] text-base leading-[1.5] text-[#3b4556] sm:mt-5 sm:text-lg lg:mt-7 lg:text-[1.3rem]"
            style={{ ...dmSans, ...delay(150) }}
          >
            {HERO.subhead}
          </p>

          <div
            className="hero-in mt-6 flex flex-col gap-2.5 sm:mt-7 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 lg:mt-9"
            style={delay(240)}
          >
            <a
              href={HERO.ctaHref}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ua-navy px-8 py-3 text-base sm:py-3.5 sm:text-[17px] font-bold text-white shadow-[0_10px_24px_-12px_rgba(11,29,58,0.7)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#13305c] hover:shadow-[0_14px_28px_-12px_rgba(11,29,58,0.75)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ua-teal active:translate-y-0"
              style={epilogue}
            >
              {HERO.ctaLabel}
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href={HERO.secondaryHref}
              className="inline-flex items-center justify-center rounded-full border-[1.5px] border-[#c9d0da] bg-white/80 px-8 py-3 text-base sm:py-3.5 sm:text-[17px] font-bold text-ua-navy backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-ua-navy hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ua-teal active:translate-y-0"
              style={epilogue}
            >
              {HERO.secondaryLabel}
            </a>
          </div>

          <ul
            className="hero-in mt-10 hidden max-w-[34rem] flex-wrap items-center gap-x-10 gap-y-3 border-t border-[#dde2e9] pt-6 text-[15px] font-semibold text-ua-navy sm:flex lg:mt-12"
            style={{ ...dmSans, ...delay(330) }}
          >
            {HERO.proof.map(({ icon, label }) => (
              <li key={label} className="inline-flex items-center gap-2.5">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 shrink-0"
                >
                  {ICON_PATHS[icon]}
                </svg>
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Photo ── a band below the copy on mobile; full-bleed behind it on desktop. */}
      <div className="relative h-[clamp(300px,56svh,600px)] w-full lg:absolute lg:inset-0 lg:-z-10 lg:h-auto">
        <HeroPhoto />
        {/* Desktop: white wash from the copy side, clear by mid-width. */}
        <div className="hero-wash absolute inset-0 hidden lg:block" />
      </div>
    </section>
  );
}
