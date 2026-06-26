import type { Metadata } from "next";
import Link from "next/link";
import { spaceGrotesk, anton, PHONE_1_TEL, IMG } from "./brand";
import { PPHeader } from "./PPHeader";
import { PPFooter } from "./PPFooter";

export const metadata: Metadata = {
  title: {
    default: "Premier Plastering South Lakes — Plastering, Rendering & Polished Plaster, Ulverston",
    template: "%s · Premier Plastering South Lakes",
  },
  description:
    "Premier Plastering South Lakes — for all your plastering solutions in Ulverston and across the South Lakes. Plastering & skimming, external rendering, damp proofing & tanking, lime plaster, Venetian polished plaster and micro cement. Domestic & commercial.",
  openGraph: {
    title: "Premier Plastering South Lakes — Plastering, Rendering & Polished Plaster",
    description: "For all your plastering solutions across Ulverston & the South Lakes — plastering, rendering, damp proofing, Venetian polished plaster and micro cement. Domestic & commercial.",
    url: "https://everydayweb.site/premierplastering",
    siteName: "Premier Plastering South Lakes",
    type: "website",
    images: [{ url: IMG.hero, width: 1200, height: 630, alt: "Premier Plastering South Lakes" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premier Plastering South Lakes — Plastering, Rendering & Polished Plaster",
    description: "For all your plastering solutions across Ulverston & the South Lakes. Domestic & commercial.",
    images: [IMG.hero],
  },
};

export default function PPLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${spaceGrotesk.variable} ${anton.variable} bg-white text-[#1f2733]`} style={{ fontFamily: "var(--font-space), sans-serif" }}>
      <PPHeader />
      <main>{children}</main>
      <PPFooter />
      <div className="h-[60px] sm:hidden" aria-hidden />
      <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-slate-200 bg-white p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] sm:inset-x-auto sm:bottom-5 sm:right-5 sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none">
        <a href={PHONE_1_TEL} className="flex-1 bg-[#16293c] px-5 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white shadow-lg transition-transform hover:-translate-y-0.5 sm:flex-none sm:px-7">
          Call now
        </a>
        <Link href="/premierplastering/contact#quote" className="flex-1 bg-[#ff5e3c] px-5 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white shadow-lg transition-transform hover:-translate-y-0.5 sm:flex-none sm:px-7">
          Get a quote
        </Link>
      </div>
    </div>
  );
}
