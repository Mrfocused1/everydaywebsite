"use client";

import { useEffect, useRef } from "react";
import { Inter } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EnquiryForm } from "./EnquiryForm";

/* eslint-disable @next/next/no-img-element */

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], display: "swap" });

const PHONE_DISPLAY = "07539 478387";
const PHONE_TEL = "tel:07539478387";
const EMAIL = "Gyasi@optimummg.com";
const ADDRESS = "International House, 64 Nile Street, London N1 7SR";

const IMG = {
  hero: "https://images.pexels.com/photos/34688219/pexels-photo-34688219.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=720",
  about: "https://images.pexels.com/photos/7937659/pexels-photo-7937659.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=720&w=960",
  designbuild: "https://images.pexels.com/photos/25461690/pexels-photo-25461690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  maintenance: "https://images.pexels.com/photos/34517611/pexels-photo-34517611.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  management: "https://images.pexels.com/photos/28196526/pexels-photo-28196526.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  electrical: "https://images.pexels.com/photos/36085816/pexels-photo-36085816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  av: "https://images.pexels.com/photos/6949367/pexels-photo-6949367.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  commercial: "https://images.pexels.com/photos/35188667/pexels-photo-35188667.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=720&w=960",
  residential: "https://images.pexels.com/photos/28456461/pexels-photo-28456461.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=720&w=960",
  gallery1: "https://images.pexels.com/photos/3882638/pexels-photo-3882638.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  gallery2: "https://images.pexels.com/photos/6474133/pexels-photo-6474133.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  gallery3: "https://images.pexels.com/photos/7045356/pexels-photo-7045356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=720",
};

const PILLARS = [
  { k: "Design & Build", v: "Concept and drawings through to a finished, handed-over space." },
  { k: "Maintenance", v: "Planned and reactive upkeep that keeps your property running." },
  { k: "Management", v: "Trades, timelines and budgets handled — one point of contact." },
];

const SERVICES = [
  { title: "Design & Build", img: IMG.designbuild, body: "Full design-and-build delivery, from concept and drawings through to a finished space." },
  { title: "Property Maintenance", img: IMG.maintenance, body: "Planned and reactive maintenance to keep your property running and looking its best." },
  { title: "Project Management", img: IMG.management, body: "End-to-end management of trades, timelines and budgets, with one point of contact." },
  { title: "Electrical Installation", img: IMG.electrical, body: "Commercial and residential electrical installation, carried out safely and to standard." },
  { title: "Audio-Visual", img: IMG.av, body: "AV system design and installation for meeting rooms, retail and homes." },
  { title: "Maintenance Contracts", img: IMG.commercial, body: "Ongoing service agreements that keep your buildings compliant and cared for." },
];

const PROCESS = [
  { k: "Design", v: "We scope the brief, draw it up and agree a clear plan and price." },
  { k: "Build", v: "Our managed teams deliver the works on time and on budget." },
  { k: "Maintain", v: "Planned and reactive maintenance keeps everything running." },
  { k: "Manage", v: "One point of contact for your property, long after handover." },
];

const navyBtn =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-[#2d5a83] px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#234a6c]";
const ghostBtn =
  "inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-7 py-3.5 text-base font-semibold text-slate-700 transition-colors hover:border-[#2d5a83] hover:text-[#2d5a83]";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#15a99e]">
      <span className="h-px w-8 bg-[#1dc6ba]" aria-hidden /> {children}
    </p>
  );
}

export default function OptimumPage() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    gsap.registerPlugin(ScrollTrigger);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (reduce) {
        gsap.set("[data-reveal]", { opacity: 1, y: 0 });
        return;
      }
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((node) => {
        gsap.from(node, { opacity: 0, y: 26, duration: 0.7, ease: "power2.out", scrollTrigger: { trigger: node, start: "top 88%", once: true } });
      });
      gsap.utils.toArray<HTMLElement>("[data-stagger] > *").forEach((node, i) => {
        gsap.from(node, { opacity: 0, y: 28, duration: 0.6, delay: (i % 3) * 0.08, ease: "power2.out", scrollTrigger: { trigger: node, start: "top 90%", once: true } });
      });
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((img) => {
        gsap.to(img, { yPercent: 8, ease: "none", scrollTrigger: { trigger: img.parentElement, start: "top bottom", end: "bottom top", scrub: true } });
      });
      const path = el.querySelector<SVGPathElement>(".proc-line");
      if (path && typeof path.getTotalLength === "function") {
        const len = path.getTotalLength();
        gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(path, { strokeDashoffset: 0, ease: "none", scrollTrigger: { trigger: ".proc", start: "top 70%", end: "bottom 75%", scrub: true } });
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className={`${inter.className} bg-white text-[#1f3a52]`}>
      {/* ── Header ── */}
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
          <a href="#top" aria-label="Optimum Management Group">
            <img src="/marketing/optimum-logo.svg" alt="Optimum Management Group" className="h-12 w-auto md:h-14" />
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 lg:flex">
            <a href="#services" className="hover:text-[#2d5a83]">Services</a>
            <a href="#process" className="hover:text-[#2d5a83]">How we work</a>
            <a href="#sectors" className="hover:text-[#2d5a83]">Sectors</a>
            <a href="#work" className="hover:text-[#2d5a83]">Our work</a>
            <a href="#enquiry" className="hover:text-[#2d5a83]">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={PHONE_TEL} className="hidden text-sm font-bold text-[#2d5a83] sm:inline">{PHONE_DISPLAY}</a>
            <a href="#enquiry" className="rounded-lg bg-[#2d5a83] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#234a6c] md:px-5">
              Request a quote
            </a>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section id="top" className="bg-gradient-to-b from-[#f4f7fa] to-white">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-10 md:px-8 md:py-24 lg:gap-12 lg:py-24 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="order-2 lg:order-1">
            <Eyebrow>London design, build &amp; management</Eyebrow>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight md:text-[3.4rem]">
              Designed, built and <span className="text-[#2d5a83]">managed end to end.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-600">
              Optimum Management Group is a London-based design &amp; build, maintenance and management contractor for
              commercial and residential clients. One team, one point of contact — from first drawings to long after
              handover.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#enquiry" className={navyBtn}>Request a quote</a>
              <a href={PHONE_TEL} className={ghostBtn}>Call {PHONE_DISPLAY}</a>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-slate-500">
              {["Design & Build", "Maintenance", "Management"].map((t) => (
                <span key={t} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-[#1dc6ba]" aria-hidden /> {t}
                </span>
              ))}
            </div>
          </div>
          <div className="relative order-1 lg:order-2" data-reveal>
            <img
              src={IMG.hero}
              alt="Optimum Management Group project"
              className="h-64 w-full object-cover sm:h-80 md:h-[28rem] lg:h-[32rem]"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 3rem), calc(100% - 3rem) 100%, 0 100%)",
                filter: "drop-shadow(0 18px 30px rgba(45,90,131,0.22))",
              }}
            />
            <div className="absolute -bottom-5 -left-5 hidden border-l-4 border-[#1dc6ba] bg-white px-5 py-4 shadow-lg sm:block">
              <p className="text-lg font-extrabold leading-none text-[#2d5a83]">End to end</p>
              <p className="mt-1 text-xs font-medium text-slate-500">design · build · maintain · manage</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Three pillars (bordered grid) ── */}
      <section className="border-y border-slate-100 bg-[#f4f7fa]">
        <div className="mx-auto max-w-6xl px-5 py-10 md:px-8" data-reveal>
          <div className="grid grid-cols-1 border-l border-t border-slate-200 sm:grid-cols-3">
            {PILLARS.map((p) => (
              <div key={p.k} className="border-b border-r border-slate-200 bg-white p-6">
                <h3 className="text-lg font-bold text-[#2d5a83]">{p.k}</h3>
                <p className="mt-1.5 text-sm text-slate-600">{p.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl shadow-lg" data-reveal>
            <img src={IMG.about} alt="Optimum project planning" data-parallax className="aspect-[4/3] w-full scale-110 object-cover" />
          </div>
          <div data-reveal>
            <Eyebrow>About us</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">One team for the whole project.</h2>
            <p className="mt-5 text-lg text-slate-600">
              We bring design, construction, maintenance and management under one roof — so you deal with one team and
              one point of contact, not a chain of separate trades. From commercial fit-outs to residential projects,
              we plan it, build it and keep it running.
            </p>
            <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {["Commercial & residential", "One point of contact", "Managed end to end", "London-based"].map((x) => (
                <li key={x} className="flex items-start gap-2 text-slate-700">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-[#1dc6ba]" aria-hidden /> {x}
                </li>
              ))}
            </ul>
            <a href="#services" className={`${navyBtn} mt-8`}>See our services</a>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="bg-[#f4f7fa]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl" data-reveal>
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">Design, build, maintain &amp; manage.</h2>
            <p className="mt-4 text-lg text-slate-600">A complete service for your property — delivered and managed by one accountable team.</p>
            <p className="mt-3 text-sm font-semibold text-slate-400 sm:hidden">Swipe for more →</p>
          </div>
          <div className="-mx-5 mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:mt-12 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 lg:grid-cols-3" data-stagger>
            {SERVICES.map((s) => (
              <article key={s.title} className="group w-[80%] shrink-0 snap-start overflow-hidden rounded-2xl border border-[#2d5a83]/30 bg-white shadow-sm transition-all hover:border-[#2d5a83]/70 hover:shadow-lg sm:w-auto sm:shrink">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{s.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process (scroll-story line) ── */}
      <section id="process" className="proc bg-white">
        <div className="mx-auto grid max-w-6xl items-start gap-14 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2">
          <div data-reveal>
            <Eyebrow>How we work</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">Managed end to end.</h2>
            <p className="mt-5 text-lg text-slate-600">From the first conversation to long after handover, one team owns the outcome.</p>
            <div className="relative mt-8 pl-8">
              <svg className="pointer-events-none absolute left-[7px] top-2 h-[calc(100%-1rem)] w-2" viewBox="0 0 4 400" preserveAspectRatio="none" fill="none" aria-hidden="true">
                <path className="proc-line" d="M2 0 L2 400" stroke="#1dc6ba" strokeWidth="2.5" />
              </svg>
              <ol className="space-y-6">
                {PROCESS.map((c, i) => (
                  <li key={c.k} className="relative" data-reveal>
                    <span className="absolute -left-8 top-1.5 flex h-4 w-4 items-center justify-center border-2 border-white bg-[#1dc6ba] text-[8px] font-bold text-white shadow">{i + 1}</span>
                    <h3 className="font-bold text-[#2d5a83]">{c.k}</h3>
                    <p className="text-sm text-slate-600">{c.v}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="relative lg:sticky lg:top-24" data-reveal>
            <img src={IMG.gallery3} alt="Optimum delivering a project" className="aspect-[4/5] w-full object-cover shadow-lg" style={{ clipPath: "polygon(3rem 0, 100% 0, 100% 100%, 0 100%, 0 3rem)" }} />
          </div>
        </div>
      </section>

      {/* ── Sectors ── */}
      <section id="sectors" className="bg-[#2d5a83] text-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl" data-reveal>
            <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#7fe6dd]"><span className="h-px w-8 bg-[#1dc6ba]" /> Who we work with</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">Commercial &amp; residential.</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2" data-stagger>
            {[
              { t: "Commercial", img: IMG.commercial, b: "Offices, retail and workspaces — fit-outs, refurbishments and ongoing maintenance contracts that keep your premises sharp." },
              { t: "Residential", img: IMG.residential, b: "Homes and developments — design-and-build projects, renovations and reliable upkeep for private clients and landlords." },
            ].map((s, i) => (
              <article key={s.t} className="group relative overflow-hidden">
                <img src={s.img} alt={s.t} loading="lazy" className="aspect-[5/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" style={{ clipPath: i === 0 ? "polygon(0 0, 100% 0, 100% 100%, 2.5rem 100%, 0 calc(100% - 2.5rem))" : "polygon(0 0, calc(100% - 2.5rem) 0, 100% 2.5rem, 100% 100%, 0 100%)" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a55]/85 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 md:p-8">
                  <h3 className="text-2xl font-extrabold">{s.t}</h3>
                  <p className="mt-2 max-w-md text-sm text-white/80">{s.b}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section id="work" className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4" data-reveal>
            <div>
              <Eyebrow>Our work</Eyebrow>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">Delivered with care.</h2>
            </div>
            <a href="#enquiry" className={ghostBtn}>Start your project</a>
          </div>
          <div className="-mx-5 mt-10 flex snap-x gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 md:grid-cols-4" data-stagger>
            {[IMG.gallery1, IMG.designbuild, IMG.gallery2, IMG.commercial, IMG.av, IMG.residential, IMG.maintenance, IMG.management].map((src, i) => {
              const edges = ["rounded-xl", "rounded-none", "rounded-tr-[2.2rem] rounded-bl-[2.2rem]", "rounded-xl", "rounded-none", "rounded-tl-[2.2rem] rounded-br-[2.2rem]", "rounded-xl", "rounded-none"];
              return (
                <div key={i} className={`group w-[62%] shrink-0 snap-start overflow-hidden shadow-sm sm:w-auto ${edges[i % edges.length]}`}>
                  <img src={src} alt="Optimum project" loading="lazy" className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#1dc6ba]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-12 text-center md:flex-row md:px-8 md:text-left" data-reveal>
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-[#0e3a44] md:text-3xl">Got a project? Let&apos;s scope it out.</h2>
            <p className="mt-1 font-medium text-[#0e3a44]/80">Design, build, maintenance or management — talk to one team.</p>
          </div>
          <a href={PHONE_TEL} className="shrink-0 rounded-lg bg-[#2d5a83] px-8 py-4 text-lg font-bold text-white transition-transform hover:-translate-y-0.5">
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      {/* ── Enquiry ── */}
      <section id="enquiry" className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2">
          <div data-reveal>
            <Eyebrow>Request a quote</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">Get in touch</h2>
            <p className="mt-4 max-w-md text-slate-600">
              Tell us about your project and we&apos;ll come back with a clear plan and quote. Prefer to talk? Give us a call.
            </p>
            <div className="mt-8 space-y-3">
              <a href={PHONE_TEL} className="block border-l-4 border-[#1dc6ba] bg-[#f4f7fa] p-4 transition-colors hover:bg-[#eaf0f5]">
                <span className="block text-xs uppercase tracking-wider text-slate-400">Call us</span>
                <span className="text-lg font-bold text-[#1f3a52]">{PHONE_DISPLAY}</span>
              </a>
              <a href={`mailto:${EMAIL}`} className="block border-l-4 border-[#1dc6ba] bg-[#f4f7fa] p-4 transition-colors hover:bg-[#eaf0f5]">
                <span className="block text-xs uppercase tracking-wider text-slate-400">Email us</span>
                <span className="break-all text-lg font-bold text-[#1f3a52]">{EMAIL}</span>
              </a>
              <div className="block border-l-4 border-[#1dc6ba] bg-[#f4f7fa] p-4">
                <span className="block text-xs uppercase tracking-wider text-slate-400">Address</span>
                <span className="font-semibold text-[#1f3a52]">{ADDRESS}</span>
              </div>
            </div>
          </div>
          <div className="border border-slate-100 bg-white p-6 shadow-lg md:p-8" data-reveal>
            <EnquiryForm />
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#16364f] py-12 text-white/70">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row">
            <div className="max-w-sm">
              <img src="/marketing/optimum-logo.svg" alt="Optimum Management Group" className="h-14 w-auto bg-white/95 px-2 py-1" />
              <p className="mt-4 text-sm text-white/55">
                London-based design &amp; build, maintenance and management contractor for commercial and residential
                clients. Managed end to end.
              </p>
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs font-medium text-white/45">
                {["Design & Build", "Maintenance", "Management", "Commercial & Residential"].map((a) => <span key={a}>{a}</span>)}
              </div>
            </div>
            <div className="text-sm">
              <p className="font-semibold uppercase tracking-wider text-white/45">Get in touch</p>
              <a href={PHONE_TEL} className="mt-2 block font-bold text-white">{PHONE_DISPLAY}</a>
              <a href={`mailto:${EMAIL}`} className="mt-1 block break-all hover:text-white">{EMAIL}</a>
              <p className="mt-2 max-w-[15rem] text-white/55">{ADDRESS}</p>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Optimum Management Group. All rights reserved.</p>
            <p>Designed by <a href="https://bridgewayaibootcamp.com" target="_blank" rel="noopener noreferrer" className="text-white/55 hover:text-white">bridgewayaibootcamp.com</a></p>
          </div>
        </div>
      </footer>

      {/* spacer for pinned bar on mobile */}
      <div className="h-[64px] sm:hidden" aria-hidden />

      {/* ── Pinned CTAs ── */}
      <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-slate-200 bg-white p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] sm:inset-x-auto sm:bottom-5 sm:right-5 sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none">
        <a href={PHONE_TEL} className="flex-1 rounded-lg bg-[#2d5a83] px-5 py-3.5 text-center text-sm font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5 sm:flex-none sm:px-7">
          Call now
        </a>
        <a href="#enquiry" className="flex-1 rounded-lg bg-[#1dc6ba] px-5 py-3.5 text-center text-sm font-bold text-[#0e3a44] shadow-lg transition-transform hover:-translate-y-0.5 sm:flex-none sm:px-7">
          Request a quote
        </a>
      </div>
    </div>
  );
}
