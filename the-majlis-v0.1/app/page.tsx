const projects = [
  {
    icon: "🔭",
    title: "Build an Affordable Telescope",
    category: "Science & Engineering",
    description: "Design a practical telescope using accessible components and document the complete build.",
    members: 7,
    tasks: 12,
    status: "Active"
  },
  {
    icon: "💧",
    title: "Low-Cost Water Purification",
    category: "Engineering",
    description: "Explore affordable, scalable approaches to safer drinking water.",
    members: 11,
    tasks: 8,
    status: "Recruiting"
  },
  {
    icon: "🤖",
    title: "Open Arabic AI Tools",
    category: "Technology",
    description: "Research and prototype open tools that improve Arabic language technology.",
    members: 16,
    tasks: 19,
    status: "Active"
  }
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <div className="brand"><span className="brand-mark">M</span><span>The Majlis</span></div>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#how">How it works</a>
          <a href="#about">About</a>
        </div>
        <button className="outline-btn">Sign in</button>
      </nav>

      <section className="hero">
        <div className="eyebrow">THINK · COLLABORATE · BUILD</div>
        <h1>Where Muslims come together to <span>build.</span></h1>
        <p className="hero-copy">
          The Majlis is a collaborative space where people gather around meaningful problems,
          bring their expertise, research together, and turn ideas into real projects.
        </p>
        <div className="hero-actions">
          <a className="primary-btn" href="#projects">Explore projects <span>→</span></a>
          <a className="text-btn" href="#how">See how it works</a>
        </div>
        <div className="hero-note"><span>●</span> Early concept · Project collaboration comes first</div>
      </section>

      <section id="projects" className="section">
        <div className="section-head">
          <div>
            <div className="eyebrow">THE MAJLIS IN ACTION</div>
            <h2>What are people building?</h2>
          </div>
          <button className="outline-btn">+ Create project</button>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-top">
                <div className="project-icon">{project.icon}</div>
                <span className={project.status === "Active" ? "status active" : "status"}>{project.status}</span>
              </div>
              <div className="category">{project.category}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="stats">
                <span>👥 {project.members} members</span>
                <span>✓ {project.tasks} tasks</span>
              </div>
              <button className="card-link">View project →</button>
            </article>
          ))}
        </div>
      </section>

      <section id="how" className="how section">
        <div className="eyebrow">THE IDEA</div>
        <h2>Gather around a problem.<br />Then do something about it.</h2>
        <div className="steps">
          {[
            ["01", "Propose", "Put a meaningful problem or project on the table."],
            ["02", "Gather", "People with relevant skills join the project."],
            ["03", "Collaborate", "Discuss, research, divide tasks and make decisions."],
            ["04", "Build", "Create something useful and publish the work."]
          ].map(([num, title, text]) => (
            <div className="step" key={num}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="manifesto">
        <div>
          <div className="eyebrow">THE PRINCIPLE</div>
          <h2>Not another feed.<br />A place to work together.</h2>
        </div>
        <p>
          The Majlis is designed around projects rather than endless scrolling.
          A discussion should be able to become research. Research should become
          collaboration. Collaboration should produce something real.
        </p>
      </section>

      <footer>
        <div className="brand"><span className="brand-mark">M</span><span>The Majlis</span></div>
        <span>Early MVP · Built for collaborative work</span>
      </footer>
    </main>
  );
}