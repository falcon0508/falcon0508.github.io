const skillGroups = [
  {
    title: "Programming",
    items: ["Python", "Java", "C++", "C", "SQL", "R"],
  },
  {
    title: "Web Development",
    items: ["React", "Node.js", "JavaScript", "HTML", "CSS", "REST APIs"],
  },
  {
    title: "Data Science and AI",
    items: ["PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy"],
  },
  {
    title: "Tools",
    items: ["Git", "Docker", "Bash", "Unix", "CI/CD", "Streamlit", "Shiny"],
  },
  {
    title: "Big Data",
    items: ["Spark", "Kafka", "Hadoop", "Cassandra", "BigQuery"],
  },
  {
    title: "Languages",
    items: ["English", "Bahasa Indonesia", "Mandarin Chinese"],
  },
];

function Skills() {
  return (
    <section className="page page--split">
      <div className="page-intro">
        <p className="eyebrow">Skills</p>
        <h1>Tooling across software, data, and research</h1>
      </div>

      <div className="card-grid card-grid--three">
        {skillGroups.map((group) => (
          <article className="panel panel--tinted" key={group.title}>
            <h2>{group.title}</h2>
            <div className="chip-row">
              {group.items.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
