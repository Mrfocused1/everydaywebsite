import { cookies } from "next/headers";
import { isSessionValid, SESSION_COOKIE } from "@/lib/invoiceAuth";
import { InvoiceGenerator } from "./Generator";
import { LoginGate } from "./LoginGate";

export const dynamic = "force-dynamic";

export default async function InvoiceMePage() {
  const store = await cookies();
  const authed = isSessionValid(store.get(SESSION_COOKIE)?.value);
  return authed ? <InvoiceGenerator /> : <LoginGate />;
}
