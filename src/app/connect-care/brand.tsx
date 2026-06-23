import { Fraunces, Inter } from "next/font/google";

export const display = Fraunces({ subsets: ["latin"], weight: ["300", "400", "500", "600"], style: ["normal", "italic"], variable: "--font-display", display: "swap" });
export const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

// Display-font (Fraunces) utility.
export const fd = "font-[family-name:var(--font-display)]";

// ── Brand contact ──
export const PHONE_DISPLAY = "0161 971 6354";
export const PHONE_TEL = "tel:01619716354";
export const EMAIL = "info@connectcareconsultancy.com";
export const ADDRESS = "Manchester Business Park, 3000 Aviator Way, Manchester, M22 5TG";
export const COMPANY_NO = "11822551";
export const FACEBOOK = "https://www.facebook.com/Connect-Care-Consultancy-370267270422050/";
export const LINKEDIN = "https://www.linkedin.com/in/nya-mabu-11150b48";
export const SOCIALS = [
  { label: "Facebook", href: FACEBOOK },
  { label: "LinkedIn", href: LINKEDIN },
  { label: "Email", href: `mailto:${EMAIL}` },
];

export const NAV = [
  { label: "Home", href: "/connect-care" },
  { label: "About", href: "/connect-care/about" },
  { label: "Contact", href: "/connect-care/contact" },
];

// ── Imagery ──
const ccc = (n: string) => `/marketing/ccc/${n}.jpg`;
export const IMG = {
  nya: ccc("nya-featured"),
  nyaPortrait: ccc("nya-2"),
  nya1: ccc("nya-1"),
  registration: ccc("registration"),
  inspection: ccc("inspection"),
  support: ccc("support"),
  care: ccc("care"),
  hands: ccc("hands"),
  meeting: ccc("meeting"),
};

// ── Services ──
export const SERVICES = [
  { t: "New Provider CQC Registration", img: IMG.registration, b: "Setting up a new care service? We guide you from application through to your first CQC inspection — so you start compliant and confident." },
  { t: "CQC Mock Inspections", img: IMG.inspection, b: "A full on-site mock inspection against the CQC's five key questions — Safe, Effective, Caring, Responsive and Well-Led — with a clear report and quality-assurance plan." },
  { t: "Registered Manager & Provider Support", img: IMG.support, b: "Ongoing mentoring for managers and providers — we identify the challenges holding you back and help you build toward an Outstanding rating." },
];

export const TESTIMONIALS = [
  { q: "Nerve-calming, confidence-boosting, focused and second to none.", n: "David Opoku", r: "Clover Care" },
  { q: "Completely calmed my nerves and gave me the confidence I needed.", n: "Abbie Butler", r: "Elizabeth Rose Home Care" },
  { q: "Simplifies the hard things and makes them easy to understand.", n: "Seshe James", r: "Aphealthcare" },
  { q: "A wealth of knowledge that eased my anxieties about the interview process.", n: "Jonelle McPherson", r: "JWM Healthcare" },
  { q: "Detailed, reassuring and very helpful — my confidence was boosted.", n: "Prabina Gyawali", r: "24/7 Healthcare" },
];

export const CREDENTIALS = ["20+ years in health & social care", "Certified JMT Coach, Mentor & Trainer", "Certified MDPI Personality Analyst", "Care home & domiciliary specialist"];

// ── Brand rainbow (from the Connect logo) used as a soft accent motif ──
export const RAINBOW = ["#e0559a", "#ef9a3d", "#7a55a6", "#5fb85a", "#2f8fce"];
export function RainbowLine({ className = "" }: { className?: string }) {
  return <span className={`block h-1 w-10 rounded-full bg-gradient-to-r from-[#e0559a] via-[#ef9a3d] to-[#2f8fce] ${className}`} aria-hidden />;
}
export function RainbowDots({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-1.5 ${className}`} aria-hidden>
      {RAINBOW.map((c) => <span key={c} className="h-2 w-2 rounded-full" style={{ background: c }} />)}
    </span>
  );
}
export function AccentBar({ className = "" }: { className?: string }) {
  return <span className={`block h-1.5 w-full bg-[linear-gradient(to_right,#e0559a,#ef9a3d,#7a55a6,#5fb85a,#2f8fce)] ${className}`} aria-hidden />;
}

// Storyline connector: a winding line that draws on scroll, threading sections
// together (nala-style). Alternate `flip` so consecutive connectors continue.
export function StorylineConnector({ flip = false, color = "#7a55a6", bg = "" }: { flip?: boolean; color?: string; bg?: string }) {
  return (
    <section className={`connector relative h-[15vh] w-full md:h-[22vh] ${bg}`}>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" fill="none" preserveAspectRatio="none" aria-hidden>
        <path
          className="draw-line"
          d={flip ? "M 32 -2 C 32 42, 72 44, 68 102" : "M 68 -2 C 68 42, 28 44, 32 102"}
          stroke={color}
          strokeWidth="0.55"
          strokeLinecap="round"
          opacity="0.9"
        />
      </svg>
    </section>
  );
}

// Mixed image edges (chamfered cut-corners). For clipped images use
// filter:drop-shadow (NOT box-shadow) and no parallax wrapper.
export const CUT_TR = "polygon(0 0, calc(100% - 2.75rem) 0, 100% 2.75rem, 100% 100%, 0 100%)";
export const CUT_BL = "polygon(0 0, 100% 0, 100% 100%, 2.75rem 100%, 0 calc(100% - 2.75rem))";
export const CUT_TL = "polygon(2.75rem 0, 100% 0, 100% 100%, 0 100%, 0 2.75rem)";

// Marquee ticker.
export const MARQUEE = [
  "CQC Registration", "Mock Inspections", "Outstanding Ratings", "Compliance", "Care Homes",
  "Domiciliary Care", "Manager Support", "Quality Assurance",
];

// ── Buttons (soft rounded pills) ──
export const btnPrimary =
  "group inline-flex items-center justify-center gap-2 rounded-full bg-[#2a7fc4] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#21649d] hover:shadow-md";
export const btnGhost =
  "group inline-flex items-center justify-center gap-2 rounded-full border border-[#2b2d33]/15 px-7 py-3.5 text-sm font-semibold text-[#2b2d33] transition-colors hover:border-[#2a7fc4] hover:text-[#2a7fc4]";

export const Arrow = () => (
  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
);

// ── Label: rainbow accent line + uppercase ──
export function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#2a7fc4]">
      <RainbowLine /> {children}
    </p>
  );
}

// ── Image-led page hero (full-bleed photo, warm scrim, rainbow bar, kinetic title) ──
export function PageHero({ eyebrow, title, intro, img, imgAlt }: { eyebrow: string; title: string; intro: string; img: string; imgAlt: string }) {
  return (
    <section className="relative isolate flex min-h-[58vh] items-end overflow-hidden md:min-h-[66vh]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={img} alt={imgAlt} data-parallax className="absolute inset-0 -z-10 h-[112%] w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#241b2b]/90 via-[#241b2b]/40 to-[#241b2b]/10" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#241b2b]/55 via-transparent to-transparent" />
      <AccentBar className="absolute inset-x-0 top-0 z-10" />
      <div className="mx-auto w-full max-w-6xl px-5 pb-12 pt-32 text-white md:px-8 md:pb-16">
        <p className="hero-fade flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white/85 opacity-0" style={{ transform: "translateY(8px)" }}>
          <RainbowLine /> {eyebrow}
        </p>
        <h1 className={`hero-h mt-5 ${fd} text-[2.6rem] font-light leading-[1.04] tracking-tight md:text-[4rem]`}>
          <span className="block overflow-hidden"><span className="hero-line-inner block pb-[0.08em]" style={{ transform: "translateY(110%)" }}>{title}</span></span>
        </h1>
        <p className="hero-fade mt-5 max-w-xl text-lg font-light text-white/85 opacity-0" style={{ transform: "translateY(8px)" }}>{intro}</p>
      </div>
    </section>
  );
}
