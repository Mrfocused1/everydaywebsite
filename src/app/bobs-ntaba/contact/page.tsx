import type { Metadata } from "next";
import { Reveal } from "../Reveal";
import { OrderForm } from "../OrderForm";
import { COND, CUT_BR, CUT_TL, DISPLAY, Eyebrow, SITE, MATCHDAY, BASE } from "../brand";

export const metadata: Metadata = {
  title: "Contact & Order",
  description: "Place an order or get in touch with Bobs Ntaba. Call, WhatsApp, email or send the order form. Home made to order in Birmingham.",
};

type IconName = "phone" | "chat" | "mail" | "insta";

const CONTACTS: { label: string; value: string; href: string; icon: IconName; ext?: boolean }[] = [
  { label: "Call to order", value: SITE.phoneDisplay, href: `tel:${SITE.phone}`, icon: "phone" },
  { label: "WhatsApp", value: SITE.phoneDisplay, href: `https://wa.me/${SITE.whatsapp}`, icon: "chat", ext: true },
  { label: "Email", value: SITE.email, href: `mailto:${SITE.email}`, icon: "mail" },
  { label: "Instagram", value: SITE.instagramHandle, href: SITE.instagram, icon: "insta", ext: true },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0c0b0a] pb-14 pt-28 md:pb-16 md:pt-36">
        <div className="absolute inset-0" style={{ background: "radial-gradient(55% 80% at 85% 42%, rgba(201,154,59,0.13), transparent 70%)" }} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          data-bn-parallax
          src={`${BASE}/paper.png`}
          alt=""
          aria-hidden
          className="pointer-events-none absolute right-[-3%] top-1/2 hidden w-[34%] max-w-sm -translate-y-1/2 object-contain opacity-90 drop-shadow-[0_24px_40px_rgba(0,0,0,0.55)] lg:block"
        />
        <div className="relative mx-auto max-w-[1200px] px-5">
          <div className="mb-5">
            <Eyebrow>Get in touch</Eyebrow>
          </div>
          <h1 className={`${DISPLAY} text-6xl text-[#f3efe6] md:text-8xl`}>Order &amp; Contact</h1>
          <p className="mt-5 max-w-xl leading-relaxed text-[#a39c8e]">
            Home made to order — the quickest way is to call. Or fill in the order form and it&apos;ll open pre-filled in
            WhatsApp or email. {SITE.area}.
          </p>
        </div>
      </section>

      <section className="bg-[#0c0b0a] pb-24">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          {/* Contact list */}
          <Reveal>
            <div className="grid gap-4">
              {CONTACTS.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  {...(c.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center gap-4 border border-white/10 bg-[#16140f] p-5 transition-colors hover:border-[#c99a3b]"
                  style={{ clipPath: CUT_TL }}
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center bg-[#c99a3b] text-[#0c0b0a]">
                    <Icon name={c.icon} />
                  </span>
                  <span className="flex flex-col">
                    <span className={`${COND} text-xs tracking-widest text-[#a39c8e]`}>{c.label}</span>
                    <span className="text-lg text-[#f3efe6] transition-colors group-hover:text-[#c99a3b]">{c.value}</span>
                  </span>
                </a>
              ))}

              <div className="border border-white/10 bg-[#16140f] p-5" style={{ clipPath: CUT_BR }}>
                <span className={`${COND} mb-1 block text-xs tracking-widest text-[#a39c8e]`}>Order hours</span>
                <span className="text-lg text-[#f3efe6]">{SITE.hours}</span>
                <p className="mt-3 text-sm leading-relaxed text-[#a39c8e]">{SITE.area}.</p>
              </div>

              <div className="bg-[#c99a3b] p-5 text-[#0c0b0a]" style={{ clipPath: CUT_TL }}>
                <span className={`${COND} mb-1 block text-xs tracking-widest`}>{MATCHDAY.badge} · {MATCHDAY.date}</span>
                <p className={`${COND} text-lg leading-tight`}>{MATCHDAY.cutoff}</p>
              </div>
            </div>
          </Reveal>

          {/* Order form */}
          <Reveal>
            <h2 className={`${DISPLAY} mb-5 text-3xl text-[#f3efe6] md:text-4xl`}>Send an order</h2>
            <OrderForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Icon({ name }: { name: IconName }) {
  const common = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none" } as const;
  if (name === "phone")
    return (
      <svg {...common}><path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24c1.1.37 2.3.57 3.5.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.2.2 2.4.57 3.5a1 1 0 0 1-.24 1l-2.23 2.3Z" fill="currentColor" /></svg>
    );
  if (name === "chat")
    return <svg {...common}><path d="M4 4h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H8l-4 4V5a1 1 0 0 1 1-1Z" fill="currentColor" /></svg>;
  if (name === "mail")
    return <svg {...common}><path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1.4 2L12 12l7.6-5H4.4Z" fill="currentColor" /></svg>;
  return (
    <svg {...common}><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm5.2-3.4a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2Z" fill="currentColor" /></svg>
  );
}
