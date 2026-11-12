function Home() {
    return (
        <main className="home">
            <section className="hero">
                <div className="hero-waves" aria-hidden="true">
                <svg
                viewBox="0 0 1200 800"
                preserveAspectRatio="xMidYMid slice"
                >
                    <path
                    d="M 200 850 C 650 820, 750 530, 950 380 C 1080 290, 1200 270"
                    className="wave-line wave-line-one"
                    />
                    <path
                    d="M 850 850 C 760 690, 820 480, 960 320 C 1050 220, 1300 160"
                    className="wave-line wave-line-two"
                    />
                </svg>
                </div>

                <div className="hero-content">
                    <span className="hero-badge">
                        Software Developer
                    </span>

                    <h1 className="hero-title">
                        Rose <span>Perez.</span>
                    </h1>

                    <p className="hero-description">
                        Building smart solutions through design, code, and problem solving.
                    </p>
                    <div className="hero-divider"></div>
                    <div className="hero-buttons">
                        <a href="/projects" className="primary-button">
                        View My Projects
                        </a>
                        <a href="/about" className="secondary-button">
                        About Me
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;