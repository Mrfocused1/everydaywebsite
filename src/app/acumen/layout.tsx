import type { Metadata } from "next";

const OG_IMAGE = "https://images.pexels.com/photos/17842832/pexels-photo-17842832.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=630&w=1200";

export const metadata: Metadata = {
  title: "Acumen Electrical Solutions — Electricians in Broadstairs & East Kent",
  description:
    "Acumen Electrical Solutions is a family-run, NAPIT-approved electrical contractor in Broadstairs covering East Kent (CT). Domestic & commercial electrics, time-served 18th Edition electricians, fully insured. Call for a free quote.",
  openGraph: {
    title: "Acumen Electrical Solutions — Broadstairs & East Kent Electricians",
    description:
      "Family-run, NAPIT-approved electricians covering East Kent (CT). Domestic & commercial. 18th Edition. Fully insured. You're in safe hands.",
    url: "https://everydayweb.site/acumen",
    siteName: "Acumen Electrical Solutions",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Acumen Electrical Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Acumen Electrical Solutions — Broadstairs & East Kent Electricians",
    description: "Family-run, NAPIT-approved electricians covering East Kent (CT). Fully insured.",
    images: [OG_IMAGE],
  },
};

export default function AcumenLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
