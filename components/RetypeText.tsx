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

  const tokens = children.match(/\s+|\S+/gu) ?? [];
  const characterCount = Math.max(Array.from(children).length, 1);
  const duration = Math.min(MAX_DURATION_MS, Math.max(MIN_DURATION_MS, characterCount * 10));
  const step = duration / characterCount;
  let characterIndex = 0;

  return (
    <span ref={ref} className="retype-text">
      {tokens.map((token, tokenIndex) => {
        const characters = Array.from(token);

        if (/^\s+$/u.test(token)) {
          characterIndex += characters.length;
          return token;
        }

        const delay = characterIndex * step;
        characterIndex += characters.length;
        const style = {
          "--retype-delay": `${delay}ms`,
          "--retype-duration": `${Math.max(characters.length * step, 40)}ms`,
          "--retype-characters": characters.length,
        } as CSSProperties;

        return (
          <span key={`${languageChangeId}-${tokenIndex}`} className="retype-word" style={style}>
            {token}
          </span>
        );
      })}
    </span>
  );
}
