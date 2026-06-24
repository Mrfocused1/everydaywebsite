import type { ReactNode } from "react";

// Monoline icons — no emojis in the UI, kept on a 24x24 grid.
const ICONS: Record<string, ReactNode> = {
  spark: (<path d="M12 2.5c.6 4.7 2.3 6.4 7 7-4.7.6-6.4 2.3-7 7-.6-4.7-2.3-6.4-7-7 4.7-.6 6.4-2.3 7-7Z" />),
  layers: (<><path d="M12 3 3 7.5l9 4.5 9-4.5L12 3Z" /><path d="M3 12.5 12 17l9-4.5M3 17 12 21.5 21 17" /></>),
  pen: (<><path d="M14.5 5.5 18.5 9.5M4 20l1-4 11-11 3 3-11 11-4 1Z" /></>),
  ship: (<><path d="M3 13h18l-2.2 6.2A2 2 0 0 1 16.9 20H7.1a2 2 0 0 1-1.9-1.3L3 13Z" /><path d="M5 13V8a2 2 0 0 1 2-2h7l4 4v3M12 6V3" /></>),
  shield: (<path d="M12 2.5 4.5 5.5v6c0 4.4 3.1 8 7.5 10 4.4-2 7.5-5.6 7.5-10v-6L12 2.5Z" />),
  clock: (<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></>),
  gem: (<><path d="M6 3h12l3 6-9 12L3 9l3-6Z" /><path d="M3 9h18M8.5 3 6 9l6 12 6-12-2.5-6" /></>),
  globe: (<><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.4 3.8 5.6 3.8 9S14.5 18.6 12 21c-2.5-2.4-3.8-5.6-3.8-9S9.5 5.4 12 3Z" /></>),
  bag: (<><path d="M6 8h12l-1 12H7L6 8Z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></>),
  sticker: (<><path d="M15 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7l7-7V5a2 2 0 0 0-2-2Z" /><path d="M13 21v-5a2 2 0 0 1 2-2h5" /></>),
  jar: (<><path d="M8 3h8M7 6h10v3a3 3 0 0 1-1 2.2A3 3 0 0 0 15 14v5a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-5a3 3 0 0 0-1-2.8A3 3 0 0 1 7 9V6Z" /></>),
  cup: (<><path d="M5 10h14v2a7 7 0 0 1-14 0v-2Z" /><path d="M9 10V5a3 3 0 0 1 6 0v5" /></>),
  instagram: (<><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17" cy="7" r="1.1" fill="currentColor" stroke="none" /></>),
  mail: (<><rect x="2.5" y="5" width="19" height="14" rx="2" /><path d="M3 6.5 12 13l9-6.5" /></>),
  phone: (<path d="M6.5 3h-3A1.5 1.5 0 0 0 2 4.6C2 13 11 22 19.4 22a1.5 1.5 0 0 0 1.6-1.5v-3a1.5 1.5 0 0 0-1.5-1.5c-1 0-2-.2-2.9-.5a1.5 1.5 0 0 0-1.5.4l-1.3 1.3a14 14 0 0 1-6-6l1.3-1.3a1.5 1.5 0 0 0 .4-1.5c-.3-.9-.5-1.9-.5-2.9A1.5 1.5 0 0 0 6.5 3Z" />),
  menu: (<path d="M3 6h18M3 12h18M3 18h18" />),
  close: (<path d="M6 6l12 12M18 6 6 18" />),
  arrow: (<path d="M5 12h14M13 6l6 6-6 6" />),
  check: (<path d="M4 12.5 9 17.5 20 6.5" />),
};

export function Icon({ name }: { name: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {ICONS[name]}
    </svg>
  );
}
