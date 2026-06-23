"use client";

import { useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import "./spe.css";

/* eslint-disable @next/next/no-img-element */

// Optimized images in /public/marketing/sp/. The event / gallery / testimonial
// avatar slots reuse the supplied photos as placeholders until the rest arrive.
const I = "/marketing/sp";
const HERO = `${I}/sp-hero.jpg`;
const FRIENDS = `${I}/sp-friends.jpg`;
const KEEP = `${I}/sp-keep.jpg`;
const SNAP = `${I}/sp-snap.jpg`;
const PRINT = `${I}/sp-print.jpg`;

// Consistent monoline icons (replacing the mismatched emojis).
const ICONS: Record<string, ReactNode> = {
  camera: (<><path d="M14.5 4h-5L7.5 6.5H4A1.5 1.5 0 0 0 2.5 8v10A1.5 1.5 0 0 0 4 19.5h16A1.5 1.5 0 0 0 21.5 18V8A1.5 1.5 0 0 0 20 6.5h-3.5L14.5 4Z" /><circle cx="12" cy="12.5" r="3.4" /></>),
  zap: (<path d="M13 2.5 4 13.5h6.5l-1.5 8 9-11H11.5l1.5-8Z" />),
  calendar: (<><rect x="3.5" y="5" width="17" height="16" rx="2" /><path d="M3.5 9.5h17M8 3v4M16 3v4" /></>),
  heart: (<path d="M12 20.5 4.2 13a4.7 4.7 0 0 1 6.6-6.6l1.2 1.2 1.2-1.2A4.7 4.7 0 1 1 19.8 13L12 20.5Z" />),
  award: (<><circle cx="12" cy="9" r="5.5" /><path d="M8.5 13.8 7 21.5l5-2.8 5 2.8-1.5-7.7" /></>),
  star: (<path d="M12 3.5l2.6 5.3 5.8.8-4.2 4.1 1 5.8L12 16.8 6.8 19.5l1-5.8L3.6 9.6l5.8-.8L12 3.5Z" />),
};

function Icon({ name }: { name: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {ICONS[name]}
    </svg>
  );
}

export default function SnapAndPrint() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navOpen: CSSProperties | undefined = menuOpen
    ? {
        display: "flex",
        position: "absolute",
        top: "100px",
        left: "4%",
        right: "4%",
        flexDirection: "column",
        background: "rgba(0,0,0,0.95)",
        padding: "30px",
        borderRadius: "16px",
        zIndex: 100,
      }
    : undefined;
  const close = () => setMenuOpen(false);

  return (
    <div className="spe-root">
      {/* HERO */}
      <header className="hero" id="home">
        <div className="spe-container">
          <nav className="navbar">
            <a href="#home" className="logo" onClick={close}>
              <img src={`${I}/sp-logo.png`} alt="Snap and Print Events" />
            </a>

            <div className="nav-links" style={navOpen}>
              <a href="#home" onClick={close}>Home</a>
              <a href="#how" onClick={close}>How It Works</a>
              <a href="#events" onClick={close}>Events</a>
              <a href="#gallery" onClick={close}>Gallery</a>
              <a href="#contact" className="nav-cta" onClick={close}>Book Us</a>
            </div>

            <button className="mobile-menu-btn" aria-label="Open menu" onClick={() => setMenuOpen((v) => !v)}>☰</button>
          </nav>

          <div className="hero-content">
            <h1>Capture<br />The Moments.</h1>
            <span className="script">Take Them Home.</span>

            <p>
              We snap. You smile. You print. High-quality event photos printed on the spot.
              Amazing memories, in your hands.
            </p>

            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">📸 Get a Photo</a>
              <a href="#gallery" className="btn btn-outline">🖼 View Gallery</a>
            </div>
          </div>
        </div>

        <div className="hero-badge">
          Printed<br />Instantly.<br /><span style={{ color: "var(--gold)" }}>Memories<br />Forever.</span>
        </div>

        <div className="feature-strip">
          <div className="spe-container feature-grid">
            <div className="feature-item">
              <div className="icon"><Icon name="camera" /></div>
              <div>
                <h3>Professional Photos</h3>
                <p>High quality shots by experienced event photographers.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="icon"><Icon name="zap" /></div>
              <div>
                <h3>Instant Printing</h3>
                <p>Your photos printed on the spot. No waiting, just memories.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="icon"><Icon name="calendar" /></div>
              <div>
                <h3>Every Occasion</h3>
                <p>Festivals, parties, birthdays, weddings and corporate events.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="icon"><Icon name="heart" /></div>
              <div>
                <h3>Memories You Can Hold</h3>
                <p>Because some moments deserve more than a phone screen.</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* HOW IT WORKS */}
      <section className="how-section" id="how">
        <div className="spe-container">
          <div className="how-layout">
            <div className="how-intro">
              <div className="eyebrow">How it works</div>
              <h2 className="section-title">
                Simple.<br />
                Fast.<br />
                <span className="script">Memorable.</span>
              </h2>

              <p>We make it easy to capture amazing moments and take them home with you, instantly.</p>

              <a href="#contact" className="btn black-btn">📷 Book Us For Your Event</a>
            </div>

            <div className="steps-grid">
              <div className="step-card">
                <div>
                  <div className="step-number">1</div>
                  <h3>We Snap</h3>
                  <p>Our friendly photographers capture the best moments throughout your event.</p>
                </div>
                <img src={SNAP} alt="Photographer taking a photo" />
              </div>

              <div className="step-card">
                <div>
                  <div className="step-number">2</div>
                  <h3>You Smile</h3>
                  <p>We capture the real you. Natural smiles, big laughs and special moments.</p>
                </div>
                <img src={FRIENDS} alt="Friends smiling at event" />
              </div>

              <div className="step-card">
                <div>
                  <div className="step-number">3</div>
                  <h3>We Print</h3>
                  <p>Your photos are printed instantly on the spot with high-quality prints.</p>
                </div>
                <img src={PRINT} alt="Instant photo printer" />
              </div>

              <div className="step-card">
                <div>
                  <div className="step-number">4</div>
                  <h3>You Take It Home</h3>
                  <p>Walk away with a keepsake you can hold, share and treasure forever.</p>
                </div>
                <img src={KEEP} alt="Guest holding printed photo" />
              </div>
            </div>
          </div>

          <div className="benefit-strip">
            <div className="benefit">
              <div className="icon"><Icon name="award" /></div>
              <div>
                <h4>Professional &amp; Reliable</h4>
                <p>Experienced photographers you can count on.</p>
              </div>
            </div>

            <div className="benefit">
              <div className="icon"><Icon name="zap" /></div>
              <div>
                <h4>Instant Printing</h4>
                <p>High-quality prints, delivered in seconds.</p>
              </div>
            </div>

            <div className="benefit">
              <div className="icon"><Icon name="star" /></div>
              <div>
                <h4>Premium Quality</h4>
                <p>Crisp, vibrant prints that last.</p>
              </div>
            </div>

            <div className="benefit">
              <div className="icon"><Icon name="calendar" /></div>
              <div>
                <h4>Perfect For Any Occasion</h4>
                <p>From festivals to birthdays, weddings to corporate events.</p>
              </div>
            </div>

            <div className="benefit">
              <div className="icon"><Icon name="heart" /></div>
              <div>
                <h4>Memories That Last</h4>
                <p>Real moments. Real prints. Real memories.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS WE COVER */}
      <section className="events-section" id="events">
        <div className="spe-container">
          <div className="eyebrow">Events we cover</div>
          <h2 className="section-title">
            Every Event.<br />
            <span className="script">Every Memory.</span>
          </h2>
          <div className="spe-underline"></div>

          <p className="section-copy">
            From festivals and parties to birthdays and corporate events, we&rsquo;re there to capture it all
            and print it for you instantly.
          </p>

          <div className="event-grid">
            <div className="event-card">
              <img src={HERO} alt="Festival photography" />
              <div className="event-icon">🎵</div>
              <h3>Festivals</h3>
              <p>Live music, good vibes and unforgettable moments.</p>
            </div>

            <div className="event-card">
              <img src={FRIENDS} alt="Party photography" />
              <div className="event-icon">🍸</div>
              <h3>Parties</h3>
              <p>We capture the energy, you keep the memories.</p>
            </div>

            <div className="event-card">
              <img src={KEEP} alt="Birthday photography" />
              <div className="event-icon">🎂</div>
              <h3>Birthdays</h3>
              <p>Big smiles, little details, beautiful memories.</p>
            </div>

            <div className="event-card">
              <img src={FRIENDS} alt="Wedding photography" />
              <div className="event-icon">💍</div>
              <h3>Weddings</h3>
              <p>We capture your special day so you can relive it forever.</p>
            </div>

            <div className="event-card">
              <img src={SNAP} alt="Corporate event photography" />
              <div className="event-icon">💼</div>
              <h3>Corporate Events</h3>
              <p>Professional coverage for every important moment.</p>
            </div>

            <div className="event-card">
              <img src={KEEP} alt="Community event photography" />
              <div className="event-icon">🖤</div>
              <h3>Community Events</h3>
              <p>Celebrating culture, connection and community.</p>
            </div>
          </div>
        </div>

        <div className="testimonial-section">
          <div className="spe-container testimonial-layout">
            <div className="print-stack">
              <img src={PRINT} alt="Printed photos on table" />
            </div>

            <div className="testimonials">
              <div className="quote">
                <div className="quote-mark">&ldquo;</div>
                <p>The photos are always amazing and having them printed on the spot is such a vibe. Highly recommend!</p>
                <div className="person">
                  <img src={FRIENDS} alt="Client photo" />
                  <div>
                    <strong>Jasmine R.</strong>
                    <span>Festival Goer</span>
                  </div>
                </div>
              </div>

              <div className="quote">
                <div className="quote-mark">&ldquo;</div>
                <p>Snap and Print Events captured our daughter&rsquo;s first birthday perfectly. Beautiful photos and instant prints.</p>
                <div className="person">
                  <img src={KEEP} alt="Client photo" />
                  <div>
                    <strong>Michelle T.</strong>
                    <span>Birthday Party Host</span>
                  </div>
                </div>
              </div>

              <div className="quote">
                <div className="quote-mark">&ldquo;</div>
                <p>Professional, friendly and efficient. They elevated our corporate event and gave our team memories to take home.</p>
                <div className="person">
                  <img src={HERO} alt="Client photo" />
                  <div>
                    <strong>David K.</strong>
                    <span>Corporate Client</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="cta-box" id="contact">
              <h3>Let&rsquo;s Capture <span className="script">Your Next Memory.</span></h3>
              <p>Book us today and experience the magic of instant photography.</p>
              <a href="mailto:hello@snapandprintevents.com" className="btn btn-primary">📅 Book Your Event</a>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery-section" id="gallery">
        <div className="spe-container">
          <div className="eyebrow">Gallery preview</div>
          <h2 className="section-title">
            Real Moments.<br />
            <span className="script">Real Prints.</span>
          </h2>

          <div className="gallery-grid">
            <img src={HERO} alt="Gallery image" />
            <img src={FRIENDS} alt="Gallery image" />
            <img src={KEEP} alt="Gallery image" />
            <img src={SNAP} alt="Gallery image" />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="spe-container">
          <h2>Ready To Snap<br /><span className="script">And Print?</span></h2>
          <p>Bring instant photography and high-quality printed memories to your next event.</p>
          <a href="mailto:hello@snapandprintevents.com" className="btn btn-primary">Book Snap and Print Events</a>
        </div>
      </section>

      <footer>
        <div className="spe-container">© 2026 Snap and Print Events. All rights reserved.</div>
      </footer>
    </div>
  );
}
