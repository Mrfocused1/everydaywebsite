import type { Metadata } from "next";
import { Baloo_2, DM_Sans, Epilogue, Lora } from "next/font/google";
import "./globals.css";
import { SiteChrome } from "@/components/SiteChrome";

const baloo = Baloo_2({
  variable: "--font-chewy",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const SITE_TITLE = "Everyday Web.Site — Premium websites for businesses & creatives";
const SITE_DESCRIPTION =
  "A design studio crafting fast, beautiful, bespoke websites for businesses and creatives. Launched in days, live at everydayweb.site/yourbusiness — no domain needed.";

export const metadata: Metadata = {
  metadataBase: new URL("https://everydayweb.site"),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "https://everydayweb.site",
    siteName: "Everyday Web.Site",
    images: [{ url: "/marketing/work/clearway-poster.jpg", width: 1280, height: 720 }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/marketing/work/clearway-poster.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${epilogue.variable} ${lora.variable} ${baloo.variable} h-full`}
      style={{ fontFamily: "var(--font-dm-sans), DM Sans, sans-serif", scrollBehavior: "smooth" }}
    >
      <body className="ua-body flex flex-col min-h-full">
        <noscript>
          <style>{`.ua-reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
