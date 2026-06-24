/* Bespoke SVG product renders for Loud Pack Printing. The brand's craft is
   holographic foil, spot-gloss and embossing, so each product carries a
   holo-foil gradient and soft gloss highlights. Self-contained — no external
   imagery — so they render crisply at any size on the light, smokey canvas. */

// Shared holo-foil + gloss defs. Rendered once; ids are referenced by all products.
export function ProductDefs() {
  return (
    <svg width="0" height="0" aria-hidden style={{ position: "absolute" }}>
      <defs>
        <linearGradient id="lp-holo" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7be0d4" />
          <stop offset="22%" stopColor="#8ea2ff" />
          <stop offset="46%" stopColor="#c98bff" />
          <stop offset="68%" stopColor="#ff9bc7" />
          <stop offset="86%" stopColor="#ffd98a" />
          <stop offset="100%" stopColor="#b6ff8a" />
        </linearGradient>
        <linearGradient id="lp-holo-soft" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#cfe9ff" />
          <stop offset="40%" stopColor="#e7d6ff" />
          <stop offset="72%" stopColor="#ffe1ee" />
          <stop offset="100%" stopColor="#e9ffd9" />
        </linearGradient>
        <linearGradient id="lp-glass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a2b52" />
          <stop offset="35%" stopColor="#211634" />
          <stop offset="100%" stopColor="#0c0814" />
        </linearGradient>
        <linearGradient id="lp-gloss" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="48%" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="lp-ink" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#23201d" />
          <stop offset="100%" stopColor="#0c0a09" />
        </linearGradient>
      </defs>
    </svg>
  );
}

type P = { className?: string };

/* Stand-up Mylar pouch with a holo front panel, zip seal and tear notch. */
export function MylarBag({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 220 260" fill="none" aria-hidden>
      <ellipse cx="112" cy="244" rx="78" ry="10" fill="#000" opacity="0.12" />
      {/* gusset back */}
      <path d="M44 34h132a8 8 0 0 1 8 8v186a10 10 0 0 1-10 10H46a10 10 0 0 1-10-10V42a8 8 0 0 1 8-8Z" fill="url(#lp-ink)" />
      {/* front holo panel */}
      <path d="M52 44h116a6 6 0 0 1 6 6v170a6 6 0 0 1-6 6H52a6 6 0 0 1-6-6V50a6 6 0 0 1 6-6Z" fill="url(#lp-holo)" opacity="0.92" />
      <path d="M52 44h116a6 6 0 0 1 6 6v170a6 6 0 0 1-6 6H52a6 6 0 0 1-6-6V50a6 6 0 0 1 6-6Z" fill="url(#lp-gloss)" opacity="0.25" />
      {/* zip + top seal */}
      <rect x="40" y="30" width="140" height="9" rx="4" fill="url(#lp-ink)" />
      <path d="M44 50h132" stroke="#0c0a09" strokeWidth="2" opacity="0.4" />
      <path d="M165 24l10-6v12l-10-6Z" fill="#0c0a09" />
      {/* badge */}
      <circle cx="110" cy="118" r="34" fill="#0c0a09" />
      <circle cx="110" cy="118" r="34" stroke="url(#lp-holo-soft)" strokeWidth="2" />
      <text x="110" y="113" textAnchor="middle" fontFamily="var(--font-lp-display), sans-serif" fontWeight="800" fontSize="15" fill="#fff">LOUD</text>
      <text x="110" y="131" textAnchor="middle" fontFamily="var(--font-lp-display), sans-serif" fontWeight="800" fontSize="15" fill="#fff">PACK</text>
      <path d="M70 172h80M70 184h54" stroke="#0c0a09" strokeWidth="3" strokeLinecap="round" opacity="0.55" />
    </svg>
  );
}

/* UV Miron jar — violet-black glass body, screw lid, embossed label band. */
export function MironJar({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 200 260" fill="none" aria-hidden>
      <ellipse cx="100" cy="246" rx="64" ry="9" fill="#000" opacity="0.12" />
      {/* lid */}
      <rect x="58" y="20" width="84" height="34" rx="8" fill="url(#lp-ink)" />
      <rect x="58" y="20" width="84" height="34" rx="8" fill="url(#lp-gloss)" opacity="0.12" />
      <path d="M64 28v18M74 28v18M84 28v18M94 28v18M104 28v18M114 28v18M124 28v18M134 28v18" stroke="#000" strokeWidth="1.4" opacity="0.4" />
      {/* glass body */}
      <path d="M62 58c0-4 4-6 8-6h60c4 0 8 2 8 6v158c0 12-10 20-26 20H88c-16 0-26-8-26-20V58Z" fill="url(#lp-glass)" />
      {/* violet UV sheen */}
      <path d="M62 58c0-4 4-6 8-6h60c4 0 8 2 8 6v158c0 12-10 20-26 20H88c-16 0-26-8-26-20V58Z" fill="url(#lp-holo)" opacity="0.14" />
      {/* highlight streak */}
      <rect x="74" y="70" width="10" height="150" rx="5" fill="#fff" opacity="0.16" />
      {/* embossed label band */}
      <rect x="70" y="120" width="60" height="64" rx="6" fill="#fff" opacity="0.06" stroke="url(#lp-holo-soft)" strokeWidth="1.5" />
      <text x="100" y="150" textAnchor="middle" fontFamily="var(--font-lp-display), sans-serif" fontWeight="800" fontSize="13" fill="#fff" opacity="0.92">MIRON</text>
      <text x="100" y="168" textAnchor="middle" fontFamily="var(--font-lp-sans), sans-serif" fontWeight="600" fontSize="8" letterSpacing="2" fill="#fff" opacity="0.6">UV GLASS</text>
    </svg>
  );
}

/* Die-cut sticker sheet with holo shine on each cut. */
export function StickerSheet({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 240 260" fill="none" aria-hidden>
      <ellipse cx="120" cy="246" rx="86" ry="9" fill="#000" opacity="0.1" />
      <rect x="30" y="24" width="180" height="216" rx="10" fill="#fff" stroke="#e7e2d8" strokeWidth="2" />
      <rect x="30" y="24" width="180" height="216" rx="10" fill="url(#lp-gloss)" opacity="0.08" />
      {/* circle sticker */}
      <circle cx="82" cy="84" r="34" fill="url(#lp-holo)" />
      <circle cx="82" cy="84" r="34" stroke="#fff" strokeWidth="3" />
      <circle cx="82" cy="84" r="34" fill="url(#lp-gloss)" opacity="0.3" />
      {/* star sticker */}
      <path d="M160 52l8 16 18 2-13 12 4 18-17-9-17 9 4-18-13-12 18-2 8-16Z" fill="url(#lp-holo-soft)" stroke="#fff" strokeWidth="3" />
      {/* rounded-rect sticker */}
      <rect x="48" y="140" width="72" height="48" rx="12" fill="#0c0a09" stroke="#fff" strokeWidth="3" />
      <text x="84" y="170" textAnchor="middle" fontFamily="var(--font-lp-display), sans-serif" fontWeight="800" fontSize="15" fill="url(#lp-holo)">LOUD</text>
      {/* shield sticker */}
      <path d="M168 138l28 9v22c0 16-12 28-28 33-16-5-28-17-28-33v-22l28-9Z" fill="url(#lp-holo)" stroke="#fff" strokeWidth="3" />
      <path d="M156 168l8 8 14-15" stroke="#0c0a09" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* Glass ashtray / branded merch — top-down glossy round dish. */
export function GlassDish({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 240 240" fill="none" aria-hidden>
      <ellipse cx="120" cy="128" rx="96" ry="86" fill="url(#lp-glass)" opacity="0.5" />
      <ellipse cx="120" cy="120" rx="96" ry="86" fill="url(#lp-glass)" />
      <ellipse cx="120" cy="120" rx="96" ry="86" fill="url(#lp-holo)" opacity="0.16" />
      <ellipse cx="120" cy="116" rx="64" ry="56" fill="#0c0814" />
      <ellipse cx="120" cy="112" rx="64" ry="56" fill="#000" opacity="0.5" />
      {/* notches */}
      <rect x="186" y="112" width="26" height="12" rx="6" fill="#0c0814" transform="rotate(20 186 112)" />
      <rect x="30" y="120" width="26" height="12" rx="6" fill="#0c0814" transform="rotate(-18 30 120)" />
      {/* gloss highlight */}
      <ellipse cx="92" cy="78" rx="42" ry="16" fill="#fff" opacity="0.18" transform="rotate(-22 92 78)" />
      <text x="120" y="120" textAnchor="middle" fontFamily="var(--font-lp-display), sans-serif" fontWeight="800" fontSize="16" fill="url(#lp-holo)">LOUD PACK</text>
    </svg>
  );
}
