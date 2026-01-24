"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/constants";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navLinks = useMemo(() => NAV_LINKS, []);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
        ? "border-b border-(--border) bg-(--surface)/95 backdrop-blur-md shadow-sm"
        : "bg-transparent"
        }`}
    >
      <div className="container-page">
        <div className="flex h-16 items-center justify-between sm:h-20">
          <div className="flex items-center gap-10">
            <Link
              href="/"
              className="focus-ring inline-flex items-center gap-2 rounded-md py-1"
              aria-label={`${SITE.name} home`}
            >
              <span className="grid size-9 place-items-center rounded-xl bg-foreground text-sm font-semibold text-background">
                {SITE.name.slice(0, 1).toUpperCase()}
              </span>
              <span className="leading-tight">
                <span className="block text-base font-semibold tracking-tight text-foreground">
                  {SITE.name}
                </span>
                <span className="block text-xs font-medium text-(--muted)">
                  {SITE.role}
                </span>
              </span>
            </Link>

            <nav className="hidden items-center gap-8 md:flex">
              {navLinks.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="focus-ring group relative rounded-md py-2 text-sm font-medium tracking-wide text-foreground transition-colors hover:text-(--accent)"
                >
                  {item.label}
                  <span className="absolute -bottom-px left-0 h-[2px] w-0 bg-(--accent) transition-all duration-200 group-hover:w-full" />
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="focus-ring hidden rounded-full bg-(--accent) px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-(--accent-2) md:inline-flex"
            >
              Let’s Talk
            </Link>

            <button
              type="button"
              className="focus-ring inline-flex items-center justify-center rounded-full border border-(--border) bg-transparent px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-black/5 md:hidden dark:hover:bg-white/10"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((v) => !v)}
            >
              <span className="sr-only">Menu</span>
              <span className="grid gap-1.5">
                <span
                  className={`h-0.5 w-5 rounded bg-current transition-transform ${isOpen ? "translate-y-2 rotate-45" : ""
                    }`}
                />
                <span
                  className={`h-0.5 w-5 rounded bg-current transition-opacity ${isOpen ? "opacity-0" : "opacity-100"
                    }`}
                />
                <span
                  className={`h-0.5 w-5 rounded bg-current transition-transform ${isOpen ? "-translate-y-2 -rotate-45" : ""
                    }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!isOpen}
      >
        <div
          className={`fixed inset-0 z-40 bg-black/40 transition-opacity ${isOpen ? "opacity-100" : "opacity-0"
            }`}
          onClick={() => setIsOpen(false)}
        />

        <div
          className={`fixed right-0 top-0 z-50 h-full w-[min(92vw,380px)] border-l border-(--border) bg-background p-6 transition-transform ${isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold text-foreground">
              Menu
            </div>
            <button
              type="button"
              className="focus-ring rounded-full border border-(--border) px-3 py-2 text-sm font-semibold text-foreground hover:bg-black/5 dark:hover:bg-white/10"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>

          <div className="mt-6 grid gap-2">
            {navLinks.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="focus-ring rounded-xl px-4 py-3 text-base font-medium text-foreground hover:bg-black/5 dark:hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mt-6">
            <Link
              href="#contact"
              className="focus-ring inline-flex w-full items-center justify-center rounded-full bg-(--accent) px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-(--accent-2)"
              onClick={() => setIsOpen(false)}
            >
              Let’s Talk
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
