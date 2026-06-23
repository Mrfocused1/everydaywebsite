import type { Metadata } from "next";
import Link from "next/link";
import { spaceGrotesk, PHONE_1_TEL, IMG } from "./brand";
import { SHHeader } from "./SHHeader";
import { SHFooter } from "./SHFooter";

export const metadata: Metadata = {
  title: {
    default: "SH Electrical Mcr Ltd — NAPIT Approved Electrician, Manchester",
    template: "%s · SH Electrical Mcr Ltd",
  },
  description:
    "SH Electrical Mcr Ltd — a family-run, NAPIT-approved electrician serving Manchester & Greater Manchester with over 30 years' experience. Rewires, consumer units, testing & inspection, EV charging, lighting and renovations.",
  openGraph: {
    title: "SH Electrical Mcr Ltd — NAPIT Approved Electrician, Manchester",
    description: "Family-run, NAPIT-approved electricians across Greater Manchester. 30+ years' experience. Domestic, commercial & industrial.",
    url: "https://everydayweb.site/sh-electrical",
    siteName: "SH Electrical Mcr Ltd",
    type: "website",
    images: [{ url: IMG.hero, width: 1200, height: 630, alt: "SH Electrical Mcr Ltd" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SH Electrical Mcr Ltd — NAPIT Approved Electrician, Manchester",
    description: "Family-run, NAPIT-approved electricians across Greater Manchester. 30+ years' experience.",
    images: [IMG.hero],
  },
};

export default function SHLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${spaceGrotesk.variable} bg-white text-[#11183a]`} style={{ fontFamily: "var(--font-space), sans-serif" }}>
      <SHHeader />
      <main>{children}</main>
      <SHFooter />
      <div className="h-[60px] sm:hidden" aria-hidden />
      <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-slate-200 bg-white p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] sm:inset-x-auto sm:bottom-5 sm:right-5 sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none">
        <a href={PHONE_1_TEL} className="flex-1 bg-[#16225e] px-5 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white shadow-lg transition-transform hover:-translate-y-0.5 sm:flex-none sm:px-7">
          Call now
        </a>
        <Link href="/sh-electrical/contact#quote" className="flex-1 bg-[#1f8fd6] px-5 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white shadow-lg transition-transform hover:-translate-y-0.5 sm:flex-none sm:px-7">
          Get a quote
        </Link>
      </div>
    </div>
  );
}
