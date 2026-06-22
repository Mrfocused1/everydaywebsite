import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { WorkCategories } from "@/components/WorkCategories";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "The work — Everyday Web.Site",
  description:
    "Premium websites we've designed and built for charities (Forever Family, Youth n Rise, Commonwell, Stepping Stones, Springboard), sports (Chuks Fitness) and local businesses (Clearway Driving School, The Perfect Pair).",
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

      <WorkCategories />

      <FinalCta />
    </>
  );
}
