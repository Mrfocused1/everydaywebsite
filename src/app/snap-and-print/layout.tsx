import type { Metadata } from "next";
import { Manrope, Caveat } from "next/font/google";

const sans = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-sp-sans", display: "swap" });
const script = Caveat({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-sp-script", display: "swap" });

export const metadata: Metadata = {
  title: "Snap and Print Events — Instant Event Photography & On-the-Spot Printing",
  description:
    "Snap and Print Events — we snap, you smile, you print. High-quality event photography printed on the spot. Festivals, parties, birthdays, weddings and corporate events.",
  openGraph: {
    title: "Snap and Print Events — Instant Event Photography & Printing",
    description: "We snap. You smile. You print. High-quality event photos printed on the spot.",
    url: "https://everydayweb.site/snap-and-print",
    siteName: "Snap and Print Events",
    type: "website",
    images: [{ url: "/marketing/sp/sp-hero.jpg", width: 1200, height: 630, alt: "Snap and Print Events" }],
  },
};

export default function SnapAndPrintLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${sans.variable} ${script.variable}`}>{children}</div>;
}
