import { Anton, Inter } from "next/font/google";

export const display = Anton({ subsets: ["latin"], weight: "400", variable: "--font-display", display: "swap" });
export const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

// ── Brand contact (mock details for the demo) ──
export const PHONE_DISPLAY = "07700 900123";
export const PHONE_TEL = "tel:07700900123";
export const WHATSAPP = "https://wa.me/447700900123";
export const EMAIL = "hello@printsgalore.co.uk";
export const EMAIL_HREF = "mailto:hello@printsgalore.co.uk";
export const INSTAGRAM = "https://www.instagram.com/printsgalore0121/";
export const HANDLE = "@printsgalore0121";
export const LOCATIONS = "Birmingham — & nationwide";
export const COVERAGE = "North · South · East · West";
export const ADDRESS = "Unit 7, Vyse Street, Jewellery Quarter, Birmingham B18 6NF";
export const SOCIALS = [
  { label: "Instagram", href: INSTAGRAM },
  { label: "WhatsApp", href: WHATSAPP },
  { label: "Email", href: EMAIL_HREF },
];
export const HOURS = [
  { d: "Mon – Fri", h: "9:00am – 8:00pm" },
  { d: "Saturday", h: "By appointment" },
  { d: "Sunday", h: "Closed" },
];

export const NAV = [
  { label: "Home", href: "/printsgalorest" },
  { label: "What We Print", href: "/printsgalorest/products" },
  { label: "Our Work", href: "/printsgalorest/work" },
  { label: "About", href: "/printsgalorest/about" },
  { label: "Contact", href: "/printsgalorest/contact" },
];

// ── Imagery (real product + founder photos from @printsgalore0121) ──
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
  caps: img("pa-cap"),
  jacket: img("pa-jacket"),
  beanie: img("pa-beanie"),
  beanie2: img("pa-beanie2"),
  cap2: img("pa-cap2"),
  cap3: img("pa-cap3"),
};

// ── What we print (DTF on garments) ──
export const PRODUCTS = [
  { t: "Custom T-Shirts", img: IMG.teeGraphic, b: "Custom DTF-printed tees in any colour — full-colour graphics, logos, text and one-offs." },
  { t: "Event & Reunion Tees", img: IMG.teeEvent, b: "Reunions, fundraisers, teams and campaigns — names, dates and custom wording for the big day." },
  { t: "Logo & Crest Tees", img: IMG.teeCrest, b: "Clean logos, crests and graphics for teams, clubs and businesses." },
  { t: "Caps & Headwear", img: IMG.caps, b: "Embroidered trucker caps, snapbacks and beanies — your logo, clean and crisp." },
  { t: "Jackets & Windbreakers", img: IMG.jacket, b: "Custom-branded windbreakers and jackets — names, numbers and logos for clubs and crews." },
];

export const METHODS = ["DTF Transfers", "Embroidery", "Full-Colour Print", "Logos & Crests", "Vinyl / Heat Press", "Bulk Orders"];
export const CLIENTS = ["Local cafés & shops", "Clubs & teams", "Events & fundraisers", "Independent brands"];
export const TRUST = ["Minimum order 6", "Fast turnaround", "High-quality DTF", "Birmingham, UK"];

// Marquee ticker.
export const MARQUEE = [
  "DTF Printing", "Custom T-Shirts", "Caps & Beanies", "Embroidery", "Windbreakers", "Event Tees", "Full-Colour", "Logos & Crests", "Promo Merch", "Bulk Orders", "Custom Prints", "Headwear",
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

// ── Wordmark logo (Anton, two-tone CMYK pop) ──
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-block ${fd} uppercase leading-none tracking-tight text-white ${className}`} aria-hidden>
      Prints<span className="text-[#EC008C]">&nbsp;Galore</span>
    </span>
  );
}

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
