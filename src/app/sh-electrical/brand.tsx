import { Space_Grotesk } from "next/font/google";

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

// ── Brand contact ──
export const PHONE_1_DISPLAY = "07870 895 049";
export const PHONE_1_TEL = "tel:07870895049";
export const PHONE_2_DISPLAY = "07815 046 533";
export const PHONE_2_TEL = "tel:07815046533";
export const EMAIL = "info@shelecmcrltd.co.uk";
export const ADDRESS = "124 Railway Road, Manchester, M32 0QD";
export const AREA = "Manchester & Greater Manchester";

export const NAV = [
  { label: "Home", href: "/sh-electrical" },
  { label: "Services", href: "/sh-electrical/services" },
  { label: "Gallery", href: "/sh-electrical/gallery" },
  { label: "About", href: "/sh-electrical/about" },
  { label: "Contact", href: "/sh-electrical/contact" },
];

// ── Imagery (real photos scraped from shelecmcrltd.co.uk, optimised) ──
const sh = (n: string) => `/marketing/sh/sh${n}.jpg`;

export const IMG = {
  hero: sh("16"),       // garden room with feature lighting
  night: sh("12"),      // driveway lighting at dusk
  about: sh("07"),      // modern kitchen
  about2: sh("19"),     // consumer unit close-up
  panel: sh("01"),      // consumer unit + sockets
  fusebox: sh("18"),    // fuse board / rewire
  emergency: sh("20"),  // meter / fault finding
  ev: sh("11"),         // driveway (EV)
  solar: sh("06"),      // exterior wall lighting
  cctv: sh("05"),       // kitchen lighting
  lighting: sh("08"),   // interior mood lighting
  industrial: sh("03"), // interior / commercial works
};

// Full gallery (real job photos), ordered for visual variety.
export const GALLERY: { src: string; alt: string }[] = [
  { src: sh("19"), alt: "New consumer unit installation, Manchester" },
  { src: sh("05"), alt: "Modern kitchen lighting installation" },
  { src: sh("08"), alt: "Interior feature & mood lighting" },
  { src: sh("11"), alt: "Driveway lighting and power" },
  { src: sh("18"), alt: "Fuse board upgrade" },
  { src: sh("07"), alt: "Kitchen renovation electrics" },
  { src: sh("16"), alt: "Garden room lighting" },
  { src: sh("06"), alt: "Exterior wall lighting" },
  { src: sh("01"), alt: "Consumer unit and sockets" },
  { src: sh("03"), alt: "Interior renovation works" },
  { src: sh("12"), alt: "Driveway lighting at dusk" },
  { src: sh("17"), alt: "Fuse board / consumer unit" },
  { src: sh("09"), alt: "Outdoor power and lighting" },
  { src: sh("14"), alt: "Garden wall lighting" },
  { src: sh("20"), alt: "Electrical testing and inspection" },
  { src: sh("04"), alt: "Kitchen appliance installation" },
  { src: sh("13"), alt: "Garden lighting and power" },
  { src: sh("02"), alt: "Exterior installation" },
  { src: sh("21"), alt: "Fuse board" },
  { src: sh("22"), alt: "Garden lighting project" },
];

// ── Accreditations ──
export const ACCREDS = ["NAPIT Approved", "Part P Compliant", "Local Surveyors Direct", "30+ Years Experience"];

// ── Clip-paths (mixed image edges) ──
export const CUT_TR = "polygon(0 0, calc(100% - 2.75rem) 0, 100% 2.75rem, 100% 100%, 0 100%)";
export const CUT_BL = "polygon(0 0, 100% 0, 100% 100%, 2.75rem 100%, 0 calc(100% - 2.75rem))";

// ── Blueprint grid background (inline style) ──
export const GRID_BG: React.CSSProperties = {
  backgroundImage:
    "linear-gradient(rgba(23,37,94,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(23,37,94,0.05) 1px, transparent 1px)",
  backgroundSize: "46px 46px",
};

// ── Buttons (sharp/industrial; blue is the brand accent) ──
export const btnYellow =
  "group inline-flex items-center justify-center gap-2.5 bg-[#1f8fd6] px-7 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#1878bd]";
export const btnNavy =
  "group inline-flex items-center justify-center gap-2.5 bg-[#16225e] px-7 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#0f1845]";
export const btnGhostDark =
  "group inline-flex items-center justify-center gap-2.5 border border-white/25 px-7 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:border-[#1f8fd6] hover:text-[#5cb8ef]";
export const btnGhostLight =
  "group inline-flex items-center justify-center gap-2.5 border border-[#16225e]/25 px-7 py-4 text-sm font-semibold uppercase tracking-wide text-[#16225e] transition-colors hover:bg-[#16225e] hover:text-white";

export const Arrow = () => (
  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
);

// ── Label: blue square marker + uppercase (no pill badge) ──
export function Label({ children, onDark = false }: { children: React.ReactNode; onDark?: boolean }) {
  return (
    <p className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] ${onDark ? "text-white/70" : "text-[#16225e]"}`}>
      <span className="h-2.5 w-2.5 bg-[#1f8fd6]" aria-hidden /> {children}
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
          <span className="h-2.5 w-2.5 bg-[#1f8fd6]" aria-hidden /> {eyebrow}
        </p>
        <h1 className="hero-h mt-5 text-[2.6rem] font-bold uppercase leading-[0.95] tracking-tight md:text-[4rem]">
          <span className="block overflow-hidden"><span className="hero-line-inner block" style={{ transform: "translateY(110%)" }}>{title}</span></span>
        </h1>
        <span className="mt-5 block h-1 w-16 bg-[#1f8fd6]" aria-hidden />
        <p className="hero-fade mt-5 max-w-xl text-base font-light text-white/85 opacity-0 md:text-lg" style={{ transform: "translateY(8px)" }}>{intro}</p>
      </div>
    </section>
  );
}
