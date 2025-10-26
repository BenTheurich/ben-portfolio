"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  // { id: "skills", label: "Skills" },
] as const;

export default function Nav() {
  const active = useActiveSection(NAV.map(n => n.id));
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 backdrop-blur bg-offwhite/70 dark:bg-gray-950/60 ${scrolled ? "shadow-subtle" : ""}`} role="banner">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4" aria-label="Primary">
        <Link href="#home" className="font-semibold tracking-tight text-navy dark:text-offwhite" aria-label="Ben Theurich — Home">Ben Theurich</Link>
        <ul className="hidden md:flex gap-3" role="list">
          {NAV.map(item => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`rounded-full px-3 py-1 text-sm transition ${
                    isActive
                      ? "bg-navy text-white dark:bg-white dark:text-black"
                      : "text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
