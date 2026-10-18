import Image from "next/image";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="/" aria-label="Jilva home" className="brand">
      <span className="brand-symbol" aria-hidden="true">
        <Image
          src="/jilva-mark.webp"
          alt=""
          width={40}
          height={40}
          unoptimized
        />
      </span>
      {!compact && (
        <span>
          jilva<span className="brand-period">.</span>
        </span>
      )}
    </a>
  );
}
