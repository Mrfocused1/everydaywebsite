"use client";

import { useState } from "react";
import { EMAIL } from "./brand";

const field =
  "w-full rounded-lg border border-[#15130f]/15 bg-white px-4 py-3 text-[#15130f] placeholder-[#15130f]/40 outline-none transition-shadow focus:border-[#15130f] focus:ring-2 focus:ring-[#15130f]/20";

const ITEMS = ["Fireplace", "Floor", "Worktop", "Stairs", "Statue / Ornament", "Wall", "Other"];

export function EnquiryForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "");
    const email = String(f.get("email") || "");
    const phone = String(f.get("phone") || "");
    const stone = String(f.get("stone") || "");
    const item = String(f.get("item") || "");
    const message = String(f.get("message") || "");
    const subject = `Stone repair enquiry${item ? ` — ${item}` : ""}${name ? ` (${name})` : ""}`;
    const lbreak = "%0D%0A";
    const bodyText =
      `Name: ${name}${lbreak}Email: ${email}${lbreak}Phone: ${phone}${lbreak}` +
      `Stone: ${stone}${lbreak}Item: ${item}${lbreak}${lbreak}${message}${lbreak}${lbreak}` +
      `(I'll attach photos of the damage to this email.)`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${bodyText}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3.5">
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
        <input name="name" required placeholder="Your name" className={field} autoComplete="name" />
        <input name="email" type="email" required placeholder="Email address" className={field} autoComplete="email" />
      </div>
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
        <input name="phone" placeholder="Phone (optional)" className={field} inputMode="tel" autoComplete="tel" />
        <input name="stone" placeholder="Type of stone (e.g. marble)" className={field} />
      </div>
      <select name="item" defaultValue="" className={`${field} text-[#15130f]/70`} required>
        <option value="" disabled>What needs repairing?</option>
        {ITEMS.map((s) => (<option key={s} value={s} className="text-[#15130f]">{s}</option>))}
      </select>
      <textarea name="message" required rows={4} placeholder="Describe the damage — and remember to attach a couple of photos when your email opens…" className={field} />
      <button type="submit" className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#15130f] px-6 py-4 text-sm font-semibold text-[#f3efe6] transition-colors hover:bg-[#3f5d5a]">
        Send enquiry
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </button>
      <p className="text-center text-xs text-[#15130f]/45">
        {sent ? "Your email app should now be open — attach your photos and press send." : "Opens your email app with the details ready — attach photos of the damage for a fast, accurate quote."}
      </p>
    </form>
  );
}
