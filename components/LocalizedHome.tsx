"use client";

import { useT } from "@/hooks/useT";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import Achievements from "@/components/Achievements";

const PROJECTS = [
  {
    key: "rmfindr",
    cover: "/projects/rmfindr-cover.png",
    tags: ["Python", "FastAPI", "React", "scikit-learn", "WebSockets", "Wi-Fi RSSI"],
    links: [
      { key: "github", href: "https://github.com/BenTheurich/EuroTech-Hackathon" },
      { key: "productDemo", href: "https://youtu.be/7gwtqk34Jds" },
      { key: "technicalDemo", href: "https://youtu.be/ev5DqIyfHig" }
    ]
  },
  {
    key: "timeSeriesAnnotator",
    cover: "/projects/annotator-cover.jpg",
    tags: ["Java", "JFreeChart", "Swing", "CSV", "HDF5"],
    links: [{ key: "github", href: "https://github.com/BenTheurich/MultivariateTimeSeriesAnnotator" }]
  },
  {
    key: "securiKey",
    cover: "/projects/securikey-cover.jpg",
    tags: ["Java", "Encryption", "SHA-256"],
    links: [
      { key: "github", href: "https://github.com/BenTheurich/SecuriKeyGUI" },
      { key: "demo", href: "https://github.com/BenTheurich/SecuriKeyGUI?tab=readme-ov-file#class-presentation-demo" }
    ]
  },
  {
    key: "stocker",
    cover: "/projects/stocker-cover.jpg",
    tags: ["Python", "NLP", "Flask", "AI", "HTML", "CSS"],
    links: [
      { key: "github", href: "https://github.com/BenTheurich/Stocker" },
      { key: "hackathon", href: "#achievements" }
    ]
  },
  {
    key: "videoPlayer",
    cover: "/projects/videoplayer-cover.jpg",
    tags: ["VLCJ", "Java Swing", "Selenium", "Web Scraping"],
    links: [
      { key: "github", href: "https://github.com/BenTheurich/VideoPlayer" },
      { key: "demo", href: "https://github.com/BenTheurich/VideoPlayer?tab=readme-ov-file#screenshots-and-demo" }
    ]
  },
  {
    key: "embeddedSnake",
    cover: "/projects/embedded-snake-cover.jpg",
    tags: ["C++", "STM32 Nucleo", "Embedded", "Joystick", "LED Matrix"],
    links: [
      { key: "github", href: "https://github.com/BenTheurich/EmbeddedSnakeGame" },
      { key: "demo", href: "https://drive.google.com/file/d/1f-Nvek4yxz_EDnvyU3LeZlxIyDfSh_NV/view" }
    ]
  }
];

const EXPERIENCE_ROLES = [
  { key: "hefex", href: "https://hefex-labs.com/" },
  { key: "spaII", href: "https://www.spa.com/" },
  { key: "spaI", href: "https://www.spa.com/" },
  { key: "hmeContract", href: "https://www.hme.com/" },
  { key: "hmeIntern", href: "https://www.hme.com/" },
  { key: "techForGood", href: "https://www.techforgoodinc.org/" },
  { key: "desteam", href: "https://desteam.org/" }
] as const;

const EDUCATION_LINKS = {
  tum: "https://www.tum.de/en/",
  csusm: "https://www.csusm.edu/"
} as const;

export default function LocalizedHome() {
  const t = useT();
  useRevealOnScroll();
  const cardLinkLabel = (title: string) => t("a11y.cardLinkLabel").replace("{title}", title);
  const projectActionLinkClass = (key: string) =>
    `project-action-link ${
      key === "github" ? "project-action-link-primary" : "project-action-link-secondary"
    }`;

  return (
    <>
      {/* HERO */}
      <section id="home" data-section className="relative">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-[1fr,auto] items-center">
            <figure className="justify-self-center md:justify-self-end md:order-2">
              <span className="relative inline-block rounded-full bg-gradient-to-br from-accent/60 to-navy/60 p-[3px] shadow-subtle">
                <span className="rounded-full bg-white dark:bg-gray-900 p-0.5 block">
                  <img
                    src="/profile/headshot.jpg"
                    alt={t("a11y.profileAlt")}
                    width="480"
                    height="480"
                    loading="eager"
                    decoding="async"
                    className="block h-52 w-52 md:h-60 md:w-60 rounded-full object-cover border border-black/10 dark:border-white/10"
                  />
                </span>
              </span>
              <figcaption className="sr-only">{t("a11y.profileCaption")}</figcaption>
            </figure>

            <div className="md:order-1">
              <p className="mb-4 text-sm uppercase tracking-widest text-graycool">{t("hero.location")}</p>
              <h1 className="font-extrabold leading-tight text-balance text-gray-900 dark:text-white"
                  style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)" }}>
                {t("hero.title")} <span className="text-navy dark:text-accent">{t("hero.nameAccent")}</span> — {t("hero.subtitle")}
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-gray-700 dark:text-gray-300">
                {t("hero.description")}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/Ben-Theurich-CV.pdf" download
                   className="rounded-full bg-navy px-5 py-2.5 text-white dark:bg-white dark:text-black">{t("hero.downloadCV")}</a>
                <a href="https://www.linkedin.com/in/ben-theurich/" target="_blank" rel="noopener noreferrer"
                   className="rounded-full bg-accent/10 px-5 py-2.5 text-accent hover:bg-accent/20">{t("hero.linkedin")}</a>
                <a href="https://github.com/BenTheurich" target="_blank" rel="noopener noreferrer"
                   className="rounded-full bg-accent/10 px-5 py-2.5 text-accent hover:bg-accent/20">{t("hero.github")}</a>
                <a href="#projects" 
                   className="rounded-full bg-accent/10 px-5 py-2.5 text-accent hover:bg-accent/20">{t("hero.viewProjects")}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" data-section aria-labelledby="about-title">
        <div className="mx-auto max-w-6xl px-4">
          <h2 id="about-title" className="text-3xl md:text-4xl font-bold tracking-tight">{t("about.title")}</h2>
          <div className="mt-6 prose max-w-none dark:prose-invert">
            <div className="prose max-w-none dark:prose-invert prose-p:my-0 space-y-4">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              <p>{t("about.p3")}</p>
              <p>{t("about.p4")}</p>
              <p>{t("about.p5")}</p>
              <p>{t("about.p6")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" data-section aria-labelledby="projects-title">
        <div className="mx-auto max-w-6xl px-4">
          <h2 id="projects-title" className="text-3xl md:text-4xl font-bold tracking-tight">{t("projects.title")}</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p) => {
              const title = t(`projects.cards.${p.key}.title`);
              const primaryHref = p.links[0].href;

              return (
                <article key={p.key} className="card motion-card clickable-card group overflow-hidden">
                  <a
                    href={primaryHref}
                    target={primaryHref.startsWith("#") ? undefined : "_blank"}
                    rel={primaryHref.startsWith("#") ? undefined : "noopener noreferrer"}
                    className="card-overlay-link"
                    aria-label={cardLinkLabel(title)}
                  />
                  <div className="relative aspect-[3/2] w-full overflow-hidden bg-black/5">
                    <img src={p.cover} alt={title + " cover"} className="motion-card-image h-full w-full object-cover" loading="lazy" />
                    <div className="project-tech-overlay">
                      <ul className="project-tech-list" aria-label={t("a11y.techStack")}>
                        {p.tags.map((tag) => (
                          <li key={tag} className="project-tech-pill">{tag}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{t(`projects.cards.${p.key}.desc`)}</p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {p.links.map((l) => (
                        l.href.startsWith("#") ? (
                          <a key={l.href + l.key} href={l.href}
                             className={projectActionLinkClass(l.key)}>
                             {t(`projects.cards.${p.key}.links.${l.key}`)}
                          </a>
                        ) : (
                          <a key={l.href + l.key} href={l.href} target="_blank" rel="noopener noreferrer"
                             className={projectActionLinkClass(l.key)}>
                             {t(`projects.cards.${p.key}.links.${l.key}`)}
                          </a>
                        )
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <Achievements />

      {/* EXPERIENCE */}
      <section id="experience" data-section aria-labelledby="experience-title">
        <div className="mx-auto max-w-6xl px-4">
          <h2 id="experience-title" className="text-3xl md:text-4xl font-bold tracking-tight">{t("experience.title")}</h2>

          <ol className="mt-6 relative border-l border-black/10 pl-6 dark:border-white/10">
            {EXPERIENCE_ROLES.map((role) => (
              <li key={role.key} className="mb-8 last:mb-0">
                <div className="timeline-dot absolute -left-2.5 h-5 w-5 rounded-full bg-navy dark:bg-accent" />
                <h3 className="text-lg font-semibold">
                  {t(`experience.roles.${role.key}.title`)} — <a href={role.href} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline dark:text-blue-400">
                    {t(`experience.roles.${role.key}.company`)}
                  </a>
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t(`experience.roles.${role.key}.period`)} • {t(`experience.roles.${role.key}.location`)}</p>
                <ul className="mt-2 list-disc pl-5 text-sm leading-relaxed text-gray-800 dark:text-gray-200">
                  {Array.from({ length: 3 }).map((_, i) => {
                    const bullet = t(`experience.roles.${role.key}.bullets.${i}`);
                    if (bullet === `[experience.roles.${role.key}.bullets.${i}]`) return null;
                    return <li key={i}>{bullet}</li>;
                  })}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" data-section aria-labelledby="education-title">
        <div className="mx-auto max-w-6xl px-4">
          <h2 id="education-title" className="text-3xl md:text-4xl font-bold tracking-tight">{t("education.title")}</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="card motion-card clickable-card group overflow-hidden">
              <a
                href={EDUCATION_LINKS.tum}
                target="_blank"
                rel="noopener noreferrer"
                className="card-overlay-link"
                aria-label={cardLinkLabel(t("education.institutions.tum.name"))}
              />
              <div className="h-40 w-full overflow-hidden bg-black/5">
                <img src="/education/tum.jpg" alt={t("education.institutions.tum.imageAlt")} className="motion-card-image h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold">{t("education.institutions.tum.name")}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t("education.institutions.tum.degree")}</p>
              </div>
            </div>

            <div className="card motion-card clickable-card group overflow-hidden">
              <a
                href={EDUCATION_LINKS.csusm}
                target="_blank"
                rel="noopener noreferrer"
                className="card-overlay-link"
                aria-label={cardLinkLabel(t("education.institutions.csusm.name"))}
              />
              <div className="h-40 w-full overflow-hidden bg-black/5">
                <img src="/education/csusm.jpg" alt={t("education.institutions.csusm.imageAlt")} className="motion-card-image h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold">{t("education.institutions.csusm.name")}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t("education.institutions.csusm.degree")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
