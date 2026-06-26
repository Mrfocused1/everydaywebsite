import { Space_Grotesk } from "next/font/google";

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

// ── Brand contact ──
// (Numbers taken from mdroofinglandscaping.weebly.com. Email is a sensible
//  placeholder — the source site lists no email — replace before go-live.)
export const PHONE_1_DISPLAY = "0800 292 7569";
export const PHONE_1_TEL = "tel:08002927569";
export const PHONE_2_DISPLAY = "07917 372622";
export const PHONE_2_TEL = "tel:07917372622";
export const EMAIL = "info@mdroofinglandscaping.co.uk";
export const AREA = "Nationwide — UK-wide coverage";

export const NAV = [
  { label: "Home", href: "/mdroofing" },
  { label: "Services", href: "/mdroofing/services" },
  { label: "Gallery", href: "/mdroofing/gallery" },
  { label: "About", href: "/mdroofing/about" },
  { label: "Contact", href: "/mdroofing/contact" },
];

// ── Imagery (Pexels stock — licence-free, optimised) ──
const md = (n: string) => `/marketing/md/md-${n}.jpg`;

export const IMG = {
  hero: md("hero"),            // smart house / driveway hero
  roofing: md("roofing"),      // pitched tiled/slate roof
  flatroof: md("flatroof"),    // flat roof detail
  paving: md("paving"),        // block paving driveway
  patio: md("patio"),          // paved patio
  landscaping: md("landscaping"), // landscaped garden
  fencing: md("fencing"),      // timber fence
  wall: md("wall"),            // brick / stone garden wall
  fascia: md("fascia"),        // guttering / roofline
  chimney: md("chimney"),      // chimney / ridge
  render: md("render"),        // rendered house exterior
  extension: md("extension"),  // building work / extension
  builders: md("builders"),    // tradesmen on site
  driveway2: md("driveway2"),  // second driveway
  garden2: md("garden2"),      // second garden
  tools: md("tools"),          // tools / materials
};

// Full gallery (Pexels job-style photos). `big` tiles span 2×2 for editorial rhythm.
export const GALLERY: { src: string; alt: string; big?: boolean }[] = [
  { src: IMG.paving, alt: "Block-paved driveway, laid pattern", big: true },
  { src: IMG.roofing, alt: "New pitched tiled roof" },
  { src: IMG.patio, alt: "Paved garden patio" },
  { src: IMG.landscaping, alt: "Landscaped garden with lawn and planting" },
  { src: IMG.fencing, alt: "New timber garden fencing" },
  { src: IMG.hero, alt: "Completed driveway and house frontage", big: true },
  { src: IMG.wall, alt: "Brick garden wall" },
  { src: IMG.flatroof, alt: "Flat roof installation" },
  { src: IMG.fascia, alt: "UPVC fascias, soffits and guttering" },
  { src: IMG.render, alt: "Rendered house exterior" },
  { src: IMG.driveway2, alt: "Block paving driveway with kerbs", big: true },
  { src: IMG.chimney, alt: "Chimney and ridge repair" },
  { src: IMG.garden2, alt: "Landscaped outdoor space" },
  { src: IMG.extension, alt: "Roofing on a house extension" },
  { src: IMG.builders, alt: "Our team on site" },
  { src: IMG.tools, alt: "Paving tools and materials", big: true },
];

// ── Trust badges ──
export const ACCREDS = ["Established 1990", "5-Year Guarantee", "Approved Contractor", "Nationwide Coverage"];

// ── Clip-paths (mixed image edges) ──
export const CUT_TR = "polygon(0 0, calc(100% - 2.75rem) 0, 100% 2.75rem, 100% 100%, 0 100%)";
export const CUT_BL = "polygon(0 0, 100% 0, 100% 100%, 2.75rem 100%, 0 calc(100% - 2.75rem))";

// ── Blueprint grid background (inline style) ──
export const GRID_BG: React.CSSProperties = {
  backgroundImage:
    "linear-gradient(rgba(26,58,42,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(26,58,42,0.05) 1px, transparent 1px)",
  backgroundSize: "46px 46px",
};

// ── Buttons (sharp/industrial; green is the brand accent) ──
export const btnYellow =
  "group inline-flex items-center justify-center gap-2.5 bg-[#3f8f47] px-7 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#327a3a]";
export const btnNavy =
  "group inline-flex items-center justify-center gap-2.5 bg-[#1a3a2a] px-7 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#0a1610]";
export const btnGhostDark =
  "group inline-flex items-center justify-center gap-2.5 border border-white/25 px-7 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:border-[#3f8f47] hover:text-[#86c98e]";
export const btnGhostLight =
  "group inline-flex items-center justify-center gap-2.5 border border-[#1a3a2a]/25 px-7 py-4 text-sm font-semibold uppercase tracking-wide text-[#1a3a2a] transition-colors hover:bg-[#1a3a2a] hover:text-white";

export const Arrow = () => (
  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
);

// ── Label: green square marker + uppercase (no pill badge) ──
export function Label({ children, onDark = false }: { children: React.ReactNode; onDark?: boolean }) {
  return (
    <p className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] ${onDark ? "text-white/70" : "text-[#1a3a2a]"}`}>
      <span className="h-2.5 w-2.5 bg-[#3f8f47]" aria-hidden /> {children}
    </p>
  );
}

// ── Image-led page hero (full-bleed photo, dark scrim, no colour slab) ──
export function PageHero({ eyebrow, title, intro, img, imgAlt }: { eyebrow: string; title: string; intro: string; img: string; imgAlt: string }) {
  return (
    <section className="relative isolate flex min-h-[20rem] items-end overflow-hidden md:min-h-[27rem]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={img} alt={imgAlt} className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0d1c13]/92 via-[#0d1c13]/55 to-[#0d1c13]/25" />
      <div className="absolute inset-0 -z-10 opacity-60" style={GRID_BG} />
      <div className="mx-auto w-full max-w-6xl px-5 pb-10 pt-28 text-white md:px-8 md:pb-14">
        <p className="hero-fade flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.28em] text-white/70 opacity-0" style={{ transform: "translateY(8px)" }}>
          <span className="h-2.5 w-2.5 bg-[#3f8f47]" aria-hidden /> {eyebrow}
        </p>
        <h1 className="hero-h mt-5 text-[2.6rem] font-bold uppercase leading-[0.95] tracking-tight md:text-[4rem]">
          <span className="block overflow-hidden"><span className="hero-line-inner block" style={{ transform: "translateY(110%)" }}>{title}</span></span>
        </h1>
        <span className="mt-5 block h-1 w-16 bg-[#3f8f47]" aria-hidden />
        <p className="hero-fade mt-5 max-w-xl text-base font-light text-white/85 opacity-0 md:text-lg" style={{ transform: "translateY(8px)" }}>{intro}</p>
      </div>
    </section>
  );
}
