const projects = [
  {
    title: "Financial Stock Analysis",
    stack: "Python, Flask, React, TensorFlow, Scikit-learn, REST APIs",
    image: "/project-stock-analysis.png",
    imageAlt: "Dashboard or chart view from the financial stock analysis project",
    url: "https://financial-stock-analysis.onrender.com/",
    bullets: [
      "Developed an LSTM model for stock price prediction",
      "Built a Flask API for live predictions",
      "Created an interactive React dashboard with stock charts",
      "Deployed the application online",
    ],
  },
  {
    title: "Strava Analyzer",
    stack: "Python, Scikit-learn, Streamlit, OAuth, Machine Learning",
    image: "/project-strava.png",
    imageAlt: "Analytics dashboard or activity visualization for the Strava Analyzer",
    url: "https://strava-analyzers.streamlit.app/",
    bullets: [
      "Built a Random Forest model to predict running pace",
      "Developed a Streamlit dashboard for activity analysis",
      "Integrated the Strava API with OAuth authentication",
      "Automated retrieval and visualization of workout data",
    ],
  },
  {
    title: "MiniSpark",
    stack: "C, Data Processing, Operating Systems, Concurrency",
    bullets: [
      "Built a simplified Spark-like data processing engine",
      "Implemented multithreaded task scheduling",
      "Used locks and condition variables for synchronization",
      "Executed parallel data processing workflows",
    ],
  },
  {
    title: "COVID-19 Mortality Analysis",
    stack: "R, Data Analysis, Data Visualization, Statistics",
    image: "/project-covid-analysis.png",
    imageAlt: "Data visualization or statistical chart from the COVID-19 analysis",
    bullets: [
      "Collected and cleaned COVID-19 datasets",
      "Compared mortality rates between prison and general populations",
      "Performed hypothesis testing",
      "Visualized findings using R",
    ],
  },
  {
    title: "Campus Route Seeking Program",
    stack: "Java, JavaFX, Algorithms",
    bullets: [
      "Implemented Dijkstra's shortest path algorithm",
      "Developed a graphical interface with JavaFX",
      "Connected frontend and backend into a complete application",
    ],
  },
];

function Projects() {
  return (
    <section className="page page--split">
      <div className="page-intro">
        <p className="eyebrow">Projects</p>
        <h1>Builds that show dedication</h1>
      </div>

      <div className="card-grid card-grid--two project-grid">
        {projects.map((project) => (
          <article className="panel panel--project" key={project.title}>
            <div className="panel-media panel-media--tall">
              <img src={project.image} alt={project.imageAlt} />
            </div>

            <div className="panel-header">
              <div>
                <h2>{project.title}</h2>
                <p className="panel-meta">{project.stack}</p>
                {project.url ? (
                  <a
                    className="project-link"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Link to live app
                  </a>
                ) : null}
              </div>
            </div>

            <ul className="bullet-list">
              {project.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
