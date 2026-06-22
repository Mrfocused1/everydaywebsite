import { Wordmark } from "./Wordmark";
import { SITE } from "@/lib/content";

const LINKS = [
  { label: "The work", href: "/work" },
  { label: "How it works", href: "/#process" },
  { label: "Start your site", href: "/#start" },
];

export function Footer() {
  return (
    <footer data-nav-theme="dark" className="bg-ua-ink text-ua-bg">
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-10 md:py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest opacity-70">Ready to start?</p>
            <a
              href="#start"
              className="mt-2 inline-block text-3xl font-bold ua-wiggle-link"
              style={{ fontFamily: "var(--font-epilogue)" }}
            >
              start your site →
            </a>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-widest opacity-70">Explore</p>
            <ul className="mt-2 space-y-2">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-lg font-bold ua-wiggle-link">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-widest opacity-70">Contact</p>
            <a href={`mailto:${SITE.email}`} className="mt-2 block text-lg font-bold ua-wiggle-link">
              {SITE.email}
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-ua-bg/20 pt-8 sm:flex-row sm:items-end sm:justify-between">
          <a href="/" aria-label={`${SITE.name} — home`} className="ua-wiggle-link">
            <Wordmark color="var(--ua-bg)" className="h-12 w-auto md:h-14" />
          </a>
          <p className="text-sm text-ua-bg/70">© 2026 {SITE.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
