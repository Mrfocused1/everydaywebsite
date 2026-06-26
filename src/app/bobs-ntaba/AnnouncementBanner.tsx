"use client";

import { useState } from "react";
import { COND, MATCHDAY } from "./brand";

export function AnnouncementBanner() {
  const [show, setShow] = useState(true);
  if (!show) return null;
  return (
    <div className="relative z-40 bg-[#c99a3b] text-[#0c0b0a]">
      <div className="relative mx-auto flex max-w-[1200px] items-center justify-center gap-3 px-5 py-2.5 text-center">
        <p className={`${COND} tracking-[0.14em] text-sm md:text-base`}>{MATCHDAY.short}</p>
        <button
          aria-label="Dismiss"
          onClick={() => setShow(false)}
          className="absolute right-4 text-lg leading-none text-[#0c0b0a]/60 hover:text-[#0c0b0a]"
        >
          ×
        </button>
      </div>
    </div>
  );
}
