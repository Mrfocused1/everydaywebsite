import type { Metadata } from "next";
import Link from "next/link";
import { poppins, PHONE_TEL } from "./brand";
import { OptimumHeader } from "./OptimumHeader";
import { OptimumFooter } from "./OptimumFooter";

const OG_IMAGE = "https://images.pexels.com/photos/34688219/pexels-photo-34688219.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=630&w=1200";

export const metadata: Metadata = {
  title: {
    default: "Optimum Management Group — Design & Build · Maintenance · Management",
    template: "%s · Optimum Management Group",
  },
  description:
    "Optimum Management Group is a London-based design & build, maintenance and management contractor for commercial and residential clients — projects managed end to end, from design to handover and beyond.",
  openGraph: {
    title: "Optimum Management Group — Design & Build · Maintenance · Management",
    description: "London design & build, property maintenance and project management for commercial and residential clients.",
    url: "https://everydayweb.site/optimum",
    siteName: "Optimum Management Group",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Optimum Management Group" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Optimum Management Group — Design & Build · Maintenance · Management",
    description: "London design & build, maintenance and management for commercial & residential clients.",
    images: [OG_IMAGE],
  },
};

export default function OptimumLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${poppins.variable} bg-white text-[#1f3a52]`} style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
      <OptimumHeader />
      <main>{children}</main>
      <OptimumFooter />
      <div className="h-[64px] sm:hidden" aria-hidden />
      <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-slate-200 bg-white p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] sm:inset-x-auto sm:bottom-5 sm:right-5 sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none">
        <a href={PHONE_TEL} className="flex-1 rounded-full bg-[#2d5a83] px-5 py-3.5 text-center text-sm font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5 sm:flex-none sm:px-7">
          Call now
        </a>
        <Link href="/optimum/contact" className="flex-1 rounded-full bg-[#1dc6ba] px-5 py-3.5 text-center text-sm font-bold text-[#0e3a44] shadow-lg transition-transform hover:-translate-y-0.5 sm:flex-none sm:px-7">
          Request a quote
        </Link>
      </div>
    </div>
  );
}
