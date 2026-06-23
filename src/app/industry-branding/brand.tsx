import { Anton, Inter } from "next/font/google";

export const display = Anton({ subsets: ["latin"], weight: "400", variable: "--font-display", display: "swap" });
export const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

// ── Brand contact ──
export const PHONE_DISPLAY = "07503 248161";
export const PHONE_TEL = "tel:07503248161";
export const EMAIL = "info@industrybranding.co.uk";
export const ADDRESS = "Gloucester House, 399 Silbury Boulevard, Central Milton Keynes, MK9 2AH";
export const LOCATIONS = "Milton Keynes & nationwide";
export const INSTAGRAM = "https://www.instagram.com/industrybranding";
export const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/industrybranding" },
  { label: "Facebook", href: "https://www.facebook.com/industrybranding" },
  { label: "Snapchat", href: "https://www.snapchat.com/add/ibprinters" },
];
export const HOURS = [
  { d: "Mon – Fri", h: "10:00am – 8:00pm" },
  { d: "Saturday", h: "11:00am – 5:00pm (appt)" },
  { d: "Sunday", h: "Closed" },
];

export const NAV = [
  { label: "Home", href: "/industry-branding" },
  { label: "What We Brand", href: "/industry-branding/products" },
  { label: "Our Work", href: "/industry-branding/work" },
  { label: "About", href: "/industry-branding/about" },
  { label: "Contact", href: "/industry-branding/contact" },
];

// ── Imagery (monochrome placeholders — real photos to be supplied) ──
const ib = (n: string) => `/marketing/ib/ib-${n}.jpg`;
export const IMG = {
  hero: ib("hero"),
  tees: ib("tees"),
  hoodies: ib("hoodies"),
  polos: ib("polos"),
  hivis: ib("hivis"),
  caps: ib("caps"),
  bags: ib("bags"),
  embroidery: ib("embroidery"),
  merch: ib("merch"),
  about: ib("about"),
  statement: ib("statement"),
  work1: ib("work1"),
  work2: ib("work2"),
};

// ── What we brand (garments) ──
export const PRODUCTS = [
  { t: "T-Shirts", img: IMG.tees, b: "Custom-printed tees in any colour and quantity — from a single one-off to a full run." },
  { t: "Hoodies & Sweats", img: IMG.hoodies, b: "Branded hoodies, sweatshirts and crewnecks — soft, durable and print-ready." },
  { t: "Polos & Workwear", img: IMG.polos, b: "Smart polos, shirts and workwear with your logo embroidered or printed." },
  { t: "Hi-Vis & PPE", img: IMG.hivis, b: "Hi-vis vests, jackets and safety wear branded for site, trade and events." },
  { t: "Caps & Headwear", img: IMG.caps, b: "Caps, beanies and bucket hats embroidered or printed to your design." },
  { t: "Bags & Totes", img: IMG.bags, b: "Tote bags, drawstrings and holdalls — perfect branded merch and giveaways." },
  { t: "Embroidery", img: IMG.embroidery, b: "Premium stitched embroidery for a clean, professional, long-lasting finish." },
  { t: "Promo Merch", img: IMG.merch, b: "Promotional clothing and merchandise for events, teams and campaigns." },
];

export const METHODS = ["Screen Printing", "DTG Print", "Embroidery", "Vinyl / Heat Transfer", "Sublimation", "Transfers"];
export const CLIENTS = ["Super Mario", "Argos", "Red Bull", "Fortnite"];
export const TRUST = ["No Minimum Order", "Fast Turnaround", "Any Quantity", "Milton Keynes"];

// Marquee ticker.
export const MARQUEE = [
  "T-Shirts", "Hoodies", "Polos", "Workwear", "Hi-Vis", "Caps", "Tote Bags", "Embroidery", "Screen Print", "DTG", "Vinyl", "Merch",
];

// ── Vibrant ink/thread swatch palette (apparel colours) — the brand's colour pop ──
export const COLORS = ["#ff3b30", "#2b6bff", "#ffc31f", "#14b86b", "#ff7a1a", "#b14dff", "#ff3d8b", "#10bcd4"];
export function AccentBar({ className = "" }: { onDark?: boolean; className?: string }) {
  return (
    <span className={`flex h-2 w-full items-stretch overflow-hidden ${className}`} aria-hidden>
      {Array.from({ length: 16 }).map((_, i) => (<span key={i} className="h-full flex-1" style={{ background: COLORS[i % COLORS.length] }} />))}
    </span>
  );
}

// ── Mixed image edges ──
export const CUT_TR = "polygon(0 0, calc(100% - 2.5rem) 0, 100% 2.5rem, 100% 100%, 0 100%)";

// ── Buttons (bold, uppercase, monochrome) ──
export const btnRed =
  "group inline-flex items-center justify-center gap-2 rounded-md bg-[#ff3b30] px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#e02d23]";
export const btnBlue =
  "group inline-flex items-center justify-center gap-2 rounded-md bg-white px-7 py-4 text-sm font-bold uppercase tracking-wide text-[#0e0e10] transition-colors hover:bg-white/85";
export const btnGhostDark =
  "group inline-flex items-center justify-center gap-2 rounded-md border border-white/40 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-white hover:bg-white hover:text-[#0e0e10]";
export const btnGhostLight =
  "group inline-flex items-center justify-center gap-2 rounded-md border border-[#0e0e10]/25 px-7 py-4 text-sm font-bold uppercase tracking-wide text-[#0e0e10] transition-colors hover:border-[#ff3b30] hover:bg-[#ff3b30] hover:text-white";

export const Arrow = () => (
  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
);

// Display-font (Anton) utility class.
export const fd = "font-[family-name:var(--font-display)]";

// ── Label: square marker + uppercase (no pill badge) ──
export function Label({ children, onDark = false }: { children: React.ReactNode; onDark?: boolean }) {
  return (
    <p className={`flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.24em] ${onDark ? "text-white/75" : "text-[#0e0e10]"}`}>
      <span className="h-2 w-2 bg-[#ff3b30]" aria-hidden /> {children}
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
