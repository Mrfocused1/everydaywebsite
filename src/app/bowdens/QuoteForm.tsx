"use client";

import { useState } from "react";

const field =
  "w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition-colors focus:border-[#c2d600] focus:bg-white/10";

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/bowdens-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-[#c2d600]/40 bg-[#c2d600]/10 p-8 text-center">
        <p className="text-2xl font-bold text-white">Thanks — we&apos;ve got it.</p>
        <p className="mt-2 text-white/70">
          We&apos;ll be in touch shortly. Need us sooner? Call{" "}
          <a href="tel:07796767441" className="font-semibold text-[#c2d600]">
            07796 767441
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input name="name" required placeholder="Your name" className={field} autoComplete="name" />
        <input name="phone" required placeholder="Phone number" className={field} inputMode="tel" autoComplete="tel" />
      </div>
      <input name="email" type="email" placeholder="Email (optional)" className={field} autoComplete="email" />
      <input name="postcode" placeholder="Postcode / area" className={field} />
      <textarea name="message" required rows={4} placeholder="Tell us about your project…" className={field} />
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-lg bg-[#c2d600] px-6 py-4 text-lg font-bold text-[#1d1452] transition-colors hover:bg-[#d3e62b] disabled:opacity-70"
      >
        {status === "sending" ? "Sending…" : "Request my free quote"}
      </button>
      {status === "error" && (
        <p className="text-sm text-[#c2d600]">
          Something went wrong. Please call us on{" "}
          <a href="tel:07796767441" className="font-semibold underline">
            07796 767441
          </a>
          .
        </p>
      )}
      <p className="text-center text-xs text-white/40">No obligation. We&apos;ll never share your details.</p>
    </form>
  );
}
