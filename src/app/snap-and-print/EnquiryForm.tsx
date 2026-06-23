"use client";

import { useState } from "react";

// Keep in sync with brand.tsx EMAIL (hardcoded so this client component doesn't
// pull the whole brand module into the client bundle).
const EMAIL = "hello@snapandprintevents.co.uk";

const field =
  "w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 outline-none transition-shadow focus:border-[#FF4D2E] focus:ring-2 focus:ring-[#FF4D2E]/20";

const EVENT_TYPES = [
  "Festival", "Party or Birthday", "Wedding", "Corporate Event",
  "Brand Activation", "Club Night / Pop-Up", "Something else",
];

export function EnquiryForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "");
    const email = String(f.get("email") || "");
    const type = String(f.get("type") || "");
    const date = String(f.get("date") || "");
    const message = String(f.get("message") || "");

    const subject = `Booking enquiry${type ? ` — ${type}` : ""}${name ? ` (${name})` : ""}`;
    const body = `Name: ${name}\nEmail: ${email}\nEvent type: ${type}\nEvent date: ${date}\n\n${message}\n`;

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3.5">
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
        <input name="name" required placeholder="Your name" className={field} autoComplete="name" />
        <input name="email" type="email" required placeholder="Email address" className={field} autoComplete="email" />
      </div>
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
        <select name="type" defaultValue="" className={`${field} text-slate-500`} required>
          <option value="" disabled>Type of event</option>
          {EVENT_TYPES.map((s) => (
            <option key={s} value={s} className="text-slate-800">{s}</option>
          ))}
        </select>
        <input name="date" type="date" className={`${field} text-slate-500`} aria-label="Event date" />
      </div>
      <textarea name="message" required rows={4} placeholder="Tell us about your event — venue, rough numbers, timings, and any branding you'd like on the prints…" className={field} />
      <button
        type="submit"
        className="group flex w-full items-center justify-center gap-2 rounded-md bg-[#FF4D2E] px-6 py-4 text-base font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#E63915]"
      >
        Send booking enquiry
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </button>
      <p className="text-center text-xs text-slate-400">
        {sent ? "Your email app should now be open — just press send." : "Opens your email app with the details ready to go."}
      </p>
    </form>
  );
}
