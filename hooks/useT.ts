"use client";

import { useCallback } from "react";
import { useLanguage } from "@/context/LanguageProvider";

// Import dictionaries at build time
import en from "@/locales/en.json";
import de from "@/locales/de.json";

const dictionaries = { en, de } as const;

export function useT() {
  const { lang } = useLanguage();

  const t = useCallback((key: string): string => {
    // Navigate the nested dictionary using the dot notation key
    const getValue = (obj: any, path: string): string => {
      const value = path.split(".").reduce((o, i) => o?.[i], obj);
      if (typeof value === "string") return value;
      return `[${key}]`; // Return key in brackets if not found
    };

    // Try German first, fallback to English if key missing
    if (lang === "de") {
      const deValue = getValue(dictionaries.de, key);
      if (deValue !== `[${key}]`) return deValue;
    }

    // Either English was requested or German key was missing
    return getValue(dictionaries.en, key);
  }, [lang]);

  return t;
}