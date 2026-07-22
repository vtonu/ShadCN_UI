const projects = [
  {
    title: 'Meter Electric',
    type: 'Business website',
    description:
      "Web work for my dad's electrical business, built through a few versions while testing different tools and layouts.",
    href: 'https://github.com/vtonu/meter-electric',
    detail: 'Next.js / TypeScript / Tailwind',
  },
  {
    title: 'MTA projects',
    type: 'Game development',
    description:
      'Scripts, interfaces, systems, and small tests made for Multi Theft Auto. This is where most of my recent personal work lives.',
    href: 'https://github.com/vtonu',
    detail: 'Lua / UI / Game systems',
  },
  {
    title: 'Mystery Meat',
    type: 'Game UI',
    description:
      'A college horror game prototype. I worked on the interface and the visual direction of the game.',
    href: 'https://jarednovy.itch.io/mystery-meat',
    detail: 'UI / UX / Unity',
  },
  {
    title: 'College archive',
    type: 'Older work',
    description:
      'Web, graphic design, 3D work, and small game tests from school. Kept as an archive, not a full case study.',
    href: 'https://github.com/vtonu',
    detail: 'Web / Design / 3D',
  },
];

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
        <p className="eyebrow">Victor Tonu — web &amp; game projects</p>
        <h1>I make useful things for the web and games.</h1>
        <p className="intro">
          A small set of personal work, client work for my family, and experiments made while
          learning. Most of what I build is on GitHub.
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
          <p>A short list. The rest is on GitHub.</p>
        </div>

        <div className="project-list">
          {projects.map((project, index) => (
            <a
              className="project"
              href={project.href}
              key={project.title}
              target="_blank"
              rel="noreferrer">
              <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
              <div className="project-copy">
                <div className="project-title-row">
                  <h3>{project.title}</h3>
                  <span>{project.type}</span>
                </div>
                <p>{project.description}</p>
                <span className="project-detail">{project.detail}</span>
              </div>
              <span className="project-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
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
            I&apos;m Victor. I started this site in college while studying design and making small
            web and game projects. Since then, I&apos;ve kept building when I have a reason to: work
            for my dad&apos;s business, MTA projects, minigames, and tests that help me learn.
          </p>
          <p>
            This site is a simple record of that work. For code, updates, and smaller projects,
            GitHub is the best place to look.
          </p>
        </div>
      </section>

      <footer>
        <p>Victor Tonu</p>
        <p>Built with Next.js</p>
        <a href="https://github.com/vtonu" target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
      </footer>
    </main>
  );
}
