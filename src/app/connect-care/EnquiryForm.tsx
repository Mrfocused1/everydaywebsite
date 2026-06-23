"use client";

import { useState } from "react";

const EMAIL = "info@connectcareconsultancy.com";

const field =
  "w-full rounded-xl border border-[#2b2d33]/15 bg-white px-4 py-3 text-[#2b2d33] placeholder-[#9a9ea5] outline-none transition-shadow focus:border-[#2a7fc4] focus:ring-2 focus:ring-[#2a7fc4]/20";

const SUBJECTS = [
  "New Provider CQC Registration", "CQC Mock Inspection", "Registered Manager / Provider Support", "General enquiry",
];

export function EnquiryForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const first = String(f.get("first") || "");
    const last = String(f.get("last") || "");
    const email = String(f.get("email") || "");
    const phone = String(f.get("phone") || "");
    const subject = String(f.get("subject") || "");
    const message = String(f.get("message") || "");

    const subjLine = `Enquiry${subject ? ` — ${subject}` : ""} from ${first} ${last}`.trim();
    const bodyText = `Name: ${first} ${last}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\n\n${message}\n`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subjLine)}&body=${encodeURIComponent(bodyText)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3.5">
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
        <input name="first" required placeholder="First name" className={field} autoComplete="given-name" />
        <input name="last" required placeholder="Last name" className={field} autoComplete="family-name" />
      </div>
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
        <input name="email" type="email" required placeholder="Email address" className={field} autoComplete="email" />
        <input name="phone" placeholder="Phone number" className={field} inputMode="tel" autoComplete="tel" />
      </div>
      <select name="subject" defaultValue="" className={`${field} text-[#9a9ea5]`} required>
        <option value="" disabled>What can we help with?</option>
        {SUBJECTS.map((s) => (<option key={s} value={s} className="text-[#2b2d33]">{s}</option>))}
      </select>
      <textarea name="message" required rows={5} placeholder="Tell us a little about your service and how we can help…" className={field} />
      <button type="submit" className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#2a7fc4] px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-[#21649d]">
        Send message
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </button>
      <p className="text-center text-xs text-[#9a9ea5]">
        {sent ? "Your email app should now be open — just press send." : "Sending opens your email app with the details ready to go."}
      </p>
    </form>
  );
}
