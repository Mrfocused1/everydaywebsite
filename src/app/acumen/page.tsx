"use client";

import { useEffect, useRef } from "react";
import { Anton, Inter } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EnquiryForm } from "./EnquiryForm";

/* eslint-disable @next/next/no-img-element */

const anton = Anton({ subsets: ["latin"], weight: "400", variable: "--font-anton", display: "swap" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-inter", display: "swap" });

const PHONE_DISPLAY = "07487 526042";
const PHONE_TEL = "tel:07487526042";
const EMAIL = "lawrence@acumenelectrical.co.uk";
const ADDRESS = "62 Westover Gardens, St Peter's, Broadstairs, CT10 3EY";

const IMG = {
  hero: "https://images.pexels.com/photos/17842832/pexels-photo-17842832.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1100&w=1500",
  domestic: "https://images.pexels.com/photos/32497160/pexels-photo-32497160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=720",
  commercial: "https://images.pexels.com/photos/11924298/pexels-photo-11924298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=720",
  ev: "https://images.pexels.com/photos/27355826/pexels-photo-27355826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=720",
  testing: "https://images.pexels.com/photos/14319099/pexels-photo-14319099.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=720",
  rewire: "https://images.pexels.com/photos/18082922/pexels-photo-18082922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=720",
  team: "https://images.pexels.com/photos/29491360/pexels-photo-29491360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1000&w=900",
};

const ACCREDITATIONS = ["NAPIT APPROVED", "CHECKATRADE", "TRUSTMARK", "RATED PEOPLE", "KENT TRADING STANDARDS", "MYBUILDER"];

const SERVICES = [
  { n: "01", title: "Domestic", img: IMG.domestic, body: "Rewires, sockets, lighting, consumer units and repairs for homeowners across East Kent." },
  { n: "02", title: "Commercial", img: IMG.commercial, body: "Installation and maintenance for offices, shops and businesses — safe and on time." },
  { n: "03", title: "Landlord / EICR", img: IMG.testing, body: "Electrical Installation Condition Reports and certification for private landlords." },
  { n: "04", title: "EV Chargers", img: IMG.ev, body: "Home and workplace electric-vehicle charge points, professionally installed." },
  { n: "05", title: "Inspection & Testing", img: IMG.testing, body: "Periodic inspection, testing and certification to BS7671 (18th Edition)." },
  { n: "06", title: "Fault Finding", img: IMG.rewire, body: "Fast diagnosis and safe repair of electrical faults, big or small." },
];

const CREDENTIALS = [
  { k: "18th Edition", v: "Certified to the current IET wiring regulations." },
  { k: "Level 3 Installations", v: "City & Guilds Level 3 in Electrical Installations." },
  { k: "Inspection & Testing", v: "Level 3 Award in Inspection & Testing (2391)." },
  { k: "EV Charge Points", v: "Qualified in electric-vehicle charger installation." },
  { k: "NAPIT Approved", v: "Registered Part P approved contractor." },
  { k: "BS7671 Compliant", v: "Every job meets the 18th Edition as a minimum." },
];

const AREAS = ["BROADSTAIRS", "MARGATE", "RAMSGATE", "THANET", "CANTERBURY", "WHITSTABLE", "HERNE BAY", "BIRCHINGTON", "WESTGATE", "SANDWICH", "DEAL", "DOVER"];

export default function AcumenPage() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    gsap.registerPlugin(ScrollTrigger);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canHover = window.matchMedia("(hover: hover)").matches;

    const ctx = gsap.context(() => {
      if (reduce) {
        gsap.set("[data-reveal], .hero-line > span, [data-cred], [data-area]", { opacity: 1, y: 0 });
        return;
      }

      // ── Hero headline reveal ──
      gsap.set(".hero-line > span", { yPercent: 115 });
      const heroTl = gsap.timeline({ delay: 0.15 });
      heroTl
        .to(".hero-eyebrow", { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" })
        .to(".hero-line > span", { yPercent: 0, duration: 1, stagger: 0.09, ease: "power4.out" }, "-=0.3")
        .to(".hero-sub", { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.6")
        .to(".hero-cta", { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "power3.out" }, "-=0.5")
        .to(".hero-scroll", { opacity: 1, duration: 0.6 }, "-=0.2");

      // ── Hero image parallax + reveal ──
      gsap.to(".hero-img", {
        yPercent: 14,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
      });

      // ── Marquees ──
      gsap.utils.toArray<HTMLElement>(".marquee-row").forEach((row) => {
        const dir = row.dataset.dir === "rev" ? 1 : -1;
        gsap.to(row, { xPercent: 50 * dir, repeat: -1, duration: 22, ease: "none" });
        gsap.set(row, { xPercent: dir === 1 ? -50 : 0 });
      });

      // ── Generic reveals ──
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((node) => {
        gsap.from(node, {
          opacity: 0,
          y: 40,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: node, start: "top 85%", once: true },
        });
      });

      // ── Statement word-by-word highlight ──
      gsap.utils.toArray<HTMLElement>(".statement [data-word]").forEach((w) => {
        gsap.fromTo(
          w,
          { color: "rgba(255,255,255,0.18)" },
          {
            color: "#ffffff",
            ease: "none",
            scrollTrigger: { trigger: w, start: "top 80%", end: "top 55%", scrub: true },
          },
        );
      });

      // ── Services: pinned horizontal scroll ──
      const track = el.querySelector<HTMLElement>(".svc-track");
      const pinWrap = el.querySelector<HTMLElement>(".svc-pin");
      if (track && pinWrap && window.innerWidth >= 768) {
        const distance = () => track.scrollWidth - window.innerWidth;
        gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: pinWrap,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => "+=" + distance(),
            invalidateOnRefresh: true,
          },
        });
      } else if (track) {
        // mobile: reveal panels as they scroll up
        gsap.utils.toArray<HTMLElement>(".svc-panel").forEach((p) => {
          gsap.from(p, { opacity: 0, y: 50, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: p, start: "top 85%", once: true } });
        });
      }

      // ── Credentials: scroll-drawn line + reveals ──
      const path = el.querySelector<SVGPathElement>(".cred-line");
      if (path && typeof path.getTotalLength === "function") {
        const len = path.getTotalLength();
        gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(path, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: { trigger: ".cred", start: "top 70%", end: "bottom 80%", scrub: true },
        });
      }
      gsap.utils.toArray<HTMLElement>("[data-cred]").forEach((c) => {
        gsap.from(c, {
          opacity: 0,
          x: c.dataset.side === "r" ? 60 : -60,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: c, start: "top 80%", once: true },
        });
      });

      // ── Count-up stats ──
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((node) => {
        const target = Number(node.dataset.count);
        const prefix = node.dataset.prefix || "";
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: { trigger: node, start: "top 85%", once: true },
          onUpdate: () => {
            node.textContent = prefix + Math.round(obj.v).toLocaleString("en-GB");
          },
        });
      });

      // ── Areas stagger ──
      gsap.from("[data-area]", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: { trigger: ".areas", start: "top 75%", once: true },
      });

      // ── Magnetic buttons (desktop) ──
      if (canHover) {
        gsap.utils.toArray<HTMLElement>(".magnetic").forEach((btn) => {
          const xTo = gsap.quickTo(btn, "x", { duration: 0.4, ease: "power3" });
          const yTo = gsap.quickTo(btn, "y", { duration: 0.4, ease: "power3" });
          const enter = (e: MouseEvent) => move(e);
          const move = (e: MouseEvent) => {
            const r = btn.getBoundingClientRect();
            xTo((e.clientX - (r.left + r.width / 2)) * 0.3);
            yTo((e.clientY - (r.top + r.height / 2)) * 0.3);
          };
          const leave = () => {
            xTo(0);
            yTo(0);
          };
          btn.addEventListener("mouseenter", enter);
          btn.addEventListener("mousemove", move);
          btn.addEventListener("mouseleave", leave);
        });

        // ── Custom cursor ──
        const cursor = el.querySelector<HTMLElement>(".cursor");
        if (cursor) {
          gsap.set(cursor, { xPercent: -50, yPercent: -50, opacity: 0 });
          const cx = gsap.quickTo(cursor, "x", { duration: 0.25, ease: "power3" });
          const cy = gsap.quickTo(cursor, "y", { duration: 0.25, ease: "power3" });
          const onMove = (e: MouseEvent) => {
            gsap.to(cursor, { opacity: 1, duration: 0.2 });
            cx(e.clientX);
            cy(e.clientY);
          };
          window.addEventListener("mousemove", onMove);
          el.querySelectorAll("[data-cursor], a, button").forEach((t) => {
            t.addEventListener("mouseenter", () => gsap.to(cursor, { scale: 2.4, backgroundColor: "rgba(242,197,17,0.18)", duration: 0.25 }));
            t.addEventListener("mouseleave", () => gsap.to(cursor, { scale: 1, backgroundColor: "rgba(242,197,17,0)", duration: 0.25 }));
          });
        }
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={root}
      className={`${anton.variable} ${inter.variable} relative overflow-x-clip bg-[#0b0b0d] text-white selection:bg-[#f2c511] selection:text-black`}
      style={{ fontFamily: "var(--font-inter), sans-serif" }}
    >
      {/* custom cursor */}
      <div className="cursor pointer-events-none fixed left-0 top-0 z-[100] hidden h-7 w-7 rounded-full border border-[#f2c511] mix-blend-difference md:block" />

      {/* ── Hero ── */}
      <section className="hero relative flex min-h-svh flex-col overflow-hidden">
        <img src={IMG.hero} alt="" className="hero-img pointer-events-none absolute inset-0 -z-10 h-[115%] w-full object-cover opacity-[0.18]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#0b0b0d] via-[#0b0b0d]/70 to-[#0b0b0d]" />
        <div className="pointer-events-none absolute -right-40 top-10 -z-10 h-[36rem] w-[36rem] rounded-full bg-[#1b4f7a]/25 blur-[120px]" />

        {/* top bar */}
        <header className="relative z-20 flex items-center justify-between px-5 py-5 md:px-10">
          <img src="/marketing/acumen-logo.svg" alt="Acumen Electrical Solutions" className="h-10 w-auto bg-white/95 px-2 py-1 md:h-12" />
          <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-widest text-white/60 md:flex">
            <a href="#services" className="hover:text-[#f2c511]">Services</a>
            <a href="#safe" className="hover:text-[#f2c511]">Credentials</a>
            <a href="#areas" className="hover:text-[#f2c511]">Areas</a>
            <a href="#enquiry" className="hover:text-[#f2c511]">Contact</a>
          </nav>
          <a href={PHONE_TEL} className="text-sm font-bold tracking-wide text-[#f2c511]">{PHONE_DISPLAY}</a>
        </header>

        {/* headline */}
        <div className="relative z-10 flex flex-1 flex-col justify-center px-5 pb-16 md:px-10">
          <p className="hero-eyebrow translate-y-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#f2c511] opacity-0 md:text-sm">
            Acumen Electrical Solutions — Broadstairs
          </p>
          <h1 className="mt-6 font-normal uppercase leading-[0.86] tracking-tight" style={{ fontFamily: "var(--font-anton), sans-serif" }}>
            <span className="hero-line block overflow-hidden text-[15vw] md:text-[10.5vw] lg:text-[9.5rem]"><span className="block">Fully-qualified</span></span>
            <span className="hero-line block overflow-hidden text-[15vw] md:text-[10.5vw] lg:text-[9.5rem]"><span className="block">electricians</span></span>
            <span className="hero-line block overflow-hidden text-[15vw] md:text-[10.5vw] lg:text-[9.5rem]"><span className="block text-[#f2c511]">for East Kent.</span></span>
          </h1>
          <p className="hero-sub mt-8 max-w-xl translate-y-4 text-base text-white/70 opacity-0 md:text-lg">
            Family-run, NAPIT-approved electrical contractor covering most of East Kent. Domestic &amp; commercial work by
            time-served, 18th Edition electricians. <span className="font-semibold text-white">You&apos;re in safe hands.</span>
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#enquiry" data-cursor className="hero-cta magnetic translate-y-4 bg-[#f2c511] px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#0b0b0d] opacity-0 transition-colors hover:bg-white">
              Request a quote
            </a>
            <a href={PHONE_TEL} data-cursor className="hero-cta magnetic translate-y-4 border border-white/25 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white opacity-0 transition-colors hover:border-[#f2c511] hover:text-[#f2c511]">
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        {/* marquee */}
        <div className="hero-scroll relative z-10 overflow-hidden border-y border-white/10 py-3 opacity-0">
          <div className="marquee-row flex w-max gap-8 whitespace-nowrap text-sm font-semibold uppercase tracking-widest" data-dir="fwd">
            {[0, 1].map((d) => (
              <span key={d} className="flex items-center gap-8" aria-hidden={d === 1}>
                {["NAPIT Approved", "18th Edition", "Fully Insured by AXA", "Domestic & Commercial", "East Kent / CT", "Free Quotes"].map((t) => (
                  <span key={t} className="flex items-center gap-8">
                    {t} <span className="text-[#f2c511]">✦</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Statement ── */}
      <section className="statement border-b border-white/10 px-5 py-24 md:px-10 md:py-36">
        <p className="mx-auto max-w-5xl text-3xl font-medium leading-[1.25] tracking-tight md:text-[2.9rem]">
          {"A family-run electrical contractor based in Broadstairs, working for homeowners, private landlords and as a trusted subcontractor for social housing across East Kent."
            .split(" ")
            .map((w, i) => (
              <span key={i} data-word className="inline-block">
                {w}&nbsp;
              </span>
            ))}
        </p>
      </section>

      {/* ── Services: pinned horizontal ── */}
      <section id="services" className="svc-pin relative md:h-svh md:overflow-hidden">
        <div className="svc-track flex flex-col gap-px md:h-svh md:w-max md:flex-row md:gap-0">
          {/* intro panel */}
          <div className="svc-panel flex shrink-0 flex-col justify-center border-b border-white/10 px-5 py-16 md:h-svh md:w-[34vw] md:border-b-0 md:border-r md:px-12 md:py-0">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f2c511]">What we do</p>
            <h2 className="mt-5 font-normal uppercase leading-[0.9] tracking-tight text-[3rem] md:text-[4.2rem]" style={{ fontFamily: "var(--font-anton), sans-serif" }}>
              Every<br />electrical<br />job.
            </h2>
            <p className="mt-6 max-w-xs text-white/60">From a single socket to a full rewire — scroll to explore.</p>
            <span className="mt-8 hidden text-sm font-semibold uppercase tracking-widest text-white/40 md:inline">Scroll →</span>
          </div>
          {/* service panels */}
          {SERVICES.map((s) => (
            <article key={s.n} className="svc-panel group relative flex shrink-0 flex-col justify-end overflow-hidden border-b border-white/10 md:h-svh md:w-[30vw] md:border-b-0 md:border-r">
              <img src={s.img} alt={s.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-40 transition-all duration-700 group-hover:scale-105 group-hover:opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0d] via-[#0b0b0d]/40 to-transparent" />
              <div className="relative z-10 p-7 md:p-10">
                <span className="font-normal text-[#f2c511]/80 text-2xl" style={{ fontFamily: "var(--font-anton), sans-serif" }}>{s.n}</span>
                <h3 className="mt-2 font-normal uppercase leading-none tracking-tight text-3xl md:text-4xl" style={{ fontFamily: "var(--font-anton), sans-serif" }}>{s.title}</h3>
                <p className="mt-3 max-w-xs text-sm text-white/65">{s.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Credentials scroll-story ── */}
      <section id="safe" className="cred relative border-t border-white/10 px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f2c511]">You&apos;re in safe hands</p>
          <h2 className="mt-5 font-normal uppercase leading-[0.9] tracking-tight text-[2.6rem] md:text-[5rem]" style={{ fontFamily: "var(--font-anton), sans-serif" }}>
            Time-served.<br />Properly qualified.
          </h2>
        </div>

        <div className="relative mx-auto mt-20 max-w-3xl">
          {/* drawn line */}
          <svg className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-8 -translate-x-1/2 md:block" viewBox="0 0 20 1000" preserveAspectRatio="none" fill="none" aria-hidden="true">
            <path className="cred-line" d="M10 0 L10 1000" stroke="#f2c511" strokeWidth="2" />
          </svg>
          <ul className="space-y-12 md:space-y-16">
            {CREDENTIALS.map((c, i) => {
              const right = i % 2 === 1;
              return (
                <li key={c.k} data-cred data-side={right ? "r" : "l"} className={`relative md:w-1/2 ${right ? "md:ml-auto md:pl-12 md:text-left" : "md:pr-12 md:text-right"}`}>
                  <span className={`absolute top-2 hidden h-3 w-3 bg-[#f2c511] md:block ${right ? "-left-[1.45rem]" : "-right-[1.45rem]"}`} />
                  <h3 className="font-normal uppercase tracking-tight text-2xl md:text-3xl" style={{ fontFamily: "var(--font-anton), sans-serif" }}>{c.k}</h3>
                  <p className="mt-2 text-white/60">{c.v}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ── Stats / insurance ── */}
      <section className="grid grid-cols-1 border-t border-white/10 md:grid-cols-3">
        {[
          { count: 2000000, prefix: "£", label: "Public Liability cover (AXA)" },
          { count: 500000, prefix: "£", label: "Professional Indemnity (AXA)" },
          { count: 18, prefix: "", label: "Edition wiring regs — BS7671", suffix: "th" },
        ].map((s, i) => (
          <div key={i} className={`px-6 py-16 text-center md:py-24 ${i < 2 ? "border-b border-white/10 md:border-b-0 md:border-r" : ""}`} data-reveal>
            <p className="font-normal text-[#f2c511] text-5xl md:text-7xl" style={{ fontFamily: "var(--font-anton), sans-serif" }}>
              <span data-count={s.count} data-prefix={s.prefix}>{s.prefix}0</span>
              {s.suffix}
            </p>
            <p className="mt-4 text-sm uppercase tracking-widest text-white/50">{s.label}</p>
          </div>
        ))}
      </section>

      {/* ── Areas ── */}
      <section id="areas" className="areas border-t border-white/10 px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-4" data-reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f2c511]">Where we work</p>
              <h2 className="mt-4 font-normal uppercase leading-[0.9] tracking-tight text-[2.6rem] md:text-[5rem]" style={{ fontFamily: "var(--font-anton), sans-serif" }}>
                Across<br />East Kent.
              </h2>
            </div>
            <p className="max-w-xs text-white/55">We cover most of the CT postcode area. Not sure if we reach you? Give us a call.</p>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-12">
            {AREAS.map((a) => (
              <span key={a} data-area className="font-normal uppercase leading-none tracking-tight text-2xl text-white/70 transition-colors hover:text-[#f2c511] md:text-4xl" style={{ fontFamily: "var(--font-anton), sans-serif" }}>
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Accreditation marquee ── */}
      <section className="overflow-hidden border-y border-white/10 bg-[#f2c511] py-4 text-[#0b0b0d]">
        <div className="marquee-row flex w-max gap-10 whitespace-nowrap text-lg font-bold uppercase tracking-widest" data-dir="rev">
          {[0, 1].map((d) => (
            <span key={d} className="flex items-center gap-10" aria-hidden={d === 1}>
              {ACCREDITATIONS.map((a) => (
                <span key={a} className="flex items-center gap-10">
                  {a} <span>✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </section>

      {/* ── Enquiry ── */}
      <section id="enquiry" className="grid grid-cols-1 lg:grid-cols-2">
        <div className="border-b border-white/10 px-5 py-20 md:px-10 lg:border-b-0 lg:border-r" data-reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f2c511]">Request a quote</p>
          <h2 className="mt-5 font-normal uppercase leading-[0.9] tracking-tight text-[2.8rem] md:text-[5rem]" style={{ fontFamily: "var(--font-anton), sans-serif" }}>
            Let&apos;s talk.
          </h2>
          <p className="mt-5 max-w-md text-white/65">Tell us what you need and we&apos;ll come back with a free, no-obligation quote. Prefer to talk? Give us a call.</p>
          <div className="mt-10 space-y-px">
            <a href={PHONE_TEL} className="block border border-white/10 p-5 transition-colors hover:bg-white/5">
              <span className="block text-xs uppercase tracking-widest text-white/40">Call</span>
              <span className="text-xl font-bold">{PHONE_DISPLAY}</span>
            </a>
            <a href={`mailto:${EMAIL}`} className="block border border-white/10 p-5 transition-colors hover:bg-white/5">
              <span className="block text-xs uppercase tracking-widest text-white/40">Email</span>
              <span className="break-all text-xl font-bold">{EMAIL}</span>
            </a>
            <div className="border border-white/10 p-5">
              <span className="block text-xs uppercase tracking-widest text-white/40">Address</span>
              <span className="text-lg font-semibold">{ADDRESS}</span>
            </div>
          </div>
        </div>
        <div className="px-5 py-20 md:px-10" data-reveal>
          <EnquiryForm />
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/10 px-5 py-12 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <img src="/marketing/acumen-logo.svg" alt="Acumen Electrical Solutions" className="h-12 w-auto bg-white/95 px-2 py-1" />
            <p className="mt-4 max-w-sm text-sm text-white/50">
              Family-run, NAPIT-approved electrical contractor in Broadstairs, covering East Kent. Fully insured by AXA.
            </p>
          </div>
          <div className="text-sm text-white/55">
            <a href={PHONE_TEL} className="block font-bold text-white">{PHONE_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`} className="mt-1 block break-all hover:text-white">{EMAIL}</a>
            <p className="mt-2 max-w-[15rem]">{ADDRESS}</p>
          </div>
        </div>
        <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Acumen Electrical Solutions.</p>
          <p>Designed by <a href="https://bridgewayaibootcamp.com" target="_blank" rel="noopener noreferrer" className="text-white/55 hover:text-white">bridgewayaibootcamp.com</a></p>
        </div>
      </footer>

      {/* spacer for pinned bar on mobile */}
      <div className="h-[60px] sm:hidden" aria-hidden />

      {/* ── Pinned CTAs ── */}
      <div className="fixed inset-x-0 bottom-0 z-50 flex border-t border-white/10 sm:inset-x-auto sm:bottom-6 sm:right-6 sm:gap-3 sm:border-0">
        <a href={PHONE_TEL} data-cursor className="flex-1 bg-white px-5 py-4 text-center text-sm font-bold uppercase tracking-wider text-[#0b0b0d] transition-colors hover:bg-[#f2c511] sm:flex-none sm:px-7">
          Call now
        </a>
        <a href="#enquiry" data-cursor className="flex-1 bg-[#f2c511] px-5 py-4 text-center text-sm font-bold uppercase tracking-wider text-[#0b0b0d] transition-colors hover:bg-white sm:flex-none sm:px-7">
          Request a quote
        </a>
      </div>
    </div>
  );
}
