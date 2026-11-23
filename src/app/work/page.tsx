import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { WorkGrid } from "@/components/WorkGrid";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "The work — Everyday Web.Site",
  description:
    "Premium, bespoke websites we've designed and built — Nala's Baby, BYJH, CCC Awards, Clearway Driving School, Chuks Fitness and Springboard.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="portfolio"
        title="the work"
        intro="Real, premium websites we've designed and built for businesses, charities and creatives — each one bespoke, fast and unmistakably theirs."
        sticker="sparkles"
      />

      <WorkGrid />

      <FinalCta />
    </>
  );
}
