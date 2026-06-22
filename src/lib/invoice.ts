// Invoice data model + helpers for the /invoice-me generator.
// Invoices are issued by Bridgeway AI Bootcamp and shared via a stateless link
// (the whole invoice is encoded into the URL hash — no database needed).

export type InvoiceItem = {
  description: string;
  quantity: number;
  unitPrice: number;
};

export type Invoice = {
  clientName: string;
  clientEmail?: string;
  clientAddress?: string;
  clientPhone?: string;
  issueDate: string; // YYYY-MM-DD
  dueDate: string; // YYYY-MM-DD
  paymentTerms?: string;
  items: InvoiceItem[];
  notes?: string;
  paymentLink?: string;
  currency: "GBP" | "USD" | "EUR";
};

// The business the invoice is issued from — Bridgeway AI Bootcamp.
export const BUSINESS = {
  name: "Bridgeway AI Bootcamp",
  email: "hello@bridgewayaibootcamp.com",
  site: "bridgewayaibootcamp.com",
  location: "London, United Kingdom",
};

export const PAYMENT_TERMS = [
  "Payment due within 30 days",
  "Payment due within 14 days",
  "Payment due within 7 days",
  "Payment due upon receipt",
  "Net 30",
  "Net 15",
];

const CURRENCY_LOCALE: Record<Invoice["currency"], string> = {
  GBP: "en-GB",
  USD: "en-US",
  EUR: "en-IE",
};

export function formatCurrency(amount: number, currency: Invoice["currency"] = "GBP"): string {
  return new Intl.NumberFormat(CURRENCY_LOCALE[currency], {
    style: "currency",
    currency,
  }).format(Number.isFinite(amount) ? amount : 0);
}

export function formatDate(dateString: string): string {
  if (!dateString) return "—";
  const d = new Date(dateString);
  if (isNaN(d.getTime())) return dateString;
  return new Intl.DateTimeFormat("en-GB", { year: "numeric", month: "long", day: "numeric" }).format(d);
}

export function lineTotal(item: InvoiceItem): number {
  return Math.round(item.quantity * item.unitPrice * 100) / 100;
}

export function totals(items: InvoiceItem[]) {
  const subtotal = items.reduce((sum, i) => sum + lineTotal(i), 0);
  const rounded = Math.round(subtotal * 100) / 100;
  return { subtotal: rounded, total: rounded };
}

export function todayISO(date = new Date()): string {
  return date.toISOString().split("T")[0];
}

export function addDaysISO(days: number, from = new Date()): string {
  const d = new Date(from);
  d.setDate(d.getDate() + days);
  return d.toISOString().split("T")[0];
}

// ── Stateless share encoding (unicode-safe base64) ───────────────────────────
export function encodeInvoice(invoice: Invoice): string {
  const json = JSON.stringify(invoice);
  const bytes = new TextEncoder().encode(json);
  let bin = "";
  bytes.forEach((b) => (bin += String.fromCharCode(b)));
  // URL-safe base64
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export function decodeInvoice(encoded: string): Invoice | null {
  try {
    const b64 = encoded.replace(/-/g, "+").replace(/_/g, "/");
    const bin = atob(b64);
    const bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0));
    const json = new TextDecoder().decode(bytes);
    return JSON.parse(json) as Invoice;
  } catch {
    return null;
  }
}

export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
