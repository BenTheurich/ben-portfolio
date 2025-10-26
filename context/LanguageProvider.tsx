"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

type Language = "en" | "de";

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  // Initialize from localStorage or navigator.language on mount
  useEffect(() => {
    const stored = localStorage.getItem("lang") as Language;
    if (stored) {
      setLangState(stored);
    } else {
      const browserLang = navigator.language.startsWith("de") ? "de" : "en";
      setLangState(browserLang);
    }
  }, []);

  // Update localStorage and document.documentElement.lang when language changes
  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
    document.documentElement.lang = newLang;
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
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