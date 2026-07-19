const coursework = [
  "Data Structures & Algorithms",
  "Data Science Modeling",
  "Operating Systems",
  "Artificial Intelligence",
  "Machine Learning",
  "Optimization",
  "Big Data",
  "Database Management",
  "Finance",
  "Risk Management",
];

function Education() {
  return (
    <section className="page page--split">
      <div className="page-intro">
        <p className="eyebrow">Education</p>
        <h1>Built on a strong technical foundation</h1>
      </div>

      <div className="content-stack">
        <article className="panel panel--highlight">
          <div className="panel-media panel-media--wide">
            <img
              src="/education-uw-madison.jpg"
              alt="University of Wisconsin-Madison campus or graduation image"
            />
          </div>

          <div className="panel-header">
            <div>
              <h2>University of Wisconsin-Madison</h2>
              <p className="panel-meta">B.S. Computer Science and Data Science</p>
            </div>
            <span className="pill">May 2026</span>
          </div>

          <div className="info-row">
            <span>GPA</span>
            <strong>3.93 / 4.00</strong>
          </div>
          <div className="info-row">
            <span>Certificate</span>
            <strong>Accounting Fundamentals</strong>
          </div>
          <div className="info-row">
            <span>Recognition</span>
            <strong>Dean's List every semester</strong>
          </div>
        </article>

        <article className="panel panel--tinted">
          <h3>Relevant Coursework</h3>
          <div className="chip-row chip-row--coursework">
            {coursework.map((item) => (
              <span className="chip" key={item}>
                {item}
              </span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

export default Education;
