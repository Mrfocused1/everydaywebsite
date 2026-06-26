import type { Metadata } from "next";
import { FONT_VARS } from "./brand";
import { AnnouncementBanner } from "./AnnouncementBanner";
import { BobsHeader } from "./BobsHeader";
import { BobsFooter } from "./BobsFooter";
import { CallNow } from "./CallNow";
import { BobsFX } from "./BobsFX";

const OG_IMAGE = "https://everydayweb.site/bobs-ntaba/hero-wide.png";

export const metadata: Metadata = {
  title: {
    default: "Bobs Ntaba — Grilled Goat Meat, Made to Order",
    template: "%s · Bobs Ntaba",
  },
  description:
    "Bold flavour, rooted culture. Slow-grilled goat meat (Ntaba) made fresh to order in Birmingham. Order for the weekend matchday rush.",
  openGraph: {
    title: "Bobs Ntaba — Grilled Goat Meat, Made to Order",
    description: "Bold flavour, rooted culture. Slow-grilled Ntaba made fresh to order.",
    url: "https://everydayweb.site/bobs-ntaba",
    siteName: "Bobs Ntaba",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1672, height: 941, alt: "Bobs Ntaba grilled goat meat" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bobs Ntaba — Grilled Goat Meat, Made to Order",
    description: "Bold flavour, rooted culture. Slow-grilled Ntaba made fresh to order.",
    images: [OG_IMAGE],
  },
};

export default function BobsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${FONT_VARS} bg-[#0c0b0a] text-[#f3efe6]`} style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
      <AnnouncementBanner />
      <BobsHeader />
      <main>{children}</main>
      <BobsFooter />
      <CallNow />
      <BobsFX />
    </div>
  );
}
