import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bowdens of London — Builders & Construction in South East London",
  description:
    "Bowdens of London is a full-service building company in South East London. A small, approachable team of skilled, qualified tradespeople for all aspects of building work. Gas Safe, NICEIC & Part P, Checkatrade member. Call for a free quote.",
  openGraph: {
    title: "Bowdens of London — Builders in South East London",
    description:
      "Full-service building & construction in South East London. Qualified, accredited tradespeople. Free quotes.",
    url: "https://everydayweb.site/bowdens",
    siteName: "Bowdens of London",
    type: "website",
    images: [
      {
        url: "/marketing/bowdens-newbuild.jpg",
        width: 1400,
        height: 934,
        alt: "Bowdens of London — building work in progress",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bowdens of London — Builders in South East London",
    description: "Full-service building & construction in South East London. Free quotes.",
    images: ["/marketing/bowdens-newbuild.jpg"],
  },
};

export default function BowdensLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
