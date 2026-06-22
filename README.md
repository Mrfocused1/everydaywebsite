# Everyday Web.Site

Landing page for **Everyday Web.Site** — a studio designing premium, bespoke
websites for businesses and creatives. Sites go live at
`everydayweb.site/<client-name>` (no domain needed).

Single-page Next.js (App Router) + Tailwind v4 + GSAP. Playful brutalist design
with hand-drawn scribble accents, sticker motifs, scroll-driven animation and a
fan-deck "how it works" section.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Structure

- `src/app/page.tsx` — section order
- `src/lib/content.ts` — all copy + portfolio data (edit here)
- `src/components/` — Hero, TopBar, Footer, animation primitives
- `src/components/sections/` — homepage sections
- `public/marketing/` — stickers + portfolio screenshots/clips
