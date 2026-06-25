import { Fraunces, Inter } from "next/font/google";

// ── Fonts: elegant serif display + clean sans body ──
export const display = Fraunces({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-sr-display", display: "swap" });
export const body = Inter({ subsets: ["latin"], variable: "--font-sr-body", display: "swap" });

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

// ── Materials ──
export const MATERIALS = ["Marble", "Granite", "Limestone", "Slate", "Sandstone"];

// ── Surfaces & items ──
export const SURFACES = ["Floors", "Fireplaces", "Worktops", "Stairs", "Walls", "Statues", "Bars", "Mosaics"];

// ── Services ──
export const SERVICES = [
  { t: "Breakage & Chip Repair", b: "Breakages, chips and scratches repaired and made good — on site or in the workshop." },
  { t: "Etch & Scratch Polishing", b: "Acid and alcohol etch marks polished out, surfaces re-honed and brought back to a flawless finish." },
  { t: "Stain Removal", b: "Yellow and brown staining, oil, rust and wax safely lifted from marble and granite." },
  { t: "Limescale Removal", b: "Limescale removed from marble and granite without damaging the surface of the stone." },
  { t: "Sealing & Treatment", b: "Honing, sealing and finishing to protect natural stone and keep it looking its best." },
  { t: "Full Restoration", b: "Complete restoration of floors, fireplaces, worktops, stairs, statues and more." },
];

// ── How it works ──
export const PROCESS = [
  { n: "01", t: "Send photos", b: "Send a few photos of the damage by email or WhatsApp for a quick response." },
  { n: "02", t: "Advice & quote", b: "I'll assess the stone and come back to you fast with honest advice and a price." },
  { n: "03", t: "Repaired with care", b: "Most work is done on site; delicate items are restored in the workshop." },
  { n: "04", t: "Restored & sealed", b: "Your stone is repaired, polished and sealed — back to its natural best." },
];

// ── Stats ──
export const STATS = [
  { v: "30", suffix: "+", l: "Years' experience" },
  { v: "5", suffix: "", l: "Stone types restored" },
  { v: "100", suffix: "%", l: "My own work" },
  { v: "1", suffix: "", l: "Day quick response", note: true },
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

// ── Portfolio (real repairs from stone-repairs.com) ──
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

// ── Buttons ──
export const btnSolid =
  "group inline-flex items-center justify-center gap-2 rounded-full bg-[#1f1b16] px-7 py-3.5 text-sm font-semibold tracking-wide text-[#f7f3ec] transition-colors hover:bg-[#9a7a48]";
export const btnOutline =
  "group inline-flex items-center justify-center gap-2 rounded-full border border-[#1f1b16]/25 px-7 py-3.5 text-sm font-semibold tracking-wide text-[#1f1b16] transition-colors hover:border-[#9a7a48] hover:text-[#9a7a48]";
export const btnGold =
  "group inline-flex items-center justify-center gap-2 rounded-full bg-[#9a7a48] px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-[#7c6038]";

export const Arrow = () => (
  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
);

// Display-font utility.
export const fd = "font-[family-name:var(--font-sr-display)]";

// ── Eyebrow label (thin rule + small caps) ──
export function Label({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] ${light ? "text-[#9a7a48]" : "text-[#9a7a48]"}`}>
      <span className="h-px w-7 bg-[#9a7a48]" aria-hidden /> {children}
    </p>
  );
}

// ── Page hero (inner pages): light, image-led ──
export function PageHero({ eyebrow, title, intro, img: image, imgAlt }: { eyebrow: string; title: string; intro: string; img: string; imgAlt: string }) {
  return (
    <section className="relative overflow-hidden bg-[#1f1b16]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt={imgAlt} data-parallax className="absolute inset-0 h-[115%] w-full object-cover opacity-45" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1f1b16] via-[#1f1b16]/55 to-[#1f1b16]/30" />
      <div className="relative mx-auto w-full max-w-6xl px-5 pb-14 pt-32 text-[#f7f3ec] md:px-8 md:pb-20 md:pt-40">
        <Label light>{eyebrow}</Label>
        <h1 className={`hero-h mt-5 ${fd} text-[2.7rem] font-medium leading-[1.02] tracking-[-0.01em] md:text-6xl`}>
          <span className="block overflow-hidden"><span className="hero-line-inner block" style={{ transform: "translateY(110%)" }}>{title}</span></span>
        </h1>
        <p className="hero-fade mt-5 max-w-xl text-base font-light text-[#f7f3ec]/80 opacity-0 md:text-lg" style={{ transform: "translateY(8px)" }}>{intro}</p>
      </div>
    </section>
  );
}
