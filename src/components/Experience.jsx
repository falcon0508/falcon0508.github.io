const researchRoles = [
  {
    role: "Data Analyst Research Intern",
    period: "October 2024 - September 2025",
    bullets: [
      "Performed QA testing for multiple research platforms",
      "Conducted educational data analysis using R",
      "Supported research projects using Epistemic Network Analysis",
      "Assisted 30+ researchers with technical and analytical needs",
    ],
  },
  {
    role: "Senior Research Intern for Development",
    period: "September 2025 - May 2026",
    bullets: [
      "Managed a team of developers building educational research platforms",
      "Led QA testing and coordinated researchers and developers",
      "Designed workflows that improved development efficiency",
      "Provided technical support and debugged platform issues",
    ],
  },
];

const experiences = [
  {
    role: "CS Capstone Software Engineer",
    company: "UW-Madison Department of Neuroscience",
    period: "January 2026 - May 2026",
    image: "/experience-capstone.jpg",
    imageAlt: "Capstone project workspace or presentation image",
    pill: "Capstone",
    bullets: [
      "Designed and built multithreaded architecture for real-time eye-tracking experiments using Python",
      "Integrated application with Pupil Labs eye tracker API to stream and process gaze data in real time",
      "Developed interactive GUI using Kivy to manage experiment flow",
      "Implemented data pipeline and SQLite database for storing session data and experiment results",
    ],
  },
  {
    company: "Center for Research on Complex Thinking",
    image: "/experience-research-development.jpg",
    imageAlt: "Research and development workspace for the research internship roles",
    grouped: true,
  },
  {
    role: "Student Stocker",
    company: "University of Wisconsin-Madison Housing",
    period: "February 2023 - September 2023",
    image: "/experience-housing.jpg",
    imageAlt: "Campus housing or dining facilities related to the student stocker role",
    pill: "Part-time",
    bullets: [
      "Stocked and organized inventory",
      "Assisted customers in dining facilities",
      "Maintained food safety and hygiene standards",
      "Processed transactions using POS systems",
    ],
  },
];

function Experience() {
  return (
    <section className="page page--split">
      <div className="page-intro">
        <p className="eyebrow">Experience</p>
        <h1>Work that mixes leadership, analysis, and support</h1>
      </div>

      <div className="content-stack">
        {experiences.map((entry) => {
          if (entry.grouped) {
            return (
              <article className="panel panel--timeline panel--grouped" key={entry.company}>
                <div className="panel-media panel-media--wide">
                  <img src={entry.image} alt={entry.imageAlt} />
                </div>

                <div className="panel-header">
                  <div>
                    <h2>{entry.company}</h2>
                    <p className="panel-meta">Epistemic Analytics Lab</p>
                  </div>
                  <span className="pill">Part-time</span>
                </div>

                <div className="role-timeline">
                  {researchRoles.map((role, index) => (
                    <article className="role-entry" key={role.role}>
                      <div className="role-marker">
                        <span className="role-dot" />
                        {index < researchRoles.length - 1 ? <span className="role-line" /> : null}
                      </div>

                      <div className="role-content">
                        <div className="role-linehead">
                          <h3 className="role-title">{role.role}</h3>
                          <span className="role-period">{role.period}</span>
                        </div>

                        {index === 1 ? (
                          <p className="progress-note">Promoted from Data Analyst Research Intern</p>
                        ) : null}

                        <ul className="bullet-list">
                          {role.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  ))}
                </div>
              </article>
            );
          }

          return (
            <article className="panel panel--timeline" key={entry.role}>
              <div className="panel-media panel-media--wide">
                <img src={entry.image} alt={entry.imageAlt} />
              </div>

              <div className="panel-header">
                <div>
                  <h2>{entry.company}</h2>
                  <div className="role-linehead role-linehead--single">
                    <h3 className="role-title">{entry.role}</h3>
                    <span className="role-period">{entry.period}</span>
                  </div>
                </div>
                <span className="pill">{entry.pill}</span>
              </div>

              <ul className="bullet-list">
                {entry.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Experience;
