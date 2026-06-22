export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TO = "hello@bowdenslondon.co.uk";

function esc(v: unknown): string {
  return String(v ?? "").slice(0, 2000).replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" })[c]!);
}

export async function POST(req: Request) {
  let body: Record<string, string> = {};
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = (body.name || "").toString().trim();
  const phone = (body.phone || "").toString().trim();
  const message = (body.message || "").toString().trim();
  if (!name || !phone || !message) {
    return Response.json({ error: "Missing required fields." }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;
  if (!key || !from) {
    return Response.json({ error: "Email is not configured." }, { status: 500 });
  }

  const email = (body.email || "").toString().trim();
  const postcode = (body.postcode || "").toString().trim();

  const html = `
    <h2>New quote request — Bowdens of London</h2>
    <p><strong>Name:</strong> ${esc(name)}</p>
    <p><strong>Phone:</strong> ${esc(phone)}</p>
    <p><strong>Email:</strong> ${esc(email) || "—"}</p>
    <p><strong>Postcode / area:</strong> ${esc(postcode) || "—"}</p>
    <p><strong>Project:</strong><br>${esc(message).replace(/\n/g, "<br>")}</p>
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        // Verified sending domain; display name reflects the source site.
        from: from.replace(/^[^<]*</, "Bowdens of London Website <"),
        to: TO,
        reply_to: email || undefined,
        subject: `New quote request from ${name}`,
        html,
      }),
    });
    if (!res.ok) throw new Error(await res.text());
    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Could not send. Please call us." }, { status: 502 });
  }
}
