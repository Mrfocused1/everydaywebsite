"use client";

import { useState } from "react";

const EMAIL = "lawrence@acumenelectrical.co.uk";

const field =
  "w-full border border-white/15 bg-white/[0.04] px-4 py-3.5 text-white placeholder-white/35 outline-none transition-colors focus:border-[#f2c511] focus:bg-white/[0.07]";

const SERVICES = [
  "Domestic electrics",
  "Commercial electrics",
  "Landlord / EICR",
  "EV charger installation",
  "Inspection & testing",
  "Fault finding & repairs",
  "Consumer unit / fuse board",
  "Rewire",
  "Other",
];

export function EnquiryForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "");
    const phone = String(f.get("phone") || "");
    const email = String(f.get("email") || "");
    const service = String(f.get("service") || "");
    const message = String(f.get("message") || "");

    const subject = `Enquiry from ${name || "website"}${service ? ` — ${service}` : ""}`;
    const body =
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\n\n${message}\n`;

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3.5">
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
        <input name="name" required placeholder="Your name" className={field} autoComplete="name" />
        <input name="phone" required placeholder="Phone number" className={field} inputMode="tel" autoComplete="tel" />
      </div>
      <input name="email" type="email" placeholder="Email address" className={field} autoComplete="email" />
      <select name="service" defaultValue="" className={field} required>
        <option value="" disabled>
          What do you need?
        </option>
        {SERVICES.map((s) => (
          <option key={s} value={s} className="text-[#0b0b0d]">
            {s}
          </option>
        ))}
      </select>
      <textarea name="message" required rows={4} placeholder="Tell us about the job…" className={field} />
      <button
        type="submit"
        data-cursor
        className="magnetic group flex w-full items-center justify-center gap-3 bg-[#f2c511] px-6 py-4 text-base font-bold uppercase tracking-wider text-[#0b0b0d] transition-colors hover:bg-white"
      >
        Send enquiry
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </button>
      <p className="text-center text-xs text-white/40">
        {sent ? "Your email app should now be open — just press send." : "Sending opens your email app, details ready to go."}
      </p>
    </form>
  );
}
