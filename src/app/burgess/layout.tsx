import type { Metadata } from "next";
import Link from "next/link";
import { spaceGrotesk, PHONE_1_TEL, IMG } from "./brand";
import { BurgessHeader } from "./BurgessHeader";
import { BurgessFooter } from "./BurgessFooter";

export const metadata: Metadata = {
  title: {
    default: "Burgess Electrical — NICEIC Electrical Contractors, East London",
    template: "%s · Burgess Electrical",
  },
  description:
    "R Burgess Electrical Contractors Ltd — a family-run NICEIC-approved electrician serving East London since 2002. Rewires, EICRs, fire alarms, EV charging, solar, CCTV and 24hr emergency call-out. 10-year guarantee.",
  openGraph: {
    title: "Burgess Electrical — NICEIC Electrical Contractors, East London",
    description: "Family-run NICEIC-approved electricians in East London since 2002. Domestic, commercial & industrial. 10-year guarantee.",
    url: "https://everydayweb.site/burgess",
    siteName: "Burgess Electrical",
    type: "website",
    images: [{ url: IMG.hero, width: 1200, height: 630, alt: "Burgess Electrical" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Burgess Electrical — NICEIC Electrical Contractors, East London",
    description: "Family-run NICEIC-approved electricians in East London since 2002. 10-year guarantee.",
    images: [IMG.hero],
  },
};

export default function BurgessLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${spaceGrotesk.variable} bg-white text-[#11183a]`} style={{ fontFamily: "var(--font-space), sans-serif" }}>
      <BurgessHeader />
      <main>{children}</main>
      <BurgessFooter />
      <div className="h-[60px] sm:hidden" aria-hidden />
      <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-slate-200 bg-white p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] sm:inset-x-auto sm:bottom-5 sm:right-5 sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none">
        <a href={PHONE_1_TEL} className="flex-1 bg-[#16225e] px-5 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white shadow-lg transition-transform hover:-translate-y-0.5 sm:flex-none sm:px-7">
          Call now
        </a>
        <Link href="/burgess/contact#quote" className="flex-1 bg-[#ffd400] px-5 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-[#16225e] shadow-lg transition-transform hover:-translate-y-0.5 sm:flex-none sm:px-7">
          Get a quote
        </Link>
      </div>
    </div>
  );
}
