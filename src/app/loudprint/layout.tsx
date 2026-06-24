import type { Metadata } from "next";
import { Syne, Manrope } from "next/font/google";

// Syne — expressive display grotesk for the loud, premium headlines.
const display = Syne({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-lp-display", display: "swap" });
// Manrope — clean, neutral body that keeps the layout sleek and legible.
const sans = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-lp-sans", display: "swap" });

export const metadata: Metadata = {
  title: "Loud Pack Printing — Custom Mylar Bags, Stickers & UV Miron Jars",
  description:
    "Loud Pack Printing — Identity, Print & Packaging. Premium custom Mylar bags, embossed stickers, UV Miron jars and branded merch. Matte, spot-gloss and foil finishes, printed in-house and shipped worldwide.",
  openGraph: {
    title: "Loud Pack Printing — Identity · Print · Packaging",
    description:
      "We got that gas. Premium custom Mylar bags, embossed stickers and UV Miron jars — designed and printed in-house, shipped worldwide.",
    url: "https://everydayweb.site/loudprint",
    siteName: "Loud Pack Printing",
    type: "website",
  },
};

export default function LoudPrintLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${display.variable} ${sans.variable}`}>{children}</div>;
}
