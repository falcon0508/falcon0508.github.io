function Projects() {
    return (
        <section id="projects">
            <h2>Projects</h2>

            <div className="card">
                <h3>Rosenberg Autism App</h3>
                <h4>Python • SQLite • Kivy • REST APIs</h4>
                <p>
                    • Designed a multithreaded architecture for real-time eye tracking
                    <br />
                    • Integrated the Pupil Labs API to stream gaze data
                    <br />
                    • Built an interactive researcher interface with Kivy
                    <br />
                    • Stored experiment data using SQLite
                </p>
            </div>

            <div className="card">
                <h3>Financial Stock Analysis</h3>
                <h4>React • Flask • TensorFlow • Scikit-learn</h4>
                <p>
                    • Developed an LSTM model for stock price prediction
                    <br />
                    • Built a Flask API for live predictions
                    <br />
                    • Created an interactive React dashboard with stock charts
                    <br />
                    • Deployed the application online
                </p>
            </div>

            <div className="card">
                <h3>Strava Analyzer</h3>
                <h4>Python • Streamlit • OAuth • Machine Learning</h4>
                <p>
                    • Built a Random Forest model to predict running pace
                    <br />
                    • Developed a Streamlit dashboard for activity analysis
                    <br />
                    • Integrated the Strava API with OAuth authentication
                    <br />
                    • Automated retrieval and visualization of workout data
                </p>
            </div>

            <div className="card">
                <h3>MiniSpark</h3>
                <h4>C • Operating Systems • Concurrency</h4>
                <p>
                    • Built a simplified Spark-like data processing engine
                    <br />
                    • Implemented multithreaded task scheduling
                    <br />
                    • Used locks and condition variables for synchronization
                    <br />
                    • Executed parallel data processing workflows
                </p>
            </div>

            <div className="card">
                <h3>COVID-19 Mortality Analysis</h3>
                <h4>R • Data Analysis • Statistics</h4>
                <p>
                    • Collected and cleaned COVID-19 datasets
                    <br />
                    • Compared mortality rates between prison and general populations
                    <br />
                    • Performed hypothesis testing
                    <br />
                    • Visualized findings using R
                </p>
            </div>

            <div className="card">
                <h3>Campus Route Seeking Program</h3>
                <h4>Java • JavaFX • Algorithms</h4>
                <p>
                    • Implemented Dijkstra's shortest path algorithm
                    <br />
                    • Developed a graphical interface with JavaFX
                    <br />
                    • Connected frontend and backend into a complete application
                </p>
            </div>
        </section>
    );
}

export default Projects;