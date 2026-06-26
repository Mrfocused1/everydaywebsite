import { COND, CUT_TL, SITE } from "./brand";

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <path
        d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24c1.1.37 2.3.57 3.5.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.2.2 2.4.57 3.5a1 1 0 0 1-.24 1l-2.23 2.3Z"
        fill="currentColor"
      />
    </svg>
  );
}

// Pinned call-to-action: sticky bottom bar on mobile, floating pill on desktop.
export function CallNow() {
  return (
    <>
      <a
        href={`tel:${SITE.phone}`}
        className={`${COND} fixed inset-x-0 bottom-0 z-50 flex items-center justify-center gap-2 bg-[#c99a3b] py-2.5 text-sm tracking-widest text-[#0c0b0a] shadow-[0_-8px_24px_rgba(0,0,0,0.5)] md:hidden`}
      >
        <PhoneIcon />
        Call Now to Order
      </a>

      <a
        href={`tel:${SITE.phone}`}
        className={`${COND} fixed bottom-6 right-6 z-50 hidden items-center gap-3 bg-[#c99a3b] py-3.5 pl-5 pr-6 text-base tracking-widest text-[#0c0b0a] shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-colors hover:bg-[#e2bb6b] md:flex`}
        style={{ clipPath: CUT_TL }}
      >
        <PhoneIcon />
        <span className="flex flex-col leading-none">
          <span className="text-[0.62rem] tracking-[0.2em] text-[#0c0b0a]/70">Call now</span>
          <span>{SITE.phoneDisplay}</span>
        </span>
      </a>
    </>
  );
}
