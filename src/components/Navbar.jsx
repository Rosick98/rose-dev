function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar-logo">
                ROSE.DEV
            </div>
            <nav className="navbar-links">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/projects">Projects</a>
                <a href="/experience">Experience</a>
                <a href="/contact">Contact</a>
            </nav>
            
            <a href="/Rosario_Perez_Resume.pdf" className="resume-button" download="Rosario_Perez_Resume.pdf">
            Download Resume 
            </a>
        </header>
    );
}

export default Navbar;