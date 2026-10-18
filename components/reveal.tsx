import { createElement, type CSSProperties, type ReactNode } from "react";

type RevealTag = "div" | "section" | "aside" | "li" | "p" | "span" | "a" | "ol";

type RevealProps = {
  as?: RevealTag;
  /** Stagger in milliseconds. */
  delay?: number;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
} & Record<string, unknown>;

/**
 * A stepped scroll-reveal target. This is a server component: it only
 * renders the markup and the stagger delay. The single client-side
 * homepage's `RevealRuntime` observes below-the-fold `[data-reveal]`
 * elements and animates them in once, so the page ships with no
 * per-element hydration cost.
 *
 * Content is visible by default, including without JavaScript. The
 * runtime only primes elements that are outside the initial viewport.
 */
export function Reveal({
  as = "div",
  delay = 0,
  children,
  style,
  ...rest
}: RevealProps) {
  return createElement(
    as,
    {
      "data-reveal": "",
      style: { "--reveal-delay": `${delay}ms`, ...style } as CSSProperties,
      ...rest,
    } as Record<string, unknown>,
    children,
  );
}
