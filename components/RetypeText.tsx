"use client";

import { useLayoutEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { useLanguage } from "@/context/LanguageProvider";

const MAX_DURATION_MS = 340;
const MIN_DURATION_MS = 140;

export default function RetypeText({ children }: { children: string }) {
  const { languageChangeId } = useLanguage();
  const ref = useRef<HTMLSpanElement>(null);
  const [animate, setAnimate] = useState(false);

  useLayoutEffect(() => {
    if (!languageChangeId || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setAnimate(
      rect.bottom > 0 &&
        rect.top < window.innerHeight &&
        rect.right > 0 &&
        rect.left < window.innerWidth,
    );
  }, [languageChangeId]);

  if (!languageChangeId || !animate) return <span ref={ref}>{children}</span>;

  const characters = Array.from(children);
  const characterCount = Math.max(characters.length, 1);
  const duration = Math.min(MAX_DURATION_MS, Math.max(MIN_DURATION_MS, characterCount * 10));
  const step = duration / characterCount;

  return (
    <span ref={ref} className="retype-text">
      {characters.map((character, characterIndex) => {
        if (/\s/u.test(character)) return character;

        // Inline characters preserve punctuation, hyphenation, and non-breaking spaces.
        const style = {
          "--retype-delay": `${characterIndex * step}ms`,
        } as CSSProperties;

        return (
          <span
            key={`${languageChangeId}-${characterIndex}`}
            className="retype-character"
            style={style}
          >
            {character}
          </span>
        );
      })}
    </span>
  );
}
