"use client";

import { useState } from "react";

const EMAIL = "info@premierplasteringsouthlakes.co.uk";

const field =
  "w-full border border-slate-200 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 outline-none transition-colors focus:border-[#26231f] focus:ring-2 focus:ring-[#b06a43]/40";

const SERVICES = [
  "Plastering & Skimming",
  "External Rendering",
  "Damp Proofing & Tanking",
  "Lime Plaster & Render",
  "Dry Lining & Insulation",
  "Venetian Polished Plaster",
  "Micro Cement",
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
    const body = `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\n\n${message}\n`;

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
      <select name="service" defaultValue="" className={`${field} text-slate-500`} required>
        <option value="" disabled>What do you need?</option>
        {SERVICES.map((s) => (
          <option key={s} value={s} className="text-slate-800">{s}</option>
        ))}
      </select>
      <textarea name="message" required rows={4} placeholder="Tell us about the job…" className={field} />
      <button
        type="submit"
        className="group flex w-full items-center justify-center gap-2 bg-[#26231f] px-6 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#15120f]"
      >
        Send enquiry
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </button>
      <p className="text-center text-xs text-slate-400">
        {sent ? "Your email app should now be open — just press send." : "Sending opens your email app with the details ready to go."}
      </p>
    </form>
  );
}
