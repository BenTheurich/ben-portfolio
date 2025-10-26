"use client";

import { useT } from "@/hooks/useT";

export default function Footer() {
  const t = useT();
  
  return (
    <footer className="mt-10 border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-600 dark:text-gray-400" 
           dangerouslySetInnerHTML={{
             __html: t("footer.copyright").replace("{year}", new Date().getFullYear().toString())
           }} />
    </footer>
  );
}