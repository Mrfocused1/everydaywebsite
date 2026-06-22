import { Hero } from "@/components/Hero";
import { HorizontalWords } from "@/components/sections/HorizontalWords";
import { Portfolio } from "@/components/sections/Portfolio";
import { Proof } from "@/components/sections/Proof";
import { UrlHook } from "@/components/sections/UrlHook";
import { Process } from "@/components/sections/Process";
import { Marquee } from "@/components/Marquee";
import { Showcase } from "@/components/sections/Showcase";
import { FinalCta } from "@/components/sections/FinalCta";
import { MARQUEE_ITEMS } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HorizontalWords />
      <Portfolio />
      <Proof />
      <UrlHook />
      <Process />
      <Marquee items={MARQUEE_ITEMS} />
      <Showcase />
      <FinalCta />
    </>
  );
}
