import type { Metadata } from "next";
import Link from "next/link";
import { display, body, IMG, PHONE_TEL } from "./brand";
import { BajanHeader } from "./BajanHeader";
import { BajanFooter } from "./BajanFooter";

export const metadata: Metadata = {
  title: {
    default: "BajanApple Digital — Same-Day Printing, Leeds",
    template: "%s · BajanApple Digital",
  },
  description:
    "BajanApple Digital — professional, high-quality B2B same-day digital printing in Leeds & Pudsey. Flyers, posters, business cards, booklets, banners and more, ready in 2–3 hours. 60-minute express available.",
  openGraph: {
    title: "BajanApple Digital — Same-Day Printing, Leeds",
    description: "B2B same-day digital print in Leeds & Pudsey. Flyers, posters, business cards, banners and more — ready in 2–3 hours.",
    url: "https://everydayweb.site/bajan-apple",
    siteName: "BajanApple Digital",
    type: "website",
    images: [{ url: IMG.hero, width: 1200, height: 630, alt: "BajanApple Digital" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BajanApple Digital — Same-Day Printing, Leeds",
    description: "B2B same-day digital print in Leeds & Pudsey — ready in 2–3 hours.",
    images: [IMG.hero],
  },
};

export default function BajanLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${display.variable} ${body.variable} bg-white text-[#16223a]`} style={{ fontFamily: "var(--font-body), sans-serif" }}>
      <BajanHeader />
      <main>{children}</main>
      <BajanFooter />
      <div className="h-[60px] sm:hidden" aria-hidden />
      <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-slate-200 bg-white p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] sm:inset-x-auto sm:bottom-5 sm:right-5 sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none">
        <a href={PHONE_TEL} className="flex-1 rounded-xl bg-[#306fc7] px-5 py-3.5 text-center text-sm font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5 sm:flex-none sm:px-7">
          Call now
        </a>
        <Link href="/bajan-apple/contact#quote" className="flex-1 rounded-xl bg-[#ca2d25] px-5 py-3.5 text-center text-sm font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5 sm:flex-none sm:px-7">
          Get a quote
        </Link>
      </div>
    </div>
  );
}
