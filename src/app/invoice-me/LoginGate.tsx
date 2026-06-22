"use client";

import { useState } from "react";

const heading = { fontFamily: "var(--font-epilogue)" } as const;

export function LoginGate() {
  const [phase, setPhase] = useState<"idle" | "sent">("idle");
  const [code, setCode] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const sendCode = async () => {
    setBusy(true);
    setError("");
    try {
      const res = await fetch("/api/invoice-auth/request", { method: "POST" });
      if (!res.ok) throw new Error();
      setPhase("sent");
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setBusy(false);
    }
  };

  const verify = async () => {
    if (code.length < 6) return;
    setBusy(true);
    setError("");
    try {
      const res = await fetch("/api/invoice-auth/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
      if (res.ok) {
        window.location.reload();
        return;
      }
      setError("Incorrect or expired code.");
      setCode("");
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className="flex min-h-svh items-center justify-center bg-ua-bg px-6 pt-20 text-ua-ink">
      <div className="w-full max-w-sm rounded-2xl border-2 border-ua-ink bg-white p-8 text-center shadow-[8px_8px_0_var(--ua-ink)]">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border-2 border-ua-ink bg-ua-bg text-2xl">
          🔒
        </div>

        {phase === "idle" ? (
          <button
            type="button"
            onClick={sendCode}
            disabled={busy}
            className="w-full rounded-full border-2 border-ua-ink bg-ua-ink px-6 py-3 text-base font-bold text-ua-bg shadow-[4px_4px_0_var(--ua-blue)] transition-all hover:-translate-y-0.5 hover:bg-ua-blue active:translate-y-0 disabled:cursor-wait disabled:opacity-70"
            style={heading}
          >
            {busy ? "…" : "Login"}
          </button>
        ) : (
          <div className="space-y-4">
            <input
              inputMode="numeric"
              autoFocus
              maxLength={6}
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
              onKeyDown={(e) => e.key === "Enter" && verify()}
              placeholder="••••••"
              className="w-full rounded-xl border-2 border-ua-ink/20 bg-white px-4 py-3 text-center text-2xl font-bold tracking-[0.5em] outline-none focus:border-ua-ink"
            />
            <button
              type="button"
              onClick={verify}
              disabled={busy || code.length < 6}
              className="w-full rounded-full border-2 border-ua-ink bg-ua-ink px-6 py-3 text-base font-bold text-ua-bg transition-all hover:-translate-y-0.5 hover:bg-ua-blue active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50"
              style={heading}
            >
              {busy ? "…" : "Enter"}
            </button>
            <button
              type="button"
              onClick={sendCode}
              disabled={busy}
              className="text-xs font-semibold text-ua-ink/50 underline-offset-2 hover:text-ua-ink hover:underline"
            >
              Resend code
            </button>
          </div>
        )}

        {error && <p className="mt-4 text-sm font-semibold text-ua-orange">{error}</p>}
      </div>
    </main>
  );
}
