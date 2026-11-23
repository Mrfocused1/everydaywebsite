// src/lib/content.ts
// All site copy + data for the Everyday Web.Site landing page.

export const SITE = {
  name: "Everyday Web.Site",
  email: "hello@bridgewayaibootcamp.com",
  domain: "everydayweb.site",
};

export const HERO = {
  // One entry per line (lines also stack on mobile). Any occurrence of
  // `accent` is picked out in teal.
  headline: { lines: ["Premium", "websites for", "businesses &", "creatives"], accent: "&" },
  subhead:
    "Fast, beautiful, bespoke sites — launched in days, not months. No templates. No fuss. Just a site that's unmistakably yours.",
  ctaLabel: "Start your site",
  ctaHref: "#start",
  secondaryLabel: "See the work",
  secondaryHref: "/work",
  // Proof row under the CTAs; `icon` keys map to inline SVGs in Hero.tsx.
  proof: [
    { icon: "bolt", label: "Fast turnaround" },
    { icon: "layers", label: "100% bespoke" },
    { icon: "monitor", label: "Mobile ready" },
  ],
  // Hero photos (art-directed): landscape on desktop — subject sits right, copy
  // sits left — and a portrait crop on phones/tablets, shown below the copy.
  image: { desktop: "/marketing/hero-desktop.jpg", mobile: "/marketing/hero-mobile.jpg" },
  imageAlt: "A designer talking through a new website on her laptop",
} as const;

// Marquee band words.
export const MARQUEE_ITEMS = [
  "premium websites",
  "built bespoke",
  "launched fast",
  "for businesses & creatives",
  "no templates",
];

// "How it works" — a five-step fan deck.
export type Step = {
  step: string;
  color: string;
  sticker: string;
  bullets: string[];
};

export const STEPS: Step[] = [
  {
    step: "01 — Discover",
    color: "bg-ua-green",
    sticker: "cursor-star",
    bullets: [
      "We learn your brand & goals",
      "Understand what makes you different",
      "Map out the pages you need",
      "Agree the look & feel",
    ],
  },
  {
    step: "02 — Design",
    color: "bg-ua-blue text-ua-bg",
    sticker: "sparkles",
    bullets: [
      "A bespoke design, not a template",
      "Built around your business",
      "Premium, modern & on-brand",
      "Looks great on every screen",
    ],
  },
  {
    step: "03 — Build",
    color: "bg-ua-orange",
    sticker: "laptop-2",
    bullets: [
      "Fast, polished & responsive",
      "Smooth motion & detail",
      "Lightning-quick to load",
      "Ready in days, not months",
    ],
  },
  {
    step: "04 — Launch",
    color: "bg-ua-pink",
    sticker: "earth",
    bullets: [
      "Live at everydayweb.site/you",
      "No domain to buy or set up",
      "Hosting handled for you",
      "Your own domain later, if you want",
    ],
  },
  {
    step: "05 — Grow",
    color: "bg-ua-sky",
    sticker: "cool-smiley",
    bullets: [
      "Updates & tweaks anytime",
      "New pages as you grow",
      "Friendly, ongoing support",
      "We're here when you need us",
    ],
  },
];

// Showcase scatter — real portfolio screenshots.
export type ShowcasePhoto = {
  src: string;
  className: string; // size + absolute position (desktop)
  rotate: number;
  z: number;
  sticker?: { name: string; size: number; rotate: number; className: string };
  imgClassName?: string;
};

export const SHOWCASE: ShowcasePhoto[] = [
  {
    src: "/marketing/work/nalas-poster.jpg",
    className: "left-[5%] top-0 w-[22rem] aspect-[16/10]",
    rotate: -4,
    z: 2,
    sticker: { name: "thumbs-up", size: 84, rotate: 10, className: "-right-5 -top-6" },
  },
  {
    src: "/marketing/work/byjh-poster.jpg",
    className: "left-[52%] top-[15rem] w-[21rem] aspect-[16/10]",
    rotate: 3,
    z: 3,
    sticker: { name: "cool-smiley", size: 84, rotate: -8, className: "-right-5 -top-6" },
  },
  {
    src: "/marketing/work/ccc-poster.jpg",
    className: "left-[8%] top-[34rem] w-[22rem] aspect-[16/10]",
    rotate: 3,
    z: 4,
    sticker: { name: "sparkles", size: 92, rotate: -10, className: "-right-5 -top-6" },
  },
  {
    src: "/marketing/work/clearway-poster.jpg",
    className: "left-[50%] top-[52rem] w-[22rem] aspect-[16/10]",
    rotate: -3,
    z: 3,
    sticker: { name: "lets-go", size: 92, rotate: 8, className: "-right-6 -top-6" },
  },
  {
    src: "/marketing/work/chuks-poster.jpg",
    className: "left-[10%] top-[70rem] w-[21rem] aspect-[16/10]",
    rotate: 2,
    z: 4,
    sticker: { name: "high-five", size: 98, rotate: -6, className: "-left-7 -bottom-4" },
  },
];
