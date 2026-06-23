"use client";

import { useEffect, useRef } from "react";
import { Inter } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EnquiryForm } from "./EnquiryForm";

/* eslint-disable @next/next/no-img-element */

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], display: "swap" });

const PHONE_DISPLAY = "07487 526042";
const PHONE_TEL = "tel:07487526042";
const EMAIL = "lawrence@acumenelectrical.co.uk";
const ADDRESS = "62 Westover Gardens, St Peter's, Broadstairs, CT10 3EY";

const IMG = {
  hero: "https://images.pexels.com/photos/4792521/pexels-photo-4792521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=720",
  about: "https://images.pexels.com/photos/5667685/pexels-photo-5667685.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=720&w=960",
  domestic: "https://images.pexels.com/photos/31701039/pexels-photo-31701039.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  commercial: "https://images.pexels.com/photos/17843269/pexels-photo-17843269.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  eicr: "https://images.pexels.com/photos/8293678/pexels-photo-8293678.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  ev: "https://images.pexels.com/photos/27355833/pexels-photo-27355833.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  testing: "https://images.pexels.com/photos/14319099/pexels-photo-14319099.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  lighting: "https://images.pexels.com/photos/1955549/pexels-photo-1955549.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  rewire: "https://images.pexels.com/photos/5090652/pexels-photo-5090652.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  fault: "https://images.pexels.com/photos/17842832/pexels-photo-17842832.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  portrait: "https://images.pexels.com/photos/8487400/pexels-photo-8487400.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=720",
  gallery1: "https://images.pexels.com/photos/29012619/pexels-photo-29012619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  gallery2: "https://images.pexels.com/photos/17063686/pexels-photo-17063686.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
};

const ACCREDITATIONS = ["NAPIT Approved", "Checkatrade", "TrustMark", "Rated People", "Kent Trading Standards", "MyBuilder"];

const SERVICES = [
  { title: "Domestic electrics", img: IMG.domestic, body: "Rewires, sockets, lighting, consumer units and repairs for homeowners." },
  { title: "Commercial electrics", img: IMG.commercial, body: "Installation and maintenance for offices, shops and businesses." },
  { title: "Landlord services & EICRs", img: IMG.eicr, body: "Electrical Installation Condition Reports and certification for landlords." },
  { title: "EV charger installation", img: IMG.ev, body: "Home and workplace electric-vehicle charge points, professionally fitted." },
  { title: "Inspection & testing", img: IMG.testing, body: "Periodic inspection, testing and certification to BS7671." },
  { title: "Fault finding & repairs", img: IMG.fault, body: "Fast, safe diagnosis and repair of electrical faults, big or small." },
];

const CREDENTIALS = [
  { k: "18th Edition certified", v: "Up to date with the current IET wiring regulations." },
  { k: "Level 3 in Electrical Installations", v: "City & Guilds qualified installers." },
  { k: "Level 3 Award in Inspection & Testing", v: "Qualified to inspect, test and certify." },
  { k: "EV charger installation", v: "Trained and qualified for EV charge points." },
  { k: "NAPIT approved (Part P)", v: "Registered approved contractor for domestic & commercial." },
  { k: "BS7671 compliant", v: "Every job meets the 18th Edition as a minimum." },
];

const AREAS = ["Broadstairs", "Margate", "Ramsgate", "Thanet", "Canterbury", "Whitstable", "Herne Bay", "Birchington", "Westgate-on-Sea", "Sandwich", "Deal", "Dover"];

const navyBtn =
  "inline-flex items-center justify-center gap-2 rounded-full bg-[#0c4e7d] px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#0a3f66]";
const ghostBtn =
  "inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-7 py-3.5 text-base font-semibold text-slate-700 transition-colors hover:border-[#0c4e7d] hover:text-[#0c4e7d]";

export default function AcumenPage() {
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
        gsap.from(node, {
          opacity: 0,
          y: 26,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: { trigger: node, start: "top 88%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-stagger] > *").forEach((node, i) => {
        gsap.from(node, {
          opacity: 0,
          y: 28,
          duration: 0.6,
          delay: (i % 3) * 0.08,
          ease: "power2.out",
          scrollTrigger: { trigger: node, start: "top 90%", once: true },
        });
      });

      // subtle parallax on tagged images
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((img) => {
        gsap.to(img, {
          yPercent: 8,
          ease: "none",
          scrollTrigger: { trigger: img.parentElement, start: "top bottom", end: "bottom top", scrub: true },
        });
      });

      // credentials line draw
      const path = el.querySelector<SVGPathElement>(".cred-line");
      if (path && typeof path.getTotalLength === "function") {
        const len = path.getTotalLength();
        gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(path, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: { trigger: ".cred", start: "top 70%", end: "bottom 75%", scrub: true },
        });
      }

      // count-up stats
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((node) => {
        const target = Number(node.dataset.count);
        const prefix = node.dataset.prefix || "";
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { trigger: node, start: "top 88%", once: true },
          onUpdate: () => {
            node.textContent = prefix + Math.round(obj.v).toLocaleString("en-GB");
          },
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className={`${inter.className} bg-white text-[#0f2c44]`}>
      {/* ── Header ── */}
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
          <a href="#top" aria-label="Acumen Electrical Solutions">
            <img src="/marketing/acumen-logo.svg" alt="Acumen Electrical Solutions" className="h-11 w-auto md:h-12" />
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 lg:flex">
            <a href="#services" className="hover:text-[#0c4e7d]">Services</a>
            <a href="#safe" className="hover:text-[#0c4e7d]">Why us</a>
            <a href="#work" className="hover:text-[#0c4e7d]">Our work</a>
            <a href="#areas" className="hover:text-[#0c4e7d]">Areas</a>
            <a href="#enquiry" className="hover:text-[#0c4e7d]">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={PHONE_TEL} className="hidden text-sm font-bold text-[#0c4e7d] sm:inline">{PHONE_DISPLAY}</a>
            <a href="#enquiry" className="rounded-full bg-[#0c4e7d] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#0a3f66] md:px-5">
              Request a quote
            </a>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section id="top" className="bg-gradient-to-b from-[#f6f8fb] to-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#0c4e7d]">
              <span className="h-px w-8 bg-[#d9a90f]" /> Broadstairs &amp; East Kent electricians
            </p>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight md:text-[3.4rem]">
              Trusted, fully-qualified electricians for your <span className="text-[#0c4e7d]">home or business.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-600">
              Acumen Electrical Solutions is a family-run, NAPIT-approved contractor in Broadstairs, covering most of
              East Kent. Time-served, 18th Edition electricians — <span className="font-semibold text-[#0f2c44]">you&apos;re in safe hands.</span>
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#enquiry" className={navyBtn}>Request a free quote</a>
              <a href={PHONE_TEL} className={ghostBtn}>Call {PHONE_DISPLAY}</a>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-slate-500">
              {["NAPIT approved", "18th Edition certified", "Fully insured by AXA"].map((t) => (
                <span key={t} className="flex items-center gap-2">
                  <span className="text-[#d9a90f]">✓</span> {t}
                </span>
              ))}
            </div>
          </div>
          <div className="relative" data-reveal>
            <img
              src={IMG.hero}
              alt="Acumen electrician at work"
              className="h-[26rem] w-full object-cover md:h-[32rem]"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 3rem), calc(100% - 3rem) 100%, 0 100%)",
                filter: "drop-shadow(0 18px 30px rgba(12,46,61,0.22))",
              }}
            />
            <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-slate-100 bg-white px-5 py-4 shadow-lg sm:block">
              <p className="text-2xl font-extrabold leading-none text-[#0c4e7d]">£2m</p>
              <p className="mt-1 text-xs font-medium text-slate-500">Public Liability — fully insured</p>
            </div>
            <div className="absolute -right-4 -top-4 hidden rounded-xl bg-[#0c4e7d] px-5 py-3 text-white shadow-lg md:block">
              <p className="text-sm font-bold">NAPIT</p>
              <p className="text-[11px] text-white/70">Approved contractor</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Accreditations strip ── */}
      <section className="border-y border-slate-100 bg-[#f6f8fb]">
        <div className="mx-auto max-w-6xl px-5 py-10 md:px-8" data-reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Registered &amp; accredited</p>
          <div className="mx-auto mt-6 grid max-w-4xl grid-cols-2 border-l border-t border-slate-200 sm:grid-cols-3 lg:grid-cols-6">
            {ACCREDITATIONS.map((a) => (
              <div key={a} className="flex items-center justify-center border-b border-r border-slate-200 bg-white px-3 py-5 text-center text-sm font-semibold text-[#0c4e7d]">{a}</div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-slate-500">
            Fully insured by <span className="font-semibold text-[#0f2c44]">AXA</span> — £2,000,000 Public Liability &amp; £500,000 Professional Indemnity.
          </p>
        </div>
      </section>

      {/* ── About ── */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl shadow-lg" data-reveal>
            <img src={IMG.about} alt="Acumen Electrical team" data-parallax className="aspect-[4/3] w-full scale-110 object-cover" />
          </div>
          <div data-reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d9a90f]">About us</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">A family-run team you can rely on.</h2>
            <p className="mt-5 text-lg text-slate-600">
              Our engineers have domestic and commercial experience working for homeowners, private landlords and as a
              trusted subcontractor for social-housing electrical maintenance. Friendly, tidy and dependable — we treat
              your property with respect.
            </p>
            <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {["Domestic & commercial", "Homeowners & landlords", "Social housing maintenance", "Free, no-obligation quotes"].map((x) => (
                <li key={x} className="flex items-start gap-2 text-slate-700">
                  <span className="mt-0.5 text-[#d9a90f]">●</span> {x}
                </li>
              ))}
            </ul>
            <a href="#services" className={`${navyBtn} mt-8`}>See our services</a>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="bg-[#f6f8fb]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl" data-reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d9a90f]">What we do</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">Domestic &amp; commercial electrical services.</h2>
            <p className="mt-4 text-lg text-slate-600">From a single socket to a full rewire — all to the highest standard.</p>
            <p className="mt-3 text-sm font-semibold text-slate-400 sm:hidden">Swipe for more →</p>
          </div>
          <div className="-mx-5 mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:mt-12 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 lg:grid-cols-3" data-stagger>
            {SERVICES.map((s) => (
              <article key={s.title} className="group w-[80%] shrink-0 snap-start overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-shadow hover:shadow-lg sm:w-auto sm:shrink">
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

      {/* ── Credentials / safe hands ── */}
      <section id="safe" className="cred bg-white">
        <div className="mx-auto grid max-w-6xl items-start gap-14 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2">
          <div data-reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d9a90f]">You&apos;re in safe hands</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">Time-served &amp; fully qualified.</h2>
            <p className="mt-5 text-lg text-slate-600">
              Our electricians are time-served and hold a range of qualifications. Every job meets, as a minimum, the
              BS7671 wiring regulations (18th Edition).
            </p>
            {/* timeline */}
            <div className="relative mt-8 pl-8">
              <svg className="pointer-events-none absolute left-[7px] top-2 h-[calc(100%-1rem)] w-2" viewBox="0 0 4 400" preserveAspectRatio="none" fill="none" aria-hidden="true">
                <path className="cred-line" d="M2 0 L2 400" stroke="#0c4e7d" strokeWidth="2.5" />
              </svg>
              <ul className="space-y-6">
                {CREDENTIALS.map((c) => (
                  <li key={c.k} className="relative" data-reveal>
                    <span className="absolute -left-8 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-[#d9a90f] shadow" />
                    <h3 className="font-bold text-[#0f2c44]">{c.k}</h3>
                    <p className="text-sm text-slate-600">{c.v}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative lg:sticky lg:top-24" data-reveal>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img src={IMG.portrait} alt="Qualified Acumen electrician" className="aspect-[4/5] w-full object-cover" />
            </div>
            <div className="absolute -bottom-5 left-5 rounded-xl bg-[#0c4e7d] px-6 py-4 text-white shadow-lg">
              <p className="text-lg font-extrabold leading-none">18th Edition</p>
              <p className="mt-1 text-xs text-white/70">BS7671 compliant work</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats band ── */}
      <section className="bg-[#0c4e7d] text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-white/10 px-5 md:grid-cols-3 md:divide-x md:divide-y-0 md:px-8">
          {[
            { count: 2000000, prefix: "£", label: "Public Liability cover (AXA)" },
            { count: 500000, prefix: "£", label: "Professional Indemnity (AXA)" },
            { count: 18, prefix: "", suffix: "th", label: "Edition wiring regs — BS7671" },
          ].map((s, i) => (
            <div key={i} className="px-6 py-12 text-center md:py-16" data-reveal>
              <p className="text-4xl font-extrabold tracking-tight text-[#ffd34d] md:text-5xl">
                <span data-count={s.count} data-prefix={s.prefix}>{s.prefix}0</span>
                {s.suffix}
              </p>
              <p className="mt-3 text-sm text-white/65">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Gallery ── */}
      <section id="work" className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4" data-reveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d9a90f]">Our work</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">Clean, careful, certified.</h2>
            </div>
            <a href="#enquiry" className={ghostBtn}>Start your project</a>
          </div>
          <div className="-mx-5 mt-10 flex snap-x gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 md:grid-cols-4" data-stagger>
            {[IMG.lighting, IMG.rewire, IMG.gallery1, IMG.gallery2, IMG.testing, IMG.ev, IMG.domestic, IMG.commercial].map((src, i) => {
              const edges = ["rounded-xl", "rounded-none", "rounded-tr-[2.2rem] rounded-bl-[2.2rem]", "rounded-xl", "rounded-none", "rounded-tl-[2.2rem] rounded-br-[2.2rem]", "rounded-xl", "rounded-none"];
              return (
                <div key={i} className={`group w-[62%] shrink-0 snap-start overflow-hidden shadow-sm sm:w-auto ${edges[i % edges.length]}`}>
                  <img src={src} alt="Recent electrical work" loading="lazy" className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Areas ── */}
      <section id="areas" className="bg-[#f6f8fb]">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center md:px-8 md:py-20" data-reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d9a90f]">Areas we cover</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">Across East Kent — the CT postcode area.</h2>
          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-x-7 gap-y-3 text-lg font-semibold text-slate-700">
            {AREAS.map((a) => (
              <span key={a} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-[#d9a90f]" aria-hidden /> {a}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-500">Not sure if we cover you? Give us a call — we&apos;ll let you know.</p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0c4e7d]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-12 text-center md:flex-row md:px-8 md:text-left" data-reveal>
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">Need an electrician? Get a free quote.</h2>
            <p className="mt-1 text-white/75">Friendly, reliable and fully insured — call or send us a message.</p>
          </div>
          <a href={PHONE_TEL} className="shrink-0 rounded-full bg-[#ffd34d] px-8 py-4 text-lg font-bold text-[#0c2742] transition-transform hover:-translate-y-0.5">
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      {/* ── Enquiry ── */}
      <section id="enquiry" className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2">
          <div data-reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d9a90f]">Request a quote</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">Get in touch</h2>
            <p className="mt-4 max-w-md text-slate-600">
              Tell us what you need and we&apos;ll come back with a free, no-obligation quote. Prefer to talk? Give us a call.
            </p>
            <div className="mt-8 space-y-3">
              <a href={PHONE_TEL} className="flex items-center gap-4 rounded-xl border border-slate-100 bg-[#f6f8fb] p-4 transition-colors hover:bg-[#eef2f7]">
                <span><span className="block text-xs uppercase tracking-wider text-slate-400">Call us</span><span className="text-lg font-bold text-[#0f2c44]">{PHONE_DISPLAY}</span></span>
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 rounded-xl border border-slate-100 bg-[#f6f8fb] p-4 transition-colors hover:bg-[#eef2f7]">
                <span><span className="block text-xs uppercase tracking-wider text-slate-400">Email us</span><span className="break-all text-lg font-bold text-[#0f2c44]">{EMAIL}</span></span>
              </a>
              <div className="flex items-center gap-4 rounded-xl border border-slate-100 bg-[#f6f8fb] p-4">
                <span><span className="block text-xs uppercase tracking-wider text-slate-400">Address</span><span className="font-semibold text-[#0f2c44]">{ADDRESS}</span></span>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-lg md:p-8" data-reveal>
            <EnquiryForm />
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#0a2e47] py-12 text-white/70">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row">
            <div className="max-w-sm">
              <img src="/marketing/acumen-logo.svg" alt="Acumen Electrical Solutions" className="h-12 w-auto rounded bg-white/95 p-1.5" />
              <p className="mt-4 text-sm text-white/55">
                Family-run, NAPIT-approved electrical contractor in Broadstairs, covering East Kent. Domestic &amp;
                commercial. Fully insured.
              </p>
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs font-medium text-white/45">
                {ACCREDITATIONS.map((a) => <span key={a}>{a}</span>)}
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
            <p>© 2026 Acumen Electrical Solutions. All rights reserved.</p>
            <p>Designed by <a href="https://bridgewayaibootcamp.com" target="_blank" rel="noopener noreferrer" className="text-white/55 hover:text-white">bridgewayaibootcamp.com</a></p>
          </div>
        </div>
      </footer>

      {/* spacer for pinned bar on mobile */}
      <div className="h-[64px] sm:hidden" aria-hidden />

      {/* ── Pinned CTAs ── */}
      <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-slate-200 bg-white p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] sm:inset-x-auto sm:bottom-5 sm:right-5 sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none">
        <a href={PHONE_TEL} className="flex-1 rounded-full bg-[#0c4e7d] px-5 py-3.5 text-center text-sm font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5 sm:flex-none sm:px-7">
          Call now
        </a>
        <a href="#enquiry" className="flex-1 rounded-full bg-[#ffd34d] px-5 py-3.5 text-center text-sm font-bold text-[#0c2742] shadow-lg transition-transform hover:-translate-y-0.5 sm:flex-none sm:px-7">
          Request a quote
        </a>
      </div>
    </div>
  );
}
