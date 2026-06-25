"use client";

/* eslint-disable @next/next/no-img-element */
import { useCallback, useRef, useState } from "react";

export function BeforeAfter({ before, after, label, className = "" }: { before: string; after: string; label?: string; className?: string }) {
  const [pct, setPct] = useState(55);
  const wrap = useRef<HTMLDivElement>(null);
  const drag = useRef(false);

  const set = useCallback((clientX: number) => {
    const el = wrap.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPct(Math.max(2, Math.min(98, ((clientX - r.left) / r.width) * 100)));
  }, []);

  return (
    <div
      ref={wrap}
      className={`group relative select-none overflow-hidden ${className}`}
      style={{ touchAction: "none", cursor: "ew-resize" }}
      onPointerDown={(e) => { drag.current = true; (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId); set(e.clientX); }}
      onPointerMove={(e) => { if (drag.current) set(e.clientX); }}
      onPointerUp={() => { drag.current = false; }}
      onPointerCancel={() => { drag.current = false; }}
    >
      {/* after (full) */}
      <img src={after} alt="After repair" draggable={false} className="block h-full w-full object-cover" />
      <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-[#3f5d5a] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#ffffff]">After</span>

      {/* before (clipped) */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}>
        <img src={before} alt="Before repair" draggable={false} className="block h-full w-full object-cover" />
        <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-[#15130f]/85 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#ffffff]">Before</span>
      </div>

      {/* handle */}
      <div className="pointer-events-none absolute inset-y-0" style={{ left: `${pct}%`, transform: "translateX(-50%)" }}>
        <div className="absolute inset-y-0 left-1/2 w-[3px] -translate-x-1/2 bg-[#ffffff]" />
        <div className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#ffffff] text-[#15130f] shadow-[0_4px_18px_rgba(21,19,15,0.35)]">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 7 4 12l5 5M15 7l5 5-5 5" /></svg>
        </div>
      </div>

      {label && <span className="pointer-events-none absolute bottom-4 left-4 rounded-full bg-[#ffffff]/90 px-3 py-1 text-[11px] font-bold text-[#15130f]">{label}</span>}
      <span className="pointer-events-none absolute bottom-4 right-4 rounded-full bg-[#15130f]/70 px-3 py-1 text-[11px] font-semibold text-[#ffffff] opacity-100 transition-opacity duration-500 group-hover:opacity-0">← drag →</span>
    </div>
  );
}
