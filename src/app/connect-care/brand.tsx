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

// ── Light page hero (warm, airy — soft blurred colour blobs, never dark) ──
export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <section className="relative overflow-hidden bg-[#faf7f2]">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#2f8fce]/10 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -bottom-28 left-1/3 h-72 w-72 rounded-full bg-[#e0559a]/10 blur-3xl" aria-hidden />
      <div className="mx-auto max-w-6xl px-5 pb-14 pt-32 md:px-8 md:pb-20 md:pt-40">
        <div className="hero-fade max-w-3xl opacity-0" style={{ transform: "translateY(10px)" }}>
          <Label>{eyebrow}</Label>
          <h1 className={`mt-5 ${fd} text-[2.6rem] font-light leading-[1.04] tracking-tight text-[#2b2d33] md:text-[4rem]`}>{title}</h1>
          <p className="mt-5 max-w-xl text-lg font-light text-[#6b6f76]">{intro}</p>
        </div>
      </div>
    </section>
  );
}
