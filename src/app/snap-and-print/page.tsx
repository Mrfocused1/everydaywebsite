"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import { Icon } from "./icons";
import "./spe.css";

/* eslint-disable @next/next/no-img-element */

// Optimized images in /public/marketing/sp/. The event / gallery / testimonial
// avatar slots reuse the supplied photos as placeholders until the rest arrive.
const I = "/marketing/sp";
const FRIENDS = `${I}/sp-friends.jpg`;
const KEEP = `${I}/sp-keep.jpg`;
const SNAP = `${I}/sp-snap.jpg`;
const PRINT = `${I}/sp-print.jpg`;

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
              <a href="/snap-and-print/contact" className="nav-cta" onClick={close}>Book Us</a>
            </div>

            <button className="mobile-menu-btn" aria-label="Open menu" onClick={() => setMenuOpen((v) => !v)}><Icon name="menu" /></button>
          </nav>

          <div className="hero-content">
            <h1>Capture<br />The Moments.</h1>
            <span className="script">Take Them Home.</span>

            <p>
              We snap. You smile. You print. High-quality event photos printed on the spot.
              Amazing memories, in your hands.
            </p>

            <div className="hero-buttons">
              <a href="/snap-and-print/contact" className="btn btn-primary">Get a Photo</a>
              <a href="#gallery" className="btn btn-outline">View Gallery</a>
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

              <a href="/snap-and-print/contact" className="btn black-btn">Book Us For Your Event</a>
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
              <img src={`${I}/event-festivals.jpg`} alt="Festival photography" />
              <div className="event-icon"><Icon name="music" /></div>
              <h3>Festivals</h3>
              <p>Live music, good vibes and unforgettable moments.</p>
            </div>

            <div className="event-card">
              <img src={`${I}/event-parties.jpg`} alt="Party photography" />
              <div className="event-icon"><Icon name="glass" /></div>
              <h3>Parties</h3>
              <p>We capture the energy, you keep the memories.</p>
            </div>

            <div className="event-card">
              <img src={`${I}/event-birthdays.jpg`} alt="Birthday photography" />
              <div className="event-icon"><Icon name="cake" /></div>
              <h3>Birthdays</h3>
              <p>Big smiles, little details, beautiful memories.</p>
            </div>

            <div className="event-card">
              <img src={`${I}/event-weddings.jpg`} alt="Wedding photography" />
              <div className="event-icon"><Icon name="gem" /></div>
              <h3>Weddings</h3>
              <p>We capture your special day so you can relive it forever.</p>
            </div>

            <div className="event-card">
              <img src={`${I}/event-corporate.jpg`} alt="Corporate event photography" />
              <div className="event-icon"><Icon name="briefcase" /></div>
              <h3>Corporate Events</h3>
              <p>Professional coverage for every important moment.</p>
            </div>

            <div className="event-card">
              <img src={`${I}/event-community.jpg`} alt="Community event photography" />
              <div className="event-icon"><Icon name="heart" /></div>
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
                  <img src={`${I}/avatar-1.jpg`} alt="Jasmine R." />
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
                  <img src={`${I}/avatar-2.jpg`} alt="Michelle T." />
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
                  <img src={`${I}/avatar-3.jpg`} alt="David K." />
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
              <a href="/snap-and-print/contact" className="btn btn-primary">Book Your Event</a>
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
            <img src={`${I}/gallery-1.jpg`} alt="Festival moment, printed" />
            <img src={`${I}/gallery-2.jpg`} alt="First birthday memory" />
            <img src={`${I}/gallery-3.jpg`} alt="A night out, captured" />
            <img src={`${I}/gallery-4.jpg`} alt="Festival portrait" />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="spe-container">
          <h2>Ready To Snap<br /><span className="script">And Print?</span></h2>
          <p>Bring instant photography and high-quality printed memories to your next event.</p>
          <a href="/snap-and-print/contact" className="btn btn-primary">Book Snap and Print Events</a>
        </div>
      </section>

      <footer>
        <div className="spe-container">© 2026 Snap and Print Events. All rights reserved.</div>
      </footer>
    </div>
  );
}
