import type { Metadata } from "next";
import Link from "next/link";
import { display, body, IMG, PHONE_TEL, BIZ, TAGLINE } from "./brand";
import { SRHeader } from "./SRHeader";
import { SRFooter } from "./SRFooter";

export const metadata: Metadata = {
  title: {
    default: `${BIZ} — ${TAGLINE}`,
    template: `%s · ${BIZ}`,
  },
  description:
    "Natural stone repair and restoration — marble, granite, limestone, slate and sandstone. Breakages, chips, scratches, stains, limescale and etch marks repaired on site or in the workshop. Over 30 years' experience.",
  openGraph: {
    title: `${BIZ} — ${TAGLINE}`,
    description: "Marble, granite, limestone, slate and sandstone repaired and restored. Over 30 years' experience.",
    url: "https://everydayweb.site/stonerepairs",
    siteName: BIZ,
    type: "website",
    images: [{ url: IMG.hero, width: 1200, height: 630, alt: BIZ }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BIZ} — ${TAGLINE}`,
    description: "Marble, granite, limestone, slate and sandstone repaired and restored.",
    images: [IMG.hero],
  },
};

export default function SRLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${display.variable} ${body.variable} bg-[#ffffff] text-[#15130f]`} style={{ fontFamily: "var(--font-sr-body), sans-serif" }}>
      <SRHeader />
      <main>{children}</main>
      <SRFooter />
      {/* spacer so the fixed mobile bar never covers the footer */}
      <div className="h-[64px] sm:hidden" aria-hidden />
      {/* Pinned Call now / Enquire */}
      <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-white/10 bg-[#15130f] p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.25)] sm:inset-x-auto sm:bottom-5 sm:right-5 sm:rounded-full sm:border sm:border-white/10 sm:p-2 sm:shadow-[0_12px_40px_rgba(21,19,15,0.35)]">
        <a href={PHONE_TEL} className="flex-1 rounded-full border border-white/30 px-5 py-3 text-center text-sm font-semibold text-[#ffffff] transition-colors hover:bg-white hover:text-[#15130f] sm:flex-none sm:px-6">
          Call now
        </a>
        <Link href="/stonerepairs/contact#enquire" className="flex-1 rounded-full bg-[#ffffff] px-5 py-3 text-center text-sm font-semibold text-[#15130f] transition-colors hover:bg-white sm:flex-none sm:px-6">
          Enquire
        </Link>
      </div>
    </div>
  );
}
