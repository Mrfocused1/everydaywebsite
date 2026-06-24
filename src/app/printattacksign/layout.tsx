import type { Metadata } from "next";
import Link from "next/link";
import { display, body, IMG, PHONE_TEL } from "./brand";
import { PAHeader } from "./PAHeader";
import { PAFooter } from "./PAFooter";

export const metadata: Metadata = {
  title: {
    default: "Print Attack UK — High-Quality DTF Printing, Brentwood",
    template: "%s · Print Attack UK",
  },
  description:
    "Print Attack UK — high-quality DTF printing in Brentwood, covering North, South, East & West. Custom t-shirts, hoodies, workwear, hi-vis, uniforms and gang sheets. Minimum order 6, fast turnaround.",
  openGraph: {
    title: "Print Attack UK — High-Quality DTF Printing, Brentwood",
    description: "Custom DTF garment printing in Brentwood, UK. Minimum order 6, fast turnaround.",
    url: "https://everydayweb.site/printattacksign",
    siteName: "Print Attack UK",
    type: "website",
    images: [{ url: IMG.hero, width: 1200, height: 630, alt: "Print Attack UK" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Print Attack UK — High-Quality DTF Printing, Brentwood",
    description: "Custom DTF garment printing in Brentwood, UK. Minimum order 6, fast turnaround.",
    images: [IMG.hero],
  },
};

export default function PALayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${display.variable} ${body.variable} bg-white text-[#0e0e10]`} style={{ fontFamily: "var(--font-body), sans-serif" }}>
      <PAHeader />
      <main>{children}</main>
      <PAFooter />
      <div className="h-[60px] sm:hidden" aria-hidden />
      <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-white/10 bg-[#0e0e10] p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.3)] sm:inset-x-auto sm:bottom-5 sm:right-5 sm:rounded-xl sm:border sm:border-white/10 sm:p-2 sm:shadow-[0_10px_40px_rgba(0,0,0,0.45)]">
        <a href={PHONE_TEL} className="flex-1 rounded-md border border-white/40 px-5 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-[#0e0e10] sm:flex-none sm:px-7">
          Call now
        </a>
        <Link href="/printattacksign/contact#quote" className="flex-1 rounded-md bg-white px-5 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-[#0e0e10] shadow-lg transition-transform hover:-translate-y-0.5 sm:flex-none sm:px-7">
          Get a quote
        </Link>
      </div>
    </div>
  );
}
