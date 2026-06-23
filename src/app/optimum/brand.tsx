import { Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const PHONE_DISPLAY = "07539 478387";
export const PHONE_TEL = "tel:07539478387";
export const EMAIL = "Gyasi@optimummg.com";
export const ADDRESS = "International House, 64 Nile Street, London N1 7SR";

export const NAV = [
  { label: "Home", href: "/optimum" },
  { label: "Services", href: "/optimum/services" },
  { label: "About", href: "/optimum/about" },
  { label: "Contact", href: "/optimum/contact" },
];

export const IMG = {
  hero: "https://images.pexels.com/photos/34688219/pexels-photo-34688219.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1000&w=900",
  about: "https://images.pexels.com/photos/7937659/pexels-photo-7937659.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=820&w=1100",
  about2: "https://images.pexels.com/photos/3882638/pexels-photo-3882638.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=820&w=1100",
  designbuild: "https://images.pexels.com/photos/25461690/pexels-photo-25461690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=820&w=1100",
  maintenance: "https://images.pexels.com/photos/34517611/pexels-photo-34517611.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=820&w=1100",
  management: "https://images.pexels.com/photos/28196526/pexels-photo-28196526.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=820&w=1100",
  electrical: "https://images.pexels.com/photos/36085816/pexels-photo-36085816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=820&w=1100",
  av: "https://images.pexels.com/photos/6949367/pexels-photo-6949367.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=820&w=1100",
  commercial: "https://images.pexels.com/photos/35188667/pexels-photo-35188667.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=820&w=1100",
  residential: "https://images.pexels.com/photos/28456461/pexels-photo-28456461.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=820&w=1100",
  gallery1: "https://images.pexels.com/photos/6474133/pexels-photo-6474133.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  gallery2: "https://images.pexels.com/photos/7045356/pexels-photo-7045356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=720",
};

// Cut-corner clip-paths (mixed image edges).
export const CUT_BR = "polygon(0 0, 100% 0, 100% calc(100% - 3rem), calc(100% - 3rem) 100%, 0 100%)";
export const CUT_TL = "polygon(3rem 0, 100% 0, 100% 100%, 0 100%, 0 3rem)";

// EAL-style pill buttons (allowed — CTA buttons, not label pills).
export const pillTeal =
  "inline-flex items-center justify-center gap-2 rounded-full bg-[#1dc6ba] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[#0e3a44] transition-colors hover:bg-[#15b3a8]";
export const pillNavy =
  "inline-flex items-center justify-center gap-2 rounded-full bg-[#2d5a83] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#234a6c]";
export const pillGhostDark =
  "inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:border-[#1dc6ba] hover:text-[#1dc6ba]";
export const pillGhostLight =
  "inline-flex items-center justify-center gap-2 rounded-full border border-[#2d5a83]/30 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[#2d5a83] transition-colors hover:bg-[#2d5a83] hover:text-white";

export function Label({ children, onDark = false }: { children: React.ReactNode; onDark?: boolean }) {
  return (
    <p className={`flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] ${onDark ? "text-[#7fe6dd]" : "text-[#159a90]"}`}>
      <span className="h-px w-9 bg-[#1dc6ba]" aria-hidden /> {children}
    </p>
  );
}

// Inner-page hero: full-bleed image with a soft scrim, text overlaid (no colour slab).
export function PageHero({ eyebrow, title, intro, img, imgAlt }: { eyebrow: string; title: string; intro: string; img: string; imgAlt: string }) {
  return (
    <section className="relative isolate flex min-h-[19rem] items-end overflow-hidden md:min-h-[25rem]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={img} alt={imgAlt} className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0b1722]/90 via-[#0b1722]/50 to-[#0b1722]/20" />
      <div className="mx-auto w-full max-w-6xl px-5 pb-10 pt-28 text-white md:px-8 md:pb-14">
        <p className="hero-fade flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-white/60 opacity-0" style={{ transform: "translateY(8px)" }}>
          <span>Optimum</span> <span className="text-[#3fe0d4]">/</span> <span className="text-white/90">{eyebrow}</span>
        </p>
        <h1 className="hero-h mt-5 text-[2.6rem] font-light leading-[1.0] tracking-tight md:text-[3.7rem]">
          <span className="block overflow-hidden"><span className="hero-line-inner block" style={{ transform: "translateY(110%)" }}>{title}</span></span>
        </h1>
        <p className="hero-fade mt-5 max-w-xl text-base font-light text-white/85 opacity-0 md:text-lg" style={{ transform: "translateY(8px)" }}>{intro}</p>
      </div>
    </section>
  );
}
