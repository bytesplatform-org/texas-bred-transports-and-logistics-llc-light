"use client";

import { useEffect } from "react";

/** Fades in every `.reveal` element the first time it scrolls into view. */
export function RevealObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -5% 0px" },
    );

    for (const element of document.querySelectorAll(".reveal")) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return null;
}
