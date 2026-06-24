"use client";

import { useState } from "react";
import { Icon } from "./icons";
import { SPFX } from "./SPFX";
import "./spe.css";

/* eslint-disable @next/next/no-img-element */

const I = "/marketing/sp";
const FRIENDS = `${I}/sp-friends.jpg`;
const KEEP = `${I}/sp-keep.jpg`;
const SNAP = `${I}/sp-snap.jpg`;
const PRINT = `${I}/sp-print.jpg`;

// TODO: replace placeholders with the real details.
const INSTAGRAM = "https://www.instagram.com/snapandprintevents";
const HANDLE = "@snapandprintevents";
const PHONE_DISPLAY = "+44 7000 000000";
const PHONE_TEL = "tel:+447000000000";
const EMAIL = "hello@snapandprintevents.com";

const STEPS = [
  { n: "01", t: "We Snap", b: "Our friendly photographers work the room, catching the best moments throughout your event.", img: SNAP, alt: "Photographer taking a photo at an event" },
  { n: "02", t: "You Smile", b: "We capture the real you — natural smiles, big laughs and the moments that matter.", img: FRIENDS, alt: "Friends smiling together at an event" },
  { n: "03", t: "We Print", b: "Every shot is printed instantly, on the spot, in crisp high quality.", img: PRINT, alt: "Photos printing on the on-site printer" },
  { n: "04", t: "You Take It Home", b: "Walk away with a keepsake you can hold, share and treasure forever.", img: KEEP, alt: "Guest holding their printed photo" },
];

const BENEFITS = [
  { t: "Professional & Reliable", b: "Experienced photographers you can count on." },
  { t: "Instant Printing", b: "High-quality prints, delivered in seconds." },
  { t: "Premium Quality", b: "Crisp, vibrant prints that last." },
  { t: "Any Occasion", b: "Festivals, birthdays, weddings, corporate — we cover it." },
  { t: "Memories That Last", b: "Real moments. Real prints. Real memories." },
];

const EVENTS = [
  { img: "event-festivals", icon: "music", t: "Festivals", b: "Live music, good vibes and unforgettable moments." },
  { img: "event-parties", icon: "glass", t: "Parties", b: "We capture the energy, you keep the memories." },
  { img: "event-birthdays", icon: "cake", t: "Birthdays", b: "Big smiles, little details, beautiful memories." },
  { img: "event-weddings", icon: "gem", t: "Weddings", b: "We capture your day so you can relive it forever." },
  { img: "event-corporate", icon: "briefcase", t: "Corporate", b: "Polished coverage for every important moment." },
  { img: "event-community", icon: "heart", t: "Community", b: "Celebrating culture, connection and community." },
];

const NAV = [
  { href: "#how", label: "How It Works" },
  { href: "#events", label: "Events" },
  { href: "#gallery", label: "Gallery" },
];

export default function SnapAndPrint() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const close = () => setMenuOpen(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "");
    const email = String(f.get("email") || "");
    const phone = String(f.get("phone") || "");
    const type = String(f.get("type") || "");
    const date = String(f.get("date") || "");
    const message = String(f.get("message") || "");
    const subject = `Event enquiry${type ? ` — ${type}` : ""}${name ? ` (${name})` : ""}`;
    const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nEvent type: ${type}\nEvent date: ${date}\n\n${message}\n`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <div className="spe-root">
      {/* No-JS: un-hide the elements the GSAP engine would otherwise reveal */}
      <noscript>
        <style>{`.spe-root .hero-content > *,.spe-root [data-reveal],.spe-root [data-stagger] > *{opacity:1!important;transform:none!important}`}</style>
      </noscript>
      {/* HERO */}
      <header className="hero" id="home">
        <div className="spe-container">
          <nav className="navbar">
            <a href="#home" className="logo" onClick={close}>
              <img src={`${I}/sp-logo.png`} alt="Snap and Print Events" />
            </a>
            <div className="nav-links">
              <a href="#home">Home</a>
              {NAV.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
              <a href="/snappydappy/contact" className="nav-cta">Book Us</a>
            </div>
            <button className="mobile-menu-btn" aria-label="Open menu" onClick={() => setMenuOpen(true)}><Icon name="menu" /></button>
          </nav>

          <img className="hero-mobile-img" src={`${I}/sp-hero-mobile.jpg`} alt="Festival-goer holding a freshly printed photo" />

          <div className="hero-content">
            <h1>Capture<br />The Moments.</h1>
            <span className="script">Take Them Home.</span>
            <p>We snap. You smile. You print. High-quality event photos printed on the spot — amazing memories, in your hands.</p>
            <div className="hero-buttons">
              <a href="#contact" data-magnetic className="btn btn-primary">Book Your Event</a>
              <a href="#gallery" className="btn btn-outline">View Gallery</a>
            </div>
          </div>
        </div>

        <div className="hero-badge">
          Printed<br />Instantly.<br /><span style={{ color: "var(--gold)" }}>Memories<br />Forever.</span>
        </div>
      </header>

      {/* HOW IT WORKS */}
      <section className="how-section" id="how">
        <div className="spe-container">
          <div className="how-head" data-reveal>
            <div className="eyebrow">How it works</div>
            <h2 className="section-title">Simple. Fast. <span className="script">Memorable.</span></h2>
            <p>Four steps, about a minute, and your guests leave with a print in hand.</p>
          </div>

          <div className="steps-grid" data-stagger>
            {STEPS.map((s) => (
              <article key={s.n} className="step-card">
                <div className="step-media">
                  <img src={s.img} alt={s.alt} loading="lazy" />
                </div>
                <span className="step-num">{s.n}</span>
                <h3>{s.t}</h3>
                <p>{s.b}</p>
              </article>
            ))}
          </div>

          <div className="benefit-strip" data-stagger>
            {BENEFITS.map((b) => (
              <div key={b.t} className="benefit">
                <span className="benefit-line" aria-hidden />
                <h4>{b.t}</h4>
                <p>{b.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="events-section" id="events">
        <div className="spe-container">
          <div className="events-head" data-reveal>
            <div className="eyebrow">Events we cover</div>
            <h2 className="section-title">Every Event. <span className="script">Every Memory.</span></h2>
          </div>

          <div className="event-grid" data-stagger>
            {EVENTS.map((e) => (
              <article key={e.t} className="event-card">
                <div className="event-media">
                  <img src={`${I}/${e.img}.jpg`} alt={`${e.t} photography`} loading="lazy" />
                </div>
                <h3>{e.t}</h3>
                <p>{e.b}</p>
              </article>
            ))}
          </div>
        </div>

      </section>

      {/* REVIEWS */}
      <section className="reviews">
        <div className="spe-container">
          <div className="reviews-head" data-reveal>
            <div className="eyebrow">Kind words</div>
            <h2 className="section-title">Loved by <span className="script">our clients.</span></h2>
          </div>
          <div className="reviews-grid" data-stagger>
            {[
              { q: "The photos are always amazing and having them printed on the spot is such a vibe. Highly recommend!", n: "Jasmine R.", r: "Festival Goer", a: "avatar-1" },
              { q: "They captured our daughter's first birthday perfectly. Beautiful photos and instant prints.", n: "Michelle T.", r: "Birthday Host", a: "avatar-2" },
              { q: "Professional, friendly and efficient. They gave our whole team memories to take home.", n: "David K.", r: "Corporate Client", a: "avatar-3" },
            ].map((t) => (
              <figure key={t.n} className="review-card">
                <span className="review-quote" aria-hidden>&ldquo;</span>
                <blockquote>{t.q}</blockquote>
                <figcaption className="review-person">
                  <img src={`${I}/${t.a}.jpg`} alt={t.n} />
                  <span><strong>{t.n}</strong><span>{t.r}</span></span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery-section" id="gallery">
        <div className="spe-container">
          <div className="gallery-head" data-reveal>
            <div className="eyebrow">Gallery</div>
            <h2 className="section-title">Real Moments. <span className="script">Real Prints.</span></h2>
          </div>
          <div className="gallery-grid" data-stagger>
            <img src={`${I}/gallery-1.jpg`} alt="Festival moment, printed" loading="lazy" />
            <img src={`${I}/gallery-2.jpg`} alt="First birthday memory" loading="lazy" />
            <img src={`${I}/gallery-3.jpg`} alt="A night out, captured" loading="lazy" />
            <img src={`${I}/gallery-4.jpg`} alt="Festival portrait" loading="lazy" />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <div className="spe-container">
          <div className="contact-head" data-reveal>
            <div className="eyebrow">Get in touch</div>
            <h2 className="section-title">Let&rsquo;s Plan <span className="script">Your Event.</span></h2>
          </div>
          <div className="contact-grid" data-reveal>
            <div className="contact-methods">
              <a className="contact-method" href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
                <span className="cm-icon"><Icon name="instagram" /></span>
                <span><strong>Instagram</strong><span>{HANDLE}</span></span>
              </a>
              <a className="contact-method" href={PHONE_TEL}>
                <span className="cm-icon"><Icon name="phone" /></span>
                <span><strong>Phone</strong><span>{PHONE_DISPLAY}</span></span>
              </a>
              <a className="contact-method" href={`mailto:${EMAIL}`}>
                <span className="cm-icon"><Icon name="mail" /></span>
                <span><strong>Email</strong><span>{EMAIL}</span></span>
              </a>
              <p className="cm-note">Based in London — available nationwide. We usually reply within 24 hours, and weekend dates book up fast.</p>
            </div>

            <form className="contact-form" onSubmit={onSubmit}>
              <div className="cf-head"><span className="cf-mark" aria-hidden /><span>Send your enquiry</span></div>
              <div className="cf-row">
                <input name="name" required placeholder="Your name" autoComplete="name" />
                <input name="email" type="email" required placeholder="Email address" autoComplete="email" />
              </div>
              <div className="cf-row">
                <input name="phone" placeholder="Phone (optional)" inputMode="tel" autoComplete="tel" />
                <select name="type" defaultValue="" required>
                  <option value="" disabled>Type of event</option>
                  <option>Festival</option>
                  <option>Party or Birthday</option>
                  <option>Wedding</option>
                  <option>Corporate Event</option>
                  <option>Community Event</option>
                  <option>Something else</option>
                </select>
              </div>
              <input name="date" type="date" aria-label="Event date" />
              <textarea name="message" required rows={4} placeholder="Tell us about your event — venue, rough numbers, timings and any branding you'd like on the prints…" />
              <button type="submit" data-magnetic className="btn btn-primary cf-submit">Send Enquiry <span className="cf-arrow"><Icon name="arrow" /></span></button>
              <p className="cf-note">{sent ? "Your email app should now be open — just press send." : "Opens your email app with the details ready to go."}</p>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="spe-container footer-grid">
          <div className="footer-brand">
            <img className="footer-logo" src={`${I}/sp-logo-dark.png`} alt="Snap and Print Events" />
            <p>Instant event photography — we snap the moment, print it on the spot, and your guests keep it.</p>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <a href="#home">Home</a>
            {NAV.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
            <a href="#contact">Book Us</a>
          </div>
          <div className="footer-col">
            <h4>Get in touch</h4>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
        </div>
        <div className="spe-container footer-bottom">
          <span>© 2026 Snap and Print Events. All rights reserved.</span>
          <span>Designed by <a href="https://bridgewayaibootcamp.com" target="_blank" rel="noopener noreferrer">bridgewayaibootcamp.com</a></span>
        </div>
      </footer>

      {/* Full-screen mobile menu */}
      <div className={`mobile-nav${menuOpen ? " open" : ""}`}>
        <button className="mobile-nav-close" aria-label="Close menu" onClick={close}><Icon name="close" /></button>
        <a href="#home" onClick={close}>Home</a>
        {NAV.map((n) => <a key={n.href} href={n.href} onClick={close}>{n.label}</a>)}
        <a href="/snappydappy/contact" onClick={close}>Book Us</a>
      </div>

      <SPFX />
    </div>
  );
}
