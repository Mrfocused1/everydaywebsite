"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "447494780623";

const field =
  "w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 outline-none transition-shadow focus:border-[#0e0e10] focus:ring-2 focus:ring-[#0e0e10]/15";

const PRODUCTS = [
  "T-Shirts", "Hoodies & Sweats", "Hi-Vis & Workwear", "Uniforms",
  "Tracksuits", "Gang Sheets", "Promo / Events", "Something else",
];

export function EnquiryForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "");
    const phone = String(f.get("phone") || "");
    const product = String(f.get("product") || "");
    const message = String(f.get("message") || "");

    const text =
      `Hi Print Attack UK, I'd like a quote.\n\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Item: ${product}\n` +
      `Details: ${message}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3.5">
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
        <input name="name" required placeholder="Your name" className={field} autoComplete="name" />
        <input name="phone" required placeholder="Phone number" className={field} inputMode="tel" autoComplete="tel" />
      </div>
      <select name="product" defaultValue="" className={`${field} text-slate-500`} required>
        <option value="" disabled>What do you need printed?</option>
        {PRODUCTS.map((s) => (
          <option key={s} value={s} className="text-slate-800">{s}</option>
        ))}
      </select>
      <textarea name="message" required rows={4} placeholder="Quantity (min 6), sizes, colours, your design / logo, deadline…" className={field} />
      <button
        type="submit"
        className="group flex w-full items-center justify-center gap-2 rounded-md bg-[#EC008C] px-6 py-4 text-base font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#C9007A]"
      >
        Send on WhatsApp
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </button>
      <p className="text-center text-xs text-slate-400">
        {sent ? "WhatsApp should now be open — just press send." : "Opens WhatsApp with your details ready to send. Minimum order 6."}
      </p>
    </form>
  );
}
