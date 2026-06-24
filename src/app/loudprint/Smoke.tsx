/* The "smokey" atmosphere: large, soft, slow-drifting haze plumes layered over
   the light canvas, plus a faint SVG grain for texture. Pure CSS motion (see
   lp.css) so it stays smooth and needs no JS or external assets. Decorative —
   hidden from assistive tech and disabled under reduced-motion. */
export function Smoke({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <div className={`lp-smoke lp-smoke--${tone}`} aria-hidden>
      <span className="lp-plume lp-plume--1" />
      <span className="lp-plume lp-plume--2" />
      <span className="lp-plume lp-plume--3" />
      <span className="lp-plume lp-plume--4" />
      <svg className="lp-grain" width="100%" height="100%">
        <filter id="lp-grain-f">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#lp-grain-f)" />
      </svg>
    </div>
  );
}
