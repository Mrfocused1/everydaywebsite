import { Anton, Bebas_Neue, Yellowtail, Inter } from "next/font/google";

// ── Fonts ──
export const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton", display: "swap" });
export const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas", display: "swap" });
export const yellowtail = Yellowtail({ weight: "400", subsets: ["latin"], variable: "--font-script", display: "swap" });
export const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const FONT_VARS = `${anton.variable} ${bebas.variable} ${yellowtail.variable} ${inter.variable}`;

// Font-family utility classes (Tailwind v4 arbitrary properties).
export const DISPLAY = "[font-family:var(--font-anton)] uppercase leading-[0.92] tracking-[-0.01em]";
export const COND = "[font-family:var(--font-bebas)] uppercase";
export const SCRIPT = "[font-family:var(--font-script)]";

// ── Palette (hex; used as arbitrary Tailwind classes) ──
export const C = {
  ink: "#0c0b0a",
  char: "#16140f",
  char2: "#1e1b16",
  gold: "#c99a3b",
  goldlt: "#e2bb6b",
  bone: "#f3efe6",
  ash: "#a39c8e",
};

// Cut-corner clip-paths (mixed image edges).
export const CUT_TL = "polygon(34px 0, 100% 0, 100% 100%, 0 100%, 0 34px)";
export const CUT_BR = "polygon(0 0, 100% 0, 100% calc(100% - 34px), calc(100% - 34px) 100%, 0 100%)";

// ─────────────────────────────────────────────────────────────
//  Site config — contact details are PLACEHOLDERS except Instagram.
//  Phone uses the UK reserved 07700 900xxx test range (non-routable).
// ─────────────────────────────────────────────────────────────
export const BASE = "/bobs-ntaba";

export const SITE = {
  name: "Bobs Ntaba",
  phone: "+447700900123",
  phoneDisplay: "+44 7700 900 123",
  whatsapp: "447700900123",
  email: "orders@bobsntaba.co.uk",
  instagram: "https://www.instagram.com/bobsntaba/",
  instagramHandle: "@bobsntaba",
  area: "Made fresh in Birmingham — collection & local delivery",
  hours: "Order Fri–Sun · 12pm – 9pm",
};

export const MATCHDAY = {
  badge: "Matchday Weekend",
  short: "⚽ MATCHDAY WEEKEND — orders open Fri–Sun. Order by Fri 9pm.",
  title: "Big game. Bigger plates.",
  date: "This Saturday · 27 June",
  body:
    "The grill fires up for the weekend fixture. Pre-order your Ntaba now and pick it up hot before kick-off. Limited trays — first come, first served.",
  cutoff: "Order cut-off: Friday 9pm",
};

export const NAV = [
  { href: BASE, label: "Home" },
  { href: `${BASE}/prices`, label: "Price List" },
  { href: `${BASE}/contact`, label: "Contact" },
];

export type MenuItem = { name: string; desc: string; price: string; serves?: string; tag?: string };
export type MenuGroup = { group: string; note: string; items: MenuItem[] };

export const MENU: MenuGroup[] = [
  {
    group: "The Ntaba",
    note: "Slow-grilled goat meat, tossed with onions, scotch bonnet & green pepper. Wrapped or plated.",
    items: [
      { name: "Small Tray", desc: "A proper solo portion", price: "£8", serves: "Serves 1" },
      { name: "Regular Tray", desc: "Our most-ordered size", price: "£12", serves: "Serves 1–2", tag: "Popular" },
      { name: "Large Tray", desc: "Share it, or don't", price: "£18", serves: "Serves 2–3" },
      { name: "Family Platter", desc: "Sunday-sized", price: "£35", serves: "Serves 4–5" },
      { name: "Party Bowl", desc: "Function fuel", price: "£65", serves: "Serves 8–10" },
    ],
  },
  {
    group: "Matchday Special",
    note: "Weekend only, while trays last.",
    items: [
      {
        name: "Matchday Platter",
        desc: "Large Ntaba + 2 roast plantain sticks + extra pepper sauce",
        price: "£20",
        serves: "Serves 2",
        tag: "Weekend only",
      },
    ],
  },
  {
    group: "Sides & Extras",
    note: "Add to any tray.",
    items: [
      { name: "Roast Plantain Stick", desc: "Sweet, charred, on the skewer", price: "£2.50" },
      { name: "Jollof Rice", desc: "Smoky party-style portion", price: "£4" },
      { name: "Extra Onions & Pepper", desc: "Pile it on", price: "£1" },
      { name: "Scotch Bonnet Sauce", desc: "Handle with care", price: "£1.50" },
    ],
  },
  {
    group: "Drinks",
    note: "Cold ones to cut the heat.",
    items: [
      { name: "Homemade Chapman", desc: "Sweet & citrus", price: "£3" },
      { name: "Soft Drinks", desc: "Cans, chilled", price: "£2" },
    ],
  },
];

// Accent-line label (no pill badges).
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className={`flex items-center gap-3 ${COND} tracking-[0.22em] text-[0.82rem] text-[#c99a3b]`}>
      <span className="h-px w-8 bg-[#c99a3b]" aria-hidden /> {children}
    </p>
  );
}
