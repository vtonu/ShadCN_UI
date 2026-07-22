const workCategories = [
  {
    title: "Web Design Stuff",
    type: "HTML / CSS / JS",
    description:
      "Live websites & interface experiments built with both modern frameworks & tools.",
    projects: [
      {
        name: "MUSIC HISTORY TIMELINE",
        note: "HTML & CSS experiment using Codex",
        href: "https://musichistory-gamma.vercel.app/",
      },
      {
        name: "TREND PULSE",
        note: "Type beat ranking app using Codex",
        href: "https://github.com/vtonu/trendpulse-app",
      },
      {
        name: "BUSINESS WEBSITE",
        note: "METER ELECTRIC (before AI)",
        href: "https://meterelectrical.com",
      },
      {
        name: "BENTO GRID MUI",
        note: "React & Material UI test (before AI)",
        href: "https://github.com/vtonu/BentoGrid_UI",
      },
      {
        name: "BENTO GRID SIMPLE",
        note: "HTML & CSS experiment (before AI)",
        href: "https://github.com/vtonu/Simple_BentoGrid",
      },
      {
        name: "NOTIFICATION CARD SIMPLE",
        note: "HTML & CSS experiment (before AI)",
        href: "https://github.com/vtonu/CoolNotification_Card",
      },
    ],
  },
  {
    title: "Game Dev Stuff",
    type: "Lua Systems / UX",
    description:
      "Scripts, resources, and custom aesthetics for multiplayer mods like MTA: San Andreas.",
    projects: [
      {
        name: "My Custom MTA server",
        note: "Lua scripting and UX design",
        href: "https://github.com/vtonu/mtasa-pirate",
      },
      {
        name: "Voice UI",
        note: "Glassmorphism interface concept for a multiplayer server",
        href: "https://github.com/vtonu/glassmorphism-ui-voice",
      },
      {
        name: "ATM UI",
        note: "Glassmorphism interface concept for a multiplayer server",
        href: "https://github.com/vtonu/glassmorphism-ui-atm",
      },
    ],
  },
  {
    title: "Game UI Stuff",
    type: "Unity / Maya 3D",
    description: "Game interfaces and visual concepts made in college.",
    projects: [
      {
        name: "GAME124",
        note: "ZBrush class final project showcase (before AI)",
        href: "https://postimg.cc/gallery/MHc7LVG/523cf795",
      },
      {
        name: "GAME138",
        note: "Unity class final project showcase (before AI)",
        href: "https://game138-aceternity-ui.vercel.app/",
      },
      {
        name: "PLAYABLE GAME DEMO",
        note: "Game UI and visual direction (before AI)",
        href: "https://jarednovy.itch.io/mystery-meat",
      },
    ],
  },
];

function WorkArrow() {
  return (
    <svg className="project-arrow" viewBox="0 0 14 14" aria-hidden="true">
      <path d="M3 11 11 3M5 3h6v6" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Back to top">
          VT
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="https://github.com/vtonu" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <p className="eyebrow">Producer / Designer / Gamer</p>
        <h1>I make useful things for the web and games.</h1>
        <p className="intro">
          A focused set of aesthetically pleasing web &amp; game design
          projects. Most of my development work is available on GitHub.
        </p>
        <div className="hero-links">
          <a className="primary-link" href="#work">
            View selected work
          </a>
          <a href="https://github.com/vtonu" target="_blank" rel="noreferrer">
            github.com/vtonu ↗
          </a>
        </div>
      </section>

      <section className="section" id="work">
        <div className="section-heading">
          <p className="section-index">01</p>
          <h2>Selected work</h2>
          <p>A short list. The rest of my time is spent in FL Studio.</p>
        </div>

        <div className="project-list">
          {workCategories.map((category, index) => (
            <article className="project" key={category.title}>
              <span className="project-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="project-copy">
                <div className="project-title-row">
                  <h3>{category.title}</h3>
                  <span>{category.type}</span>
                </div>
                <p>{category.description}</p>
                <div className="project-links">
                  {category.projects.map((project) => (
                    <a
                      href={project.href}
                      key={project.name}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        <strong>{project.name}</strong>
                        <small>{project.note}</small>
                      </span>
                      <WorkArrow />
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section about" id="about">
        <div className="section-heading">
          <p className="section-index">02</p>
          <h2>About</h2>
        </div>
        <div className="about-copy">
          <p>
            I started this site in college while studying graphic design, 3D
            art, and game development. I earned an Associate degree in Digital
            Gaming &amp; Interactive Media from Lake Washington Institute of
            Technology in Kirkland, WA.
          </p>
          <p>
            My main work is music production, where I rank among the top 5% of
            producers worldwide. I also create album covers and content for
            social media. Alongside that work, I build websites, multiplayer
            scripts, and visual projects that combine design with technical
            skills.
          </p>
        </div>
      </section>

      <footer>
        <p>Victor Tonu © 2026</p>
        <p>Built with Next.js</p>
      </footer>
    </main>
  );
}
