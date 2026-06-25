import { Schibsted_Grotesk, Inter } from "next/font/google";

// ── Fonts: refined editorial grotesque + clean sans ──
export const display = Schibsted_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-sr-display", display: "swap" });
export const body = Inter({ subsets: ["latin"], variable: "--font-sr-body", display: "swap" });

// ── Palette: cream + ink + slate blue-green accent ──
// cream #ffffff · paper #f6f5f2 · ink #15130f · slate #3f5d5a

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

// Pexels stock marble imagery (licence-free) for clean hero sections.
export const PEXELS = {
  hero: "/marketing/stone/pexels-hero.jpg",
  craft: "/marketing/stone/pexels-craft.jpg",
  portfolio: "/marketing/stone/pexels-port.jpg",
  contact: "/marketing/stone/pexels-contact.jpg",
};

// before / after pairs (same piece, before → after) for the sliders
export const PAIRS = [
  { before: IMG.graniteBar1, after: IMG.graniteBar2, t: "Granite bar top", b: "Chipped edge rebuilt, surface polished back to gloss." },
  { before: IMG.stairs1, after: IMG.repairs1, t: "Marble staircase", b: "Stained and damaged steps repaired and protected." },
  { before: IMG.statue1, after: IMG.statue2, t: "Stone Buddha", b: "Weathered statue cleaned, repaired and re-finished." },
  { before: IMG.repairA, after: IMG.repairB, t: "Stone hearth", b: "Broken hearth rebuilt and finished seamlessly." },
];

export const PORTFOLIO = [
  { src: IMG.fireplace2, t: "Rosso Levanto fireplace", b: "Red marble surround restored to a deep shine." },
  { src: IMG.mosaic2, t: "Mosaic floor", b: "Deep-cleaned, honed and sealed." },
  { src: IMG.graniteBar2, t: "Granite bar top", b: "Edge rebuilt and polished back to gloss." },
  { src: IMG.statue2, t: "Stone Buddha", b: "Cleaned, repaired and re-finished." },
  { src: IMG.repairs1, t: "Marble staircase", b: "Repaired, polished and protected." },
];

// ── Buttons (bold pills) ──
export const btnInk =
  "group inline-flex items-center justify-center gap-2 rounded-full bg-[#15130f] px-7 py-3.5 text-sm font-semibold text-[#ffffff] transition-colors hover:bg-[#3f5d5a]";
export const btnOutline =
  "group inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#15130f] px-7 py-3.5 text-sm font-semibold text-[#15130f] transition-colors hover:bg-[#15130f] hover:text-[#ffffff]";
export const btnSlate =
  "group inline-flex items-center justify-center gap-2 rounded-full bg-[#3f5d5a] px-7 py-3.5 text-sm font-semibold text-[#ffffff] transition-colors hover:bg-[#2c4340]";

export const Arrow = () => (
  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
);

export const fd = "font-[family-name:var(--font-sr-display)]";

// ── Hand-drawn doodles (slate) ──
export function Underline({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 18" preserveAspectRatio="none" className={className} fill="none" aria-hidden>
      <path d="M3 12C52 6 110 5 160 7c46 2 92 5 137 3" stroke="#3f5d5a" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}
export function Lasso({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 100" className={className} fill="none" aria-hidden>
      <path d="M150 8c-44-7-110-2-132 18-18 17-7 44 28 56 42 14 122 13 156-9 26-17 19-46-14-60C170 4 120 3 96 6" stroke="#3f5d5a" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}
export function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 40" className={className} fill="none" aria-hidden>
      <path d="M6 30c6-10 10-12 14-6s8 8 14-2 10-14 16-8" stroke="#3f5d5a" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

// ── Section kicker (bold display label + short rule, no AI dot/eyebrow) ──
export function Label({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-3 ${fd} text-sm font-semibold leading-none ${light ? "text-[#ffffff]" : "text-[#3f5d5a]"}`}>
      <span className={`h-[3px] w-9 rounded-full ${light ? "bg-[#ffffff]" : "bg-[#3f5d5a]"}`} aria-hidden />
      {children}
    </span>
  );
}

// ── Inner-page hero: clean Pexels marble image with overlaid bold type ──
export function PageHero({ eyebrow, title, accent, intro, img: image }: { eyebrow: string; title: string; accent?: string; intro: string; img: string }) {
  return (
    <section className="relative overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt="" data-parallax className="absolute inset-0 h-[114%] w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff]/94 via-[#ffffff]/74 to-[#ffffff]/30" />
      <div className="relative mx-auto w-full max-w-6xl px-5 pb-14 pt-32 md:px-8 md:pb-20 md:pt-44">
        <Label>{eyebrow}</Label>
        <h1 className={`mt-7 ${fd} text-[2.9rem] font-semibold leading-[0.95] tracking-[-0.02em] text-[#15130f] md:text-7xl`}>
          {title} {accent && <span className="italic text-[#3f5d5a]">{accent}</span>}
        </h1>
        <p className="mt-6 max-w-xl text-lg font-light text-[#15130f]/75">{intro}</p>
      </div>
    </section>
  );
}
