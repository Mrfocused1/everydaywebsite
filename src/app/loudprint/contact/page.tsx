"use client";

import { useState } from "react";
import { Icon } from "../icons";
import { Smoke } from "../Smoke";
import { LPFX } from "../LPFX";
import "../lp.css";

// TODO: confirm the real contact details with the client.
const INSTAGRAM = "https://www.instagram.com/loudpackprinting";
const HANDLE = "@loudpackprinting";
const WEBSITE = "https://www.loudpackprint.com";
const EMAIL = "hello@loudpackprint.com";

export default function LoudPrintContact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "");
    const email = String(f.get("email") || "");
    const product = String(f.get("product") || "");
    const qty = String(f.get("qty") || "");
    const message = String(f.get("message") || "");
    const subject = `Quote request${product ? ` — ${product}` : ""}${name ? ` (${name})` : ""}`;
    const body = `Name: ${name}\nEmail: ${email}\nProduct: ${product}\nApprox. quantity: ${qty}\n\n${message}\n`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <div className="lp-root">
      <noscript>
        <style>{`.lp-root [data-reveal]{opacity:1!important;transform:none!important}`}</style>
      </noscript>

      <div className="lp-page">
        {/* HERO */}
        <section className="lp-contact-hero">
          <Smoke tone="dark" />
          <div className="lp-container lp-contact-hero-inner">
            <a href="/loudprint" className="lp-back"><Icon name="arrow" /> Back to home</a>
            <span className="lp-eyebrow lp-eyebrow-light">Get a quote</span>
            <h1>Let&rsquo;s fuel<br /><span className="lp-holo-text">your brand.</span></h1>
            <p>Tell us what you&rsquo;re printing — Mylar bags, stickers, Miron jars or merch — and we&rsquo;ll come back with a quote and a plan. Worldwide shipping, every project.</p>
          </div>
        </section>

        {/* CONTACT */}
        <section className="lp-contact-section">
          <div className="lp-container lp-contact-grid">
            <div className="lp-contact-methods" data-reveal>
              <h2>Reach us direct</h2>
              <a className="lp-contact-method" href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
                <span className="lp-cm-icon"><Icon name="instagram" /></span>
                <span><strong>Instagram</strong><span>{HANDLE}</span></span>
              </a>
              <a className="lp-contact-method" href={`mailto:${EMAIL}`}>
                <span className="lp-cm-icon"><Icon name="mail" /></span>
                <span><strong>Email</strong><span>{EMAIL}</span></span>
              </a>
              <a className="lp-contact-method" href={WEBSITE} target="_blank" rel="noopener noreferrer">
                <span className="lp-cm-icon"><Icon name="globe" /></span>
                <span><strong>Website</strong><span>loudpackprint.com</span></span>
              </a>
              <p className="lp-cm-note">DMs are the fastest way to reach us. Short runs turn around in days, and we ship worldwide. We pride ourselves on a 5★ service — 100% satisfaction, every project.</p>
            </div>

            <form className="lp-form" onSubmit={onSubmit}>
              <div className="lp-form-head"><span className="lp-form-mark" aria-hidden /><span>Request a quote</span></div>
              <div className="lp-form-row">
                <input name="name" required placeholder="Your name" autoComplete="name" />
                <input name="email" type="email" required placeholder="Email address" autoComplete="email" />
              </div>
              <div className="lp-form-row">
                <select name="product" defaultValue="" required>
                  <option value="" disabled>What are you printing?</option>
                  <option>Mylar Bags</option>
                  <option>Stickers / Sticker Bags</option>
                  <option>UV Miron Jars</option>
                  <option>Branded Merch</option>
                  <option>Full custom range</option>
                  <option>Something else</option>
                </select>
                <input name="qty" placeholder="Approx. quantity" inputMode="numeric" />
              </div>
              <textarea name="message" required rows={5} placeholder="Tell us about your project — sizes, finishes (matte, spot gloss, embossed, foil), artwork status and deadline…" />
              <button type="submit" data-magnetic className="lp-btn lp-btn-primary lp-submit">Send Request <span className="lp-arr"><Icon name="arrow" /></span></button>
              <p className="lp-form-note">{sent ? "Your email app should now be open — just press send." : "Opens your email app with the details ready to go."}</p>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="lp-footer">
          <div className="lp-container lp-footer-bottom">
            <span>© 2026 Loud Pack Printing. All rights reserved.</span>
            <span>Designed by <a href="https://everydayweb.site" target="_blank" rel="noopener noreferrer">everydayweb.site</a></span>
          </div>
        </footer>
      </div>

      <LPFX />
    </div>
  );
}
