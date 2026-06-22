import { NextResponse } from "next/server";
import { genCode, makeChallenge, OTP_COOKIE, OTP_TTL_MS } from "@/lib/invoiceAuth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Where the login code is sent — the owner's email + mobile, every time.
const OWNER_EMAIL = "hello@bridgewayaibootcamp.com";
const OWNER_PHONE = "+447394089443"; // UK E.164 (verify the exact number)

async function sendEmail(code: string): Promise<boolean> {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;
  if (!key || !from) return false;
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: OWNER_EMAIL,
      subject: `Your login code is ${code}`,
      text: `Your login code is ${code}\n\nIt expires in 10 minutes. If you didn't request this, ignore this email.`,
    }),
  });
  return res.ok;
}

// SMS via Twilio — only fires when Twilio env vars are configured. Returns false
// (silently) until then, so email still works.
async function sendSms(code: string): Promise<boolean> {
  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_FROM;
  if (!sid || !token || !from) return false;
  const body = new URLSearchParams({
    To: OWNER_PHONE,
    From: from,
    Body: `Your login code is ${code} (expires in 10 minutes).`,
  });
  const res = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`, {
    method: "POST",
    headers: {
      Authorization: "Basic " + Buffer.from(`${sid}:${token}`).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });
  return res.ok;
}

export async function POST() {
  if (!process.env.INVOICE_AUTH_SECRET) {
    return NextResponse.json({ error: "Auth is not configured." }, { status: 500 });
  }

  const code = genCode();
  const challenge = makeChallenge(code);

  // Fire both channels; never reveal which succeeded (no info leak).
  await Promise.allSettled([sendEmail(code), sendSms(code)]);

  const res = NextResponse.json({ ok: true });
  res.cookies.set(OTP_COOKIE, challenge, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: Math.floor(OTP_TTL_MS / 1000),
  });
  return res;
}
