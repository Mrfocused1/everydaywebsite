import type { ReactNode } from "react";

// Consistent monoline icons (no emojis anywhere in the design).
const ICONS: Record<string, ReactNode> = {
  camera: (<><path d="M14.5 4h-5L7.5 6.5H4A1.5 1.5 0 0 0 2.5 8v10A1.5 1.5 0 0 0 4 19.5h16A1.5 1.5 0 0 0 21.5 18V8A1.5 1.5 0 0 0 20 6.5h-3.5L14.5 4Z" /><circle cx="12" cy="12.5" r="3.4" /></>),
  zap: (<path d="M13 2.5 4 13.5h6.5l-1.5 8 9-11H11.5l1.5-8Z" />),
  calendar: (<><rect x="3.5" y="5" width="17" height="16" rx="2" /><path d="M3.5 9.5h17M8 3v4M16 3v4" /></>),
  heart: (<path d="M12 20.5 4.2 13a4.7 4.7 0 0 1 6.6-6.6l1.2 1.2 1.2-1.2A4.7 4.7 0 1 1 19.8 13L12 20.5Z" />),
  award: (<><circle cx="12" cy="9" r="5.5" /><path d="M8.5 13.8 7 21.5l5-2.8 5 2.8-1.5-7.7" /></>),
  star: (<path d="M12 3.5l2.6 5.3 5.8.8-4.2 4.1 1 5.8L12 16.8 6.8 19.5l1-5.8L3.6 9.6l5.8-.8L12 3.5Z" />),
  music: (<><path d="M9 18V5l11-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="17" cy="16" r="3" /></>),
  glass: (<><path d="M4 4h16l-8 9-8-9Z" /><path d="M12 13v7M8 20.5h8" /></>),
  cake: (<><path d="M4 21h16M5 21v-7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7" /><path d="M5 16c1.3 0 1.3 1.2 2.7 1.2S9 16 10.3 16s1.4 1.2 2.7 1.2S14.3 16 15.7 16 17 17.2 18.3 17.2" /><path d="M12 12V8" /><circle cx="12" cy="5.5" r="1" /></>),
  gem: (<><path d="M5 3h14l3 6-10 12L2 9l3-6Z" /><path d="M2 9h20M8 3 6 9l6 12 6-12-2-6" /></>),
  briefcase: (<><rect x="2.5" y="7" width="19" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M2.5 12.5h19" /></>),
  instagram: (<><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17" cy="7" r="1.1" fill="currentColor" stroke="none" /></>),
  phone: (<path d="M6.5 3h-3A1.5 1.5 0 0 0 2 4.6C2 13 11 22 19.4 22a1.5 1.5 0 0 0 1.6-1.5v-3a1.5 1.5 0 0 0-1.5-1.5c-1 0-2-.2-2.9-.5a1.5 1.5 0 0 0-1.5.4l-1.3 1.3a14 14 0 0 1-6-6l1.3-1.3a1.5 1.5 0 0 0 .4-1.5c-.3-.9-.5-1.9-.5-2.9A1.5 1.5 0 0 0 6.5 3Z" />),
  mail: (<><rect x="2.5" y="5" width="19" height="14" rx="2" /><path d="M3 6.5 12 13l9-6.5" /></>),
  menu: (<path d="M3 6h18M3 12h18M3 18h18" />),
  close: (<path d="M6 6l12 12M18 6 6 18" />),
};

export function Icon({ name }: { name: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {ICONS[name]}
    </svg>
  );
}
