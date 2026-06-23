"use client";

import { usePathname } from "next/navigation";
import { TopBar } from "./TopBar";
import { Footer } from "./Footer";

// Standalone routes that render their own header/footer (client microsites).
const BARE_PREFIXES = ["/bowdens", "/acumen", "/optimum", "/sh-electrical", "/industry-branding", "/connect-care", "/printattack"];

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/";
  const bare = BARE_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`));

  if (bare) return <>{children}</>;

  return (
    <>
      <TopBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
