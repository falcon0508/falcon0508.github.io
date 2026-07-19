function Hero() {
  return (
    <section className="page hero-page">
      <div className="hero-copy">
        <h1>Dylan Ong</h1>
        <p className="lede">
          A graduate from the University of Wisconsin-Madison, majoring 
          in Computer Science and Data Science with a certificate in 
          Accounting Fundamentals. As a passionate learner, I have 
          undertaken an extensive journey in the field of programming, 
          and over the years I have honed my problem-solving skills and 
          developed a knack for logical thinking.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="/CS_Resume_Dylan_Ong.pdf" target="_blank" rel="noreferrer">
            Resume
          </a>
          <a className="button button-secondary" href="https://github.com/falcon0508" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="button button-secondary" href="https://linkedin.com/in/felipedylanong" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>

      <aside className="hero-panel">
        <img src="/profile.jpg" alt="Portrait of Dylan Ong" className="hero-portrait" />

        <div className="stats-grid">
          <article className="stat-card">
            <span className="stat-label">Education</span>
            <strong>UW-Madison</strong>
            <p>Computer Science and Data Science</p>
          </article>

          <article className="stat-card">
            <span className="stat-label">GPA</span>
            <strong>3.93 / 4.00</strong>
            <p>Dean's List every semester</p>
          </article>

          <article className="stat-card">
            <span className="stat-label">Focus</span>
            <strong>Database & ML</strong>
            <p>Research, full-stack, and data tools</p>
          </article>

          <article className="stat-card stat-card--accent">
            <span className="stat-label">Open to</span>
            <strong>Software & Data Engineering</strong>
            <p>Full-time or internship</p>
          </article>
        </div>
      </aside>
    </section>
  );
}

export default Hero;
