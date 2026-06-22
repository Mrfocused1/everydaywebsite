// Text wordmark for Everyday Web.Site — "everyday web" + a coloured ".site".
// `color` sets the main text colour (cream on dark, ink on light); the ".site"
// suffix always uses the brand blue accent.
export function Wordmark({
  color = "var(--ua-ink)",
  className,
}: {
  color?: string;
  className?: string;
}) {
  return (
    <span
      aria-label="Everyday Web.Site"
      className={`select-none whitespace-nowrap font-black lowercase leading-none tracking-tight ${className ?? ""}`}
      style={{ fontFamily: "var(--font-epilogue)", color }}
    >
      everyday web<span style={{ color: "var(--ua-blue)" }}>.site</span>
    </span>
  );
}
