import { renderToBuffer, Document, Page, View, Text, Link, StyleSheet } from "@react-pdf/renderer";
import {
  BUSINESS,
  formatCurrency,
  formatDate,
  lineTotal,
  totals,
  type Invoice,
} from "@/lib/invoice";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const INK = "#141414";
const BLUE = "#4b69f0";
const MUTED = "#6b6b6b";

const s = StyleSheet.create({
  page: { paddingVertical: 48, paddingHorizontal: 48, fontSize: 10, color: INK, fontFamily: "Helvetica" },
  headerRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" },
  title: { fontSize: 28, fontFamily: "Helvetica-Bold", letterSpacing: 1 },
  bizName: { fontSize: 14, fontFamily: "Helvetica-Bold", textAlign: "right" },
  bizLine: { fontSize: 9, color: MUTED, textAlign: "right", marginTop: 2 },
  metaRow: { flexDirection: "row", justifyContent: "space-between", marginTop: 34 },
  label: { fontSize: 8, color: MUTED, letterSpacing: 1, textTransform: "uppercase", marginBottom: 5 },
  clientName: { fontSize: 12, fontFamily: "Helvetica-Bold" },
  clientLine: { fontSize: 10, color: MUTED, marginTop: 2 },
  metaRight: { alignItems: "flex-end" },
  metaItem: { fontSize: 10, marginTop: 2 },
  metaValue: { fontFamily: "Helvetica-Bold" },
  tableHead: { flexDirection: "row", borderBottomWidth: 1.5, borderBottomColor: INK, paddingBottom: 6, marginTop: 34 },
  th: { fontSize: 8, fontFamily: "Helvetica-Bold", letterSpacing: 0.5, textTransform: "uppercase" },
  row: { flexDirection: "row", borderBottomWidth: 0.5, borderBottomColor: "#dddddd", paddingVertical: 8 },
  cDesc: { width: "50%", paddingRight: 8 },
  cQty: { width: "14%", textAlign: "right" },
  cRate: { width: "18%", textAlign: "right" },
  cAmt: { width: "18%", textAlign: "right" },
  totalRow: { flexDirection: "row", justifyContent: "flex-end", marginTop: 14 },
  totalBox: { width: "45%", flexDirection: "row", justifyContent: "space-between", borderTopWidth: 1.5, borderTopColor: INK, paddingTop: 8 },
  totalLabel: { fontSize: 13, fontFamily: "Helvetica-Bold" },
  totalValue: { fontSize: 13, fontFamily: "Helvetica-Bold" },
  payBox: { marginTop: 34, borderWidth: 1, borderColor: "#dddddd", borderRadius: 6, padding: 16, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  payTitle: { fontSize: 11, fontFamily: "Helvetica-Bold", marginBottom: 3 },
  payText: { fontSize: 9, color: MUTED },
  payBtn: { backgroundColor: BLUE, color: "#ffffff", fontFamily: "Helvetica-Bold", fontSize: 10, paddingVertical: 8, paddingHorizontal: 16, borderRadius: 20, textDecoration: "none" },
  notesLabel: { fontSize: 8, color: MUTED, letterSpacing: 1, textTransform: "uppercase", marginTop: 28, marginBottom: 4 },
  notes: { fontSize: 10, color: "#333333", lineHeight: 1.5 },
  footer: { marginTop: 36, paddingTop: 14, borderTopWidth: 0.5, borderTopColor: "#dddddd", fontSize: 8, color: MUTED, textAlign: "center" },
});

function InvoiceDoc({ invoice }: { invoice: Invoice }) {
  const sums = totals(invoice.items);
  const cur = invoice.currency;
  return (
    <Document title={`Invoice — ${invoice.clientName}`} author={BUSINESS.name}>
      <Page size="A4" style={s.page}>
        <View style={s.headerRow}>
          <Text style={s.title}>INVOICE</Text>
          <View>
            <Text style={s.bizName}>{BUSINESS.name}</Text>
            <Text style={s.bizLine}>{BUSINESS.email}</Text>
            <Text style={s.bizLine}>{BUSINESS.location}</Text>
          </View>
        </View>

        <View style={s.metaRow}>
          <View style={{ width: "55%" }}>
            <Text style={s.label}>Bill to</Text>
            <Text style={s.clientName}>{invoice.clientName}</Text>
            {invoice.clientEmail ? <Text style={s.clientLine}>{invoice.clientEmail}</Text> : null}
            {invoice.clientPhone ? <Text style={s.clientLine}>{invoice.clientPhone}</Text> : null}
            {invoice.clientAddress ? <Text style={s.clientLine}>{invoice.clientAddress}</Text> : null}
          </View>
          <View style={s.metaRight}>
            <Text style={s.metaItem}>
              Issue date: <Text style={s.metaValue}>{formatDate(invoice.issueDate)}</Text>
            </Text>
            <Text style={s.metaItem}>
              Due date: <Text style={s.metaValue}>{formatDate(invoice.dueDate)}</Text>
            </Text>
            {invoice.paymentTerms ? (
              <Text style={s.metaItem}>
                Terms: <Text style={s.metaValue}>{invoice.paymentTerms}</Text>
              </Text>
            ) : null}
          </View>
        </View>

        <View style={s.tableHead}>
          <Text style={[s.th, s.cDesc]}>Description</Text>
          <Text style={[s.th, s.cQty]}>Qty</Text>
          <Text style={[s.th, s.cRate]}>Rate</Text>
          <Text style={[s.th, s.cAmt]}>Amount</Text>
        </View>
        {invoice.items.map((it, i) => (
          <View style={s.row} key={i}>
            <Text style={s.cDesc}>{it.description}</Text>
            <Text style={s.cQty}>{it.quantity}</Text>
            <Text style={s.cRate}>{formatCurrency(it.unitPrice, cur)}</Text>
            <Text style={s.cAmt}>{formatCurrency(lineTotal(it), cur)}</Text>
          </View>
        ))}

        <View style={s.totalRow}>
          <View style={s.totalBox}>
            <Text style={s.totalLabel}>Total</Text>
            <Text style={s.totalValue}>{formatCurrency(sums.total, cur)}</Text>
          </View>
        </View>

        <View style={s.payBox}>
          <View style={{ width: invoice.paymentLink ? "62%" : "100%" }}>
            <Text style={s.payTitle}>Payment</Text>
            <Text style={s.payText}>
              {invoice.paymentLink
                ? `Pay securely online. Payable to ${BUSINESS.name}.`
                : `To arrange payment to ${BUSINESS.name}, contact ${BUSINESS.email}.`}
            </Text>
          </View>
          {invoice.paymentLink ? (
            <Link src={invoice.paymentLink} style={s.payBtn}>
              Pay {formatCurrency(sums.total, cur)}
            </Link>
          ) : null}
        </View>

        {invoice.notes ? (
          <View>
            <Text style={s.notesLabel}>Notes</Text>
            <Text style={s.notes}>{invoice.notes}</Text>
          </View>
        ) : null}

        <Text style={s.footer}>Thank you. For any questions contact {BUSINESS.email}.</Text>
      </Page>
    </Document>
  );
}

export async function POST(req: Request) {
  let invoice: Invoice | null = null;
  try {
    const body = await req.json();
    if (body && Array.isArray(body.items) && body.clientName) invoice = body as Invoice;
  } catch {
    invoice = null;
  }
  if (!invoice) {
    return Response.json({ error: "Invalid invoice." }, { status: 400 });
  }

  try {
    const buffer = await renderToBuffer(<InvoiceDoc invoice={invoice} />);
    const safe = (invoice.clientName || "invoice").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "invoice";
    return new Response(new Uint8Array(buffer), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="invoice-${safe}.pdf"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (e) {
    return Response.json({ error: e instanceof Error ? e.message : "Failed to render PDF." }, { status: 500 });
  }
}
