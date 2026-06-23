"use client";

import { useState } from "react";
import { Icon } from "../icons";
import "../spe.css";

/* eslint-disable @next/next/no-img-element */

// TODO: replace placeholders with the real details.
const INSTAGRAM = "https://www.instagram.com/snapandprintevents";
const HANDLE = "@snapandprintevents";
const PHONE_DISPLAY = "+44 7000 000000";
const PHONE_TEL = "tel:+447000000000";
const EMAIL = "hello@snapandprintevents.com";

const HOME = "/snap-and-print";
const NAV = [
  { href: `${HOME}#how`, label: "How It Works" },
  { href: `${HOME}#events`, label: "Events" },
  { href: `${HOME}#gallery`, label: "Gallery" },
];

export default function ContactPage() {
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
      {/* Image hero header */}
      <header className="contact-hero">
        <div className="spe-container">
          <nav className="navbar">
            <a href={HOME} className="logo">
              <img src="/marketing/sp/sp-logo.png" alt="Snap and Print Events" />
            </a>
            <div className="nav-links">
              <a href={HOME}>Home</a>
              {NAV.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
              <a href={`${HOME}/contact`} className="nav-cta">Book Us</a>
            </div>
            <button className="mobile-menu-btn" aria-label="Open menu" onClick={() => setMenuOpen(true)}><Icon name="menu" /></button>
          </nav>

          <div className="contact-hero-content">
            <div className="eyebrow">Get in touch</div>
            <h1 className="contact-title">Let&rsquo;s Plan <span className="script">Your Event.</span></h1>
            <p>Booking an event or just have a question? Send us the details and we&rsquo;ll come straight back to you.</p>
          </div>
        </div>
      </header>

      {/* Contact */}
      <section className="contact-section">
        <div className="spe-container contact-grid">
          <div className="contact-methods">
            <h2>Reach us directly</h2>
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
            <textarea name="message" required rows={5} placeholder="Tell us about your event — venue, rough numbers, timings and any branding you'd like on the prints…" />
            <button type="submit" className="btn btn-primary cf-submit">Send Enquiry <span className="cf-arrow"><Icon name="arrow" /></span></button>
            <p className="cf-note">{sent ? "Your email app should now be open — just press send." : "Opens your email app with the details ready to go."}</p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="spe-container footer-grid">
          <div className="footer-brand">
            <p className="footer-wordmark">Snap <span>&amp;</span> Print <em>Events</em></p>
            <p>Instant event photography — we snap the moment, print it on the spot, and your guests keep it.</p>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <a href={HOME}>Home</a>
            {NAV.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
            <a href={`${HOME}/contact`}>Book Us</a>
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
        <a href={HOME} onClick={close}>Home</a>
        {NAV.map((n) => <a key={n.href} href={n.href} onClick={close}>{n.label}</a>)}
        <a href={`${HOME}/contact`} onClick={close}>Book Us</a>
      </div>
    </div>
  );
}
