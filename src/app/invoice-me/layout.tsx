import type { Metadata } from "next";

// Private tool — keep it out of search engines.
export const metadata: Metadata = {
  title: "Invoice generator — Bridgeway AI Bootcamp",
  robots: { index: false, follow: false },
};

export default function InvoiceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
