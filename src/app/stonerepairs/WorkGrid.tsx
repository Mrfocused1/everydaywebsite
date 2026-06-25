"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { fd } from "./brand";

type Item = { src: string; t: string; b: string };

export function WorkGrid({ items, variant = "grid" }: { items: Item[]; variant?: "grid" | "carousel" }) {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(null); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open]);

  const wrap =
    variant === "carousel"
      ? "-mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden"
      : "mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <>
      <div className={wrap} data-stagger>
        {items.map((w, i) =>
          variant === "carousel" ? (
            <figure key={w.src} className="group w-[58%] shrink-0 snap-start sm:w-auto">
              <button type="button" onClick={() => setOpen(i)} aria-label={`View ${w.t}`} className="block w-full overflow-hidden rounded-2xl border-2 border-[#15130f] shadow-[5px_5px_0_#15130f]">
                <img src={w.src} alt={w.t} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </button>
              <figcaption className="mt-3 text-sm font-semibold text-[#15130f]">{w.t}</figcaption>
            </figure>
          ) : (
            <figure key={w.src} className="group overflow-hidden rounded-2xl border-2 border-[#15130f] bg-white shadow-[6px_6px_0_#15130f]">
              <button type="button" onClick={() => setOpen(i)} aria-label={`View ${w.t}`} className="block w-full overflow-hidden">
                <img src={w.src} alt={w.t} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </button>
              <figcaption className="border-t-2 border-[#15130f] p-5">
                <h3 className={`${fd} text-lg font-semibold text-[#15130f]`}>{w.t}</h3>
                <p className="mt-1.5 text-sm font-light leading-relaxed text-[#15130f]/60">{w.b}</p>
              </figcaption>
            </figure>
          )
        )}
      </div>

      {open !== null && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#15130f]/92 p-4 sm:p-8" role="dialog" aria-modal="true" onClick={() => setOpen(null)}>
          <button type="button" aria-label="Close" onClick={() => setOpen(null)} className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#15130f] transition-colors hover:bg-[#eef1f0] sm:right-6 sm:top-6">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M18 6 6 18" /></svg>
          </button>
          <figure className="max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img src={items[open].src} alt={items[open].t} className="mx-auto max-h-[80vh] w-auto rounded-xl object-contain" />
            <figcaption className="mt-4 text-center text-sm text-white/80"><span className={`${fd} font-semibold text-white`}>{items[open].t}</span> — {items[open].b}</figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
