"use client";

import { Reveal } from "@/components/Reveal";
import { Sticker } from "@/components/Sticker";
import { STEPS } from "@/lib/content";

// Resting rotations for the mobile stacked cards.
const MOBILE_ROTATIONS = [2, -1.5, 2.5, -1.5, -2];

// Desktop hover-fan: each card's resting rotation + vertical stagger (px).
const DESKTOP_LAYOUT = [
  { rot: -4, ty: 0 },
  { rot: 3, ty: 30 },
  { rot: -2, ty: 8 },
  { rot: 4, ty: 34 },
  { rot: -3, ty: 12 },
];

function HandDivider({ dark }: { dark: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={`mt-4 h-[10px] w-40 ${dark ? "text-ua-bg" : "text-ua-ink"}`}
      viewBox="0 0 200 10"
      fill="none"
      preserveAspectRatio="none"
    >
      <path
        d="M2 6C40 3 70 8 100 5C130 2 160 7 198 4"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
      />
    </svg>
  );
}

function Bullets({
  bullets,
  dark,
  dense = false,
}: {
  bullets: string[];
  dark: boolean;
  dense?: boolean;
}) {
  return (
    <ul className={dense ? "mt-4 space-y-1.5" : "mt-6 space-y-3"}>
      {bullets.map((b) => (
        <li
          key={b}
          className={`flex items-start leading-tight ${dense ? "gap-2 text-sm" : "gap-3"}`}
        >
          <span
            aria-hidden
            className={`${dense ? "mt-1.5" : "mt-2"} h-2 w-2 shrink-0 rounded-full ${
              dark ? "bg-ua-bg" : "bg-ua-ink"
            }`}
          />
          <span className={dark ? "text-ua-bg" : "text-ua-ink/90"}>{b}</span>
        </li>
      ))}
    </ul>
  );
}

export function Process() {
  return (
    <section id="process" className="bg-ua-bg px-6 py-24 md:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-center">
            <h2
              className="relative inline-block text-4xl font-bold text-ua-ink md:text-6xl"
              style={{ fontFamily: "var(--font-epilogue)" }}
            >
              how it works
              <Sticker
                name="checklist"
                size={92}
                rotate={10}
                className="pointer-events-none absolute -right-14 -top-10 z-10 hidden sm:block md:-right-24 md:-top-12"
              />
            </h2>
          </div>
          <p className="mx-auto mt-4 max-w-xl text-center text-lg text-ua-ink/70">
            five simple steps, from first chat to live site — for businesses and
            creatives alike.
          </p>
        </Reveal>

        {/* Desktop (md+): horizontal hover-fan deck. */}
        <div className="mt-20 hidden justify-center md:flex">
          {STEPS.map((d, i) => {
            const dark = d.color.includes("text-ua-bg");
            const { rot, ty } = DESKTOP_LAYOUT[i] ?? { rot: 0, ty: 0 };
            return (
              <article
                key={d.step}
                className={`ua-fan-card relative flex h-[24rem] w-[17rem] shrink-0 flex-col justify-center rounded-3xl border-2 border-ua-ink ${d.color} px-6 pb-6 pt-16 shadow-[6px_6px_0_var(--ua-ink)] ${
                  i > 0 ? "-ml-24" : ""
                }`}
                style={
                  {
                    zIndex: i + 1,
                    "--rot": `${rot}deg`,
                    "--ty": `${ty}px`,
                  } as React.CSSProperties
                }
              >
                <Sticker name={d.sticker} size={72} className="absolute -left-2 -top-7" rotate={-8} />
                <div>
                  <h3
                    className="text-2xl font-bold leading-tight"
                    style={{ fontFamily: "var(--font-epilogue)" }}
                  >
                    {d.step}
                  </h3>
                  <HandDivider dark={dark} />
                  <Bullets bullets={d.bullets} dark={dark} dense />
                </div>
              </article>
            );
          })}
        </div>

        {/* Mobile (< md): CSS sticky stacking deck. */}
        <div className="mt-14 flex flex-col md:hidden">
          {STEPS.map((d, i) => {
            const dark = d.color.includes("text-ua-bg");
            return (
              <div
                key={d.step}
                className="sticky flex h-[37rem] items-start justify-center motion-reduce:static motion-reduce:mb-6 motion-reduce:h-auto"
                style={{ top: `calc(6rem + ${i * 0.9}rem)`, zIndex: i + 1 }}
              >
                <div
                  className={`relative w-full max-w-[21rem] origin-center rounded-3xl border-2 border-ua-ink ${d.color} px-6 pb-8 pt-14 shadow-[6px_6px_0_var(--ua-ink)]`}
                  style={{ transform: `rotate(${MOBILE_ROTATIONS[i] ?? 0}deg)` }}
                >
                  <Sticker name={d.sticker} size={72} className="absolute -right-3 -top-7" rotate={8} />
                  <h3
                    className="pr-8 text-3xl font-bold"
                    style={{ fontFamily: "var(--font-epilogue)" }}
                  >
                    {d.step}
                  </h3>
                  <HandDivider dark={dark} />
                  <div className="text-xl">
                    <Bullets bullets={d.bullets} dark={dark} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
