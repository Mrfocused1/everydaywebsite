import { Anton, Inter } from "next/font/google";

export const display = Anton({ subsets: ["latin"], weight: "400", variable: "--font-display", display: "swap" });
export const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

// ── Brand contact ──
export const PHONE_DISPLAY = "07494 780623";
export const PHONE_TEL = "tel:07494780623";
export const WHATSAPP = "https://wa.me/447494780623";
export const INSTAGRAM = "https://www.instagram.com/printattackuk";
export const LINKTREE = "https://linktr.ee/printattackuk";
export const HANDLE = "@printattackuk";
export const LOCATIONS = "Brentwood, Essex — & nationwide";
export const COVERAGE = "North · South · East · West";
export const ADDRESS = "Based in Brentwood, UK — covering North, South, East & West";
export const SOCIALS = [
  { label: "Instagram", href: INSTAGRAM },
  { label: "WhatsApp", href: WHATSAPP },
  { label: "Linktree", href: LINKTREE },
];
export const HOURS = [
  { d: "Mon – Fri", h: "9:00am – 8:00pm" },
  { d: "Saturday", h: "By appointment" },
  { d: "Sunday", h: "Closed" },
];

export const NAV = [
  { label: "Home", href: "/printattack" },
  { label: "What We Print", href: "/printattack/products" },
  { label: "Our Work", href: "/printattack/work" },
  { label: "About", href: "/printattack/about" },
  { label: "Contact", href: "/printattack/contact" },
];

// ── Imagery (real product + founder photos from @printattackuk) ──
const img = (n: string) => `/marketing/pa/${n}.jpg`;
export const IMG = {
  founders: img("pa-founders"),
  // Hero backgrounds — licence-free stock (Pexels), fitted to the DTF brand
  hero: img("hero-home"),
  heroProducts: img("hero-products"),
  heroWork: img("hero-work"),
  heroAbout: img("hero-about"),
  heroContact: img("hero-contact"),
  teeCrest: img("pa-mockup1"),
  hivis: img("pa-mockup2"),
  teeGraphic: img("pa-mockup3"),
  teeEvent: img("pa-mockup4"),
  teeWorkwear: img("pa-mockup5"),
  teeCream: img("pa-cream"),
  sweatshirt: img("pa-jumper"),
  tracksuit: img("pa-tracksuit"),
};

// ── What we print (DTF on garments) ──
export const PRODUCTS = [
  { t: "T-Shirts", img: IMG.teeGraphic, b: "Custom DTF-printed tees in any colour — full-colour graphics, logos, text and one-offs." },
  { t: "Hoodies & Sweats", img: IMG.sweatshirt, b: "Branded hoodies, sweatshirts and crews — soft, durable and built for everyday wear." },
  { t: "Hi-Vis & Workwear", img: IMG.hivis, b: "Hi-vis, jackets and uniform branded for trade, site and business teams." },
  { t: "Tracksuits", img: IMG.tracksuit, b: "Full custom tracksuits and joggers, branded top to bottom." },
  { t: "Gang Sheets", img: IMG.teeWorkwear, b: "Ready-to-press DTF gang sheets — pack your designs and save on bulk transfers." },
  { t: "Promo & Events", img: IMG.teeEvent, b: "Reunions, fundraisers, teams and campaigns — kitted out and ready for the day." },
];

export const METHODS = ["DTF Transfers", "Gang Sheets", "Full-Colour Print", "Logo & Workwear", "Vinyl / Heat Press", "Bulk Uniforms"];
export const CLIENTS = ["GNS Communications", "WE FIX", "Dakhaui", "Local teams & events"];
export const TRUST = ["Minimum order 6", "Fast turnaround", "High-quality DTF", "Brentwood, UK"];

// Marquee ticker.
export const MARQUEE = [
  "DTF Printing", "Gang Sheets", "T-Shirts", "Hoodies", "Workwear", "Hi-Vis", "Uniforms", "Tracksuits", "Full-Colour", "Promo Merch", "Bulk Orders", "Custom",
];

// ── CMYK powder-splash palette (straight from the logo) — the brand's colour pop ──
// magenta · cyan · key/black · yellow (key + black kept on big numbers for contrast)
export const COLORS = ["#EC008C", "#00AEEF", "#1B1B1B", "#FFC400"];
export function AccentBar({ className = "" }: { onDark?: boolean; className?: string }) {
  const bar = ["#FFC400", "#EC008C", "#00AEEF", "#1B1B1B"];
  return (
    <span className={`flex h-2 w-full items-stretch overflow-hidden ${className}`} aria-hidden>
      {Array.from({ length: 16 }).map((_, i) => (<span key={i} className="h-full flex-1" style={{ background: bar[i % bar.length] }} />))}
    </span>
  );
}

// ── Mixed image edges ──
export const CUT_TR = "polygon(0 0, calc(100% - 2.5rem) 0, 100% 2.5rem, 100% 100%, 0 100%)";

// ── Buttons (bold, uppercase) ──
export const btnRed =
  "group inline-flex items-center justify-center gap-2 rounded-md bg-[#EC008C] px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#C9007A]";
export const btnBlue =
  "group inline-flex items-center justify-center gap-2 rounded-md bg-white px-7 py-4 text-sm font-bold uppercase tracking-wide text-[#0e0e10] transition-colors hover:bg-white/85";
export const btnGhostDark =
  "group inline-flex items-center justify-center gap-2 rounded-md border border-white/40 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-white hover:bg-white hover:text-[#0e0e10]";
export const btnGhostLight =
  "group inline-flex items-center justify-center gap-2 rounded-md border border-[#0e0e10]/25 px-7 py-4 text-sm font-bold uppercase tracking-wide text-[#0e0e10] transition-colors hover:border-[#EC008C] hover:bg-[#EC008C] hover:text-white";

export const Arrow = () => (
  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
);

// Display-font (Anton) utility class.
export const fd = "font-[family-name:var(--font-display)]";

// ── Label: square marker + uppercase (no pill badge) ──
export function Label({ children, onDark = false }: { children: React.ReactNode; onDark?: boolean }) {
  return (
    <p className={`flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.24em] ${onDark ? "text-white/75" : "text-[#0e0e10]"}`}>
      <span className="h-2 w-2 bg-[#EC008C]" aria-hidden /> {children}
    </p>
  );
}

// ── Image-led page hero (full-bleed photo OR autoplay video, dark scrim) ──
// Pass `video` (an mp4) to use a muted-looping background clip; `img` becomes
// its poster + fallback. Without `video` it's the same image hero as before.
export function PageHero({ eyebrow, title, intro, img, imgAlt, video }: { eyebrow: string; title: string; intro: string; img: string; imgAlt: string; video?: string }) {
  return (
    <section className="relative isolate flex min-h-[20rem] items-end overflow-hidden md:min-h-[26rem]">
      {video ? (
        <video className="absolute inset-0 -z-10 h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata" poster={img} data-hero-video aria-label={imgAlt}>
          <source src={video} type="video/mp4" />
        </video>
      ) : (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img src={img} alt={imgAlt} className="absolute inset-0 -z-10 h-full w-full object-cover" />
      )}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#14141a]/92 via-[#14141a]/45 to-[#14141a]/20" />
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
