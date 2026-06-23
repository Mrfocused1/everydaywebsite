import type { Metadata } from "next";
import { display, body, IMG } from "./brand";
import { CCCHeader } from "./CCCHeader";
import { CCCFooter } from "./CCCFooter";

export const metadata: Metadata = {
  title: {
    default: "Connect Care Consultancy — CQC & Care Home Consultant, Manchester",
    template: "%s · Connect Care Consultancy",
  },
  description:
    "Connect Care Consultancy helps care home and domiciliary care providers achieve CQC compliance — new provider registration, mock inspections and registered manager support. Led by Nya K. Mabu, 20+ years' experience.",
  openGraph: {
    title: "Connect Care Consultancy — CQC & Care Home Consultant",
    description: "Helping care providers achieve CQC compliance and deliver outstanding care. New registration, mock inspections and manager support.",
    url: "https://everydayweb.site/connect-care",
    siteName: "Connect Care Consultancy",
    type: "website",
    images: [{ url: IMG.nya, width: 1200, height: 630, alt: "Connect Care Consultancy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Connect Care Consultancy — CQC & Care Home Consultant",
    description: "Helping care providers achieve CQC compliance and deliver outstanding care.",
    images: [IMG.nya],
  },
};

export default function CCCLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${display.variable} ${body.variable} bg-white text-[#2b2d33]`} style={{ fontFamily: "var(--font-body), sans-serif" }}>
      <CCCHeader />
      <main>{children}</main>
      <CCCFooter />
    </div>
  );
}
