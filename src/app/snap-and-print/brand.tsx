import { Anton, Inter } from "next/font/google";

export const display = Anton({ subsets: ["latin"], weight: "400", variable: "--font-display", display: "swap" });
export const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

// ── Brand contact ──  TODO: replace placeholders with Snap & Print's real details.
export const PHONE_DISPLAY = "07000 000000";
export const PHONE_TEL = "tel:07000000000";
export const EMAIL = "hello@snapandprintevents.co.uk";
export const ADDRESS = "Based in London — available nationwide";
export const LOCATIONS = "London & nationwide";
export const HANDLE_NOTE = "We usually reply within 24 hours. Weekend and peak-season dates book up fast, so get in early.";
export const INSTAGRAM = "https://www.instagram.com/snapandprintevents";
export const SOCIALS = [
  { label: "Instagram", href: INSTAGRAM },
  { label: "TikTok", href: "https://www.tiktok.com/@snapandprintevents" },
  { label: "Email", href: `mailto:${EMAIL}` },
];

export const NAV = [
  { label: "Home", href: "/snap-and-print" },
  { label: "How It Works", href: "/snap-and-print/how-it-works" },
  { label: "Gallery", href: "/snap-and-print/work" },
  { label: "About", href: "/snap-and-print/about" },
  { label: "Book Us", href: "/snap-and-print/contact" },
];

// ── Imagery (real event photos) ──
const sp = (n: string) => `/marketing/sp/sp-${n}.jpg`;
export const IMG = {
  hero: sp("hero"),
  heroMobile: sp("hero-mobile"),
  snap: sp("snap"),       // the photographer at work
  print: sp("print"),     // on-site printer + fresh prints
  keep: sp("keep"),       // guest holding their print
  friends: sp("friends"), // group having a moment
};

// ── Events we cover ──
export const EVENTS = [
  { t: "Festivals", img: IMG.hero, b: "Roaming photographer catching the crowd, the sunset and the front-row energy — printed before the next song." },
  { t: "Parties & Birthdays", img: IMG.friends, b: "From milestone birthdays to house parties — every guest leaves with a print to stick on the fridge." },
  { t: "Weddings", img: IMG.keep, b: "Candid moments captured and handed to guests as instant keepsakes — better than any favour." },
  { t: "Brand Activations", img: IMG.print, b: "Branded borders, logos and hashtags on every print — a walking, lasting impression of your launch." },
  { t: "Corporate Events", img: IMG.snap, b: "Team days, galas and conferences — professional shots, printed on the spot and ready to share." },
  { t: "Club Nights & Pop-Ups", img: IMG.friends, b: "Late-night energy, neon and bottle-service moments — printed at the table in seconds." },
];

export const TRUST = ["Printed on-site in seconds", "Pro photographer", "Any event, any size", "Unlimited snaps"];

// Marquee ticker.
export const MARQUEE = [
  "Festivals", "Parties", "Weddings", "Birthdays", "Corporate", "Launches", "Club Nights", "Pop-Ups", "Instant Prints", "Keepsakes",
];

// ── Festival / party colour pop ──
export const COLORS = ["#FF4D2E", "#FFC400", "#00C2A8", "#FF3D8B", "#7A5CFF", "#FF8A1E"];
export function AccentBar({ className = "" }: { onDark?: boolean; className?: string }) {
  return (
    <span className={`flex h-2 w-full items-stretch overflow-hidden ${className}`} aria-hidden>
      {Array.from({ length: 16 }).map((_, i) => (<span key={i} className="h-full flex-1" style={{ background: COLORS[i % COLORS.length] }} />))}
    </span>
  );
}

// ── Mixed image edges ──
export const CUT_TR = "polygon(0 0, calc(100% - 2.5rem) 0, 100% 2.5rem, 100% 100%, 0 100%)";

// ── Signature: instant-print polaroid frame (white border, slight tilt) ──
export function Polaroid({ src, alt, caption, rotate = 0, className = "" }: { src: string; alt: string; caption?: string; rotate?: number; className?: string }) {
  return (
    <figure className={`bg-white p-2.5 pb-8 shadow-[0_22px_50px_-20px_rgba(0,0,0,0.55)] ${className}`} style={{ transform: `rotate(${rotate}deg)` }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="lazy" className="block aspect-square w-full object-cover" />
      {caption ? <figcaption className="mt-2 text-center text-[0.8rem] font-medium italic text-[#0e0e10]/70">{caption}</figcaption> : null}
    </figure>
  );
}

// ── Buttons (bold, uppercase) ──
export const btnRed =
  "group inline-flex items-center justify-center gap-2 rounded-md bg-[#FF4D2E] px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#E63915]";
export const btnBlue =
  "group inline-flex items-center justify-center gap-2 rounded-md bg-white px-7 py-4 text-sm font-bold uppercase tracking-wide text-[#0e0e10] transition-colors hover:bg-white/85";
export const btnGhostDark =
  "group inline-flex items-center justify-center gap-2 rounded-md border border-white/40 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-white hover:bg-white hover:text-[#0e0e10]";
export const btnGhostLight =
  "group inline-flex items-center justify-center gap-2 rounded-md border border-[#0e0e10]/25 px-7 py-4 text-sm font-bold uppercase tracking-wide text-[#0e0e10] transition-colors hover:border-[#FF4D2E] hover:bg-[#FF4D2E] hover:text-white";

export const Arrow = () => (
  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
);

// Display-font (Anton) utility class.
export const fd = "font-[family-name:var(--font-display)]";

// ── Label: square marker + uppercase (no pill badge) ──
export function Label({ children, onDark = false }: { children: React.ReactNode; onDark?: boolean }) {
  return (
    <p className={`flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.24em] ${onDark ? "text-white/75" : "text-[#0e0e10]"}`}>
      <span className="h-2 w-2 bg-[#FF4D2E]" aria-hidden /> {children}
    </p>
  );
}

// ── Image-led page hero (full-bleed photo, dark scrim) ──
export function PageHero({ eyebrow, title, intro, img, imgAlt }: { eyebrow: string; title: string; intro: string; img: string; imgAlt: string }) {
  return (
    <section className="relative isolate flex min-h-[20rem] items-end overflow-hidden md:min-h-[26rem]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={img} alt={imgAlt} className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#14141a]/90 via-[#14141a]/35 to-[#14141a]/10" />
      <AccentBar className="absolute inset-x-0 top-0" />
      <div className="mx-auto w-full max-w-6xl px-5 pb-10 pt-28 text-white md:px-8 md:pb-14">
        <Label onDark>{eyebrow}</Label>
        <h1 className={`hero-h mt-5 ${fd} text-[2.9rem] uppercase leading-[0.92] tracking-tight md:text-[4.6rem]`}>
          <span className="block overflow-hidden"><span className="hero-line-inner block" style={{ transform: "translateY(110%)" }}>{title}</span></span>
        </h1>
        <p className="hero-fade mt-5 max-w-xl text-base font-light text-white/85 opacity-0 md:text-lg" style={{ transform: "translateY(8px)" }}>{intro}</p>
      </div>
    </section>
  );
}
