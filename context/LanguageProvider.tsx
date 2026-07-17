"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

type Language = "en" | "de";

type LanguageContextType = {
  lang: Language;
  languageChangeId: number;
  setLang: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);
const isLanguage = (value: string | null): value is Language => value === "en" || value === "de";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");
  const [languageChangeId, setLanguageChangeId] = useState(0);
  const langRef = useRef<Language>("en");

  const applyLanguage = useCallback((newLang: Language) => {
    langRef.current = newLang;
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
    document.documentElement.lang = newLang;
  }, []);

  // Initialize from localStorage or navigator.language on mount.
  useEffect(() => {
    const stored = localStorage.getItem("lang");
    const initialLang = isLanguage(stored)
      ? stored
      : navigator.language.startsWith("de")
        ? "de"
        : "en";
    applyLanguage(initialLang);
  }, [applyLanguage]);

  const setLang = useCallback(
    (newLang: Language) => {
      if (newLang === langRef.current) return;
      setLanguageChangeId((id) => id + 1);
      applyLanguage(newLang);
    },
    [applyLanguage],
  );

  return (
    <LanguageContext.Provider value={{ lang, languageChangeId, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
