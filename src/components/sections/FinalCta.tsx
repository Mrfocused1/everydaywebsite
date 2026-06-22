import { Reveal } from "@/components/Reveal";
import { Sticker } from "@/components/Sticker";
import { SITE } from "@/lib/content";

const MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent(
  "I'd like a website",
)}&body=${encodeURIComponent(
  "Hi Everyday Web.Site,\n\nMy business / project is called: \nWhat we do: \nWhat I'm after: \n\nThanks!",
)}`;

export function FinalCta() {
  return (
    <section
      id="start"
      className="relative overflow-hidden bg-ua-bg px-6 py-28 text-center md:px-10"
    >
      <Sticker name="lets-go" size={130} className="absolute left-6 top-14 hidden md:block" rotate={-10} />
      <Sticker name="high-five" size={110} className="absolute bottom-14 right-8 hidden md:block" rotate={8} />
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="text-5xl font-bold text-ua-ink md:text-7xl" style={{ fontFamily: "var(--font-epilogue)" }}>
            ready for your site?
          </h2>
        </Reveal>
        <Reveal>
          <p className="mx-auto mt-5 max-w-xl text-xl text-ua-ink/80">
            Tell us about your business or project and we&apos;ll design something
            that&apos;s unmistakably yours. Premium websites for businesses and
            creatives — launched fast, no domain needed.
          </p>
        </Reveal>
        <Reveal>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={MAILTO}
              className="group inline-flex items-center gap-2 rounded-full border-2 border-ua-ink bg-white px-9 py-4 text-xl font-bold text-ua-ink shadow-[5px_5px_0_var(--ua-ink)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-ua-ink hover:text-white hover:shadow-[8px_8px_0_var(--ua-ink)] active:translate-y-0 active:shadow-[2px_2px_0_var(--ua-ink)]"
              style={{ fontFamily: "var(--font-epilogue)" }}
            >
              start your site
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-ua-ink bg-ua-sky px-9 py-4 text-xl font-bold text-ua-ink shadow-[5px_5px_0_var(--ua-ink)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-ua-ink hover:text-white hover:shadow-[8px_8px_0_var(--ua-ink)] active:translate-y-0 active:shadow-[2px_2px_0_var(--ua-ink)]"
              style={{ fontFamily: "var(--font-epilogue)" }}
            >
              see the work
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </Reveal>
        <Reveal>
          <p className="mt-8 text-ua-ink/60">
            or email us at{" "}
            <a href={`mailto:${SITE.email}`} className="font-bold text-ua-ink underline-offset-4 hover:underline">
              {SITE.email}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
