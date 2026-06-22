"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Sticker } from "@/components/Sticker";
import { SITE } from "@/lib/content";
import { prefersReducedMotion } from "@/lib/reducedMotion";

const EXAMPLES = ["yourbusiness", "rosecafe", "luna-studio", "brightplumbing", "themakery"];

// Typewriter that cycles through example slugs in the address bar.
function useTypewriter(words: string[]) {
  const [text, setText] = useState(words[0]);
  const idx = useRef(0);
  const sub = useRef(words[0].length);
  const deleting = useRef(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setText(words[0]);
      return;
    }
    let timer: number;
    const tick = () => {
      const word = words[idx.current];
      if (!deleting.current) {
        sub.current += 1;
        setText(word.slice(0, sub.current));
        if (sub.current >= word.length) {
          deleting.current = true;
          timer = window.setTimeout(tick, 1600);
          return;
        }
        timer = window.setTimeout(tick, 90);
      } else {
        sub.current -= 1;
        setText(word.slice(0, sub.current));
        if (sub.current <= 0) {
          deleting.current = false;
          idx.current = (idx.current + 1) % words.length;
          timer = window.setTimeout(tick, 240);
          return;
        }
        timer = window.setTimeout(tick, 45);
      }
    };
    timer = window.setTimeout(tick, 1600);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return text;
}

export function UrlHook() {
  const slug = useTypewriter(EXAMPLES);

  return (
    <section className="relative overflow-hidden bg-ua-bg px-6 py-24 md:px-10 md:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <h2
            className="relative inline-block text-4xl font-black leading-[1.05] tracking-tight text-ua-ink sm:text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-epilogue)" }}
          >
            Live online — no domain to buy.
            <Sticker
              name="earth"
              size={96}
              rotate={-9}
              className="pointer-events-none absolute -right-16 -top-12 z-10 hidden sm:block md:-right-24"
            />
          </h2>
        </Reveal>

        {/* Browser window mock with the animated address. */}
        <Reveal>
          <div className="mx-auto mt-14 max-w-2xl overflow-hidden rounded-2xl border-2 border-ua-ink bg-white shadow-[8px_8px_0_var(--ua-ink)]">
            <div className="flex items-center gap-2 border-b-2 border-ua-ink/15 bg-ua-bg px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-ua-orange" aria-hidden />
              <span className="h-3 w-3 rounded-full bg-ua-green" aria-hidden />
              <span className="h-3 w-3 rounded-full bg-ua-sky" aria-hidden />
            </div>
            <div className="px-4 py-6 sm:px-8 sm:py-8">
              <div className="mx-auto flex w-full max-w-md items-center gap-2 rounded-full border-2 border-ua-ink/20 bg-ua-bg px-4 py-3 text-left">
                <span aria-hidden className="text-ua-ink/40">🔒</span>
                <span
                  className="truncate text-base font-bold text-ua-ink sm:text-lg"
                  style={{ fontFamily: "var(--font-epilogue)" }}
                >
                  {SITE.domain}/<span className="text-ua-blue">{slug}</span>
                  <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-ua-ink align-middle" style={{ height: "1.1em" }} aria-hidden />
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <p className="mx-auto mt-12 max-w-2xl text-lg text-ua-ink/80 md:text-xl">
            No domains to buy. No hosting to wrestle with. We design, build and
            host your site — and it goes live at{" "}
            <span className="font-bold text-ua-ink">{SITE.domain}/yourbusiness</span>.
            Want your own custom domain down the line? We&apos;ll connect it for you.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
