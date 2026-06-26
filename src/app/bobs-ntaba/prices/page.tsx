import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "../Reveal";
import { COND, CUT_BR, CUT_TL, DISPLAY, Eyebrow, MENU, SITE, MATCHDAY, BASE } from "../brand";

export const metadata: Metadata = {
  title: "Price List",
  description: "Bobs Ntaba price list. Grilled goat meat trays, matchday specials, sides and drinks — home made to order.",
};

export default function PricesPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden pb-16 pt-28 md:pb-20 md:pt-36">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${BASE}/plate-2.png`} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0b0a]/70 via-[#0c0b0a]/80 to-[#0c0b0a]" />
        <div className="relative mx-auto max-w-[1200px] px-5">
          <div className="mb-5">
            <Eyebrow>Home made to order</Eyebrow>
          </div>
          <h1 className={`${DISPLAY} text-6xl text-[#f3efe6] md:text-8xl`}>Price List</h1>
          <p className="mt-5 max-w-xl leading-relaxed text-[#a39c8e]">
            Everything is cooked fresh in small batches once you order. Prices are a guide — give us a call to confirm your
            order and pick-up time. {SITE.hours}.
          </p>
        </div>
      </section>

      {/* Menu groups */}
      <section className="bg-[#0c0b0a] pb-24">
        <div className="mx-auto grid max-w-[1200px] gap-14 px-5">
          {MENU.map((group) => (
            <Reveal key={group.group}>
              <div className="mb-6 flex flex-wrap items-end justify-between gap-2 border-b border-[#c99a3b]/40 pb-4">
                <h2 className={`${DISPLAY} text-3xl text-[#c99a3b] md:text-4xl`}>{group.group}</h2>
                <p className="max-w-md text-sm text-[#a39c8e] md:text-right">{group.note}</p>
              </div>

              <ul className="divide-y divide-white/10">
                {group.items.map((item) => (
                  <li key={item.name} className="flex items-start gap-4 py-5">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className={`${COND} text-xl text-[#f3efe6] md:text-2xl`}>{item.name}</h3>
                        {item.tag && (
                          <span className={`${COND} border-l-2 border-[#c99a3b] pl-2 text-[0.65rem] tracking-widest text-[#c99a3b]`}>
                            {item.tag}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm text-[#a39c8e]">{item.desc}</p>
                      {item.serves && <p className={`${COND} mt-1 text-xs tracking-widest text-[#a39c8e]/70`}>{item.serves}</p>}
                    </div>
                    <div className="hidden flex-1 translate-y-3 border-b border-dotted border-white/15 sm:block" />
                    <span className={`${DISPLAY} shrink-0 text-2xl text-[#f3efe6] md:text-3xl`}>{item.price}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}

          {/* Matchday CTA */}
          <Reveal>
            <div className="border border-white/10 bg-[#16140f] p-7 md:p-10" style={{ clipPath: CUT_BR }}>
              <div className="mb-4">
                <Eyebrow>{MATCHDAY.badge}</Eyebrow>
              </div>
              <h3 className={`${DISPLAY} mb-3 text-3xl text-[#f3efe6] md:text-4xl`}>{MATCHDAY.date}</h3>
              <p className="mb-6 max-w-2xl leading-relaxed text-[#a39c8e]">
                {MATCHDAY.body} {MATCHDAY.cutoff}.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`tel:${SITE.phone}`}
                  className={`${COND} bg-[#c99a3b] px-7 py-3.5 tracking-widest text-[#0c0b0a] transition-colors hover:bg-[#e2bb6b]`}
                  style={{ clipPath: CUT_TL }}
                >
                  Call to Order
                </a>
                <Link
                  href={`${BASE}/contact`}
                  className={`${COND} border border-[#f3efe6]/30 px-7 py-3.5 tracking-widest text-[#f3efe6] transition-colors hover:border-[#c99a3b] hover:text-[#c99a3b]`}
                >
                  Send an Order Form
                </Link>
              </div>
              <p className="mt-6 text-xs text-[#a39c8e]/60">
                Allergens &amp; dietary needs: let us know when ordering. Prices include VAT where applicable.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
