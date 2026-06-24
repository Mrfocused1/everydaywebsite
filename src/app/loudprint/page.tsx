"use client";

import { useState } from "react";
import { Icon } from "./icons";
import { Smoke } from "./Smoke";
import { LPFX } from "./LPFX";
import { ProductDefs, MylarBag, MironJar, StickerSheet, GlassDish } from "./products";
import "./lp.css";

// TODO: confirm the real contact details with the client.
const INSTAGRAM = "https://www.instagram.com/loudpackprinting";
const HANDLE = "@loudpackprinting";
const WEBSITE = "https://www.loudpackprint.com";
const EMAIL = "hello@loudpackprint.com";

const NAV = [
  { href: "#work", label: "What We Print" },
  { href: "#process", label: "Process" },
  { href: "#finishes", label: "Finishes" },
  { href: "#showcase", label: "Showcase" },
];

const TICKER = ["Mylar Bags", "Stickers", "UV Miron Jars", "Branded Merch", "Spot Gloss", "Embossed", "Holographic Foil", "Worldwide Shipping"];

const SERVICES = [
  { Art: MylarBag, icon: "bag", t: "Mylar Bags", b: "Stand-up pouches and sticker bags — from short runs to full custom builds, in a range of sizes and finishes.", tags: ["Matte", "Spot Gloss", "Direct Print"] },
  { Art: StickerSheet, icon: "sticker", t: "Stickers", b: "Premium die-cut stickers and sticker bags. Quick turnarounds, multiple designs, finishes that pop.", tags: ["Embossed", "Gel", "3D"] },
  { Art: MironJar, icon: "jar", t: "UV Miron Jars", b: "Designed and printed UV Miron jars — matte with spot-gloss embossing that separates your brand from the rest.", tags: ["UV Glass", "Embossed", "Spot Gloss"] },
  { Art: GlassDish, icon: "cup", t: "Branded Merch", b: "Glass ashtrays, apparel and branded extras that make great gifts and leave a lasting impression.", tags: ["Glassware", "Apparel", "Custom"] },
];

const STEPS = [
  { n: "01", icon: "pen", t: "Design", b: "Bring your artwork or start from a sketch — our team designs and refines it until it's ready to run." },
  { n: "02", icon: "check", t: "Proof", b: "You get a digital proof to approve. Nothing prints until every detail is signed off." },
  { n: "03", icon: "layers", t: "Print", b: "Printed in-house with premium finishes. We pride ourselves on quality and never cut corners." },
  { n: "04", icon: "ship", t: "Ship", b: "Packed and shipped fast — short runs in days — with worldwide delivery to your door." },
];

const FINISHES = [
  { t: "Matte", b: "A clean, soft-touch base that makes colour and detail sit flat and premium." },
  { t: "Spot Gloss", b: "Selective high-shine over matte — logos and highlights that catch the light." },
  { t: "Embossed", b: "Raised, tactile detail you can feel. The mark of a pack that means business." },
  { t: "Holographic Foil", b: "Iridescent foil that shifts as it moves — impossible to walk past." },
];

const STATS = [
  { count: 100, suffix: "%", label: "Satisfaction, every project" },
  { count: 48, suffix: "h", label: "Quick-turn short runs" },
  { count: 5, suffix: "★", label: "Rated service" },
  { count: 0, suffix: "", value: "WW", label: "Worldwide shipping" },
];

const SHOWCASE = [
  { Art: MylarBag, t: "Custom Mylar", b: "Matte + spot-gloss, embossed badge." },
  { Art: MironJar, t: "UV Miron Jar", b: "Designed, printed & embossed in-house." },
  { Art: StickerSheet, t: "Sticker Sheets", b: "Die-cut, holographic and gel finishes." },
  { Art: GlassDish, t: "Glass Ashtray", b: "Branded merch that gets remembered." },
];

export default function LoudPrint() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <div className="lp-root">
      <noscript>
        <style>{`.lp-root .lp-hero-anim > *,.lp-root [data-reveal],.lp-root [data-stagger] > *{opacity:1!important;transform:none!important}`}</style>
      </noscript>

      <ProductDefs />
      <Smoke />

      <div className="lp-page">
        {/* NAV */}
        <header className="lp-nav">
          <div className="lp-container lp-nav-inner">
            <a href="#home" className="lp-logo" onClick={close}>
              <span className="lp-logo-badge">LP</span>
              <span className="lp-logo-text">Loud Pack<em>Printing</em></span>
            </a>
            <nav className="lp-nav-links">
              {NAV.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
              <a href="/loudprint/contact" className="lp-btn lp-btn-sm">Get a Quote</a>
            </nav>
            <button className="lp-burger" aria-label="Open menu" onClick={() => setMenuOpen(true)}><Icon name="menu" /></button>
          </div>
        </header>

        {/* HERO */}
        <section className="lp-hero" id="home">
          <div className="lp-container lp-hero-grid">
            <div className="lp-hero-copy lp-hero-anim">
              <span className="lp-eyebrow">Identity · Print · Packaging</span>
              <h1>Looking to fuel<br />your brand?<br /><span className="lp-holo-text">We got that gas.</span></h1>
              <p>Premium custom Mylar bags, embossed stickers and UV Miron jars — designed and printed in-house, then shipped worldwide. Quality you can feel.</p>
              <div className="lp-hero-cta">
                <a href="/loudprint/contact" data-magnetic className="lp-btn lp-btn-primary">Start a Project <span className="lp-arr"><Icon name="arrow" /></span></a>
                <a href="#work" className="lp-btn lp-btn-ghost">See What We Print</a>
              </div>
              <div className="lp-hero-meta">
                <span><Icon name="shield" /> 100% satisfaction</span>
                <span><Icon name="globe" /> Worldwide shipping</span>
                <span><Icon name="clock" /> Fast short runs</span>
              </div>
            </div>

            <div className="lp-hero-stage" data-parallax data-speed="46">
              <div className="lp-hero-glow" aria-hidden />
              <MylarBag className="lp-hero-product" />
              <span className="lp-badge-spin">
                <svg viewBox="0 0 120 120" aria-hidden>
                  <defs><path id="lp-circle" d="M60,60 m-42,0 a42,42 0 1,1 84,0 a42,42 0 1,1 -84,0" /></defs>
                  <text fontFamily="var(--font-lp-sans)" fontSize="11.5" fontWeight="700" letterSpacing="3" fill="currentColor">
                    <textPath href="#lp-circle">LOUD PACK · PRINT · PACKAGING · </textPath>
                  </text>
                </svg>
                <span className="lp-badge-core"><Icon name="spark" /></span>
              </span>
            </div>
          </div>

          {/* Ticker */}
          <div className="lp-ticker" aria-hidden>
            <div className="lp-ticker-track">
              {[...TICKER, ...TICKER].map((t, i) => (
                <span key={i} className="lp-ticker-item">{t}<i>✦</i></span>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT WE PRINT */}
        <section className="lp-section" id="work">
          <div className="lp-container">
            <div className="lp-head" data-reveal>
              <span className="lp-eyebrow">What we print</span>
              <h2 className="lp-title">Packaging that does<br /><span className="lp-holo-text">the talking.</span></h2>
              <p>From the first sticker bag to a full custom range — every product is designed, printed and finished by us.</p>
            </div>

            <div className="lp-work-grid" data-stagger>
              {SERVICES.map((s) => (
                <article key={s.t} className="lp-work-card">
                  <div className="lp-work-art"><s.Art className="lp-art" /></div>
                  <div className="lp-work-body">
                    <span className="lp-work-icon"><Icon name={s.icon} /></span>
                    <h3>{s.t}</h3>
                    <p>{s.b}</p>
                    <div className="lp-tags">{s.tags.map((t) => <span key={t}>{t}</span>)}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="lp-section lp-section-alt" id="process">
          <div className="lp-container">
            <div className="lp-head" data-reveal>
              <span className="lp-eyebrow">How we work</span>
              <h2 className="lp-title">Four steps, zero<br /><span className="lp-holo-text">cut corners.</span></h2>
            </div>
            <div className="lp-steps" data-stagger>
              {STEPS.map((s) => (
                <article key={s.n} className="lp-step">
                  <span className="lp-step-num">{s.n}</span>
                  <span className="lp-step-icon"><Icon name={s.icon} /></span>
                  <h3>{s.t}</h3>
                  <p>{s.b}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FINISHES */}
        <section className="lp-section" id="finishes">
          <div className="lp-container lp-finish-layout">
            <div className="lp-finish-intro" data-reveal>
              <span className="lp-eyebrow">Premium finishes</span>
              <h2 className="lp-title">Make it<br /><span className="lp-holo-text">pop.</span></h2>
              <p>Matte, spot-gloss, embossed and holographic foil — mix finishes to build a pack people pick up before they even read the label.</p>
              <a href="/loudprint/contact" className="lp-btn lp-btn-primary" data-magnetic>Discuss Your Finish <span className="lp-arr"><Icon name="arrow" /></span></a>
            </div>
            <div className="lp-finish-list" data-stagger>
              {FINISHES.map((f, i) => (
                <div key={f.t} className="lp-finish">
                  <span className="lp-finish-n">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h4>{f.t}</h4>
                    <p>{f.b}</p>
                  </div>
                  <span className="lp-finish-bar" aria-hidden />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SHOWCASE */}
        <section className="lp-section lp-section-alt" id="showcase">
          <div className="lp-container">
            <div className="lp-head" data-reveal>
              <span className="lp-eyebrow">Selected work</span>
              <h2 className="lp-title">Designed & printed<br /><span className="lp-holo-text">in-house.</span></h2>
            </div>
            <div className="lp-showcase" data-stagger>
              {SHOWCASE.map((s, i) => (
                <figure key={s.t} className={`lp-show-card lp-show-card--${i % 2 === 0 ? "a" : "b"}`}>
                  <div className="lp-show-art" data-parallax data-speed="26"><s.Art className="lp-art" /></div>
                  <figcaption>
                    <h3>{s.t}</h3>
                    <p>{s.b}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="lp-stats-band">
          <div className="lp-container lp-stats" data-stagger>
            {STATS.map((s) => (
              <div key={s.label} className="lp-stat">
                <span className="lp-stat-num">
                  {s.value ? <span>{s.value}</span> : <span data-count={s.count} data-suffix={s.suffix}>0{s.suffix}</span>}
                </span>
                <span className="lp-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* QUOTE / CTA */}
        <section className="lp-cta">
          <Smoke tone="dark" />
          <div className="lp-container lp-cta-inner" data-reveal>
            <span className="lp-eyebrow lp-eyebrow-light">Tap in</span>
            <h2>We value every project.<br /><span className="lp-holo-text">Let&rsquo;s fuel yours.</span></h2>
            <p>Send us your idea, your artwork or just a reference you love. We&rsquo;ll handle the rest — design, print and worldwide delivery.</p>
            <div className="lp-cta-buttons">
              <a href="/loudprint/contact" data-magnetic className="lp-btn lp-btn-holo">Get a Quote <span className="lp-arr"><Icon name="arrow" /></span></a>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="lp-btn lp-btn-ghost-light"><Icon name="instagram" /> {HANDLE}</a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="lp-footer">
          <div className="lp-container lp-footer-grid">
            <div className="lp-footer-brand">
              <a href="#home" className="lp-logo">
                <span className="lp-logo-badge">LP</span>
                <span className="lp-logo-text">Loud Pack<em>Printing</em></span>
              </a>
              <p>Identity, print and packaging. Premium custom Mylar bags, stickers, UV Miron jars and branded merch — designed and printed in-house, shipped worldwide.</p>
            </div>
            <div className="lp-footer-col">
              <h4>Explore</h4>
              {NAV.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
              <a href="/loudprint/contact">Get a Quote</a>
            </div>
            <div className="lp-footer-col">
              <h4>Connect</h4>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">Instagram {HANDLE}</a>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <a href={WEBSITE} target="_blank" rel="noopener noreferrer">loudpackprint.com</a>
            </div>
          </div>
          <div className="lp-container lp-footer-bottom">
            <span>© 2026 Loud Pack Printing. All rights reserved.</span>
            <span>Designed by <a href="https://everydayweb.site" target="_blank" rel="noopener noreferrer">everydayweb.site</a></span>
          </div>
        </footer>
      </div>

      {/* Mobile menu */}
      <div className={`lp-mobile-nav${menuOpen ? " open" : ""}`}>
        <button className="lp-mobile-close" aria-label="Close menu" onClick={close}><Icon name="close" /></button>
        {NAV.map((n) => <a key={n.href} href={n.href} onClick={close}>{n.label}</a>)}
        <a href="/loudprint/contact" onClick={close}>Get a Quote</a>
      </div>

      <LPFX />
    </div>
  );
}
