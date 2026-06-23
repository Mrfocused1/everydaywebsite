import { Space_Grotesk } from "next/font/google";

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

// ── Brand contact ──
export const PHONE_1_DISPLAY = "07956 318 133";
export const PHONE_1_TEL = "tel:07956318133";
export const PHONE_2_DISPLAY = "07717 196 313";
export const PHONE_2_TEL = "tel:07717196313";
export const EMAIL = "burgesselectricalcontractors@gmail.com";
export const AREA = "East London & surrounding areas";

export const NAV = [
  { label: "Home", href: "/burgess" },
  { label: "Services", href: "/burgess/services" },
  { label: "About", href: "/burgess/about" },
  { label: "Contact", href: "/burgess/contact" },
];

// ── Imagery (Pexels) ──
const px = (id: string, w: number, h: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=${w}&h=${h}`;

export const IMG = {
  hero: px("17842832", 1600, 1080),
  night: px("34519257", 1400, 1000),
  about: px("7285965", 1200, 1400),
  about2: px("257736", 1200, 900),
  panel: px("28950842", 1100, 850),
  fusebox: px("32497160", 1100, 850),
  emergency: px("17321814", 1100, 850),
  ev: px("9800006", 1100, 850),
  solar: px("9875418", 1100, 850),
  cctv: px("96612", 1100, 850),
  lighting: px("35326200", 1100, 850),
  industrial: px("28265032", 1100, 850),
};

// ── Accreditations ──
export const ACCREDS = ["NICEIC Approved", "CHAS Accredited", "ELECSA Registered", "Part P Compliant"];

// ── Clip-paths (mixed image edges) ──
export const CUT_TR = "polygon(0 0, calc(100% - 2.75rem) 0, 100% 2.75rem, 100% 100%, 0 100%)";
export const CUT_BL = "polygon(0 0, 100% 0, 100% 100%, 2.75rem 100%, 0 calc(100% - 2.75rem))";

// ── Blueprint grid background (inline style) ──
export const GRID_BG: React.CSSProperties = {
  backgroundImage:
    "linear-gradient(rgba(22,34,94,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(22,34,94,0.05) 1px, transparent 1px)",
  backgroundSize: "46px 46px",
};

// ── Buttons (sharp/industrial — distinct from the others' pills) ──
export const btnYellow =
  "group inline-flex items-center justify-center gap-2.5 bg-[#ffd400] px-7 py-4 text-sm font-semibold uppercase tracking-wide text-[#16225e] transition-colors hover:bg-[#f2c200]";
export const btnNavy =
  "group inline-flex items-center justify-center gap-2.5 bg-[#16225e] px-7 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#0f1845]";
export const btnGhostDark =
  "group inline-flex items-center justify-center gap-2.5 border border-white/25 px-7 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:border-[#ffd400] hover:text-[#ffd400]";
export const btnGhostLight =
  "group inline-flex items-center justify-center gap-2.5 border border-[#16225e]/25 px-7 py-4 text-sm font-semibold uppercase tracking-wide text-[#16225e] transition-colors hover:bg-[#16225e] hover:text-white";

export const Arrow = () => (
  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
);

// ── Label: yellow square marker + uppercase (no pill badge) ──
export function Label({ children, onDark = false }: { children: React.ReactNode; onDark?: boolean }) {
  return (
    <p className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] ${onDark ? "text-white/70" : "text-[#16225e]"}`}>
      <span className="h-2.5 w-2.5 bg-[#ffd400]" aria-hidden /> {children}
    </p>
  );
}

// ── Image-led page hero (full-bleed photo, navy scrim, no colour slab) ──
export function PageHero({ eyebrow, title, intro, img, imgAlt }: { eyebrow: string; title: string; intro: string; img: string; imgAlt: string }) {
  return (
    <section className="relative isolate flex min-h-[20rem] items-end overflow-hidden md:min-h-[27rem]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={img} alt={imgAlt} className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0c1230]/92 via-[#0c1230]/55 to-[#0c1230]/25" />
      <div className="absolute inset-0 -z-10 opacity-60" style={GRID_BG} />
      <div className="mx-auto w-full max-w-6xl px-5 pb-10 pt-28 text-white md:px-8 md:pb-14">
        <p className="hero-fade flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.28em] text-white/70 opacity-0" style={{ transform: "translateY(8px)" }}>
          <span className="h-2.5 w-2.5 bg-[#ffd400]" aria-hidden /> {eyebrow}
        </p>
        <h1 className="hero-h mt-5 text-[2.6rem] font-bold uppercase leading-[0.95] tracking-tight md:text-[4rem]">
          <span className="block overflow-hidden"><span className="hero-line-inner block" style={{ transform: "translateY(110%)" }}>{title}</span></span>
        </h1>
        <span className="mt-5 block h-1 w-16 bg-[#ffd400]" aria-hidden />
        <p className="hero-fade mt-5 max-w-xl text-base font-light text-white/85 opacity-0 md:text-lg" style={{ transform: "translateY(8px)" }}>{intro}</p>
      </div>
    </section>
  );
}
