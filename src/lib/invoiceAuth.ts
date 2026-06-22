import crypto from "node:crypto";

// Stateless OTP + session auth for the /invoice-me tool. No database: a signed
// (HMAC) cookie carries the OTP challenge, and a separate signed cookie is the
// session. Server-only — relies on INVOICE_AUTH_SECRET.

export const OTP_COOKIE = "inv_otp";
export const SESSION_COOKIE = "inv_session";
export const OTP_TTL_MS = 10 * 60 * 1000; // 10 min
export const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days
export const MAX_ATTEMPTS = 5;

function secret(): string {
  return process.env.INVOICE_AUTH_SECRET || "";
}

function sign(obj: Record<string, unknown>): string {
  const payload = Buffer.from(JSON.stringify(obj)).toString("base64url");
  const sig = crypto.createHmac("sha256", secret()).update(payload).digest("base64url");
  return `${payload}.${sig}`;
}

function unsign(token: string | undefined | null): Record<string, unknown> | null {
  if (!token || !secret()) return null;
  const [payload, sig] = token.split(".");
  if (!payload || !sig) return null;
  const expect = crypto.createHmac("sha256", secret()).update(payload).digest("base64url");
  const a = Buffer.from(sig);
  const b = Buffer.from(expect);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;
  try {
    return JSON.parse(Buffer.from(payload, "base64url").toString());
  } catch {
    return null;
  }
}

export function genCode(): string {
  return String(crypto.randomInt(0, 1_000_000)).padStart(6, "0");
}

function hashCode(code: string): string {
  return crypto.createHmac("sha256", secret()).update(`otp:${code}`).digest("base64url");
}

export function makeChallenge(code: string): string {
  return sign({ h: hashCode(code), exp: Date.now() + OTP_TTL_MS, att: 0 });
}

export function verifyChallenge(
  token: string | undefined | null,
  code: string,
): { ok: boolean; nextToken?: string } {
  const p = unsign(token);
  if (!p || typeof p.exp !== "number" || p.exp < Date.now()) return { ok: false };
  const att = typeof p.att === "number" ? p.att : 0;
  if (att >= MAX_ATTEMPTS) return { ok: false };
  if (typeof p.h === "string" && code && hashCode(code) === p.h) return { ok: true };
  return { ok: false, nextToken: sign({ ...p, att: att + 1 }) };
}

export function makeSession(): string {
  return sign({ ok: true, exp: Date.now() + SESSION_TTL_MS });
}

export function isSessionValid(token: string | undefined | null): boolean {
  const p = unsign(token);
  return !!(p && p.ok === true && typeof p.exp === "number" && p.exp > Date.now());
}
