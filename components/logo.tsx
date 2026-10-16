import Image from "next/image";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a
      href="/#top"
      aria-label="Jilva home"
      className="brand inline-flex shrink-0 items-center gap-2.5 text-foreground"
    >
      <span className="brand-symbol" aria-hidden="true">
        <Image
          src="/jilva-logo.png"
          alt=""
          width={54}
          height={54}
          unoptimized
          priority={!compact}
        />
      </span>
      {!compact && (
        <span className="text-[21px] font-medium tracking-[-1.2px]">
          jilva<span className="text-accent">.</span>
        </span>
      )}
    </a>
  );
}
