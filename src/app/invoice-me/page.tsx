"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  BUSINESS,
  PAYMENT_TERMS,
  type Invoice,
  type InvoiceItem,
  encodeInvoice,
  formatCurrency,
  generateInvoiceNumber,
  lineTotal,
  todayISO,
  addDaysISO,
  totals,
} from "@/lib/invoice";

const card =
  "rounded-2xl border-2 border-ua-ink bg-white p-6 shadow-[5px_5px_0_var(--ua-ink)]";
const field =
  "w-full rounded-xl border-2 border-ua-ink/15 bg-white px-3 py-2.5 text-ua-ink outline-none transition-colors focus:border-ua-ink";
const labelCls = "mb-1.5 block text-sm font-bold text-ua-ink";
const heading = { fontFamily: "var(--font-epilogue)" } as const;

const emptyItem: InvoiceItem = { description: "", quantity: 1, unitPrice: 0 };

export default function InvoiceCreatePage() {
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState(generateInvoiceNumber());
  const [issueDate, setIssueDate] = useState(todayISO());
  const [dueDate, setDueDate] = useState(addDaysISO(30));
  const [paymentTerms, setPaymentTerms] = useState(PAYMENT_TERMS[0]);
  const [currency, setCurrency] = useState<Invoice["currency"]>("GBP");
  const [items, setItems] = useState<InvoiceItem[]>([{ ...emptyItem }]);
  const [taxRate, setTaxRate] = useState(0);
  const [notes, setNotes] = useState("");
  const [paymentLink, setPaymentLink] = useState("");

  const [errors, setErrors] = useState<string[]>([]);
  const [shareUrl, setShareUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [autoStripe, setAutoStripe] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [genError, setGenError] = useState("");

  const sums = useMemo(() => totals(items, taxRate), [items, taxRate]);

  const setItem = (i: number, patch: Partial<InvoiceItem>) =>
    setItems((prev) => prev.map((it, idx) => (idx === i ? { ...it, ...patch } : it)));
  const addItem = () => setItems((prev) => [...prev, { ...emptyItem }]);
  const removeItem = (i: number) =>
    setItems((prev) => (prev.length > 1 ? prev.filter((_, idx) => idx !== i) : prev));

  const validate = (): string[] => {
    const e: string[] = [];
    if (!clientName.trim()) e.push("Client name is required");
    if (!dueDate) e.push("Due date is required");
    items.forEach((it, i) => {
      if (!it.description.trim()) e.push(`Item ${i + 1}: description is required`);
      if (!(it.quantity > 0)) e.push(`Item ${i + 1}: quantity must be greater than 0`);
      if (!(it.unitPrice > 0)) e.push(`Item ${i + 1}: unit price must be greater than 0`);
    });
    return e;
  };

  const generate = async () => {
    const e = validate();
    setErrors(e);
    setCopied(false);
    setGenError("");
    if (e.length) {
      setShareUrl("");
      return;
    }

    // Resolve the payment link: auto-create a Stripe Payment Link (into the
    // Bridgeway account), or fall back to the manually pasted link.
    let resolvedPaymentLink = paymentLink.trim() || undefined;
    if (autoStripe && sums.total > 0) {
      setGenerating(true);
      try {
        const description =
          items.length === 1 && items[0].description.trim()
            ? items[0].description.trim()
            : `Invoice ${invoiceNumber.trim()} — ${clientName.trim()}`;
        const res = await fetch("/api/create-payment-link", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: sums.total, currency, description }),
        });
        const data = await res.json();
        if (res.ok && data.url) {
          resolvedPaymentLink = data.url;
        } else {
          setGenError(data.error || "Couldn't create the Stripe link — invoice generated without a Pay button.");
        }
      } catch {
        setGenError("Couldn't reach the payment service — invoice generated without a Pay button.");
      } finally {
        setGenerating(false);
      }
    }

    const invoice: Invoice = {
      invoiceNumber: invoiceNumber.trim() || generateInvoiceNumber(),
      clientName: clientName.trim(),
      clientEmail: clientEmail.trim() || undefined,
      clientAddress: clientAddress.trim() || undefined,
      clientPhone: clientPhone.trim() || undefined,
      issueDate,
      dueDate,
      paymentTerms,
      items: items.map((it) => ({
        description: it.description.trim(),
        quantity: Number(it.quantity) || 0,
        unitPrice: Number(it.unitPrice) || 0,
      })),
      taxRate: Number(taxRate) || 0,
      notes: notes.trim() || undefined,
      paymentLink: resolvedPaymentLink,
      currency,
    };
    const url = `${window.location.origin}/invoice-me/view#${encodeInvoice(invoice)}`;
    setShareUrl(url);
  };

  const copy = async () => {
    if (!shareUrl) return;
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-svh bg-ua-bg px-5 pb-24 pt-28 text-ua-ink md:px-10">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8">
          <h1 className="text-4xl font-black md:text-5xl" style={heading}>
            invoice generator
          </h1>
          <p className="mt-2 max-w-2xl text-ua-ink/70">
            Build a professional invoice and send the client a link. Issued from{" "}
            <span className="font-bold text-ua-ink">{BUSINESS.name}</span>.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Form */}
          <div className="space-y-6 lg:col-span-2">
            {/* Client */}
            <section className={card}>
              <h2 className="mb-4 text-xl font-bold" style={heading}>
                Client information
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className={labelCls}>Client name *</label>
                  <input className={field} value={clientName} placeholder="Acme Ltd / Jane Doe" onChange={(e) => setClientName(e.target.value)} />
                </div>
                <div>
                  <label className={labelCls}>Email</label>
                  <input className={field} type="email" value={clientEmail} placeholder="client@email.com" onChange={(e) => setClientEmail(e.target.value)} />
                </div>
                <div>
                  <label className={labelCls}>Phone</label>
                  <input className={field} value={clientPhone} placeholder="Optional" onChange={(e) => setClientPhone(e.target.value)} />
                </div>
                <div className="sm:col-span-2">
                  <label className={labelCls}>Address</label>
                  <textarea className={field} rows={2} value={clientAddress} placeholder="Optional" onChange={(e) => setClientAddress(e.target.value)} />
                </div>
              </div>
            </section>

            {/* Details */}
            <section className={card}>
              <h2 className="mb-4 text-xl font-bold" style={heading}>
                Invoice details
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className={labelCls}>Invoice number</label>
                  <input className={field} value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)} />
                </div>
                <div>
                  <label className={labelCls}>Currency</label>
                  <select className={field} value={currency} onChange={(e) => setCurrency(e.target.value as Invoice["currency"])}>
                    <option value="GBP">GBP (£)</option>
                    <option value="USD">USD ($)</option>
                    <option value="EUR">EUR (€)</option>
                  </select>
                </div>
                <div>
                  <label className={labelCls}>Issue date</label>
                  <input className={field} type="date" value={issueDate} onChange={(e) => setIssueDate(e.target.value)} />
                </div>
                <div>
                  <label className={labelCls}>Due date *</label>
                  <input className={field} type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
                </div>
                <div className="sm:col-span-2">
                  <label className={labelCls}>Payment terms</label>
                  <select className={field} value={paymentTerms} onChange={(e) => setPaymentTerms(e.target.value)}>
                    {PAYMENT_TERMS.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </section>

            {/* Items */}
            <section className={card}>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-bold" style={heading}>
                  Items
                </h2>
                <button type="button" onClick={addItem} className="rounded-full border-2 border-ua-ink bg-ua-ink px-4 py-1.5 text-sm font-bold text-ua-bg transition-colors hover:bg-ua-blue hover:text-white" style={heading}>
                  + Add item
                </button>
              </div>
              <div className="space-y-3">
                {items.map((it, i) => (
                  <div key={i} className="grid grid-cols-12 items-end gap-2 rounded-xl bg-ua-bg/60 p-3">
                    <div className="col-span-12 sm:col-span-6">
                      <label className={labelCls}>Description</label>
                      <input className={field} value={it.description} placeholder="e.g. Website design & build" onChange={(e) => setItem(i, { description: e.target.value })} />
                    </div>
                    <div className="col-span-3 sm:col-span-2">
                      <label className={labelCls}>Qty</label>
                      <input className={field} type="number" min={1} value={it.quantity} onChange={(e) => setItem(i, { quantity: parseInt(e.target.value) || 0 })} />
                    </div>
                    <div className="col-span-5 sm:col-span-2">
                      <label className={labelCls}>Unit price</label>
                      <input className={field} type="number" min={0} step="0.01" value={it.unitPrice} onChange={(e) => setItem(i, { unitPrice: parseFloat(e.target.value) || 0 })} />
                    </div>
                    <div className="col-span-3 sm:col-span-1 pb-2.5 text-right text-sm font-bold">
                      {formatCurrency(lineTotal(it), currency)}
                    </div>
                    <div className="col-span-1 flex justify-end pb-1">
                      <button type="button" onClick={() => removeItem(i)} disabled={items.length === 1} className="rounded-lg px-2 py-1.5 text-ua-ink/50 transition-colors hover:bg-ua-orange/15 hover:text-ua-orange disabled:opacity-30" aria-label="Remove item">
                        ✕
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 max-w-[12rem]">
                <label className={labelCls}>Tax / VAT rate (%)</label>
                <input className={field} type="number" min={0} step="0.1" value={taxRate} onChange={(e) => setTaxRate(parseFloat(e.target.value) || 0)} />
              </div>
            </section>

            {/* Notes + payment */}
            <section className={card}>
              <h2 className="mb-4 text-xl font-bold" style={heading}>
                Notes & payment
              </h2>
              <label className={labelCls}>Notes</label>
              <textarea className={field} rows={3} value={notes} placeholder="Thanks for your business / any terms…" onChange={(e) => setNotes(e.target.value)} />

              <label className="mt-4 flex cursor-pointer items-start gap-3 rounded-xl border-2 border-ua-ink/15 bg-ua-bg/50 p-3">
                <input type="checkbox" checked={autoStripe} onChange={(e) => setAutoStripe(e.target.checked)} className="mt-0.5 h-5 w-5 accent-ua-blue" />
                <span className="text-sm">
                  <span className="font-bold">Auto-create a Stripe payment link</span>
                  <span className="block text-ua-ink/60">
                    Adds a secure &quot;Pay&quot; button that charges into the {BUSINESS.name} Stripe account. Created when you generate.
                  </span>
                </span>
              </label>

              {!autoStripe && (
                <div className="mt-4">
                  <label className={labelCls}>Payment link (optional)</label>
                  <input className={field} value={paymentLink} placeholder="https://buy.stripe.com/… or a PayPal / bank link" onChange={(e) => setPaymentLink(e.target.value)} />
                  <p className="mt-1.5 text-xs text-ua-ink/50">
                    The client&apos;s &quot;Pay&quot; button opens this link. Use a {BUSINESS.name} link so payment reaches that account.
                  </p>
                </div>
              )}
            </section>
          </div>

          {/* Summary */}
          <aside className="lg:col-span-1">
            <div className={`${card} lg:sticky lg:top-24`}>
              <h2 className="mb-4 text-lg font-bold" style={heading}>
                Summary
              </h2>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-ua-ink/60">Subtotal</dt>
                  <dd>{formatCurrency(sums.subtotal, currency)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-ua-ink/60">Tax ({taxRate || 0}%)</dt>
                  <dd>{formatCurrency(sums.taxAmount, currency)}</dd>
                </div>
                <div className="flex justify-between border-t-2 border-ua-ink/10 pt-2 text-base font-bold">
                  <dt>Total</dt>
                  <dd>{formatCurrency(sums.total, currency)}</dd>
                </div>
              </dl>

              {errors.length > 0 && (
                <div className="mt-4 rounded-xl border-2 border-ua-orange/40 bg-ua-orange/10 p-3 text-xs text-ua-ink">
                  <p className="mb-1 font-bold">Please fix:</p>
                  <ul className="list-disc space-y-0.5 pl-4">
                    {errors.map((er, i) => (
                      <li key={i}>{er}</li>
                    ))}
                  </ul>
                </div>
              )}

              <button type="button" onClick={generate} disabled={generating} className="mt-5 w-full rounded-full border-2 border-ua-ink bg-ua-ink px-6 py-3 text-base font-bold text-ua-bg shadow-[4px_4px_0_var(--ua-blue)] transition-all hover:-translate-y-0.5 hover:bg-ua-blue active:translate-y-0 disabled:cursor-wait disabled:opacity-70" style={heading}>
                {generating ? "Creating payment link…" : "Generate invoice"}
              </button>

              {genError && (
                <p className="mt-3 rounded-xl border-2 border-ua-orange/40 bg-ua-orange/10 p-3 text-xs text-ua-ink">{genError}</p>
              )}

              {shareUrl && (
                <div className="mt-4 rounded-xl border-2 border-ua-green/60 bg-ua-green/30 p-3">
                  <p className="text-sm font-bold">Invoice ready ✓</p>
                  <p className="mt-1 break-all rounded-lg bg-white/70 p-2 font-mono text-[11px] text-ua-ink/80">{shareUrl}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <button type="button" onClick={copy} className="rounded-full border-2 border-ua-ink bg-white px-4 py-1.5 text-sm font-bold transition-colors hover:bg-ua-ink hover:text-white" style={heading}>
                      {copied ? "Copied!" : "Copy link"}
                    </button>
                    <a href={shareUrl} target="_blank" rel="noopener noreferrer" className="rounded-full border-2 border-ua-ink bg-ua-blue px-4 py-1.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5" style={heading}>
                      Open invoice →
                    </a>
                  </div>
                  <p className="mt-2 text-xs text-ua-ink/60">Send this link to your client, or open it and print → save as PDF.</p>
                </div>
              )}
            </div>
            <p className="mt-4 px-2 text-center text-xs text-ua-ink/40">
              <Link href="/" className="underline-offset-2 hover:underline">← back to site</Link>
            </p>
          </aside>
        </div>
      </div>
    </main>
  );
}
