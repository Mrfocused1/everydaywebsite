"use client";

import { useState } from "react";

const EMAIL = "info@industrybranding.co.uk";

const field =
  "w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 outline-none transition-shadow focus:border-[#0e0e10] focus:ring-2 focus:ring-[#0e0e10]/15";

const PRODUCTS = [
  "T-Shirts", "Hoodies & Sweats", "Polos & Workwear", "Hi-Vis & PPE",
  "Caps & Headwear", "Bags & Totes", "Embroidery", "Promotional Merch", "Something else",
];

export function EnquiryForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "");
    const phone = String(f.get("phone") || "");
    const email = String(f.get("email") || "");
    const product = String(f.get("product") || "");
    const message = String(f.get("message") || "");

    const subject = `Quote request${product ? ` — ${product}` : ""}${name ? ` (${name})` : ""}`;
    const body = `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nProduct: ${product}\n\n${message}\n`;

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
      <select name="product" defaultValue="" className={`${field} text-slate-500`} required>
        <option value="" disabled>What do you need branded?</option>
        {PRODUCTS.map((s) => (
          <option key={s} value={s} className="text-slate-800">{s}</option>
        ))}
      </select>
      <textarea name="message" required rows={4} placeholder="Garment, quantity, sizes, print or embroidery, deadline…" className={field} />
      <button
        type="submit"
        className="group flex w-full items-center justify-center gap-2 rounded-md bg-[#0e0e10] px-6 py-4 text-base font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#2a2a2e]"
      >
        Send quote request
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </button>
      <p className="text-center text-xs text-slate-400">
        {sent ? "Your email app should now be open — just press send." : "Sending opens your email app with the details ready to go."}
      </p>
    </form>
  );
}
