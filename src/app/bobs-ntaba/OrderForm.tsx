"use client";

import { useState } from "react";
import { COND, CUT_BR, CUT_TL, SITE } from "./brand";

const ORDER_OPTIONS = [
  "Small Tray — £8",
  "Regular Tray — £12",
  "Large Tray — £18",
  "Family Platter — £35",
  "Party Bowl — £65",
  "Matchday Platter — £20",
  "Not sure yet — help me choose",
];

const initial = { name: "", phone: "", order: ORDER_OPTIONS[1], date: "", fulfil: "Collection", notes: "" };

export function OrderForm() {
  const [form, setForm] = useState(initial);

  const set =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const buildMessage = () =>
    [
      `New Ntaba order — ${SITE.name}`,
      ``,
      `Name: ${form.name || "—"}`,
      `Phone: ${form.phone || "—"}`,
      `Order: ${form.order}`,
      `For: ${form.fulfil}${form.date ? ` on ${form.date}` : ""}`,
      form.notes ? `Notes: ${form.notes}` : null,
    ]
      .filter((l): l is string => l !== null)
      .join("\n");

  const sendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(buildMessage())}`, "_blank", "noopener,noreferrer");
  };

  const sendEmail = () => {
    const subject = `Ntaba order — ${form.name || "new order"}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildMessage())}`;
  };

  const field =
    "w-full border border-white/15 bg-[#0c0b0a] px-4 py-3 text-[#f3efe6] transition-colors placeholder:text-[#a39c8e]/50 focus:border-[#c99a3b] focus:outline-none";
  const label = `${COND} mb-2 block text-xs tracking-widest text-[#a39c8e]`;

  return (
    <form onSubmit={sendWhatsApp} className="border border-white/10 bg-[#16140f] p-6 md:p-8" style={{ clipPath: CUT_BR }}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="bn-name">Your name</label>
          <input id="bn-name" className={field} value={form.name} onChange={set("name")} placeholder="e.g. Bob" required />
        </div>
        <div>
          <label className={label} htmlFor="bn-phone">Phone number</label>
          <input id="bn-phone" type="tel" className={field} value={form.phone} onChange={set("phone")} placeholder="So we can confirm" required />
        </div>

        <div>
          <label className={label} htmlFor="bn-order">What would you like?</label>
          <select id="bn-order" className={field} value={form.order} onChange={set("order")}>
            {ORDER_OPTIONS.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={label} htmlFor="bn-fulfil">Collection or delivery?</label>
          <select id="bn-fulfil" className={field} value={form.fulfil} onChange={set("fulfil")}>
            <option>Collection</option>
            <option>Local delivery</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className={label} htmlFor="bn-date">When do you need it?</label>
          <input id="bn-date" type="date" className={field} value={form.date} onChange={set("date")} />
        </div>

        <div className="sm:col-span-2">
          <label className={label} htmlFor="bn-notes">Order details &amp; notes</label>
          <textarea
            id="bn-notes"
            rows={4}
            className={field}
            value={form.notes}
            onChange={set("notes")}
            placeholder="Quantities, extra sides, spice level, allergies, delivery address…"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className={`${COND} flex-1 bg-[#c99a3b] px-6 py-4 text-lg tracking-widest text-[#0c0b0a] transition-colors hover:bg-[#e2bb6b]`}
          style={{ clipPath: CUT_TL }}
        >
          Send order via WhatsApp
        </button>
        <button
          type="button"
          onClick={sendEmail}
          className={`${COND} flex-1 border border-[#f3efe6]/30 px-6 py-4 text-lg tracking-widest text-[#f3efe6] transition-colors hover:border-[#c99a3b] hover:text-[#c99a3b]`}
        >
          Send by email
        </button>
      </div>
      <p className="mt-4 text-xs text-[#a39c8e]/60">
        Both buttons open with your order pre-filled — just hit send. We&apos;ll confirm price &amp; pick-up time. No payment taken here.
      </p>
    </form>
  );
}
