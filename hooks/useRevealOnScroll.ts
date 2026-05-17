"use client";

import { useEffect } from "react";

export function useRevealOnScroll() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = [
      ...document.querySelectorAll<HTMLElement>("section[data-section]"),
      ...document.querySelectorAll<HTMLElement>(".timeline-dot"),
    ];

    if (reduceMotion) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    document.documentElement.classList.add("motion-reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.14 },
    );

    targets.forEach((target) => {
      const rect = target.getBoundingClientRect();
      const initialRevealCutoff = Math.min(160, window.innerHeight * 0.2);
      const isAlreadyVisible = rect.top < initialRevealCutoff && rect.bottom > 0;

      if (isAlreadyVisible) {
        target.classList.add("is-visible");
        return;
      }

      observer.observe(target);
    });

    return () => {
      document.documentElement.classList.remove("motion-reveal-ready");
      observer.disconnect();
    };
  }, []);
}
