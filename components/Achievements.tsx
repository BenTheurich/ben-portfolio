"use client";

import { useT } from "@/hooks/useT";

export default function Achievements() {
  const t = useT();
  
  return (
    <section id="achievements" data-section aria-labelledby="achievements-title">
      <div className="mx-auto max-w-6xl px-4">
        <h2 id="achievements-title" className="text-3xl md:text-4xl font-bold tracking-tight">{t("achievements.title")}</h2>

        <div className="mt-6">
          <article className="card overflow-hidden border border-black/5 p-0">
            <figure className="m-0">
              <div className="relative w-full h-full md:h-full bg-black/5">
                <img
                  src="/achievements/hackathon-win.jpg"
                  alt={t("achievements.hackathon.title")}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <figcaption className="p-5">
                <h3 className="text-xl font-semibold">{t("achievements.hackathon.title")}</h3>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{t("achievements.hackathon.desc")}</p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="https://www.linkedin.com/posts/csusm-college-of-science-and-mathematics_outstandingstudents-softwarengineering-engineering-activity-7033546542863028224-DBjz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-black/10 px-4 py-2 text-sm dark:border-white/20"
                  >
                    {t("achievements.hackathon.links.linkedin")}
                  </a>

                  <a
                    href="https://github.com/BenTheurich/Stocker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-accent/10 px-4 py-2 text-sm text-accent hover:bg-accent/20"
                  >
                    {t("achievements.hackathon.links.github")}
                  </a>
                </div>
              </figcaption>
            </figure>
          </article>
        </div>
      </div>
    </section>
  );
}
