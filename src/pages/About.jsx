import { MapPin, GraduationCap, Code2, Heart, BriefcaseBusiness, Laptop, Star, Lightbulb, UserGroup, ChartSpline, Gem, X, Download } from "lucide-react";
import { useState } from "react";
function About() {
    const [showResume, setShowResume] = useState(false);
  return (
    <>
    <main className="about">
      <section className="about-intro">

        {/* Left: Portrait */}
        <div className="about-portrait">
          <div className="portrait-frame">
            <img src="/images/Portrait.jpg" alt="Rosario Perez Portrait" className="portrait-image"/>
          </div>
          <div className="portrait-terminal">
            &gt; Building
            <br />
            better solutions
          </div>
        </div>

        {/* Center: Introduction */}
        <div className="about-content">
          <span className="about-label">› ABOUT ME</span>

          <h1 className="about-title">
            Hi, I'm <span>Rose.</span>
          </h1>

          <h2 className="about-subtitle">
            Software Developer | Problem Solver | Lifelong Learner
          </h2>

          <p>
            I'm a software developer with a background
            in operations management and a passion for building
            functional, user-friendly applications.
          </p>

          <p>
            My journey into technology is driven by curiosity,
            creativity, and a desire to solve meaningful problems.
          </p>

          <div className="about-buttons">
            <a href="/projects" className="primary-button">
              Explore My Projects
            </a>

            <button
            type="button"
            className="secondary-button"
            onClick={() => setShowResume(true)}>View Resume</button>
          </div>
        </div>

        <aside className="about-facts">
  <h3>Quick Facts</h3>

  <div className="fact">
    <MapPin className="fact-icon" size={25} />
    <div>
      <strong>Location</strong>
      <p>McKinney, Texas.</p>
    </div>
  </div>

  <div className="fact">
    <GraduationCap className="fact-icon" size={25} />
    <div>
      <strong>Education</strong>
      <p>Ux/Ui Design and development at UT at Austin</p>
    </div>
  </div>

  <div className="fact">
    <Heart className="fact-icon" size={25} />
    <div>
      <strong>Interests</strong>
      <p>Coding, Design, Technology</p>
    </div>
  </div>
</aside>

      </section>
      <section className="about-journey">
  <div className="journey-heading">
    <span className="about-label">› MY JOURNEY</span>

    <h2>From Operations to Code</h2>

    <p>
      My career has always been about solving problems
      and improving systems — now I'm bringing that
      mindset to software development.
    </p>
  </div>

  <div className="journey-timeline">
    <div className="journey-step">
      <div className="journey-icon"><BriefcaseBusiness size={23} strokeWidth={1.5} /></div>
      <h3>Operations Management</h3>
      <p>
        Led teams and optimized processes
        in fast-paced environments.
      </p>
    </div>

    <div className="journey-step">
      <div className="journey-icon"><Laptop size={23} strokeWidth={1.5} /></div>
      <h3>UX/UI Design</h3>
      <p>
        Studied design principles and
        user-centered design.
      </p>
    </div>

    <div className="journey-step">
      <div className="journey-icon"><Code2 size={23} strokeWidth={1.5} /></div>
      <h3>Software Development</h3>
      <p>
        Built projects and expanded
        my technical skills.
      </p>
    </div>

    <div className="journey-step">
      <div className="journey-icon"><Star size={23} strokeWidth={1.5} /></div>
      <h3>My Next Chapter</h3>
      <p>
        Grow as a developer, contribute
        to meaningful projects, and keep learning.
      </p>
    </div>
  </div>
</section>
{/* SKILLS & VALUES SECTION */}
<section className="about-details">

  {/* LEFT CARD — MY SKILLS */}
  <div className="about-detail-card">
    <span className="about-label">› MY SKILLS</span>
    <h2>What I Bring to the Table</h2>
    <div className="skills-columns">

    <div className="skills-group">
      <h3>Frontend Development</h3>
      <div className="skill-tags">
        <span>HTML5</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>React</span>
      </div>
    </div>

    <div className="skills-group">
      <h3>Design & Tools</h3>
      <div className="skill-tags">
        <span>Figma</span>
        <span>Git</span>
        <span>GitHub</span>
        <span>VS Code</span>
      </div>
    </div>

    <div className="skills-group">
      <h3>Professional Skills</h3>
      <div className="skill-tags">
        <span>Leadership</span>
        <span>Problem Solving</span>
        <span>Team Collaboration</span>
        <span>Project Management</span>
      </div>
    </div>
    </div>
  </div>

  {/* RIGHT CARD — MY VALUES */}
  <div className="about-detail-card">
    <span className="about-label">› MY VALUES</span>
    <h2>What Drives Me</h2>
    <p className="values-description">
  I believe meaningful work starts with curiosity, grows through collaboration, and creates lasting impact.</p>

    <div className="value-item">
        <div className="value-icon"><Lightbulb size={30} strokeWidth={1.5} /></div>
      <h3>Curiosity</h3>
    </div>

    <div className="value-item">
        <div className="value-icon"><UserGroup size={30} strokeWidth={1.5} /></div>
      <h3>Collaboration</h3>
    </div>

    <div className="value-item">
        <div className="value-icon"><ChartSpline size={30} strokeWidth={1.5} /></div>
      <h3>Impact</h3>
    </div>
  </div>

</section>
    </main>
    {showResume && (
  <div
    className="resume-modal-overlay"
    onClick={() => setShowResume(false)}
  >
    <div
      className="resume-modal"
      role="dialog"
      aria-modal="true"
      aria-label="Resume preview"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header */}
      <div className="resume-modal-header">
        <div>
          <h2>My Resume</h2>
          <p>A closer look at my experience and skills.</p>
        </div>

        <button
          type="button"
          className="resume-modal-close"
          onClick={() => setShowResume(false)}
          aria-label="Close resume"
        >
          <X size={22} />
        </button>
      </div>

      {/* PDF Preview */}
      <div className="resume-modal-preview">
        <iframe
          src="/Rosario_Perez_Resume.pdf#toolbar=0"
          title="Rosario Perez Resume Preview"
          width="100%"
          height="100%"
          style={{ border: "none", display: "block" }}
        />
      </div>

      {/* Footer */}
      <div className="resume-modal-footer">
        <button
          type="button"
          className="resume-close-button"
          onClick={() => setShowResume(false)}
        >
          Close
        </button>

        <a
          href="/Rosario_Perez_Resume.pdf"
          download="Rosario_Perez_Resume.pdf"
          className="resume-download-button"
        >
          <Download size={18} />
          Download Resume
        </a>
      </div>
    </div>
  </div>
)}
</>
);
}


export default About;