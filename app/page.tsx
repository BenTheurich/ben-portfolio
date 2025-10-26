export const dynamic = "error"; // ensure full static export
import Achievements from "@/components/Achievements";

const projects = [
  {
    title: "Time Series Annotator",
    desc: "Cross-platform Java desktop tool to visualize and annotate multivariate time-series (CSV/HDF5) for Tandem Diabetes Care; supports linked, resizable charts (line/step/scatter), zoom/pan, and import/export of annotations.",
    cover: "/projects/annotator-cover.jpg",
    tags: ["Java", "JFreeChart", "Swing", "CSV", "HDF5"],
    links: [{ label: "GitHub", href: "https://github.com/BenTheurich/MultivariateTimeSeriesAnnotator" }]
  },
  {
    title: "SecuriKey",
    desc: "Portable Java desktop password manager. Protects entries with a master password (hashed with SHA-256) and encrypts stored passwords; supports add/edit/delete/search via a simple GUI.",
    cover: "/projects/securikey-cover.jpg",
    tags: ["Java", "Encryption", "SHA-256"],
    links: [{ label: "GitHub", href: "https://github.com/BenTheurich/SecuriKeyGUI" }, { label: "Demo", href: "https://github.com/BenTheurich/SecuriKeyGUI?tab=readme-ov-file#class-presentation-demo" }]
  },
  {
    title: "Stocker",
    desc: "Stock predicting site using AWS Forecast, Python + Flask, with an HTML CSS JS frontend, winner of \"Most Complete Solution\" at LPL Financial's 2023 Hackathon.",
    cover: "/projects/stocker-cover.jpg",
    tags: ["Python", "NLP", "Flask", "AI", "HTML", "CSS"],
    links: [{ label: "GitHub", href: "https://github.com/BenTheurich/Stocker" }, { label: "Hackathon", href: "#achievements" }]
  },
  {
    title: "Video Player",
    desc: "Lightweight Java desktop video player for The Office that catalogs episodes with descriptions, plays via VLCJ, and remembers your last-watched episode and timestamp; metadata was populated via a Selenium scraper.",
    cover: "/projects/videoplayer-cover.jpg",
    tags: ["VLCJ", "Java Swing", "Selenium", "Web Scraping"],
    links: [{ label: "GitHub", href: "https://github.com/BenTheurich/VideoPlayer" }, { label: "Demo", href: "https://github.com/BenTheurich/VideoPlayer?tab=readme-ov-file#screenshots-and-demo" }]
  },
  {
    title: "Embedded Snake Game",
    desc: "From-scratch Snake for STM32: joystick controls, 8×8 LED display, and lightweight sound, driven by a tight game loop and a linked-list snake.",
    cover: "/projects/embedded-snake-cover.jpg",
    tags: ["C++","STM32 Nucleo", "Embedded", "Joystick", "LED Matrix"],
    links: [{ label: "GitHub", href: "https://github.com/BenTheurich/EmbeddedSnakeGame" }, { label: "Demo", href: "https://drive.google.com/file/d/1f-Nvek4yxz_EDnvyU3LeZlxIyDfSh_NV/view" }]
  }
];

export default function Page() {
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
                    alt="Portrait of Ben Theurich"
                    width="480"
                    height="480"
                    loading="eager"
                    decoding="async"
                    className="block h-52 w-52 md:h-60 md:w-60 rounded-full object-cover border border-black/10 dark:border-white/10"
                  />
                </span>
              </span>
              <figcaption className="sr-only">Ben Theurich — portrait</figcaption>
            </figure>

            <div className="md:order-1">
              <p className="mb-4 text-sm uppercase tracking-widest text-graycool">Munich, Germany</p>
              <h1 className="font-extrabold leading-tight text-balance text-gray-900 dark:text-white"
                  style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)" }}>
                Hi, I’m <span className="text-navy dark:text-accent">Ben Theurich</span> — Software Engineer & M.Sc. Informatics student at TUM.
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-gray-700 dark:text-gray-300">
                I build reliable, clean systems and explore practical ML / Computer Vision tooling.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/Ben-Theurich-CV.pdf" download
                   className="rounded-full bg-navy px-5 py-2.5 text-white dark:bg-white dark:text-black">Download CV</a>
           <a href="https://www.linkedin.com/in/ben-theurich/" target="_blank" rel="noopener noreferrer"
             className="rounded-full bg-accent/10 px-5 py-2.5 text-accent hover:bg-accent/20">LinkedIn</a>
           <a href="https://github.com/BenTheurich" target="_blank" rel="noopener noreferrer"
             className="rounded-full bg-accent/10 px-5 py-2.5 text-accent hover:bg-accent/20">GitHub</a>
           <a href="#projects" className="rounded-full bg-accent/10 px-5 py-2.5 text-accent hover:bg-accent/20">Projects</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" data-section aria-labelledby="about-title">
        <div className="mx-auto max-w-6xl px-4">
          <h2 id="about-title" className="text-3xl md:text-4xl font-bold tracking-tight">About</h2>
          <div className="mt-6 prose max-w-none dark:prose-invert">
            <div className="prose max-w-none dark:prose-invert prose-p:my-0 space-y-4">
              <p>
                I’m a software engineer from California, now based in <strong>Munich</strong>. I spent over two years at
                <strong> SPA</strong> in San Diego, where I built production-ready tools for defense clients and eventually
                stepped into a program lead role. That experience taught me how to take ownership, navigate complexity,
                and get things across the finish line without waiting to be asked.
              </p>

              <p>
                Now I’m pursuing a <strong>Master’s in Informatics</strong> at <strong>TUM</strong>, focusing on
                <strong> computer vision</strong> and <strong>machine learning</strong>. I chose TUM for the challenge—the
                program is tough, well-regarded, and full of opportunities to stretch myself. Munich also has a strong tech
                and startup scene, which is exactly what I was looking for.
              </p>

              <p>
                I’ve been coding since I was a kid. What drew me in was how easy it was to get started. I didn’t need fancy hardware,
                just a laptop and the will to build something, and I’ve always loved that kind of creative freedom. These days,
                I still enjoy building side projects, especially tools that solve niche problems or help communities run more smoothly.
              </p>

              <p>
                I’m currently <strong>open to part-time / working-student roles in Munich</strong>. Something in computer
                vision or ML would be ideal, but I’m also open to full-stack roles where I can work with smart people and
                ship real things. I do well in agile, fast-moving teams, and I’m comfortable either leading or supporting as needed.
                I like to ask questions, push back when necessary, and stay flexible as ideas evolve.
              </p>

              <p>
                One thing I try to live by: <strong>don’t oversell, just deliver great work and let that speak for itself.</strong>
              </p>

              <p>
                I’m bilingual in English and German, and always happy to connect. Shoot me a message on LinkedIn! :)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" data-section aria-labelledby="projects-title">
        <div className="mx-auto max-w-6xl px-4">
          <h2 id="projects-title" className="text-3xl md:text-4xl font-bold tracking-tight">Projects</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <article key={p.title} className="card overflow-hidden">
                <div className="relative h-50 w-full bg-black/5">
                  <img src={p.cover} alt={`${p.title} cover`} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{p.desc}</p>
                  <ul className="mt-3 flex flex-wrap gap-2" aria-label="Tech stack">
                    {p.tags.map((t) => (
                      <li key={t} className="rounded-full bg-black/5 px-2.5 py-1 text-xs text-gray-700 dark:bg-white/10 dark:text-gray-200">{t}</li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {p.links.map((l) => (
                      l.href && l.href.startsWith("#") ? (
                        <a key={l.href + l.label} href={l.href}
                           className="text-sm text-accent underline-offset-2 hover:underline">{l.label}</a>
                      ) : (
                        <a key={l.href + l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                           className="text-sm text-accent underline-offset-2 hover:underline">{l.label}</a>
                      )
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <Achievements />

      {/* EXPERIENCE */}
      <section id="experience" data-section aria-labelledby="experience-title">
        <div className="mx-auto max-w-6xl px-4">
          <h2 id="experience-title" className="text-3xl md:text-4xl font-bold tracking-tight">Experience</h2>

          <ol className="mt-6 relative border-l border-black/10 pl-6 dark:border-white/10">
            {/* Software Engineer II — SPA */}
            <li className="mb-8">
              <div className="absolute -left-2.5 h-5 w-5 rounded-full bg-navy dark:bg-accent" />
              <h3 className="text-lg font-semibold">Software Engineer II — <a href="https://www.spa.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline dark:text-blue-400">Systems Planning and Analysis (SPA)</a></h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Jul 2025 – Oct 2025 • San Diego, CA</p>
              <ul className="mt-2 list-disc pl-5 text-sm leading-relaxed text-gray-800 dark:text-gray-200">
                <li>Led ongoing development of a Java-based analysis tool; prioritized user feedback and coordinated cross-team work to keep releases on track.</li>
                <li>Streamlined user workflows by reducing manual steps ~30–50%, improving task throughput.</li>
                <li>Established a structured internal release cadence with pre-release QA gates; automated build versioning and standardized sprint release notes for traceability.</li>
              </ul>
            </li>

            {/* Software Engineer I — SPA */}
            <li className="mb-8">
              <div className="absolute -left-2.5 h-5 w-5 rounded-full bg-navy dark:bg-accent" />
              <h3 className="text-lg font-semibold">Software Engineer I — <a href="https://www.spa.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline dark:text-blue-400">Systems Planning and Analysis (SPA)</a></h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Jun 2023 – Jul 2025 • San Diego, CA</p>
              <ul className="mt-2 list-disc pl-5 text-sm leading-relaxed text-gray-800 dark:text-gray-200">
                <li>Expanded an existing Java analysis tool with new capabilities, improving reliability and usability.</li>
                <li>Delivered on-site, hands-on training to DoD users; captured and prioritized feedback to drive the enhancement backlog.</li>
                <li>Shipped the first customer-ready release on schedule in an Agile environment with positive acceptance.</li>
              </ul>
            </li>

            {/* Contract Software Engineer — HM Electronics */}
            <li className="mb-8">
              <div className="absolute -left-2.5 h-5 w-5 rounded-full bg-navy dark:bg-accent" />
              <h3 className="text-lg font-semibold">Contract Software Engineer — <a href="https://www.hme.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline dark:text-blue-400">HM Electronics (HME)</a></h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Aug 2022 – Jun 2023 • Carlsbad, CA</p>
              <ul className="mt-2 list-disc pl-5 text-sm leading-relaxed text-gray-800 dark:text-gray-200">
                <li>Coordinated with multiple teams to establish a CI pipeline between dev builds and automated testing using Jenkins and Azure.</li>
                <li>Used Ansible to improve Raspberry Pi setup, increasing productivity by ~200%.</li>
                <li>Revamped automation architecture to simplify selecting executor nodes.</li>
              </ul>
            </li>

            {/* Software Engineering Intern — HM Electronics */}
            <li className="mb-8">
              <div className="absolute -left-2.5 h-5 w-5 rounded-full bg-navy dark:bg-accent" />
              <h3 className="text-lg font-semibold">Software Engineering Intern — <a href="https://www.hme.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline dark:text-blue-400">HM Electronics (HME)</a></h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Jun 2022 – Aug 2022 • Carlsbad, CA</p>
              <ul className="mt-2 list-disc pl-5 text-sm leading-relaxed text-gray-800 dark:text-gray-200">
                <li>Developed a front-end interface for a simulator app using Python + Flask.</li>
                <li>Streamlined install & deployment to Raspberry Pi devices via shell scripts and Linux services.</li>
                <li>Identified and fixed issues in Python-based Selenium browser test automation.</li>
              </ul>
            </li>

            {/* Software Engineering Intern — Tech For Good */}
            <li className="mb-8">
              <div className="absolute -left-2.5 h-5 w-5 rounded-full bg-navy dark:bg-accent" />
              <h3 className="text-lg font-semibold">Software Engineering Intern — <a href="https://www.techforgoodinc.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline dark:text-blue-400">Tech For Good</a></h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Jun 2021 – Aug 2021 • Boston, MA</p>
              <ul className="mt-2 list-disc pl-5 text-sm leading-relaxed text-gray-800 dark:text-gray-200">
                <li>Implemented donation collection and distribution features in Solidity on Ethereum.</li>
                <li>Collaborated remotely with a team of 7 interns using GitHub, Zoom, and Notion.</li>
              </ul>
            </li>

            {/* Coding Instructor Intern — Delaware Steam Academy */}
            <li className="mb-0">
              <div className="absolute -left-2.5 h-5 w-5 rounded-full bg-navy dark:bg-accent" />
              <h3 className="text-lg font-semibold">Coding Instructor Intern — <a href="https://desteam.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline dark:text-blue-400">Delaware Steam Academy</a></h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Jun 2021 – Sep 2021 • Newark, DE</p>
              <ul className="mt-2 list-disc pl-5 text-sm leading-relaxed text-gray-800 dark:text-gray-200">
                <li>Taught summer coding camps in JavaScript to middle school students.</li>
                <li>Fostered interest in coding and encouraged continued exploration.</li>
              </ul>
            </li>
          </ol>
        </div>
      </section>


      {/* EDUCATION */}
      <section id="education" data-section aria-labelledby="education-title">
        <div className="mx-auto max-w-6xl px-4">
          <h2 id="education-title" className="text-3xl md:text-4xl font-bold tracking-tight">Education</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="card overflow-hidden">
              <div className="h-40 w-full bg-black/5">
                <img src="/education/tum.jpg" alt="Technical University of Munich campus" className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold">TUM — Technical University of Munich</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">M.Sc. Informatics (in progress)</p>
              </div>
            </div>

            <div className="card overflow-hidden">
              <div className="h-40 w-full bg-black/5">
                <img src="/education/csusm.jpg" alt="California State University San Marcos campus" className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold">CSUSM — California State University San Marcos</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">B.S. Software Engineering, <strong>GPA 3.9</strong>, 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      {/* <section id="skills" data-section aria-labelledby="skills-title">
        <div className="mx-auto max-w-6xl px-4">
          <h2 id="skills-title" className="text-3xl md:text-4xl font-bold tracking-tight">Skills</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Skill title="Languages" items={["TypeScript/JavaScript", "Python", "Java", "SQL"]} />
            <Skill title="Frameworks" items={["Next.js", "React", "NestJS", "Node.js"]} />
            <Skill title="Data / ML" items={["NumPy", "Pandas", "scikit-learn", "PyTorch (basics)"]} />
            <Skill title="DevOps / Cloud" items={["GitHub Actions", "CI/CD", "Docker", "Vercel"]} />
            <Skill title="Mapping / Geo" items={["MapLibre", "MapTiler", "PostGIS"]} />
            <Skill title="Tooling" items={["PDFKit", "BullMQ", "OpenAPI", "Postman/Insomnia"]} />
          </div>
        </div>
      </section> */}
    </>
  );
}

// function Skill({ title, items }: { title: string; items: string[] }) {
//   return (
//     <div className="card p-5">
//       <h3 className="font-semibold">{title}</h3>
//       <ul className="mt-3 flex flex-wrap gap-2">
//         {items.map((i) => (
//           <li key={i} className="rounded-full bg-black/5 px-2.5 py-1 text-xs text-gray-700 dark:bg-white/10 dark:text-gray-200">
//             {i}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
