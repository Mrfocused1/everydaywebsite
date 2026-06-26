// Plain wrapper that marks a node for GSAP scroll-reveal (see BobsFX).
// No client JS here — BobsFX (one per route) animates [data-bn-reveal].
export function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div data-bn-reveal className={className}>
      {children}
    </div>
  );
}
