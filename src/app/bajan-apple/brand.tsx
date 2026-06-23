import { Bricolage_Grotesque, Inter } from "next/font/google";

export const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});
export const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

// ── Brand contact ──
export const PHONE_DISPLAY = "0800 130 3855";
export const PHONE_TEL = "tel:08001303855";
export const WHATSAPP_DISPLAY = "07547 370 440";
export const WHATSAPP_LINK = "https://wa.me/447547370440";
export const EMAIL = "info@bajanapple.com";
export const LOCATIONS = "Leeds City & Pudsey, West Yorkshire";
export const HOURS = [
  { d: "Mon – Fri", h: "8:00am – 6:00pm" },
  { d: "Saturday", h: "8:00am – 4:00pm" },
  { d: "Sunday", h: "10:00am – 4:00pm" },
];

export const NAV = [
  { label: "Home", href: "/bajan-apple" },
  { label: "What We Print", href: "/bajan-apple/products" },
  { label: "About", href: "/bajan-apple/about" },
  { label: "Contact", href: "/bajan-apple/contact" },
];

// ── Imagery (Pexels) ──
const px = (id: string, w: number, h: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=${w}&h=${h}`;

export const IMG = {
  hero: px("1440504", 1600, 1080),
  press: px("19316517", 1200, 850),
  flyers: px("29452731", 1100, 850),
  cards: px("5706020", 1100, 850),
  posters: px("13462296", 1100, 850),
  brochure: px("7648305", 1100, 850),
  banners: px("36297487", 1100, 850),
  stickers: px("14122051", 1100, 850),
  design: px("16313709", 1100, 850),
  magazines: px("4271615", 1100, 850),
  about: px("6620983", 1200, 900),
};

// ── What we print (products) ──
export const PRODUCTS = [
  { t: "Flyers & Leaflets", img: IMG.flyers, b: "Eye-catching flyers and leaflets in any size, on silk, gloss, matt or recycled stock." },
  { t: "Business Cards", img: IMG.cards, b: "Standard, premium, plastic, foiled and even stainless-steel business cards." },
  { t: "Posters", img: IMG.posters, b: "Vivid colour posters from A4 to A0 — perfect for events, retail and promotion." },
  { t: "Booklets & Brochures", img: IMG.brochure, b: "Stapled or perfect-bound booklets, brochures and professional portfolios." },
  { t: "Roller Banners", img: IMG.banners, b: "Roll-up and exhibition banners that set up in seconds and look the part." },
  { t: "Stickers & Labels", img: IMG.stickers, b: "Custom labels and stickers — paper, polyester, vinyl, kiss-cut or die-cut." },
  { t: "Business Stationery", img: IMG.design, b: "Letterheads, compliment slips, NCR pads, envelopes and branded stationery." },
  { t: "Magazines & Comics", img: IMG.magazines, b: "Full-colour magazines, newsletters and comic books, printed and finished in-house." },
];

// Marquee ticker items.
export const MARQUEE = [
  "Flyers", "Posters", "Business Cards", "Booklets", "Brochures", "Roller Banners",
  "Stickers", "Labels", "Menus", "Magazines", "Tickets", "Letterheads", "Postcards", "Calendars",
];

export const TRUST = ["BPIF Member", "FSB Member", "Google 5★ Rated", "Trustpilot Reviewed"];

// ── Mixed image edges ──
export const CUT_TR = "polygon(0 0, calc(100% - 2.5rem) 0, 100% 2.5rem, 100% 100%, 0 100%)";

// ── Buttons (rounded, friendly — distinct from the other sites) ──
export const btnRed =
  "group inline-flex items-center justify-center gap-2 rounded-xl bg-[#ca2d25] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#a8231c]";
export const btnBlue =
  "group inline-flex items-center justify-center gap-2 rounded-xl bg-[#306fc7] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#2459a8]";
export const btnGhostDark =
  "group inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#16223a]";
export const btnGhostLight =
  "group inline-flex items-center justify-center gap-2 rounded-xl border border-[#16223a]/20 px-7 py-4 text-sm font-semibold text-[#16223a] transition-colors hover:border-[#ca2d25] hover:text-[#ca2d25]";

// Display-font (Bricolage Grotesque) utility class.
export const fd = "font-[family-name:var(--font-display)]";

export const Arrow = () => (
  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
);

// ── Label: red dot + uppercase (no pill badge) ──
export function Label({ children, onDark = false }: { children: React.ReactNode; onDark?: boolean }) {
  return (
    <p className={`flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] ${onDark ? "text-white/75" : "text-[#306fc7]"}`}>
      <span className="h-2 w-2 rounded-full bg-[#ca2d25]" aria-hidden /> {children}
    </p>
  );
}

// ── Image-led page hero (full-bleed photo, dark scrim, no colour slab) ──
export function PageHero({ eyebrow, title, intro, img, imgAlt }: { eyebrow: string; title: string; intro: string; img: string; imgAlt: string }) {
  return (
    <section className="relative isolate flex min-h-[20rem] items-end overflow-hidden md:min-h-[26rem]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={img} alt={imgAlt} className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0d1530]/92 via-[#0d1530]/55 to-[#0d1530]/25" />
      <div className="mx-auto w-full max-w-6xl px-5 pb-10 pt-28 text-white md:px-8 md:pb-14">
        <Label onDark>{eyebrow}</Label>
        <h1 className="hero-h mt-5 font-[family-name:var(--font-display)] text-[2.7rem] font-extrabold leading-[0.95] tracking-tight md:text-[4.2rem]">
          <span className="block overflow-hidden"><span className="hero-line-inner block" style={{ transform: "translateY(110%)" }}>{title}</span></span>
        </h1>
        <p className="hero-fade mt-5 max-w-xl text-base font-light text-white/85 opacity-0 md:text-lg" style={{ transform: "translateY(8px)" }}>{intro}</p>
      </div>
    </section>
  );
}
