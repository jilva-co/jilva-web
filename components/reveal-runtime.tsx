"use client";

import { useEffect } from "react";

/** Only below-the-fold content waits for an entrance. First paint stays visible. */
export function RevealRuntime() {
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches || !("IntersectionObserver" in window)) return;

    const targets = [...document.querySelectorAll("[data-reveal]")];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px 24px 0px", threshold: 0.01 },
    );

    // Read geometry together before writing classes to avoid layout thrashing.
    const belowFold = targets.filter(
      (element) => element.getBoundingClientRect().top >= window.innerHeight,
    );
    for (const target of belowFold) {
      target.classList.add("is-reveal-pending");
      observer.observe(target);
    }

    const showAll = () => {
      if (!motion.matches) return;
      observer.disconnect();
      for (const target of belowFold)
        target.classList.remove("is-reveal-pending");
    };
    motion.addEventListener("change", showAll);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", showAll);
      for (const target of belowFold)
        target.classList.remove("is-reveal-pending");
    };
  }, []);

  return null;
}
