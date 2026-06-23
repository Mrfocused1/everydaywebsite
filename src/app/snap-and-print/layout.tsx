import type { Metadata } from "next";
import Link from "next/link";
import { display, body, IMG, INSTAGRAM } from "./brand";
import { SPHeader } from "./SPHeader";
import { SPFooter } from "./SPFooter";

export const metadata: Metadata = {
  title: {
    default: "Snap & Print Events — Instant Event Photography & On-Site Printing",
    template: "%s · Snap & Print Events",
  },
  description:
    "Snap & Print Events — a roaming event photographer who captures the moment and prints it on the spot. Festivals, parties, weddings, birthdays, brand activations and corporate events. Snap it, print it, keep it.",
  openGraph: {
    title: "Snap & Print Events — Instant Event Photography & On-Site Printing",
    description: "We snap it, print it on the spot, and your guests keep it. Festivals, parties, weddings and brand activations.",
    url: "https://everydayweb.site/snap-and-print",
    siteName: "Snap & Print Events",
    type: "website",
    images: [{ url: IMG.hero, width: 1200, height: 630, alt: "Snap & Print Events" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Snap & Print Events — Instant Event Photography & On-Site Printing",
    description: "We snap it, print it on the spot, and your guests keep it.",
    images: [IMG.hero],
  },
};

export default function SPLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${display.variable} ${body.variable} bg-white text-[#0e0e10]`} style={{ fontFamily: "var(--font-body), sans-serif" }}>
      <SPHeader />
      <main>{children}</main>
      <SPFooter />
      <div className="h-[60px] sm:hidden" aria-hidden />
      <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-white/10 bg-[#0e0e10] p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.3)] sm:inset-x-auto sm:bottom-5 sm:right-5 sm:rounded-xl sm:border sm:border-white/10 sm:p-2 sm:shadow-[0_10px_40px_rgba(0,0,0,0.45)]">
        <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="flex-1 rounded-md border border-white/40 px-5 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-[#0e0e10] sm:flex-none sm:px-7">
          Instagram
        </a>
        <Link href="/snap-and-print/contact#book" className="flex-1 rounded-md bg-[#FF4D2E] px-5 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white shadow-lg transition-transform hover:-translate-y-0.5 sm:flex-none sm:px-7">
          Book Us
        </Link>
      </div>
    </div>
  );
}
