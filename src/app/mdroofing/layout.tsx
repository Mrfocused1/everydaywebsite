import type { Metadata } from "next";
import Link from "next/link";
import { spaceGrotesk, PHONE_1_TEL, IMG } from "./brand";
import { MDHeader } from "./MDHeader";
import { MDFooter } from "./MDFooter";

export const metadata: Metadata = {
  title: {
    default: "M&D Roofing & Landscaping — Roofing, Paving & Landscaping, Nationwide",
    template: "%s · M&D Roofing & Landscaping",
  },
  description:
    "M&D Roofing & Landscaping — established 1990, one of the UK's premier paving contractors. Roofing, block paving, driveways, patios and complete landscaping for homes and commercial sites nationwide. 5-year guarantee as standard.",
  openGraph: {
    title: "M&D Roofing & Landscaping — Roofing, Paving & Landscaping, Nationwide",
    description: "Established 1990. Roofing, block paving, driveways and landscaping — commercial & domestic, nationwide. 5-year guarantee as standard.",
    url: "https://everydayweb.site/mdroofing",
    siteName: "M&D Roofing & Landscaping",
    type: "website",
    images: [{ url: IMG.hero, width: 1200, height: 630, alt: "M&D Roofing & Landscaping" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "M&D Roofing & Landscaping — Roofing, Paving & Landscaping, Nationwide",
    description: "Established 1990. Roofing, paving and landscaping — commercial & domestic, nationwide.",
    images: [IMG.hero],
  },
};

export default function MDLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${spaceGrotesk.variable} bg-white text-[#16241b]`} style={{ fontFamily: "var(--font-space), sans-serif" }}>
      <MDHeader />
      <main>{children}</main>
      <MDFooter />
      <div className="h-[60px] sm:hidden" aria-hidden />
      <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-slate-200 bg-white p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] sm:inset-x-auto sm:bottom-5 sm:right-5 sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none">
        <a href={PHONE_1_TEL} className="flex-1 bg-[#1a3a2a] px-5 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white shadow-lg transition-transform hover:-translate-y-0.5 sm:flex-none sm:px-7">
          Call now
        </a>
        <Link href="/mdroofing/contact#quote" className="flex-1 bg-[#3f8f47] px-5 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white shadow-lg transition-transform hover:-translate-y-0.5 sm:flex-none sm:px-7">
          Get a quote
        </Link>
      </div>
    </div>
  );
}
