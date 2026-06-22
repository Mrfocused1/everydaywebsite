import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  verifyChallenge,
  makeSession,
  OTP_COOKIE,
  SESSION_COOKIE,
  OTP_TTL_MS,
  SESSION_TTL_MS,
} from "@/lib/invoiceAuth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  let code = "";
  try {
    const body = await req.json();
    code = String(body?.code ?? "").trim();
  } catch {
    code = "";
  }

  const store = await cookies();
  const token = store.get(OTP_COOKIE)?.value;
  const result = verifyChallenge(token, code);

  if (result.ok) {
    const res = NextResponse.json({ ok: true });
    res.cookies.set(SESSION_COOKIE, makeSession(), {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: Math.floor(SESSION_TTL_MS / 1000),
    });
    res.cookies.delete(OTP_COOKIE);
    return res;
  }

  const res = NextResponse.json({ ok: false }, { status: 401 });
  if (result.nextToken) {
    res.cookies.set(OTP_COOKIE, result.nextToken, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: Math.floor(OTP_TTL_MS / 1000),
    });
  }
  return res;
}
