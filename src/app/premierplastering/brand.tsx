import { Space_Grotesk, Anton } from "next/font/google";

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

// Heavy condensed face for the wordmark — matches their Impact logo.
export const anton = Anton({ subsets: ["latin"], weight: "400", variable: "--font-anton", display: "swap" });
export const logoFont = "font-[family-name:var(--font-anton)]";

// ── Brand contact ──
// Phone numbers taken from premierplasteringsouthlakes.co.uk (real).
// Email is a placeholder — the source site lists no email — replace before go-live.
export const PHONE_1_DISPLAY = "07831 845 958";
export const PHONE_1_TEL = "tel:07831845958";
export const PHONE_2_DISPLAY = "07972 688 438";
export const PHONE_2_TEL = "tel:07972688438";
export const PHONE_3_DISPLAY = "01229 343090";
export const PHONE_3_TEL = "tel:01229343090";
export const EMAIL = "info@premierplasteringsouthlakes.co.uk";
export const FACEBOOK = "https://www.facebook.com/premierplasteringsl";
export const AREA = "Ulverston & the South Lakes";

export const NAV = [
  { label: "Home", href: "/premierplastering" },
  { label: "Services", href: "/premierplastering/services" },
  { label: "Portfolio", href: "/premierplastering/portfolio" },
  { label: "About", href: "/premierplastering/about" },
  { label: "Contact", href: "/premierplastering/contact" },
];

// ── Imagery — Premier Plastering's OWN job photos (scraped from their site) ──
const real = (n: string) => `/marketing/pp/real-${n}.jpg`;

// Named slots used across the site, all mapped to their real photos.
export const IMG = {
  hero: real("render1"),       // their flagship external render job (sharp landscape)
  skim: real("extension"),     // freshly plastered interior
  render: real("render2"),     // external rendering in progress
  damp: real("tanking"),       // tanking / damp proofing
  lime: real("glaxo3"),        // plastered commercial room
  drylining: real("loft"),     // loft conversion / plasterboard
  venetian: real("project1"),  // polished plaster feature wall
  microcement: real("micro2"), // micro cement bathroom
  detail: real("project2"),    // polished plaster finish
  ceiling: real("ceiling"),    // recessed plastered ceiling
  interior: real("glaxo1"),    // finished room
  tools: real("job4"),         // job photo
  worker: real("job3"),        // exterior render job
  exterior: real("bowness"),   // Bowness project, finished
};
export const GALLERY: { src: string; alt: string; big?: boolean }[] = [
  { src: real("render1"), alt: "External Parex render project", big: true },
  { src: real("project1"), alt: "Polished plaster feature wall" },
  { src: real("bowness"), alt: "Bowness micro-cement project" },
  { src: real("glaxo1"), alt: "Commercial plastering project" },
  { src: real("micro2"), alt: "Micro-cement bathroom finish" },
  { src: real("job1"), alt: "Skimmed and finished wall", big: true },
  { src: real("loft"), alt: "Loft conversion plastering" },
  { src: real("render2"), alt: "Parex render system applied" },
  { src: real("curve"), alt: "Curved feature wall in plaster" },
  { src: real("project2"), alt: "Polished plaster finish" },
  { src: real("tanking"), alt: "Damp proofing and tanking", big: true },
  { src: real("arch"), alt: "Plastered archway, finished" },
  { src: real("extension"), alt: "Plastered extension" },
  { src: real("glaxo2"), alt: "Commercial render project" },
  { src: real("ceiling"), alt: "Recessed plastered ceiling" },
  { src: real("job3"), alt: "Re-skimmed room" },
  { src: real("micro1"), alt: "Micro-cement surface detail" },
  { src: real("job4"), alt: "Plastering job, South Lakes" },
];

// ── Trust badges (their real approvals) ──
export const ACCREDS = ["Sovereign Approved", "Parex Render Systems", "Lime & Heritage Specialist", "Domestic & Commercial"];

// ── Clip-paths (mixed image edges) ──
export const CUT_TR = "polygon(0 0, calc(100% - 2.75rem) 0, 100% 2.75rem, 100% 100%, 0 100%)";
export const CUT_BL = "polygon(0 0, 100% 0, 100% 100%, 2.75rem 100%, 0 calc(100% - 2.75rem))";

// ── Subtle grid background (inline style) ──
export const GRID_BG: React.CSSProperties = {
  backgroundImage:
    "linear-gradient(rgba(22,41,60,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(22,41,60,0.05) 1px, transparent 1px)",
  backgroundSize: "46px 46px",
};

// ── Buttons (sharp; warm clay is the brand accent) ──
export const btnYellow =
  "group inline-flex items-center justify-center gap-2.5 bg-[#ff5e3c] px-7 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#e8472a]";
export const btnNavy =
  "group inline-flex items-center justify-center gap-2.5 bg-[#16293c] px-7 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#0a1521]";
export const btnGhostDark =
  "group inline-flex items-center justify-center gap-2.5 border border-white/25 px-7 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:border-[#ff5e3c] hover:text-[#9ec9ee]";
export const btnGhostLight =
  "group inline-flex items-center justify-center gap-2.5 border border-[#16293c]/25 px-7 py-4 text-sm font-semibold uppercase tracking-wide text-[#16293c] transition-colors hover:bg-[#16293c] hover:text-white";

export const Arrow = () => (
  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
);

// ── Label: clay square marker + uppercase (no pill badge) ──
export function Label({ children, onDark = false }: { children: React.ReactNode; onDark?: boolean }) {
  return (
    <p className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] ${onDark ? "text-white/70" : "text-[#16293c]"}`}>
      <span className="h-2.5 w-2.5 bg-[#ff5e3c]" aria-hidden /> {children}
    </p>
  );
}

// ── Image-led page hero (full-bleed photo, dark scrim, no colour slab) ──
export function PageHero({ eyebrow, title, intro, img, imgAlt }: { eyebrow: string; title: string; intro: string; img: string; imgAlt: string }) {
  return (
    <section className="relative isolate flex min-h-[20rem] items-end overflow-hidden md:min-h-[27rem]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={img} alt={imgAlt} className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0e1c2b]/92 via-[#0e1c2b]/55 to-[#0e1c2b]/25" />
      <div className="absolute inset-0 -z-10 opacity-60" style={GRID_BG} />
      <div className="mx-auto w-full max-w-6xl px-5 pb-10 pt-28 text-white md:px-8 md:pb-14">
        <p className="hero-fade flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.28em] text-white/70 opacity-0" style={{ transform: "translateY(8px)" }}>
          <span className="h-2.5 w-2.5 bg-[#ff5e3c]" aria-hidden /> {eyebrow}
        </p>
        <h1 className="hero-h mt-5 text-[2.6rem] font-bold uppercase leading-[0.95] tracking-tight md:text-[4rem]">
          <span className="block overflow-hidden"><span className="hero-line-inner block" style={{ transform: "translateY(110%)" }}>{title}</span></span>
        </h1>
        <span className="mt-5 block h-1 w-16 bg-[#ff5e3c]" aria-hidden />
        <p className="hero-fade mt-5 max-w-xl text-base font-light text-white/85 opacity-0 md:text-lg" style={{ transform: "translateY(8px)" }}>{intro}</p>
      </div>
    </section>
  );
}
