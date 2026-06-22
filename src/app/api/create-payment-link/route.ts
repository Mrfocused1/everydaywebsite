import Stripe from "stripe";
import { cookies } from "next/headers";
import { isSessionValid, SESSION_COOKIE } from "@/lib/invoiceAuth";

// Stripe SDK needs Node; never statically prerender.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Creates a reusable Stripe Payment Link (does NOT expire, unlike a Checkout
// session) for an invoice total, charging into the Bridgeway AI Bootcamp Stripe
// account (STRIPE_SECRET_KEY). Returns { url }.
export async function POST(req: Request) {
  // Only the logged-in invoice tool may create payment links.
  const store = await cookies();
  if (!isSessionValid(store.get(SESSION_COOKIE)?.value)) {
    return Response.json({ error: "Unauthorized." }, { status: 401 });
  }

  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    return Response.json({ error: "Payments are not configured." }, { status: 500 });
  }

  let body: { amount?: number; currency?: string; description?: string };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const cents = Math.round(Number(body.amount) * 100);
  if (!Number.isFinite(cents) || cents <= 0) {
    return Response.json({ error: "Invalid amount." }, { status: 400 });
  }
  // Stripe minimum charge (~£0.30); guard against tiny amounts.
  if (cents < 30) {
    return Response.json({ error: "Amount is below the minimum chargeable total." }, { status: 400 });
  }

  const currency = (body.currency || "GBP").toString().toLowerCase();
  const name = (body.description || "Invoice").toString().slice(0, 250) || "Invoice";

  try {
    const stripe = new Stripe(key);
    const price = await stripe.prices.create({
      unit_amount: cents,
      currency,
      product_data: { name },
    });
    const link = await stripe.paymentLinks.create({
      line_items: [{ price: price.id, quantity: 1 }],
    });
    return Response.json({ url: link.url });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Failed to create payment link.";
    return Response.json({ error: message }, { status: 502 });
  }
}
