type WorkCategory = {
  title: string;
  type: string;
  description: string;
  projects: {
    name: string;
    note: string;
    href: string;
    badge?: {
      color: "green" | "orange";
      label: string;
    };
  }[];
};

const workCategories: WorkCategory[] = [
  {
    title: "Web Design",
    type: "HTML / CSS / JS",
    description: "Websites and front-end projects built with modern tools.",
    projects: [
      {
        name: "MUSIC HISTORY TIMELINE",
        note: "Interactive HTML, CSS & JavaScript timeline",
        href: "https://musichistory-gamma.vercel.app/",
        badge: { color: "green", label: "NEW" },
      },
      {
        name: "TREND PULSE",
        note: "Type beat trend and ranking app",
        href: "https://github.com/vtonu/trendpulse-app",
        badge: { color: "orange", label: "IN-PROGRESS" },
      },
      {
        name: "BUSINESS WEBSITE",
        note: "Meter Electric company website (before AI)",
        href: "https://meterelectrical.com",
      },
    ],
  },
  {
    title: "Game Development",
    type: "Lua / Multiplayer Systems",
    description: "Custom systems and interfaces built for MTA: San Andreas.",
    projects: [
      {
        name: "CUSTOM MTA SERVER",
        note: "Lua systems, resources & interface design",
        href: "https://github.com/vtonu/mtasa-pirate",
      },
      {
        name: "VOICE CHAT UI",
        note: "Glassmorphism interface for an MTA server",
        href: "https://github.com/vtonu/glassmorphism-ui-voice",
      },
      {
        name: "ATM UI",
        note: "Glassmorphism ATM interface for an MTA server",
        href: "https://github.com/vtonu/glassmorphism-ui-atm",
      },
    ],
  },
  {
    title: "Game UI & Experiments",
    type: "UI / Unity / 3D",
    description:
      "Interface studies and game projects from college and personal work.",
    projects: [
      {
        name: "GAME 124 — CHARACTER ART",
        note: "ZBrush final project (before AI)",
        href: "https://postimg.cc/gallery/MHc7LVG/523cf795",
      },
      {
        name: "GAME 138 — UNITY UI",
        note: "Unity final project (before AI)",
        href: "https://game138-aceternity-ui.vercel.app/",
      },
      {
        name: "PLAYABLE GAME DEMO",
        note: "Game UI & visual design (before AI)",
        href: "https://jarednovy.itch.io/mystery-meat",
      },
      {
        name: "MATERIAL UI BENTO GRID",
        note: "React & Material UI study (before AI)",
        href: "https://github.com/vtonu/BentoGrid_UI",
      },
      {
        name: "SIMPLE BENTO GRID",
        note: "HTML & CSS study (before AI)",
        href: "https://github.com/vtonu/Simple_BentoGrid",
      },
      {
        name: "NOTIFICATION CARD",
        note: "HTML & CSS UI study (before AI)",
        href: "https://github.com/vtonu/CoolNotification_Card",
      },
    ],
  },
];

function Badge({
  color,
  children,
}: {
  color: "green" | "orange";
  children: React.ReactNode;
}) {
  return <span className={`badge badge-${color}`}>{children}</span>;
}

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
                        <span className="project-name-row">
                          <strong>{project.name}</strong>
                          {project.badge && (
                            <Badge color={project.badge.color}>
                              {project.badge.label}
                            </Badge>
                          )}
                        </span>
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
            I started this site in college while studying graphic design and
            game development. I earned an Associate degree in Digital Gaming
            &amp; Interactive Media from Lake Washington Institute of Technology
            in Kirkland, WA.
          </p>
          <p>
            My main work is music production, where I rank among the top 5% of
            producers worldwide. I also make album covers and social media
            content.
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
