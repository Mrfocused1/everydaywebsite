import Image from "next/image";

// Brand logo for Everyday Web — stacked browser windows with the script "e"
// above the "Everyday Web" pill. Source artwork: design/everyday-web-logo.af.
export function Wordmark({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/brand/everyday-web-logo-v2.png"
      alt="Everyday Web"
      width={640}
      height={540}
      priority={priority}
      className={className}
      style={{ display: "block" }}
    />
  );
}
