const workCategories = [
  {
    title: "Website design",
    type: "Web / UI",
    description:
      "Live websites & interface experiments built with both modern frameworks & tools.",
    projects: [
      {
        name: "BUSINESS WEBSITE",
        note: "METER ELECTRIC",
        href: "https://meterelectrical.com",
      },
      {
        name: "MUSIC HISTORY TIMELINE",
        note: "HTML and CSS experiment",
        href: "https://musichistory-gamma.vercel.app/",
      },
      {
        name: "TREND PULSE",
        note: "React, TypeScript, Vite, and shadcn/ui for a type beat ranking app",
        href: "https://github.com/vtonu/trendpulse-app",
      },
      {
        name: "BENTO GRID MUI",
        note: "React and Material UI test",
        href: "https://github.com/vtonu/BentoGrid_UI",
      },
      {
        name: "BENTO GRID SIMPLE",
        note: "HTML and CSS experiment",
        href: "https://github.com/vtonu/Simple_BentoGrid",
      },
      {
        name: "NOTIFICATION CARD SIMPLE",
        note: "HTML and CSS experiment",
        href: "https://github.com/vtonu/CoolNotification_Card",
      },
    ],
  },
  {
    title: "Game development & scripting",
    type: "Lua Systems / UX",
    description:
      "Scripts, resources, interfaces, and custom systems for multiplayer games and community-led servers.",
    projects: [
      {
        name: "My Custom MTA San Andreas server",
        note: "Lua resources and server customization",
        href: "https://github.com/vtonu/mtasa-pirate",
      },
      {
        name: "Glassmorphism UI in MTA",
        note: "Voice Interface concept for a multiplayer server",
        href: "https://github.com/vtonu/glassmorphism-ui-voice",
      },
      {
        name: "Glassmorphism UI in MTA",
        note: "ATM interface concept for a multiplayer server",
        href: "https://github.com/vtonu/glassmorphism-ui-atm",
      },
    ],
  },
  {
    title: "Game UI & college work",
    type: "Unity / 3D",
    description:
      "Game interfaces, Unity work, and visual concepts made for college.",
    projects: [
      {
        name: "GAME138 SHOWCASE",
        note: "Unity final project showcased using Aceterinity UI",
        href: "https://game138-aceternity-ui.vercel.app/",
      },
      {
        name: "PLAYABLE GAME DEMO",
        note: "Game UI and visual direction",
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
          A focused set of web, game, design, and media projects. All of my
          development work is available on GitHub.
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
            I started this site in college while studying web design, graphic
            design, 3D art, and game development. I earned an Associate degree
            in Digital Gaming &amp; Interactive Media from Lake Washington
            Institute of Technology in Kirkland.
          </p>
          <p>
            My main work is music production, where I rank among the top 5% of
            producers worldwide. I also create album covers, music visualizers,
            and content for YouTube and social media. Alongside that work, I
            build websites, multiplayer game systems, and visual projects that
            combine design with technical skills.
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
