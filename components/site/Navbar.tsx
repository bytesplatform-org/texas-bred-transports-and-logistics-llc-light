"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { company, navigation } from "@/content/home";
import { ButtonLink, containerClass, Wordmark } from "./ui";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const wasOpen = useRef(false);

  // Underlines the nav link for the section crossing the middle of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    // The hero is observed too, so no link is active back at the top of the page.
    for (const id of ["top", ...navigation.links.map((link) => link.href.slice(1))]) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      closeRef.current?.focus();
    } else if (wasOpen.current) {
      document.documentElement.style.overflow = "";
      toggleRef.current?.focus({ preventScroll: true });
    }
    wasOpen.current = isOpen;
  }, [isOpen]);

  // Leaving mobile width with the menu open would otherwise keep the scroll lock.
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 64rem)");
    const close = (event: MediaQueryListEvent) => {
      if (event.matches) setIsOpen(false);
    };
    desktop.addEventListener("change", close);
    return () => desktop.removeEventListener("change", close);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const handleOverlayKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      closeMenu();
      return;
    }
    if (event.key !== "Tab") return;

    const focusable = overlayRef.current?.querySelectorAll<HTMLElement>("a[href], button");
    if (!focusable?.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const homeLabel = `${company.name}, back to top`;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <div className={`${containerClass} flex h-[71px] items-center justify-between gap-4`}>
        <a href="#top" aria-label={homeLabel} className="shrink-0">
          <Wordmark name={company.wordmark} sub={company.wordmarkSub} />
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-5 xl:gap-7">
            {navigation.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={activeId === link.href.slice(1) ? "true" : undefined}
                  className="relative block py-2 font-heading text-[13px] leading-none tracking-[0.04em] text-navy after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-transparent after:transition-colors hover:after:bg-accent aria-[current=true]:after:bg-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden shrink-0 items-center gap-5 lg:flex">
          <a
            href={`tel:${company.phoneE164}`}
            className="font-heading text-[13px] tracking-[0.04em] whitespace-nowrap text-navy hover:text-accent"
          >
            {company.phone}
          </a>
          <ButtonLink href={navigation.cta.href} className="whitespace-nowrap">
            {navigation.cta.label}
          </ButtonLink>
        </div>

        <button
          ref={toggleRef}
          type="button"
          aria-label="Open menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen(true)}
          className="-mr-2 flex size-11 items-center justify-center text-navy lg:hidden"
        >
          <Menu aria-hidden="true" className="size-6" strokeWidth={1.5} />
        </button>
      </div>

      {isOpen ? (
        <div
          ref={overlayRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          onKeyDown={handleOverlayKeyDown}
          className="on-dark fixed inset-0 z-50 flex flex-col overflow-y-auto bg-navy text-white lg:hidden"
        >
          <div className={`${containerClass} flex h-[71px] shrink-0 items-center justify-between`}>
            <a href="#top" aria-label={homeLabel} onClick={closeMenu}>
              <Wordmark name={company.wordmark} sub={company.wordmarkSub} tone="dark" />
            </a>
            <button
              ref={closeRef}
              type="button"
              aria-label="Close menu"
              onClick={closeMenu}
              className="-mr-2 flex size-11 items-center justify-center"
            >
              <X aria-hidden="true" className="size-6" strokeWidth={1.5} />
            </button>
          </div>

          <nav aria-label="Mobile" className={`${containerClass} flex-1 py-8`}>
            <ul className="border-t border-white/15">
              {navigation.links.map((link) => (
                <li key={link.href} className="border-b border-white/15">
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="block py-5 font-heading text-[28px] leading-none font-bold tracking-[0.03em]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={`${containerClass} flex flex-col gap-4 pb-8`}>
            <a href={`tel:${company.phoneE164}`} className="font-heading text-lg tracking-[0.04em]">
              {company.phone}
            </a>
            <ButtonLink href={navigation.cta.href} onClick={closeMenu} className="w-full">
              {navigation.cta.label}
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
