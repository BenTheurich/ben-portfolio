"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useLanguage } from "@/context/LanguageProvider";
import { useT } from "@/hooks/useT";

const NAV_IDS = [
  "home",
  "about",
  "projects",
  "achievements",
  "experience",
  "education",
] as const;

export default function Nav() {
  const t = useT();
  const { lang, setLang } = useLanguage();
  const active = useActiveSection([...NAV_IDS]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 backdrop-blur bg-offwhite/70 dark:bg-gray-950/60 ${scrolled ? "shadow-subtle" : ""}`} role="banner">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4" aria-label={t("a11y.primaryNav")}>
        <Link href="#home" className="font-semibold tracking-tight text-navy dark:text-offwhite" aria-label="Ben Theurich — Home">Ben Theurich</Link>
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <ul className="flex gap-3" role="list">
              {NAV_IDS.map((id) => {
                const isActive = active === id;
                return (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className={`rounded-full px-3 py-1 text-sm transition ${
                        isActive
                          ? "bg-navy text-white dark:bg-white dark:text-black"
                          : "text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {t(`nav.${id}`)}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex items-center space-x-1">
            <button 
              onClick={() => setLang("en")}
              className={`rounded-l-full px-2.5 py-1 text-sm transition ${
                lang === "en"
                  ? "bg-navy text-white dark:bg-white dark:text-black"
                  : "text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10"
              }`}
              aria-pressed={lang === "en"}
              aria-label={lang === "en" ? "English (selected)" : "Switch to English"}
            >
              EN
            </button>
            <button 
              onClick={() => setLang("de")}
              className={`rounded-r-full px-2.5 py-1 text-sm transition ${
                lang === "de"
                  ? "bg-navy text-white dark:bg-white dark:text-black"
                  : "text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10"
              }`}
              aria-pressed={lang === "de"}
              aria-label={lang === "de" ? "Deutsch (ausgewählt)" : "Zu Deutsch wechseln"}
            >
              DE
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
