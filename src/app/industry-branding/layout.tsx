import type { Metadata } from "next";
import Link from "next/link";
import { display, body, IMG, PHONE_TEL } from "./brand";
import { IBHeader } from "./IBHeader";
import { IBFooter } from "./IBFooter";

export const metadata: Metadata = {
  title: {
    default: "Industry Branding — Custom Garment Printing, Milton Keynes",
    template: "%s · Industry Branding",
  },
  description:
    "Industry Branding — high-quality, cost-effective custom garment printing & branding in Milton Keynes. T-shirts, hoodies, workwear, hi-vis, caps, embroidery and promo merch. No minimum order, fast turnaround.",
  openGraph: {
    title: "Industry Branding — Custom Garment Printing, Milton Keynes",
    description: "Custom clothing & merch printing in Milton Keynes. No minimum order, fast turnaround.",
    url: "https://everydayweb.site/industry-branding",
    siteName: "Industry Branding",
    type: "website",
    images: [{ url: IMG.hero, width: 1200, height: 630, alt: "Industry Branding" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industry Branding — Custom Garment Printing, Milton Keynes",
    description: "Custom clothing & merch printing in Milton Keynes. No minimum order, fast turnaround.",
    images: [IMG.hero],
  },
};

export default function IBLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${display.variable} ${body.variable} bg-white text-[#0e0e10]`} style={{ fontFamily: "var(--font-body), sans-serif" }}>
      <IBHeader />
      <main>{children}</main>
      <IBFooter />
      <div className="h-[60px] sm:hidden" aria-hidden />
      <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-white/10 bg-[#0e0e10] p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.3)] sm:inset-x-auto sm:bottom-5 sm:right-5 sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none">
        <a href={PHONE_TEL} className="flex-1 rounded-md border border-white/30 px-5 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-[#0e0e10] sm:flex-none sm:px-7 sm:shadow-lg">
          Call now
        </a>
        <Link href="/industry-branding/contact#quote" className="flex-1 rounded-md bg-white px-5 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-[#0e0e10] shadow-lg transition-transform hover:-translate-y-0.5 sm:flex-none sm:px-7">
          Get a quote
        </Link>
      </div>
    </div>
  );
}
