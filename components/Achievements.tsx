"use client";

import { useT } from "@/hooks/useT";
import RetypeText from "@/components/RetypeText";

const ACHIEVEMENTS = [
  {
    key: "hackathon",
    imageUrl: "/achievements/hackathon-win.jpg",
    links: {
      linkedin:
        "https://www.linkedin.com/posts/csusm-college-of-science-and-mathematics_outstandingstudents-softwarengineering-engineering-activity-7033546542863028224-DBjz/",
      github: "https://github.com/BenTheurich/Stocker",
    },
  },
  {
    key: "hackathon2",
    imageUrl: "/achievements/hackathon-win2.jpg",
    links: {
      linkedin:
        "https://www.linkedin.com/posts/stephen-batifol_a-week-ago-we-joined-start-munichs-road-activity-7403771653228224512-8TjT",
      github: "https://github.com/BenTheurich/EduComic",
      pitchDeck: "/achievements/educomic-pitch.pdf",
    },
  },
  {
    key: "hackathon3",
    imageUrl: "/achievements/hackathon-win3.jpg?v=2",
    links: {
      linkedin:
        "https://www.linkedin.com/posts/troyriveravolk_hackathon-tumai-anthropic-activity-7407011676018974720-y1qJ",
      github: "https://github.com/FlamurMaliqi/Tum-ai-hackathon",
    },
  },
] as const;

export default function Achievements() {
  const t = useT();
  const cardLinkLabel = (title: string) => t("a11y.cardLinkLabel").replace("{title}", title);

  const renderDescription = (key: string) => {
    if (key === "hackathon") {
      const desc = t(`achievements.${key}.desc`);
      const lplLink = t(`achievements.${key}.lplLink`);
      const parts = desc.split("LPL Financial");

      return (
        <>
          <RetypeText>{parts[0]}</RetypeText>
          <a
            href={lplLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-accent hover:underline"
          >
            <RetypeText>LPL Financial</RetypeText>
          </a>
          <RetypeText>{parts[1]}</RetypeText>
        </>
      );
    }
    if (key === "hackathon2") {
      const desc = t(`achievements.${key}.desc`);
      const bflLink = t(`achievements.${key}.bflLink`);
      const parts = desc.split("Black Forest Labs");

      return (
        <>
          <RetypeText>{parts[0]}</RetypeText>
          <a
            href={bflLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-accent hover:underline"
          >
            <RetypeText>Black Forest Labs</RetypeText>
          </a>
          <RetypeText>{parts[1]}</RetypeText>
        </>
      );
    }
    if (key === "hackathon3") {
      const desc = t(`achievements.${key}.desc`);
      const comstructLink = t(`achievements.${key}.comstructLink`);
      const parts = desc.split("Comstruct");

      return (
        <>
          <RetypeText>{parts[0]}</RetypeText>
          <a
            href={comstructLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-accent hover:underline"
          >
            <RetypeText>Comstruct</RetypeText>
          </a>
          <RetypeText>{parts[1]}</RetypeText>
        </>
      );
    }
    return <RetypeText>{t(`achievements.${key}.desc`)}</RetypeText>;
  };

  return (
    <section id="achievements" data-section aria-labelledby="achievements-title">
      <div className="mx-auto max-w-6xl px-4">
        <h2 id="achievements-title" className="text-3xl md:text-4xl font-bold tracking-tight">
          <RetypeText>{t("achievements.title")}</RetypeText>
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {ACHIEVEMENTS.map((achievement) => {
            const title = t(`achievements.${achievement.key}.title`);

            return (
              <article
                key={achievement.key}
                className="card motion-card clickable-card group overflow-hidden border border-black/5 p-0"
              >
                <a
                  href={achievement.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-overlay-link"
                  aria-label={cardLinkLabel(title)}
                />
                <figure className="m-0">
                  <div className="relative aspect-[2.4/1] w-full overflow-hidden bg-black/5">
                    <img
                      src={achievement.imageUrl}
                      alt={title}
                      className="motion-card-image w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="p-5">
                    <h3 className="text-xl font-semibold">
                      <RetypeText>{title}</RetypeText>
                    </h3>
                    <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                      {renderDescription(achievement.key)}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-3">
                      {achievement.links.linkedin && (
                        <a
                          href={achievement.links.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border border-black/10 px-4 py-2 text-sm dark:border-white/20"
                        >
                          <RetypeText>
                            {t(`achievements.${achievement.key}.links.linkedin`)}
                          </RetypeText>
                        </a>
                      )}

                      {achievement.links.github && (
                        <a
                          href={achievement.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full bg-accent/10 px-4 py-2 text-sm text-accent hover:bg-accent/20"
                        >
                          <RetypeText>
                            {t(`achievements.${achievement.key}.links.github`)}
                          </RetypeText>
                        </a>
                      )}

                      {"pitchDeck" in achievement.links && (
                        <a
                          href={achievement.links.pitchDeck}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border border-black/10 px-4 py-2 text-sm dark:border-white/20"
                        >
                          <RetypeText>
                            {t(`achievements.${achievement.key}.links.pitchDeck`)}
                          </RetypeText>
                        </a>
                      )}
                    </div>
                  </figcaption>
                </figure>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
