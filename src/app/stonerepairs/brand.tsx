import { Fraunces, Inter } from "next/font/google";

// ── Fonts: editorial serif display + clean sans body ──
export const display = Fraunces({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-sr-display", display: "swap" });
export const body = Inter({ subsets: ["latin"], variable: "--font-sr-body", display: "swap" });

// ── Palette (monochrome ink + bone — no accent colour; the stone is the colour) ──
// ink #1a1815 · bone #f4f1ea · paper #fbfaf7 · stone #e9e3d8

// ── Brand & contact (extracted from stone-repairs.com) ──
export const BIZ = "Stone Repairs";
export const OWNER = "Charles";
export const TAGLINE = "Natural Stone Repair & Restoration";
export const PHONE_DISPLAY = "07802 275065";
export const PHONE_TEL = "tel:07802275065";
export const EMAIL = "stonecare@btinternet.com";
export const EMAIL_HREF = "mailto:stonecare@btinternet.com";
export const WHATSAPP = "https://wa.me/447802275065";
export const COVERAGE = "On site or in the workshop";

export const NAV = [
  { label: "Home", href: "/stonerepairs" },
  { label: "Services", href: "/stonerepairs#services" },
  { label: "Portfolio", href: "/stonerepairs/portfolio" },
  { label: "Contact", href: "/stonerepairs/contact" },
];

export const MATERIALS = ["Marble", "Granite", "Limestone", "Slate", "Sandstone"];
export const SURFACES = ["Floors", "Fireplaces", "Worktops", "Stairs", "Walls", "Statues", "Bars", "Mosaics"];

export const SERVICES = [
  { t: "Breakage & Chip Repair", b: "Breakages, chips and scratches repaired and made good — on site or in the workshop." },
  { t: "Etch & Scratch Polishing", b: "Acid and alcohol etch marks polished out, surfaces re-honed to a flawless finish." },
  { t: "Stain Removal", b: "Yellow and brown staining, oil, rust and wax safely lifted from marble and granite." },
  { t: "Limescale Removal", b: "Limescale removed from marble and granite without damaging the surface of the stone." },
  { t: "Sealing & Treatment", b: "Honing, sealing and finishing to protect natural stone and keep it looking its best." },
  { t: "Full Restoration", b: "Complete restoration of floors, fireplaces, worktops, stairs, statues and more." },
];

export const PROCESS = [
  { n: "01", t: "Send photos", b: "Send a few photos of the damage by email or WhatsApp for a quick response." },
  { n: "02", t: "Advice & quote", b: "I'll assess the stone and come back fast with honest advice and a price." },
  { n: "03", t: "Repaired with care", b: "Most work is done on site; delicate items are restored in the workshop." },
  { n: "04", t: "Restored & sealed", b: "Repaired, polished and sealed — back to its natural best." },
];

export const STATS = [
  { v: "30", suffix: "+", l: "Years' experience" },
  { v: "5", suffix: "", l: "Stone types restored" },
  { v: "100", suffix: "%", l: "My own work" },
];

// ── Imagery ──
const img = (n: string) => `/marketing/stone/${n}.jpg`;
export const IMG = {
  hero: img("hero"),
  fireplace1: img("fireplace-1"),
  fireplace2: img("fireplace-2"),
  statue1: img("statue-1"),
  statue2: img("statue-2"),
  graniteBar1: img("granite-bar-1"),
  graniteBar2: img("granite-bar-2"),
  mosaic1: img("mosaic-1"),
  mosaic2: img("mosaic-2"),
  stairs1: img("stairs-1"),
  repairs1: img("repairs-1"),
  repairA: img("repair-a"),
  repairB: img("repair-b"),
};

export const PORTFOLIO = [
  { src: IMG.fireplace1, t: "Marble fireplace", b: "Cracks and chips repaired and re-polished." },
  { src: IMG.fireplace2, t: "Rosso Levanto fireplace", b: "Red marble surround restored to a deep shine." },
  { src: IMG.statue1, t: "Stone Buddha — before", b: "Weathered, chipped and discoloured." },
  { src: IMG.statue2, t: "Stone Buddha — after", b: "Cleaned, repaired and re-finished." },
  { src: IMG.graniteBar1, t: "Granite bar top — before", b: "Chipped edge and dull, marked surface." },
  { src: IMG.graniteBar2, t: "Granite bar top — after", b: "Edge rebuilt and polished back to gloss." },
  { src: IMG.mosaic1, t: "Mosaic floor — before", b: "Dirty, dull and worn underfoot." },
  { src: IMG.mosaic2, t: "Mosaic floor — after", b: "Deep-cleaned, honed and sealed." },
  { src: IMG.stairs1, t: "Marble staircase — before", b: "Damaged, stained and tired." },
  { src: IMG.repairs1, t: "Marble staircase — after", b: "Repaired, polished and protected." },
  { src: IMG.repairA, t: "Stone hearth — before", b: "Broken and badly worn." },
  { src: IMG.repairB, t: "Stone hearth — after", b: "Rebuilt and finished seamlessly." },
];

// ── Buttons (monochrome) ──
export const btnSolid =
  "group inline-flex items-center justify-center gap-2 rounded-full bg-[#1a1815] px-7 py-3.5 text-sm font-semibold tracking-wide text-[#f4f1ea] transition-colors hover:bg-[#3a352d]";
export const btnOutline =
  "group inline-flex items-center justify-center gap-2 rounded-full border border-[#1a1815]/30 px-7 py-3.5 text-sm font-semibold tracking-wide text-[#1a1815] transition-colors hover:bg-[#1a1815] hover:text-[#f4f1ea]";

export const Arrow = () => (
  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
);

// Display-font utility.
export const fd = "font-[family-name:var(--font-sr-display)]";

// Chamfered (cut top-right corner) — mixed image edges, custom look.
export const CUT = "polygon(0 0, calc(100% - 2.4rem) 0, 100% 2.4rem, 100% 100%, 0 100%)";

// ── Eyebrow label (thin rule + small caps, ink) ──
export function Label({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.26em] ${light ? "text-[#f4f1ea]/70" : "text-[#1a1815]/55"}`}>
      <span className={`h-px w-8 ${light ? "bg-[#f4f1ea]/50" : "bg-[#1a1815]/40"}`} aria-hidden /> {children}
    </p>
  );
}

// ── Inner-page hero (image + dark scrim, editorial) ──
export function PageHero({ eyebrow, title, intro, img: image, imgAlt }: { eyebrow: string; title: string; intro: string; img: string; imgAlt: string }) {
  return (
    <section className="relative overflow-hidden bg-[#1a1815]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt={imgAlt} data-parallax className="absolute inset-0 h-[115%] w-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1815] via-[#1a1815]/55 to-[#1a1815]/25" />
      <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-32 text-[#f4f1ea] md:px-8 md:pb-24 md:pt-44">
        <Label light>{eyebrow}</Label>
        <h1 className={`hero-h mt-6 ${fd} text-[2.8rem] font-medium leading-[1.0] tracking-[-0.015em] md:text-7xl`}>
          <span className="block overflow-hidden"><span className="hero-line-inner block" style={{ transform: "translateY(110%)" }}>{title}</span></span>
        </h1>
        <p className="hero-fade mt-6 max-w-xl text-base font-light text-[#f4f1ea]/75 opacity-0 md:text-lg" style={{ transform: "translateY(8px)" }}>{intro}</p>
      </div>
    </section>
  );
}
