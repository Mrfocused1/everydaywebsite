"use client";

import { useState } from "react";

const EMAIL = "lawrence@acumenelectrical.co.uk";

const field =
  "w-full rounded-lg border border-white/15 bg-white/[0.06] px-4 py-3 text-white placeholder-white/40 outline-none transition-colors focus:border-[#ddb71a] focus:bg-white/10";

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
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Email: ${email}\n` +
      `Service: ${service}\n\n` +
      `${message}\n`;

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input name="name" required placeholder="Your name" className={field} autoComplete="name" />
        <input name="phone" required placeholder="Phone number" className={field} inputMode="tel" autoComplete="tel" />
      </div>
      <input name="email" type="email" placeholder="Email address" className={field} autoComplete="email" />
      <select name="service" defaultValue="" className={field} required>
        <option value="" disabled>
          What do you need?
        </option>
        {SERVICES.map((s) => (
          <option key={s} value={s} className="text-[#0c2742]">
            {s}
          </option>
        ))}
      </select>
      <textarea name="message" required rows={4} placeholder="Tell us about the job…" className={field} />
      <button
        type="submit"
        className="w-full rounded-lg bg-[#ddb71a] px-6 py-4 text-lg font-bold text-[#0c2742] transition-colors hover:bg-[#e9c531]"
      >
        Send enquiry
      </button>
      <p className="text-center text-xs text-white/40">
        {sent
          ? "Your email app should now be open — just press send."
          : "Sending opens your email app with the details ready to go."}
      </p>
    </form>
  );
}
