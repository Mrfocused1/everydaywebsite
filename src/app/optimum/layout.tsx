import type { Metadata } from "next";

const OG_IMAGE = "https://images.pexels.com/photos/5461946/pexels-photo-5461946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=630&w=1200";

export const metadata: Metadata = {
  title: "Optimum Management Group — Design & Build · Maintenance · Management",
  description:
    "Optimum Management Group is a London-based design & build, maintenance and management contractor for commercial and residential clients — projects managed end to end, from design to handover and beyond.",
  openGraph: {
    title: "Optimum Management Group — Design & Build · Maintenance · Management",
    description:
      "London-based design & build, property maintenance and project management for commercial and residential clients. Managed end to end.",
    url: "https://everydayweb.site/optimum",
    siteName: "Optimum Management Group",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Optimum Management Group" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Optimum Management Group — Design & Build · Maintenance · Management",
    description: "London-based design & build, maintenance and management for commercial & residential clients.",
    images: [OG_IMAGE],
  },
};

export default function OptimumLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
