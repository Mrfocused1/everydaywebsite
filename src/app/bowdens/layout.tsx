import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bowdens of London — Builders & Construction in South East London",
  description:
    "Bowdens of London is a full-service building company in South East London. A small, approachable team of skilled, qualified tradespeople for all aspects of building work. Gas Safe, NICEIC & Part P, Checkatrade member. Call for a free quote.",
  openGraph: {
    title: "Bowdens of London — Builders in South East London",
    description:
      "Full-service building & construction in South East London. Qualified, accredited tradespeople. Free quotes.",
  },
};

export default function BowdensLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
