import { CaseStudyCard, type CaseStudy } from "@/components/CaseStudyCard";

const PROJECTS: CaseStudy[] = [
  {
    name: "Nala's Baby",
    logo: "/marketing/work/nalas-logo.png",
    blurb:
      "A soft, warm e-commerce site for an award-winning, naturally derived baby and toddler skincare brand. Full-bleed video hero, scroll-driven product storytelling and a friction-light path to shop the range.",
    video: "/marketing/work/nalas-demo.mp4",
    poster: "/marketing/work/nalas-poster.jpg",
    href: "https://www.nalasbaby.site",
    tag: "skincare",
  },
  {
    name: "BYJH",
    logo: "/marketing/work/byjh-logo.png",
    blurb:
      "A sleek, luxury site for a bespoke lifestyle management company and its Mercedes Sprinter and V-Class fleet. Video-led hero, a scroll-driven road journey through the fleet and easy ways to plan a trip or commission a custom build.",
    video: "/marketing/work/byjh-demo.mp4",
    poster: "/marketing/work/byjh-poster.jpg",
    href: "https://www.byjh.co.uk",
    logoClass: "h-12 md:h-14",
    tag: "luxury travel",
  },
  {
    name: "CCC Awards",
    logo: "/marketing/work/ccc-logo.png",
    blurb:
      "A cinematic site for the CCC Awards — recognising impact across community, corporate and culture. Full-bleed event hero, scroll-driven storytelling of the three pillars, winners showcase and a clear path to buy tickets.",
    video: "/marketing/work/ccc-demo.mp4",
    poster: "/marketing/work/ccc-poster.jpg",
    href: "https://cccdemo.online",
    logoClass: "h-12 md:h-14",
    tag: "awards",
  },
  {
    name: "Clearway Driving School",
    logo: "/marketing/work/clearway-logo.svg",
    blurb:
      "A friendly, pass-focused site for a London driving school — DVSA-approved instructors, structured courses and easy lesson booking. Punchy hero, scroll-driven course breakdowns and clear calls to book.",
    video: "/marketing/work/clearway-demo.mp4",
    poster: "/marketing/work/clearway-poster.jpg",
    href: "https://www.clearwaydrivingschool.site",
    logoClass: "h-12 md:h-14",
    tag: "driving school",
  },
  {
    name: "Chuks Fitness",
    logo: "/marketing/work/chuks-logo.png",
    blurb:
      "A bold, high-energy site for a strength coach — coach-led training online and in person. Full-screen video hero, scroll-driven programmes and a friction-light path to book a free session.",
    video: "/marketing/work/chuks-demo.mp4",
    poster: "/marketing/work/chuks-poster.jpg",
    href: "https://www.chuksfitness.site",
    tag: "fitness",
  },
  {
    name: "Springboard",
    logo: "/marketing/work/springboard-logo.svg",
    blurb:
      "A warm community-charity site backing young people with mentoring, learning, wellbeing and opportunity — so every young person can rise. Full-bleed video hero, scroll-driven impact storytelling and easy ways to donate, fundraise or become a mentor.",
    video: "/marketing/work/springboard-demo.mp4",
    poster: "/marketing/work/springboard-poster.jpg",
    href: "https://www.springboardcharity.site",
    tag: "charity",
  },
];

export function WorkGrid() {
  return (
    <section id="work" className="bg-ua-bg px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          {PROJECTS.map((study, i) => {
            const wide = i === 0 || (i === PROJECTS.length - 1 && i % 2 === 1);
            return (
              <div key={study.href} className={wide ? "md:col-span-2" : ""}>
                <CaseStudyCard
                  study={study}
                  wide={wide}
                  flip={wide && i !== 0}
                  delay={wide ? 0 : ((i - 1) % 2) * 0.1}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
