function Hero() {
    return (
        <section className="hero">

            <img src="/profile.jpg" alt="Profile" />

            <h1>Dylan Ong</h1>

            <h3>
                Computer Science & Data Science Student
            </h3>

            <p>
                Interested in Software Engineering,
                Machine Learning,
                and Full Stack Development.
            </p>

            <div className="buttons">

                <a href="/CS_Resume_Dylan_Ong.pdf">
                    Resume
                </a>

                <a
                    href="https://github.com/falcon0508"
                    target="_blank"
                >
                    GitHub
                </a>

                <a
                    href="https://linkedin.com/in/felipedylanong"
                    target="_blank"
                >
                    LinkedIn
                </a>

            </div>

        </section>
    );
}

export default Hero;