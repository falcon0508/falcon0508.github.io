function Contact() {
  return (
    <section className="page page--split">
      <div className="page-intro">
        <p className="eyebrow">Contact</p>
        <h1>Let’s build something useful</h1>
        <p className="lede">
          If you are hiring for software, data, or research-adjacent work, I
          would love to connect.
        </p>
      </div>

      <div className="content-stack">
        <article className="panel panel--highlight">
          <h2>Email</h2>
          <a className="contact-link" href="mailto:felipedylanong@gmail.com">
            felipedylanong@gmail.com
          </a>
          <p className="muted">
            Best for internships, full-time roles, and project conversations.
          </p>
        </article>

        <div className="card-grid card-grid--two">
          <a className="panel panel--tinted panel-link" href="https://linkedin.com/in/felipedylanong" target="_blank" rel="noreferrer">
            <h3>LinkedIn</h3>
            <p>Professional background and experience.</p>
          </a>
          <a className="panel panel--tinted panel-link" href="https://github.com/falcon0508" target="_blank" rel="noreferrer">
            <h3>GitHub</h3>
            <p>Code samples and engineering projects.</p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
