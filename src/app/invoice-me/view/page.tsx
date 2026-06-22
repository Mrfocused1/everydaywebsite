"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  BUSINESS,
  type Invoice,
  decodeInvoice,
  formatCurrency,
  formatDate,
  lineTotal,
  totals,
} from "@/lib/invoice";

const heading = { fontFamily: "var(--font-epilogue)" } as const;

export default function InvoiceViewPage() {
  const [invoice, setInvoice] = useState<Invoice | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    setInvoice(hash ? decodeInvoice(hash) : null);
    setReady(true);
  }, []);

  if (!ready) {
    return <main className="min-h-svh bg-ua-bg" />;
  }

  if (!invoice) {
    return (
      <main className="flex min-h-svh items-center justify-center bg-ua-bg px-6 pt-24 text-center text-ua-ink">
        <div className="rounded-2xl border-2 border-ua-ink bg-white p-8 shadow-[6px_6px_0_var(--ua-ink)]">
          <p className="text-2xl font-black" style={heading}>
            no invoice found
          </p>
          <p className="mx-auto mt-2 max-w-sm text-ua-ink/60">
            This link doesn&apos;t contain a valid invoice. Generate a new one to share.
          </p>
          <Link href="/invoice-me" className="mt-5 inline-block rounded-full border-2 border-ua-ink bg-ua-ink px-6 py-2.5 font-bold text-ua-bg transition-colors hover:bg-ua-blue" style={heading}>
            Create an invoice →
          </Link>
        </div>
      </main>
    );
  }

  const sums = totals(invoice.items);
  const cur = invoice.currency;

  return (
    <main className="min-h-svh bg-ua-bg px-4 pb-24 pt-24 text-ua-ink print:bg-white print:p-0 print:pt-0">
      {/* Action bar — hidden when printing */}
      <div data-no-print className="mx-auto mb-6 flex max-w-3xl flex-wrap items-center justify-between gap-3 print:hidden">
        <Link href="/invoice-me" className="text-sm font-bold text-ua-ink/60 underline-offset-2 hover:text-ua-ink hover:underline">
          ← new invoice
        </Link>
        <div className="flex flex-wrap gap-2">
          <button type="button" onClick={() => window.print()} className="rounded-full border-2 border-ua-ink bg-white px-5 py-2 text-sm font-bold transition-colors hover:bg-ua-ink hover:text-white" style={heading}>
            Print / Save PDF
          </button>
          {invoice.paymentLink && (
            <a href={invoice.paymentLink} target="_blank" rel="noopener noreferrer" className="rounded-full border-2 border-ua-ink bg-ua-blue px-5 py-2 text-sm font-bold text-white transition-transform hover:-translate-y-0.5" style={heading}>
              Pay {formatCurrency(sums.total, cur)} →
            </a>
          )}
        </div>
      </div>

      {/* Invoice document */}
      <article className="mx-auto max-w-3xl rounded-2xl border-2 border-ua-ink bg-white p-8 shadow-[8px_8px_0_var(--ua-ink)] md:p-12 print:max-w-none print:rounded-none print:border-0 print:p-0 print:shadow-none">
        <header className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
          <div>
            <h1 className="text-4xl font-black tracking-tight" style={heading}>
              INVOICE
            </h1>
          </div>
          <div className="sm:text-right">
            <p className="text-xl font-black" style={heading}>
              {BUSINESS.name}
            </p>
            <p className="text-sm text-ua-ink/70">{BUSINESS.email}</p>
            <p className="text-sm text-ua-ink/70">{BUSINESS.location}</p>
          </div>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-ua-ink/50">Bill to</p>
            <p className="text-lg font-bold">{invoice.clientName}</p>
            {invoice.clientEmail && <p className="text-ua-ink/70">{invoice.clientEmail}</p>}
            {invoice.clientPhone && <p className="text-ua-ink/70">{invoice.clientPhone}</p>}
            {invoice.clientAddress && <p className="whitespace-pre-line text-ua-ink/70">{invoice.clientAddress}</p>}
          </div>
          <div className="sm:text-right">
            <div className="inline-block text-left">
              <p>
                <span className="text-ua-ink/50">Issue date: </span>
                <span className="font-medium">{formatDate(invoice.issueDate)}</span>
              </p>
              <p>
                <span className="text-ua-ink/50">Due date: </span>
                <span className="font-medium">{formatDate(invoice.dueDate)}</span>
              </p>
              {invoice.paymentTerms && (
                <p>
                  <span className="text-ua-ink/50">Terms: </span>
                  <span className="font-medium">{invoice.paymentTerms}</span>
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Items */}
        <table className="mt-10 w-full text-sm">
          <thead>
            <tr className="border-b-2 border-ua-ink text-left">
              <th className="py-2 font-bold uppercase tracking-wider">Description</th>
              <th className="py-2 text-right font-bold uppercase tracking-wider">Qty</th>
              <th className="py-2 text-right font-bold uppercase tracking-wider">Rate</th>
              <th className="py-2 text-right font-bold uppercase tracking-wider">Amount</th>
            </tr>
          </thead>
          <tbody>
            {invoice.items.map((it, i) => (
              <tr key={i} className="border-b border-ua-ink/10">
                <td className="py-3 pr-2 font-medium">{it.description}</td>
                <td className="py-3 text-right text-ua-ink/70">{it.quantity}</td>
                <td className="py-3 text-right text-ua-ink/70">{formatCurrency(it.unitPrice, cur)}</td>
                <td className="py-3 text-right font-medium">{formatCurrency(lineTotal(it), cur)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Totals */}
        <div className="mt-6 flex justify-end">
          <dl className="w-full max-w-xs text-sm">
            <div className="flex justify-between border-t-2 border-ua-ink pt-2 text-lg font-black" style={heading}>
              <dt>Total</dt>
              <dd>{formatCurrency(sums.total, cur)}</dd>
            </div>
          </dl>
        </div>

        {/* Payment */}
        <div className="mt-10 rounded-xl border-2 border-ua-ink/15 bg-ua-bg/50 p-5 print:border-ua-ink/30">
          <p className="font-bold" style={heading}>
            Payment
          </p>
          {invoice.paymentLink ? (
            <p className="mt-1 text-sm text-ua-ink/70">
              Pay securely online —{" "}
              <a href={invoice.paymentLink} target="_blank" rel="noopener noreferrer" className="font-bold text-ua-blue underline underline-offset-2 print:text-ua-ink">
                {invoice.paymentLink}
              </a>
              . Payable to {BUSINESS.name}.
            </p>
          ) : (
            <p className="mt-1 text-sm text-ua-ink/70">
              To arrange payment to {BUSINESS.name}, contact{" "}
              <a href={`mailto:${BUSINESS.email}`} className="font-bold text-ua-ink underline underline-offset-2">
                {BUSINESS.email}
              </a>
              .
            </p>
          )}
        </div>

        {invoice.notes && (
          <div className="mt-6">
            <p className="text-xs font-bold uppercase tracking-widest text-ua-ink/50">Notes</p>
            <p className="mt-1 whitespace-pre-line text-sm leading-relaxed text-ua-ink/80">{invoice.notes}</p>
          </div>
        )}

        <footer className="mt-10 border-t border-ua-ink/10 pt-6 text-center text-xs text-ua-ink/50">
          Thank you. For any questions contact {BUSINESS.email}.
        </footer>
      </article>
    </main>
  );
}
